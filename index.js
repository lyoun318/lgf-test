// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./lgf-test
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function (array) {
    let males = _.filter(array, function(customer) {
        return customer.gender === "male";
    });
    return males.length
};

var femaleCount = function(array) {
    let females = _.reduce(array, function(accumulator, current) {
        if (current.gender === 'female') {
            accumulator += 1;
        }
        return accumulator;
    }, 0);
    return females;
};

var oldestCustomer = function(array) {
    let oldest = _.reduce(array. function (accumulator, current){
        
    })
};

var youngestCustomer;
youngestCustomer = function(customers) {
    if (customers.length === 0) {
      return '';
    }
    let youngestAge = Infinity;
    let youngestName = '';
    for (let i = 0; i < customers.length; i++) {
      if (customers[i].age < youngestAge) {
        youngestAge = customers[i].age;
        youngestName = customers[i].name;
      }
    }
    return youngestName;
  };

var averageBalance;
averageBalance = function (customers) {
  if (customers.length === 0) {
    return 0;
  }
  let totalBalance = 0;
  for (let i = 0; i < customers.length; i++) {
    totalBalance += customers[i].balance;
  }
  return totalBalance / customers.length;
};

var firstLetterCount = function(customers, letter) {
    let count = 0;
    for (let i = 0; i < customers.length; i++) {
      if (customers[i].name.charAt(0).toLowerCase() === letter.toLowerCase()) {
        count++;
      }
    }
    return count;
  };

var friendFirstLetterCount;
friendFirstLetterCount = function (customers, customer, letter) {
    let count = 0;
    for (let i = 0; i < customers.length; i++) {
      if (customers[i].name === customer.name) {
        const friends = customers[i].friends;
        for (let j = 0; j < friends.length; j++) {
          if (friends[j].name.charAt(0).toLowerCase() === letter.toLowerCase()) {
            count++;
          }
        }
        break;
      }
    }
    return count;
  };

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;