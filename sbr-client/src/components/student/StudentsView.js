import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentsView = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get('http://localhost:9192/students', {
      validateStatus: () => {
        return true;
      },
    });
    if (result.status === 200) {
      setStudents(result.data);
    }
  };
  return (
    <section>
      <table className='table table-bordered table-hover'>
        <thead>
          <tr className='text-center'>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Depatment</th>
            <th colSpan='3'>Actions</th>
          </tr>
        </thead>

        <tbody className='text-center'>
          {students((student, index) => (
            <tr key={student.id}>
              <th scope='row' key={index}>
                {index + 1}
              </th>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.deparment}</td>
              <td className='mx-2'>
                <button className='btn btn-info'>View</button>
              </td>
              <td className='mx-2'>
                <button className='btn btn-warning'>Update</button>
              </td>
              <td className='mx-2'>
                <button className='btn btn-danger'>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default StudentsView;
