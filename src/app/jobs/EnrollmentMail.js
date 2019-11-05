import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class EnrollmentMail {
  get key() {
    return 'EnrollmentMail';
  }

  async handle({ data }) {
    const { isStudent, isMembership, enrollment } = data;

    console.log('A fila executou');

    await Mail.sendMail({
      to: `${isStudent.name} <${isStudent.email}>`,
      subject: 'Bem vindo ao Gympoint',
      template: 'enrollmentConfirmation',
      context: {
        student_name: isStudent.name,
        enrollment: enrollment.id,
        membership_title: isMembership.title,
        membership_duration: isMembership.duration,
        membership_price: isMembership.price,
        enrollment_start_date: format(
          parseISO(enrollment.start_date),
          "dd 'de' MMMM 'de' yyyy",
          { locale: pt }
        ),
        enrollment_end_date: format(
          parseISO(enrollment.end_date),
          "dd 'de' MMMM 'de' yyyy",
          { locale: pt }
        ),
      },
    });
  }
}

export default new EnrollmentMail();
