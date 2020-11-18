import { Component, Input, OnInit } from '@angular/core';

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
export class CardComponent implements OnInit {
  @Input() card: CardVm;

  constructor() {}

  ngOnInit(): void {}
}
