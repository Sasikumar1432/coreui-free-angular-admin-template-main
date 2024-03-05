import {
  AfterViewInit,
  Component,
  HostBinding,
  Inject,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { getStyle, rgbToHex } from '@coreui/utils';

@Component({
  templateUrl: 'colors.component.html',
})
export class ColorsComponent implements OnInit, AfterViewInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}

@Component({
  selector: 'app-theme-color',
  template: ``,
})
export class ThemeColorComponent implements OnInit {
  @Input() color = '';
  public colorClasses = {
    'theme-color w-75 rounded mb-3': true,
  };

  @HostBinding('style.display') display = 'contents';

  ngOnInit(): void {}
}
