// // 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It should 
// then accept an arbitrary number of keyword arguments. Call the function with
// the required information and two other name-value pairs, such as a color
// or an optional feature. Print the Object that’s returned to make sure all
// the information was stored correctly.

function createCar(
  manufacturer: string,
  modelName: string,
  ...other: { [key: string]: any }[]
): {
  manufacturer: string;
  modelName: string;
  [key: string]: any;
} {
  return {
    manufacturer,
    modelName,
    ...other,
  };
}

console.log(createCar("Toyota", "Fortuner", { color: "black", year: 2023 }));

OUTPUT//
{
  '0': { color: 'black', year: 2023 },
  manufacturer: 'Toyota',
  modelName: 'Fortuner'
}
