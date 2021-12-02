import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  public _n1: number = 0;
  public _n2: number = 0;
  public _color_asign_a:  string = 'blue'
  public _color_asign_b:  string = 'red'

  constructor() { }

  ngOnInit(): void {
    this.bolearx( 3 )
  }


  operPlay( n: number, opt: number ) {
    // console.log( 'exec' + opt )
    switch( opt ) {
      case 1:
          if( this._colorA != '' ) {
            this._colorB = '';
            this._n1 = (this._n1 + 1) * n;
          }

          else {
            this._colorA = 'yellowgreen';
          }
        break;
      case 2:
          if( this._n1 <= 0 ) {
            alert('No puedes bajar más de este marcador....');
            this._n1 = 0;
          }

          else {
            this._n1 = (this._n1 - 1) * n;
          }
        break;
      case 3:
          if( this._colorB != '' ) {
            this._colorA = '';
            this._n2 = (this._n2 + 1) * n;
          }

          else {
            this._colorB = 'yellowgreen';
          }        
        break;
      case 4:
          if( this._n2 <= 0 ) {
            alert('No puedes bajar más de este marcador....');
            this._n2 = 0;
          }

          else {
            this._n2 = (this._n2 - 1) * n;
          }
        break;
    } 

  }


  public _colorA: string = '';
  public _colorB: string = '';
  bolearx( opt: number ) {
    //onjectId: string
    console.log('exec')

    switch( opt ) {
      case 1:
        this._colorA = 'yellowgreen';
        this._colorB = '';
        break;
      case 2:
        this._colorA = '';
        this._colorB = 'yellowgreen';
        break;
      case 3:
        this._colorA = '';
        this._colorB = '';
        break;
        
    }

    // const cola = <HTMLDivElement> document.getElementById(onjectId);
    // cola.style.backgroundColor = 'yellowgreen';
  }


  


}
