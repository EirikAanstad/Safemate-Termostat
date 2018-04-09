CREATE DATABASE Safemate;
USE Safemate;
CREATE TABLE Termostat (
	Id int NOT NULL AUTO_INCREMENT,
	innstilling INT NOT NULL,
	avlesning INT NOT NULL,
	på BOOL NOT NULL,
	PRIMARY KEY(Id)
);


INSERT INTO Termostat (innstilling, avlesning, på)
VALUES (20, 19, true); 
		
SELECT *
FROM Termostat;