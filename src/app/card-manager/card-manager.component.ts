import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-card-manager',
  templateUrl: './card-manager.component.html',
  styleUrls: ['./card-manager.component.css']
})
export class CardManagerComponent implements OnInit{
  cards:any;
  constructor(private api:ApiService) {}
  ngOnInit(): void {
    this.getAllData()
  }
getAllData()
{
  this.api.getAllData().subscribe((data:any)=>{
    console.log(data);
    this.cards=data
  })
}
}
