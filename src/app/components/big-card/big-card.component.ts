import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit{
photoCover:string="https://listasnerds.com.br/wp-content/uploads/2021/12/Homem-de-Ferro_DESTAQUE-850x560.png"
cardTitle:string="Novo Homem de Ferro"
cardDescription:string="Marvel Studios - New Iron Main!"
constructor(){}
ngOnInit(): void {
  }
}
