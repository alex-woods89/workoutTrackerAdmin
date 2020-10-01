import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css']
})
export class CreateWorkoutComponent implements OnInit {
  
  workout = {name: "", exersizes: []}
  exersizes = []
  exersize = {name: "", sets:"", reps:""}
  workoutName = ""

  constructor() { }

  ngOnInit() {
  }
  
  addExersize(){
    console.log("add exersize pressed")
    console.log(this.workoutName)
    if(this.exersize.name !== "" || this.exersize.sets !== "" || this.exersize.reps !== "") {
      this.exersizes.push(this.exersize)
    }
    this.exersize = {name: "", sets:"", reps:""}
  }

  saveWorkout(){
    this.workout = {name: this.workoutName, exersizes: this.exersizes}
    console.log(this.workout)
  }
}
