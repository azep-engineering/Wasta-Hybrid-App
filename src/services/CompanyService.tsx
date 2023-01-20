import { parse } from "url";
import { CompanyRepository } from "../Repository/CompanyRepository";
import { Company } from "../Repository/Entities/company";

export class CompanyService {
  async getAll () {
    let repo = new CompanyRepository();
    var result = await repo.GetAll();
    console.log(result);
    var parsedResult = result as Company[];
    console.log(parsedResult);
    return parsedResult;
  }

   async  Create(company:Company){
    let repo = new CompanyRepository();
    await repo.Create(company);
  }
}




