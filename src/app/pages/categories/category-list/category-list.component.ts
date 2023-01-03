import { Component } from '@angular/core';
import { Category } from '../shared/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  CategoryEdit(id: any){
    alert('Edit');
  }

  categories: Category[] = [
    { id: 1, name: 'Moradia', description: 'Pagamentos de contas de casa' },
    { id: 2, name: 'Saúde', description: 'Plano de saúde e remedios' },
    { id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc' },
    { id: 4, name: 'Salário', description: 'Recebimento de salario' },
    { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer' },
  ];

  deleteCategory(id: any){
    const mustDelete = confirm('Deseja realmente excluir este item?');
    if(mustDelete){
      this.categories = this.categories.filter(x => x.id !== id);
    }
  }

}
