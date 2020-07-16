import { Component, OnInit } from '@angular/core';
import { Policy } from 'src/app/models/policy.interface';
import { PolicyService } from 'src/app/service/policy.service';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.scss']
})
export class PolicyListComponent implements OnInit {

  policies: Policy[] = [];
  constructor(private policyService: PolicyService) { }

  ngOnInit() {
    this.policyService.getPolicies().subscribe((data: any[]) => {
        console.log(data);
        this.policies = data;
    });
  }

  public createPolicy(policy) {
    this.policyService.createPolicy(policy).subscribe((ret) => {
          console.log('Policy created: ', ret);
    });
  }

  public deletePolicy(policyId) {
    this.policyService.deletePolicy(policyId).subscribe((ret) => {
          console.log('Policy deleted: ', ret);
    });
  }


  public updatePolicy(policy: {id: number, num: string, amount: number, clientId: number, userId: number, description: string}) {
    const newPolicy: {id: number, num: string, amount: number, clientId: number, userId: number, description: string} = {
      id: policy.id, num: '0', amount: 0, userId: policy.userId, clientId: policy.clientId, description: policy.description
    };
    this.policyService.updatePolicy(newPolicy).subscribe((ret) => {
        console.log('Policy updated: ', ret);
    });
  }

}
