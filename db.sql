CREATE DATABASE
    `genius-gym`
    /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */
;

USE `genius-gym`;

CREATE TABLE
    `Exercises` (
        `id` int(11) NOT NULL,
        `name` varchar(255) DEFAULT NULL,
        `description` varchar(255) DEFAULT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

CREATE TABLE
    `Users` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `firstName` varchar(255) DEFAULT NULL,
        `lastName` varchar(255) DEFAULT NULL,
        `email` varchar(255) DEFAULT NULL,
        `password` varchar(255) DEFAULT NULL,
        `trainingType` varchar(255) DEFAULT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

CREATE TABLE
    `Users_Workouts` (
        `UserId` int(11) NOT NULL,
        `WorkoutId` int(11) NOT NULL,
        PRIMARY KEY (`UserId`, `WorkoutId`),
        KEY `WorkoutId` (`WorkoutId`),
        CONSTRAINT `Users_Workouts_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT `Users_Workouts_ibfk_2` FOREIGN KEY (`WorkoutId`) REFERENCES `Workouts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

CREATE TABLE
    `Workout_Exercises` (
        `nbReps` int(11) DEFAULT NULL,
        `nbSets` int(11) DEFAULT NULL,
        `WorkoutId` int(11) NOT NULL,
        `ExerciseId` int(11) NOT NULL,
        PRIMARY KEY (`WorkoutId`, `ExerciseId`),
        KEY `ExerciseId` (`ExerciseId`),
        CONSTRAINT `Workout_Exercises_ibfk_1` FOREIGN KEY (`WorkoutId`) REFERENCES `Workouts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT `Workout_Exercises_ibfk_2` FOREIGN KEY (`ExerciseId`) REFERENCES `Exercises` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

CREATE TABLE
    `Workouts` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `name` varchar(255) DEFAULT NULL,
        `description` varchar(255) DEFAULT NULL,
        `category` varchar(255) DEFAULT NULL,
        `isCustom` tinyint(1) DEFAULT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

-- Data Dump

insert into
    `Exercises`(id, name, description)
values (
        '1',
        'pull ups',
        'basic pull ups'
    );

insert into
    `Exercises`(id, name, description)
values (
        '2',
        'push ups',
        'basic push ups'
    );

insert into
    `Exercises`(id, name, description)
values (
        '3',
        'squat',
        'basic squat without weight'
    );

insert into
    `Exercises`(id, name, description)
values (
        '4',
        'Australian pull ups',
        'pull ups with feet touching the ground and body at a 60degre angle'
    );

insert into
    `Workouts`(
        id,
        name,
        description,
        category,
        `isCustom`
    )
values (
        '1',
        'Steelback',
        'Workout made for your back',
        'Weight Training',
        '0'
    );

insert into
    `Workouts`(
        id,
        name,
        description,
        category,
        `isCustom`
    )
values (
        '2',
        "Baki's Monstruous Back",
        'Forge your back using your own weight',
        'Calisthenics',
        '0'
    );

insert into
    `Workouts`(
        id,
        name,
        description,
        category,
        `isCustom`
    )
values (
        '3',
        'Spartiat',
        'Use everything you can to make gains',
        'Mixed',
        '0'
    );

insert into
    `Workouts`(
        id,
        name,
        description,
        category,
        `isCustom`
    )
values (
        '4',
        'Lords of the Rings',
        'Become the ultimate athlete thanks to the rings',
        'Calisthenics',
        '0'
    );

insert into
    `Workout_Exercises`(
        `nbReps`,
        `nbSets`,
        `WorkoutId`,
        `ExerciseId`
    )
values('10', '3', '2', '1');

insert into
    `Workout_Exercises`(
        `nbReps`,
        `nbSets`,
        `WorkoutId`,
        `ExerciseId`
    )
values('10', '3', '2', '4');