import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

import { FbuttonComponent } from '../fbutton/fbutton.component';

@Component({
  selector: 'app-title-bar',
  imports: [MatIconModule, FbuttonComponent],
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.css'
})

export class TitleBarComponent {}
