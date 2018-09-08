var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name jAnalytics
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { JAnalytics } from '@ionic-native/JAnalytics';
 *
 *
 * constructor(private jAnalytics: JAnalytics) { }
 *
 * ...
 *
 *
 * this.jAnalytics.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var JAnalytics = (function (_super) {
    __extends(JAnalytics, _super);
    function JAnalytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function does something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    /**
       * This function does something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    JAnalytics.prototype.init = /**
       * This function does something
       * @return {Promise<any>} Returns a promise that resolves when something happens
       */
    function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JAnalytics.prototype.initCrashHandler = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JAnalytics.prototype.stopCrashHandler = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JAnalytics.prototype.onPageStart = function (params) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JAnalytics.prototype.onPageEnd = function (params) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JAnalytics.prototype.addCountEvent = function (params) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JAnalytics.prototype.addCalculateEvent = function (params) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JAnalytics.prototype.addLoginEvent = function (params) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JAnalytics.prototype.addRegisterEvent = function (params) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JAnalytics.prototype.addBrowseEvent = function (params) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JAnalytics.prototype.addPurchaseEvent = function (params) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    JAnalytics.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], JAnalytics.prototype, "init", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], JAnalytics.prototype, "initCrashHandler", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], JAnalytics.prototype, "stopCrashHandler", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], JAnalytics.prototype, "onPageStart", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], JAnalytics.prototype, "onPageEnd", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], JAnalytics.prototype, "addCountEvent", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], JAnalytics.prototype, "addCalculateEvent", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], JAnalytics.prototype, "addLoginEvent", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], JAnalytics.prototype, "addRegisterEvent", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], JAnalytics.prototype, "addBrowseEvent", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], JAnalytics.prototype, "addPurchaseEvent", null);
    /**
     * @name jAnalytics
     * @description
     * This plugin does something
     *
     * @usage
     * ```typescript
     * import { JAnalytics } from '@ionic-native/JAnalytics';
     *
     *
     * constructor(private jAnalytics: JAnalytics) { }
     *
     * ...
     *
     *
     * this.jAnalytics.functionName('Hello', 123)
     *   .then((res: any) => console.log(res))
     *   .catch((error: any) => console.error(error));
     *
     * ```
     */
    JAnalytics = __decorate([
        Plugin({
            pluginName: 'JAnalytics',
            plugin: 'cordova-plugin-janalytics',
            // npm package name, example: cordova-plugin-janalytics
            pluginRef: 'JAnalytics',
            // the variable reference to call the plugin, example: navigator.janalytics
            repo: 'https://github.com/jpush/cordova-plugin-janalytics',
            // the github repository URL for the plugin
            install: 'ionic cordova plugin add cordova-plugin-janalytics --variable APP_KEY=YOUR_APP_KEY',
            // OPTIONAL install command, in case the plugin requires variables
            installVariables: ['APP_KEY'],
            // OPTIONAL the plugin requires variables
            platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
        })
    ], JAnalytics);
    return JAnalytics;
}(IonicNativePlugin));
export { JAnalytics };
//# sourceMappingURL=index.js.map