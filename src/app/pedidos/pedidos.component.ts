import { Component, OnInit } from '@angular/core';
import { EventoService } from '../evento/evento.service';
import { Evento } from '../evento/evento';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})
export class PedidosComponent implements OnInit {
  carrito: Evento[] = []; // Propiedad para almacenar los eventos del carrito

  constructor(private eventoService: EventoService) {}

  ngOnInit(): void {
    this.cargarCarrito(); // Cargar los eventos del carrito al inicializar el componente
    this.videopay();
  }

  cargarCarrito() {
    this.carrito = this.eventoService.getCarrito(); // Obtener los datos del carrito
  }

  videopay() {
    // Asegúrate de que el video esté sin sonido
    const video = document.getElementById('bg-video') as HTMLVideoElement;
    if (video) {
      video.muted = true; // Mutea el video
    }
  }

  eliminarCarrito(id: string) {
    this.eventoService.eliminarCarrito(id); // Eliminar evento del carrito
    this.cargarCarrito(); // Volver a cargar los datos para reflejar los cambios
  }

  // Método para calcular el total de los precios en el carrito
  getTotal(): number {
    return this.carrito.reduce((total, item) => total + item.precio, 0);
  }
}