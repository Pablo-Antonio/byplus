import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/*import { environment } from 'src/environments/environment';*/
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VersionsService {

  constructor(private httpClient:HttpClient) { }

  private async fetch(target, data = null): Promise<any>{
    return this.httpClient.post<any>(environment.api + '/versions', JSON.stringify({
      target: target,
      input: data
    })).toPromise();
  }

  getVersion({phone_number}): Promise<any>{
    return this.fetch("get_version", {
      "phone_number": phone_number 
    });
  }
  
}
