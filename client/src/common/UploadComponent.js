import React from 'react';
import { useDropzone } from 'react-dropzone';

const UploadComponent = ({ setFieldValue, values, error }) => {
  const setValue = () => {};
  const { getRootProps, getInputProps } = useDropzone({
    acceptedFiles: '.pdf .doc .docx',
    maxFiles: 3,
    maxFilesize: 10,
    onDrop: (acceptedFiles) => {
      setFieldValue('files', values.files.concat(acceptedFiles));
    },
  });
  return (
    <div className='application-upload'>
      <label className='application-upload__label'>
        Upload Resume and Cover Letter &#42;
      </label>

      <div
        onClick={() => setValue}
        className={
          values.files.length < 5
            ? 'application-upload__section'
            : 'application-upload__section--disabled'
        }
        {...getRootProps({})}
      >
        <input {...getInputProps()} />
        <p className='application-upload__text'>Browse or Drop Files Here...</p>
      </div>
      {error.files !== undefined ? (
        <p className={`application__form-error application__form-error--file`}>
          {error.files}
        </p>
      ) : (
        <p className='form-no-error'></p>
      )}
    </div>
  );
};

export default UploadComponent;
