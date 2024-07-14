import { Component, OnInit } from '@angular/core';
import { AranzmanService } from '../services/aranzman.service';
import { Aranzman } from '../models/aranzman';

@Component({
  selector: 'app-aranzman',
  templateUrl: './aranzman.component.html',
  styleUrl: './aranzman.component.scss'
})
export class AranzmanComponent implements OnInit {

aranzmani: Aranzman[] = [];


constructor(private aranzmanService: AranzmanService){}

//u vreme incijializacije stranice
ngOnInit(){

this.fetchAranzmani();


}




fetchAranzmani(): void {

  this.aranzmanService.getAranzmani().subscribe(
  (data) => {

    this.aranzmani = data;
    console.log(this.aranzmani);
  },
  (error) => {
    console.log("Error fetching aranzmani:",error);
  }



  );




}











}
