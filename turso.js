import { createClient } from "@libsql/client";

export const turso = createClient({
	url: process.env.TURSOURL,
	authToken: process.env.TURSOTOKEN,
});

//await turso.execute("SQL AND ALL THE OTHER CRAP");
//
// await turso.execute({
//   sql: "INSERT INTO users VALUES (:name)",
//   args: { name: "Iku" },
// });
