import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-details-session',
  templateUrl: './details-session.component.html',
  styleUrls: ['./details-session.component.scss']
})
export class DetailsSessionComponent implements OnInit {
  id: any;
session:any;
  constructor(private route: ActivatedRoute,private sessionService:SessionService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
this.sessionService.getSession(this.id).subscribe(res=>{
  this.session=res
  console.log(res);
  
})
  }
 
}
