import { env } from "cloudflare:workers";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schemas/index";

// Cloudflare D1 (binding `DB` definido en wrangler.jsonc)
export const db = drizzle(env.DB, { schema });
