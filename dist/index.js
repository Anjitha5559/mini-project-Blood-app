/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("// JavaScript\r\nconst socials = [\r\n  { name: 'Facebook',  icon: './res/facebook.png', url: 'https://www.facebook.com' },\r\n  { name: 'Instagram', icon: './res/instagram.png', url: 'https://www.instagram.com' },\r\n  { name: 'Whatsapp', icon: './res/whatsapp.png', url: 'https://www.whatsapp.com' },\r\n  { name: 'Message', icon: './res/inbox.png', url: 'https://www.example.com/message' },\r\n  { name: 'Phone', icon: './res/telephone.png', url: 'tel:+1234567890' },\r\n];\r\n\r\nconst footer = document.getElementById('iconrow');\r\n\r\nsocials.forEach(social => {\r\n  const div = document.createElement('div');\r\n  div.innerHTML = `<a class=\"socialbtn\" href=\"${social.url}\" target=\"_blank\"><img src=\"${social.icon}\" alt=\"${social.name} icon\"> <span class=\"iconname\">${social.name}</span></a>`;\r\n  div.className = 'soc';\r\n  footer.appendChild(div);\r\n});\r\n\r\n\r\nconst quotesAndFacts = [\r\n  \"Blood donation is the best donation\",\r\n  \"Every two seconds someone in the U.S. needs blood\",\r\n  \"A single donation can potentially help more than one patient\",\r\n  \"One donation can save up to three lives\",\r\n  \"Blood is the most precious gift that anyone can give to another person\",\r\n];\r\n\r\nconst quotesDiv = document.getElementById(\"quotes\");\r\nlet currentQuoteIndex = 0;\r\n\r\nfunction updateQuote() {\r\n  quotesDiv.classList.add('fade-out');setTimeout(() => {\r\n    quotesDiv.textContent = quotesAndFacts[currentQuoteIndex];\r\n    quotesDiv.classList.remove('fade-out');\r\n    quotesDiv.classList.add('fade-in'); setTimeout(() => {\r\n      quotesDiv.classList.remove('fade-in');\r\n    }, 1000);\r\n\r\n    currentQuoteIndex = (currentQuoteIndex + 1) % quotesAndFacts.length;\r\n  }, 1000);\r\n}\r\n\r\nupdateQuote();\r\nsetInterval(updateQuote, 4000);\n\n//# sourceURL=webpack://mini-project-blood-app/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;