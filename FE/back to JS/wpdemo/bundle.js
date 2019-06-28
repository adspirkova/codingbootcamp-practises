/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./answer.js":
/*!*******************!*\
  !*** ./answer.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Answer; });\nclass Answer {\n  constructor(user, text) {\n    this.user = user;\n    this.text = text;\n  }\n\n  render() {\n    const element = document.createElement('div');\n    element.className = 'answer';\n    element.innerHTML = `\n      <div class=\"user\">${this.user}</div>\n      <div class=\"text\">${this.text}</div>\n    `;\n\n    return element;\n  }\n\n  mount(parent) {\n    this.element = this.render();\n    parent.appendChild(this.element);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hbnN3ZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hbnN3ZXIuanM/NGM0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBbnN3ZXIge1xuICBjb25zdHJ1Y3Rvcih1c2VyLCB0ZXh0KSB7XG4gICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICdhbnN3ZXInO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInVzZXJcIj4ke3RoaXMudXNlcn08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+JHt0aGlzLnRleHR9PC9kaXY+XG4gICAgYDtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5yZW5kZXIoKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./answer.js\n");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _question_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question.js */ \"./question.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const question = new _question_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n    'My first question', \n    'A nice sexy body',\n    [\n      {\n        user: 'Vilash Deshmukh',\n        text: 'Because he was smart enough to understand that it was foolish of him to be thinking that he would ever become immortal in the Body that he was in.'\n      },\n      {\n        user: 'Jung Hoon Lee',\n        text: 'He was a physicist and not a biologist. Even if he were, he like us was limited by the technology of the times he lived in'\n      },\n      {\n        user: 'Kris Lim',\n        text: 'Because humanity better find several other planets that can sustain humans before finding the secret of immortality.'\n      },\n    ]\n  );\n\n  const question2 = new _question_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n    'My section question', \n    'An old and wrinkly body', \n    [],\n  );\n\n  const app = document.querySelector('#app');\n  question.mount(app);\n  question2.mount(app);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4vcXVlc3Rpb24uanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBxdWVzdGlvbiA9IG5ldyBRdWVzdGlvbihcbiAgICAnTXkgZmlyc3QgcXVlc3Rpb24nLCBcbiAgICAnQSBuaWNlIHNleHkgYm9keScsXG4gICAgW1xuICAgICAge1xuICAgICAgICB1c2VyOiAnVmlsYXNoIERlc2htdWtoJyxcbiAgICAgICAgdGV4dDogJ0JlY2F1c2UgaGUgd2FzIHNtYXJ0IGVub3VnaCB0byB1bmRlcnN0YW5kIHRoYXQgaXQgd2FzIGZvb2xpc2ggb2YgaGltIHRvIGJlIHRoaW5raW5nIHRoYXQgaGUgd291bGQgZXZlciBiZWNvbWUgaW1tb3J0YWwgaW4gdGhlIEJvZHkgdGhhdCBoZSB3YXMgaW4uJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdXNlcjogJ0p1bmcgSG9vbiBMZWUnLFxuICAgICAgICB0ZXh0OiAnSGUgd2FzIGEgcGh5c2ljaXN0IGFuZCBub3QgYSBiaW9sb2dpc3QuIEV2ZW4gaWYgaGUgd2VyZSwgaGUgbGlrZSB1cyB3YXMgbGltaXRlZCBieSB0aGUgdGVjaG5vbG9neSBvZiB0aGUgdGltZXMgaGUgbGl2ZWQgaW4nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB1c2VyOiAnS3JpcyBMaW0nLFxuICAgICAgICB0ZXh0OiAnQmVjYXVzZSBodW1hbml0eSBiZXR0ZXIgZmluZCBzZXZlcmFsIG90aGVyIHBsYW5ldHMgdGhhdCBjYW4gc3VzdGFpbiBodW1hbnMgYmVmb3JlIGZpbmRpbmcgdGhlIHNlY3JldCBvZiBpbW1vcnRhbGl0eS4nXG4gICAgICB9LFxuICAgIF1cbiAgKTtcblxuICBjb25zdCBxdWVzdGlvbjIgPSBuZXcgUXVlc3Rpb24oXG4gICAgJ015IHNlY3Rpb24gcXVlc3Rpb24nLCBcbiAgICAnQW4gb2xkIGFuZCB3cmlua2x5IGJvZHknLCBcbiAgICBbXSxcbiAgKTtcblxuICBjb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJyk7XG4gIHF1ZXN0aW9uLm1vdW50KGFwcCk7XG4gIHF1ZXN0aW9uMi5tb3VudChhcHApO1xufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./question.js":
