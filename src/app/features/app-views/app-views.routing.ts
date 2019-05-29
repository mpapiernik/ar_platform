
import {RouterModule, Routes} from "@angular/router";


export const routes:Routes = [
  
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  },
  {
    path: 'creator',
    loadChildren: './creator/creator.module#CreatorModule'
  },
  {
    path: 'wizards',
    loadChildren: './wizards/wizards.module#WizardsModule',
    data: {pageTitle: 'Wizards'}
  },
  {
    path: 'projects',
    loadChildren: './projects/projects-list.module#ProjectsListModule'
  },

];

export const routing = RouterModule.forChild(routes);
