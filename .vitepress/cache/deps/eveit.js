import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/.pnpm/eveit@0.0.1/node_modules/eveit/eveit.min.js
var require_eveit_min = __commonJS({
  "node_modules/.pnpm/eveit@0.0.1/node_modules/eveit/eveit.min.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Eveit = t();
    }(exports, function() {
      "use strict";
      function i(e2, t) {
        for (var n = 0; n < t.length; n++) {
          var r2 = t[n];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
        }
      }
      function o(e2) {
        return function(e3) {
          if (Array.isArray(e3))
            return r(e3);
        }(e2) || function(e3) {
          if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
            return Array.from(e3);
        }(e2) || function(e3, t) {
          if (e3) {
            if ("string" == typeof e3)
              return r(e3, t);
            var n = Object.prototype.toString.call(e3).slice(8, -1);
            return "Map" === (n = "Object" === n && e3.constructor ? e3.constructor.name : n) || "Set" === n ? Array.from(e3) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e3, t) : void 0;
          }
        }(e2) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function r(e2, t) {
        (null == t || t > e2.length) && (t = e2.length);
        for (var n = 0, r2 = new Array(t); n < t; n++)
          r2[n] = e2[n];
        return r2;
      }
      var e = function() {
        function n() {
          if (!(this instanceof n))
            throw new TypeError("Cannot call a class as a function");
          this._map = {}, this._prevData = {};
        }
        var e2, t, r2;
        return e2 = n, r2 = [{ key: "emit", value: function(e3) {
          for (var t2, n2 = arguments.length, r3 = new Array(1 < n2 ? n2 - 1 : 0), i2 = 1; i2 < n2; i2++)
            r3[i2 - 1] = arguments[i2];
          (t2 = this._).emit.apply(t2, [e3].concat(r3));
        } }, { key: "off", value: function(e3, t2) {
          this._.off(e3, t2);
        } }, { key: "clear", value: function(e3) {
          this._.clear(e3);
        } }, { key: "on", value: function(e3, t2) {
          this._.on(e3, t2);
        } }, { key: "once", value: function(e3, t2) {
          this._.once(e3, t2);
        } }, { key: "head", value: function(e3, t2) {
          this._.head(e3, t2);
        } }, { key: "headOnce", value: function(e3, t2) {
          this._.headOnce(e3, t2);
        } }, { key: "bind", value: function(e3) {
          Object.assign(e3, n.prototype, new n());
        } }], (t = [{ key: "emit", value: function(e3) {
          for (var t2 = arguments.length, n2 = new Array(1 < t2 ? t2 - 1 : 0), r3 = 1; r3 < t2; r3++)
            n2[r3 - 1] = arguments[r3];
          this._prevData[e3] = n2;
          e3 = this._map[e3];
          return !!e3 && (e3.forEach(function(e4) {
            return e4.apply(void 0, n2);
          }), true);
        } }, { key: "off", value: function(e3, t2) {
          delete this._prevData[e3];
          e3 = this._map[e3];
          if (!e3)
            return false;
          t2 = e3.indexOf(t2);
          return -1 !== t2 && (e3.splice(t2, 1), true);
        } }, { key: "clear", value: function(e3) {
          return !!this._map[e3] && (delete this._map[e3], delete this._prevData[e3], true);
        } }, { key: "_checkPrev", value: function(e3, t2) {
          false !== this.usePrevEmit && (n.usePrevEmit || this.usePrevEmit) && void 0 !== (e3 = this._prevData[e3]) && t2.apply(void 0, o(e3));
        } }, { key: "on", value: function(e3, t2) {
          this._checkPrev(e3, t2), this._getList(e3).push(t2);
        } }, { key: "once", value: function(e3, t2) {
          this.on(e3, this._onceListener(e3, t2));
        } }, { key: "head", value: function(e3, t2) {
          this._checkPrev(e3, t2), this._getList(e3).unshift(t2);
        } }, { key: "headOnce", value: function(e3, t2) {
          this.head(e3, this._onceListener(e3, t2));
        } }, { key: "_getList", value: function(e3) {
          var t2 = this._map[e3];
          return t2 || (this._map[e3] = t2 = []), t2;
        } }, { key: "_onceListener", value: function(t2, n2) {
          var r3 = this;
          return function e3() {
            n2.apply(void 0, arguments), r3.off(t2, e3);
          };
        } }]) && i(e2.prototype, t), r2 && i(e2, r2), Object.defineProperty(e2, "prototype", { writable: false }), n;
      }();
      return e.version = "0.0.1", e.usePrevEmit = false, e._ = new e(), e;
    });
  }
});
export default require_eveit_min();
//# sourceMappingURL=eveit.js.map
