import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  isLoggedIn = false;
  usuario = '';
  password = '';

  nuevoNombre = '';
  nuevoCargo = '';
  idEdicion: number | null = null; // Para saber si estamos editando

  empleados = [
    { id: 1, nombre: 'Roberth Lagos', cargo: 'Coordinador / Dev', estado: 'Activo' },
    { id: 2, nombre: 'Ana Martínez', cargo: 'Recursos Humanos', estado: 'Activo' },
  ];

  login() {
    if (this.usuario === 'admin' && this.password === 'uth2026') {
      this.isLoggedIn = true;
    } else {
      alert('Credenciales incorrectas');
    }
  }

  logout() {
    this.isLoggedIn = false;
  }

  // Operación de CREAR y ACTUALIZAR (30% de la rúbrica)
  guardarEmpleado() {
    if (this.nuevoNombre === '' || this.nuevoCargo === '') {
      alert('Llene los campos');
      return;
    }

    if (this.idEdicion !== null) {
      // ACTUALIZAR
      const index = this.empleados.findIndex((e) => e.id === this.idEdicion);
      this.empleados[index].nombre = this.nuevoNombre;
      this.empleados[index].cargo = this.nuevoCargo;
      this.idEdicion = null;
    } else {
      // CREAR
      const nuevo = {
        id: this.empleados.length + 1,
        nombre: this.nuevoNombre,
        cargo: this.nuevoCargo,
        estado: 'Activo',
      };
      this.empleados.push(nuevo);
    }
    this.nuevoNombre = '';
    this.nuevoCargo = '';
  }

  // Subir datos al formulario para EDITAR
  prepararEdicion(emp: any) {
    this.idEdicion = emp.id;
    this.nuevoNombre = emp.nombre;
    this.nuevoCargo = emp.cargo;
  }

  eliminarEmpleado(id: number) {
    if (confirm('¿Desea eliminar este registro?')) {
      this.empleados = this.empleados.filter((e) => e.id !== id);
    }
  }
}
