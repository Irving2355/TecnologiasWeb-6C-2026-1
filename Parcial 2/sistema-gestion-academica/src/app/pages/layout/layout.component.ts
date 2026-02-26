import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule, RouterOutlet],
    template: './layout.component.html'
})

export class LayoutComponent{}