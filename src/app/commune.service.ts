import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commune } from './commune';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommuneService {
  public commune: Commune[] = [];
  constructor() {}
  create(infos: Commune) {
    this.commune.push(infos);
  }
}
