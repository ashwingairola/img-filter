import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { UtilitiesModule } from 'src/app/modules/utilities/utilities.module';
import { HomeComponent } from './components/home/home.component';
import { FilterControlModule } from 'src/app/modules/filter-control/filter-control.module';
import { ButtonModule } from 'src/app/modules/button/button.module';
import { FileInputModule } from 'src/app/modules/file-input/file-input.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    UtilitiesModule,
    FilterControlModule,
    ButtonModule,
    FileInputModule
  ]
})
export class HomeModule {}
