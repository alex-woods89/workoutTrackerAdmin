import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../services/workout-service.service'

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

  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
  }
  
  addExersize(){
    if(this.exersize.name !== "" || this.exersize.sets !== "" || this.exersize.reps !== "") {
      this.exersizes.push(this.exersize)
    }
    this.exersize = {name: "", sets:"", reps:""}
  }

  saveWorkout(){
    this.workout = {name: this.workoutName, exersizes: this.exersizes}
    this.workoutService.createWorkout(this.workout)
    this.exersizes = []
    this.workoutName = ""
    window.alert("Workout saved succesfully")
  }
}
