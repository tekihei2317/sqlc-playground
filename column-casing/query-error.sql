-- name: CreateUser :one
insert into User (screenName) values (?) returning *;

-- name: UpdateUserScreenName :one
update User
set screenName = ?
where id = ?
returning *;
