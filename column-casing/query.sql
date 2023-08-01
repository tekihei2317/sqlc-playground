-- name: GetAllUsers :many
select * from User;

-- name: CreateUser :one
insert into User (screenname) values (?) returning *;

-- name: GetAllUsersSnake :many
select * from users;

-- name: CreateUserSnake :one
insert into users (screen_name) values (?) returning *;
