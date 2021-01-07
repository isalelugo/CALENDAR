import { Component, ViewChildren } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Tarea } from "../../interfaces/interfaces";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChildren('lista') lista: IonList;
  
  constructor() {}

   // ESTE ARREGLO SE UTILIZARÁ PARA LAS IMAGENES QUE SE HACEN PASAR POR BOTONES
    botones = [
      {
        name: 'Hogar',
        img: 'assets/images/Hogar_Boton.jpeg'
      },
      {
        name: 'Escuela',
        img: 'assets/images/Escuela_Boton.jpeg'
      },
      {
        name: 'Viaje',
        img: 'assets/images/Viaje_Boton.jpg'
      },
      {
        name: 'Trabajo',
        img: 'assets/images/Trabajo_Boton.jpeg'
      },
    ];
    
    tareas: Tarea[] = [
    {
       name: 'Lavar ropa' 
    },
    {
       name: 'Limpiar alacena' 
    },
    {
      name: 'Hacer de comer' 
    },
    {
      name: 'Recoger la cocina' 
    },
    {
      name: 'Limpiar los baños' 
    },
    {
      name: 'Sacar al perro' 
    }
  ];

  reorder(event) {
    const itemMove = this.tareas.splice(event.detail.from, 1)[0];

    this.tareas.splice(event.detail.to,0,itemMove);
    
    // console.log(this.tareas);

    event.detail.complete();
  }


  delete(tarea) {
    // console.log('delete ', tarea);
    this.lista.closeSlidingItems(); // cierra la pestaña de eliminar

    this.tareas.forEach((element,index) => {
      if(element === tarea){
        this.tareas.splice(index,1);
        return;
      }    
    });

    // console.log(this.tareas);
  }


  
}
