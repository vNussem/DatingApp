import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.css",
})
export class RegisterComponent {
  @Input() usersFromHomeComponent: any;
  model: any = {};

  register() {
    console.log(this.model);
  }
  cancel() {
    console.log("cancelled");
  }
}
