import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    const config = {
      apiKey: 'AIzaSyCIhfSQt3oIoektyQ2dh1NgeOZ9JtxcwGw',
      authDomain: 'upload-files-88c45.firebaseapp.com',
      databaseURL: 'https://upload-files-88c45.firebaseio.com',
      projectId: 'upload-files-88c45',
      storageBucket: 'upload-files-88c45.appspot.com',
      messagingSenderId: '304090876679'
    };
    firebase.initializeApp(config);
  }
}
