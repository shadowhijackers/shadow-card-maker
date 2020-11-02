import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {AlertService} from './alert.service';
import {ProfileInfo} from "../models/profile-builder";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) {
  }

  private errorHandler(operationName: string, defaultData): (e) => Observable<any> {
    return (error: HttpErrorResponse) => {
      const errorMessage = (error.error instanceof ErrorEvent) ?
        error.error.message : `server returned code ${error.status} with body "${JSON.stringify(error.error)}"`;

      this.alertService.toastAlert(errorMessage, operationName);
      return of({errors: errorMessage, data: defaultData});
    };
  }

  fetchProfileInfo(pathId: string): Observable<{ error: boolean, data: ProfileInfo }> {
    return this.http.get(`api/profile/${pathId}`, {observe: 'response'}).pipe(
      catchError(err => of(err))
    );
  }

  submitMail(profileId: string, payload: any) {
    return this.http.post(`api/mail/${profileId}`, payload, {observe: 'response'})
  }
}
