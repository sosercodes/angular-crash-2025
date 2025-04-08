# AngularCrash

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.

## Development

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

### Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## The Task Tracker App


### The `*ngFor` directive

The Angular code snippet `<p *ngFor="let task of tasks">{{ task.text }}</p>` demonstrates how to use the `*ngFor` directive to dynamically generate HTML elements based on an array of data. Here's a breakdown of its functionality:

1. **Directive**: 
   - `*ngFor` is a structural directive in Angular used to iterate over a list (in this case, the `tasks` array) and render a block of HTML for each item in the list.

2. **Syntax**:
   - The syntax `let task of tasks` means:
     - `task` is the variable that represents the current item in the iteration.
     - `tasks` is the array being iterated over.

3. **HTML Generation**:
   - For each item in the `tasks` array, Angular creates a new  element.
   - Inside each `` element, the value of `task.text` (a property of each object in the `tasks` array) is displayed.


### How to include Fontawsome

**Install Required Packages**

Run the following command in your terminal to install Font Awesome.

```bash
ng add @fortawesome/angular-fontawesome
```

**Import the "times" Icon in the Component**

In the component where you want to use the "times" icon, import it and bind it to a variable, we use `@fortawesome/free-solid-svg-icons`:

```typescript
import { Component, Input } from '@angular/core';
import { Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [FontAwesomeModule, NgStyle],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input() task!: Task;
  faTimes = faTimes;  // bind it to a property/variable

}
```

**Use the Icon in the Template**

Use the component to display the icon:

```html
<div class="task">
    <h3>{{task.text}}  <fa-icon [icon]="faTimes" [ngStyle]="{'color':'red'}"></fa-icon></h3>
    <p>{{task.day}}</p>
</div>
```

---

### What is `EventEmitter` 🔥 ?

`EventEmitter` is a class from `@angular/core` used in **child components** to emit custom events that parent components can listen to.

Let's say you have a button in a `button.componont.html` and you want to handle click events in the parent component.

```html
<button (click)="onClick()">Add</button>
```

##### **Child Component (`button.component.ts`)** 👇

Let's say you have a **button component** with this button and you want to notify the **parent component** when the button is clicked. Now, if you want this `onClick()` to **emit an event** to a parent component (like telling it "hey, something happened here!"), that’s where `EventEmitter` comes in.

```ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
})
export class ButtonComponent {
  @Output() addClicked = new EventEmitter<void>();
  onClick() {
    this.addClicked.emit();  // This sends an event to the parent
  }
}
```

- `@Output()` marks `addClicked` as an event the parent can subscribe to.
- `addClicked.emit()` fires the event.

##### **Parent Component (`parent.component.html`)** needs a listener

In the parent Component you have to add the `(addClicked)="handleAdd()"` to the `parent.component.html`.

```html
<app-button (addClicked)="handleAdd()"></app-button>
```

##### **Parent Component (`parent.component.ts`)** handles it

```ts
export class ParentComponent {
  handleAdd() {
    console.log('Add button clicked in child!');
    // Do something like add an item to a list
  }
}
```

The parent listens via `(addClicked)="handleAdd()"`.


#### 🧠 In Short

- `<button (click)="onClick()">Add</button>` triggers a method.
- That method uses `EventEmitter` to notify the parent.
- The parent listens via `(addClicked)="handleAdd()"`.


