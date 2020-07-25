import { AngularFirestoreModule, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Post } from './../models/post';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /*saveFriend: any;
  getAllFriends() {
    throw new Error("Method not implemented.");
  }*/

  allPost: Observable<Post[]>;

  //COLLECTION <--> DATABASE  
  postCollection: AngularFirestoreCollection<Post>;


  constructor(private fst: AngularFirestore) { 
    this.postCollection = fst.collection<Post>( 'posts');

  }

  private retrievePosts() {
    this.allPost = this.postCollection.valueChanges(); //will fire everytime a value is changed in DB
  }

  sendPost(post){
    console.log(post);
    var item = Object.assign({}, post);
    this.postCollection.add(item);

  }

  getAllPosts(){
    this.retrievePosts();
    return this.allPost;

  }

}
















//*sendPost (post){
  //const item =Object.assign({}, post);
  //this.postCollection.add(item);
//}
//saveFriend(friend){
  //const item = Object.assign({}, friend);
  //this.friendCollection.add(item);
//}