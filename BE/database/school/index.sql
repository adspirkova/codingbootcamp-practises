SELECT *
FROM `country`;


SELECT *
FROM `country`
WHERE `Population` > 20000000;


SELECT *
FROM `country`
WHERE `Population` > 20000000
ORDER BY `Population` DESC
LIMIT 10;

INSERT
INTO `region`
(`name`, `slug`)
VALUES
('Eastern Europe', 'eastern-europe');

INSERT
INTO `region`
(`name`, `slug`)
VALUES
('Western Europe', 'western-europe');

INSERT
INTO `region`
(`name`, `slug`)
VALUES
('North America', 'north-america'),
('Central America', 'central-america'),
('South America', 'south-america');

SELECT *
FROM `city`
WHERE `id` = 3339;


UPDATE `city`
SET `Name` = 'Prague'
WHERE `id` = 3339;

UPDATE `city`
SET `Population` = 3339
WHERE `id` = 3339;



UPDATE `country`
SET `HeadOfState` = 'Donald J. Trump'
WHERE `GovernmentForm` = 'US Territory';

UPDATE `country`
SET `HeadOfState` = 'Donald J. Trump'
WHERE `HeadOfState` = 'George W. Bush';

UPDATE `country`
SET `Population` = 300,
    `GNP` = 13.91
WHERE `Name` = 'United States Minor Outlying Islands';

DELETE
FROM `region`
WHERE `id` = 1

DELETE
FROM `region`
WHERE `slug` LIKE '%america%';


INSERT
INTO `students`
(`name`, `overall_rating`, `nationality`, `age`, `is_decead`)
VALUES
('Pepa Vomáčka', 2.4, 'Czech', 22, true);

