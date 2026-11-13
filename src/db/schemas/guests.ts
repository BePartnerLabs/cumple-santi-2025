import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const guests = sqliteTable("guests", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	name: text("name").notNull(),
	code: text("code").notNull(),
	room_assigned: text("room_assigned"),
	created_at: integer("created_at", { mode: "timestamp" }).default(
		sql`(unixepoch())`,
	),
});

export type Guest = typeof guests.$inferSelect;
export type NewGuest = typeof guests.$inferInsert;
