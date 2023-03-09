import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../libs/ui/src/modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'setting',
    loadChildren: () =>
      import('../../libs/ui/src/modules/setting/setting.module').then((m) => m.SettingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
