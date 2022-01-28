import { NgModule } from '@angular/core';

import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component'
import { MaterialModule } from './material.module';

const COMPONENTS = [
  BreadcrumbComponent
];

const MODULES = [
  MaterialModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [
    ...COMPONENTS
  ],
  exports: [...COMPONENTS, ...MODULES]
})
export class SharedModule { }
