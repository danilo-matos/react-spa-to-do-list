exports.userTable = (databaseUrl)=>{
    databaseUrl.run('CREATE TABLE IF NOT EXISTS user(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, surname TEXT NOT NULL,password TEXT NOT NULL)'); 
}
