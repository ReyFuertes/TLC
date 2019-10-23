import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LeaveDialogComponent } from '../components/leave-dialog/leave-dialog.component';

@Component({
  selector: 'app-discussion-info',
  templateUrl: './discussion-info.component.html',
  styleUrls: ['./discussion-info.component.scss']
})
export class DiscussionInfoComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  public showLeaveDialog(): void {
    this.dialog.open(LeaveDialogComponent, {
      data: {}
    });
  }
}
