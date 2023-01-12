import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../categories/shared/category.model';

@Component({
  selector: 'app-exemple-form',
  templateUrl: './exemple-form.component.html',
  styleUrls: ['./exemple-form.component.css']
})
export class ExempleFormComponent {

  currentAction: string = '';
  categoryForm!: FormGroup;
  pageTitle!: string;
  serverErrorMessages!: string[];
  submittingForm: boolean = false;
  category?: Category = {};

  imaskConfig = {
    mask: Number,
    scale: 2,
    thousandsSeparator: '',
    padFractionalZeros: true,
    normalizeZeros: true,
    radix: ','
  };

  categories: Category[] = [
    { id: 1, name: 'Moradia', description: 'Pagamentos de contas de casa' },
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

  submitForm(): void {
    this.submittingForm = true;

    if (this.currentAction == 'new') {
      this.createCategory();
    } else {
      this.updateCategory();
    }
  }

  private createCategory(): void {
    const category: Category = Object.assign(new Category(), this.categoryForm.value);
    console.log(category);
    //this.categoryService.create(category)
      //.subscribe(
        //category => this.actionsForSuccess(category),
        //error => this.actionsForError(error)
      //)
      this.actionsForSuccess(category);
  }

  private updateCategory(): void {
    const category: Category = Object.assign(new Category(), this.categoryForm.value);
    console.log(category);
    //this.categoryService.update(category)
      //.subscribe(
        //category => this.actionsForSuccess(category),
        //error => this.actionsForError(error)
      //)
  }

  private actionsForSuccess(category: Category): void {
    // redirect/reload component page
    this.router.navigateByUrl('categories', { skipLocationChange: true }).then(
      () => this.router.navigate(['categories', category.id, 'edit'])
    )
  }

  private actionsForError(error: any): void {    
    this.submittingForm = false;
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

  OnChange(event: any) {
    console.log(event.target.value);
    console.log()
  }


}
