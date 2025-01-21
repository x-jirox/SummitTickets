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
  mostrarMenu: boolean = false;

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

  toggleMenu() {
    this.mostrarMenu = !this.mostrarMenu;
  }

  cerrarSesion() {
    localStorage.removeItem('sesion');
    this.sesion = false;
    this.mostrarMenu = false;
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
