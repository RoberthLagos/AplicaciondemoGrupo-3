import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  isLoggedIn = false;
  usuario = '';
  password = '';

  // Variables para el Catálogo
  nombreProd = '';
  categoriaProd = '';
  precioProd: number | null = null;
  idEdicion: number | null = null;

  // Lista inicial (Base de Datos simulada)
  productos = [
    { id: 1, nombre: 'Laptop Dell Inspiron', categoria: 'Electrónica', precio: 15500 },
    { id: 2, nombre: 'Teclado Mecánico RGB', categoria: 'Accesorios', precio: 1200 },
    { id: 3, nombre: 'Monitor 24" Full HD', categoria: 'Electrónica', precio: 4500 }
  ];

  login() {
    if (this.usuario === 'admin' && this.password === 'uth2026') {
      this.isLoggedIn = true;
    } else {
      alert('Credenciales incorrectas');
    }
  }

  logout() { this.isLoggedIn = false; }

  // CREAR Y ACTUALIZAR
  guardarProducto() {
    if (!this.nombreProd || !this.categoriaProd || !this.precioProd) {
      alert('Complete todos los datos del producto');
      return;
    }

    if (this.idEdicion !== null) {
      const index = this.productos.findIndex(p => p.id === this.idEdicion);
      this.productos[index] = { id: this.idEdicion, nombre: this.nombreProd, categoria: this.categoriaProd, precio: this.precioProd };
      this.idEdicion = null;
    } else {
      const nuevo = { id: this.productos.length + 1, nombre: this.nombreProd, categoria: this.categoriaProd, precio: this.precioProd };
      this.productos.push(nuevo);
    }
    this.limpiar();
  }

  prepararEdicion(prod: any) {
    this.idEdicion = prod.id;
    this.nombreProd = prod.nombre;
    this.categoriaProd = prod.categoria;
    this.precioProd = prod.precio;
  }

  eliminarProducto(id: number) {
    if (confirm('¿Eliminar este producto del catálogo?')) {
      this.productos = this.productos.filter(p => p.id !== id);
    }
  }

  limpiar() {
    this.nombreProd = '';
    this.categoriaProd = '';
    this.precioProd = null;
  }
}
