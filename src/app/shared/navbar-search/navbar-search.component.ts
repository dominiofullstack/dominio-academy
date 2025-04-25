import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-navbar-search',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './navbar-search.component.html',
  styleUrl: './navbar-search.component.scss'
})
export class NavbarSearchComponent {

}
