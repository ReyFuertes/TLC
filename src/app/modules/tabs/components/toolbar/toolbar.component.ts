import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input()
  public shadowArr: number;

  public withEdgeShadow: number[] = [1, 2, 4];

  public get getArr(): boolean {
    return this.withEdgeShadow.filter(x => x === this.shadowArr).length === 0 ? false : true;
  }

  constructor(public commonService: CommonService) { }

  ngOnInit(): void { }

}
