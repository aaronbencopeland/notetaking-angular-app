import { Component } from '@angular/core';
import { NavbarOptions } from 'src/constants';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
    menuOptionData = NavbarOptions;
}
