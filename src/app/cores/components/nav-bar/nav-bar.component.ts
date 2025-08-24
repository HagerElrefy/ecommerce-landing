import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { LogoComponent } from "../../../shared/logo/logo.component";
import { ButtonDirective, ButtonModule } from "primeng/button";
import { BasicButtonComponent } from '../../../shared/basic-button/basic-button.component';
import { InputTextModule } from 'primeng/inputtext';
import { Dialog } from 'primeng/dialog';
import { UserService } from '../../service/apiServices/user.service';
import { AuthFormsToggleService } from '../../service/auth-forms-toggle.service';


@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, OverlayBadgeModule, LogoComponent, ButtonDirective, BasicButtonComponent, ButtonModule, InputTextModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(public user: UserService, public loginFormFlag: AuthFormsToggleService) { }

  // @Output() dataEvent = new EventEmitter<boolean>();
  clickedOnLogInBtn() {
    this.loginFormFlag.show();

  }
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
  iconsItems = [{ icon: 'pi pi-heart', badge: true }, { icon: 'pi pi-shopping-bag', badge: true }, { icon: 'pi pi-user' }];
  linksToggele: boolean = false;
  toggleShow() {
    this.linksToggele = !this.linksToggele
  }
}
