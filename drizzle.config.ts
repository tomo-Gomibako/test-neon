import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

// Existing process environment takes priority over the local dev branch.
config({ path: ".env.dev", quiet: true });

const databaseUrl = process.env.DATABASE_URL_UNPOOLED;
if (!databaseUrl) {
  throw new Error("Set DATABASE_URL_UNPOOLED in .env.dev or the environment.");
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dbCredentials: { url: databaseUrl },
});
