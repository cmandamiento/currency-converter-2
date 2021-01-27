import { Component } from "@angular/core";

@Component({
  selector: "app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  usd = 0;
  yen = 0;

  setUsd(val) {
    this.usd = val;
  }

  setYen(val) {
    this.yen = val;
  }
}
