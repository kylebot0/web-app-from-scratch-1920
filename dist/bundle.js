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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loading */ \"./docs/js/modules/loading.js\");\n/* harmony import */ var _modules_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/selectors */ \"./docs/js/modules/selectors.js\");\n/* harmony import */ var _modules_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/template */ \"./docs/js/modules/template.js\");\n\n\n\n\nconst requestOptions = {\n  method: \"GET\",\n  redirect: \"follow\"\n};\nconst api = {\n  url: `https://api.spacexdata.com/v3/`\n};\n\nonClick()\n \nfunction onClick() {\n  // let templatel = \"template:\" + \"&&test&&\" + \" Test\";\n  // console.log(template(templatel, {\n  //   test: \"homemade\",\n  // }))\n  let button = Object(_modules_selectors__WEBPACK_IMPORTED_MODULE_1__[\"selectAll\"])(\"button\");\n  button.forEach((item, i) => {\n    item.addEventListener(\"click\", (e) => {\n      e.preventDefault()\n      let articles = Object(_modules_selectors__WEBPACK_IMPORTED_MODULE_1__[\"selectAll\"])(\"article\")\n      articles.forEach((article, i)=> {\n        article.remove()\n      })\n      Object(_modules_loading__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      data(item.id)\n    })\n  })\n}\n\nasync function data(buttonId) {\n  let data = await getData(buttonId);\n  render(data, buttonId);\n}\n \n\n\nasync function getData(searchTerm) {\n  let data = await fetch(`${api.url}${searchTerm}`, requestOptions)\n    .then(res => {\n      return errorHandling(res)\n    })\n    .then(result => {\n      return result;\n    })\n    .catch(error => console.log(\"error\", error));\n  return data;\n}\n\nasync function render(data, buttonId) {\n  console.log(data)\n  Object(_modules_loading__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  await data.forEach((item, i) => {\n    let container = Object(_modules_selectors__WEBPACK_IMPORTED_MODULE_1__[\"select\"])(\".container-info\");\n    let markup = matchId(item, buttonId);\n      container.insertAdjacentHTML(\"beforeend\", markup);\n  });\n}\n\nfunction matchId(item, buttonId) {\n  if(buttonId == \"launches\"){\n  document.querySelector(\".title\").textContent = \"launches\"\n   let markup = `\n        <article>\n        <h2>${item.mission_name}</h2>\n        ${(() => {\n          if(item.links.mission_patch_small == null){\n            return \"<div class='no-image'><p>No image available</p>\";\n          } else {\n            return `<div><img src=${item.links.mission_patch_small}>`;\n          }\n        })()}</div>\n        <p>Flight number: ${item.mission_name}</p>\n        <p>Launch year: ${item.launch_year}</p>\n        <p>Rocket: ${item.rocket.rocket_name}</p> \n        </article\n        `;\n        return markup;\n  } else if (buttonId == \"ships\") {\n    document.querySelector(\".title\").textContent = \"Ships\";\n   let markup = `\n        <article>\n        <h2>${item.ship_name}</h2>\n         ${(() => {\n       if (item.image == null) {\n         return \"<div class='no-image'><p>No image available</p>\";\n       } else {\n         return `<div><img src=${item.image}>`;\n       }\n     })()}</div>\n        <p>Number of missions: ${item.missions.length}</p>\n        <p>Active: ${item.active}</p>\n        <p>Roles: ${item.roles[0]}</p> \n        </article\n        `;\n    return markup;\n  } else if (buttonId == \"capsules\") {\n    document.querySelector(\".title\").textContent = \"Capsules\";\n    let markup = `\n        <article>\n        <h2>${item.capsule_serial}</h2>\n         <div class='no-image'>\n         <p>No image available</p>\n        </div>\n        <p>Status: ${item.status}</p>\n        <p>Mission: ${item.missions.name}</p>\n        <p>Details: ${item.details}</p> \n        </article\n        `;\n    return markup;\n  } else if (buttonId == \"missions\") {\n    document.querySelector(\".title\").textContent = \"Missions\";\n    let markup = `\n        <article>\n        <h2>${item.mission_name}</h2>\n         <div class='no-image'>\n         <p>No image available</p>\n        </div>\n        <p>Website: ${item.website}</p>\n        <p>Twitter: ${item.twitter}</p>\n        <p>Description: ${item.description}</p> \n        </article\n        `;\n    return markup;\n  } else if (buttonId == \"rockets\") {\n    document.querySelector(\".title\").textContent = \"Rockets\";\n    let markup = `\n        <article>\n        <h2>${item.rocket_name}</h2>\n        <div>\n        <img src=\"${item.flickr_images[1]}\">\n        </div>\n        <p>Active: ${item.active}</p>\n        <p>Boosters: ${item.boosters}</p>\n        <p>Engines: ${item.engines.number}</p>\n        <p>First flight: ${item.first_flight}</p> \n        </article\n        `;\n    return markup;\n  }\n}\n\nfunction errorHandling(res) {\n  if(res.ok) {\n    return res.json()\n  } else {\n    console.log(\"not ok\")\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2pzL2FwcC5qcz8zODQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZDO0FBQ1E7QUFDWjs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sZUFBZSxvRUFBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0VBQVM7QUFDOUI7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNLGdFQUFhO0FBQ25CO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0EsNEJBQTRCLFFBQVEsRUFBRSxXQUFXO0FBQ2pEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsZ0VBQWE7QUFDZjtBQUNBLG9CQUFvQixpRUFBTTtBQUMxQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGtCQUFrQjtBQUNoQyxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFdBQVc7QUFDWCxvQ0FBb0MsK0JBQStCO0FBQ25FO0FBQ0EsU0FBUyxJQUFJO0FBQ2IsNEJBQTRCLGtCQUFrQjtBQUM5QywwQkFBMEIsaUJBQWlCO0FBQzNDLHFCQUFxQix3QkFBd0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZUFBZTtBQUM3QixXQUFXO0FBQ1g7QUFDQTtBQUNBLFFBQVE7QUFDUixpQ0FBaUMsV0FBVztBQUM1QztBQUNBLE1BQU0sSUFBSTtBQUNWLGlDQUFpQyxxQkFBcUI7QUFDdEQscUJBQXFCLFlBQVk7QUFDakMsb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsb0JBQW9CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixZQUFZO0FBQ2pDLHNCQUFzQixtQkFBbUI7QUFDekMsc0JBQXNCLGFBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsa0JBQWtCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixhQUFhO0FBQ25DLHNCQUFzQixhQUFhO0FBQ25DLDBCQUEwQixpQkFBaUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsaUJBQWlCO0FBQy9CO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBLHFCQUFxQixZQUFZO0FBQ2pDLHVCQUF1QixjQUFjO0FBQ3JDLHNCQUFzQixvQkFBb0I7QUFDMUMsMkJBQTJCLGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9kb2NzL2pzL2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b2dnbGVMb2FkaW5nIGZyb20gXCIuL21vZHVsZXMvbG9hZGluZ1wiXG5pbXBvcnQge3NlbGVjdCwgc2VsZWN0QWxsfSBmcm9tIFwiLi9tb2R1bGVzL3NlbGVjdG9yc1wiXG5pbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vbW9kdWxlcy90ZW1wbGF0ZVwiXG5cbmNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICBtZXRob2Q6IFwiR0VUXCIsXG4gIHJlZGlyZWN0OiBcImZvbGxvd1wiXG59O1xuY29uc3QgYXBpID0ge1xuICB1cmw6IGBodHRwczovL2FwaS5zcGFjZXhkYXRhLmNvbS92My9gXG59O1xuXG5vbkNsaWNrKClcbiBcbmZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gIC8vIGxldCB0ZW1wbGF0ZWwgPSBcInRlbXBsYXRlOlwiICsgXCImJnRlc3QmJlwiICsgXCIgVGVzdFwiO1xuICAvLyBjb25zb2xlLmxvZyh0ZW1wbGF0ZSh0ZW1wbGF0ZWwsIHtcbiAgLy8gICB0ZXN0OiBcImhvbWVtYWRlXCIsXG4gIC8vIH0pKVxuICBsZXQgYnV0dG9uID0gc2VsZWN0QWxsKFwiYnV0dG9uXCIpO1xuICBidXR0b24uZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGxldCBhcnRpY2xlcyA9IHNlbGVjdEFsbChcImFydGljbGVcIilcbiAgICAgIGFydGljbGVzLmZvckVhY2goKGFydGljbGUsIGkpPT4ge1xuICAgICAgICBhcnRpY2xlLnJlbW92ZSgpXG4gICAgICB9KVxuICAgICAgdG9nZ2xlTG9hZGluZygpO1xuICAgICAgZGF0YShpdGVtLmlkKVxuICAgIH0pXG4gIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRhdGEoYnV0dG9uSWQpIHtcbiAgbGV0IGRhdGEgPSBhd2FpdCBnZXREYXRhKGJ1dHRvbklkKTtcbiAgcmVuZGVyKGRhdGEsIGJ1dHRvbklkKTtcbn1cbiBcblxuXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKHNlYXJjaFRlcm0pIHtcbiAgbGV0IGRhdGEgPSBhd2FpdCBmZXRjaChgJHthcGkudXJsfSR7c2VhcmNoVGVybX1gLCByZXF1ZXN0T3B0aW9ucylcbiAgICAudGhlbihyZXMgPT4ge1xuICAgICAgcmV0dXJuIGVycm9ySGFuZGxpbmcocmVzKVxuICAgIH0pXG4gICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcikpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyKGRhdGEsIGJ1dHRvbklkKSB7XG4gIGNvbnNvbGUubG9nKGRhdGEpXG4gIHRvZ2dsZUxvYWRpbmcoKTtcbiAgYXdhaXQgZGF0YS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lciA9IHNlbGVjdChcIi5jb250YWluZXItaW5mb1wiKTtcbiAgICBsZXQgbWFya3VwID0gbWF0Y2hJZChpdGVtLCBidXR0b25JZCk7XG4gICAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIG1hcmt1cCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtYXRjaElkKGl0ZW0sIGJ1dHRvbklkKSB7XG4gIGlmKGJ1dHRvbklkID09IFwibGF1bmNoZXNcIil7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIikudGV4dENvbnRlbnQgPSBcImxhdW5jaGVzXCJcbiAgIGxldCBtYXJrdXAgPSBgXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8aDI+JHtpdGVtLm1pc3Npb25fbmFtZX08L2gyPlxuICAgICAgICAkeygoKSA9PiB7XG4gICAgICAgICAgaWYoaXRlbS5saW5rcy5taXNzaW9uX3BhdGNoX3NtYWxsID09IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuIFwiPGRpdiBjbGFzcz0nbm8taW1hZ2UnPjxwPk5vIGltYWdlIGF2YWlsYWJsZTwvcD5cIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PjxpbWcgc3JjPSR7aXRlbS5saW5rcy5taXNzaW9uX3BhdGNoX3NtYWxsfT5gO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkoKX08L2Rpdj5cbiAgICAgICAgPHA+RmxpZ2h0IG51bWJlcjogJHtpdGVtLm1pc3Npb25fbmFtZX08L3A+XG4gICAgICAgIDxwPkxhdW5jaCB5ZWFyOiAke2l0ZW0ubGF1bmNoX3llYXJ9PC9wPlxuICAgICAgICA8cD5Sb2NrZXQ6ICR7aXRlbS5yb2NrZXQucm9ja2V0X25hbWV9PC9wPiBcbiAgICAgICAgPC9hcnRpY2xlXG4gICAgICAgIGA7XG4gICAgICAgIHJldHVybiBtYXJrdXA7XG4gIH0gZWxzZSBpZiAoYnV0dG9uSWQgPT0gXCJzaGlwc1wiKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKS50ZXh0Q29udGVudCA9IFwiU2hpcHNcIjtcbiAgIGxldCBtYXJrdXAgPSBgXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8aDI+JHtpdGVtLnNoaXBfbmFtZX08L2gyPlxuICAgICAgICAgJHsoKCkgPT4ge1xuICAgICAgIGlmIChpdGVtLmltYWdlID09IG51bGwpIHtcbiAgICAgICAgIHJldHVybiBcIjxkaXYgY2xhc3M9J25vLWltYWdlJz48cD5ObyBpbWFnZSBhdmFpbGFibGU8L3A+XCI7XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJldHVybiBgPGRpdj48aW1nIHNyYz0ke2l0ZW0uaW1hZ2V9PmA7XG4gICAgICAgfVxuICAgICB9KSgpfTwvZGl2PlxuICAgICAgICA8cD5OdW1iZXIgb2YgbWlzc2lvbnM6ICR7aXRlbS5taXNzaW9ucy5sZW5ndGh9PC9wPlxuICAgICAgICA8cD5BY3RpdmU6ICR7aXRlbS5hY3RpdmV9PC9wPlxuICAgICAgICA8cD5Sb2xlczogJHtpdGVtLnJvbGVzWzBdfTwvcD4gXG4gICAgICAgIDwvYXJ0aWNsZVxuICAgICAgICBgO1xuICAgIHJldHVybiBtYXJrdXA7XG4gIH0gZWxzZSBpZiAoYnV0dG9uSWQgPT0gXCJjYXBzdWxlc1wiKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKS50ZXh0Q29udGVudCA9IFwiQ2Fwc3VsZXNcIjtcbiAgICBsZXQgbWFya3VwID0gYFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPGgyPiR7aXRlbS5jYXBzdWxlX3NlcmlhbH08L2gyPlxuICAgICAgICAgPGRpdiBjbGFzcz0nbm8taW1hZ2UnPlxuICAgICAgICAgPHA+Tm8gaW1hZ2UgYXZhaWxhYmxlPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+U3RhdHVzOiAke2l0ZW0uc3RhdHVzfTwvcD5cbiAgICAgICAgPHA+TWlzc2lvbjogJHtpdGVtLm1pc3Npb25zLm5hbWV9PC9wPlxuICAgICAgICA8cD5EZXRhaWxzOiAke2l0ZW0uZGV0YWlsc308L3A+IFxuICAgICAgICA8L2FydGljbGVcbiAgICAgICAgYDtcbiAgICByZXR1cm4gbWFya3VwO1xuICB9IGVsc2UgaWYgKGJ1dHRvbklkID09IFwibWlzc2lvbnNcIikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIikudGV4dENvbnRlbnQgPSBcIk1pc3Npb25zXCI7XG4gICAgbGV0IG1hcmt1cCA9IGBcbiAgICAgICAgPGFydGljbGU+XG4gICAgICAgIDxoMj4ke2l0ZW0ubWlzc2lvbl9uYW1lfTwvaDI+XG4gICAgICAgICA8ZGl2IGNsYXNzPSduby1pbWFnZSc+XG4gICAgICAgICA8cD5ObyBpbWFnZSBhdmFpbGFibGU8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cD5XZWJzaXRlOiAke2l0ZW0ud2Vic2l0ZX08L3A+XG4gICAgICAgIDxwPlR3aXR0ZXI6ICR7aXRlbS50d2l0dGVyfTwvcD5cbiAgICAgICAgPHA+RGVzY3JpcHRpb246ICR7aXRlbS5kZXNjcmlwdGlvbn08L3A+IFxuICAgICAgICA8L2FydGljbGVcbiAgICAgICAgYDtcbiAgICByZXR1cm4gbWFya3VwO1xuICB9IGVsc2UgaWYgKGJ1dHRvbklkID09IFwicm9ja2V0c1wiKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKS50ZXh0Q29udGVudCA9IFwiUm9ja2V0c1wiO1xuICAgIGxldCBtYXJrdXAgPSBgXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8aDI+JHtpdGVtLnJvY2tldF9uYW1lfTwvaDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxpbWcgc3JjPVwiJHtpdGVtLmZsaWNrcl9pbWFnZXNbMV19XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cD5BY3RpdmU6ICR7aXRlbS5hY3RpdmV9PC9wPlxuICAgICAgICA8cD5Cb29zdGVyczogJHtpdGVtLmJvb3N0ZXJzfTwvcD5cbiAgICAgICAgPHA+RW5naW5lczogJHtpdGVtLmVuZ2luZXMubnVtYmVyfTwvcD5cbiAgICAgICAgPHA+Rmlyc3QgZmxpZ2h0OiAke2l0ZW0uZmlyc3RfZmxpZ2h0fTwvcD4gXG4gICAgICAgIDwvYXJ0aWNsZVxuICAgICAgICBgO1xuICAgIHJldHVybiBtYXJrdXA7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXJyb3JIYW5kbGluZyhyZXMpIHtcbiAgaWYocmVzLm9rKSB7XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcIm5vdCBva1wiKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./docs/js/app.js\n");

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