import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from 'src/app/models/image.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit {

  @Input() images: Image;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cardSelected(id: string) {
    this.router.navigate(['/images', id]);
  }

}
