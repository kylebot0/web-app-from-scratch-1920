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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loading */ \"./docs/js/modules/loading.js\");\n/* harmony import */ var _modules_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/selectors */ \"./docs/js/modules/selectors.js\");\n/* harmony import */ var _modules_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/template */ \"./docs/js/modules/template.js\");\n/* harmony import */ var _modules_eventlisteners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/eventlisteners */ \"./docs/js/modules/eventlisteners.js\");\n/* harmony import */ var _modules_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/router */ \"./docs/js/modules/router.js\");\n/* harmony import */ var _modules_matchId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/matchId */ \"./docs/js/modules/matchId.js\");\n\n\n\n\n\n\n\nconst requestOptions = {\n  method: \"GET\",\n  redirect: \"follow\"\n};\nconst api = {\n  url: `https://api.spacexdata.com/v3/`\n};\nconst router = new _modules_router__WEBPACK_IMPORTED_MODULE_4__[\"Router\"]();\n\nonLoad();\nfunction onLoad() {\n  let buttons = Object(_modules_selectors__WEBPACK_IMPORTED_MODULE_1__[\"selectAll\"])(\"main > section a\");\n  addRoutes(buttons);\n  buttons.forEach((item, i) => {\n    Object(_modules_eventlisteners__WEBPACK_IMPORTED_MODULE_3__[\"addEvent\"])(item, \"click\", e => {\n      // Bug met appenden\n      setTimeout(()=>{\n        initRouting()\n      }, 1)\n    });\n  });\n}\n\nfunction addRoutes(buttons) {\n  // Add routes\n  for(let i = 0; i < buttons.length;i++){\n    router.get(`${buttons[i].id}`, function (e) {\n      let articles = Object(_modules_selectors__WEBPACK_IMPORTED_MODULE_1__[\"selectAll\"])(\"article\")\n      articles.forEach((article) => {\n        article.remove()\n      })\n      Object(_modules_loading__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n      data(buttons[i].id)\n    });\n  }\n  \n\n  // execute routes\n  initRouting()\n}\n\nfunction initRouting() {\n  router.init();\n}\n\nasync function data(buttonId) {\n  let data = await getData(buttonId);\n  render(data, buttonId);\n}\n\nasync function getData(searchTerm) {\n  let data = await fetch(`${api.url}${searchTerm}`, requestOptions)\n    .then(res => {\n      return errorHandling(res);\n    })\n    .then(result => {\n      return result;\n    })\n    .catch(error => console.log(\"error\", error));\n  return data;\n}\n\nasync function render(data, buttonId) {\n  Object(_modules_loading__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  await data.forEach((item, i) => {\n    let container = Object(_modules_selectors__WEBPACK_IMPORTED_MODULE_1__[\"select\"])(\".container-info\");\n    let markup = Object(_modules_matchId__WEBPACK_IMPORTED_MODULE_5__[\"matchId\"])(item, buttonId);\n    container.insertAdjacentHTML(\"beforeend\", markup);\n  });\n}\n\n\n\nfunction errorHandling(res) {\n  if (res.ok) {\n    return res.json();\n  } else {\n    console.log(\"not ok\");\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2pzL2FwcC5qcz8zODQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThDO0FBQ1U7QUFDZDtBQUNVO0FBQ1Y7QUFDRTs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0RBQU07O0FBRXpCO0FBQ0E7QUFDQSxnQkFBZ0Isb0VBQVM7QUFDekI7QUFDQTtBQUNBLElBQUksd0VBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLG9CQUFvQjtBQUNwQyxrQkFBa0IsY0FBYztBQUNoQyxxQkFBcUIsb0VBQVM7QUFDOUI7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNLGdFQUFhO0FBQ25CO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVEsRUFBRSxXQUFXO0FBQ2pEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLGdFQUFhO0FBQ2Y7QUFDQSxvQkFBb0IsaUVBQU07QUFDMUIsaUJBQWlCLGdFQUFPO0FBQ3hCO0FBQ0EsR0FBRztBQUNIOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2RvY3MvanMvYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvZ2dsZUxvYWRpbmcgZnJvbSBcIi4vbW9kdWxlcy9sb2FkaW5nXCI7XG5pbXBvcnQgeyBzZWxlY3QsIHNlbGVjdEFsbCB9IGZyb20gXCIuL21vZHVsZXMvc2VsZWN0b3JzXCI7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vbW9kdWxlcy90ZW1wbGF0ZVwiO1xuaW1wb3J0IHsgYWRkRXZlbnQgfSBmcm9tIFwiLi9tb2R1bGVzL2V2ZW50bGlzdGVuZXJzXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi9tb2R1bGVzL3JvdXRlclwiO1xuaW1wb3J0IHsgbWF0Y2hJZCB9IGZyb20gXCIuL21vZHVsZXMvbWF0Y2hJZFwiO1xuXG5jb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgbWV0aG9kOiBcIkdFVFwiLFxuICByZWRpcmVjdDogXCJmb2xsb3dcIlxufTtcbmNvbnN0IGFwaSA9IHtcbiAgdXJsOiBgaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjMvYFxufTtcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcblxub25Mb2FkKCk7XG5mdW5jdGlvbiBvbkxvYWQoKSB7XG4gIGxldCBidXR0b25zID0gc2VsZWN0QWxsKFwibWFpbiA+IHNlY3Rpb24gYVwiKTtcbiAgYWRkUm91dGVzKGJ1dHRvbnMpO1xuICBidXR0b25zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICBhZGRFdmVudChpdGVtLCBcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgLy8gQnVnIG1ldCBhcHBlbmRlblxuICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICBpbml0Um91dGluZygpXG4gICAgICB9LCAxKVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUm91dGVzKGJ1dHRvbnMpIHtcbiAgLy8gQWRkIHJvdXRlc1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7aSsrKXtcbiAgICByb3V0ZXIuZ2V0KGAke2J1dHRvbnNbaV0uaWR9YCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGxldCBhcnRpY2xlcyA9IHNlbGVjdEFsbChcImFydGljbGVcIilcbiAgICAgIGFydGljbGVzLmZvckVhY2goKGFydGljbGUpID0+IHtcbiAgICAgICAgYXJ0aWNsZS5yZW1vdmUoKVxuICAgICAgfSlcbiAgICAgIHRvZ2dsZUxvYWRpbmcoKVxuICAgICAgZGF0YShidXR0b25zW2ldLmlkKVxuICAgIH0pO1xuICB9XG4gIFxuXG4gIC8vIGV4ZWN1dGUgcm91dGVzXG4gIGluaXRSb3V0aW5nKClcbn1cblxuZnVuY3Rpb24gaW5pdFJvdXRpbmcoKSB7XG4gIHJvdXRlci5pbml0KCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRhdGEoYnV0dG9uSWQpIHtcbiAgbGV0IGRhdGEgPSBhd2FpdCBnZXREYXRhKGJ1dHRvbklkKTtcbiAgcmVuZGVyKGRhdGEsIGJ1dHRvbklkKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShzZWFyY2hUZXJtKSB7XG4gIGxldCBkYXRhID0gYXdhaXQgZmV0Y2goYCR7YXBpLnVybH0ke3NlYXJjaFRlcm19YCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgLnRoZW4ocmVzID0+IHtcbiAgICAgIHJldHVybiBlcnJvckhhbmRsaW5nKHJlcyk7XG4gICAgfSlcbiAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXIoZGF0YSwgYnV0dG9uSWQpIHtcbiAgdG9nZ2xlTG9hZGluZygpO1xuICBhd2FpdCBkYXRhLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICBsZXQgY29udGFpbmVyID0gc2VsZWN0KFwiLmNvbnRhaW5lci1pbmZvXCIpO1xuICAgIGxldCBtYXJrdXAgPSBtYXRjaElkKGl0ZW0sIGJ1dHRvbklkKTtcbiAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIG1hcmt1cCk7XG4gIH0pO1xufVxuXG5cblxuZnVuY3Rpb24gZXJyb3JIYW5kbGluZyhyZXMpIHtcbiAgaWYgKHJlcy5vaykge1xuICAgIHJldHVybiByZXMuanNvbigpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwibm90IG9rXCIpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./docs/js/app.js\n");

