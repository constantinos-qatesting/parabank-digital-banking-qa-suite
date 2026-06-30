console.log('🚀 Starting setup...');

import fs from 'fs';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Creates the banking database and inserts sample data
async function setupDatabase() {

    // Delete the existing database if it already exists
    if (fs.existsSync('./database/banking.db')) {
        fs.unlinkSync('./database/banking.db');
    }

    // Open (or create) the SQLite database file
    const db = await open({
        filename: './database/banking.db',
        driver: sqlite3.Database,
    });

    // Read the database structure (tables)
    const schema = fs.readFileSync('./database/schema.sql', 'utf-8');

    // Read the sample banking data
    const seed = fs.readFileSync('./database/seed.sql', 'utf-8');

    // Create the database tables
    await db.exec(schema);

    // Insert the sample data into the tables
    await db.exec(seed);

    // Display success message
    console.log('✅ Banking database created successfully!');

    // Close the database connection
    await db.close();
}

// Execute the database setup
setupDatabase();