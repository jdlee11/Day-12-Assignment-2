// **********BEGIN FUNCTION DEFINITIONS***********
function average(){
  var prices = items.map(function(item){
    return item.price;
  });
  var ans1 = prices.reduce(function(total, num){
    return total + num;
  }, 0);
  ans1 = Math.ceil(ans1 * 100 / prices.length) / 100;
  return ans1;
}

function fourteenToEighteen(){
  var lowPriced = items.filter(function(item){
    return item.price > 14.00 && item.price < 18.00;
  });
  lowPriced = lowPriced.map(function(item){
    return item.title;
  });
  return lowPriced;
}

function usesPounds(){
  var british = items.filter(function(item){
    return item.currency_code === "GBP";
  });
  return british;
}

function containsWood(){
  var wooden = items.filter(function(item){
    return item.materials.includes("wood");
  });
  return wooden;
}

function manyMaterials(){
  var multiMats = items.filter(function(item){
    return item.materials.length >= 8;
  });
  return multiMats;
}

function madeBySeller(){
  var sellerMade = items.filter(function(item){
    return item.who_made === "i_did";
  });
  return sellerMade;
}
// *******END FUNCTION DEFINITIONS*********************


// *******QUERY SELECTORS AND CONTENT ASSIGNMENT*******

var answer1 = document.querySelector(".answer1");
var output1 = average();
answer1.textContent = "The average price is $" + output1;

var answer2 = document.querySelector(".answer2");
var output2 = fourteenToEighteen();
var ans2String = "";
output2.forEach(function(item){
  ans2String += item.toString() + "\n\n";
});
answer2.textContent = ans2String;

var answer3 = document.querySelector(".answer3");
var output3 = usesPounds();
var ans3String = "";
output3.forEach(function(item){
  ans3String += item.title + " costs £" + item.price + "\n\n";
});
answer3.textContent = ans3String;

var answer4 = document.querySelector(".answer4");
var output4 = containsWood();
var ans4String = "";
output4.forEach(function(item){
  ans4String += item.title + " is made of wood." + "\n\n";
});
answer4.textContent = ans4String;

var answer5 = document.querySelector(".answer5");
var output5 = manyMaterials();
var ans5String = "";
output5.forEach(function(item){
  ans5String += item.title + "\n";
  item.materials.forEach(function(mat){
    ans5String += mat + "\n";
  });
  ans5String += "\n";
});
answer5.textContent = ans5String;

var answer6 = document.querySelector(".answer6");
var output6 = madeBySeller();
var ans6String = output6.length + " were made by their sellers";
answer6.textContent = ans6String;
// *********************************************
