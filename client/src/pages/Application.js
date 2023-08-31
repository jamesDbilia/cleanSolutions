import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import FormInput from '../common/FormInput.js';
import UploadComponent from '../common/UploadComponent';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { submitApplication } from '../actions/EmailActions.js';
import { Redirect } from 'react-router-dom';
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
      form='application__'
    />
  );
};

function ApplicationForm({
  submitApplication,
  email: { applicationFailure, applicationRedirect },
}) {
  const ApplicationSchema = Yup.object({
    name: Yup.string().required('Name is required').max(100),
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Email is required')
      .max(100),
    position: Yup.string().required('Position is required').max(100),
    files: Yup.array().max(5, 'Maximum 5 files uploaded exceeded'),
  });
  useEffect(() => {
    applicationFailure &&
      toast.error(' Application Was Not Sent, Please Try Again!', {
        position: toast.POSITION.TOP_LEFT,
      });
  }, [applicationFailure]);

  return (
    <>
      {applicationRedirect && <Redirect to='/applicationSuccess' />}
      <Formik
        initialValues={{
          name: '',
          email: '',
          position: '',
          coverLetter: '',
          files: [],
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          submitApplication(values);
          setSubmitting(false);
          console.log(values);
        }}
        validationSchema={ApplicationSchema}
      >
        {({ values, errors, setFieldValue }) => (
          <Form>
            <div className='application__form' id='application'>
              {/* eslint-disable-next-line */}
              <a className='popup__close' href='#'>
                &times;
              </a>
              <h2 className='application__form-header'>Please Apply Below</h2>
              <p className='application__form--description'>
                Please specify which job you are applying for and attach your
                resume and cover letter for submission. Cover letters can also
                be created in the body below
              </p>
              <label className='application__label application__label--name'>
                Your Name &#42;
              </label>
              <MyTextField
                placeholder='name'
                name='name'
                type='input'
                as={FormInput}
              />
              <MyTextField
                placeholder='Name'
                name='name'
                type='input'
                as={FormInput}
              />

              <label className='application__label application__label--email'>
                Email &#42;
              </label>
              <MyTextField
                placeholder='Email'
                name='email'
                type='input'
                as={FormInput}
              />
              <label className='application__label application__label--position'>
                Position&#42;
              </label>
              <MyTextField
                placeholder='Job Position'
                name='position'
                type='input'
                as={FormInput}
              />
              <label className='application__label application__label--coverLetter'>
                Cover Letter &#42;
              </label>
              <MyTextField
                placeholder='Please attach cover letter below or enter cover letter here'
                name='coverLetter'
                type='input'
                as={FormInput}
              />

              <UploadComponent
                setFieldValue={setFieldValue}
                error={errors}
                values={values}
              />
              <div className='application__file-container'>
                {values.files &&
                  values.files.map((file, i) => (
                    <div className='application__file-row'>
                      <li
                        className={`application__file-name application__file-name--${
                          i + 1
                        }`}
                        key={i}
                      >
                        {`File: ${file.name}`}
                      </li>
                      <button
                        onClick={() => values.files.splice(i, 1)}
                        className={`application__delete-file application__delete-file--${
                          i + 1
                        }`}
                      >
                        X
                      </button>
                    </div>
                  ))}
              </div>

              <button
                type='submit'
                text='Submit'
                className='application__button'
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

export default connect(mapStateToProps, { submitApplication })(ApplicationForm);
