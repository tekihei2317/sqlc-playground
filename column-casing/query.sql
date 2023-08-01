-- name: GetAllUsers :many
select * from User;

-- name: GetAllUsersSnake :many
select * from users;

-- name: CreateUserSnake :one
insert into users (screen_name) values (?) returning *;

-- name: GetUserByScreenName :many
select * from User where screenName = ?;

-- name: DeleteUserByScreenName :exec
delete from User
where screenName = ?;

-- name: CreateUser :one
insert into User (screenname) values (?) returning *;
