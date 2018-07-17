import { HttpClient } from "@angular/common/http"
import { Injectable} from "@angular/core"
import { Photo } from "./photo";

const API = "http://localhost:3000"



@Injectable({providedIn: 'root'}) // está na raiz.. ou seja .. todos vão ter acesso a esta instância
export class PhotoService{

  constructor(private http: HttpClient){}

  listFromUser(userName: string){
    return this.http
    .get<Photo[]>(API + '/flavio/photos');
  }
}
