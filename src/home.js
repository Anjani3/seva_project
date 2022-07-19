import React from "react";
import sindiCollege from "./assests/img3.jpg";

const Home = () => {
  return (
    <div className="cotainer">
      <div className="text-center">
        <h1 className="fs-1 my-5">MEET OUR TEAM</h1>
        <p className="fs-3 mx-5">
          Sindhi Seva Samiti was founded in 1956 as a social organization by the
          Sindhis of Bangalore to serve the Sindhi community in Bangalore and
          also act as a window to integrate with the local population. Starting
          with a Darbar in the centre of the City, the Sindhi Seva Samiti is
          today a centre for the Sindhis of Bangalore, to get together on
          various Social and Religious occasions. The Samiti has also laid
          emphasis in the field of Education and has a number of Educational
          institutions with a total strength of around 6000 students. The Sindhi
          Group of Educational institutions are well known for their high
          educational standards and are much sought after by people of
          Bangalore.
        </p>
      </div>

      {/* card menu */}

      <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-5 my-3 justify-content-center ">
        <div class="col">
          <div class="card">
            <img class="card-img-top" src={sindiCollege} alt="image"></img>
            <div class="card-body">
              <h5 class="card-title">Name</h5>
              <p class="card-text">About the member.</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img class="card-img-top" src={sindiCollege} alt="image"></img>
            <div class="card-body">
              <h5 class="card-title">Name</h5>
              <p class="card-text">About the member.</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img class="card-img-top" src={sindiCollege} alt="image"></img>
            <div class="card-body">
              <h5 class="card-title">Name</h5>
              <p class="card-text">About the member.</p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img class="card-img-top" src={sindiCollege} alt="image"></img>
            <div class="card-body">
              <h5 class="card-title">Name</h5>
              <p class="card-text">About the member.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Achivement */}
      <div className="text-center">
        <h1 className="fs-1 my-5">ACHIVEMENT</h1>
      </div>
    </div>
  );
};

export default Home;
