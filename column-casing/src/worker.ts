import { D1Database } from "@cloudflare/workers-types/2022-11-30";
import {
  createUser,
  createUserSnake,
  getAllUsers,
  getAllUsersSnake,
} from "./gen/sqlc/querier";

type Env = {
  DB: D1Database;
};

export default {
  async fetch(request: Request, env: Env) {
    const user = await env.DB.prepare("select * from User limit 1").first();
    if (user === null) {
      await createUser(env.DB, { screenname: "tekihei2317" });
    }

    const { results: users } = await getAllUsers(env.DB);
    return new Response(JSON.stringify(users));
  },

  async fetch2(request: Request, env: Env) {
    const user = await env.DB.prepare("select * from users limit 1").first();
    if (user === null) {
      await createUserSnake(env.DB, { screenName: "tekihei2317" });
    }

    const { results: users } = await getAllUsersSnake(env.DB);
    return new Response(JSON.stringify(users));
  },
};
