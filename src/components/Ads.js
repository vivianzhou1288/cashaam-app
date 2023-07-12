import React from "react";
import firebase from "../firebaseconfig";
import { useState, useEffect } from "react";
import "../css/Ads.css";

function Ads() {
  const [ads, setAds] = useState([]);

  const getAdsHelp = async () => {
    try {
      console.log("getAdsHelp");
      const db = firebase.firestore();

      let adsHelp = await db.collection("adsHelp").limit(1).get();

      console.log("featurePromo", adsHelp);
      let pageContent = null;
      if (adsHelp.empty) {
        console.log("No promo found");
        return;
      } else {
        pageContent = adsHelp.docs[0].data();
        setAds(pageContent.adsRecommendation);
      }
      console.log("pageContent =>", pageContent);
    } catch (error) {
      console.log("getAdsHelp err", error);
    }
  };

  useEffect(() => {
    getAdsHelp();
  }, []);

  return (
    <>
      <ul>
        <h1 className="pageTitle">Advertisements</h1>
        {ads.map((ad, index) => (
          <div key={index} className="advertisements">
            <h2 className="adsName">{ad.category}</h2>
            <img className="adsIcon" src={ad.icon} />
            <p className="adsDes">{ad.description}</p>
            <p className="adsTitle">{ad.title}</p>
          </div>
        ))}
      </ul>
    </>
  );
}

export default Ads;
