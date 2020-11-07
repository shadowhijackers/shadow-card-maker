import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galleries-form',
  templateUrl: './galleries-form.component.html',
  styleUrls: ['./galleries-form.component.scss'],
})
export class GalleriesFormComponent implements OnInit {
  uploadedFiles = [];
  uploadedFilesData = [];
  private message: string;
  private imagePath: any;

  constructor() { }

  ngOnInit() {}

  loadImageFromDevice(event: Event | any) {
    const files = event.target.files;
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.uploadedFiles.push(reader.result);
      this.uploadedFilesData.push(files[0]);
    }
  }
}
