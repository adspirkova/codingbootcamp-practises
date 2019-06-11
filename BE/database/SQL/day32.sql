-- Write a SQL query that would select all rows from the city table with the string Holland at the end of the District column.


SELECT *
FROM `city`
WHERE `District` LIKE '%Holland'


-- Write a SQL query that would select all rows from the city table with the string ville anywhere within the Name column.

SELECT *
FROM `city`
WHERE `Name` LIKE '%ville%';


-- Write an SQL query to select 10 largest cities (order by Population) from the city table that are in one of the V4 countries: Czechia, Slovakia, Poland, Hungary

-- Use IN

-- The CountryCode values are: CZE, SVK, POL, HUN`

SELECT *
FROM `city`
WHERE `CountryCode` IN('CZE', 'SVK', 'POL', 'HUN')
ORDER BY `Population` DESC
LIMIT 10


SELECT * 
FROM `city`
LIMIT 10


SELECT * 
FROM `city`
ORDER BY `Population` DESC
LIMIT 100


-- Write a PHP function that would take one argument $page_nr and prepare a SQL query that would select records from the city table for one page of a list, where each page has 20 items and the parameter $page_nr is the number of the page.

function page($page_nr, $limit = 20)
{
    $skip = ($page_nr-1)*$limit;
    $query = DB::select('
    SELECT *
    FROM `city`
    LIMIT {$skip}, {$limit}');
    return view('page', compact('query'));
}


-- Using the database world write and execute a SQL query that would select all records in the table city with population above 5 million and left join the appropriate records in the country table using the CountryCode column.


SELECT * 
FROM `city`
LEFT JOIN `country`
        ON `city`.`CountryCode` = `country`.`Code`
WHERE `Population` > 5000000


-- Using the database world write and execute a SQL query that would select all records int the table countrylanguage that have 'English' in their Language column and left join the appropriate records in the country table using the CountryCode column.

SELECT * 
FROM `countrylanguage`
LEFT JOIN `country`
        ON `countrylanguage`.`CountryCode` = `country`.`Code`
WHERE `countrylanguage`.`Language` = 'English'