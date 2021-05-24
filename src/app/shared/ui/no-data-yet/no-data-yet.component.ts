import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ab-no-data-yet',
  templateUrl: './no-data-yet.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoDataYetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
