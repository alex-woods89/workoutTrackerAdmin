import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'


@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(private firestore: AngularFirestore) { }

  getWorkouts(){
    return this.firestore.collection('/workouts').snapshotChanges()
  }

  createWorkout(workout){
   this.firestore.collection('workouts').add(workout)
  }

  updateWorkout(workout){
    this.firestore.doc('workouts/' + workout.id).update(workout)
  }

  deleteWorkout(workoutId){
    this.firestore.doc('workouts/' + workoutId).delete()
  }

}
