import React, { useState } from 'react';

const StudentsView = () => {
  const [students, setStudents] = useState([]);
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Depatment</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students((student, index) => (
            <tr key={student.id}>
              <th scope='row' key={index}>
                {index + 1}
              </th>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.deparment}</td>
              <td>View</td>
              <td>Update</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default StudentsView;
