import React from "react";
import ProviderCard from "../components/ProviderCard";

function Home() {
  return (
    <div>

      <div className=" h-547.2   bg-gradient-to-r from-cyan-500 to-blue-500" >


        <h1 className="align-bottom" >Most Popular Providers.</h1>
      </div>

<div className="w-11/12 m-auto  grid grid-cols-5">
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
