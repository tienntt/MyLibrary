import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  // TODO: Load categories from database
  category: Category = {
    id: 1,
    name: 'Novel',
    description: 'Novel'
  };

  constructor() { }

  ngOnInit() {
  }

}
