import { Component } from '@angular/core';
import { CardVm } from './demo/card/card.component';

const CARD_DATA: CardVm = {
  title: 'Modern home in the city in the heart of Los Angeles',
  priceInCents: 190000,
  formattedPrice: '$1,900.00',
  reviewCount: 34,
  rating: 4,
  baths: 2,
  beds: 3,
  imageAlt: 'Rear view of modern home with pool',
  imageUrl:
    'https://images.unsplash.com/photo-1515898913320-f38370edab7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1315&q=80',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'default';
  cardData = CARD_DATA;
}
