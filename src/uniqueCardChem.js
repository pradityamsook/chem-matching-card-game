import { uuid } from "uuidv4";

export const uniqueElementArray = [
  {
    id: uuid,
    type: "Beaker",
    image: require("./images/beaker.jpg"),
  },
  {
    id: uuid,
    type: "Burette",
    image: require("./images/burette.png"),
  },
  {
    id: uuid,
    type: "Cylinders",
    image: require("./images/cylinders.png"),
  },
  {
    id: uuid,
    type: "Erlenmeyer Flask",
    image: require("./images/erlenmeyerflask.png"),
  },
  {
    id: uuid,
    type: "Evaporation Dish",
    image: require("./images/evaporationdish.png"),
  },
  {
    id: uuid,
    type: "Glass Funnel",
    image: require("./images/glassfunnel.png"),
  },
  {
    id: uuid,
    type: "Mortarand Pestle",
    image: require("./images/mortarandpestle.png"),
  },
  {
    id: uuid,
    type: "Pipette",
    image: require("./images/pippette.png"),
  },
  {
    id: uuid,
    type: "Test tube",
    image: require("./images/testtube.png"),
  },
  {
    id: uuid,
    type: "Thermometer",
    image: require(`./images/thermometer.png`),
  },
  {
    id: uuid,
    type: "Volumemetric Flask",
    image: require(`./images/volumemetricsflasks.png`),
  },
  {
    id: uuid,
    type: "Watch Glass",
    image: require(`./images/watchglass.png`),
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  uniqueElementArray,
};
