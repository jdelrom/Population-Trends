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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/formatData.js":
/*!***************************!*\
  !*** ./src/formatData.js ***!
  \***************************/
/*! exports provided: totalPopulation, statesPopulation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"totalPopulation\", function() { return _totalPopulation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"statesPopulation\", function() { return _statesPopulation; });\nconst totalPopulation = {};\nconst statesPopulation = {};\n\nd3.csv(\"./csv/us-race-population.csv\")\n    .row((d) => {\n        return {\n            id: d.ID,\n            state: d.NAME,\n            race: +d.RACE,\n            yr2000: d.POPESTIMATE2000,\n            yr2001: d.POPESTIMATE2001,\n            yr2002: d.POPESTIMATE2002,\n            yr2003: d.POPESTIMATE2003,\n            yr2004: d.POPESTIMATE2004,\n            yr2005: d.POPESTIMATE2005,\n            yr2006: d.POPESTIMATE2006,\n            yr2007: d.POPESTIMATE2007,\n            yr2008: d.POPESTIMATE2008,\n            yr2009: d.POPESTIMATE2009,\n            yr2010: d.POPESTIMATE2010\n        }\n    })\n\n    .get((data) => {\n        // console.log(data);\n        // debugger\n        // window.data = data;\n        // let states = [];\n        \n\n        data.forEach(d => {\n            if (d.state === 'United States') {\n                totalPopulation[d.race] = {\n                    yr2000: d.yr2000,\n                    yr2001: d.yr2001,\n                    yr2002: d.yr2002,\n                    yr2003: d.yr2003,\n                    yr2004: d.yr2004,\n                    yr2005: d.yr2005,\n                    yr2006: d.yr2006,\n                    yr2007: d.yr2007,\n                    yr2008: d.yr2008,\n                    yr2009: d.yr2009,\n                    yr2010: d.yr2010\n                }\n            } else {\n                let id = d.id;\n                let race = d.race;\n                let state = d.state;\n\n                // if (!statesPopulation[state]) {\n                //     statesPopulation[state] = {};\n                // } \n                if (!statesPopulation[id]) {\n                    statesPopulation[id] = {};\n                }  // else if (!statesPopulation[id][state]) {\n                //     statesPopulation[id] = {};\n                // }\n                \n                // if (!!statesPopulation[id][state][race]) {\n                //     statesPopulation[id][state][race] = {};\n                // }\n                // if (!statesPopulation[state][race]) {\n                //     statesPopulation[state][races] = {};\n                // }\n\n                statesPopulation[id] = {\n                        name: state,\n                        yr2000: d.yr2000,\n                        yr2001: d.yr2001,\n                        yr2002: d.yr2002,\n                        yr2003: d.yr2003,\n                        yr2004: d.yr2004,\n                        yr2005: d.yr2005,\n                        yr2006: d.yr2006,\n                        yr2007: d.yr2007,\n                        yr2008: d.yr2008,\n                        yr2009: d.yr2009,\n                        yr2010: d.yr2010\n                }\n            }\n        })\n    });\n\nwindow.totalPopulation = totalPopulation;\nwindow.statesPopulation = statesPopulation;\n\nconst _totalPopulation = totalPopulation;\n\nconst _statesPopulation = statesPopulation;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZm9ybWF0RGF0YS5qcz9iYjI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUMrQztBQUMvQyIsImZpbGUiOiIuL3NyYy9mb3JtYXREYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdG90YWxQb3B1bGF0aW9uID0ge307XG5jb25zdCBzdGF0ZXNQb3B1bGF0aW9uID0ge307XG5cbmQzLmNzdihcIi4vY3N2L3VzLXJhY2UtcG9wdWxhdGlvbi5jc3ZcIilcbiAgICAucm93KChkKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogZC5JRCxcbiAgICAgICAgICAgIHN0YXRlOiBkLk5BTUUsXG4gICAgICAgICAgICByYWNlOiArZC5SQUNFLFxuICAgICAgICAgICAgeXIyMDAwOiBkLlBPUEVTVElNQVRFMjAwMCxcbiAgICAgICAgICAgIHlyMjAwMTogZC5QT1BFU1RJTUFURTIwMDEsXG4gICAgICAgICAgICB5cjIwMDI6IGQuUE9QRVNUSU1BVEUyMDAyLFxuICAgICAgICAgICAgeXIyMDAzOiBkLlBPUEVTVElNQVRFMjAwMyxcbiAgICAgICAgICAgIHlyMjAwNDogZC5QT1BFU1RJTUFURTIwMDQsXG4gICAgICAgICAgICB5cjIwMDU6IGQuUE9QRVNUSU1BVEUyMDA1LFxuICAgICAgICAgICAgeXIyMDA2OiBkLlBPUEVTVElNQVRFMjAwNixcbiAgICAgICAgICAgIHlyMjAwNzogZC5QT1BFU1RJTUFURTIwMDcsXG4gICAgICAgICAgICB5cjIwMDg6IGQuUE9QRVNUSU1BVEUyMDA4LFxuICAgICAgICAgICAgeXIyMDA5OiBkLlBPUEVTVElNQVRFMjAwOSxcbiAgICAgICAgICAgIHlyMjAxMDogZC5QT1BFU1RJTUFURTIwMTBcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAuZ2V0KChkYXRhKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAvLyB3aW5kb3cuZGF0YSA9IGRhdGE7XG4gICAgICAgIC8vIGxldCBzdGF0ZXMgPSBbXTtcbiAgICAgICAgXG5cbiAgICAgICAgZGF0YS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgaWYgKGQuc3RhdGUgPT09ICdVbml0ZWQgU3RhdGVzJykge1xuICAgICAgICAgICAgICAgIHRvdGFsUG9wdWxhdGlvbltkLnJhY2VdID0ge1xuICAgICAgICAgICAgICAgICAgICB5cjIwMDA6IGQueXIyMDAwLFxuICAgICAgICAgICAgICAgICAgICB5cjIwMDE6IGQueXIyMDAxLFxuICAgICAgICAgICAgICAgICAgICB5cjIwMDI6IGQueXIyMDAyLFxuICAgICAgICAgICAgICAgICAgICB5cjIwMDM6IGQueXIyMDAzLFxuICAgICAgICAgICAgICAgICAgICB5cjIwMDQ6IGQueXIyMDA0LFxuICAgICAgICAgICAgICAgICAgICB5cjIwMDU6IGQueXIyMDA1LFxuICAgICAgICAgICAgICAgICAgICB5cjIwMDY6IGQueXIyMDA2LFxuICAgICAgICAgICAgICAgICAgICB5cjIwMDc6IGQueXIyMDA3LFxuICAgICAgICAgICAgICAgICAgICB5cjIwMDg6IGQueXIyMDA4LFxuICAgICAgICAgICAgICAgICAgICB5cjIwMDk6IGQueXIyMDA5LFxuICAgICAgICAgICAgICAgICAgICB5cjIwMTA6IGQueXIyMDEwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSBkLmlkO1xuICAgICAgICAgICAgICAgIGxldCByYWNlID0gZC5yYWNlO1xuICAgICAgICAgICAgICAgIGxldCBzdGF0ZSA9IGQuc3RhdGU7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiAoIXN0YXRlc1BvcHVsYXRpb25bc3RhdGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHN0YXRlc1BvcHVsYXRpb25bc3RhdGVdID0ge307XG4gICAgICAgICAgICAgICAgLy8gfSBcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXRlc1BvcHVsYXRpb25baWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlc1BvcHVsYXRpb25baWRdID0ge307XG4gICAgICAgICAgICAgICAgfSAgLy8gZWxzZSBpZiAoIXN0YXRlc1BvcHVsYXRpb25baWRdW3N0YXRlXSkge1xuICAgICAgICAgICAgICAgIC8vICAgICBzdGF0ZXNQb3B1bGF0aW9uW2lkXSA9IHt9O1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBpZiAoISFzdGF0ZXNQb3B1bGF0aW9uW2lkXVtzdGF0ZV1bcmFjZV0pIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgc3RhdGVzUG9wdWxhdGlvbltpZF1bc3RhdGVdW3JhY2VdID0ge307XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIGlmICghc3RhdGVzUG9wdWxhdGlvbltzdGF0ZV1bcmFjZV0pIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgc3RhdGVzUG9wdWxhdGlvbltzdGF0ZV1bcmFjZXNdID0ge307XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgc3RhdGVzUG9wdWxhdGlvbltpZF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBzdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHlyMjAwMDogZC55cjIwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB5cjIwMDE6IGQueXIyMDAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgeXIyMDAyOiBkLnlyMjAwMixcbiAgICAgICAgICAgICAgICAgICAgICAgIHlyMjAwMzogZC55cjIwMDMsXG4gICAgICAgICAgICAgICAgICAgICAgICB5cjIwMDQ6IGQueXIyMDA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgeXIyMDA1OiBkLnlyMjAwNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHlyMjAwNjogZC55cjIwMDYsXG4gICAgICAgICAgICAgICAgICAgICAgICB5cjIwMDc6IGQueXIyMDA3LFxuICAgICAgICAgICAgICAgICAgICAgICAgeXIyMDA4OiBkLnlyMjAwOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHlyMjAwOTogZC55cjIwMDksXG4gICAgICAgICAgICAgICAgICAgICAgICB5cjIwMTA6IGQueXIyMDEwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pO1xuXG53aW5kb3cudG90YWxQb3B1bGF0aW9uID0gdG90YWxQb3B1bGF0aW9uO1xud2luZG93LnN0YXRlc1BvcHVsYXRpb24gPSBzdGF0ZXNQb3B1bGF0aW9uO1xuXG5jb25zdCBfdG90YWxQb3B1bGF0aW9uID0gdG90YWxQb3B1bGF0aW9uO1xuZXhwb3J0IHsgX3RvdGFsUG9wdWxhdGlvbiBhcyB0b3RhbFBvcHVsYXRpb24gfTtcbmNvbnN0IF9zdGF0ZXNQb3B1bGF0aW9uID0gc3RhdGVzUG9wdWxhdGlvbjtcbmV4cG9ydCB7IF9zdGF0ZXNQb3B1bGF0aW9uIGFzIHN0YXRlc1BvcHVsYXRpb24gfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/formatData.js\n");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formatData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatData */ \"./src/formatData.js\");\n/* harmony import */ var _statesData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statesData */ \"./src/statesData.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz81NmQ3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUErRCIsImZpbGUiOiIuL3NyYy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt0b3RhbFBvcHVsYXRpb24sIHN0YXRlc1BvcHVsYXRpb259IGZyb20gJy4vZm9ybWF0RGF0YSc7XG5pbXBvcnQgc3RhdGVzRGF0YSBmcm9tICcuL3N0YXRlc0RhdGEnOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "./src/statesData.js":
/*!***************************!*\
  !*** ./src/statesData.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formatData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatData */ \"./src/formatData.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVzRGF0YS5qcz9kNWRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBOEMiLCJmaWxlIjoiLi9zcmMvc3RhdGVzRGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c3RhdGVzUG9wdWxhdGlvbn0gZnJvbSAnLi9mb3JtYXREYXRhJztcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/statesData.js\n");

/***/ })

/******/ });