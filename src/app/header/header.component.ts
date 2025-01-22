import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuarios/usuario';

import Swal from 'sweetalert2'; // Importa SweetAlert2

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  usuario!: Usuario;
  sesion: boolean = false;
  totalProductos: number = 0;



  constructor(private router: Router) { }

  ngOnInit(): void {
    this.obtenerUsuarioLocalStorage();
  }

  obtenerUsuarioLocalStorage() {
    const usuarioString = localStorage.getItem('sesion');
    if (usuarioString) {
      this.usuario = JSON.parse(usuarioString) as Usuario;
      this.sesion = true;
    } else {
      this.sesion = false;
    }
  }

  cerrarSesion() {
    localStorage.removeItem('sesion');
    this.sesion = false;

    // Muestra una alerta de sesión finalizada
    Swal.fire({
      icon: 'success',
      title: 'Sesión finalizada',
      text: 'Has cerrado sesión correctamente.',
      timer: 1000, // La alerta se cierra automáticamente después de 2 segundos
      showConfirmButton: false,
    });

    // Redirige al usuario al inicio (opcional, ajusta la ruta según tu lógica)
    this.router.navigate(['/usuarios']);
  }

  irALogin() {
    if (!this.sesion) {
      // Si no hay sesión, muestra la alerta y no redirige
      Swal.fire({
        icon: 'error',
        title: 'Debes iniciar sesión',
        text: 'Debes iniciar sesión para acceder a la tienda.',
      });
    } else {
      // Si hay sesión, redirige al usuario a la página de inicio de sesión
      this.router.navigate(['/pedido']); // Cambia '/usuarios' por la ruta real de tu página de inicio de sesión
    }
  }
}

