import React from "react";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-500 to-slate-300">
      <div className="grid grid-cols-2 gap-4 place-items-center">
        <div className="col-1">
          <h1 className="main-text font-bold text-6xl p-4">Invite Only</h1>
          <img
            src="../images/barbados.jpeg"
            alt="Barbados resort pool with poolside beds"
          ></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h6 className="main-text font-bold text-3xl">Destination</h6>
              <p className="text-xl">Barbados</p>
            </li>
            <li>
              <h6 className="main-text font-bold text-3xl">Dates</h6>
              <p className="text-xl">June 15 2023 - June 19 2023</p>
            </li>
            <li>
              <h6 className="main-text font-bold text-3xl">Price</h6>
              <p className="text-xl">$1500</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center p-4">
        <div>
          <h1 className="main-text text-5xl text-center">Itinerary</h1>
        </div>
        <div className="grid grid-flow-row auto-rows-3">
          <div className="p-4">
            <h6 className="main-text text-2xl">Thursday: June 15</h6>
            <ul>
              <li>11AM: ARRIVE IN BARBADOS</li>
              <li>6PM: DINNER</li>
            </ul>
          </div>
          <div className="p-4">
            <h6 className="main-text text-2xl">Friday: June 16</h6>
            <ul>
              <li>8AM: BREAKFAST</li>
              <li>11AM: SNORKELING WITH TURTLES</li>
              <li>6PM: ALL WHITE DINNER</li>
            </ul>
          </div>
          <div className="p-4">
            <h6 className="main-text text-2xl">Saturday: June 17</h6>
            <ul>
              <li>11AM: BRUNCH</li>
              <li>2PM: CAVE TOUR</li>
              <li>7PM: BEACH SHOW AND DINNER</li>
            </ul>
          </div>
          <div className="p-4">
            <h6 className="main-text text-2xl">Sunday: June 18</h6>
            <ul>
              <li>10AM: BREAKFAST</li>
              <li>12PM: ISLAND TOUR</li>
              <li>3PM: FOOD TOUR</li>
              <li>7PM: DINNER</li>
            </ul>
          </div>
          <div className="p-4">
            <h6 className="main-text text-2xl">Monday: June 19</h6>
            <ul>
              <li>11AM: UNTIL NEXT TIME</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
