import { NgtCanvas } from "angular-three";
import { Experience } from "./experience/experience.component";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgtCanvas],
  template: `
    <ngt-canvas
      [sceneGraph]="scene"
      [camera]="{ fov: 25, position: [15, 0, 15] }"
      [shadows]="true"
    />
  `,
  styles: [],
})
export class AppComponent {
  scene = Experience;
  title = "ngt-gelatinous-cube";
}
