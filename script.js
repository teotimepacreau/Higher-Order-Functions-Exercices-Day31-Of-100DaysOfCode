console.log('connecté !');
// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/09_Day_Higher_order_functions/09_day_higher_order_functions.md

// EXERCICE I

// I.1 Explain the difference between forEach, map, filter, and reduce.

// forEach loop through each element
// map loop through each element, apply a function and returns an array
// filter only return elements true to condition
// reduce compile items to only one desired element and apply a function

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// I.2 Define a callback function before you use it in forEach, map, filter or reduce.

// A callback function is a function apssed as parameter of another function to be executed later

//I.3 Use forEach to console.log each country in the countries array.
countries.forEach((country)=>{
  console.log(country)
})

// I.4 Use map to create a new array by changing each country to uppercase in the countries array.
const uppercaseCountries = countries.map((country)=>{
  return country.toUpperCase()
})
console.log(uppercaseCountries)

// I.5 Use filter to filter out only prices with values.
const onlyValues = products.filter((element)=>{
  return typeof element.price === 'number'
  })
console.log(onlyValues)

// I.6 Use reduce to concatenate all the countries and to produce this sentence: Finland, Sweden, Denmark, Norway, IceLand,
const countriesSentence = countries.reduce((acc, curr)=>{
  return acc + curr + ', '
}, '')
console.log(countriesSentence)

// I.7 Use some to check if some names' length greater than seven in names array
const greaterThanSeven = names.some((item)=>{
  return item.length > 7
})
console.log(greaterThanSeven)

// I.8 Use every to check if all the countries contain the word land

const doItContainsLand = countries.every((country)=>{
  return country.includes('land')
})
console.log(doItContainsLand)

// I.9 Explain the difference between find and findIndex.

//  Find returns first element corresponding to the condition, findIndex returns the index of the first item corresponding to the condition

// I.10 Use find to find the first country containing only six letters in the countries array

const firstWithSixLetters = countries.find((country)=>{
  return country.length === 6
})
console.log(firstWithSixLetters)

// I.11 Use findIndex to find the position of the first country containing only six letters in the countries array

const firstPositionWithSixLetters = countries.findIndex((country)=>{
  return country.length === 6
})
console.log(firstPositionWithSixLetters)


// EXERCICE II
// II.1 Find the total price of products by chaining two or more array iterators
const onlyPriceItems = products.filter((item)=>{
  return typeof item.price === 'number' && item.price
}).map((item)=>{
  return item.price
}).reduce((acc, curr)=>{
  return acc+curr
})
console.log(onlyPriceItems)

// EXERCICE III
import { countries_data } from "./countries_data.js";

console.log(countries_data);

// III.1 *** Find the 10 most spoken languages:

/* Your output should look like this
console.log(mostSpokenLanguages(countries_data, 10))
[
{country: 'English',count:91},
{country: 'French',count:45},
{country: 'Arabic',count:25},
{country: 'Spanish',count:24},
{country:'Russian',count:9},
{country:'Portuguese', count:9},
{country:'Dutch',count:8},
{country:'German',count:7},
{country:'Chinese',count:5},
{country:'Swahili',count:4}
]

*/

// A. Create a function mostSpokenLanguages that takes the countries_data array and the number of languages to retrieve as inputs.
// B. Iterate through the languages property of each country and count the occurrences of each language.
// C. Sort the languages based on their occurrence count in descending order.
// D. Return the top N (in this case, 10) languages along with their occurrence count.

function mostSpokenLanguages(array, numberOfLanguages){
const languageCounts = {} //object will be used to store the count of occurrences of each language

  for(let country of countries_data){//on itère sur chaque country object
    for(let language of country.languages){//on itère sur chaque langue de l'array country.languages
      languageCounts[language] = (languageCounts[language] || 0) +1//languageCounts[language]: This syntax accesses the value associated with the language key in the languageCounts object. If the language key does not exist in the object, it returns undefined.
      //(languageCounts[language] || 0): This part is a short-circuit evaluation. If language exists as a key in the languageCounts object, its value is returned. If it does not exist (i.e., returns undefined), the expression evaluates to 0.
      // +1: This part adds 1 to the value retrieved from the languageCounts[language] or 0 if the language is encountered for the first time.
      // The result of the entire expression is then assigned to languageCounts[language], updating the count of occurrences for that specific language.
    }
  }

const sortedLanguages = Object.entries(languageCounts)
.sort((a,b)=>b[1]-a[1])//on trie sur le second item de chaque objet grace au [1]
.slice(0, numberOfLanguages)
.map(([language, count])=>({country: language, count: count}))

return sortedLanguages
}

console.log(mostSpokenLanguages(countries_data, 10))

// EXERCICE PLUS SIMPLE POUR COMPRENDRE LA METHODE : count how many times each fruit appears in the fruitArray

const fruitArray = ['apple', 'banana', 'orange', 'apple', 'apple', 'banana', 'grape'];

const storerObject = {}

for(let fruit of fruitArray){
  storerObject[fruit]= (storerObject[fruit]||0)+1
  //storerObject[fruit] : This part is attempting to access the value associated with the fruit key in the storerObject. When you access a property in an object using square brackets (e.g., object[key]), it looks for the property with the specified key in the object and returns its value.

  // (storerObject[fruit] || 0): If fruit exists as a key in the storerObject, ça reprend le nombre d'occurence déjà trouvé et ajoute 1. Sinon, if fruit does not exist already as a key in storerObject ça met l'occurence à 0 + 1

}

console.log(storerObject)

/* III.2  Use countries_data.js file create a function which create the ten most populated countries

console.log(mostPopulatedCountries(countries, 10))

[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000},
{country: 'Indonesia', population: 258705000},
{country: 'Brazil', population: 206135893},
{country: 'Pakistan', population: 194125062},
{country: 'Nigeria', population: 186988000},
{country: 'Bangladesh', population: 161006790},
{country: 'Russian Federation', population: 146599183},
{country: 'Japan', population: 126960000}
]
*/
function mostPopulatedCountries(array, numberOfCountries){
  let storingObject = {}
  for(let country of countries_data){
    storingObject[country.name] = country.population//country.name en key et country.population en value
  }
  const sortedCountries = Object.entries(storingObject)//obligé pour appliquer les array methodes ci dessous
  .sort((a,b)=>b[1]-a[1])//on trie sur population donc le second item de l'objet grace à [1]
  .slice(0, numberOfCountries)
  .map(([name, population])=>({country: name, population: population}))
  console.log(sortedCountries)
}

console.log(mostPopulatedCountries(countries_data, 10))

