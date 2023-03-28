DROP SCHEMA genius_gym IF EXISTS;

CREATE SCHEMA genius_gym;

USE genius_gym;

CREATE TABLE Exercises (
    id int(11) NOT NULL,
    name varchar(255) DEFAULT NULL,
    description varchar(255) DEFAULT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE
    Users (
        id int(11) NOT NULL AUTO_INCREMENT,
        firstName varchar(255) DEFAULT NULL,
        lastName varchar(255) DEFAULT NULL,
        email varchar(255) DEFAULT NULL,
        password varchar(255) DEFAULT NULL,
        trainingType varchar(255) DEFAULT NULL,
        PRIMARY KEY (id)
    );

CREATE TABLE
    Workouts (
        id int(11) NOT NULL AUTO_INCREMENT,
        name varchar(255) DEFAULT NULL,
        description varchar(255) DEFAULT NULL,
        category varchar(255) DEFAULT NULL,
        isCustom tinyint(1) DEFAULT NULL,
        PRIMARY KEY (id)
    );

CREATE TABLE
    Workout_Exercises (
        nbReps int(11) DEFAULT NULL,
        nbSets int(11) DEFAULT NULL,
        WorkoutId int(11) NOT NULL,
        ExerciseId int(11) NOT NULL,
        PRIMARY KEY (WorkoutId, ExerciseId),
        KEY ExerciseId (ExerciseId),
        CONSTRAINT Workout_Exercises_ibfk_1 FOREIGN KEY (WorkoutId) REFERENCES Workouts (id) ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT Workout_Exercises_ibfk_2 FOREIGN KEY (ExerciseId) REFERENCES Exercises (id) ON DELETE CASCADE ON UPDATE CASCADE
    );

CREATE TABLE
    Users_Workouts (
        UserId int(11) NOT NULL,
        WorkoutId int(11) NOT NULL,
        PRIMARY KEY (UserId, WorkoutId),
        KEY WorkoutId (WorkoutId),
        CONSTRAINT Users_Workouts_ibfk_1 FOREIGN KEY (UserId) REFERENCES Users (id) ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT Users_Workouts_ibfk_2 FOREIGN KEY (WorkoutId) REFERENCES Workouts (id) ON DELETE CASCADE ON UPDATE CASCADE
    );

-- Data Dump

INSERT INTO
    Workouts (
        id,
        name,
        description,
        category,
        isCustom
    )
VALUES (
        1,
        'Steelback',
        'Workout made for your back',
        'Weight Training',
        False
    );

INSERT INTO
    Exercises (id, name, description)
VALUES (
        1,
        'rowing',
        'To pull a bar or dumbbells towards the chest while keeping the back straight'
    );

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (12, 4, 1, 1);

INSERT INTO
    Exercises (id, name, description)
VALUES (
        2,
        'pull-down',
        'To pull a bar downwards while keeping the arms straight, while sitting on a vertical pulling machine'
    );

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (12, 4, 1, 2);

INSERT INTO
    Exercises (id, name, description)
VALUES (
        3,
        'T-Bar',
        'To stand with a bar attached to a pivot, lift the bar off the ground, and pull it towards the chest while maintaining good posture'
    );

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (12, 3, 1, 3);

INSERT INTO
    Exercises (id, name, description)
VALUES (
        4,
        'seated cable row',
        'To pull a bar attached to a cable machine while seated on a bench or seat with bent legs and feet on footrests'
    );

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (12, 3, 1, 4);

INSERT INTO
    Workouts (
        id,
        name,
        description,
        category,
        isCustom
    )
VALUES (
        2,
        "Baki's Monstruous Back",
        'Forge your back using your own weight',
        'Calisthenics',
        False
    );

INSERT INTO
    Exercises (id, name, description)
VALUES (
        5,
        'pull-ups',
        'basic pull-ups'
    );

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (10, 3, 2, 5);

INSERT INTO
    Exercises (id, name, description)
VALUES (6, 'chin-up', 'basic chin-up');

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (10, 3, 2, 6);

INSERT INTO
    Exercises (id, name, description)
VALUES (
        7,
        'Australian pull-ups',
        'pull ups with feet touching the ground and body at a 60degre angle'
    );

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (10, 3, 2, 7);

INSERT INTO
    Workouts (
        id,
        name,
        description,
        category,
        isCustom
    )
VALUES (
        3,
        'Spartiat',
        'Use everything you can to make gains',
        'Mixed',
        False
    );

INSERT INTO
    Exercises (id, name, description)
VALUES (8, 'dumbbell curls', '');

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (10, 3, 3, 8);

INSERT INTO
    Exercises (id, name, description)
VALUES (9, 'tricep pushdown', '');

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (12, 3, 3, 9);

INSERT INTO
    Exercises (id, name, description)
VALUES (10, 'tricep pushdown', '');

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (12, 3, 3, 10);

INSERT INTO
    Exercises (id, name, description)
VALUES (
        11,
        'dumbbell Arnold press',
        ''
    );

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (12, 8, 3, 11);

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (12, 3, 3, 5);

INSERT INTO
    Exercises (id, name, description)
VALUES (
        12,
        'squat',
        'Lower your hips down and back while keeping your chest up, then stand up'
    );

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (12, 3, 3, 12);

INSERT INTO
    Exercises (id, name, description)
VALUES (
        13,
        'leg curl',
        'Bend your legs towards your buttocks while lying face down on a machine to curl your legs'
    );

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (12, 3, 3, 13);

INSERT INTO
    Exercises (id, name, description)
VALUES (
        14,
        'Standing calf raises',
        'Stand with feet shoulder-width apart, then raise your heels off the ground while contracting your calf muscles'
    );

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (12, 3, 3, 14);

INSERT INTO
    Workouts (
        id,
        name,
        description,
        category,
        isCustom
    )
VALUES (
        4,
        'The Chestinator',
        'Become the ultimate athlete with pectoral machines',
        'Weight Training',
        False
    );

INSERT INTO
    Exercises (id, name, description)
VALUES (
        15,
        'Chest Press Machine ',
        'spread your arms to stretch the chest muscles, then return to the starting position'
    );

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (12, 4, 4, 15);

INSERT INTO
    Exercises (id, name, description)
VALUES (
        16,
        'Incline Chest Press Machine',
        'Push the handles forward to Work the muscles of the upper chest'
    );

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (12, 4, 4, 16);

INSERT INTO
    Exercises (id, name, description)
VALUES (
        17,
        'Machine Dip',
        'Lower your body by bending your arms, then push yourself up to Work the muscles of the chest and triceps'
    );

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (12, 4, 4, 17);

INSERT INTO
    Exercises (id, name, description)
VALUES (
        18,
        'Machine Fly',
        'Spread your arms to stretch the chest muscles, then return to the starting position'
    );

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (15, 3, 4, 18);

INSERT INTO
    Workouts (
        id,
        name,
        description,
        category,
        isCustom
    )
VALUES (
        5,
        'Iron chest',
        'Intense resistance training for a chiseled and robust chest',
        'Calisthenics',
        False
    );

INSERT INTO
    Exercises (id, name, description)
VALUES (
        19,
        'push-ups',
        'Place your hands on the floor at shoulder width, then lower your body by bending your arms, then push yourself up'
    );

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (15, 4, 5, 19);

INSERT INTO
    Exercises (id, name, description)
VALUES (
        20,
        'dips',
        'Place your hands on two parallel bars, lower your body by bending your arms, then push yourself up'
    );

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (12, 3, 5, 20);

INSERT INTO
    Exercises (id, name, description)
VALUES (
        21,
        'Incline Push-up',
        'Place your hands on an inclined bench and your feet on the ground, then lower your body by bending your arms, and push yourself back up'
    );

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (12, 4, 5, 21);

INSERT INTO
    Exercises (id, name, description)
VALUES (
        22,
        'chest dips',
        'Spread your arms to stretch the chest muscles, then return to the starting position'
    );

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (12, 3, 5, 22);

INSERT INTO
    Workouts (
        id,
        name,
        description,
        category,
        isCustom
    )
VALUES (
        6,
        'Roberto Carlos Legs',
        'Sculpted, strong, powerful legs; training involves dedication, consistency, and focus.',
        'Mixed',
        False
    );

INSERT INTO
    Exercises (id, name, description)
VALUES (
        23,
        'Bulgarian Split Squats',
        ' Lower your body down until your front knee is bent to a 90-degree angle, then push back up to the starting position'
    );

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (15, 4, 6, 23);

INSERT INTO
    Exercises (id, name, description)
VALUES (
        24,
        'Single-Leg Deadlifts',
        ' Stand on one foot with your knee slightly bent, then hinge forward at the hips while extending your other leg behind you'
    );

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (12, 3, 6, 24);

INSERT INTO
    Exercises (id, name, description)
VALUES (
        25,
        'Calf Raises',
        'Stand on the edge of a step or curb with your heels hanging off, then rise up onto your toes as high as you can'
    );

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (12, 4, 6, 25);

INSERT INTO
    Exercises (id, name, description)
VALUES (
        26,
        'Glute Bridges',
        'Lie on your back with your knees bent and feet flat on the ground, then lift your hips up towards the ceiling as high as you can while squeezing your glutes'
    );

INSERT INTO
    Workout_Exercises (
        nbReps,
        nbSets,
        WorkoutId,
        ExerciseId
    )
VALUES (12, 3, 6, 26);

insert into
    'Workouts'(
        id,
        name,
        description,
        category,
        'isCustom'
    )
values (
        '1',
        'Steelback',
        'Workout made for your back',
        'Weight Training',
        '0'
    );

insert into
    'Workouts'(
        id,
        name,
        description,
        category,
        'isCustom'
    )
values (
        '2',
        "Baki's Monstruous Back",
        'Forge your back using your own weight',
        'Calisthenics',
        '0'
    );

insert into
    'Workouts'(
        id,
        name,
        description,
        category,
        'isCustom'
    )
values (
        '3',
        'Spartiat',
        'Use everything you can to make gains',
        'Mixed',
        '0'
    );

insert into
    'Workouts'(
        id,
        name,
        description,
        category,
        'isCustom'
    )
values (
        '4',
        'Lords of the Rings',
        'Become the ultimate athlete thanks to the rings',
        'Calisthenics',
        '0'
    );

insert into
    'Workout_Exercises'(
        'nbReps',
        'nbSets',
        'WorkoutId',
        'ExerciseId'
    )
values('10', '3', '2', '1');

insert into
    'Workout_Exercises'(
        'nbReps',
        'nbSets',
        'WorkoutId',
        'ExerciseId'
    )
values('10', '3', '2', '4');