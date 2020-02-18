import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Document } from '../../document.model';
import {DocumentService } from '../../document.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  documents: Document[];


  constructor(
    private documentService: DocumentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchDocuments();
  }

  fetchDocuments() {
    this.documentService
      .getDocuments()
      .subscribe((data: Document[]) => {
      this.documents = data;
      console.log('Data requested...');
      console.log(this.documents);
    });
  }

  deleteDocument(id) {
    this.documentService.deleteDocument(id).subscribe(() => {
      this.fetchDocuments();
    });
  }
}
