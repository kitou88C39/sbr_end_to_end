import React, { useState } from 'react';

const StudentsView = () => {
  const [student, setStudent] = useState([]);
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
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default StudentsView;
