import { Component } from '@angular/core';
import { Skeleton } from 'primeng/skeleton';
import { LoaderService } from '../../service/loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-skeleton',
  imports: [Skeleton, CommonModule],
  templateUrl: './product-skeleton.component.html',
  styleUrl: './product-skeleton.component.scss'
})
export class ProductSkeletonComponent {
  constructor(public loader: LoaderService) { }
}
