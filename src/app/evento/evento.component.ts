import { Component, OnInit } from '@angular/core';
import { EventoService } from './evento.service';
import { Evento } from './evento';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css'],
})
export class EventoComponent implements OnInit {
  eventos: Evento[] = [];

  constructor(private eventoService: EventoService) {}

  ngOnInit() {
    this.eventoService.getEventos().subscribe((eventos) => (this.eventos = eventos));
  }

  agregarCarrito(evento: Evento) {
    this.eventoService.addCarrito(evento);
    Swal.fire('¡Agregado al Carrito!');
  }
}
