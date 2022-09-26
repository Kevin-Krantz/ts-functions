import AgeInSeconds from "./AgeInSeconds";
import AreaOfShape from "./AreaOfShape";
import CalculateDogAge from "./CalculateDogAge";
import CheckSpeed from "./CheckSpeed";
import CircleArea from "./CircleArea";
import DaysOfSupplies from "./DaysOfSupplies";
import Landscape from "./Landscape";
import Max from "./Max";
import RectangleArea from "./RectangleArea";
import TellFortune from "./TellFortune";
import ToCelsius from "./ToCelsius";
import ToFahrenheit from "./ToFahrenheit";
import TriangleArea from "./TriangleArea";

function App() {
  // max, som tar två nummer och returnerar den största av dem
  const max = (number1: number, number2: number) => {
    return number1 > number2 ? number1 : number2;
  };

  const landscape = (width: number, height: number): boolean => {
    return width > height;
    // landscape, som tar en bredd och en höjd. Returnerar true om bredden är större än höjden,
    // annars false
  };

  const rectangleArea = (length: number, width: number) => {
    // rectangleArea, som tar en längd och en bredd och returnerar arean för rektangeln.
    return width * length;
  };

  const triangleArea = (height: number, width: number) => {
    // triangleArea, som tar en höjd och en bredd och returnerar arean för triangeln.
    return (width * height) / 2;
  };

  const circleArea = (radius: number) => {
    // circleArea, som tar en radie och returnerar arean för cirkeln
    return radius * radius * 3.14;
  };

  const tellFortune = (
    kids: number,
    name: string,
    city: string,
    profession: string
  ) => {
    return `Du kommer att vara en ${profession} i ${city}, gift med ${name} och ha ${kids} barn`;
  };

  const calculateDogAge = (humanAge: number, conversionFactor: number) => {
    return humanAge * conversionFactor;
  };

  const daysOfSupplies = (
    totalResources: number,
    usedRecoursesPerDay: number
  ) => {
    return `Resurserna räcker i ${totalResources / usedRecoursesPerDay} dagar!`;
  };

  const toFahrenheit = (celsius: number) => {
    const cleanNumbers = (celsius * 9) / 5 + 32;
    return Math.round(cleanNumbers);
  };

  const toCelsius = (fahrenheit: number) => {
    const cleanNumbers = fahrenheit - (32 * 5) / 9;
    return Math.round(cleanNumbers);
  };

  const ageInSeconds = (age: number) => {
    return age * 365 * 24 * 60;
  };

  const areaOfShape = (shape: string, width: number, height: number) => {
    switch (shape) {
      case "rectangle":
        return rectangleArea(width, height);
      case "triangle":
        return triangleArea(height, width);
      case "circle":
        return circleArea(width);
      default:
        return "invalid shape";
    }
  };

  const checkSpeed = (speed: number) => {
    const speedLimit = 70;

    if (speed < speedLimit + 5) return "OK";

    const points = Math.floor((speed - speedLimit) / 5);
    if (points >= 12) return "Indraget körkort";

    return points;
  };

  return (
    <div>
      <Max onMax={max} />
      <Landscape onLandscape={landscape} />
      <RectangleArea onRectangleArea={rectangleArea} />
      <TriangleArea onTriangleArea={triangleArea} />
      <CircleArea onCircleArea={circleArea} />
      <TellFortune onTellFortune={tellFortune} />
      <CalculateDogAge onCalculateDogAge={calculateDogAge} />
      <DaysOfSupplies onDaysOfSupplies={daysOfSupplies} />
      <ToFahrenheit onToFahrenheit={toFahrenheit} />
      <ToCelsius onToCelsius={toCelsius} />
      <AgeInSeconds onAgeInSeconds={ageInSeconds} />
      <AreaOfShape onAreaOfShape={areaOfShape} />
      <CheckSpeed onCheckSpeed={checkSpeed} />
    </div>
  );
}

export default App;
