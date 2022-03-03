import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Product } from './product';
import { ProductService } from './productservice';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'folks-front-project';
}
