import app from '../src/index.js';
import { Env } from "bun"
import { Context } from "elysia"

 

export const config = { runtime: 'edge' };

export default async function handler(request: Request) {
  return app.fetch(request);
}
