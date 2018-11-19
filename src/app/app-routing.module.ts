import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'location', loadChildren: './location/location.module#LocationPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'central', loadChildren: './central/central.module#CentralPageModule' },
    {path: 'home', loadChildren: './home/home.module#HomePageModule'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
