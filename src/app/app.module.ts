import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app-root/app.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component';
import { ContactListComponent } from './cmps/ContactList/contact-list.component';
import { ContactPreviewComponent } from './cmps/ContactPreview/contact-preview.component';
import { ContactFilterComponent } from './cmps/ContactFilter/contact-filter.component';
import { HomeComponent } from './pages/home/home.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactDetailsPageComponent } from './pages/ContactDetailsPage/contact-details-page.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ContactEditComponent } from './cmps/contact-edit/contact-edit.component';
import { AppFooterComponent } from './cmps/app-footer/app-footer.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { TransferFoundComponent } from './cmps/transfer-found/transfer-found.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactIndexComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactFilterComponent,
    HomeComponent,
    StatisticPageComponent,
    ContactDetailsPageComponent,
    AppHeaderComponent,
    ContactEditComponent,
    AppFooterComponent,
    SignupPageComponent,
    TransferFoundComponent,
    MoveListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
