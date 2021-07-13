import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ApiRequestService {
  constructor(private http: HttpClient){}

/*  async getAllData(){
    const promise = await  new Promise((resolve,reject)=>{
      this.http.get(environment.API_ROOT + 'projects').toPromise().then(((resp)=>{
        resolve(resp);
      })).catch((err)=>{
        reject(err);
      })
    });
    return promise mobileChart
  }*/

  async getAreaChartData( ) {
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    const promise = await new Promise((res , rej)=>{
      this.http.get(environment.API_ROOT + 'areaChart/',{headers:{'Access-Control-Allow-Origin': '*'}}).toPromise().then((data)=>{
        res(data)

      }).catch((error)=>{
        rej(error)
      });
    });
    return promise;

  }

  async getMobileChartData( ) {
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    const promise = await new Promise((res , rej)=>{
      this.http.get(environment.API_ROOT + 'mobileChart/',{headers:{'Access-Control-Allow-Origin': '*'}}).toPromise().then((data)=>{
        res(data)

      }).catch((error)=>{
        rej(error)
      });
    });
    return promise;

  }

}
