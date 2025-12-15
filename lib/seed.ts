import { db } from "./db";

export default async function seed() {
    await db.query(`
    INSERT INTO users (name, email) VALUES ('John Doe', 'john.doe@example.com')
    `).run();

    await db.query(`
    INSERT INTO posts (title, content) VALUES ('Hello, world!', 'This is a test post.')
    `).run();
}   