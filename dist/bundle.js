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
/******/ 	return __webpack_require__(__webpack_require__.s = "./docs/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./docs/js/app.js":
/*!************************!*\
  !*** ./docs/js/app.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loading */ \"./docs/js/modules/loading.js\");\n/* harmony import */ var _modules_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/selectors */ \"./docs/js/modules/selectors.js\");\n/* harmony import */ var _modules_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/template */ \"./docs/js/modules/template.js\");\n\n\n\n\nconst requestOptions = {\n  method: \"GET\",\n  redirect: \"follow\"\n};\nconst api = {\n  url: `https://api.spacexdata.com/v3/`\n};\n\nonClick()\n \nfunction onClick() {\n  // let templatel = \"template:\" + \"&&test&&\" + \" Test\";\n  // console.log(template(templatel, {\n  //   test: \"homemade\",\n  // }))\n  let button = Object(_modules_selectors__WEBPACK_IMPORTED_MODULE_1__[\"selectAll\"])(\"button\");\n  button.forEach((item, i) => {\n    item.addEventListener(\"click\", (e) => {\n      e.preventDefault()\n      let articles = Object(_modules_selectors__WEBPACK_IMPORTED_MODULE_1__[\"selectAll\"])(\"article\")\n      articles.forEach((article, i)=> {\n        article.remove()\n      })\n      Object(_modules_loading__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      data(item.id)\n    })\n  })\n}\n\nasync function data(buttonId) {\n  let data = await getData(buttonId);\n  render(data, buttonId);\n}\n \nasync function getData(searchTerm) {\n  let data = await fetch(`${api.url}${searchTerm}`, requestOptions)\n    .then(res => {\n      return errorHandling(res)\n    })\n    .then(result => {\n      return result;\n    })\n    .catch(error => console.log(\"error\", error));\n  return data;\n}\n\nasync function render(data, buttonId) {\n  console.log(data)\n  Object(_modules_loading__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  await data.forEach((item, i) => {\n    let container = Object(_modules_selectors__WEBPACK_IMPORTED_MODULE_1__[\"select\"])(\".container-info\");\n    let markup = matchId(item, buttonId);\n      container.insertAdjacentHTML(\"beforeend\", markup);\n  });\n}\n\nfunction matchId(item, buttonId) {\n  if(buttonId == \"launches\"){\n   Object(_modules_selectors__WEBPACK_IMPORTED_MODULE_1__[\"select\"])(\"h2\").textContent = \"launches\"\n   let markup = `\n        <article>\n        <h2>${item.mission_name}</h2>\n        ${(() => {\n          if(item.links.mission_patch_small == null){\n            return \"<div class='no-image'><p>No image available</p>\";\n          } else {\n            return `<div><img src=${item.links.mission_patch_small}>`;\n          }\n        })()}</div>\n        <p>Flight number: ${item.mission_name}</p>\n        <p>Launch year: ${item.launch_year}</p>\n        <p>Rocket: ${item.rocket.rocket_name}</p> \n        </article\n        `;\n        return markup;\n  } else if (buttonId == \"ships\") {\n    Object(_modules_selectors__WEBPACK_IMPORTED_MODULE_1__[\"select\"])(\"h2\").textContent = \"Ships\";\n   let markup = `\n        <article>\n        <h2>${item.ship_name}</h2>\n         ${(() => {\n       if (item.image == null) {\n         return \"<div class='no-image'><p>No image available</p>\";\n       } else {\n         return `<div><img src=${item.image}>`;\n       }\n     })()}</div>\n        <p>Number of missions: ${item.missions.length}</p>\n        <p>Active: ${item.active}</p>\n        <p>Roles: ${item.roles[0]}</p> \n        </article\n        `;\n    return markup;\n  } else if (buttonId == \"capsules\") {\n    Object(_modules_selectors__WEBPACK_IMPORTED_MODULE_1__[\"select\"])(\"h2\").textContent = \"Capsules\";\n    let markup = `\n        <article>\n        <h2>${item.capsule_serial}</h2>\n         <div class='no-image'>\n         <p>No image available</p>\n        </div>\n        <p>Status: ${item.status}</p>\n        <p>Mission: ${item.missions.name}</p>\n        <p>Details: ${item.details}</p> \n        </article\n        `;\n    return markup;\n  } else if (buttonId == \"missions\") {\n    Object(_modules_selectors__WEBPACK_IMPORTED_MODULE_1__[\"select\"])(\"h2\").textContent = \"Missions\";\n    let markup = `\n        <article>\n        <h2>${item.mission_name}</h2>\n         <div class='no-image'>\n         <p>No image available</p>\n        </div>\n        <p>Website: ${item.website}</p>\n        <p>Twitter: ${item.twitter}</p>\n        <p>Description: ${item.description}</p> \n        </article\n        `;\n    return markup;\n  } else if (buttonId == \"rockets\") {\n    Object(_modules_selectors__WEBPACK_IMPORTED_MODULE_1__[\"select\"])(\"h2\").textContent = \"Rockets\";\n    let markup = `\n        <article>\n        <h2>${item.rocket_name}</h2>\n        <div>\n        <img src=\"${item.flickr_images[1]}\">\n        </div>\n        <p>Active: ${item.active}</p>\n        <p>Boosters: ${item.boosters}</p>\n        <p>Engines: ${item.engines.number}</p>\n        <p>First flight: ${item.first_flight}</p> \n        </article\n        `;\n    return markup;\n  }\n}\n\nfunction errorHandling(res) {\n  if(res.ok) {\n    return res.json()\n  } else {\n    console.log(\"not ok\")\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2pzL2FwcC5qcz8zODQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZDO0FBQ1E7QUFDWjs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sZUFBZSxvRUFBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0VBQVM7QUFDOUI7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNLGdFQUFhO0FBQ25CO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixRQUFRLEVBQUUsV0FBVztBQUNqRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLGdFQUFhO0FBQ2Y7QUFDQSxvQkFBb0IsaUVBQU07QUFDMUI7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxpRUFBTTtBQUNUO0FBQ0E7QUFDQSxjQUFjLGtCQUFrQjtBQUNoQyxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFdBQVc7QUFDWCxvQ0FBb0MsK0JBQStCO0FBQ25FO0FBQ0EsU0FBUyxJQUFJO0FBQ2IsNEJBQTRCLGtCQUFrQjtBQUM5QywwQkFBMEIsaUJBQWlCO0FBQzNDLHFCQUFxQix3QkFBd0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILElBQUksaUVBQU07QUFDVjtBQUNBO0FBQ0EsY0FBYyxlQUFlO0FBQzdCLFdBQVc7QUFDWDtBQUNBO0FBQ0EsUUFBUTtBQUNSLGlDQUFpQyxXQUFXO0FBQzVDO0FBQ0EsTUFBTSxJQUFJO0FBQ1YsaUNBQWlDLHFCQUFxQjtBQUN0RCxxQkFBcUIsWUFBWTtBQUNqQyxvQkFBb0IsY0FBYztBQUNsQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsSUFBSSxpRUFBTTtBQUNWO0FBQ0E7QUFDQSxjQUFjLG9CQUFvQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWTtBQUNqQyxzQkFBc0IsbUJBQW1CO0FBQ3pDLHNCQUFzQixhQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxJQUFJLGlFQUFNO0FBQ1Y7QUFDQTtBQUNBLGNBQWMsa0JBQWtCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixhQUFhO0FBQ25DLHNCQUFzQixhQUFhO0FBQ25DLDBCQUEwQixpQkFBaUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILElBQUksaUVBQU07QUFDVjtBQUNBO0FBQ0EsY0FBYyxpQkFBaUI7QUFDL0I7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0EscUJBQXFCLFlBQVk7QUFDakMsdUJBQXVCLGNBQWM7QUFDckMsc0JBQXNCLG9CQUFvQjtBQUMxQywyQkFBMkIsa0JBQWtCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2RvY3MvanMvYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvZ2dsZUxvYWRpbmcgZnJvbSBcIi4vbW9kdWxlcy9sb2FkaW5nXCJcbmltcG9ydCB7c2VsZWN0LCBzZWxlY3RBbGx9IGZyb20gXCIuL21vZHVsZXMvc2VsZWN0b3JzXCJcbmltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi9tb2R1bGVzL3RlbXBsYXRlXCJcblxuY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gIG1ldGhvZDogXCJHRVRcIixcbiAgcmVkaXJlY3Q6IFwiZm9sbG93XCJcbn07XG5jb25zdCBhcGkgPSB7XG4gIHVybDogYGh0dHBzOi8vYXBpLnNwYWNleGRhdGEuY29tL3YzL2Bcbn07XG5cbm9uQ2xpY2soKVxuIFxuZnVuY3Rpb24gb25DbGljaygpIHtcbiAgLy8gbGV0IHRlbXBsYXRlbCA9IFwidGVtcGxhdGU6XCIgKyBcIiYmdGVzdCYmXCIgKyBcIiBUZXN0XCI7XG4gIC8vIGNvbnNvbGUubG9nKHRlbXBsYXRlKHRlbXBsYXRlbCwge1xuICAvLyAgIHRlc3Q6IFwiaG9tZW1hZGVcIixcbiAgLy8gfSkpXG4gIGxldCBidXR0b24gPSBzZWxlY3RBbGwoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgbGV0IGFydGljbGVzID0gc2VsZWN0QWxsKFwiYXJ0aWNsZVwiKVxuICAgICAgYXJ0aWNsZXMuZm9yRWFjaCgoYXJ0aWNsZSwgaSk9PiB7XG4gICAgICAgIGFydGljbGUucmVtb3ZlKClcbiAgICAgIH0pXG4gICAgICB0b2dnbGVMb2FkaW5nKCk7XG4gICAgICBkYXRhKGl0ZW0uaWQpXG4gICAgfSlcbiAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGF0YShidXR0b25JZCkge1xuICBsZXQgZGF0YSA9IGF3YWl0IGdldERhdGEoYnV0dG9uSWQpO1xuICByZW5kZXIoZGF0YSwgYnV0dG9uSWQpO1xufVxuIFxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShzZWFyY2hUZXJtKSB7XG4gIGxldCBkYXRhID0gYXdhaXQgZmV0Y2goYCR7YXBpLnVybH0ke3NlYXJjaFRlcm19YCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgLnRoZW4ocmVzID0+IHtcbiAgICAgIHJldHVybiBlcnJvckhhbmRsaW5nKHJlcylcbiAgICB9KVxuICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpKTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlcihkYXRhLCBidXR0b25JZCkge1xuICBjb25zb2xlLmxvZyhkYXRhKVxuICB0b2dnbGVMb2FkaW5nKCk7XG4gIGF3YWl0IGRhdGEuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgIGxldCBjb250YWluZXIgPSBzZWxlY3QoXCIuY29udGFpbmVyLWluZm9cIik7XG4gICAgbGV0IG1hcmt1cCA9IG1hdGNoSWQoaXRlbSwgYnV0dG9uSWQpO1xuICAgICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBtYXJrdXApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hJZChpdGVtLCBidXR0b25JZCkge1xuICBpZihidXR0b25JZCA9PSBcImxhdW5jaGVzXCIpe1xuICAgc2VsZWN0KFwiaDJcIikudGV4dENvbnRlbnQgPSBcImxhdW5jaGVzXCJcbiAgIGxldCBtYXJrdXAgPSBgXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8aDI+JHtpdGVtLm1pc3Npb25fbmFtZX08L2gyPlxuICAgICAgICAkeygoKSA9PiB7XG4gICAgICAgICAgaWYoaXRlbS5saW5rcy5taXNzaW9uX3BhdGNoX3NtYWxsID09IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuIFwiPGRpdiBjbGFzcz0nbm8taW1hZ2UnPjxwPk5vIGltYWdlIGF2YWlsYWJsZTwvcD5cIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PjxpbWcgc3JjPSR7aXRlbS5saW5rcy5taXNzaW9uX3BhdGNoX3NtYWxsfT5gO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkoKX08L2Rpdj5cbiAgICAgICAgPHA+RmxpZ2h0IG51bWJlcjogJHtpdGVtLm1pc3Npb25fbmFtZX08L3A+XG4gICAgICAgIDxwPkxhdW5jaCB5ZWFyOiAke2l0ZW0ubGF1bmNoX3llYXJ9PC9wPlxuICAgICAgICA8cD5Sb2NrZXQ6ICR7aXRlbS5yb2NrZXQucm9ja2V0X25hbWV9PC9wPiBcbiAgICAgICAgPC9hcnRpY2xlXG4gICAgICAgIGA7XG4gICAgICAgIHJldHVybiBtYXJrdXA7XG4gIH0gZWxzZSBpZiAoYnV0dG9uSWQgPT0gXCJzaGlwc1wiKSB7XG4gICAgc2VsZWN0KFwiaDJcIikudGV4dENvbnRlbnQgPSBcIlNoaXBzXCI7XG4gICBsZXQgbWFya3VwID0gYFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPGgyPiR7aXRlbS5zaGlwX25hbWV9PC9oMj5cbiAgICAgICAgICR7KCgpID0+IHtcbiAgICAgICBpZiAoaXRlbS5pbWFnZSA9PSBudWxsKSB7XG4gICAgICAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPSduby1pbWFnZSc+PHA+Tm8gaW1hZ2UgYXZhaWxhYmxlPC9wPlwiO1xuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gYDxkaXY+PGltZyBzcmM9JHtpdGVtLmltYWdlfT5gO1xuICAgICAgIH1cbiAgICAgfSkoKX08L2Rpdj5cbiAgICAgICAgPHA+TnVtYmVyIG9mIG1pc3Npb25zOiAke2l0ZW0ubWlzc2lvbnMubGVuZ3RofTwvcD5cbiAgICAgICAgPHA+QWN0aXZlOiAke2l0ZW0uYWN0aXZlfTwvcD5cbiAgICAgICAgPHA+Um9sZXM6ICR7aXRlbS5yb2xlc1swXX08L3A+IFxuICAgICAgICA8L2FydGljbGVcbiAgICAgICAgYDtcbiAgICByZXR1cm4gbWFya3VwO1xuICB9IGVsc2UgaWYgKGJ1dHRvbklkID09IFwiY2Fwc3VsZXNcIikge1xuICAgIHNlbGVjdChcImgyXCIpLnRleHRDb250ZW50ID0gXCJDYXBzdWxlc1wiO1xuICAgIGxldCBtYXJrdXAgPSBgXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8aDI+JHtpdGVtLmNhcHN1bGVfc2VyaWFsfTwvaDI+XG4gICAgICAgICA8ZGl2IGNsYXNzPSduby1pbWFnZSc+XG4gICAgICAgICA8cD5ObyBpbWFnZSBhdmFpbGFibGU8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cD5TdGF0dXM6ICR7aXRlbS5zdGF0dXN9PC9wPlxuICAgICAgICA8cD5NaXNzaW9uOiAke2l0ZW0ubWlzc2lvbnMubmFtZX08L3A+XG4gICAgICAgIDxwPkRldGFpbHM6ICR7aXRlbS5kZXRhaWxzfTwvcD4gXG4gICAgICAgIDwvYXJ0aWNsZVxuICAgICAgICBgO1xuICAgIHJldHVybiBtYXJrdXA7XG4gIH0gZWxzZSBpZiAoYnV0dG9uSWQgPT0gXCJtaXNzaW9uc1wiKSB7XG4gICAgc2VsZWN0KFwiaDJcIikudGV4dENvbnRlbnQgPSBcIk1pc3Npb25zXCI7XG4gICAgbGV0IG1hcmt1cCA9IGBcbiAgICAgICAgPGFydGljbGU+XG4gICAgICAgIDxoMj4ke2l0ZW0ubWlzc2lvbl9uYW1lfTwvaDI+XG4gICAgICAgICA8ZGl2IGNsYXNzPSduby1pbWFnZSc+XG4gICAgICAgICA8cD5ObyBpbWFnZSBhdmFpbGFibGU8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cD5XZWJzaXRlOiAke2l0ZW0ud2Vic2l0ZX08L3A+XG4gICAgICAgIDxwPlR3aXR0ZXI6ICR7aXRlbS50d2l0dGVyfTwvcD5cbiAgICAgICAgPHA+RGVzY3JpcHRpb246ICR7aXRlbS5kZXNjcmlwdGlvbn08L3A+IFxuICAgICAgICA8L2FydGljbGVcbiAgICAgICAgYDtcbiAgICByZXR1cm4gbWFya3VwO1xuICB9IGVsc2UgaWYgKGJ1dHRvbklkID09IFwicm9ja2V0c1wiKSB7XG4gICAgc2VsZWN0KFwiaDJcIikudGV4dENvbnRlbnQgPSBcIlJvY2tldHNcIjtcbiAgICBsZXQgbWFya3VwID0gYFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPGgyPiR7aXRlbS5yb2NrZXRfbmFtZX08L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aW1nIHNyYz1cIiR7aXRlbS5mbGlja3JfaW1hZ2VzWzFdfVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+QWN0aXZlOiAke2l0ZW0uYWN0aXZlfTwvcD5cbiAgICAgICAgPHA+Qm9vc3RlcnM6ICR7aXRlbS5ib29zdGVyc308L3A+XG4gICAgICAgIDxwPkVuZ2luZXM6ICR7aXRlbS5lbmdpbmVzLm51bWJlcn08L3A+XG4gICAgICAgIDxwPkZpcnN0IGZsaWdodDogJHtpdGVtLmZpcnN0X2ZsaWdodH08L3A+IFxuICAgICAgICA8L2FydGljbGVcbiAgICAgICAgYDtcbiAgICByZXR1cm4gbWFya3VwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVycm9ySGFuZGxpbmcocmVzKSB7XG4gIGlmKHJlcy5vaykge1xuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJub3Qgb2tcIilcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./docs/js/app.js\n");

