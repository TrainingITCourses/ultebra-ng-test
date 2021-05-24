import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  private siteTitle = 'Angular.Budget';
  constructor(private title: Title) {}
  public setDocumentTitle(pageTitle: string = ''): void {
    const documentTitle = `${pageTitle} | ${this.siteTitle}`;
    this.title.setTitle(documentTitle);
  }
}
