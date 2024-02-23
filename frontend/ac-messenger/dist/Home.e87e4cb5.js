// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1xC6H":[function(require,module,exports) {
var Refresh = require("react-refresh/runtime");
var ErrorOverlay = require("react-error-overlay");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"react-refresh/runtime":"786KC","react-error-overlay":"1dldy"}],"5sQhC":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d0737ac8e87e4cb5";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"dnirJ":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$c258 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$c258.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _sidebar = require("features/sidebar");
var _conversation = require("features/conversation");
var _components = require("components");
var _ = require("assets/images/");
var _hooks = require("hooks");
var _chatReducer = require("features/inbox/chatReducer");
var _framerMotion = require("framer-motion");
var _variantsManager = require("setup/variants-manager");
var _s = $RefreshSig$();
const Home = ()=>{
    _s();
    const { chatId , recipient  } = (0, _hooks.useAppSelector)((0, _chatReducer.getChatState));
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "absolute inset-0 flex flex-col-reverse md:flex-row w-screen overflow-hidden",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sidebar.Sidebar), {}, void 0, false, {
                fileName: "src/pages/Home.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _sidebar.SideContent), {}, void 0, false, {
                fileName: "src/pages/Home.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _framerMotion.AnimatePresence), {
                children: chatId ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _framerMotion.motion).div, {
                    variants: (0, _variantsManager.VARIANTS_MANAGER),
                    initial: "slide-from-right",
                    animate: "slide-in",
                    exit: "slide-from-right",
                    className: "h-full w-screen absolute z-10 md:relative md:flex items-center justify-center",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _conversation.ChatBox), {
                        recipient: recipient
                    }, void 0, false, {
                        fileName: "src/pages/Home.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, undefined)
                }, "chatbox", false, {
                    fileName: "src/pages/Home.tsx",
                    lineNumber: 21,
                    columnNumber: 19
                }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _components.ErrorMsg), {
                    className: "hidden md:flex",
                    img: (0, _.start_messaging_img),
                    msg: "Start Messaging with ACMessenger",
                    subMsg: "Select a chat in your inbox to start messaging."
                }, void 0, false, {
                    fileName: "src/pages/Home.tsx",
                    lineNumber: 23,
                    columnNumber: 27
                }, undefined)
            }, void 0, false, {
                fileName: "src/pages/Home.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/pages/Home.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, undefined);
};
_s(Home, "Wm/SdukA8pbTu8YcMZtS7ODkDQM=", false, function() {
    return [
        (0, _hooks.useAppSelector)
    ];
});
_c = Home;
exports.default = Home;
var _c;
$RefreshReg$(_c, "Home");

  $parcel$ReactRefreshHelpers$c258.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","features/sidebar":"DV2MS","features/conversation":"h7KLu","components":"dHnah","assets/images/":"cwnyJ","hooks":"5jDAD","features/inbox/chatReducer":"lTxiv","framer-motion":"5bZBB","setup/variants-manager":"6EiGl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"h7KLu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChatBox", ()=>(0, _chatBoxDefault.default));
