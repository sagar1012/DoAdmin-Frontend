import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbMenuModule, NbTreeGridModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { DomainsComponent } from './domains/domains.component';
import { TablesRoutingModule } from './tables/tables-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SubdomainComponent } from './subdomain/subdomain.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    PagesComponent,
    DomainsComponent,
    SubdomainComponent,
  ],
})
export class PagesModule {
}
