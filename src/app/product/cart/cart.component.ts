import { Component, OnInit } from '@angular/core';
import { Product } from '../../classes/product';
import { CartItem } from '../../classes/cart-item';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartItems          :   Observable<CartItem[]> = of([]);
  public shoppingCartItems  :   CartItem[] = [];
 
  constructor(private productsService: ProductsService,
    private cartService: CartService) { }

  ngOnInit() {
  	this.cartItems = this.cartService.getItems();
    this.cartItems.subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
  }
 
  // Increase Product Quantity
  public increment(product: any, quantity: number = 1) {
    this.cartService.updateCartQuantity(product,quantity);
  }
  
  // Decrease Product Quantity
  public decrement(product: any, quantity: number = -1) {
    this.cartService.updateCartQuantity(product,quantity);
  }
  
  // Get Total
  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }
  
  // Remove cart items
  public removeItem(item: CartItem) {
    this.cartService.removeFromCart(item);
  }

}
