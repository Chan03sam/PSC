import { Injectable } from '@angular/core';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private firestore: AngularFirestore) {}

  addRequest(request: any) {
    return this.firestore.collection('requests').add(request);
  }

  getRequests() {
    // Use orderBy to sort the requests by timestamp in descending order
    return this.firestore.collection('requests', ref => ref.orderBy('timestamp', 'desc')).valueChanges();
  }

  updateRequestStatus(requestId: string, status: string) {
    return this.firestore.collection('requests').doc(requestId).update({ status });
  }
  

}
