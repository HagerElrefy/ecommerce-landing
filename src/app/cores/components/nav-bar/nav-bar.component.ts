import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { LogoComponent } from "../../../shared/logo/logo.component";
import { ButtonDirective, ButtonModule } from "primeng/button";
import { BasicButtonComponent } from '../../../shared/basic-button/basic-button.component';
import { InputTextModule } from 'primeng/inputtext';
import { UserService } from '../../service/apiServices/user.service';
import { AuthFormsToggleService } from '../../service/auth-forms-toggle.service';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, OverlayBadgeModule, LogoComponent, ButtonDirective, BasicButtonComponent, ButtonModule, InputTextModule, Menu],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(public user: UserService, public loginFormFlag: AuthFormsToggleService) { }
  ngOnInit() {
    this.userOptions = [
      {
        items: [
          {
            label: 'Profile',
            icon: 'pi pi-user',
            command: () => {
            }
          },
          {
            label: 'Log out',
            icon: 'pi pi-sign-out',
            command: () => {
              this.user.logOut();
            }
          }
        ]
      }
    ];

  }
  userOptions: MenuItem[] | undefined;


  clickedOnLogInBtn() {
    this.loginFormFlag.show();
  }

  links = [
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
  iconsItems = [{ icon: 'pi pi-heart', badge: true }, { icon: 'pi pi-shopping-bag', badge: true }];
  linksToggele: boolean = false;
  toggleShow() {
    this.linksToggele = !this.linksToggele
  }
}
