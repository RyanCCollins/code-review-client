import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { SingleProjectContainer } from 'containers';

const SingleProjectPage = (props) => (
  <div className={styles.container}>
    <SingleProjectContainer {...props} />
  </div>
);

SingleProjectPage.propTypes = {
  params: PropTypes.object.isRequired,
};

export default cssModules(SingleProjectPage, styles);
