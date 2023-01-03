import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Category } from '../shared/category.model';

//import toastr from "toastr";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit, AfterContentChecked {

  currentAction: string = '';
  categoryForm!: FormGroup;
  pageTitle: string = '';
  serverErrorMessages: string[] = [];
  submittingForm: boolean = false;
  category?: Category = {};

  categories: Category[] = [
    { id: 1, name: 'Moradia', description: 'Pagamentos de contas de casa' },
    { id: 2, name: 'Saúde', description: 'Plano de saúde e remedios' },
    { id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc' },
    { id: 4, name: 'Salário', description: 'Recebimento de salario' },
    { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer' },
  ];

  ngOnInit(): void {
    this.setCurrentAction();
    this.buildCategoryForm();
    this.loadCategory();
  }

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngAfterContentChecked(): void {
    this.setPageTitle();
  }
  
  private setCurrentAction(): void {
    if (this.route.snapshot.url[0].path == 'new') {
      this.currentAction = 'new';
    } else {
      this.currentAction = 'edit';
    }
  }

  private buildCategoryForm(): void {
    this.categoryForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      description: [null]
    });
  }

  private loadCategory(): void {
    if (this.currentAction == 'edit') {
      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
          this.categoryForm.patchValue(this.categories[id-1])
          console.log(this.categoryForm.value);
      });
    }
  }

  private setPageTitle(): void {
    if (this.currentAction == 'new') {
      this.pageTitle = 'Cadastro de Nova Categoria';
    } else {
      const categoryName = this.categoryForm.get('name')?.value || '';
      this.pageTitle = 'Editando Categoria: ' + categoryName;
    }
  }

}
