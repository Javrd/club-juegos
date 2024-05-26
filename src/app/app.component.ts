import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Firestore, docData } from '@angular/fire/firestore';
import { DocumentData, DocumentReference, doc, updateDoc } from '@firebase/firestore';
import { Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';

interface App {
  counter: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatProgressSpinnerModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ready = false;
  counter = 0;
  docRef: DocumentReference<DocumentData, DocumentData>

  constructor(private firestore: Firestore) {
    this.docRef = doc(this.firestore, 'app', 'settings');
    const doc$ = docData(this.docRef) as Observable<App>;
    doc$.subscribe((doc) => {
      this.counter = doc.counter
      this.ready = true
    });

  }

  sum() {
    this.counter++;
    updateDoc(this.docRef, { counter: this.counter })
  }

  reset() {
    this.counter = 0;
    updateDoc(this.docRef, { counter: this.counter })
  }

}
