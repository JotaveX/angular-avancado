import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExempleFormComponent } from './exemple-form/exemple-form.component';
import { ExempleListComponent } from './exemple-list/exemple-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IMaskModule } from 'angular-imask';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {CheckboxModule} from 'primeng/checkbox';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import { NgxMaskModule, IConfig } from 'ngx-mask'

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;


@NgModule({
  declarations: [ExempleFormComponent, ExempleListComponent],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    SharedModule,
    InputMaskModule,
    CalendarModule,
    InputNumberModule,
    IMaskModule,
    FileUploadModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    NgxMaskModule.forRoot(),
    MatDatepickerModule
  ]
})
export class ExamplesModule { }
