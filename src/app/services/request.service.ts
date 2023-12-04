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
    return this.firestore.collection('requests').valueChanges();
  }

  updateRequestStatus(requestId: string, status: string) {
    return this.firestore.collection('requests').doc(requestId).update({ status });
  }
  

}
