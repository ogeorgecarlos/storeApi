import dotenv from "dotenv"
dotenv.config()

module.exports= {
  dialect: "mariadb",
  database: process.env.DATABASE,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
}