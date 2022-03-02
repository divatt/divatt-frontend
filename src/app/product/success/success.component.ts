import { Component, OnInit } from '@angular/core';
import { Order } from '../../classes/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  public orderDetails : Order = {};

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  	this.orderDetails = this.orderService.getOrderItems();
  }

}
