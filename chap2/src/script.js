import { World } from "./World/World";
import "./styles/script.css";

function main() {
  const container = document.querySelector("canvas.cube");
  const world = new World(container);

  world.render();
}

main();
