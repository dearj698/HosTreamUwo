import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import {LocationPage} from '../location/location.page';
import {NewsPage} from '../news/news.page';
import {CentralPageModule} from '../central/central.module';
import {CentralPage} from '../central/central.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(centre:centre)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
            path: 'location',
            outlet: 'location',
            component: LocationPage
        },
        {
          path: 'news',
            outlet: 'news',
            component: NewsPage
        },
        {
            path: 'centre',
            outlet: 'centre',
            component: CentralPage
        },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(centre:centre)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
