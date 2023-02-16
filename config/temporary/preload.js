/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***********************************!*\
  !*** ./src/main/preload/index.ts ***!
  \***********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const electron_1 = __webpack_require__(/*! electron */ "electron");
electron_1.contextBridge.exposeInMainWorld('__CTP_IPC__', {
    invoke: (channel, data) => {
        return electron_1.ipcRenderer.invoke(channel, data);
    },
    ipcOn: (channel, func) => {
        const subscription = (event, ...args) => func(event, ...args);
        electron_1.ipcRenderer?.on(channel, subscription);
        return () => electron_1.ipcRenderer.removeListener(channel, subscription);
    },
    ipcSendTo: (webContentsId, channel, ...arg) => {
        electron_1.ipcRenderer.sendTo(webContentsId, channel, arg);
    },
    ipcSend: (channel, ...arg) => {
        electron_1.ipcRenderer.send(channel, arg);
    },
    ipcPostSend: (channel, message, transfer) => {
        electron_1.ipcRenderer.postMessage(channel, message, transfer);
    },
    ipcSendSync: (channel, ...arg) => {
        return electron_1.ipcRenderer.sendSync(channel, arg);
    },
    ipcOnce: (channel, listener) => {
        electron_1.ipcRenderer.once(channel, listener);
    },
    ipcRemoveListener: (channel, listener) => {
        electron_1.ipcRenderer.removeListener(channel, listener);
    },
    ipcRemoveAllListeners: (channel) => {
        electron_1.ipcRenderer.removeAllListeners(channel);
    },
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQSxtRUFBd0U7QUFFeEUsd0JBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUU7SUFDN0MsTUFBTSxFQUFFLENBQUMsT0FBZSxFQUFFLElBQVcsRUFBRSxFQUFFO1FBQ3ZDLE9BQU8sc0JBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxLQUFLLEVBQUUsQ0FBQyxPQUFlLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDL0IsTUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUF1QixFQUFFLEdBQUcsSUFBZSxFQUFFLEVBQUUsQ0FDbkUsSUFBSSxDQUFDLEtBQUssRUFBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3RCLHNCQUFXLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN2QyxPQUFPLEdBQUcsRUFBRSxDQUFDLHNCQUFXLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0QsU0FBUyxFQUFFLENBQUMsYUFBcUIsRUFBRSxPQUFlLEVBQUUsR0FBRyxHQUFjLEVBQUUsRUFBRTtRQUN2RSxzQkFBVyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxPQUFPLEVBQUUsQ0FBQyxPQUFlLEVBQUUsR0FBRyxHQUFjLEVBQUUsRUFBRTtRQUM5QyxzQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNELFdBQVcsRUFBRSxDQUFDLE9BQWUsRUFBRSxPQUFpQixFQUFFLFFBQXdCLEVBQUUsRUFBRTtRQUM1RSxzQkFBVyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxXQUFXLEVBQUUsQ0FBQyxPQUFlLEVBQUUsR0FBRyxHQUFjLEVBQUUsRUFBRTtRQUNsRCxPQUFPLHNCQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsT0FBTyxFQUFFLENBQUMsT0FBZSxFQUFFLFFBQThELEVBQUUsRUFBRTtRQUMzRixzQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELGlCQUFpQixFQUFFLENBQ2pCLE9BQWUsRUFDZixRQUE4RCxFQUM5RCxFQUFFO1FBQ0Ysc0JBQVcsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxxQkFBcUIsRUFBRSxDQUFDLE9BQWUsRUFBRSxFQUFFO1FBQ3pDLHNCQUFXLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhdGFseXN0cGx1cy1kZXNrdG9wLXRlc3QvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vY2F0YWx5c3RwbHVzLWRlc2t0b3AtdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYXRhbHlzdHBsdXMtZGVza3RvcC10ZXN0Ly4vc3JjL21haW4vcHJlbG9hZC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgY29udGV4dEJyaWRnZSwgaXBjUmVuZGVyZXIsIElwY1JlbmRlcmVyRXZlbnQgfSBmcm9tICdlbGVjdHJvbic7XHJcblxyXG5jb250ZXh0QnJpZGdlLmV4cG9zZUluTWFpbldvcmxkKCdfX0NUUF9JUENfXycsIHtcclxuICBpbnZva2U6IChjaGFubmVsOiBzdHJpbmcsIGRhdGE6IGFueVtdKSA9PiB7XHJcbiAgICByZXR1cm4gaXBjUmVuZGVyZXIuaW52b2tlKGNoYW5uZWwsIGRhdGEpO1xyXG4gIH0sXHJcbiAgaXBjT246IChjaGFubmVsOiBzdHJpbmcsIGZ1bmMpID0+IHtcclxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IChldmVudDogSXBjUmVuZGVyZXJFdmVudCwgLi4uYXJnczogdW5rbm93bltdKSA9PlxyXG4gICAgICBmdW5jKGV2ZW50LC4uLmFyZ3MpO1xyXG4gICAgaXBjUmVuZGVyZXI/Lm9uKGNoYW5uZWwsIHN1YnNjcmlwdGlvbik7XHJcbiAgICByZXR1cm4gKCkgPT4gaXBjUmVuZGVyZXIucmVtb3ZlTGlzdGVuZXIoY2hhbm5lbCwgc3Vic2NyaXB0aW9uKTtcclxuICB9LFxyXG4gIGlwY1NlbmRUbzogKHdlYkNvbnRlbnRzSWQ6IG51bWJlciwgY2hhbm5lbDogc3RyaW5nLCAuLi5hcmc6IHVua25vd25bXSkgPT4ge1xyXG4gICAgaXBjUmVuZGVyZXIuc2VuZFRvKHdlYkNvbnRlbnRzSWQsIGNoYW5uZWwsIGFyZyk7XHJcbiAgfSxcclxuICBpcGNTZW5kOiAoY2hhbm5lbDogc3RyaW5nLCAuLi5hcmc6IHVua25vd25bXSkgPT4ge1xyXG4gICAgaXBjUmVuZGVyZXIuc2VuZChjaGFubmVsLCBhcmcpO1xyXG4gIH0sXHJcbiAgaXBjUG9zdFNlbmQ6IChjaGFubmVsOiBzdHJpbmcsIG1lc3NhZ2U/OiB1bmtub3duLCB0cmFuc2Zlcj86IE1lc3NhZ2VQb3J0W10pID0+IHtcclxuICAgIGlwY1JlbmRlcmVyLnBvc3RNZXNzYWdlKGNoYW5uZWwsIG1lc3NhZ2UsIHRyYW5zZmVyKTtcclxuICB9LFxyXG4gIGlwY1NlbmRTeW5jOiAoY2hhbm5lbDogc3RyaW5nLCAuLi5hcmc6IHVua25vd25bXSkgPT4ge1xyXG4gICAgcmV0dXJuIGlwY1JlbmRlcmVyLnNlbmRTeW5jKGNoYW5uZWwsIGFyZyk7XHJcbiAgfSxcclxuICBpcGNPbmNlOiAoY2hhbm5lbDogc3RyaW5nLCBsaXN0ZW5lcjogKGV2ZW50OiBJcGNSZW5kZXJlckV2ZW50LCAuLi5hcmc6IHVua25vd25bXSkgPT4gdm9pZCkgPT4ge1xyXG4gICAgaXBjUmVuZGVyZXIub25jZShjaGFubmVsLCBsaXN0ZW5lcik7XHJcbiAgfSxcclxuICBpcGNSZW1vdmVMaXN0ZW5lcjogKFxyXG4gICAgY2hhbm5lbDogc3RyaW5nLFxyXG4gICAgbGlzdGVuZXI6IChldmVudDogSXBjUmVuZGVyZXJFdmVudCwgLi4uYXJnOiB1bmtub3duW10pID0+IHZvaWRcclxuICApID0+IHtcclxuICAgIGlwY1JlbmRlcmVyLnJlbW92ZUxpc3RlbmVyKGNoYW5uZWwsIGxpc3RlbmVyKTtcclxuICB9LFxyXG4gIGlwY1JlbW92ZUFsbExpc3RlbmVyczogKGNoYW5uZWw6IHN0cmluZykgPT4ge1xyXG4gICAgaXBjUmVuZGVyZXIucmVtb3ZlQWxsTGlzdGVuZXJzKGNoYW5uZWwpO1xyXG4gIH0sXHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=