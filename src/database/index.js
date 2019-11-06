import Sequelize from 'sequelize';

import User from '../app/models/User';
import Student from '../app/models/Student';
import Membership from '../app/models/Membership';
import Enrollment from '../app/models/Enrollment';
import Checkin from '../app/models/Checkin';

import databaseConfig from '../config/database';

const models = [User, Student, Membership, Enrollment, Checkin];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(
      // First, we verify if exists model.associate on the model
      // And then, if exists, we call model.associate function
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
