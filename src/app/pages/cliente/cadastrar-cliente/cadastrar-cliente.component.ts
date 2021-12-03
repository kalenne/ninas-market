import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {

  formCliente: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.formCliente = this.fb.group({
      name: this.fb.control(""),
      email: this.fb.control(""),
      password: this.fb.control("")
    })
  }

  ngOnInit(): void {
  }

  salvarDados(){
    const alerta = this.formCliente.value;
    alert(`Nome é ${alerta.name}, Email é ${alerta.email}`);
  }

}
