
DROP DATABASE IF EXISTS weight_a_minute;
CREATE DATABASE weight_a_minute;
USE weight_a_minute;

CREATE TABLE user_info (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (45),
    email VARCHAR (100), -- Is this how you store an email?
    password VARCHAR (30), -- Is this how you store a password?
    date_of_birth INT NOT NULL, -- Needs to be a date. 
    kg_db VARCHAR (2) -- Want this to be a 'this or that'
    );

CREATE TABLE exercise_bank (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    exercise_name VARCHAR (100),
    exercise_icon INT NOT NULL -- Need a library of images
);

CREATE TABLE workout_record (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT, -- Needs to link to the user
    workout_length INT NOT NULL, -- Code to write length of total workout
    workout_date INT NOT NULL -- Needs to be a date
);

CREATE TABLE exercise_record (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sets INT NOT NULL, -- Want to be a number 0-5 only (maybe (5))
    exercise_id INT NOT NULL,
    workout_id INT NOT NULL,
    unit VARCHAR(2), -- Either kg or lbs
    reps_1 INT,
    reps_2 INT,
    reps_3 INT,
    reps_4 INT,
    reps_5 INT,
    weight_1 INT,
    weight_2 INT,
    weight_3 INT,
    weight_4 INT,
    weight_5 INT
);
