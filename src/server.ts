import "dotenv/config";
import { app } from "./index";
import connectDB from "./config/db";

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
