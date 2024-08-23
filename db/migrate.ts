import { migrate } from "drizzle-orm/postgres-js/migrator";
import { connection, db } from "@/db";

async function main() {
  try {
    await migrate(db, {
      migrationsFolder: 'db/migrations',
    });
    console.log('Migration successful!');
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await connection.end();
  }
}

main();
