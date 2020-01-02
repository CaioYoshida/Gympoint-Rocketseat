import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class AnswerMail {
  get key() {
    return 'AnswerMail';
  }

  async handle({ data }) {
    const { isStudent, help_order } = data;

    console.log(isStudent.name);

    await Mail.sendMail({
      to: `${isStudent.name} <${isStudent.email}>`,
      subject: 'Resposta à sua pergunta',
      template: 'answer',
      context: {
        student_name: isStudent.name,
        question: help_order.question,
        created_at: format(
          parseISO(help_order.createdAt),
          "dd 'de' MMMM 'de' yyyy",
          { locale: pt }
        ),
        answer: help_order.answer,
        answer_at: format(
          parseISO(help_order.answer_at),
          "dd 'de' MMMM 'de' yyyy",
          { locale: pt }
        ),
      },
    });
  }
}

export default new AnswerMail();
