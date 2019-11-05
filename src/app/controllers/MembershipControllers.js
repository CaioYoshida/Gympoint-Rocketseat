import * as Yup from 'yup';
import Membership from '../models/Membership';

class StudentController {
  async index(req, res) {
    const memberships = await Membership.findAll();

    return res.json(memberships);
  }

  async show(req, res) {
    const membership = await Membership.findByPk(req.params.id);

    return res.json(membership);
  }

  async store(req, res) {
    // Validation Schema
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number()
        .integer()
        .required()
        .positive(),
      price: Yup.number().positive(),
    });

    // Verifying Schema
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id, title, duration, price } = await Membership.create(req.body);

    return res.json({
      id,
      title,
      duration,
      price,
    });
  }

  async update(req, res) {
    // Validation schema
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number()
        .integer()
        .required()
        .positive(),
      price: Yup.number().positive(),
    });

    // Verifying schema
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const membership = await Membership.findByPk(req.params.id);

    const { id, title, duration, price } = await membership.update(req.body);

    return res.json({
      id,
      title,
      duration,
      price,
    });
  }

  async remove(req, res) {
    await Membership.destroy({ where: { id: req.params.id } });

    return res.json('Remove succeed');
  }
}

export default new StudentController();
