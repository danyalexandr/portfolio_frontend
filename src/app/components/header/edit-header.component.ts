import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Storage, ref, getDownloadURL, uploadBytes, listAll} from '@angular/fire/storage'

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.css']
})
export class EditHeaderComponent {

  images:string[];
  isChecked = true;

  constructor(private hhtp:HttpClient, private storage:Storage){
    this.images = [];
  }

  ngOnInit(){
    this.getImages();
  }

  uploadImage($event:any){
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `images/${file.name}`);

    uploadBytes(imgRef, file)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }
  getImages(){
    const imgagesRef = ref(this.storage, 'images');
    listAll(imgagesRef)
    .then(async response => {console.log(response)
    this.images = [];
    for (let item of response.items) {
    const url = await getDownloadURL(item);
    console.log(url);
    this.images.push(url);
    }
    })
    .catch(error => console.log(error));
  }
}
