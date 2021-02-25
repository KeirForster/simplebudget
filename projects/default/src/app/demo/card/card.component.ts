import { Component, Input } from '@angular/core';

export interface CardVm {
  imageUrl: string;
  imageAlt: string;
  beds: number;
  baths: number;
  title: string;
  priceInCents: number;
  formattedPrice: string;
  reviewCount: number;
  rating: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card: CardVm;

  constructor() {}
}
