import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-central',
  templateUrl: './central.page.html',
  styleUrls: ['./central.page.scss'],
})
export class CentralPage implements OnInit {
    items = [
        {
            name: 'one',
            slides: [{
                title: 'Dreams Adventure',
                imageUrl: 'assets/img/img1.jpg',
                songs: 2,
                private: false
            },
                {
                    title: 'For the Weekend',
                    imageUrl: 'assets/img/img1.jpg',
                    songs: 4,
                    private: false
                },
                {
                    title: 'Family Time',
                    imageUrl: 'assets/img/img1.jpg',
                    songs: 5,
                    private: true
                },
                {
                    title: 'My Trip',
                    imageUrl: 'assets/img/img1.jpg',
                    songs: 12,
                    private: true
                }]
        },
    ];
  constructor(private nav: NavController, private router: Router) {}
  ngOnInit() {}
  go() {
      this.router.navigate(['home']);
  }
}
