CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL,
    notes VARCHAR (1000)
);

CREATE TABLE device (
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES person,
	particle_id VARCHAR (25),
	token VARCHAR (10),
	location VARCHAR (100)
);

CREATE TABLE readings (
	id SERIAL PRIMARY KEY,
	device_id INT REFERENCES device,
	temperature VARCHAR (5),
	humidity VARCHAR (4),
	date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);