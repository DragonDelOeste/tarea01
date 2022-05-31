import { Component, OnInit } from '@angular/core';
import { ListaService } from '../service/lista.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  title = 'Tarea01';
  constructor(public ListaService:ListaService) {
    this.ListaService.getArreglo();
   }

  ngOnInit(): void {
  }

}
