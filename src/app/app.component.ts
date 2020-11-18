import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todolist';
  tasks = [];

  todoForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.todoForm = this.fb.group({
      description: this.fb.control('',[Validators.required]),
      priority: this.fb.control('',[Validators.required]),
      dueDate: this.fb.control('',[Validators.required, dueDateValidator])
    })
  } 

  processForm(){;
    this.tasks.push(this.todoForm.value)
  }

}

// Validate the value of due date returned from form control
// Return null if validation passed and return object if validation failed
function dueDateValidator(control: AbstractControl): {[key: string]: boolean} | null {
  const today = new Date();
  const dueDate = new Date(control.value);
  
  if (dueDate < today )
  {
    return {dueDateInvalid: true };
  }  
  return null;
}