import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ImagesService } from './service/images.service';

@NgModule({
  imports : [CommonModule],
  providers: [ImagesService],
})
export class CoreModule {}
