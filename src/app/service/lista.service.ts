import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor() { }

  public getArreglo(){
    let arreglo = ['auto','camion','motocicleta','avion','tanque','barco'];
    return arreglo;
  }
}
