import React from "react";
import AgingPotion from "../images/products/aging-potion.png";
import BulgeyePotion from "../images/products/bulgeye-potion.png";
import DragonTonic from "../images/products/dragon-tonic.png";
import LovePotion from "../images/products/love-potion.png";
import PolyjuicePotion from "../images/products/polyjuice-potion.png";
import SleepingDraught from "../images/products/sleeping-draught.png";
import "./Potion.css";

const potions = [
  {
    id: 1,
    name: 'Aging Potion',
    image: AgingPotion,
    price: '$29.99'
  },
  {
    id: 2,
    name: 'Bulgeye Potion',
    image: BulgeyePotion,
    price: '$19.99'
  },
  {
    id: 3,
    name: 'Dragon Tonic',
    image: DragonTonic,
    price: '$64.99'
  },
  {
    id: 4,
    name: 'Love Potion',
    image: LovePotion,
    price: '$29.99'
  },
  {
    id: 5,
    name: 'Polyjuice Potion',
    image: PolyjuicePotion,
    price: '$99.99'
  },
  {
    id: 6,
    name: 'SleepingDraught',
    image: SleepingDraught,
    price: '$14.99'
  },
];

export const Potion = () => {
  return (
    <div className="Images">
      {potions.map((potion) => (
        <figure className="Potions" key={potion.id}>
          <img className="Potions-Image" src={potion.image} alt="product" width="300" height="300" />
          <figcaption>
          <strong>{potion.name}</strong> - <span>{potion.price}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Potion;
