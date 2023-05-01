import { Component } from '@angular/core';
import { NavbarOptions } from 'src/constants';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
    menuCollapsed = false;
    menuOptionData = NavbarOptions;

    toggleMenuCollapse(): void {
        this.menuCollapsed = !this.menuCollapsed;
    }
}
