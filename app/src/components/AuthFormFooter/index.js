import React, { PropTypes } from 'react';
import Footer from 'grommet/components/Footer';
import Anchor from 'grommet/components/Anchor';

const AuthFormFooter = ({
  link,
  text,
}) => (
  <Footer align="center" justify="center">
    <span>{`${text}`}{'  '}</span>
    <Anchor href={link}>
      {`${link.charAt(1).toUpperCase()}${link.slice(2)}`}
    </Anchor>
  </Footer>
);

AuthFormFooter.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default AuthFormFooter;
