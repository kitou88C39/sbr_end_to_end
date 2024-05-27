import React, { useState, useNavigate } from 'react';

const StudentProfile = () => {
  let navigate = useNavigate();
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
  });

  return (
    <section style={{ backgroudColor: 'whitesmoke' }}>
      <div className='container py-5'>
        <div className='row'>
          < className='col-lg-3'>
            <div className='card mb-4'>
              <d className='card-body text-center'>
                <img
                  src='https://mdbcdn.b-cdn.net/img/Photos/new-template'
                  alt='avatar'
                  className='rounded-circle img-fluid'
                  style={{ width: 150 }}
                />

                <div className='col-sm-9'>
                  <p className='text-muted mb-0'>{student.firstName}</p>
                </div>

                <div className='row'>
                  <div className='col-sm-3'>
                    <h5 className='mb-0'>Last Name</h5>
                  </div>
                </div>


                <div className='col-sm-9'>
                  <p className='text-muted mb-0'>{student.lastName}</p>
                </div>
                </div>
                <hr/>


                <div className='row'>
                  <div className='col-sm-3'>
                    <h5 className='mb-0'>Email</h5>
                  </div>
                </div>
                <div className='col-sm-9'>
                  <p className='text-muted mb-0'>{student.email}</p>
                </div>

                <hr/>

                <div className='row'>
                  <div className='col-sm-9'>
                    <h5 className='mb-0'>Department</h5>
                  </div>
                </div>

                <div className='col-sm-9'>
                  <p className='text-muted mb-0'>{student.department}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentProfile;
