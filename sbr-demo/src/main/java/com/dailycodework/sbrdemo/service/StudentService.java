package com.dailycodework.sbrdemo.service;

import org.springframework.stereotype.Service;

import com.dailycodework.sbrdemo.model.Student;
import com.dailycodework.sbrdemo.repository.StudentRrepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StudentService implements IStudentService {
    private final StudentRrepository studentRrepository;

    @Override
    public List<Student> getStudents() {
        return studentRrepository.findAll();
    }

    @Override
    public Student addStudent(Student student) {
        if (studentAlreadyExist(student.getDepartment())){
            throw new StudentAlreadyExistsException(student.getEmail()+"already exsits!")
        }
            return studentRrepository.save(student);
    }

    @Override
    public void deleteStudent(Long id) {
    }

    @Override
    public Student updateStudent(Student student, Long id) {
        return null;
    }

}

private boolean studentAlreadyExists(String email) {
return studentRrepository.findByEmail(email);
}
