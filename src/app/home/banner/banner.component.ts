import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wgj-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  randomSuffix = 1;

  ngOnInit(): void {
    this.randomSuffix = Math.floor(Math.random() * 2) + 1;
  }
}
