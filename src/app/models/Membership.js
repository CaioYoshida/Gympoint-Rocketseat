import Sequelize, { Model } from 'sequelize';

class Membership extends Model {
  static init(connection) {
    super.init(
      {
        title: Sequelize.STRING,
        duration: Sequelize.INTEGER,
        price: Sequelize.FLOAT,
      },
      {
        sequelize: connection,
      }
    );

    return this;
  }
}

export default Membership;
