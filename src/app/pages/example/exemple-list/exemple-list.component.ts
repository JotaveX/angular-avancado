import { Component } from '@angular/core';
import { Example } from '../shared/example.model';

@Component({
  selector: 'app-exemple-list',
  templateUrl: './exemple-list.component.html',
  styleUrls: ['./exemple-list.component.css']
})
export class ExempleListComponent {

  examples: Example[] = [
    new Example(1, 'Example 1', 'Description 1', '2021-01-01', true, 'https://picsum.photos/50', 20, '123456789'),
    new Example(2, 'Example 2', 'Description 2', '2021-02-03', false, 'https://picsum.photos/50', 20, '123456789'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  deleteCategory(id: any){
    console.log('deleteCategory()');
  }

}
