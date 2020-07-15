import { Component, OnInit } from '@angular/core';
import { PolicyService } from './service/policy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-entity-effects';

  policies: any[] = [];
  constructor(private policyService: PolicyService) { }

  ngOnInit() {
    this.policyService.getPolicies().subscribe((data : any[])=>{
        console.log(data);
        this.policies = data;
    });
  }
}
