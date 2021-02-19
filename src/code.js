
// Write a function that will calculate the adoption fee for a group of cats.

// Cat Castle Cafe is a cat rescue that offers cats for adoption.
// They charge an adoption fee to cover the cost of shots, spay/neuter, etc.

// They currently classify all cats into one of four categories:
//  - kitten, adult, senior, special needs

// In terms of adoption fees, there are discounts available for adopting
// multiple cats at the same time:

// - Adult cats need a friend! They are adopt one, get one free.
// - For senior and special needs cats, there's a 20% discount on all senior and special needs cats if you adopt more than one in any combination.

// The adoption rates for each category are as follows:

//  - Kittens: $150
//  - Adults: $100
//  - Seniors: $50
//  - Special Needs: $25

// You will receive the total number of cats in each category in a JSON string like this:

// ```
// {"kittens": 1, "adults": 2, "seniors":1, "special needs":0}

// //order should always be the same!!
// ```

// The expected output is an integer that is the total adoption fee. For the above example, the expected output is 300

// Example #2 (expected output is 260):

// ```
// {"kittens": 0, "adults": 3, "seniors":1, "special needs":1}
// ```

// Note: If the total adoption fee is not a whole dollar amount, please round down.
// """

// def solution(jsonStrList):
//     # Please write your code here.
//     return 0

// assert(solution('{"kittens": 1, "adults": 2, "seniors":1, "special needs":0}') == 300)
// assert(solution('{"kittens": 0, "adults": 3, "seniors":1, "special needs":1}') == 260)
//  */

function solution(jsonStringList) {

  //figure out how many senior and special needs cats there are, if any. DONE
  //if there are special needs cats, edit the price to b3 .8 of the original price DONE

  //if number of special needs AND senior cats > 1, apply the above logic DONE

  //buy one get one free logic

  let kittensPrice = 150
  let adultsPrice = 100
  let seniorsPrice = 50
  let specialNeedsPrice = 25



  let catCount = (Object.values(jsonStringList));
  console.log(catCount)
  //kittens, adults, seniors, special needs
  //prices[0], prices[1], prices[2], prices[3]

  var discountedSeniorPrice;
  var discountedSpecialNeedsPrice;
  var discountedAdultsPrice;

  if ((catCount[2] + catCount[3]) >=2 ) {
    discountedSeniorPrice = seniorsPrice * (catCount[2]) * 0.8
    discountedSpecialNeedsPrice = specialNeedsPrice * (catCount[3]) * 0.8
  } else {
    discountedSeniorPrice = seniorsPrice * (catCount[2])
    discountedSpecialNeedsPrice = specialNeedsPrice * (catCount[3])
  }

  if (catCount[1] % 2 === 0) {
    discountedAdultsPrice = (catCount[1] / 2) * adultsPrice
  } else {
    discountedAdultsPrice = Math.floor((catCount[1] / 2) + 1) * adultsPrice
    //divided by 2, rounded down, and then add 1
  }

}

solution({"kittens": 1, "adults": 2, "seniors":1, "special needs":0}); 
