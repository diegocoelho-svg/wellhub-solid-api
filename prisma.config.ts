import { defineConfig } from "prisma/config";
import { env } from "./env/index.js";

export default defineConfig({
  datasource: {
    url: env.DATABASE_URL,
  },
  migrations: {
    path: "prisma/migrations",
  },
  schema: "prisma/schema.prisma",
});
