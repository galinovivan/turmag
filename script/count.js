$(document).ready(function() {
	
    



function showCount(counter, plusBtn, minBtn, price, itemPrice) {
   
var priceItem = parseInt(itemPrice.text().replace(' ', ''));

   var numCount = $.cookie('user_count') != undefined ? parseInt($.cookie('user_count')) : 0;
   counter.html(numCount + '  шт.');
   price.text(priceItem * parseInt(counter.text()));
   plusBtn.click(function() {
   	numCount ++;
   	$.cookie('user_count', numCount, {express: 7, path: '/'});
   	counter.html(numCount + ' шт.');
     
     price.text(parseInt(price.text().replace(' ', '')) + priceItem);
   });
   minBtn.click(function() {
   	if (numCount > 0) {
   		numCount--;
   		$.cookie('user_count', numCount, {express: 7, path: '/'});
   		counter.html(numCount + ' шт.');
   		price.text(parseInt(price.text().replace(' ', '')) - priceItem);
   	}
   			else {
   			return;
   		}
   	}
   )


};





var count1 = $('#count');
var pluslBtn1 = $('#maxCount');
var minBtn1 = $('#minCount');
var price1 = $('#finalPrice-1');
var itemPrice1 = $('#itemPrice-1');


var count2 = $('#count-2');
var plusBtn2 = $('#maxCount-2');
var minBtn2 = $('#minCount-2');
var price2= $('#finalPrice-2');
var itemPrice2 = $('#item-price-2');
 


showCount(count1, pluslBtn1, minBtn1, price1, itemPrice1);
showCount(count2, plusBtn2, minBtn2, price2, itemPrice2);










})

