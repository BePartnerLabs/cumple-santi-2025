import type { Config } from "drizzle-kit";

// Solo genera SQL; las migraciones se aplican con `wrangler d1 migrations apply`.
export default {
	schema: "./src/db/schemas/index.ts",
	out: "./migrations",
	dialect: "sqlite",
} satisfies Config;
