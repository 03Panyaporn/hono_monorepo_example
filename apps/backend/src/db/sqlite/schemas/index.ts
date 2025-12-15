import type { IUser } from "@repo/domain/entity/user.js";
import { int, sqliteTable, text, type SQLiteColumnBuilderBase } from "drizzle-orm/sqlite-core";
import { type InferSelectModel } from "drizzle-orm"

const userSchema: Record<keyof IUser, SQLiteColumnBuilderBase> = {
    id: int().primaryKey({ autoIncrement: true }),
    username: text().unique().notNull(),
    password: text().notNull(),
    email: text().notNull().unique(),
}

export const users = sqliteTable("users_table", userSchema);

