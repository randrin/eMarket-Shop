import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'app/services/categories.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AdministrationCategoriesService } from 'app/services/administration-categories.service';
import { AuthentificationService } from 'app/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration-categories',
  templateUrl: './administration-categories.component.html',
  styleUrls: ['./administration-categories.component.scss']
})
export class AdministrationCategoriesComponent implements OnInit {

  public categories;
  public editCategory;
  public closeResult: string;
  public mode: string;
  public focus1;
  public focus2;

  constructor(private categoriesService: CategoriesService, private modalService: NgbModal,
    private administrationCategoriesService: AdministrationCategoriesService, private authentificationService: AuthentificationService,
    private router: Router) { }

  ngOnInit() {
    this.getAllCaterogies();
  }

  getAllCaterogies() {
    this.mode = 'Get Categorie';
    this.categoriesService.getAllCategories().subscribe(data => {
      this.categories = data;
    }, err => {
      console.log('Error CategoriesService - getAllCategories: ', err);
    });
  }

  open(content, type, modalDimension) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
        this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    } else if (modalDimension === 'md' && type === 'Login') {
      this.modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return  `with: ${reason}`;
    }
  }

  onDeleteCategory(category) {
    console.log(category);
    this.administrationCategoriesService.onDeleteCategory(category._links.self.href).subscribe(data => {
      this.getAllCaterogies();
    }, err => {
      console.log('Error AdministrationCategoriesService - onDeleteCategory: ', err);
    });
  }

  AddCategorie(category) {
    this.mode = 'Add Categorie';
  }

  EditCategorie(category) {
    console.log('category', category.active);
    this.editCategory = category;
    this.mode = 'Edit Categorie';
    console.log('editCategory.active', this.editCategory.active);
  }

  BackToCategories() {
    this.mode = 'Get Categorie';
    this.router.navigateByUrl('/administration/categories');
  }

  onSaveCategory(category) {
    const url = this.categoriesService.categoriestUrl;
    this.administrationCategoriesService.onSaveCategory(category, url).subscribe(data => {
      this.getAllCaterogies();
    }, err => {
      console.log('Error AdministrationCategoriesService - onSaveCategory: ', err);
    });
  }

  onEditCategory(category) {
    this.administrationCategoriesService.onEditCategory(category, this.editCategory._links.self.href).subscribe(data => {
      this.getAllCaterogies();
    }, err => {
      console.log('Error AdministrationCategoriesService - onEditCategory: ', err);
    });
  }
}
