import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  isDirty: boolean = true;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/list']);
  }
}
