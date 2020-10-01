import React, { Component } from "react";
import { FaHiking, FaShuttleVan, FaBeer, FaRProject, FaAward, FaForward, FaLayerGroup, FaDollarSign } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaDollarSign />,
        title: "Easy Start",
        info: "Entry cost is just 500 TRX. You can repeat your earnings every 90 days by simply following repeat function and earn 4,005,668,700 Tron every 90 days with your ready made team. ",
      },
      {
        icon: <FaRProject />,
        title: "Longevity and Stability",
        info:
          "TripleTron will continue to work until tron blockchain exists and even the creators of TripleTron smart contract will not be able to delete or change its functionality.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Transaction Clarity",
        info: "Transaction history of all TripleTron networkers are recorded and stored using network node of Tron blockchain on Tron blockchain.",
      },
      {
        icon: <FaForward />,
        title: "no risk",
        info:
          "TripleTron Smart Contract is a decentralized and 100% RISK FREE platform. It is a Networking Platform and it’s built on Tron blockchain.",
      },
      {
        icon: <FaLayerGroup />,
        title: "Instant Peer-to-Peer Transaction",
        info:
          "The system does not store the Tons. All transactions are 100% from smart contract wallet to participant’s wallets",
      },
      {
        icon: <FaAward />,
        title: "Quick and Simple Plan",
        info:
          "It has 3×10 Lines Matrix with 88572 participant’s in a team of 10 lines are enough to make and earn 4005668700+ Tron every 90 days.",
      },
      {
        icon: <FaBeer />,
        title: "rubost system",
        info:
          "Indeﬁnite access to the TripleTron project is an intrinsic feature programmed into the smart contract to enable continued participation in the network",
      },
      {
        icon: <FaHiking />,
        title: "Safe and reliable system",
        info: "TripleTron runs automatically on the blockchain and its smart contract is uploaded to the TRON blockchain. No can ever edit or delete the smart contract, nor influence its autonomous operation. ",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <h1>Advantages of using TripleTron smart contract</h1>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
