import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StoredDataService } from '../Shared/stored-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()selectTab=new EventEmitter

  constructor(private dataStored:StoredDataService) { }

  ngOnInit(): void {
  }
  displayTab(tab:any){
    this.selectTab.emit(tab)
  }
  saveData(){
this.dataStored.storedData();
  }
  fetchData(){
this.dataStored.fetchProduct();
  }

}
