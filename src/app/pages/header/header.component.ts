import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

  constructor (){
    this.usuario=[];
  }

  usuario: MenuItem[];

  ngOnInit() {
      this.usuario = [
          {
              label: 'Usuario',
              icon: 'pi pi-user',
              items: [
                {label: 'Email',icon:'pi  pi-envelope pi-cog'},
                {label: 'Contraseña',icon:'pi pi-key'},
                {label: 'Login',icon:'pi pi-lock-open'},
                {label: 'Registro',icon:'pi pi-upload'}
              ]
          },
          {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                  {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
              ]
          }
      ];
  }

}
