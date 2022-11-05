import React from "react";

// react-carousel
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// layouts
import DefaultLayout from "../components/layout/DefaultLayout";

// components
import ProviderCard from "../components/ProviderCard";

function Home() {
  return (
    <>
      <Carousel className="w-1/2 mx-auto my-10 ">
        <div>
          <img src="https://picsum.photos/200/300" />
        </div>
        <div>
          <img src="https://picsum.photos/200/300" />
        </div>
        <div>
          <img src="https://picsum.photos/200/300" />
        </div>
      </Carousel>
      <div className="w-10/12 m-auto  grid grid-cols-1  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center">
        <ProviderCard
          img="https://picsum.photos/200/300"
          name="Tanmaydeep"
          walletAddress="1234567890"
          location="here"
        />
        <ProviderCard
          img="https://picsum.photos/200/300"
          name="Tanmaydeep"
          walletAddress="1234567890"
          location="here"
        />
        <ProviderCard
          img="https://picsum.photos/200/300"
          name="Tanmaydeep"
          walletAddress="1234567890"
          location="here"
        />
        <ProviderCard
          img="https://picsum.photos/200/300"
          name="Tanmaydeep"
          walletAddress="1234567890"
          location="here"
        />
        <ProviderCard
          img="https://picsum.photos/200/300"
          name="Tanmaydeep"
          walletAddress="1234567890"
          location="here"
        />
        <ProviderCard
          img="https://picsum.photos/200/300"
          name="Tanmaydeep"
          walletAddress="1234567890"
          location="here"
        />
        <ProviderCard
          img="https://picsum.photos/200/300"
          name="Tanmaydeep"
          walletAddress="1234567890"
          location="here"
        />
        <ProviderCard
          img="https://picsum.photos/200/300"
          name="Tanmaydeep"
          walletAddress="1234567890"
          location="here"
        />
        <ProviderCard
          img="https://picsum.photos/200/300"
          name="Tanmaydeep"
          walletAddress="1234567890"
          location="here"
        />
      </div>
    </>
  );
}

export default DefaultLayout(Home);
