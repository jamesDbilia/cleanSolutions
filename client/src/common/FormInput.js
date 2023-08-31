import React from 'react';

const FormInput = (props) => {
  return (
    <div
      className={`${props.form}input--${props.name}`}
      style={{ marginBottom: props.helperText === '' ? '3.2rem' : '.5rem' }}
    >
      {props.name === 'message' || props.name === 'coverLetter' ? (
        <textarea
          className={` ${props.form}input ${props.form}input--textarea`}
          {...props}
        />
      ) : (
        <input type={'text'} className={` ${props.form}input`} {...props} />
      )}
      {props.helperText !== '' ? (
        <p
          className={`${props.form}form-error ${props.form}form-error--${props.name}`}
        >
          {props.helperText}
        </p>
      ) : (
        <p className='form-no-error'></p>
      )}
    </div>
  );
};

export default FormInput;
