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

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.eventoService.getEventos().subscribe((eventos) => (this.eventos = eventos));
  }

  agregarCarrito(evento: Evento) {
    const sesion = localStorage.getItem('sesion');
    if (sesion) {
      this.eventoService.addCarrito(evento);
      Swal.fire('¡Agregado al Carrito!', '', 'success');
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Inicia sesión',
        text: 'Debes iniciar sesión para agregar al carrito.',
        showCancelButton: true,
        confirmButtonText: 'Iniciar sesión',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirigir al formulario de inicio de sesión
          window.location.href = '/usuarios'; // Ajusta la ruta según tu configuración
        }
      });
    }
  }
}
