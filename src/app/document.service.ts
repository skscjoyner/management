import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  url = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  getDocuments() {
    return this.http.get(`${this.url}/documents`);
  }

  getDocumentById(id) {
    return this.http.get(`${this.url}/documents/${id}`);
  }

  addDocument(name, size) {
    const document = {
      name: name,
      size: size
    };
    return this.http.post(`${this.url}/documents/add`, document);
  }

  deleteDocument(id) {
    return this.http.delete(`${this.url}/documents/delete/${id}`);
  }
}