/***/ }),

/***/ "./docs/js/modules/eventlisteners.js":
/*!*******************************************!*\
  !*** ./docs/js/modules/eventlisteners.js ***!
  \*******************************************/
/*! exports provided: addEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEvent\", function() { return addEvent; });\nfunction addEvent(el, event, cb) {\n    return el.addEventListener(event, cb)\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2pzL21vZHVsZXMvZXZlbnRsaXN0ZW5lcnMuanM/Yzg3YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vZG9jcy9qcy9tb2R1bGVzL2V2ZW50bGlzdGVuZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYWRkRXZlbnQoZWwsIGV2ZW50LCBjYikge1xuICAgIHJldHVybiBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYilcbn1cblxuZXhwb3J0IHsgYWRkRXZlbnQgfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./docs/js/modules/eventlisteners.js\n");

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

/***/ "./docs/js/modules/matchId.js":
/*!************************************!*\
  !*** ./docs/js/modules/matchId.js ***!
  \************************************/
/*! exports provided: matchId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchId\", function() { return matchId; });\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ \"./docs/js/modules/selectors.js\");\n\n\nfunction matchId(item, buttonId) {\n    if (buttonId == \"launches\") {\n        Object(_selectors__WEBPACK_IMPORTED_MODULE_0__[\"select\"])(\"h2\").textContent = \"launches\";\n        let markup = `\n        <article>\n        <h2>${item.mission_name}</h2>\n        ${(() => {\n                if (item.links.mission_patch_small == null) {\n                    return \"<div class='no-image'><p>No image available</p>\";\n                } else {\n                    return `<div><img src=${item.links.mission_patch_small}>`;\n                }\n            })()}</div>\n        <p>Flight number: ${item.mission_name}</p>\n        <p>Launch year: ${item.launch_year}</p>\n        <p>Rocket: ${item.rocket.rocket_name}</p> \n        </article\n        `;\n        return markup;\n    } else if (buttonId == \"ships\") {\n        Object(_selectors__WEBPACK_IMPORTED_MODULE_0__[\"select\"])(\"h2\").textContent = \"Ships\";\n        let markup = `\n        <article>\n        <h2>${item.ship_name}</h2>\n         ${(() => {\n                if (item.image == null) {\n                    return \"<div class='no-image'><p>No image available</p>\";\n                } else {\n                    return `<div><img src=${item.image}>`;\n                }\n            })()}</div>\n        <p>Number of missions: ${item.missions.length}</p>\n        <p>Active: ${item.active}</p>\n        <p>Roles: ${item.roles[0]}</p> \n        </article\n        `;\n        return markup;\n    } else if (buttonId == \"capsules\") {\n        Object(_selectors__WEBPACK_IMPORTED_MODULE_0__[\"select\"])(\"h2\").textContent = \"Capsules\";\n        let markup = `\n        <article>\n        <h2>${item.capsule_serial}</h2>\n         <div class='no-image'>\n         <p>No image available</p>\n        </div>\n        <p>Status: ${item.status}</p>\n        <p>Mission: ${item.missions.name}</p>\n        <p>Details: ${item.details}</p> \n        </article\n        `\n        ;\n        return markup;\n    } else if (buttonId == \"missions\") {\n        Object(_selectors__WEBPACK_IMPORTED_MODULE_0__[\"select\"])(\"h2\").textContent = \"Missions\";\n        let markup = `\n        <article>\n        <h2>${item.mission_name}</h2>\n         <div class='no-image'>\n         <p>No image available</p>\n        </div>\n        <p>Website: ${item.website}</p>\n        <p>Twitter: ${item.twitter}</p>\n        <p>Description: ${item.description}</p> \n        </article\n        `;\n        return markup;\n    } else if (buttonId == \"rockets\") {\n        Object(_selectors__WEBPACK_IMPORTED_MODULE_0__[\"select\"])(\"h2\").textContent = \"Rockets\";\n        let markup = `\n        <article>\n        <h2>${item.rocket_name}</h2>\n        <div>\n        <img src=\"${item.flickr_images[1]}\">\n        </div>\n        <p>Active: ${item.active}</p>\n        <p>Boosters: ${item.boosters}</p>\n        <p>Engines: ${item.engines.number}</p>\n        <p>First flight: ${item.first_flight}</p> \n        </article\n        `;\n        return markup;\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2pzL21vZHVsZXMvbWF0Y2hJZC5qcz85ZTRmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFnRDs7QUFFaEQ7QUFDQTtBQUNBLFFBQVEseURBQU07QUFDZDtBQUNBO0FBQ0EsY0FBYyxrQkFBa0I7QUFDaEMsVUFBVTtBQUNWO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsNENBQTRDLCtCQUErQjtBQUMzRTtBQUNBLGFBQWEsSUFBSTtBQUNqQiw0QkFBNEIsa0JBQWtCO0FBQzlDLDBCQUEwQixpQkFBaUI7QUFDM0MscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsUUFBUSx5REFBTTtBQUNkO0FBQ0E7QUFDQSxjQUFjLGVBQWU7QUFDN0IsV0FBVztBQUNYO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQSxhQUFhLElBQUk7QUFDakIsaUNBQWlDLHFCQUFxQjtBQUN0RCxxQkFBcUIsWUFBWTtBQUNqQyxvQkFBb0IsY0FBYztBQUNsQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsUUFBUSx5REFBTTtBQUNkO0FBQ0E7QUFDQSxjQUFjLG9CQUFvQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWTtBQUNqQyxzQkFBc0IsbUJBQW1CO0FBQ3pDLHNCQUFzQixhQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFFBQVEseURBQU07QUFDZDtBQUNBO0FBQ0EsY0FBYyxrQkFBa0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGFBQWE7QUFDbkMsc0JBQXNCLGFBQWE7QUFDbkMsMEJBQTBCLGlCQUFpQjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsUUFBUSx5REFBTTtBQUNkO0FBQ0E7QUFDQSxjQUFjLGlCQUFpQjtBQUMvQjtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQSxxQkFBcUIsWUFBWTtBQUNqQyx1QkFBdUIsY0FBYztBQUNyQyxzQkFBc0Isb0JBQW9CO0FBQzFDLDJCQUEyQixrQkFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2RvY3MvanMvbW9kdWxlcy9tYXRjaElkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VsZWN0LCBzZWxlY3RBbGwgfSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcblxuZnVuY3Rpb24gbWF0Y2hJZChpdGVtLCBidXR0b25JZCkge1xuICAgIGlmIChidXR0b25JZCA9PSBcImxhdW5jaGVzXCIpIHtcbiAgICAgICAgc2VsZWN0KFwiaDJcIikudGV4dENvbnRlbnQgPSBcImxhdW5jaGVzXCI7XG4gICAgICAgIGxldCBtYXJrdXAgPSBgXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8aDI+JHtpdGVtLm1pc3Npb25fbmFtZX08L2gyPlxuICAgICAgICAkeygoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubGlua3MubWlzc2lvbl9wYXRjaF9zbWFsbCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjxkaXYgY2xhc3M9J25vLWltYWdlJz48cD5ObyBpbWFnZSBhdmFpbGFibGU8L3A+XCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PjxpbWcgc3JjPSR7aXRlbS5saW5rcy5taXNzaW9uX3BhdGNoX3NtYWxsfT5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKCl9PC9kaXY+XG4gICAgICAgIDxwPkZsaWdodCBudW1iZXI6ICR7aXRlbS5taXNzaW9uX25hbWV9PC9wPlxuICAgICAgICA8cD5MYXVuY2ggeWVhcjogJHtpdGVtLmxhdW5jaF95ZWFyfTwvcD5cbiAgICAgICAgPHA+Um9ja2V0OiAke2l0ZW0ucm9ja2V0LnJvY2tldF9uYW1lfTwvcD4gXG4gICAgICAgIDwvYXJ0aWNsZVxuICAgICAgICBgO1xuICAgICAgICByZXR1cm4gbWFya3VwO1xuICAgIH0gZWxzZSBpZiAoYnV0dG9uSWQgPT0gXCJzaGlwc1wiKSB7XG4gICAgICAgIHNlbGVjdChcImgyXCIpLnRleHRDb250ZW50ID0gXCJTaGlwc1wiO1xuICAgICAgICBsZXQgbWFya3VwID0gYFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPGgyPiR7aXRlbS5zaGlwX25hbWV9PC9oMj5cbiAgICAgICAgICR7KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pbWFnZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjxkaXYgY2xhc3M9J25vLWltYWdlJz48cD5ObyBpbWFnZSBhdmFpbGFibGU8L3A+XCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PjxpbWcgc3JjPSR7aXRlbS5pbWFnZX0+YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSgpfTwvZGl2PlxuICAgICAgICA8cD5OdW1iZXIgb2YgbWlzc2lvbnM6ICR7aXRlbS5taXNzaW9ucy5sZW5ndGh9PC9wPlxuICAgICAgICA8cD5BY3RpdmU6ICR7aXRlbS5hY3RpdmV9PC9wPlxuICAgICAgICA8cD5Sb2xlczogJHtpdGVtLnJvbGVzWzBdfTwvcD4gXG4gICAgICAgIDwvYXJ0aWNsZVxuICAgICAgICBgO1xuICAgICAgICByZXR1cm4gbWFya3VwO1xuICAgIH0gZWxzZSBpZiAoYnV0dG9uSWQgPT0gXCJjYXBzdWxlc1wiKSB7XG4gICAgICAgIHNlbGVjdChcImgyXCIpLnRleHRDb250ZW50ID0gXCJDYXBzdWxlc1wiO1xuICAgICAgICBsZXQgbWFya3VwID0gYFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPGgyPiR7aXRlbS5jYXBzdWxlX3NlcmlhbH08L2gyPlxuICAgICAgICAgPGRpdiBjbGFzcz0nbm8taW1hZ2UnPlxuICAgICAgICAgPHA+Tm8gaW1hZ2UgYXZhaWxhYmxlPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+U3RhdHVzOiAke2l0ZW0uc3RhdHVzfTwvcD5cbiAgICAgICAgPHA+TWlzc2lvbjogJHtpdGVtLm1pc3Npb25zLm5hbWV9PC9wPlxuICAgICAgICA8cD5EZXRhaWxzOiAke2l0ZW0uZGV0YWlsc308L3A+IFxuICAgICAgICA8L2FydGljbGVcbiAgICAgICAgYFxuICAgICAgICA7XG4gICAgICAgIHJldHVybiBtYXJrdXA7XG4gICAgfSBlbHNlIGlmIChidXR0b25JZCA9PSBcIm1pc3Npb25zXCIpIHtcbiAgICAgICAgc2VsZWN0KFwiaDJcIikudGV4dENvbnRlbnQgPSBcIk1pc3Npb25zXCI7XG4gICAgICAgIGxldCBtYXJrdXAgPSBgXG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8aDI+JHtpdGVtLm1pc3Npb25fbmFtZX08L2gyPlxuICAgICAgICAgPGRpdiBjbGFzcz0nbm8taW1hZ2UnPlxuICAgICAgICAgPHA+Tm8gaW1hZ2UgYXZhaWxhYmxlPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+V2Vic2l0ZTogJHtpdGVtLndlYnNpdGV9PC9wPlxuICAgICAgICA8cD5Ud2l0dGVyOiAke2l0ZW0udHdpdHRlcn08L3A+XG4gICAgICAgIDxwPkRlc2NyaXB0aW9uOiAke2l0ZW0uZGVzY3JpcHRpb259PC9wPiBcbiAgICAgICAgPC9hcnRpY2xlXG4gICAgICAgIGA7XG4gICAgICAgIHJldHVybiBtYXJrdXA7XG4gICAgfSBlbHNlIGlmIChidXR0b25JZCA9PSBcInJvY2tldHNcIikge1xuICAgICAgICBzZWxlY3QoXCJoMlwiKS50ZXh0Q29udGVudCA9IFwiUm9ja2V0c1wiO1xuICAgICAgICBsZXQgbWFya3VwID0gYFxuICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPGgyPiR7aXRlbS5yb2NrZXRfbmFtZX08L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aW1nIHNyYz1cIiR7aXRlbS5mbGlja3JfaW1hZ2VzWzFdfVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+QWN0aXZlOiAke2l0ZW0uYWN0aXZlfTwvcD5cbiAgICAgICAgPHA+Qm9vc3RlcnM6ICR7aXRlbS5ib29zdGVyc308L3A+XG4gICAgICAgIDxwPkVuZ2luZXM6ICR7aXRlbS5lbmdpbmVzLm51bWJlcn08L3A+XG4gICAgICAgIDxwPkZpcnN0IGZsaWdodDogJHtpdGVtLmZpcnN0X2ZsaWdodH08L3A+IFxuICAgICAgICA8L2FydGljbGVcbiAgICAgICAgYDtcbiAgICAgICAgcmV0dXJuIG1hcmt1cDtcbiAgICB9XG59XG5cbmV4cG9ydCB7bWF0Y2hJZH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./docs/js/modules/matchId.js\n");

/***/ }),

