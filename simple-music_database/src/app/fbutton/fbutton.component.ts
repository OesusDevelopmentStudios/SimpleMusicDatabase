import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fbutton',
  imports: [],
  templateUrl: './fbutton.component.html',
  styleUrl: './fbutton.component.css'
})

export class FbuttonComponent implements OnInit
{
  @Input() label: string = ""
  @Input() hover_text: string = ""

  ngOnInit(): void {}
}
