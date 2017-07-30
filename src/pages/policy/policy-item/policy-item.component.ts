import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { PolicyService} from "../policy.service";

@Component({
  selector: 'app-policy-item',
  templateUrl: './policy-item.component.html',
  styleUrls: ['./policy-item.component.scss']
})
export class PolicyItemComponent implements OnInit {
  @Input() policy:any
  @Output() policyClick = new EventEmitter<any>();
  constructor(public policyServ:PolicyService) { 
  }
  onPolicyClick(){
    this.policyClick.emit(this.policy)
  }
  ngOnInit() {
  }
}
