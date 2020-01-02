import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(connection) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.INTEGER,
        heigth: Sequelize.FLOAT,
        weigth: Sequelize.FLOAT,
      },
      {
        sequelize: connection,
      }
    );

    return this;
  }
}

export default Student;
