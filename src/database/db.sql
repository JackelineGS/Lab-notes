CREATE DATABASE tasksdb

CREATE TABLE task(
    id SERIAL PRIMARY KEY, 
    title VARCHAR(255) UNIQUE, 
    description VARCHAR(255) 
);

CREATE TABLE people(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) UNIQUE,
    role VARCHAR(255)
)
