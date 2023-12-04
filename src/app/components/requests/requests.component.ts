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
    // fetch requests from Firebase, sorted by timestamp in descending order
    this.requests$ = this.requestService.getRequests().pipe(
      map((data: any) => {
        // Convert the data to an array
        const requestsArray = Object.keys(data).map(key => ({ ...data[key], showContent: false }));
        
        // Sort the array by timestamp in descending order
        return requestsArray.sort((a, b) => b.timestamp - a.timestamp);
      })
    );
  }

  toggleContent(request: any): void {
    request.showContent = !request.showContent;
  }

  approveRequest(requestId: string) {
    this.requestService.updateRequestStatus(requestId, 'approve');
  }

  rejectRequest(requestId: string) {
    this.requestService.updateRequestStatus(requestId, 'reject');
  }
  
}
  
