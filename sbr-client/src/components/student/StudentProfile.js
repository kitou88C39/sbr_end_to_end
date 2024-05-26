import React, { useState } from 'react';

const [student, setStudent] = useState([]);

const StudentProfile = () => {
  return (
    <section style={{ backgroudColor: 'whitesmoke' }}>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-lg-3'>
            <div className='card mb-4'>
              <div className='card-body text-center'>
                <img
                  src='https://mdbcdn.b-cdn.net/img/Photos/new-template'
                  alt='avatar'
                  className='rounded-circle img-fluid'
                  style={{ width: 150 }}
                />

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
