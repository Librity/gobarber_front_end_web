import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function AuthenticatedLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

AuthenticatedLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
