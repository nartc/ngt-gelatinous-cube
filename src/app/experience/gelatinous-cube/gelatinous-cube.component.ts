import { NgIf } from "@angular/common";
import { Component, CUSTOM_ELEMENTS_SCHEMA, Signal } from "@angular/core";
import { NgtsMeshTranmissionMaterial } from "angular-three-soba/materials";
import { injectNgtsGLTFLoader } from "angular-three-soba/loaders";
import { Color, FrontSide } from "three";

// https://sketchfab.com/3d-models/gelatinous-cube-e08385238f4d4b59b012233a9fbdca21
@Component({
  selector: "app-gelatinous-cube",
  standalone: true,
  templateUrl: "./gelatinous-cube.component.html",
  imports: [NgIf, NgtsMeshTranmissionMaterial],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GelatinousCube {
  FrontSide = FrontSide;
  background = new Color("#839681");
  cubeGLTF = injectNgtsGLTFLoader(
    () => "assets/gelatinous_cube.glb"
  ) as Signal<any>;
}
