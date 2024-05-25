import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddStudent = () => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
  });
  const { firstName, lastName, email, department } = student;

  const handleInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const savaStudent = async () => {
    await axios.post('');
  };

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
            onChange={(e) => handleInputChange(e)}
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
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className='input-group mb-5'>
          <label className='input-group-text' htmlFor='email'>
            Email
          </label>
          <input
            className='form-controll col-sm-6'
            type='email'
            name='email'
            id='email'
            required
            value={email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className='input-group mb-5'>
          <label className='input-group-text' htmlFor='department'>
            Department
          </label>
          <input
            className='form-controll col-sm-6'
            type='text'
            name='department'
            id='department'
            required
            value={department}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className='col-sm-2'>
          <button type='submit' className='btn btn-outline-warning btn-lg'>
            Save
          </button>
        </div>
        <div className='col-sm-2'>
          <Link
            to={'/view-students'}
            type='submit'
            className='btn btn-outline-warning btn-lg'
          >
            Cancel
          </Link>
        </div>
      </from>
    </div>
  );
};

export default AddStudent;
