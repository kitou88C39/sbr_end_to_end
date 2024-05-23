package com.dailycodework.sbrdemo.service;

import org.springframework.stereotype.Service;

import com.dailycodework.sbrdemo.model.Student;
import com.dailycodework.sbrdemo.repository.StudentRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StudentService implements IStudentService {
    private final StudentRepository studentRepository;

    @Override
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student addStudent(Student student) {
        if (studentAlreadyExists(student.getEmail())){
            throw new StudentAlreadyExistsException(student.getEmail()+"already exsits!")
        }
            return studentRepository.save(student);
    }

    @Override
    public Student updateStudent(Student student, Long id) {
        return null;
    }

    private boolean studentAlreadyExists(String email) {
        return studentRepository.findByEmail(email).isPresent();
    }
}