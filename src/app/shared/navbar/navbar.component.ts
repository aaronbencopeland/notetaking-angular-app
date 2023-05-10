import { Component, Input } from '@angular/core';
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
    searchText = "";

    // Will set menuCollapsed to true if screen width eclipses 800px
    toggleMenuQueryListener = mediaQueryListener('(min-width: 800px)').subscribe((matches) => {
        if(matches) {
            this.menuCollapsed = true;
        }
    });

    onHandleSearchSubmit = (e: any) => {
        e.preventDefault();

        if(this.searchText) {
            // Implement search logic here

            this.searchText = "";
        }
    };

    onSearchChange = (event: Event) => {
        const input = event.target as HTMLInputElement;

        this.searchText = input.value;
    }
    
    toggleMenuCollapse(): void {
        this.menuCollapsed = !this.menuCollapsed;
    }
}
