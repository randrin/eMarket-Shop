import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { SectionsModule } from './sections/sections.module';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { PresentationModule } from './presentation/presentation.module';
import { AuthentificationService } from './services/authentification.service';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';
import { AdministrationCategoriesService } from './services/administration-categories.service';
import { AdministrationUtilisateursService } from './services/administration-utilisateurs.service';
import { AdministrationProduitsService } from './services/administration-produits.service';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule,
        PresentationModule,
        SectionsModule,
        ComponentsModule,
        ExamplesModule
    ],
    providers: [
        AuthentificationService,
        ProductsService,
        CategoriesService,
        AdministrationCategoriesService,
        AdministrationUtilisateursService,
        AdministrationProduitsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
