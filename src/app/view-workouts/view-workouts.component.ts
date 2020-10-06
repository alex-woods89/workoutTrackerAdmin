import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../services/workout-service.service'

@Component({
  selector: 'app-view-workouts',
  templateUrl: './view-workouts.component.html',
  styleUrls: ['./view-workouts.component.css']
})
export class ViewWorkoutsComponent implements OnInit {
  
  workouts
  selectedWorkout = {name: "", id:"", exersizes: []}
  selectedExcersize
  isEdit = false
  newExersize = {}

  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.workoutService.getWorkouts().subscribe(data => {
      this.workouts = data.map(e => {
        return {
        id: e.payload.doc.id,
        name: e.payload.doc.data()['name'],
        exersizes: e.payload.doc.data()['exersizes']
        }
      })
    })
  }

  selectWorkout(workout){
    this.selectedWorkout = workout
  }

  deleteWorkout(){
    this.workoutService.deleteWorkout(this.selectedWorkout.id)
  }

  edit(x){
    this.isEdit = true
    this.selectedExcersize = x
  }

  updateWorkout(){
    let index = this.selectedWorkout.exersizes.indexOf(this.selectedExcersize)
    this.selectedWorkout.exersizes.splice(index, 1, this.newExersize)
    this.workoutService.updateWorkout(this.selectedWorkout)
    this.isEdit = false
  }
}
