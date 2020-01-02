import Router from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import MembershipController from './app/controllers/MembershipControllers';
import EnrollmentController from './app/controllers/EnrollmentController';
import CheckinController from './app/controllers/CheckinController';
import Help_orderController from './app/controllers/Help_orderController';
import AnswerController from './app/controllers/AnswerController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/students/:id', StudentController.show);
routes.post('/students/:id/checkins', CheckinController.store);
routes.get('/students/:id/checkins', CheckinController.index);

routes.post('/students/:id/help-orders', Help_orderController.store);
routes.get('/students/:id/help-orders', Help_orderController.indexPerStudents);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/students', StudentController.index);
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);
routes.delete('/students/:id', StudentController.remove);

routes.get('/memberships', MembershipController.index);
routes.get('/memberships/:id', MembershipController.show);
routes.post('/memberships', MembershipController.store);
routes.put('/memberships/:id', MembershipController.update);
routes.delete('/memberships/:id', MembershipController.remove);

routes.get('/enrollments', EnrollmentController.index);
routes.get('/enrollments/:id', EnrollmentController.show);
routes.post('/enrollments', EnrollmentController.store);
routes.put('/enrollments/:id', EnrollmentController.update);
routes.delete('/enrollments/:id', EnrollmentController.remove);

routes.get('/help-orders', Help_orderController.index);
routes.put('/help-orders/:id/answer', AnswerController.store);

export default routes;
