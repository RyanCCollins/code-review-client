import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Form from 'grommet/components/Form';
import Heading from 'grommet/components/Heading';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

const SignupForm = ({
  onSubmit,
  nameInput,
  emailInput,
  passwordInput,
  passwordConfirmationInput,
}) => (
  <Box size="medium" className={styles.signupForm}>
    <Form>
      <Heading strong align="center">
        Code Reviewer
      </Heading>
      <Heading align="center" tag="h5">
        Signup
      </Heading>
      <FormFields>
        <FormField
          help="What should we call you?"
          error={nameInput.touched && nameInput.error ? nameInput.error : null}
          label="Name"
          htmlFor="nameInput"
        >
          <input {...nameInput} id="nameInput" type="text" />
        </FormField>
        <FormField
          help="How should we get in touch with you?"
          error={emailInput.touched && emailInput.error ? emailInput.error : null}
          label="Email"
        >
          <input {...emailInput} id="emailInput" type="email" />
        </FormField>
        <FormField
          help="Make it secured"
          error={passwordInput.touched && passwordInput.error ? passwordInput.error : null}
          label="Password"
        >
          <input {...passwordInput} id="passwordInput" type="password" />
        </FormField>
        <FormField
          help="Make it secured"
          label="Password Confirmation"
          error={
            passwordConfirmationInput.touched
              && passwordConfirmationInput.error ?
                passwordConfirmationInput.error : null
            }
        >
          <input {...passwordConfirmationInput} id="passwordConfirmationInput" type="password" />
        </FormField>
      </FormFields>
      <Footer pad={{ vertical: 'medium' }} align="center">
        <Button onClick={onSubmit} fill label="Submit" primary />
      </Footer>
    </Form>
  </Box>
);

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default cssModules(SignupForm, styles);
