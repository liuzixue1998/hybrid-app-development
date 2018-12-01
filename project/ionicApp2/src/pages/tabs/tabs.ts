import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ShopPage } from '../shop/shop';
import { HeadfacePage } from '../headface/headface';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ShopPage;
  tab3Root = ContactPage;
  tab4Root = 'BPage';
  tab5Root = HeadfacePage;

  constructor() {

  }
}
