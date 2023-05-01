import { Component } from '@angular/core';
import { NavbarOptions } from 'src/constants';
import { mediaQueryListener } from 'src/utils/MediaQueries';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
    menuCollapsed = true;
    menuOptionData = NavbarOptions;

    // Will set menuCollapsed to true if screen width eclipses 800px
    toggleMenuQueryListener = mediaQueryListener('(min-width: 800px)').subscribe((matches) => {
        if(matches) {
            this.menuCollapsed = true;
        }
    });
    
    toggleMenuCollapse(): void {
        this.menuCollapsed = !this.menuCollapsed;
    }
}
