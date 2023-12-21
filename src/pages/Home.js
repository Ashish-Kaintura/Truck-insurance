import React from "react";
import Nav from "../Nav";
import backgroundImage from "../images/dimitar-donovski-yrjB4dYWUZU-unsplash.jpg";
const Home = () => {
  return (
    <div>
      <Nav />
      <main>
        <div
          id="banner"
          class="h-[700px] relative items-center justify-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div class="flex flex-col absolute top-[12%] inset-0">
            <div class="flex justify-center text-center items-center gap-5">
              <span class="bg-yellow-600 w-28 h-[2px] span1"></span>
              <h1 class="uppercase text-2xl font-robotoflex text-yellow-600 italic exp">
                Experience
              </h1>
              <span class="bg-yellow-600 w-28 h-[2px] span2"></span>
            </div>
            <br />
            <div>
              <h3 class="text-center text-5xl text-white font-robotoflex pt-5">
                Connecting People
              </h3>
              <h4 class="text-center text-5xl text-white font-robotoflex pt-5">
                Improve Lives
              </h4>
            </div>
          </div>
          <img
            class="z-10 absolute top-[80%] left-[38%] inset-0 truackimage"
            src="images/b313922828636b5f62d27991f30222ce-removebg-preview.png"
            alt=""
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
