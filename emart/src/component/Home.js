import React from "react";

export default function Home() {
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img
          src="https://picsum.photos/200/300/?blur"
          class="card-img"
          height="550px"
          alt="Background"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
            <p class="card-text lead fs-2">
              CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
