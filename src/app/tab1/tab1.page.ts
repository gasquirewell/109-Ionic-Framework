import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  allPosts: Post[] = [];

  constructor(private data: DataService) { }


  ionViewDidEnter() {
   this.data.getAllPosts().subscribe(list => {
     console.log('exc subscription');
     this.allPosts = list;
   });
  }


  /**
   * inject data service
   * get the data from the dataService
   * put the array in a global variable
   * access the variable from *ngFor on the html
   * display the text of the message
   */

}
