import { Component, EventEmitter, input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.css",
})
export class RegisterComponent {
  usersFromHomeComponent = input.required<any>();
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  register() {
    console.log(this.model);
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
}
