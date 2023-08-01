// Code generated by sqlc-gen-ts-d1. DO NOT EDIT.
// versions:
//   sqlc v1.19.1
//   sqlc-gen-ts-d1 v0.0.0-a@254c24db5bcb2e1e16559e7f8498d7fa673ada31

import { D1Database, D1Result } from "@cloudflare/workers-types/2022-11-30"

const getAllUsersQuery = `-- name: GetAllUsers :many
select id, screenname, createdat from User`;

export type GetAllUsersRow = {
  id: number;
  screenname: string;
  createdat: string;
};

export async function getAllUsers(
  d1: D1Database
): Promise<D1Result<GetAllUsersRow>> {
  return await d1
    .prepare(getAllUsersQuery)
    .all<GetAllUsersRow>();
}

const createUserQuery = `-- name: CreateUser :one
insert into User (screenname) values (?) returning id, screenname, createdat`;

export type CreateUserParams = {
  screenname: string;
};

export type CreateUserRow = {
  id: number;
  screenname: string;
  createdat: string;
};

export async function createUser(
  d1: D1Database,
  args: CreateUserParams
): Promise<CreateUserRow | null> {
  return await d1
    .prepare(createUserQuery)
    .bind(args.screenname)
    .first<CreateUserRow | null>();
}

const getAllUsersSnakeQuery = `-- name: GetAllUsersSnake :many
select id, screen_name, created_at from users`;

export type GetAllUsersSnakeRow = {
  id: number;
  screenName: string;
  createdAt: string;
};

type RawGetAllUsersSnakeRow = {
  id: number;
  screen_name: string;
  created_at: string;
};

export async function getAllUsersSnake(
  d1: D1Database
): Promise<D1Result<GetAllUsersSnakeRow>> {
  return await d1
    .prepare(getAllUsersSnakeQuery)
    .all<RawGetAllUsersSnakeRow>()
    .then((r: D1Result<RawGetAllUsersSnakeRow>) => { return {
      ...r,
      results: r.results.map((raw: RawGetAllUsersSnakeRow) => { return {
        id: raw.id,
        screenName: raw.screen_name,
        createdAt: raw.created_at,
      }}),
    }});
}

const createUserSnakeQuery = `-- name: CreateUserSnake :one
insert into users (screen_name) values (?) returning id, screen_name, created_at`;

export type CreateUserSnakeParams = {
  screenName: string;
};

export type CreateUserSnakeRow = {
  id: number;
  screenName: string;
  createdAt: string;
};

type RawCreateUserSnakeRow = {
  id: number;
  screen_name: string;
  created_at: string;
};

export async function createUserSnake(
  d1: D1Database,
  args: CreateUserSnakeParams
): Promise<CreateUserSnakeRow | null> {
  return await d1
    .prepare(createUserSnakeQuery)
    .bind(args.screenName)
    .first<RawCreateUserSnakeRow | null>()
    .then((raw: RawCreateUserSnakeRow | null) => raw ? {
      id: raw.id,
      screenName: raw.screen_name,
      createdAt: raw.created_at,
    } : null);
}

