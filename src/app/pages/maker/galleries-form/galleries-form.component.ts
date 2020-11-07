import {Component, OnInit} from '@angular/core';
import {UploadedImage} from "../../../core/models/uploaded.image";

@Component({
  selector: 'app-galleries-form',
  templateUrl: './galleries-form.component.html',
  styleUrls: ['./galleries-form.component.scss'],
})
export class GalleriesFormComponent implements OnInit {
  uploadedFiles: Array<UploadedImage> = [];
  uploadedFilesData = [];

  private message: string;

  constructor() {
  }

  ngOnInit() {
  }

  trackByFn(value: any){
    return value.id as any;
  }

  loadImageFromDevice(event: Event | any) {
    const files: FileList = event.target.files;
    if (files.length === 0)
      return;


    Array.from({length: files.length}, (v, i) => {
      const file = files.item(i);
      const mimeType = file.type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.uploadedFiles.push({
          imgURL: reader.result,
          caption: '',
          id:  (1000 * Math.random() + new Date().getTime()).toString(36)
        });
        this.uploadedFilesData.push(file);
      }
    });
  }

  clearUploadedImg(uploadedImg, idx: number) {
    this.uploadedFiles.splice(idx, 1);
  }
}

