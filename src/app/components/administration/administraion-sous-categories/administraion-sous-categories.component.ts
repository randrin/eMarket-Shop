import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'app/services/categories.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AdministrationCategoriesService } from 'app/services/administration-categories.service';
import { AuthentificationService } from 'app/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administraion-sous-categories',
  templateUrl: './administraion-sous-categories.component.html',
  styleUrls: ['./administraion-sous-categories.component.scss']
})
export class AdministraionSousCategoriesComponent implements OnInit {

  public categories;
  public subCategories;
  public editCategory;
  public closeResult: string;
  public mode: string;
  public focus1;
  public focus2;

  constructor(private categoriesService: CategoriesService, private modalService: NgbModal,
    private administrationCategoriesService: AdministrationCategoriesService, private authentificationService: AuthentificationService,
    private router: Router) { }

  ngOnInit() {
    this.getAllSubCaterogies();
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

  getAllSubCaterogies() {
    this.mode = 'Get Sous-Categorie';
    this.categoriesService.getAllCategories().subscribe(data => {
      this.categories = data;
    }, err => {
      console.log('Error CategoriesService - getAllCategories: ', err);
    });
  }

  getSubCategoriesByCategory(category) {
    console.log('sous-categories: ', category);
    const urlSubCategories = category._links.emarketSubCategories.href;
    console.log('Url sous-categories: ', urlSubCategories);
    this.categoriesService.getAllSousCategories(urlSubCategories).subscribe(data => {
      this.subCategories = data;
    }, err => {
      console.log('Error CategoriesService - getAllSousCategories: ', err);
    });
  }
}