var _chatBox = require("./ChatBox");
var _chatBoxDefault = parcelHelpers.interopDefault(_chatBox);

},{"./ChatBox":"2WEh4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2WEh4":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$3a5b = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$3a5b.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _ai = require("react-icons/ai");
var _framerMotion = require("framer-motion");
var _components = require("components");
var _messageBox = require("./MessageBox");
var _messageBoxDefault = parcelHelpers.interopDefault(_messageBox);
var _chatHeader = require("./ChatHeader");
var _chatHeaderDefault = parcelHelpers.interopDefault(_chatHeader);
var _chatForm = require("./ChatForm");
var _chatFormDefault = parcelHelpers.interopDefault(_chatForm);
var _hooks = require("hooks");
var _chatReducer = require("features/inbox/chatReducer");
var _firestore = require("firebase/firestore");
var _firebase = require("setup/firebase");
var _images = require("assets/images");
var _userSlice = require("features/authentication/userSlice");
var _s = $RefreshSig$();
const ChatBox = ({ recipient  })=>{
    _s();
    const [showArrowDown, setShowArrowDown] = (0, _react.useState)(false);
    const conversationContainer = (0, _react.useRef)(null);
    const scrollToBottomRef = (0, _react.useRef)(null);
    const [fetchedMsgs, setFetchedMsgs] = (0, _react.useState)([]);
    const [latestDocSlice, setLatestDocSlice] = (0, _react.useState)(0);
    const [messages, setMessages] = (0, _react.useState)([]);
    const [isPending, setIsPending] = (0, _react.useState)(false);
    const { chatId , isGroup  } = (0, _hooks.useAppSelector)((0, _chatReducer.getChatState));
    const { user: currentUser  } = (0, _hooks.useAppSelector)((0, _userSlice.getUserState));
    const [isEditingMsg, setIsEditingMsg] = (0, _react.useState)(false);
    const editingMsgRef = (0, _react.useRef)();
    const conversationDocRef = chatId && (0, _firestore.doc)((0, _firebase.db), "chats", chatId);
    const userChatDocRef = (0, _firestore.doc)((0, _firebase.db), "userChats", currentUser.uid);
    const scrollDown = ()=>{
        scrollToBottomRef?.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    const chatBoxScrollHandler = (event)=>{
        const target = event.currentTarget;
        if (target.scrollHeight - target.scrollTop > target.clientHeight + 300) setShowArrowDown(true);
        else setShowArrowDown(false);
        const container = conversationContainer.current;
        if (!container) return;
        let triggerHeight = container.scrollTop === 0;
        if (triggerHeight) setLatestDocSlice((state)=>state -= 15);
    };
    const unreadMsg = async ()=>{
        // handle number of unread messages
        // Seen the conversation
        if (isGroup) return;
        (0, _firestore.updateDoc)(userChatDocRef, {
            [chatId + ".unread"]: false,
            [chatId + ".unreadMsgCount"]: 0,
            [chatId + ".active"]: true
        });
    };
    const scrollToBottom = ()=>{
        scrollToBottomRef?.current?.scrollIntoView();
    };
    (0, _react.useEffect)(()=>{
        if (!chatId) return;
        setLatestDocSlice(-15);
        setIsPending(true);
        setMessages([]);
        unreadMsg();
        const unsub = (0, _firestore.onSnapshot)(conversationDocRef, (doc)=>{
            if (!doc.exists()) return;
            setFetchedMsgs(doc.data().messages);
            setIsPending(false); // Needs to delay abit for it to work properly
            setTimeout(()=>scrollToBottom(), 1);
        });
        return ()=>{
            unsub();
            !isGroup && (0, _firestore.updateDoc)(userChatDocRef, {
                [chatId + ".active"]: false
            });
        };
    }, [
        chatId
    ]);
    (0, _react.useEffect)(()=>{
        if (!fetchedMsgs.length) return;
        if (messages.length === fetchedMsgs.length) return;
        setMessages(fetchedMsgs.slice(latestDocSlice));
    }, [
        latestDocSlice,
        fetchedMsgs
    ]);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("section", {
        className: "flex h-full w-full",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "bg-secondary w-full flex flex-col",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _chatHeaderDefault.default), {
                    messages: messages,
                    recipient: recipient
                }, void 0, false, {
                    fileName: "src/features/conversation/ChatBox.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "flex flex-grow items-center justify-center",
                    children: [
                        isPending && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _components.LoadingSpinner), {
                            msg: "fetching messages..."
                        }, void 0, false, {
                            fileName: "src/features/conversation/ChatBox.tsx",
                            lineNumber: 110,
                            columnNumber: 25
                        }, undefined),
                        !messages.length && !isPending && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _components.ErrorMsg), {
                            className: "w-44 sm:w-64 mb-5 self-center justify-self-center",
                            img: (0, _images.start_chatting),
                            msg: "Your conversation is empty.",
                            subMsg: "start chatting below"
                        }, void 0, false, {
                            fileName: "src/features/conversation/ChatBox.tsx",
                            lineNumber: 112,
                            columnNumber: 46
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/features/conversation/ChatBox.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, undefined),
                messages.length !== 0 && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("main", {
                    ref: conversationContainer,
                    onScroll: chatBoxScrollHandler,
                    className: "relative flex flex-col overflow-y-scroll overflow-x-hidden px-4 scrollbar-hide",
                    children: [
                        messages.sort((a, b)=>a.date.toDate() - b.date.toDate()).map((currentMsg, i)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _messageBoxDefault.default), {
                                currentMsg: currentMsg,
                                isEditingMsg: isEditingMsg,
                                editingMsgRef: editingMsgRef,
                                setIsEditingMsg: setIsEditingMsg,
                                scrollToBottom: scrollToBottom
                            }, currentMsg.id, false, {
                                fileName: "src/features/conversation/ChatBox.tsx",
                                lineNumber: 116,
                                columnNumber: 120
                            }, undefined)),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                            ref: scrollToBottomRef
                        }, void 0, false, {
                            fileName: "src/features/conversation/ChatBox.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/features/conversation/ChatBox.tsx",
                    lineNumber: 115,
                    columnNumber: 35
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "w-full flex items-center relative gap-2 p-4 pt-0",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _framerMotion.AnimatePresence), {
                            children: showArrowDown && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _framerMotion.motion).div, {
                                animate: {
                                    opacity: 1,
                                    x: "-50%"
                                },
                                initial: {
                                    opacity: 0,
                                    x: "-50%"
                                },
                                exit: {
                                    opacity: 0,
                                    x: "-50%"
                                },
                                className: "absolute -top-3/4 left-1/2 z-10",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _components.TwButton), {
                                    onClick: scrollDown,
                                    className: "rounded-full px-2",
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _ai.AiOutlineArrowDown), {
                                        className: "text-xl text-white "
                                    }, void 0, false, {
                                        fileName: "src/features/conversation/ChatBox.tsx",
                                        lineNumber: 133,
                                        columnNumber: 19
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/features/conversation/ChatBox.tsx",
                                    lineNumber: 132,
                                    columnNumber: 17
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/features/conversation/ChatBox.tsx",
                                lineNumber: 122,
                                columnNumber: 31
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/features/conversation/ChatBox.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, undefined),
                        chatId && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _chatFormDefault.default), {
                            isEditingMsg: isEditingMsg,
                            editingMsgRef: editingMsgRef,
                            setIsEditingMsg: setIsEditingMsg
                        }, void 0, false, {
                            fileName: "src/features/conversation/ChatBox.tsx",
                            lineNumber: 138,
                            columnNumber: 22
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/features/conversation/ChatBox.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/features/conversation/ChatBox.tsx",
            lineNumber: 106,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/features/conversation/ChatBox.tsx",
        lineNumber: 105,
        columnNumber: 10
    }, undefined);
};
_s(ChatBox, "sMl39AnQuqklPN+IdL67NBWpBCQ=", false, function() {
    return [
        (0, _hooks.useAppSelector),
        (0, _hooks.useAppSelector)
    ];
});
_c = ChatBox;
exports.default = ChatBox;
var _c;
$RefreshReg$(_c, "ChatBox");

  $parcel$ReactRefreshHelpers$3a5b.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-icons/ai":"47mDn","framer-motion":"5bZBB","components":"dHnah","./MessageBox":"egQBD","./ChatHeader":"32cmN","./ChatForm":"gtn7V","hooks":"5jDAD","features/inbox/chatReducer":"lTxiv","firebase/firestore":"cJafS","setup/firebase":"aJ99V","assets/images":"cwnyJ","features/authentication/userSlice":"hfJj9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"egQBD":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$5eec = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$5eec.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _userSlice = require("features/authentication/userSlice");
