import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function auth({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

auth.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

auth.defaultProps = {
  children: null,
};
