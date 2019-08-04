import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogLeftSidebarComponent } from './blog-left-sidebar/blog-left-sidebar.component';
import { BlogRightSidebarComponent } from './blog-right-sidebar/blog-right-sidebar.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'left-sidebar',
        component: BlogLeftSidebarComponent
      },
      {
        path: 'right-sidebar',
        component: BlogRightSidebarComponent
      },
      {
        path: 'details',
        component: BlogDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BlogRoutingModule { }
