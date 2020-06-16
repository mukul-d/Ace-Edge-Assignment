import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AceEdgeService} from './services/ace-edge.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
    AceEdgeService
  ]
})
export class CoreModule { }
