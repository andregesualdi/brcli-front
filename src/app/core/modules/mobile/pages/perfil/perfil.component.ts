import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from '../../../../shared/models/paciente.model';
import { MockPaciente } from '../../../../../../assets/mocks/mock-paciente';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  public arquivo: string | undefined;

  public paciente: Paciente  | undefined

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.paciente = MockPaciente.paciente;
    this.arquivo = this.paciente.imagem;
  }

  public onFileChange(event: any): void {
    const files = event.target.files as FileList;
    const tiposPermitidos = ['image/png', 'image/jpeg', 'image/gif'];

    if (files.length > 0) {
      if (!tiposPermitidos.includes(files[0].type)) {
        alert('Tipo de arquivo não permitido');
      } else if (Math.round(files[0].size / 1024) > 2048) {
        alert('Arquivo muito grande');
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
          this.arquivo = String(reader.result);
        }
        this.resetInput();   
      }
    }
  
  }

  public resetInput(): void {
    const input = document.getElementById('avatar-perfil') as HTMLInputElement;
    if(input){
      input.value = "";
    }
  }

  public sair(): void {
    this.router.navigate(['']);
  }
}
