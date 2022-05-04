import { BoxBufferGeometry, Mesh, MeshStandardMaterial, Color } from "three";

function createCube() {
  const geometry = new BoxBufferGeometry(2, 2, 2);
  const material = new MeshStandardMaterial();

  const cube = new Mesh(geometry, material);

  return cube;
}

export { createCube };
