import { Component } from '@angular/core';

import { TitleBarComponent } from './title-bar/title-bar.component';

@Component({
  selector: 'app-root',
  imports: [TitleBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent
{
  title = 'AiMusicBot database';
}
