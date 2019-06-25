(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, tt, var, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n/* our style */\r\nhtml {\r\n\tbackground-color: rgb(85, 85, 85);\r\n\tcolor: rgb(190, 190, 190)\r\n}\r\np {\r\n    padding: 0.3em;\r\n    margin-top: 0.8em;\r\n}\r\ninput {\r\n    display: block;\r\n    width: 65%;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    background: none;\r\n    border: none;\r\n    border-bottom: 2px solid rgb(60, 60, 60);\r\n}\r\np.choice-text {\r\n\tfont-style: italic;\r\n}\r\na {\r\n\tpadding: 0.5em;\r\n}\r\na:hover {\r\n\tcursor: pointer;\r\n\ttext-shadow: 2px 2px #000000;\r\n}\r\n.full-width {\r\n\twidth: 100%;\r\n}\r\n.centered {\r\n    margin: 0 auto;\r\n    width: 60vw;\r\n}\r\n.ratio-4-3 {\r\n\tmargin-top: 5em;\r\n\twidth: 80vh;\r\n\theight: 40vh;\r\n    position: relative;\r\n}\r\n.slide-in {\r\n    -webkit-animation: slide-in 0.5s forwards;\r\n            animation: slide-in 0.5s forwards;\r\n    -webkit-transform-origin: top center;\r\n            transform-origin: top center;\r\n}\r\n.footnote {\r\n    font-size: 0.8em;\r\n    font-style: italic;\r\n    color: rgb(113, 113, 113);\r\n}\r\n@-webkit-keyframes slide-in {\r\n    from {\r\n        height: 0%;\r\n    }\r\n\r\n    to {\r\n        height: 100%;\r\n    }\r\n}\r\n@keyframes slide-in {\r\n    from {\r\n        height: 0%;\r\n    }\r\n\r\n    to {\r\n        height: 100%;\r\n    }\r\n}\r\n.flash {\r\n    z-index: 100;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    -webkit-animation: flash 0.8s forwards;\r\n            animation: flash 0.8s forwards;\r\n}\r\n@-webkit-keyframes flash {\r\n    from {\r\n        background-color: rgba(255, 255, 255, 1);\r\n    }\r\n    10% {\r\n        background-color: rgba(255, 255, 255, 0.3);\r\n    }\r\n    to {\r\n        background-color: rgba(255, 255, 255, 0);\r\n    }\r\n}\r\n@keyframes flash {\r\n    from {\r\n        background-color: rgba(255, 255, 255, 1);\r\n    }\r\n    10% {\r\n        background-color: rgba(255, 255, 255, 0.3);\r\n    }\r\n    to {\r\n        background-color: rgba(255, 255, 255, 0);\r\n    }\r\n}\r\n.my-tooltip {\r\n    /*border: 2px solid black;*/\r\n    text-align: right;\r\n    background: #EEEEEE00;\r\n    width:80px;\r\n    padding:4px;\r\n    margin: 4px;\r\n    box-shadow: 3px 3px 5px #535353;\r\n    border-radius: 6px 6px 6px 6px;\r\n    opacity: 0.9;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTs7Ozs7Ozs7Ozs7O0NBWUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjtBQUVBLGNBQWM7QUFFZDtDQUNDLGlDQUFpQztDQUNqQztBQUNEO0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix3Q0FBd0M7QUFDNUM7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0MsY0FBYztBQUNmO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsNEJBQTRCO0FBQzdCO0FBRUE7Q0FDQyxXQUFXO0FBQ1o7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFFQTtDQUNDLGVBQWU7Q0FDZixXQUFXO0NBQ1gsWUFBWTtJQUNULGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0kseUNBQWlDO1lBQWpDLGlDQUFpQztJQUNqQyxvQ0FBNEI7WUFBNUIsNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7QUFSQTtJQUNJO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKO0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLGFBQWE7SUFDYixzQ0FBOEI7WUFBOUIsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSTtRQUNJLHdDQUF3QztJQUM1QztJQUNBO1FBQ0ksMENBQTBDO0lBQzlDO0lBQ0E7UUFDSSx3Q0FBd0M7SUFDNUM7QUFDSjtBQVZBO0lBQ0k7UUFDSSx3Q0FBd0M7SUFDNUM7SUFDQTtRQUNJLDBDQUEwQztJQUM5QztJQUNBO1FBQ0ksd0NBQXdDO0lBQzVDO0FBQ0o7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUdYLCtCQUErQjtJQUcvQiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXHJcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcclxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxyXG5zbWFsbCwgc3RyaWtlLCB0dCwgdmFyLCBjZW50ZXIsXHJcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXHJcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxyXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcclxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxyXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxyXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcclxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRib3JkZXI6IDA7XHJcblx0Zm9udC1zaXplOiAxMDAlO1xyXG5cdGZvbnQ6IGluaGVyaXQ7XHJcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cclxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXHJcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuYm9keSB7XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcbn1cclxub2wsIHVsIHtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmJsb2NrcXVvdGUsIHEge1xyXG5cdHF1b3Rlczogbm9uZTtcclxufVxyXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcclxucTpiZWZvcmUsIHE6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxudGFibGUge1xyXG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbi8qIG91ciBzdHlsZSAqL1xyXG5cclxuaHRtbCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDg1LCA4NSwgODUpO1xyXG5cdGNvbG9yOiByZ2IoMTkwLCAxOTAsIDE5MClcclxufVxyXG5cclxucCB7XHJcbiAgICBwYWRkaW5nOiAwLjNlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuOGVtO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDYwLCA2MCwgNjApO1xyXG59XHJcblxyXG5wLmNob2ljZS10ZXh0IHtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbmEge1xyXG5cdHBhZGRpbmc6IDAuNWVtO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0dGV4dC1zaGFkb3c6IDJweCAycHggIzAwMDAwMDtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2VudGVyZWQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNjB2dztcclxufVxyXG5cclxuLnJhdGlvLTQtMyB7XHJcblx0bWFyZ2luLXRvcDogNWVtO1xyXG5cdHdpZHRoOiA4MHZoO1xyXG5cdGhlaWdodDogNDB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNsaWRlLWluIHtcclxuICAgIGFuaW1hdGlvbjogc2xpZGUtaW4gMC41cyBmb3J3YXJkcztcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb290bm90ZSB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6IHJnYigxMTMsIDExMywgMTEzKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBoZWlnaHQ6IDAlO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mbGFzaCB7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGFuaW1hdGlvbjogZmxhc2ggMC44cyBmb3J3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmbGFzaCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgfVxyXG4gICAgMTAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICAgIH1cclxufVxyXG5cclxuLm15LXRvb2x0aXAge1xyXG4gICAgLypib3JkZXI6IDJweCBzb2xpZCBibGFjazsqL1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUVFRUVFMDA7XHJcbiAgICB3aWR0aDo4MHB4O1xyXG4gICAgcGFkZGluZzo0cHg7XHJcbiAgICBtYXJnaW46IDRweDtcclxuICAgIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCA1cHggIzUzNTM1MztcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA1cHggIzUzNTM1MztcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4ICM1MzUzNTM7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDZweCA2cHggNnB4IDZweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCA2cHggNnB4O1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Users\Tibers\Desktop\GGJ2019\browser\ggj2019\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map