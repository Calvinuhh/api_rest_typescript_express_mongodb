import server from "./server";
import dbConnect from "./db/database";

process.loadEnvFile();

const { PORT } = process.env;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  dbConnect();
});
