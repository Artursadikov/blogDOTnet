-- Create a new table called 'Users' in schema 'SchemaName'
-- Drop the table if it already exists
use Blog_db;
IF OBJECT_ID('db.Users', 'U') IS NOT NULL
DROP TABLE db.Users
GO
-- Create the table in the specified schema
CREATE TABLE db.Users
(
    UsersId INT NOT NULL PRIMARY KEY, -- primary key column
    FirstName [NVARCHAR](15) NOT NULL,
    LastName [NVARCHAR](15) NOT NULL,
    Email [NVARCHAR](25) NOT NULL,
    PasswordHash BINARY(64) NOT NULL,
    Gender [NVARCHAR](10) NOT NULL,
    -- specify more columns here
);
GO