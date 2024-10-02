import { Component } from '@angular/core';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrl: './lecture.component.css'
})
export class LectureComponent {
  name: string = "hadeel";
  number: number = 27;
  urlImg: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/2048px-Google_Translate_logo.svg.png";
  display = true;
  numtest = 9;

  onchangeHadeel() {
    this.name = "Rawaa";
  }


  userobj = {
    name: "hadeel",
    age: 27,
    color : "red"
  }

  arr = [
    {
      name: "hadeel",
      age: 27,
      color: "red"
    },
    {
      name: "rahaf",
      age: 24,
      color: "green"
    },
    {
      name: "rawaa",
      age: 26,
      color: "yellow"
    },
    {
      name: "ayah",
      age: 28,
      color: "black"
    }
  ]
}