var _framerMotion = require("framer-motion");
var _hooks = require("hooks");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _components = require("components");
var _variantsManager = require("setup/variants-manager");
var _chatReducer = require("features/inbox/chatReducer");
var _bs = require("react-icons/bs");
var _useSendMessage = require("./useSendMessage");
var _useSendMessageDefault = parcelHelpers.interopDefault(_useSendMessage);
var _ai = require("react-icons/ai");
var _sideContentReducer = require("reducers/sideContentReducer");
var _s = $RefreshSig$();
const MessageBox = ({ currentMsg , editingMsgRef , isEditingMsg , setIsEditingMsg , scrollToBottom  })=>{
    _s();
    const [isExpanded, setIsExpanded] = (0, _react.useState)(false);
    const [msgDate, setMsgDate] = (0, _react.useState)("");
    const [senderData, setSenderData] = (0, _react.useState)();
    const isEditingThisMsg = isEditingMsg && editingMsgRef.current === currentMsg;
    const { user: currentUser  } = (0, _hooks.useAppSelector)((0, _userSlice.getUserState));
    const { isGroup  } = (0, _hooks.useAppSelector)((0, _chatReducer.getChatState));
    const getUserInfo = (0, _hooks.useGetUser)();
    const formatDate = (0, _hooks.useFormatDate)();
    const dispatch = (0, _hooks.useAppDispatch)();
    const { deleteMsg  } = (0, _useSendMessageDefault.default)();
    const isCurrentUser = currentMsg.senderId === currentUser.uid;
    const deleteBtnHandler = (msg)=>{
        deleteMsg(msg);
    };
    const editBtnHandler = ()=>{
        setIsEditingMsg(true);
        editingMsgRef.current = currentMsg;
    };
    const profileClickHandler = ()=>{
        // 768px screen width below have the mobile layout
        if (screen.width <= 768) dispatch((0, _chatReducer.resetChat)());
        dispatch((0, _sideContentReducer.showUserProfile)({
            userProfileData: senderData
        }));
    };
    (0, _react.useEffect)(()=>{
        if (isGroup) getUserInfo(currentMsg.senderId).then((senderData)=>{
            setSenderData(senderData);
        });
        const date = formatDate(currentMsg.date.toDate());
        setMsgDate(date);
    }, []);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _framerMotion.motion).div, {
        variants: (0, _variantsManager.VARIANTS_MANAGER),
        initial: "fade-out",
        animate: "fade-in",
        className: `group gap-2 py-1 flex  

      ${isCurrentUser ? "flex-row-reverse" : ""}`,
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: `flex flex-col gap-0.5 duration-300
        
        ${isEditingThisMsg && "-translate-x-3"}
        
        ${isCurrentUser ? "items-end" : "items-start"}`,
            children: [
                currentMsg.img ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _framerMotion.motion).img, {
                    src: currentMsg.img,
                    layoutId: `${currentMsg.id}`,
                    onClick: ()=>{
                        setIsExpanded(true);
                    },
                    className: `${isExpanded && "invisible"}  sm:w-64 bg-muted-dark/10 rounded-xl cursor-pointer`
                }, void 0, false, {
                    fileName: "src/features/conversation/MessageBox.tsx",
                    lineNumber: 85,
                    columnNumber: 27
                }, undefined) : "",
                currentMsg.img && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _components.SharedLayout), {
                    isExpanded: isExpanded,
                    onClick: ()=>{
                        setIsExpanded(false);
                    },
                    children: isExpanded && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _framerMotion.motion).img, {
                        src: currentMsg.img,
                        layoutId: `${currentMsg.id}`,
                        className: "w-96 cursor-pointer bg-muted-dark/10 rounded-xl"
                    }, void 0, false, {
                        fileName: "src/features/conversation/MessageBox.tsx",
                        lineNumber: 92,
                        columnNumber: 28
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/features/conversation/MessageBox.tsx",
                    lineNumber: 89,
                    columnNumber: 28
                }, undefined),
                currentMsg.message && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: `flex gap-2 items-end ${isCurrentUser ? "flex-row-reverse" : ""}`,
                    children: [
                        isGroup && !isCurrentUser && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            onClick: profileClickHandler,
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _components.ProfilePicture), {
                                size: "small",
                                isOnline: false,
                                photoURL: senderData?.photoURL
                            }, void 0, false, {
                                fileName: "src/features/conversation/MessageBox.tsx",
                                lineNumber: 97,
                                columnNumber: 17
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/features/conversation/MessageBox.tsx",
                            lineNumber: 96,
                            columnNumber: 43
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            disabled: isEditingMsg ? true : false,
                            className: `
              peer flex rounded-3xl py-1.5 px-3 text-md max-w-xs w-fit h-fit text-start break-words 
              ${isCurrentUser ? "focus:bg-primary-tinted  bg-primary-main text-white rounded-br-sm" : "bg-white text-black rounded-bl-sm"}
            `,
                            children: currentMsg.message
                        }, void 0, false, {
                            fileName: "src/features/conversation/MessageBox.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, undefined),
                        isEditingThisMsg && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            className: "relative",
                            onClick: ()=>setIsEditingMsg(false),
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _ai.AiOutlineStop), {
                                    className: "text-2xl text"
                                }, void 0, false, {
                                    fileName: "src/features/conversation/MessageBox.tsx",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _components.TwTooltip), {
                                    tip: "cancel",
                                    position: "top"
                                }, void 0, false, {
                                    fileName: "src/features/conversation/MessageBox.tsx",
                                    lineNumber: 108,
                                    columnNumber: 17
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/features/conversation/MessageBox.tsx",
                            lineNumber: 106,
                            columnNumber: 34
                        }, undefined),
                        isCurrentUser && !isEditingMsg ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "flex translate-y-1/4 invisible group-hover:visible rounded-full dark:bg-bgmain-dark shadow-md overflow-hidden ",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                    onClick: ()=>deleteBtnHandler(currentMsg),
                                    className: "relative group text-muted p-2 hover:bg-muted-light/10 dark:hover:bg-muted-light flex justify-center items-center",
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _bs.BsFillTrashFill), {
                                        className: ""
                                    }, void 0, false, {
                                        fileName: "src/features/conversation/MessageBox.tsx",
                                        lineNumber: 112,
                                        columnNumber: 19
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/features/conversation/MessageBox.tsx",
                                    lineNumber: 111,
                                    columnNumber: 17
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                    onClick: ()=>editBtnHandler(),
                                    className: "relative group text-muted p-2 hover:bg-muted-light/10 dark:hover:bg-muted-light flex justify-center items-center",
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _bs.BsPencilFill), {}, void 0, false, {
                                        fileName: "src/features/conversation/MessageBox.tsx",
                                        lineNumber: 115,
                                        columnNumber: 19
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/features/conversation/MessageBox.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/features/conversation/MessageBox.tsx",
                            lineNumber: 110,
                            columnNumber: 47
                        }, undefined) : ""
                    ]
                }, void 0, true, {
                    fileName: "src/features/conversation/MessageBox.tsx",
                    lineNumber: 95,
                    columnNumber: 32
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "text-xs flex gap-1 items-center text-muted",
                    children: [
                        currentMsg.isEdited && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                            className: "text-muted",
                            children: "edited"
                        }, void 0, false, {
                            fileName: "src/features/conversation/MessageBox.tsx",
                            lineNumber: 121,
                            columnNumber: 35
                        }, undefined),
                        isGroup && !isCurrentUser && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                    className: `${isCurrentUser ? "text-end" : "text-start"} `,
                                    children: senderData?.displayName
                                }, void 0, false, {
                                    fileName: "src/features/conversation/MessageBox.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    children: " • "
                                }, void 0, false, {
                                    fileName: "src/features/conversation/MessageBox.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, undefined)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("time", {
                            className: "ml-auto",
                            children: msgDate
                        }, void 0, false, {
                            fileName: "src/features/conversation/MessageBox.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/features/conversation/MessageBox.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/features/conversation/MessageBox.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/features/conversation/MessageBox.tsx",
        lineNumber: 77,
        columnNumber: 10
    }, undefined);
};
_s(MessageBox, "seJ5ebl7/2253h3kRSFrknjF1TE=", false, function() {
    return [
        (0, _hooks.useAppSelector),
        (0, _hooks.useAppSelector),
        (0, _hooks.useGetUser),
        (0, _hooks.useFormatDate),
        (0, _hooks.useAppDispatch),
        (0, _useSendMessageDefault.default)
    ];
});
_c = MessageBox;
exports.default = /*#__PURE__*/ _c1 = (0, _react.memo)(MessageBox);
var _c, _c1;
$RefreshReg$(_c, "MessageBox");
$RefreshReg$(_c1, "%default%");

  $parcel$ReactRefreshHelpers$5eec.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","features/authentication/userSlice":"hfJj9","framer-motion":"5bZBB","hooks":"5jDAD","react":"21dqq","components":"dHnah","setup/variants-manager":"6EiGl","features/inbox/chatReducer":"lTxiv","react-icons/bs":"JJZe4","./useSendMessage":"9CWr6","react-icons/ai":"47mDn","reducers/sideContentReducer":"kY5cy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"9CWr6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hooks = require("hooks");
