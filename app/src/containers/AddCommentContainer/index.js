import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import RichTextEditor from 'react-rte';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import update from 'react-addons-update';

class AddCommentContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: RichTextEditor.createEmptyValue(),
    };
  }
  handleChange(value) {
    this.setState({
      value,
    });
  }
  render() {
    const {
      value,
    } = this.state;
    const {
      singleProject,
      submitComment,
    } = this.props;
    return (
      <div className={styles.addComment}>
        <RichTextEditor
          onChange={this.handleChange}
          value={value}
          readOnly={false}
          placeholder="Start typing to add a comment"
          format="markdown"
          editorClassName={styles.addCommentEditor}
          toolbarClassName={styles.addCommentToolbar}
        />
      <Footer justify="end" style={{ marginTop: 10 }}>
        <Button
          label="Submit"
          onClick={() => submitComment(singleProject.id, value.toString('markdown'))}
        />
      </Footer>
      </div>
    );
  }
}

AddCommentContainer.propTypes = {
  mutate: PropTypes.func.isRequired,
  singleProject: PropTypes.object.isRequired,
  submitComment: PropTypes.func.isRequired,
};

const Container = cssModules(AddCommentContainer, styles);

const SUBMIT_COMMENT = gql`
mutation createComment( $projectId: ID!, $body: String!) {
  CreateComment(input:{ project_id: $projectId, body: $body }) {
    project {
      slug
    }
  }
}
`;

const ContainerWithMutations = graphql(SUBMIT_COMMENT, {
  props: ({ mutate }) => ({
    submitComment: (projectId, body) => mutate({
      variables: {
        projectId,
        body,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        submitComment: {
          __typename: 'Comment',
          id: null,
          body,
        },
      },
    }),
    updateQueries: {
      Comment: (previousResult, { mutationResult }) => {
        const newComment = mutationResult.data.CreateComment;
        return update(previousResult, {
          singleProject: {
            comments: {
              $unshift: [newComment],
            },
          },
        });
      },
    },
  }),
})(Container);

export default ContainerWithMutations;
