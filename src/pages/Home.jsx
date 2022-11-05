import React from "react";
import ProviderCard from "../components/ProviderCard";

function Home() {
  return (
    <div>

      <div className=" h-547.2 bg-gray-700 rounded-bl-md rounded-br-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border-b-1 border-gray-100 " >


        <h1 className="align-bottom" >Most Popular Providers.</h1>
      </div>

<div className="w-11/12 m-auto  grid grid-cols-1 lg:grid-cols-5 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2">
<ProviderCard img='https://picsum.photos/200/300' name="Tanmaydeep" walletAddress="1234567890" location="here" />
<ProviderCard img='https://picsum.photos/200/300' name="Tanmaydeep" walletAddress="1234567890" location="here" />
<ProviderCard img='https://picsum.photos/200/300' name="Tanmaydeep" walletAddress="1234567890" location="here" />
<ProviderCard img='https://picsum.photos/200/300' name="Tanmaydeep" walletAddress="1234567890" location="here" />
<ProviderCard img='https://picsum.photos/200/300' name="Tanmaydeep" walletAddress="1234567890" location="here" />
<ProviderCard img='https://picsum.photos/200/300' name="Tanmaydeep" walletAddress="1234567890" location="here" />
<ProviderCard img='https://picsum.photos/200/300' name="Tanmaydeep" walletAddress="1234567890" location="here" />
<ProviderCard img='https://picsum.photos/200/300' name="Tanmaydeep" walletAddress="1234567890" location="here" />
<ProviderCard img='https://picsum.photos/200/300' name="Tanmaydeep" walletAddress="1234567890" location="here" />


</div>
    
    </div>
  );
}

export default Home;
