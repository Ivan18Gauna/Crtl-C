import { NavBar } from "./NavBar";

export function Products() {
  return (
    <div>
      <NavBar />
      <div class="fixed h-screen w-64 bg-gray-100">
        <ul>
          <li>Enlace 1</li>
          <li>Enlace 2</li>
          <li>Enlace 3</li>
        </ul>
      </div>
    </div>
  );
}
