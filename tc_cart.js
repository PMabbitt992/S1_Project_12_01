"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Paige Mabbitt
   Date: 2.27.19   
   
   Filename: tc_cart.js
	
*/
// establish variable orderTotal for end total and code for the html
var orderTotal = 0;
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>";

//for each array index, the html will put out the item picture, description, price, quantity, total cost of each item (item price * the amount of items), and add each item cost together for an order total
for (var i = 0; i < item.length; i++) {
    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "item' /></td>";
    cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";
    var itemCost = itemPrice[i] * itemQty[i];
    cartHTML += "<td>$" + itemCost + "</td></tr>";
    orderTotal += itemCost;
}
// end of table, displays the Subtotal for the order
cartHTML += "<tr> <td colspan = '4'> Subtotal </td> <td>$" + orderTotal + "</td> </tr> </table > ";
//input the cartHTML variable code into the actual html file
document.getElementById("cart").innerHTML = cartHTML;