import React from 'react';

const AddStudent = () => {
  return (
    <div className='col-sm-8 py-2 px-5'>
      <from>
        <div className='input-group mb-5'>
          <label className='input-group-text' htmlFor='FirstName'>
            First Name
          </label>
          <input
            className='form-controll col-sm-6'
            type='text'
            name='firstName'
            id='firstName'
            required
            value={firstName}
          />
        </div>

        <div className='input-group mb-5'>
          <label className='input-group-text' htmlFor='lastName'>
            Last Name
          </label>
          <input
            className='form-controll col-sm-6'
            type='text'
            name='lastName'
            id='lastName'
            required
            value={lastName}
          />
        </div>

        <div className='input-group mb-5'>
          <label className='input-group-text' htmlFor='lastName'>
            Last Name
          </label>
          <input
            className='form-controll col-sm-6'
            type='text'
            name='lastName'
            id='lastName'
            required
            value={lastName}
          />
        </div>
      </from>
    </div>
  );
};

export default AddStudent;
