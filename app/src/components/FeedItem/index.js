import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Footer from 'grommet/components/Footer';
import ChatIcon from 'grommet/components/icons/base/Chat';
import { Link } from 'react-router';

const FeedItem = ({
  project,
}) => (
  <div className={styles.feedItem}>
    <Heading>
      {project.title}
    </Heading>
    <Paragraph>
      {project.description}
    </Paragraph>
    <Footer>
      <span className={styles.commentLinks}>
        <Link to={`/projects/${project.slug}`}>
          <ChatIcon size="small" />
          {project.comments.length}
        </Link>
      </span>
    </Footer>
  </div>
);

FeedItem.propTypes = {
  project: PropTypes.object.isRequired,
};

export default cssModules(FeedItem, styles);
