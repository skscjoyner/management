import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DocumentService } from '../../document.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(
    private documentService: DocumentService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      size: ['', Validators.required]
    });
   }

   addDocument(name, size) {
     this.documentService.addDocument(name, size).subscribe(() => {
       this.router.navigate(['/list']);
     });
   }

  ngOnInit() {
  }

}
