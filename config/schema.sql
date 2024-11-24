CREATE TABLE "USER" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    weight DECIMAL(5,2),
    height DECIMAL(5,2)
);

CREATE TABLE "EXERCISE" (
    user_id INT NOT NULL,
    id SERIAL NOT NULL,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    goal VARCHAR(255),
    PRIMARY KEY (user_id, id),
    CONSTRAINT fk_exercise_user FOREIGN KEY (user_id) REFERENCES "USER" (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE "ROUTINE" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE "USER_ROUTINE" (
    user_id INT NOT NULL,
    routine_id INT NOT NULL,
    PRIMARY KEY (user_id, routine_id),
    CONSTRAINT fk_user_routine_user FOREIGN KEY (user_id) REFERENCES "USER" (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_user_routine_routine FOREIGN KEY (routine_id) REFERENCES "ROUTINE" (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE "ROUTINE_EXERCISE" (
    routine_id INT NOT NULL,
    exercise_id INT NOT NULL,
    exercise_user_id INT NOT NULL,
    PRIMARY KEY (routine_id, exercise_id, exercise_user_id),
    CONSTRAINT fk_routine_exercise_routine FOREIGN KEY (routine_id) REFERENCES "ROUTINE" (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_routine_exercise_exercise FOREIGN KEY (exercise_id, exercise_user_id) REFERENCES "EXERCISE" (id, user_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE "EXERCISE_RECORD" (
    user_id INT NOT NULL,
    exercise_id INT NOT NULL,
    id SERIAL NOT NULL,
    session_date DATE NOT NULL,
    PRIMARY KEY (user_id, exercise_id, id),
    CONSTRAINT fk_exercise_record_user FOREIGN KEY (user_id) REFERENCES "USER" (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_exercise_record_exercise FOREIGN KEY (exercise_id, user_id) REFERENCES "EXERCISE" (id, user_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE "SET" (
    exercise_record_user_id INT NOT NULL,
    exercise_record_exercise_id INT NOT NULL,
    exercise_record_id INT NOT NULL,
    id SERIAL NOT NULL,
    set_time TIME NOT NULL,
    weight DECIMAL(5,2) NOT NULL,
    feeling VARCHAR(255),
    PRIMARY KEY (exercise_record_user_id, exercise_record_exercise_id, exercise_record_id, id),
    CONSTRAINT fk_set_exercise_record FOREIGN KEY (exercise_record_user_id, exercise_record_exercise_id, exercise_record_id)
        REFERENCES "EXERCISE_RECORD" (user_id, exercise_id, id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);