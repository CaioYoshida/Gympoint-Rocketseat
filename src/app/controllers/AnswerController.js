import Student from '../models/Student';
import Help_order from '../models/Help_order';

import AnswerMail from '../jobs/AnswerMail';
import Queue from '../../lib/Queue';

class AnswerController {
  async store(req, res) {
    /**
     * Save Answer
     */

    const help_order = await Help_order.findByPk(req.params.id);

    const isStudent = await Student.findOne({
      where: {
        id: help_order.student_id,
      },
    });

    const { answer } = req.body;

    help_order.answer = answer;
    help_order.answer_at = new Date();

    await help_order.save();

    await Queue.add(AnswerMail.key, {
      isStudent,
      help_order,
    });

    return res.json(help_order);
  }
}

export default new AnswerController();
