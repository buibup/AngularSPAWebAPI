import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

const sharedModules: any[] = [
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MaterialModule
];

@NgModule({
    imports: sharedModules,
    exports: sharedModules
})

export class SharedModule { }
