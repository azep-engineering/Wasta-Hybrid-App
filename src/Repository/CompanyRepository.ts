import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from "@capacitor-community/sqlite";
import { Company } from "./Entities/company";

export class CompanyRepository{

     async  Create(company:Company) {

        const sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
        var db: SQLiteDBConnection = await sqlite.createConnection("CustomTestDB", false, "no-encryption", 1, false);
        await db.open();
        var query = `INSERT INTO companies
        (
            businessRn,
            companyNo,
            englishName,
            arabicName,
            phoneNo,
            address,
            dateHijri,
            dateGregorian,
            dateEstablishment,
            buildingNo,
            englishStreetName,
            arabicStreetName,
            englishDistrict,
            arabicDistrict,
            englishCity,
            arabicCity,
            englishCountry,
            arabicCountry,
            additionalNo,
            postalCode,
            secondBusinessId,
            secondBusinessIdType,
            compayIconLocation80,
            compayIconLocationA4
        )
        Values(
            '${company.businessRn}',
            '${company.companyNo}',
            '${company.englishName}',
            '${company.arabicName}',
            '${company.phoneNo}',
            '${company.address}',
            '${company.dateHijri}',
            '${company.dateGregorian}',
            '${company.dateEstablishment}',
            '${company.buildingNo}',
            '${company.englishStreetName}',
            '${company.arabicStreetName}',
            '${company.englishDistrict}',
            '${company.arabicDistrict}',
            '${company.englishCity}',
            '${company.arabicCity}',
            '${company.englishCountry}',
            '${company.arabicCountry}',
            '${company.additionalNo}',
            '${company.postalCode}',
            '${company.secondBusinessId}',
            '${company.secondBusinessIdType}',
            '${company.compayIconLocation80}',
            '${company.compayIconLocationA4}'
        )`;
        console.log(query);
        var res = await db.execute(query);
        console.log(`res: ${JSON.stringify(res)}`);
        await db.close();
        await sqlite.closeConnection("CustomTestDB", false);
    };

    async  GetAll() {

        const sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
        var db: SQLiteDBConnection = await sqlite.createConnection("CustomTestDB", false, "no-encryption", 1, false);
        await db.open();
        var query = `Select * from Companies`;
        console.log(query);
        var res = await db.query(query);
        console.log(`plain res: ${res}`);
        // await db.close();
        // await sqlite.closeConnection("CustomTestDB", false);
        return res?.values;
    };
}
