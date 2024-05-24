package com.dailycodework.sbrdemo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class CustomExceptionHandler {

    @ResponseStatus(HttpStatus.BAD_REQUEST)@ExceptionHandler(MethodExceptionHandler.class){

    public Map<String, String> handleException(MethodArgumentNotValidException.ex)
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult()BindingResult
        .getFieldErrors()List<FikdError>
        .forEach(error -> errors.put(error.getFild(), error.getDefaultMessage()));
        return errors;
    }

}
