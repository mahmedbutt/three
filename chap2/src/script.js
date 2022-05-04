import { World } from "./World/World";
import "./styles/script.css";

let world
function main() {
  const container = document.querySelector("div.cube");
  world = new World(container);
  render()
}

function render() {
  world.render()
}

main();
