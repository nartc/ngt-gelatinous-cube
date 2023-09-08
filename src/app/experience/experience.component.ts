import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";
import { extend } from "angular-three";
import { GelatinousCube } from "./gelatinous-cube/gelatinous-cube.component";
import {
  NgtsAccumulativeShadows,
  NgtsCenter,
  NgtsEnvironment,
  NgtsRandomizedLights,
} from "angular-three-soba/staging";
import { NgtsOrbitControls } from "angular-three-soba/controls";
import { AmbientLight, Group, Mesh } from "three";

extend({ Group, Mesh, AmbientLight });

@Component({
  standalone: true,
  templateUrl: "./experience.component.html",
  imports: [
    GelatinousCube,
    NgtsCenter,
    NgtsAccumulativeShadows,
    NgtsRandomizedLights,
    NgtsOrbitControls,
    NgtsEnvironment,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Experience {
  Math = Math;
}
