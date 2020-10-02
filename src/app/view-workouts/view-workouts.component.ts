import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../services/workout-service.service'

@Component({
  selector: 'app-view-workouts',
  templateUrl: './view-workouts.component.html',
  styleUrls: ['./view-workouts.component.css']
})
export class ViewWorkoutsComponent implements OnInit {
  
  workouts
  selectedWorkout
  isEdit = false

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
}
