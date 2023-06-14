import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Llamo a mi componente de galeria por carga perezosa
const routes: Routes = [{ path: '', loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
