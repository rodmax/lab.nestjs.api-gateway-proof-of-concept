CREATE SCHEMA api_gateway

CREATE TABLE api_gateway.user (
    id INT PRIMARY KEY,
    email VARCHAR(250) NOT NULL
);

INSERT INTO
    api_gateway.user (id, email)
VALUES
    (1, 'first-user@from.sql'),
    (2, 'second-user@from.sql')
ON CONFLICT DO NOTHING;