import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OverlayBadgeModule } from 'primeng/overlaybadge';


@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule , OverlayBadgeModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  items = [
    {
      label: 'Home',
      root: true,

    },
    {
      label: 'All Categories',
      root: true
    },
    {
      label: 'About',
      root: true
    },
    {
      label: 'Contact',
      root: true
    }
  ];
  iconsItems = [{ icon: 'pi pi-search' }, { icon: 'pi pi-heart' , badge: true }, { icon: 'pi pi-shopping-bag' , badge: true }, { icon: 'pi pi-user' }];
  linksToggele:boolean = false;
  toggleShow() {
    this.linksToggele = !this.linksToggele
  }
}
