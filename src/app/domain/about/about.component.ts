import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-about',
  templateUrl: './about.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  public title = 'Angular Budget';

  constructor() {}

  ngOnInit(): void {}
}
