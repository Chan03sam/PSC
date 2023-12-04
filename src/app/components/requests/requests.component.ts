import { Component } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent {
  requests$: Observable<any[]>;
  showContent?: boolean;

  constructor(private requestService: RequestService) {
    // fetch requests from Firebase
    this.requests$ = this.requestService.getRequests().pipe(
      map((data: any) => {
        // Convert the data to an array and add the showContent property
        return Object.keys(data).map(key => ({ ...data[key], showContent: false }));
      })
    );
  }

  toggleContent(request: any): void {
    request.showContent = !request.showContent;
  }

  // implement methods to approve or reject requests
  approveRequest(requestId: string) {
    // update request status to 'approve' in Firestore
    this.requestService.updateRequestStatus(requestId, 'approve');
  }

  rejectRequest(requestId: string) {
    // update request status to 'reject' in Firestore
    this.requestService.updateRequestStatus(requestId, 'reject');
  }
  
}
  
