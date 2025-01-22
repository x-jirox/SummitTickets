import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EventoComponent } from './evento/evento.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from './usuarios/usuario.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const routes: Routes= [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, // Redirige a 'home' por defecto
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'evento', component: EventoComponent},
  {path: 'pedido', component: PedidosComponent},
  {path: 'home', component: HomeComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    UsuariosComponent,
    EventoComponent,
    PedidosComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
    
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
