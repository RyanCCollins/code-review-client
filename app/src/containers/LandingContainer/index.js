import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LandingActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { LoadingIndicator, FeedItem } from 'components';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';

class LandingContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      loading,
      projectsFeed,
    } = this.props;
    return (
      <div className={styles.landing}>
        {loading ?
          <LoadingIndicator isLoading={loading} />
        :
          <Section>
            <Heading align="center">
              Welcome
            </Heading>
            <Box align="center" pad={{ horizontal: 'large', vertical: 'large' }}>
              {projectsFeed.map((item, i) =>
                <FeedItem key={i} project={item} />
              )}
            </Box>
          </Section>
        }
      </div>
    );
  }
}

LandingContainer.propTypes = {
  projectsFeed: PropTypes.array,
  loading: PropTypes.bool,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    LandingActionCreators,
    dispatch
  ),
});

const Container = cssModules(LandingContainer, styles);

const ITEMS_PER_PAGE = 10;
const PROJECT_FEED_QUERY = gql`
query getProjects($limit:Int){
  projectsFeed(limit:$limit) {
    id
    title
    description
    slug
    url
    comments {
      id
      body
    }
    user {
      id
      bio
      name
    }
  }
}
`;

const ContainerWithData = graphql(PROJECT_FEED_QUERY, {
  options() {
    return {
      variables: {
        limit: ITEMS_PER_PAGE,
      },
    };
  },
  props({ data: { loading, projectsFeed } }) {
    return {
      loading,
      projectsFeed,
    };
  },
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
