import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Info } from './Entities/Info';



export async function TestDb(){
    const sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
    var db: SQLiteDBConnection = await sqlite.createConnection("CustomTestDB", false, "no-encryption", 1, false);
        await db.open();
        var insertQuery = `insert into info (note) VALUES ('hello')`;
        var res = await db.execute(insertQuery);
        console.log(`res: ${JSON.stringify(res)}`);
        await db.close();
       
        await db.open()
        var selectQuery = `select * from info order by 1 desc LIMIT 1 `;
        var res2 = await db.query(selectQuery);
        console.log(res2.values);
        await db.close();

        await sqlite.closeConnection("CustomTestDB", false);
}

export async function CreateInfo(info:Info) {
    const sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
    var db: SQLiteDBConnection = await sqlite.createConnection("CustomTestDB", false, "no-encryption", 1, false);
    await db.open();
    var query = `insert into info (note) VALUES ('${info.note}')`;
    var res = await db.execute(query);
    console.log(`res: ${JSON.stringify(res)}`);
    await db.close();
    await sqlite.closeConnection("CustomTestDB", false);
}

export async function GetInfo() {
    const sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
    var db: SQLiteDBConnection = await sqlite.createConnection("CustomTestDB", false, "no-encryption", 1, false);
    await db.open();
    var query = `select * from info order by 1 desc LIMIT 1 `;
    var res2 = await db.query(query);
    console.log(res2.values);
    let parsedInfo = res2.values?.[0] as Info;
    console.log(parsedInfo);
    await db.close();
    await sqlite.closeConnection("CustomTestDB", false);
}





// create table info (
//     id INTEGER PRIMARY KEY NOT NULL,
//     note TEXT NULL
//     )