/***/ "./docs/js/modules/router.js":
/*!***********************************!*\
  !*** ./docs/js/modules/router.js ***!
  \***********************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Router\", function() { return Router; });\nclass Router {\n  constructor() {\n    this.routes = [];\n    this.options = [];\n  }\n\n  get(uri, cb) {\n    if (!uri || !cb) {\n        throw new Error(\"uri or callback must be given\")\n    } else if (typeof uri !== \"string\"){\n      throw new TypeError(\"typeof uri must be a string\")\n    } else if (typeof cb !== \"function\"){\n      throw new TypeError(\"typeof callback must be a function\")\n    };\n    this.routes.forEach(route => {\n      if (route.uri === uri)\n        throw new Error(`the uri ${route.uri} already exists`);\n    });\n    const route = {\n      uri,\n      cb\n    };\n    console.log(route);\n    this.routes.push(route);\n  }\n\n  init() {\n    this.routes.some(route => {\n      let path = window.location.href;\n      let cleanPath = path.split(\"#\")[0];\n      let routePath = cleanPath + \"#\" + route.uri;\n     console.log(path)\n      if (path == routePath) {\n        console.log(\"test\");\n        let req = { path };\n        return route.cb.call(this, req);\n      }\n    });\n  }\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kb2NzL2pzL21vZHVsZXMvcm91dGVyLmpzP2Y5NjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFVBQVU7QUFDN0MsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVrQiIsImZpbGUiOiIuL2RvY3MvanMvbW9kdWxlcy9yb3V0ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBSb3V0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJvdXRlcyA9IFtdO1xuICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICB9XG5cbiAgZ2V0KHVyaSwgY2IpIHtcbiAgICBpZiAoIXVyaSB8fCAhY2IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXJpIG9yIGNhbGxiYWNrIG11c3QgYmUgZ2l2ZW5cIilcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB1cmkgIT09IFwic3RyaW5nXCIpe1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcInR5cGVvZiB1cmkgbXVzdCBiZSBhIHN0cmluZ1wiKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNiICE9PSBcImZ1bmN0aW9uXCIpe1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcInR5cGVvZiBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIilcbiAgICB9O1xuICAgIHRoaXMucm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICAgICAgaWYgKHJvdXRlLnVyaSA9PT0gdXJpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHRoZSB1cmkgJHtyb3V0ZS51cml9IGFscmVhZHkgZXhpc3RzYCk7XG4gICAgfSk7XG4gICAgY29uc3Qgcm91dGUgPSB7XG4gICAgICB1cmksXG4gICAgICBjYlxuICAgIH07XG4gICAgY29uc29sZS5sb2cocm91dGUpO1xuICAgIHRoaXMucm91dGVzLnB1c2gocm91dGUpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlcy5zb21lKHJvdXRlID0+IHtcbiAgICAgIGxldCBwYXRoID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICBsZXQgY2xlYW5QYXRoID0gcGF0aC5zcGxpdChcIiNcIilbMF07XG4gICAgICBsZXQgcm91dGVQYXRoID0gY2xlYW5QYXRoICsgXCIjXCIgKyByb3V0ZS51cmk7XG4gICAgIGNvbnNvbGUubG9nKHBhdGgpXG4gICAgICBpZiAocGF0aCA9PSByb3V0ZVBhdGgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xuICAgICAgICBsZXQgcmVxID0geyBwYXRoIH07XG4gICAgICAgIHJldHVybiByb3V0ZS5jYi5jYWxsKHRoaXMsIHJlcSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgUm91dGVyIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./docs/js/modules/router.js\n");

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