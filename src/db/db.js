import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('timertask.db');

export default db;