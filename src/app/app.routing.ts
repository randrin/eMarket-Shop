import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { PresentationComponent } from './presentation/presentation.component';
import { ComponentsComponent } from './components/components.component';
import { SectionsComponent } from './sections/sections.component';
import { AboutusComponent } from './examples/aboutus/aboutus.component';
import { BlogpostComponent } from './examples/blogpost/blogpost.component';
import { BlogpostsComponent } from './examples/blogposts/blogposts.component';
import { ContactusComponent } from './examples/contactus/contactus.component';
import { EcommerceComponent } from './examples/ecommerce/ecommerce.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProductpageComponent } from './examples/productpage/productpage.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { RegisterComponent } from './examples/register/register.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { PricingComponent } from './examples/pricing/pricing.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AdministrationProduitsComponent } from './components/administration/administration-produits/administration-produits.component';
import { AdministrationUtilisateursComponent } from './components/administration/administration-utilisateurs/administration-utilisateurs.component';
import { AdministrationCategoriesComponent } from './components/administration/administration-categories/administration-categories.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { AdministraionSousCategoriesComponent } from './components/administration/administraion-sous-categories/administraion-sous-categories.component';
import { ProductsPromotionComponent } from './components/products/products-promotion/products-promotion.component';
import { ProductsDisponibleComponent } from './components/products/products-disponible/products-disponible.component';

const routes: Routes = [
    // { path: '', redirectTo: 'presentation', pathMatch: 'full' },
    { path: 'presentation',                             component: PresentationComponent },
    { path: 'components',                               component: ComponentsComponent },
    { path: 'sections',                                 component: SectionsComponent },
    { path: 'products/:idSubCategory/:idProduct',       component: ProductsComponent },
    { path: 'product-details/:idProduct',               component: ProductDetailsComponent },
    { path: 'products/promotion',                       component: ProductsPromotionComponent },
    { path: 'products/available',                       component: ProductsDisponibleComponent },
    { path: 'categories/:idCategory/subCategories',     component: CategoriesComponent },
    { path: 'register',                                 component: RegisterComponent },
    { path: 'login',                                    component: LoginComponent },
    { path: 'administration/produits',                  component: AdministrationProduitsComponent },
    { path: 'administration/categories',                component: AdministrationCategoriesComponent },
    { path: 'administration/utilisateurs',              component: AdministrationUtilisateursComponent },
    { path: 'administration/sous-categories',           component: AdministraionSousCategoriesComponent },
    { path: 'nucleoicons',                              component: NucleoiconsComponent },
    { path: 'examples/aboutus',     component: AboutusComponent },
    { path: 'examples/blogpost',    component: BlogpostComponent },
    { path: 'examples/blogposts',   component: BlogpostsComponent },
    { path: 'examples/contactus',   component: ContactusComponent },
    { path: 'examples/ecommerce',   component: EcommerceComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/pricing',     component: PricingComponent },
    { path: 'examples/productpage', component: ProductpageComponent },
    { path: 'examples/profile',     component: ProfileComponent },
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
          useHash: true
        })
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
