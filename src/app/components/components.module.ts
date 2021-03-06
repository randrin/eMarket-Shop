import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { TagInputModule } from 'ngx-chips';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { NgxGalleryModule } from 'ngx-gallery';
import { ImageUploadModule } from '../shared/image-upload/image-upload.module';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalBasic } from './modal/modal.component';
import { PrefooterAreasComponent } from './prefooter-areas/prefooter-areas.component';
import { FootersAreasComponent } from './footers-areas/footers-areas.component';
import { TablesAreasComponent } from './tables-areas/tables-areas.component';
import { CommentsAreasComponent } from './comments-areas/comments-areas.component';
import { CardsAreasComponent } from './cards-areas/cards-areas.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { AdministrationProduitsComponent } from './administration/administration-produits/administration-produits.component';
import { AdministrationCategoriesComponent } from './administration/administration-categories/administration-categories.component';
import { AdministrationUtilisateursComponent } from './administration/administration-utilisateurs/administration-utilisateurs.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { AdministraionSousCategoriesComponent } from './administration/administraion-sous-categories/administraion-sous-categories.component';
import { ProductsPromotionComponent } from './products/products-promotion/products-promotion.component';
import { ProductsDisponibleComponent } from './products/products-disponible/products-disponible.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        NouisliderModule,
        TagInputModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        AngularMultiSelectModule,
        FormsModule,
        NgxGalleryModule,
        ImageUploadModule
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalBasic,
        PrefooterAreasComponent,
        FootersAreasComponent,
        TablesAreasComponent,
        CommentsAreasComponent,
        CardsAreasComponent,
        ProductsComponent,
        CategoriesComponent,
        AdministrationProduitsComponent,
        AdministrationCategoriesComponent,
        AdministrationUtilisateursComponent,
        ProductDetailsComponent,
        AdministraionSousCategoriesComponent,
        ProductsPromotionComponent,
        ProductsDisponibleComponent,
        CartComponent,
        PageNotFoundComponent
    ],
    exports: [ ComponentsComponent ]
})
export class ComponentsModule { }
