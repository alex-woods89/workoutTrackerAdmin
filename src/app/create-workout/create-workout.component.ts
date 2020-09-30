import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css']
})
export class CreateWorkoutComponent implements OnInit {
  
  workout = {name: "", excersizes: []}
  excersizes = []
  excersize = {name: "", sets:"", reps:""}
  workoutName = ""

  constructor() { }

  ngOnInit() {
  }
  
  addExcersize(){
    console.log("add excersize pressed")
    console.log(this.workoutName)
    if(this.excersize.name !== "" || this.excersize.sets !== "" || this.excersize.reps !== "") {
      this.excersizes.push(this.excersize)
    }
    this.excersize = {name: "", sets:"", reps:""}
  }

  saveWorkout(){
    this.workout = {name: this.workoutName, excersizes: this.excersizes}
    console.log(this.workout)
  }
}
