const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const dbPath = path.join(__dirname, '../../../assets/database/todo.db');
const db = new sqlite3.Database(dbPath);

const UserTable = require('../db-table/user-table');
const TaskTable = require('../db-table/task-table');



// user Table
UserTable.userTable(db);

// task table 
TaskTable.taskTable(db);



exports.dataBaseRunner = db;










