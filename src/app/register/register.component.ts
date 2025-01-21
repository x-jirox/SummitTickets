import { Component } from '@angular/core';
import { UsuarioService } from '../usuarios/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder,private usuarioService:UsuarioService, private router: Router) {
    this.formulario = this.formBuilder.group({
      nombre: [''],
      email: [''],
      password: [''],
      telefono: [''],
    });
  }

  generarNumeroAleatorioString(min: number, max: number): string {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroAleatorio.toString();
  }

  registrar() {
    // Aquí puedes manejar la lógica de registro cuando el formulario es enviado
    if (this.formulario.valid) {
      const valoresFormulario = this.formulario.value;
     valoresFormulario.id_usuario=this.generarNumeroAleatorioString(1,2)
      this.usuarioService.guardarUsuario(valoresFormulario)
      this.router.navigate(['/usuarios']); 
      // Aquí puedes enviar los datos a tu backend o hacer cualquier otra acción
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Creendenciales incorrectas!",
      });
    }
  }
}
