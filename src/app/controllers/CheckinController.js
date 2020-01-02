import { isBefore, subDays } from 'date-fns';
import { Op } from 'sequelize';
import Student from '../models/Student';
import Enrollment from '../models/Enrollment';
import Checkin from '../models/Checkin';

class CheckinController {
  async index(req, res) {
    const student_id = req.params.id;

    const checkins = await Checkin.findAll({
      where: {
        student_id,
      },
    });

    return res.json(checkins);
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
     * Check-in validation
     */

    const checkinDate = new Date();

    const { end_date } = await Enrollment.findOne({
      where: {
        student_id: isStudent.id,
      },
    });

    if (!end_date) {
      return res.status(400).json({ error: 'There is no enrollment attached' });
    }

    const checkinAvailable = isBefore(checkinDate, end_date);

    if (!checkinAvailable) {
      return res.status(400).json({ error: 'Your enrollment is expirated' });
    }

    /**
     * Number of check-ins
     */

    const lastsCheckins = await Checkin.count({
      where: {
        createdAt: {
          [Op.between]: [subDays(checkinDate, 7), checkinDate],
        },
      },
    });

    if (lastsCheckins >= 5) {
      return res.status(400).json({
        error: 'You`ve checked in more than five times on the last seven days',
      });
    }

    /**
     * Save check-in on database
     */

    const checkin = await Checkin.create({
      student_id: isStudent.id,
    });

    return res.json(checkin);
  }
}

export default new CheckinController();
