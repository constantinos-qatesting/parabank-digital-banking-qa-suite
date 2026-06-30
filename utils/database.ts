import path from 'path';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Opens the SQLite database used by the database tests
export async function openDatabase() {

    // Build the database path dynamically so it works
    // on both Windows (local) and Linux (GitHub Actions)
    const dbPath = path.resolve(
        process.cwd(),
        'database',
        'banking.db'
    );

    // Open the SQLite database connection
    return open({
        filename: dbPath,
        driver: sqlite3.Database
    });
}