var _userSlice = require("features/authentication/userSlice");
var _chatReducer = require("features/inbox/chatReducer");
var _firestore = require("firebase/firestore");
var _firebase = require("setup/firebase");
var _uuid = require("uuid");
const useSendMessage = ()=>{
    const { user: currentUser  } = (0, _hooks.useAppSelector)((0, _userSlice.getUserState));
    const { chatId , recipient , isGroup  } = (0, _hooks.useAppSelector)((0, _chatReducer.getChatState));
    const createLastMessage = async (message)=>{
        if (isGroup) {
            const groupChatRef = (0, _firestore.doc)((0, _firebase.db), "groupChats", recipient.groupID);
            const userChatDocRef = (0, _firestore.doc)((0, _firebase.db), "userChats", currentUser.uid);
            (0, _firestore.updateDoc)(groupChatRef, {
                lastMessage: {
                    message: `${currentUser.displayName}: ${message}`,
                    date: (0, _firestore.Timestamp).now()
                }
            });
            (0, _firestore.updateDoc)(userChatDocRef, {
                [chatId + ".lastMessage"]: {
                    message,
                    date: (0, _firestore.Timestamp).now()
                }
            });
            return;
        }
        const userChatDocRef1 = (0, _firestore.doc)((0, _firebase.db), "userChats", currentUser.uid);
        const recipientChatDocRef = (0, _firestore.doc)((0, _firebase.db), "userChats", recipient.uid);
        try {
            const recipientChatDocData = (await (0, _firestore.getDoc)(recipientChatDocRef)).data(); // To fix i used temporary timestamp now since servertimestamp is somewhat being delayed therefore causing my app to crash it should be server timestamp
            (0, _firestore.updateDoc)(userChatDocRef1, {
                [chatId + ".lastMessage"]: {
                    message,
                    date: (0, _firestore.Timestamp).now()
                }
            });
            (0, _firestore.updateDoc)(recipientChatDocRef, {
                [chatId + ".lastMessage"]: {
                    message,
                    date: (0, _firestore.Timestamp).now()
                },
                // If recipient is not viewing their conversation show unread style
                [chatId + ".unread"]: recipientChatDocData?.[chatId].active ? false : true,
                [chatId + ".unreadMsgCount"]: !recipientChatDocData?.[chatId].active && (0, _firestore.increment)(1)
            });
        } catch (error) {
            throw error;
        }
    };
    const sendMessage = (message)=>{
        const chatDocRef = (0, _firestore.doc)((0, _firebase.db), "chats", chatId.toString());
        const messageInfo = {
            id: (0, _uuid.v4)(),
            message,
            senderId: currentUser.uid,
            date: (0, _firestore.Timestamp).now(),
            img: "",
            isEdited: false,
            lastEdited: null
        };
        try {
            (0, _firestore.updateDoc)(chatDocRef, {
                messages: (0, _firestore.arrayUnion)(messageInfo)
            });
            createLastMessage(message);
        } catch (error) {
            throw error;
        }
    };
    const sendImage = (imgURL)=>{
        const chatDocRef = (0, _firestore.doc)((0, _firebase.db), "chats", chatId);
        const messageInfo = {
            id: (0, _uuid.v4)(),
            message: "",
            senderId: currentUser.uid,
            date: (0, _firestore.Timestamp).now(),
            img: imgURL,
            isEdited: false,
            lastEdited: null
        };
        (0, _firestore.updateDoc)(chatDocRef, {
            messages: (0, _firestore.arrayUnion)(messageInfo)
        });
        createLastMessage("sent a picture.");
    };
    const deleteMsg = (msg)=>{
        const chatDocRef = (0, _firestore.doc)((0, _firebase.db), "chats", chatId);
        (0, _firestore.updateDoc)(chatDocRef, {
            messages: (0, _firestore.arrayRemove)(msg)
        });
    };
    const editMsg = async (msg, editedMsg)=>{
        const chatDocRef = (0, _firestore.doc)((0, _firebase.db), "chats", chatId);
        const msgObj = {
            ...msg,
            message: editedMsg,
            lastEdited: (0, _firestore.Timestamp).now(),
            isEdited: true
        };
        await (0, _firestore.updateDoc)(chatDocRef, {
            messages: (0, _firestore.arrayRemove)(msg)
        });
        (0, _firestore.updateDoc)(chatDocRef, {
            messages: (0, _firestore.arrayUnion)(msgObj)
        });
        createLastMessage("edited a message.");
    };
    return {
        sendMessage,
        sendImage,
        deleteMsg,
        editMsg
    };
};
exports.default = useSendMessage;

},{"hooks":"5jDAD","features/authentication/userSlice":"hfJj9","features/inbox/chatReducer":"lTxiv","firebase/firestore":"cJafS","setup/firebase":"aJ99V","uuid":"j4KJi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"32cmN":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$bf7e = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$bf7e.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _ai = require("react-icons/ai");
var _components = require("components");
var _hooks = require("hooks");
var _chatReducer = require("features/inbox/chatReducer");
var _sideContentReducer = require("reducers/sideContentReducer");
var _react = require("react");
var _framerMotion = require("framer-motion");
var _s = $RefreshSig$();
const ChatHeader = ({ recipient , messages  })=>{
    _s();
    const { isGroup  } = (0, _hooks.useAppSelector)((0, _chatReducer.getChatState));
    const online = (0, _hooks.useGetUserStatus)(recipient?.uid);
    const [msgSummary, setMsgSummary] = (0, _react.useState)();
    const [summaryLoading, setSummaryLoading] = (0, _react.useState)(false);
    const dispatch = (0, _hooks.useAppDispatch)();
    const profileClickHandler = ()=>{
        // 768px screen width below have the mobile layout
        if (screen.width <= 768) dispatch((0, _chatReducer.resetChat)());
        dispatch((0, _sideContentReducer.showUserProfile)({
            userProfileData: recipient
        }));
    };
    const handleBackBtn = ()=>{
        dispatch((0, _chatReducer.resetChat)());
    };
    const summariseMessages = ()=>{
        if (!summaryLoading) {
            setSummaryLoading(true);
            const msg = messages.map(({ message , id  })=>({
                    message
                }));
            setSummaryLoading(false); // IMPLEMENT API
            console.log(msg, messages);
            setMsgSummary("This is a chat summary");
            setTimeout(()=>{
                setMsgSummary(undefined);
            }, 5000);
        }
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("header", {
        style: {
            position: "relative",
            justifyContent: "space-between"
        },
        className: "border-b border-main w-full p-4 mb-auto bg-main duration-300 flex gap-2",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _components.TwButton), {
                variant: "transparent",
                onClick: handleBackBtn,
                className: "md:hidden px-4",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _ai.AiOutlineArrowLeft), {
                    className: "text-xl"
                }, void 0, false, {
                    fileName: "src/features/conversation/ChatHeader.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/features/conversation/ChatHeader.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        disabled: isGroup ? true : false,
                        onClick: profileClickHandler,
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _components.ProfilePicture), {
                            isOnline: online,
                            photoURL: recipient?.photoURL,
                            size: "small"
                        }, void 0, false, {
                            fileName: "src/features/conversation/ChatHeader.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/features/conversation/ChatHeader.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "flex flex-col gap-0",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                            className: "text text-xl",
                            children: recipient.displayName || recipient.groupName
                        }, void 0, false, {
                            fileName: "src/features/conversation/ChatHeader.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/features/conversation/ChatHeader.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/features/conversation/ChatHeader.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _components.TwButton), {
                className: "flex-end",
                variant: "contained",
                onClick: summariseMessages,
                children: summaryLoading ? "Loading..." : "Summary"
            }, void 0, false, {
                fileName: "src/features/conversation/ChatHeader.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _framerMotion.AnimatePresence), {
                children: msgSummary && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _framerMotion.motion).div, {
                    className: " peer flex rounded-xl py-1.5 px-3 text-md max-w-xs w-fit h-fit text-start break-words bg-white text-black rounded-sm ",
                    style: {
                        borderRadius: "5px",
                        position: "absolute",
                        bottom: "-20px",
                        left: 0,
                        margin: "10px"
                    },
                    animate: {
                        opacity: 1,
                        y: "100%"
                    },
                    initial: {
                        opacity: 0,
                        y: "0%"
                    },
                    exit: {
                        opacity: 0,
                        y: "100%"
                    },
                    children: msgSummary
                }, void 0, false, {
                    fileName: "src/features/conversation/ChatHeader.tsx",
                    lineNumber: 92,
                    columnNumber: 24
                }, undefined)
            }, void 0, false, {
                fileName: "src/features/conversation/ChatHeader.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/features/conversation/ChatHeader.tsx",
        lineNumber: 61,
        columnNumber: 10
    }, undefined);
};
_s(ChatHeader, "NZYr89yBeM7JyocQznCh3HVKQjs=", false, function() {
    return [
        (0, _hooks.useAppSelector),
        (0, _hooks.useGetUserStatus),
        (0, _hooks.useAppDispatch)
    ];
});
_c = ChatHeader;
exports.default = ChatHeader;
var _c;
$RefreshReg$(_c, "ChatHeader");

  $parcel$ReactRefreshHelpers$bf7e.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react-icons/ai":"47mDn","components":"dHnah","hooks":"5jDAD","features/inbox/chatReducer":"lTxiv","reducers/sideContentReducer":"kY5cy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru","react":"21dqq","framer-motion":"5bZBB"}],"gtn7V":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$4f05 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$4f05.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _md = require("react-icons/md");
