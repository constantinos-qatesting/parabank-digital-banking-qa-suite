import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDatabase() {
    return open({
        filename: 'C:/Users/Constantinos/Desktop/Playwright Projects/parabank-digital-banking-qa-suite/database/banking.db',
        driver: sqlite3.Database
    });
}