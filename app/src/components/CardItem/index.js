import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const CardItem = ({
  children,
}) => (
  <div className={styles.cardItem}>
    {children}
  </div>
);

CardItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default cssModules(CardItem, styles);
