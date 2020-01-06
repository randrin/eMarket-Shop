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

const routes: Routes = [
    // { path: '', redirectTo: 'presentation', pathMatch: 'full' },
    { path: 'presentation',                     component: PresentationComponent },
    { path: 'components',                       component: ComponentsComponent },
    { path: 'sections',                         component: SectionsComponent },
    { path: 'products/:idCategory/:idProduct',  component: ProductsComponent },
    { path: 'categories',                       component: CategoriesComponent },
    { path: 'login',                            component: LoginComponent },
    { path: 'administration/produits',          component: AdministrationProduitsComponent },
    { path: 'administration/categories',        component: AdministrationCategoriesComponent },
    { path: 'administration/utilisateurs',      component: AdministrationUtilisateursComponent },
    { path: 'nucleoicons',                      component: NucleoiconsComponent },
    { path: 'examples/aboutus',     component: AboutusComponent },
    { path: 'examples/blogpost',    component: BlogpostComponent },
    { path: 'examples/blogposts',   component: BlogpostsComponent },
    { path: 'examples/contactus',   component: ContactusComponent },
    { path: 'examples/ecommerce',   component: EcommerceComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/pricing',     component: PricingComponent },
    { path: 'examples/productpage', component: ProductpageComponent },
    { path: 'examples/profile',     component: ProfileComponent },
    { path: 'examples/register',    component: RegisterComponent }
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
