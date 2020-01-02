import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Enrollment from '../pages/Enrollment/List/index';
import EnrollmentForm from '../pages/Enrollment/Form/form';

import Help_Order from '../pages/Help_Order/index';

import Membership from '../pages/Membership/List/index';
import MembershipForm from '../pages/Membership/Form/form';

import SignIn from '../pages/SignIn/index';

import Student from '../pages/Student/List/index';
import StudentForm from '../pages/Student/Form/form';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/enrollments" exact component={Enrollment} isPrivate />
      <Route
        path="/enrollments/add"
        exact
        component={EnrollmentForm}
        isPrivate
      />
      <Route
        path="/enrollments/:id"
        exact
        component={EnrollmentForm}
        isPrivate
      />

      <Route path="/help_orders" exact component={Help_Order} isPrivate />

      <Route path="/memberships" exact component={Membership} isPrivate />
      <Route
        path="/memberships/add"
        exact
        component={MembershipForm}
        isPrivate
      />
      <Route
        path="/memberships/:id"
        exact
        component={MembershipForm}
        isPrivate
      />

      <Route path="/students" exact component={Student} isPrivate />
      <Route path="/students/add" exact component={StudentForm} isPrivate />
      <Route path="/students/:id" exact component={StudentForm} isPrivate />
    </Switch>
  );
}
