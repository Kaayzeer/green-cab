import standard from "../Images/standardChoiceCar.png";
import xl from "../Images/XLchoiceCar.png";
import gold from "../Images/goldChoiceCar.png";
import { v4 as uuidv4 } from "uuid";

export const CarChoiceData = [
  {
    wheelchair: "Rullstol ",
    baby: "Bilbarnstol  ",
    animals: "Husdjur     ",
    price: "200 kr",
    type: "Standard",
    pic: standard,
    capacity: "Max 4 passagerare",
    about: "100% Elbil",
    id: uuidv4(),
  },

  {
    wheelchair: "Rullstol ",
    baby: "Bilbarnstol  ",
    animals: "Husdjur     ",
    price: "400 kr",
    type: "Guld",
    pic: gold,
    capacity: "Max 5 passagerare",
    about: "100% Elbil",
    id: uuidv4(),
  },
  {
    wheelchair: "Rullstol ",
    baby: "Bilbarnstol  ",
    animals: "Husdjur     ",
    price: "300 kr",
    type: "XL",
    pic: xl,
    capacity: "Max 7 passagerare",
    about: "Hybrid",
    id: uuidv4(),
  },
];
