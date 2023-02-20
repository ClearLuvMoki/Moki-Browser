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
electron_1.contextBridge.exposeInMainWorld('__IPC__', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbG9hZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQSxtRUFBd0U7QUFFeEUsd0JBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUU7SUFDdkMsTUFBTSxFQUFFLENBQUMsT0FBZSxFQUFFLElBQVcsRUFBRSxFQUFFO1FBQ3JDLE9BQU8sc0JBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxLQUFLLEVBQUUsQ0FBQyxPQUFlLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDN0IsTUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUF1QixFQUFFLEdBQUcsSUFBZSxFQUFFLEVBQUUsQ0FDakUsSUFBSSxDQUFDLEtBQUssRUFBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3hCLHNCQUFXLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN2QyxPQUFPLEdBQUcsRUFBRSxDQUFDLHNCQUFXLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ0QsU0FBUyxFQUFFLENBQUMsYUFBcUIsRUFBRSxPQUFlLEVBQUUsR0FBRyxHQUFjLEVBQUUsRUFBRTtRQUNyRSxzQkFBVyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxPQUFPLEVBQUUsQ0FBQyxPQUFlLEVBQUUsR0FBRyxHQUFjLEVBQUUsRUFBRTtRQUM1QyxzQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELFdBQVcsRUFBRSxDQUFDLE9BQWUsRUFBRSxPQUFpQixFQUFFLFFBQXdCLEVBQUUsRUFBRTtRQUMxRSxzQkFBVyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDRCxXQUFXLEVBQUUsQ0FBQyxPQUFlLEVBQUUsR0FBRyxHQUFjLEVBQUUsRUFBRTtRQUNoRCxPQUFPLHNCQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsT0FBTyxFQUFFLENBQUMsT0FBZSxFQUFFLFFBQThELEVBQUUsRUFBRTtRQUN6RixzQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNELGlCQUFpQixFQUFFLENBQ2YsT0FBZSxFQUNmLFFBQThELEVBQ2hFLEVBQUU7UUFDQSxzQkFBVyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELHFCQUFxQixFQUFFLENBQUMsT0FBZSxFQUFFLEVBQUU7UUFDdkMsc0JBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9raS1icm93c2VyL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJlbGVjdHJvblwiIiwid2VicGFjazovL21va2ktYnJvd3Nlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tb2tpLWJyb3dzZXIvLi9zcmMvbWFpbi9wcmVsb2FkL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBjb250ZXh0QnJpZGdlLCBpcGNSZW5kZXJlciwgSXBjUmVuZGVyZXJFdmVudCB9IGZyb20gJ2VsZWN0cm9uJztcclxuXHJcbmNvbnRleHRCcmlkZ2UuZXhwb3NlSW5NYWluV29ybGQoJ19fSVBDX18nLCB7XHJcbiAgICBpbnZva2U6IChjaGFubmVsOiBzdHJpbmcsIGRhdGE6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGlwY1JlbmRlcmVyLmludm9rZShjaGFubmVsLCBkYXRhKTtcclxuICAgIH0sXHJcbiAgICBpcGNPbjogKGNoYW5uZWw6IHN0cmluZywgZnVuYykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IChldmVudDogSXBjUmVuZGVyZXJFdmVudCwgLi4uYXJnczogdW5rbm93bltdKSA9PlxyXG4gICAgICAgICAgICBmdW5jKGV2ZW50LC4uLmFyZ3MpO1xyXG4gICAgICAgIGlwY1JlbmRlcmVyPy5vbihjaGFubmVsLCBzdWJzY3JpcHRpb24pO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBpcGNSZW5kZXJlci5yZW1vdmVMaXN0ZW5lcihjaGFubmVsLCBzdWJzY3JpcHRpb24pO1xyXG4gICAgfSxcclxuICAgIGlwY1NlbmRUbzogKHdlYkNvbnRlbnRzSWQ6IG51bWJlciwgY2hhbm5lbDogc3RyaW5nLCAuLi5hcmc6IHVua25vd25bXSkgPT4ge1xyXG4gICAgICAgIGlwY1JlbmRlcmVyLnNlbmRUbyh3ZWJDb250ZW50c0lkLCBjaGFubmVsLCBhcmcpO1xyXG4gICAgfSxcclxuICAgIGlwY1NlbmQ6IChjaGFubmVsOiBzdHJpbmcsIC4uLmFyZzogdW5rbm93bltdKSA9PiB7XHJcbiAgICAgICAgaXBjUmVuZGVyZXIuc2VuZChjaGFubmVsLCBhcmcpO1xyXG4gICAgfSxcclxuICAgIGlwY1Bvc3RTZW5kOiAoY2hhbm5lbDogc3RyaW5nLCBtZXNzYWdlPzogdW5rbm93biwgdHJhbnNmZXI/OiBNZXNzYWdlUG9ydFtdKSA9PiB7XHJcbiAgICAgICAgaXBjUmVuZGVyZXIucG9zdE1lc3NhZ2UoY2hhbm5lbCwgbWVzc2FnZSwgdHJhbnNmZXIpO1xyXG4gICAgfSxcclxuICAgIGlwY1NlbmRTeW5jOiAoY2hhbm5lbDogc3RyaW5nLCAuLi5hcmc6IHVua25vd25bXSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpcGNSZW5kZXJlci5zZW5kU3luYyhjaGFubmVsLCBhcmcpO1xyXG4gICAgfSxcclxuICAgIGlwY09uY2U6IChjaGFubmVsOiBzdHJpbmcsIGxpc3RlbmVyOiAoZXZlbnQ6IElwY1JlbmRlcmVyRXZlbnQsIC4uLmFyZzogdW5rbm93bltdKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgaXBjUmVuZGVyZXIub25jZShjaGFubmVsLCBsaXN0ZW5lcik7XHJcbiAgICB9LFxyXG4gICAgaXBjUmVtb3ZlTGlzdGVuZXI6IChcclxuICAgICAgICBjaGFubmVsOiBzdHJpbmcsXHJcbiAgICAgICAgbGlzdGVuZXI6IChldmVudDogSXBjUmVuZGVyZXJFdmVudCwgLi4uYXJnOiB1bmtub3duW10pID0+IHZvaWRcclxuICAgICkgPT4ge1xyXG4gICAgICAgIGlwY1JlbmRlcmVyLnJlbW92ZUxpc3RlbmVyKGNoYW5uZWwsIGxpc3RlbmVyKTtcclxuICAgIH0sXHJcbiAgICBpcGNSZW1vdmVBbGxMaXN0ZW5lcnM6IChjaGFubmVsOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBpcGNSZW5kZXJlci5yZW1vdmVBbGxMaXN0ZW5lcnMoY2hhbm5lbCk7XHJcbiAgICB9LFxyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9