import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FiledRequest } from '../models/request/filed-request';

@Injectable({
  providedIn: 'root'
})
export class FiledService {

  constructor(private client: HttpClient) { }

  getField(fieldId: string): Observable<FiledRequest> {
    return this.client.get<FiledRequest>(environment.api);
  }
}
