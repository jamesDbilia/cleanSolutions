import React, { useEffect } from 'react';
import { Form, Formik, useField } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { submitEmail, resetContactFailure } from '../actions/EmailActions.js';
import FormInput from '../common/FormInput.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  // touched is clicked into field
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <FormInput
      {...field}
      placeholder={placeholder}
      helperText={errorText}
      error={!!errorText}
      form='contact-info__'
    />
  );
};

function ContactForm({
  submitEmail,

  email: { emailSuccess, emailFailure, contactRedirect },
}) {
  const ContactSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Please enter valid email address')
      .required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });
  useEffect(() => {
    emailFailure &&
      toast.error('Contact Form Was Not Sent !', {
        position: toast.POSITION.TOP_LEFT,
      });
  }, [emailFailure]);

  return (
    <>
      {contactRedirect && <Redirect to='/contactSuccess' />}

      <Formik
        initialValues={{ email: '', name: '', subject: '', message: '' }}
        onSubmit={(values) => {
          submitEmail(values);
        }}
        validationSchema={ContactSchema}
      >
        {() => (
          <Form>
            <div className='contact-info__form' id='contact-form'>
              <h2 className='contact-info__form-header'>Questions?</h2>
              <label className='contact-info__label contact-info__label--name'>
                Your Name &#42;
              </label>
              <MyTextField ariaLabel='name' name='name' type='text' />
              <label className='contact-info__label contact-info__label--email'>
                Email &#42;
              </label>
              <MyTextField
                id='email'
                name='email'
                type='email'
                ariaLabel='Email'
              />
              <label className='contact-info__label contact-info__label--subject'>
                Subject &#42;
              </label>
              <MyTextField ariaLabel='Subject' name='subject' type='text' />

              <label className='contact-info__label contact-info__label--message'>
                Message &#42;
              </label>
              <MyTextField
                id='message'
                name='message'
                type='text-box'
                ariaLabel='Message'
              />
              <button
                type='submit'
                text='Submit'
                className='contact-info__button'
              >
                Submit
              </button>
              <ToastContainer />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

const mapStateToProps = (state) => ({
  email: state.email,
});
export default connect(mapStateToProps, { submitEmail, resetContactFailure })(
  ContactForm
);
