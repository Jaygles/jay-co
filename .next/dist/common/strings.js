"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var elide = exports.elide = function elide(string) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 140;

  if (isEmpty(string)) {
    return "...";
  }

  if (string.length < length) {
    return string.trim();
  }

  return string.substring(0, length) + "...";
};

var toDate = exports.toDate = function toDate(string) {
  var date = new Date(string);
  return date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();
};

var isEmpty = exports.isEmpty = function isEmpty(string) {
  return !string || string.length === 0;
};

var pluralize = exports.pluralize = function pluralize(text, count) {
  return count > 1 || count === 0 ? text + "s" : text;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9zdHJpbmdzLmpzIl0sIm5hbWVzIjpbImVsaWRlIiwic3RyaW5nIiwibGVuZ3RoIiwiaXNFbXB0eSIsInRyaW0iLCJzdWJzdHJpbmciLCJ0b0RhdGUiLCJkYXRlIiwiRGF0ZSIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEZ1bGxZZWFyIiwicGx1cmFsaXplIiwidGV4dCIsImNvdW50Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQU0sd0JBQVEsU0FBUixBQUFRLE1BQUMsQUFBRCxRQUEwQjtNQUFqQixBQUFpQiw2RUFBUixBQUFRLEFBQzdDOztNQUFJLFFBQVEsQUFBUixBQUFKLFNBQXFCLEFBQ25CO1dBQU8sQUFBUCxBQUNEO0FBRUQ7O01BQUksT0FBTyxBQUFQLFNBQWdCLEFBQXBCLFFBQTRCLEFBQzFCO1dBQU8sT0FBTyxBQUFQLEFBQVAsQUFDRDtBQUVEOztTQUFVLE9BQU8sQUFBUCxVQUFpQixBQUFqQixHQUFvQixBQUFwQixBQUFWLFVBQ0Q7QUFWTSxBQVlQOztBQUFPLElBQU0sMEJBQVMsU0FBVCxBQUFTLGVBQVUsQUFDOUI7TUFBTSxPQUFPLElBQUksQUFBSixLQUFTLEFBQVQsQUFBYixBQUNBO1NBQVUsS0FBSyxBQUFMLGFBQWtCLEFBQTVCLFVBQWlDLEtBQUssQUFBTCxBQUFqQyxrQkFBbUQsS0FBSyxBQUFMLEFBQW5ELEFBQ0Q7QUFITSxBQUtQOztBQUFPLElBQU0sNEJBQVUsU0FBVixBQUFVLGdCQUFVLEFBQy9CO1NBQU8sQ0FBQyxBQUFELFVBQVcsT0FBTyxBQUFQLFdBQWtCLEFBQXBDLEFBQ0Q7QUFGTSxBQUlQOztBQUFPLElBQU0sZ0NBQVksU0FBWixBQUFZLFVBQUMsQUFBRCxNQUFlLEFBQWYsT0FBaUMsQUFDeEQ7U0FBTyxRQUFRLEFBQVIsS0FBYSxVQUFVLEFBQXZCLElBQThCLEFBQTlCLGFBQXdDLEFBQS9DLEFBQ0Q7QUFGTSIsImZpbGUiOiJzdHJpbmdzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXkvRGVza3RvcC9jb2RlL3BvcnRmb2xpby9qYXktY28ifQ==