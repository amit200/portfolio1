import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  number: any = [
    {
      image:'../../assets/Image2.svg',
      name: 'componens of food',
      icon:'../../assets/Icon awesome-file-pdf.svg',
      date:'25th Sep',
      foodNo:'50'
      
      
    },
    {
      image:'../../assets/Image2.svg',
      name: 'components of food',
      icon:'../../assets/Icon awesome-image.svg',
      date:'25th Sep',
      foodNo:'50'
    },
    {
      image:'../../assets/Image3.svg',
      name: 'components of food',
      icon:'../../assets/Icon open-document(1).svg',
      date:'25th Sep',
      foodNo:'50'
      
    },
    {
      image:'../../assets/Image4.svg',
      name: 'components of food',
      icon:'../../assets/Icon open-document.svg',
      date:'25th Sep',
      foodNo:'50'
    },
  ];

}
