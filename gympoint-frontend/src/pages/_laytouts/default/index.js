import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header/index';

import { Container } from './styles';

export default function Default({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

Default.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Default.defaultProps = {
  children: null,
};
