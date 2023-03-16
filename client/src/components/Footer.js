import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-300 p-6">
      <div>
        <h3 className="text-center text-2xl main-text">Meet the devs</h3>
        <div>
          <ul className="grid grid-cols-4 place-items-center italic">
            <Link to="https://github.com/bertintshisuaka2">
              <li className="hover:text-blue-500">Bertin</li>
            </Link>
            <Link to="https://github.com/PlutiePatootie">
              <li className="hover:text-blue-500">Jonathan</li>
            </Link>
            <Link to="https://github.com/nyashanice">
              <li className="hover:text-blue-500">Nya</li>
            </Link>
            <Link to="https://github.com/Rodd456">
              <li className="hover:text-blue-500">Rodney</li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
