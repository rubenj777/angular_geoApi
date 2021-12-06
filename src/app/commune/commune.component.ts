import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Commune } from '../commune';
import { NgForm } from '@angular/forms';
import { CommuneService } from '../commune.service';

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.scss'],
})
export class CommuneComponent implements OnInit {
  public nom!: string;
  public tabCommune: Commune[] = [];
  constructor(
    private http: HttpClient,
    private singletonCommune: CommuneService
  ) {
    this.http
      .get('https://geo.api.gouv.fr/communes?nom=Lyon')
      .toPromise()
      .then((data) => {
        console.log(data);
        this.tabCommune.push(data);
      });
  }

  submit(form: NgForm) {
    console.log(this.nom);
  }

  ngOnInit(): void {}
}
