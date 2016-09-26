import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import AvatarMissing from './missing_large.png';

const UserInfo = ({
  user,
}) => (
  <div className={styles.userInfo}>
    <img
      src={user.avatar ? user.avatar : AvatarMissing}
      className={styles.avatarImg}
      alt={`${user.name} avatar`}
    />
    <div className={styles.userInfo}>
      {user.name}
    </div>
  </div>
);

UserInfo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }),
};

export default cssModules(UserInfo, styles);
