package com.example.springboot.vo;

import lombok.Data;

/**
 * Value Object
 */
@Data
public class UserVO {
    int id;
    String username;
    String password;
    String firstName;
    String lastName;
    int age;
    int salary;
}
