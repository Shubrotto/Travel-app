import React, { useEffect } from "react";
import "./main.css";
import img from "../../assets/img.jpg";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboardCheck } from "react-icons/bs";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    desTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fes: "$700",
    description:
      "The eptomr of romance, Bora bora is one of the best travel destination in the world. This place is known for its luxurious stays and advantureous activities",
  },
  {
    id: 2,
    imgSrc: img2,
    desTitle: "Machu Pichu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fes: "$500",
    description:
      "More than 7,000 feet above sea level in the Andes Mountains, Machu Picchu is the most visited tourist destination in Peru. A symbol of the Incan Empire and built around 1450AD, Machu Picchu was designated a UNESCO World Heritage Site in 1983 and was named one of the New Seven Wonders of the World in 2007",
  },
  {
    id: 3,
    imgSrc: img3,
    desTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fes: "$500",
    description:
      "Cappadocia is a land famous for its distinctive rock formation, historical heritage, and scenic hot air balloon trips. Sitting in Central Anatolia, this historical region attracts crowds of tourists from all over the world",
  },
  {
    id: 4,
    imgSrc: img4,
    desTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fes: "$500",
    description:
      "The Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia. It contains the world's largest collection of coral reefs, with 400 types of coral, 1,500 species of fish and 4,000 types of mollusc.",
  },
  {
    id: 5,
    imgSrc: img5,
    desTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
    fes: "$500",
    description:
      "Founded by the Spanish in the early 16th century, Guanajuato became the world's leading silver-extraction centre in the 18th century. This past can be seen in its 'subterranean streets' and the 'Boca del Inferno', a mineshaft that plunges a breathtaking 600 m.",
  },
  {
    id: 6,
    imgSrc: img6,
    desTitle: "Cinque Terre",
    location: "Italy",
    grade: "CULTURAL RELAX",
    fes: "$500",
    description:
      "a remarkable cultural landscape created by human endeavor over a millennium in a rugged and dramatic natural environment. It represents the harmonious interaction between people and nature to produce a landscape of exceptional scenic quality”.",
  },
  {
    id: 7,
    imgSrc: img7,
    desTitle: "Ankor Wat",
    location: "Combodia",
    grade: "CULTURAL RELAX",
    fes: "$500",
    description:
      "Angkor is one of the most important archaeological sites in South-East Asia. Stretching over some 400 km2, including forested area, Angkor Archaeological Park contains the magnificent remains of the different capitals of the Khmer Empire, from the 9th to the 15th century.",
  },
  {
    id: 8,
    imgSrc: img8,
    desTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fes: "$900",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.",
  },
  {
    id: 9,
    imgSrc: img9,
    desTitle: "Bali Island",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fes: "$500",
    description:
      "Also known as the Land of the Gods, Bali appeals through its sheer natural beauty of looming volcanoes and lush terraced rice fields that exude peace and serenity. It is also famous for surfers' paradise!",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, desTitle, location, grade, fes, description }) => {
            return (
              <div data-aos="fade-up" key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt="" />
                </div>
                <div className="cardInfo">
                  <h4 className="desTitle">{desTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade} <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fes}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS
                    <BsClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
