import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem } from '@ionic/angular/standalone';
import { DatabaseService, User } from '../services/database.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonItem, IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, CommonModule],
})
export class HomePage {
  users = this.database.getUser();
  newUserName ="";
  constructor(private database:DatabaseService) {}

  async createUser(){
    await this.database.createUser(this.newUserName);
    this.newUserName = "";
  }

  updateUser(user:User){
    const active = user.active ? 1: 0;
    this.database.updateUser(user.id.toString(),active);
  }
}
