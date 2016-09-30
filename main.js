(function(){
  "use strict";

//console.log(items);

var itemTotal = items.reduce(function(total, item){
  return total + item.price;
}, 0);

//console.log('The average price is $' + (itemTotal/items.length).toFixed(2));

var itemRange = items.filter(function(item){
  return (item.price > 14 && item.price <18 && item.currency_code === 'USD');
});
console.log(itemRange);
//console.log("Items that cost between $14.00 USD and $18.00 USD:");

//itemRange.map(function(item){
  //console.log(item.title);
  //return;
//});

var britishCurrency = items.filter(function(item){
  return item.currency_code === 'GBP';
});

britishCurrency.map(function(item){
  console.log(item.title, '£' + item.price + '.00');
  return;
});

var woodItems = items.filter(function(item){
  return item.materials.includes('wood');
});

woodItems.map(function(item){
  console.log(item.title);
  return;
});

var numMaterials = items.filter(function(item){
  return (item.materials.length > 7);
});

numMaterials.map(function(item){
  console.log(item.title + ';' + item.materials);
  return;
});

var maker = items.filter(function(item){
  return (item.who_made.includes('i_did'));
});

console.log(maker.length + ' were made by their seller');




}());
