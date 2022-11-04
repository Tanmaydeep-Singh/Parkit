import React from 'react';
import useMetaMask from '../hooks/useMetaMask';


function WalletConnection() {
  const { connect, disconnect, balance, isActive, account } = useMetaMask()

  if (window.ethereum) {
    console.log("WALLET FOUND");
  }
  else{
    alert("install metamask extension!!");
  }




  return (
    <>
    
		<strong>Address:{account} </strong>
		{/* {currentAccount} */}
		<h4>
			<strong>Balance: </strong>
			{balance}
		</h4>
    <button onClick={connect}> Connect Account</button>
    <button onClick={disconnect}> Disconnect Account</button>
    </>
  );
}

export default WalletConnection;
