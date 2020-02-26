import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocumentService } from 'src/app/document.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  selectedFile: File = null;

  constructor(
    private documentService: DocumentService,
    private http: HttpClient) { }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0] as File;
    console.log(event);
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('mongodb://localhost:27017/documents/add', fd).subscribe(res => {
      console.log(res);
    });
  }


  ngOnInit() {
  }

}
