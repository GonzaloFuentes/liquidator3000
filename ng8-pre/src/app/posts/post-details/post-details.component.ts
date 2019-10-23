import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService }       from '../../data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

export interface DialogData {
  nombre: string;
  valor:number;
  tipo:string;
}


@Component({
  selector: 'app-event-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  protected id: string;
  nombre:string;
  valor: number;
  tipo: string;
  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    public dialog: MatDialog
  ) { }

  //Recibe el ID del Evento
  ngOnInit() {
    this.route.params.subscribe( params => this.id = params.id );
    this.data.getEmployee(this.id);
  }

  addConcepto(): void {
          const dialogRefLogin = this.dialog.open(nuevoConcepto, {
          width: '400px',
          data: {nombre: this.nombre, valor: this.valor, tipo: this.tipo}
        });

        //DESPUES DE CERRARSE GUARDA LA DATA
        dialogRefLogin.afterClosed().subscribe(result => {
          let concepto = {nombre: result.nombre, valor: result.valor, tipo: result.tipo};
          console.log(concepto);
          //HACE EL POST
          this.data.addConcepto(concepto);

        });
  }

}

@Component({
selector: 'nuevoConcepto',
templateUrl: 'nuevoConcepto.html',
})
export class nuevoConcepto {
    constructor(
      public dialogRef: MatDialogRef<nuevoConcepto>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

//POP UP DEL LOGIN
@Component({
  selector: 'novedad',
  templateUrl: 'novedad.html',
  })
  export class novedad {
      constructor(
        public dialogRef: MatDialogRef<novedad>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  }
