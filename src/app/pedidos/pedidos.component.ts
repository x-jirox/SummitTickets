import { Component, OnInit } from '@angular/core';
import { EventoService } from '../evento/evento.service';
import { Evento } from '../evento/evento';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})
export class PedidosComponent implements OnInit {
  constructor(private eventoService: EventoService) { }
  ngOnInit(): void {
    console.log(this.eventoService.getCarrito());
  }

  getCarrito(): Evento[] {
    return this.eventoService.getCarrito();
  }

  eliminarCarrito(id: string) {
    this.eventoService.eliminarCarrito(id)
  }


}
