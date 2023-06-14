import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private baseUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) {}

  upload(file: File): Observable<HttpEvent<any>> {//Funcion que sube img a servidor
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json',
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {//Observable que me entrega lista de imagenes
    return this.http.get(`${this.baseUrl}/files`);
  }
}
