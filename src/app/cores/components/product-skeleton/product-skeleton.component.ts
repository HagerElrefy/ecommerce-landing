import { Component } from '@angular/core';
import { Skeleton } from 'primeng/skeleton';

@Component({
  selector: 'app-product-skeleton',
  imports: [Skeleton],
  templateUrl: './product-skeleton.component.html',
  styleUrl: './product-skeleton.component.scss'
})
export class ProductSkeletonComponent {
}
