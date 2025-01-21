import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ngOnInit() {
    // Asegúrate de que el video esté sin sonido
    const video = document.getElementById('bg-video') as HTMLVideoElement;
    if (video) {
      video.muted = true;  // Mutea el video
    }
}
}
