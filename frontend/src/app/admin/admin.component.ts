import { Component, OnInit } from '@angular/core';
import { Todo } from './todo'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  todos: Todo[];
  contenttodo: string = "";
  descriptiontodo: string = "";
  timetodo: string = "";
  completiontodo: string = "";
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: "First Todo",
        description: "lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa vlorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa",
        time: "21-01-2010",
        completion: "25hrs",
        completed: false
      },
      {
        content: "Second Todo",
        description: "lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa",
        time: "21-01-2010",
        completion: "25hrs",
        completed: false
      },
      {
        content: "First Todo",
        description: "lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa vlorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa",
        time: "21-01-2010",
        completion: "25hrs",
        completed: false
      },
      {
        content: "Second Todo",
        description: "lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa",
        time: "21-01-2010",
        completion: "25hrs",
        completed: false
      },
      {
        content: "First Todo",
        description: "lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa vlorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa",
        time: "21-01-2010",
        completion: "25hrs",
        completed: false
      },
      {
        content: "Second Todo",
        description: "lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa",
        time: "21-01-2010",
        completion: "25hrs",
        completed: false
      },
      {
        content: "First Todo",
        description: "lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa vlorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa",
        time: "21-01-2010",
        completion: "25hrs",
        completed: false
      },
      {
        content: "Second Todo",
        description: "lorem lorem vsfsa vsdcvas csddc vdhjdvads dvsa",
        time: "21-01-2010",
        completion: "25hrs",
        completed: false
      }
    ]
  }
  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed
      return v
    })
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id)
  }
  addTodo() {
    this.todos.push({
      content: this.contenttodo,
      description: this.descriptiontodo,
      time: this.timetodo,
      completion: this.completiontodo,
      completed: false
    })
  }
}
