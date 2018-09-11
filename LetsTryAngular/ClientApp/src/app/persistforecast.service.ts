import { Injectable } from '@angular/core';

@Injectable()
export class PersistforecastService {

  constructor() { }

  public set(): void {

    let token = "MyValue";

    let message = "HelloWorld";

    const foo = JSON.parse('{"name":"The Adventures of Bobby Ray","age":34,"created":"' + Date.now() + '"}')
    message = JSON.stringify(foo);

    localStorage.setItem(token, message)

    console.log(`SERVICE SAYS>>>wrote message ${message} for token ${token} to localStorage`);

  }

  public get(): void {

    let token = "MyValue";
   
    const bar = localStorage.getItem(token);

    console.log(`SERVICE SAYS>>>retrieved value ${bar} for token ${token} from localStorage`);

    localStorage.setItem("returnmessage", "SUCCES");

  }

  public saveSettings(input: Setting[]): void {

    for (let i of input) {
      localStorage.setItem("settings for user:" + i.user,"'filtering: '" + i.filterOn + "', grouping: '" + i.groupingColumns + "', ordering: '" + i.orderByColumns + "'");
    }
    

  }
}

interface Setting {
  user: string;
  filterOn: string[];
  groupingColumns: string[];
  orderByColumns: string[];
}
