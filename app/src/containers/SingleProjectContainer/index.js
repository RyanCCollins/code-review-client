import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SingleProjectActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { LoadingIndicator, CardItem, UserInfo } from 'components';
import { AddCommentContainer } from 'containers';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';
import Paragraph from 'grommet/components/Paragraph';
import Markdown from 'grommet/components/Markdown';
import moment from 'moment';

class SingleProject extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleSubmission = this.handleSubmission.bind(this);
  }
  handleSubmission(value) {
    console.log(`Called handle submission callback with ${JSON.stringify(value, null)}`)
  }
  render() {
    const {
      loading,
      singleProject,
    } = this.props;
    return (
      <div className={styles.singleProject}>
        {loading ?
          <LoadingIndicator isLoading={loading} />
        :
          <Section>
            <Box
              align="center"
              pad={{ horizontal: 'large', vertical: 'large' }}
            >
              <CardItem>
                <Heading>
                  {singleProject.title}
                </Heading>
                <Paragraph>
                  {singleProject.description}
                </Paragraph>
                <Markdown content={singleProject.body} />
              </CardItem>
            </Box>
            <Box
              align="center"
              pad={{ horizontal: 'large', vertical: 'large' }}
            >
              <AddCommentContainer
                singleProject={singleProject}
              />
            </Box>
            <Box
              align="center"
              pad={{ horizontal: 'large', vertical: 'large' }}
            >
              {singleProject.comments
                .sort((a, b) => new Date(b.created) - new Date(a.created))
                .map((comment, i) =>
                <CardItem key={i}>
                  <Box
                    align="start"
                    pad={{ horizontal: 'medium', vertical: 'medium' }}
                    className={styles.commentBox}
                  >
                    <Markdown content={comment.body} />
                    <Footer
                      justify="end"
                      align="end"
                      wrap={false}
                    >
                      <Box
                        direction="column"
                        justify="start"
                        align="center"
                      >
                        <UserInfo user={comment.user} />
                        <span>
                          {moment(comment.created).calendar()}
                        </span>
                      </Box>
                    </Footer>
                  </Box>
                </CardItem>
              )}
            </Box>
          </Section>
        }
      </div>
    );
  }
}

SingleProject.propTypes = {
  params: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  singleProject: PropTypes.object,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    SingleProjectActionCreators,
    dispatch
  ),
});

const Container = cssModules(SingleProject, styles);

const SINGLE_PROJECT_QUERY = gql`
query getProjectBySlug($slug: String!) {
  singleProject(slug: $slug) {
    id
    title
    description
    url
    slug
    body
    comments {
      id
      body
      created: created_at
      user {
        name
        bio
        avatar
      }
    }
  }
}
`;

const ContainerWithData = graphql(SINGLE_PROJECT_QUERY, {
  options(props) {
    return {
      variables: {
        slug: props.params.project_slug,
      },
    };
  },
  props({ data: { loading, singleProject } }) {
    return {
      loading,
      singleProject,
    };
  },
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