var _ri = require("react-icons/ri");
var _components = require("components");
var _useSendMessage = require("./useSendMessage");
var _useSendMessageDefault = parcelHelpers.interopDefault(_useSendMessage);
var _hooks = require("hooks");
var _s = $RefreshSig$();
const ChatForm = ({ editingMsgRef , isEditingMsg , setIsEditingMsg  })=>{
    _s();
    const [showModal, setShowModal] = (0, _react.useState)(false);
    const [message, setMessage] = (0, _react.useState)("");
    const chatInputRef = (0, _react.useRef)(null);
    const { uploadImg , removeUploadImg , imgURL  } = (0, _hooks.useUploadImage)();
    const { sendMessage , sendImage , editMsg  } = (0, _useSendMessageDefault.default)();
    const imageInputRef = (0, _react.useRef)(null);
    const handleFormSubmit = async (e)=>{
        try {
            e.preventDefault();
            setMessage("");
            if (isEditingMsg) {
                setIsEditingMsg(false);
                editMsg(editingMsgRef.current, message);
            } else sendMessage(message);
        } catch (error) {
            console.error(error);
        }
    };
    (0, _react.useEffect)(()=>{
        if (isEditingMsg) {
            setMessage(editingMsgRef.current.message);
            chatInputRef.current?.focus();
        } else setMessage("");
    }, [
        isEditingMsg
    ]);
    const handleImageChange = async (e)=>{
        setShowModal(true);
        const imageFile = e.target.files[0];
        const uploadImgArgs = {
            imageFile,
            imageInputRef
        };
        uploadImg(uploadImgArgs);
    };
    const closeImageModal = (deleteStorageImage)=>{
        try {
            deleteStorageImage && removeUploadImg();
            imageInputRef.current.value = "";
            setShowModal(false);
        } catch (error) {
            throw error;
        }
    };
    const handleSendImage = ()=>{
        try {
            sendImage(imgURL);
            closeImageModal();
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("form", {
        onSubmit: handleFormSubmit,
        className: "relative w-full flex pr-2 items-center gap-1 bg-main rounded-full duration-300",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _components.Modal), {
                isHidingModal: false,
                className: "p-2 px-2",
                setShowModal: setShowModal,
                children: showModal && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                            src: imgURL,
                            className: "w-64 rounded-xl"
                        }, void 0, false, {
                            fileName: "src/features/conversation/ChatForm.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "flex flex-col gap-1 ",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _components.TwButton), {
                                    onClick: handleSendImage,
                                    className: "py-1",
                                    variant: "contained",
                                    children: "Send"
                                }, void 0, false, {
                                    fileName: "src/features/conversation/ChatForm.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _components.TwButton), {
                                    onClick: ()=>closeImageModal(true),
                                    className: "justify-center py-1",
                                    variant: "outline",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "src/features/conversation/ChatForm.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/features/conversation/ChatForm.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/features/conversation/ChatForm.tsx",
                    lineNumber: 90,
                    columnNumber: 23
                }, undefined)
            }, void 0, false, {
                fileName: "src/features/conversation/ChatForm.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex p-2",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                    htmlFor: "image-input",
                    className: "text-muted-light dark:text-muted-dark/50 p-2 cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                            type: "file",
                            ref: imageInputRef,
                            accept: "image/*",
                            id: "image-input",
                            className: "hidden",
                            onChange: handleImageChange
                        }, void 0, false, {
                            fileName: "src/features/conversation/ChatForm.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _ri.RiImageAddLine), {
                            className: "text-2xl"
                        }, void 0, false, {
                            fileName: "src/features/conversation/ChatForm.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/features/conversation/ChatForm.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/features/conversation/ChatForm.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                required: true,
                ref: chatInputRef,
                type: "text",
                value: message,
                placeholder: "Message here",
                className: "py-2 w-full bg-transparent outline-none text",
                onChange: (e)=>setMessage(e.target.value),
                onBlur: (e)=>setMessage(e.target.value)
            }, void 0, false, {
                fileName: "src/features/conversation/ChatForm.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _components.TwButton), {
                type: "submit",
                disabled: !message,
                className: "rounded-full relative ml-auto h-full p-4 px-2 flex items-center justify-center",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _md.MdSend), {
                    className: `text-white text-2xl`
                }, void 0, false, {
                    fileName: "src/features/conversation/ChatForm.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "src/features/conversation/ChatForm.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/features/conversation/ChatForm.tsx",
        lineNumber: 88,
        columnNumber: 10
    }, undefined);
};
_s(ChatForm, "YdbeMocN/jSkZpIRdEr+BEVkNkc=", false, function() {
    return [
        (0, _hooks.useUploadImage),
        (0, _useSendMessageDefault.default)
    ];
});
_c = ChatForm;
exports.default = ChatForm;
var _c;
$RefreshReg$(_c, "ChatForm");

  $parcel$ReactRefreshHelpers$4f05.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-icons/md":"gBcPo","react-icons/ri":"aAAUg","components":"dHnah","./useSendMessage":"9CWr6","hooks":"5jDAD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}]},["1xC6H","5sQhC"], null, "parcelRequire536e")

//# sourceMappingURL=Home.e87e4cb5.js.map
