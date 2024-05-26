import React from 'react';

const StudentProfile = () => {
  return;
  <section>
    <table className='table table-bordered table-hover shadow'>
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
              <Link
                to={`/student-profile/${student.id}`}
                className='btn btn-info'
              >
                <FaEye />
              </Link>
            </td>
            <td className='mx-2'>
              <Link
                to={`/edit-student/${student.id}`}
                className='btn btn-warning'
              >
                <FaEdit />
              </Link>
            </td>
            <td className='mx-2'>
              <button
                className='btn btn-danger'
                onChange={() => handleDelete(student.id)}
              >
                <FaTrashAlt />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>;
};

export default StudentProfile;
