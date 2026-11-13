CREATE TABLE `guests` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`code` text NOT NULL,
	`room_assigned` text,
	`created_at` integer DEFAULT (unixepoch())
);
