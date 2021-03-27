import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome: string;
  idade: number = 20;

  //double lancarDado(){}
  lancarDado (): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  alterarNome(inputEvent): void{
    console.log(inputEvent.target.value);
    this.nome = inputEvent.target.value;
  }

  adicionar (): void{
    console.log("Adicionando...");
  }
}
