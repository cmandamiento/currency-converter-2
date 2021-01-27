import { Component, Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "app-yen",
  templateUrl: "./yen.component.html",
})
export class YenComponent {
  usdDisplayText: number;
  @Input() value: number;
  @Output() yenValue = new EventEmitter<number>();
  @Output() usdValue = new EventEmitter<number>();
  constructor() {}

  convertToUsd(newYen) {
    this.usdDisplayText = newYen * 0.0088;
    this.yenValue.emit(newYen);
    this.usdValue.emit(this.usdDisplayText);
  }

  getUsdDisplayText() {
    return this.usdDisplayText;
  }
}
