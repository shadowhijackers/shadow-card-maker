import { Component, OnInit } from '@angular/core';
import {UploadedImage} from "../../../core/models/uploaded.image";

@Component({
  selector: 'app-bussiness-info-form',
  templateUrl: './bussiness-info-form.component.html',
  styleUrls: ['./bussiness-info-form.component.scss'],
})
export class BussinessInfoFormComponent implements OnInit {

  coverImage: UploadedImage;
  logoImage: UploadedImage;

  coverImageFile: any;
  logoImageFile: any;

  constructor() { }

  ngOnInit() {}

  loadCoverImageFromDevice($event: Event) {
    this.uploadImage($event, (uploadedImage, file)=>{
      this.coverImage = uploadedImage;
      this.coverImageFile = file;
    })
  }

  loadImageFromDevice($event: Event) {
    this.uploadImage($event, (uploadedImage, file)=> {
      this.logoImage = uploadedImage;
      this.logoImageFile = file;
    })
  }

  private uploadImage(event: Event | any, onLoadUploadedImage: Function){
    const files: FileList = event.target.files;
    if (files.length === 0)
      return;


      const file = files[0];
      const mimeType = file.type;
      let  message;
      if (mimeType.match(/image\/*/) == null) {
        message = "Only images are supported.";
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        const uploadedImage = {
          imgURL: reader.result,
          caption: '',
          id:  (1000 * Math.random() + new Date().getTime()).toString(36)
        };

        onLoadUploadedImage(uploadedImage, file)
      }
  }
}
