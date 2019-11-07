import Help_order from '../models/Help_order';
import Student from '../models/Student';

class Help_orderController {
  async index(req, res) {
    const student_id = req.params.id;

    const help_orders = await Help_order.findAll({
      where: {
        student_id,
      },
    });

    return res.json(help_orders);
  }

  async store(req, res) {
    /**
     * Student's validation
     */

    const isStudent = await Student.findByPk(req.params.id);

    if (!isStudent) {
      return res.status(400).json({ error: 'You are not a registered user' });
    }

    /**
     * Save help_order
     */
    const { question } = req.body;

    const help_order = await Help_order.create({
      student_id: isStudent.id,
      question,
    });

    return res.json(help_order);
  }
}

export default new Help_orderController();
