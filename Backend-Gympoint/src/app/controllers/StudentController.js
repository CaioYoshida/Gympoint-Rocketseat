import * as Yup from 'yup';
import { Op } from 'sequelize';
import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const { name } = req.query;

    if (name) {
      const students = await Student.findAll({
        where: {
          name: {
            [Op.startsWith]: name,
          },
        },
      });

      return res.json(students);
    }

    const students = await Student.findAll();

    return res.json(students);
  }

  async show(req, res) {
    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res
        .status(400)
        .json({ error: 'There is no student with this ID' });
    }

    return res.json(student);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number()
        .integer()
        .positive(),
      heigth: Yup.number().positive(),
      weigth: Yup.number().positive(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id, name, email, age, weigth, heigth } = await Student.create(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      age,
      weigth,
      heigth,
    });
  }

  async update(req, res) {
    // Validation schema
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number()
        .integer()
        .positive(),
      heigth: Yup.number().positive(),
      weigth: Yup.number().positive(),
    });

    // Verifying schema
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email } = req.body;

    const student = await Student.findByPk(req.params.id);

    if (email !== student.email) {
      const userExists = await Student.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }

    const { id, name, age, weigth, heigth } = await student.update(req.body);

    return res.json({
      id,
      name,
      email,
      age,
      weigth,
      heigth,
    });
  }

  async remove(req, res) {
    await Student.destroy({ where: { id: req.params.id } });

    return res.json('Remove succeed');
  }
}

export default new StudentController();
