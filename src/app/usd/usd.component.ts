import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-usd",
  templateUrl: "./usd.component.html",
})
export class USDComponent {
  yenDisplayText: number;
  @Input() value: number;
  @Output() usdValue = new EventEmitter<number>();
  @Output() yenValue = new EventEmitter<number>();

  constructor() {}

  convertToYen(newUsd) {
    this.yenDisplayText = newUsd * 113;
    this.usdValue.emit(newUsd);
    this.yenValue.emit(this.yenDisplayText);
  }

  getYenDisplayText() {
    return this.yenDisplayText;
  }
}