/***/ }),

/***/ "./docs/js/modules/loading.js":
/*!************************************!*\
  !*** ./docs/js/modules/loading.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toggleLoading; });\nfunction toggleLoading() {\n    document\n        .querySelector(\".loading-container\")\n        .classList.toggle(\"loading\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2pzL21vZHVsZXMvbG9hZGluZy5qcz9mZTViIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vZG9jcy9qcy9tb2R1bGVzL2xvYWRpbmcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVMb2FkaW5nKCkge1xuICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmctY29udGFpbmVyXCIpXG4gICAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwibG9hZGluZ1wiKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./docs/js/modules/loading.js\n");

/***/ }),

/***/ "./docs/js/modules/selectors.js":
/*!**************************************!*\
  !*** ./docs/js/modules/selectors.js ***!
  \**************************************/
/*! exports provided: select, selectAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"select\", function() { return select; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectAll\", function() { return selectAll; });\nfunction select(select){\n    return document.querySelector(select);\n}\n\nfunction selectAll(select) {\n   return document.querySelectorAll(select);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2pzL21vZHVsZXMvc2VsZWN0b3JzLmpzPzRmZDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2RvY3MvanMvbW9kdWxlcy9zZWxlY3RvcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzZWxlY3Qoc2VsZWN0KXtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3QpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RBbGwoc2VsZWN0KSB7XG4gICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3QpO1xufVxuXG5leHBvcnQgIHtzZWxlY3QsIHNlbGVjdEFsbH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./docs/js/modules/selectors.js\n");

/***/ }),

