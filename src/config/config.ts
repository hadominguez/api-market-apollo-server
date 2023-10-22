import * as dotenv from "dotenv";

dotenv.config();

export const HTTP_HOST = process.env.HTTP_HOST;
export const HTTP_PORT = parseInt(process.env.HTTP_PORT || "3000");
export const HOST_DB = process.env.HOST_DB;
export const PORT_DB = parseInt(process.env.PORT_DB || "5432");
export const NAME_DB = process.env.NAME_DB || "test";
export const USER_DB = process.env.USER_DB || "test";
export const PASS_DB = process.env.PASS_DB || "test";
export const DIALECT_DB = process.env.DIALECT_DB || "postgres";

