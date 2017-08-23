/* Building an Ajax, piece by piece. */
/*  Source: Lecture 61*/

(function (global) {

var dc = {};
var allCategoriesUrl =
  "https://davids-restaurant.herokuapp.com/categories.json";
var categoryHtml = "snippets/category-snippet.html";
// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;





};
