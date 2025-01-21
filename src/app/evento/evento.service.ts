import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Evento } from './evento';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  private eventos: Evento[] = [
    { id_evento: '1', nombre: 'Rave', fecha: '2025-02-15', ubicacion: 'Ecuador', descripcion: 'Evento de música electrónica en un rave', precio: 50, imagen: 'assets/img/rave.webp' },
    { id_evento: '2', nombre: 'Cave', fecha: '2025-03-20', ubicacion: 'Chile', descripcion: 'Fiesta en una cueva subterránea con música electrónica', precio: 70, imagen: 'assets/img/cave.webp' },
    { id_evento: '3', nombre: 'Core', fecha: '2025-04-10', ubicacion: 'Colombia', descripcion: 'Un evento con lo mejor del sonido hardcore', precio: 60, imagen: 'assets/img/core.webp' },
    { id_evento: '4', nombre: 'Bass Arena', fecha: '2025-05-05', ubicacion: 'Argentina', descripcion: 'Arena con los mejores DJ\'s de bass', precio: 80, imagen: 'assets/img/bass.webp' },
    { id_evento: '5', nombre: 'Trance', fecha: '2025-06-12', ubicacion: 'Perú', descripcion: 'Un trance inolvidable con sonidos hipnóticos', precio: 90, imagen: 'assets/img/trance.webp' },
    { id_evento: '6', nombre: 'House', fecha: '2025-07-15', ubicacion: 'Brasil', descripcion: 'Fiesta de música house con beats envolventes', precio: 100, imagen: 'assets/img/house.webp' },
    { id_evento: '7', nombre: 'Techno', fecha: '2025-08-25', ubicacion: 'México', descripcion: 'Vibrante fiesta techno con los mejores artistas', precio: 110, imagen: 'assets/img/techno.webp' },
  ];

  private eventosCarrito: Evento[] = [];

  constructor() { }

  addCarrito(evento: Evento) {
    this.eventosCarrito = [...this.eventosCarrito, evento];
    localStorage.setItem('eventos', JSON.stringify(this.eventosCarrito));
  }

  eliminarCarrito(id: string) {
    this.eventosCarrito = this.eventosCarrito.filter((evento) => evento.id_evento != id);
    localStorage.setItem('eventos', JSON.stringify(this.eventosCarrito));
  }

  getCarrito(): Evento[] {
    return JSON.parse(localStorage.getItem('eventos') || '[]');
  }

  getEventos(): Observable<Evento[]> {
    return of(this.eventos);
  }

  getEvento(id_evento: string): Observable<Evento> {
    const evento = this.eventos.find((e) => e.id_evento === id_evento);
    return of(evento!);
  }
}
