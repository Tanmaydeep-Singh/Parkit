import React from 'react'

function ProviderCard(props) {
  return (
    <div class=" m-4 w-60 mt-8 rounded-lg overflow-hidden shadow-lg  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200">
  <img class="w-40 w-40 m-auto aspect-square rounded-lg pt-2" src={props.img} alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2"> {props.name} </div>
    <p class="text-gray-700 text-base">{props.walletAddress}
    </p>
    <p class="text-gray-700 text-base">{props.location}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Book Now</button>
  </div>
</div>

    
  )
}

export default ProviderCard