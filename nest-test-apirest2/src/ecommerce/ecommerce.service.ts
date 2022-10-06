import { Injectable } from '@nestjs/common';
import { EcommerceDTO } from './ecommerce.types';

let carrito: EcommerceDTO[] = [];
@Injectable()
export class EcommerceService {
  getProds() {
    return carrito;
  }

  addProd(prod: EcommerceDTO) {
    carrito.push(prod);
    return carrito;
  }

  updateProd(prod: EcommerceDTO) {
    const producto = carrito.find((product) => product.id === prod.id);
    if (producto) {
      carrito.map((product) => {
        if (product.id == producto.id) {
          product.nombre = prod.nombre;
          product.imagen = prod.imagen;
          product.stock = prod.stock;
          return product;
        } else {
          return product;
        }
      });
      return carrito;
    } else {
      return 'Producto no encontrado';
    }
  }

  deleteProd(id: number) {
    carrito = carrito.filter((prod) => prod.id != id);
    return carrito;
  }
}
