import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { ViewAllBooksComponent } from "./pages/view-all-books/view-all-books.component";
import { FooterComponent } from "./common/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavComponent, ViewAllBooksComponent, FooterComponent]
})
export class AppComponent {
  title = 'library-management-sys';
}
