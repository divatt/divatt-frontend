import { Component, OnInit, Input } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
import { CartItem } from '../../classes/cart-item';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';
import { Observable, of } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-header-widgets',
  templateUrl: './header-widgets.component.html',
  styleUrls: ['./header-widgets.component.css']
})
export class HeaderWidgetsComponent implements OnInit {

  @Input() shoppingCartItems  :   CartItem[] = [];

  public show  :   boolean = false;

  constructor(private cartService: CartService,
   public productsService: ProductsService) { }

  ngOnInit() { }

  public updateCurrency(curr) {
    this.productsService.currency = curr;
  }

  // public changeLanguage(lang){
  //   this.translate.use(lang)
  // }

  public openSearch() {
    this.show = true;
  }

  public closeSearch() {
    this.show = false;
  }

  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  public removeItem(item: CartItem) {
    this.cartService.removeFromCart(item);
  }

}
