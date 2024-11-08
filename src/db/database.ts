import { connect } from "mongoose";

process.loadEnvFile();

const { DB_URI } = process.env as { DB_URI: string };

async function dbConnect(): Promise<void> {
  try {
    await connect(DB_URI);
    console.log("Database conection succesful");
  } catch (error) {
    const err = error as Error;
    console.log(err.message);
  }
}

export default dbConnect;