/*!*********************!*\
  !*** ./question.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Question; });\n/* harmony import */ var _answer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./answer.js */ \"./answer.js\");\n\n\nclass Question {\n  constructor(title, body, answers) {\n    this.title = title;\n    this.body = body;\n    this.votes = 13;\n    this.answers = answers;\n  }\n\n  upvote() {\n    this.votes++;\n    this.update();\n  }\n\n  downvote() {\n    this.votes--;\n    this.update();\n  }\n\n  render() {\n    const element = document.createElement('div');\n    element.innerHTML = `\n      <div class=\"question\">\n        <div class=\"votes\">\n          <button class=\"btn-upvote\">+</button>\n          <div class=\"counter\">${this.votes}</div>\n          <button class=\"btn-downvote\">-</button>\n        </div>\n        <div class=\"content\">\n          <div class=\"title\">${this.title}</div>\n          <div class=\"body\">${this.body}</div>\n        </div>\n      </div>\n      <div class=\"answers\"></div>\n    `;\n\n    element.querySelector('.btn-upvote').addEventListener(\n      'click', this.upvote.bind(this)\n    );\n    element.querySelector('.btn-downvote').addEventListener(\n      'click', this.downvote.bind(this)\n    );\n\n    const result = this.answers.map(answer => {\n      return new _answer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](answer.user, answer.text);  \n    });\n    \n    const answersElm = element.querySelector('.answers');\n    result.forEach(answer => answer.mount(answersElm));\n\n    return element;\n  }\n\n  mount(parent) {\n    this.element = this.render();\n    parent.appendChild(this.element);\n  }\n\n  update() {\n    const counter = this.element.querySelector('.counter');\n    counter.textContent = this.votes;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9xdWVzdGlvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3F1ZXN0aW9uLmpzP2Q4YzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuc3dlciBmcm9tICcuL2Fuc3dlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGJvZHksIGFuc3dlcnMpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICB0aGlzLnZvdGVzID0gMTM7XG4gICAgdGhpcy5hbnN3ZXJzID0gYW5zd2VycztcbiAgfVxuXG4gIHVwdm90ZSgpIHtcbiAgICB0aGlzLnZvdGVzKys7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGRvd252b3RlKCkge1xuICAgIHRoaXMudm90ZXMtLTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidm90ZXNcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXVwdm90ZVwiPis8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRlclwiPiR7dGhpcy52b3Rlc308L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLWRvd252b3RlXCI+LTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj4ke3RoaXMudGl0bGV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvZHlcIj4ke3RoaXMuYm9keX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnN3ZXJzXCI+PC9kaXY+XG4gICAgYDtcblxuICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi11cHZvdGUnKS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJywgdGhpcy51cHZvdGUuYmluZCh0aGlzKVxuICAgICk7XG4gICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWRvd252b3RlJykuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsIHRoaXMuZG93bnZvdGUuYmluZCh0aGlzKVxuICAgICk7XG5cbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmFuc3dlcnMubWFwKGFuc3dlciA9PiB7XG4gICAgICByZXR1cm4gbmV3IEFuc3dlcihhbnN3ZXIudXNlciwgYW5zd2VyLnRleHQpOyAgXG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgYW5zd2Vyc0VsbSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFuc3dlcnMnKTtcbiAgICByZXN1bHQuZm9yRWFjaChhbnN3ZXIgPT4gYW5zd2VyLm1vdW50KGFuc3dlcnNFbG0pKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5yZW5kZXIoKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBjb3VudGVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGVyJyk7XG4gICAgY291bnRlci50ZXh0Q29udGVudCA9IHRoaXMudm90ZXM7XG4gIH1cbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./question.js\n");

/***/ })

/******/ });