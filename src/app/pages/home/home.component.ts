import { IRickModel } from './models/rick-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public rickModel: IRickModel;

  constructor() {
    this.rickModel = {
      nav: {
        logo: {
          src: "../../../assets/images/RickMortyLogo.png",
          alt: "Logo de Rick and Morty"
        }
      },

      hero: {
        title: "Usando la API de Rick and Morty",
        portada: {
          src: "../../../assets/images/rickandmortylogogrande.png",
          alt: "Logotipo grande de Rick and Morty"
        }
      },

      main: {
        title: "Personajes",
   
      },

      footer: {
        copyright: "Copyright 2021 Alfonso Cifuentes Alonso, página creada para practicar Angular"
      }
    }
  }

  ngOnInit(): void {
  }

}
