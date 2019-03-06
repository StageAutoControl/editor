import {ChangeDetectionStrategy, Component, HostListener, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.less']
})
export class ConfirmationDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      action: string,
    },
    private dialog: MatDialogRef<ConfirmationDialogComponent>,
  ) {
  }

  public close() {
    this.dialog.close();
  }

  @HostListener("keydown.esc")
  public onEsc() {
    this.close();
  }
}
