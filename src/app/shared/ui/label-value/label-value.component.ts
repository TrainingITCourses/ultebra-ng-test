import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'ab-label-value',
  templateUrl: './label-value.component.html',
  styles: [
    `
      div {
        display: flex;
        justify-content: space-between;
      }
      .ok {
        color: var(--color-ok);
      }
      .ko {
        color: var(--color-ko);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelValueComponent implements OnInit {
  @Input() public label = '';
  @Input() public value = '';
  @Input() public isOk?: boolean;
  constructor() {}

  ngOnInit(): void {}
}