/***/ "./docs/js/modules/template.js":
/*!*************************************!*\
  !*** ./docs/js/modules/template.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return template; });\nfunction template(template, data) {\n    let regex = /<%([^%>]+)?%>/g, \n    reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, \n    code = 'var r=[];\\\\n', \n    cursor = 0, match;\n\n    var add = function (line, js) {\n        js ? (code += line.match(reExp) ? line + '\\\\n' : 'r.push(' + line + ');\\\\n') :\n            (code += line != '' ? 'r.push(\"' + line.replace(/\"/g, '\\\\\\\\\"') + '\");\\\\n' : '');\n        return add;\n    }\n\n    while (match = regex.exec(template)) {\n        add(template.slice(cursor, match.index))(match[1], true);\n        cursor = match.index + match[0].length;\n    }\n    add(template.substr(cursor, template.length - cursor));\n    code += 'return r.join(\"\");';\n    return new Function(code.replace(/[\\\\r\\\\t\\\\n]/g, '')).apply(data);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2pzL21vZHVsZXMvdGVtcGxhdGUuanM/ZWRhMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBLG1EQUFtRCxFQUFFO0FBQ3JELHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLCtFQUErRTtBQUMvRSxpRkFBaUY7QUFDakY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0EiLCJmaWxlIjoiLi9kb2NzL2pzL21vZHVsZXMvdGVtcGxhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZW1wbGF0ZSh0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIGxldCByZWdleCA9IC88JShbXiU+XSspPyU+L2csIFxuICAgIHJlRXhwID0gLyheKCApPyhpZnxmb3J8ZWxzZXxzd2l0Y2h8Y2FzZXxicmVha3x7fH0pKSguKik/L2csIFxuICAgIGNvZGUgPSAndmFyIHI9W107XFxcXG4nLCBcbiAgICBjdXJzb3IgPSAwLCBtYXRjaDtcblxuICAgIHZhciBhZGQgPSBmdW5jdGlvbiAobGluZSwganMpIHtcbiAgICAgICAganMgPyAoY29kZSArPSBsaW5lLm1hdGNoKHJlRXhwKSA/IGxpbmUgKyAnXFxcXG4nIDogJ3IucHVzaCgnICsgbGluZSArICcpO1xcXFxuJykgOlxuICAgICAgICAgICAgKGNvZGUgKz0gbGluZSAhPSAnJyA/ICdyLnB1c2goXCInICsgbGluZS5yZXBsYWNlKC9cIi9nLCAnXFxcXFxcXFxcIicpICsgJ1wiKTtcXFxcbicgOiAnJyk7XG4gICAgICAgIHJldHVybiBhZGQ7XG4gICAgfVxuXG4gICAgd2hpbGUgKG1hdGNoID0gcmVnZXguZXhlYyh0ZW1wbGF0ZSkpIHtcbiAgICAgICAgYWRkKHRlbXBsYXRlLnNsaWNlKGN1cnNvciwgbWF0Y2guaW5kZXgpKShtYXRjaFsxXSwgdHJ1ZSk7XG4gICAgICAgIGN1cnNvciA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoO1xuICAgIH1cbiAgICBhZGQodGVtcGxhdGUuc3Vic3RyKGN1cnNvciwgdGVtcGxhdGUubGVuZ3RoIC0gY3Vyc29yKSk7XG4gICAgY29kZSArPSAncmV0dXJuIHIuam9pbihcIlwiKTsnO1xuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oY29kZS5yZXBsYWNlKC9bXFxcXHJcXFxcdFxcXFxuXS9nLCAnJykpLmFwcGx5KGRhdGEpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./docs/js/modules/template.js\n");

/***/ })

/******/ });