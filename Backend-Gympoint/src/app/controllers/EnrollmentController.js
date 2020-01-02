import * as Yup from 'yup';
import { addMonths, parseISO } from 'date-fns';

import Student from '../models/Student';
import Membership from '../models/Membership';
import Enrollment from '../models/Enrollment';

import EnrollmentMail from '../jobs/EnrollmentMail';
import Queue from '../../lib/Queue';

class EnrollmentController {
  async index(req, res) {
    const enrollments = await Enrollment.findAll({
      attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: Membership,
          as: 'membership',
          attributes: ['id', 'title', 'duration', 'price'],
        },
      ],
    });

    return res.json(enrollments);
  }

  async show(req, res) {
    const enrollment = await Enrollment.findOne({
      where: { id: req.params.id },
      attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: Membership,
          as: 'membership',
          attributes: ['id', 'title', 'duration', 'price'],
        },
      ],
    });

    return res.json(enrollment);
  }

  async store(req, res) {
    const { student_id } = req.body;
    const { membership_id } = req.body;

    /**
     * Schema Validation
     */

    const schema = Yup.object().shape({
      student_id: Yup.number()
        .integer()
        .positive()
        .required(),
      membership_id: Yup.number()
        .integer()
        .positive()
        .required(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    /**
     * Student's validation
     */

    const isStudent = await Student.findByPk(student_id);

    if (!isStudent) {
      return res.status(400).json({ error: 'This student do not exists' });
    }

    /**
     * Membership's validation
     */

    const isMembership = await Membership.findByPk(membership_id);

    if (!isMembership) {
      return res.status(400).json({ error: 'This is not a valid membership' });
    }

    /**
     * Variables' manipulations
     */

    const start_date = parseISO(req.body.start_date);
    const { duration, price } = isMembership;
    const end_date = addMonths(start_date, duration);

    const total_price = price * duration;

    /**
     * Creating an enrollment
     */

    const enrollment = await Enrollment.create({
      student_id: isStudent.id,
      membership_id: isMembership.id,
      start_date,
      end_date,
      price: total_price,
    });

    await Queue.add(EnrollmentMail.key, {
      enrollment,
      isStudent,
      isMembership,
    });

    return res.json(enrollment);
  }

  async update(req, res) {
    const { id } = req.params;

    /**
     * Schema Validation
     */

    const schema = Yup.object().shape({
      student_id: Yup.number()
        .integer()
        .positive()
        .required(),
      membership_id: Yup.number()
        .integer()
        .positive()
        .required(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    /**
     * Student and Membership's Validation
     */

    const enrollment = await Enrollment.findByPk(id);

    const isStudent = await Student.findByPk(enrollment.student_id);

    if (!isStudent) {
      return res.status(400).json({ error: 'This student do not exists' });
    }

    const isMembership = await Membership.findByPk(enrollment.membership_id);

    if (!isMembership) {
      return res.status(400).json({ error: 'This is not a valid membership' });
    }

    /**
     * Updating enrollment
     */

    const start_date = parseISO(req.body.start_date);
    const { duration, price } = isMembership;
    const end_date = addMonths(start_date, duration);

    const total_price = price * duration;

    const enrollment_updated = await enrollment.update({
      student_id: isStudent.id,
      membership_id: isMembership.id,
      start_date,
      end_date,
      price: total_price,
    });

    return res.json(enrollment_updated);
  }

  async remove(req, res) {
    await Enrollment.destroy({ where: { id: req.params.id } });

    return res.json('Remove Succeed');
  }
}

export default new EnrollmentController();
