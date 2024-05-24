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
            <tr>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default StudentsView;
