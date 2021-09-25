import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disponibildad } from '../models/disponibildad.model';

const baseURL = "http://localhost:8090/rest/disponibilidad"

@Injectable({
  providedIn: 'root'
})
export class DisponibilidadService {

  constructor(private http:HttpClient) { }

  resgistrarDisponibilidad(data:Disponibildad) : Observable<any>{
    return this.http.post(baseURL, data);
  }
}
