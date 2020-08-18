import { Component, OnInit } from '@angular/core';
import {DogapisService} from '../../services/dogapis.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dogslist:any;
  name ='Dogs';
  img='';
  selectedItem:any;
  constructor(private dogsService: DogapisService) { }

  ngOnInit(): void {
    this.getdogslist();
  }
  getdogslist(){
    this.dogsService.getAll().subscribe((resp) => {
        const dogs = resp['message']; 
        const dogslist=[]; 
        Object.keys(dogs).map((key) => {
          const item={};
          if(dogs[key].length>0){
            dogs[key].map((catergoty_dogs) => {  
              const itemchild={};
              itemchild['name']=key;
              itemchild['childname']=catergoty_dogs;
              dogslist.push(itemchild);
            })
          }else{
            item['name']=key;
            item['childname']='';
            dogslist.push(item);
          }
        } );
        this.dogslist=dogslist;  
      }, error => {
        console.log(error);
      });
  }
  getimg(childname, name, item){
    this.dogsService.getimg(childname,name).subscribe((resp) => {
      this.img= resp['message']; 
      this.name=childname+' '+name;
      this.selectedItem=item;
    }, error => {
      console.log(error);
    });
  }
}
