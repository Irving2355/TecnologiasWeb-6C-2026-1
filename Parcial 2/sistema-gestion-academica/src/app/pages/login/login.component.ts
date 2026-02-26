import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `<h2>Login</h2>
    <a routerLink="/dashboard">Ir a dashboard</a>`
})

export class LoginComponet{}