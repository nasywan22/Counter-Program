var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var System = /** @class */ (function () {
    function System() {
        this.numberTxt = document.getElementById("number");
        this.counterUp = document.getElementById("counterUp");
        this.counterDown = document.getElementById("counterDown");
        this.resetBtn = document.getElementById("resetBtn");
        this.counterNum = 0;
        this.MPC = 1;
        this.input = document.getElementById('input-multiplier');
        this.inputBtn = document.getElementById('push-input');
        this.resetMCP = document.getElementById("resetMCP");
        this.multiplierStatus = document.getElementById("mstatus");
        this.multiplier2 = document.getElementById("2x");
        this.multiplier5 = document.getElementById("5x");
        this.multiplier10 = document.getElementById("10x");
        this.tempArray = [this.multiplier2, this.multiplier5, this.multiplier10];
    }
    System.prototype.BtnAction = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.counterDown.disabled = true;
                this.counterUp.addEventListener('click', function () {
                    _this.counterDown.disabled = false;
                    _this.counterNum += _this.MPC;
                    _this.numberTxt.textContent = _this.counterNum.toString();
                });
                this.counterDown.addEventListener('click', function () {
                    _this.counterNum -= _this.MPC;
                    if (_this.counterNum == 0) {
                        _this.counterDown.disabled = true;
                    }
                    _this.numberTxt.textContent = _this.counterNum.toString();
                });
                this.resetBtn.addEventListener('click', function () {
                    _this.counterNum = 0;
                    _this.numberTxt.textContent = _this.counterNum.toString();
                    _this.counterDown.disabled = true;
                });
                this.inputBtn.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                    var checkicon;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.MPC = parseInt(this.input.value);
                                this.input.value = '';
                                sys.multiplierStatus.textContent = "".concat(sys.MPC, "X");
                                this.inputBtn.textContent = '';
                                return [4 /*yield*/, sleep(50)];
                            case 1:
                                _a.sent();
                                checkicon = document.createElement("i");
                                checkicon.classList.add("fa-solid", "fa-check");
                                this.inputBtn.appendChild(checkicon);
                                return [4 /*yield*/, sleep(2000)];
                            case 2:
                                _a.sent();
                                this.inputBtn.removeChild(checkicon);
                                this.inputBtn.textContent = 'multiply!';
                                return [2 /*return*/];
                        }
                    });
                }); });
                this.resetMCP.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                    var checkicon;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.MPC = 1;
                                sys.multiplierStatus.textContent = "".concat(this.MPC, "X");
                                this.resetMCP.textContent = '';
                                return [4 /*yield*/, sleep(50)];
                            case 1:
                                _a.sent();
                                checkicon = document.createElement("i");
                                checkicon.classList.add("fa-solid", "fa-check");
                                this.resetMCP.appendChild(checkicon);
                                checkicon.style.color = 'white';
                                this.tempArray.forEach(function (item) {
                                    item.style.backgroundColor = 'transparent';
                                    item.style.color = 'black';
                                });
                                return [4 /*yield*/, sleep(2000)];
                            case 2:
                                _a.sent();
                                this.resetMCP.removeChild(checkicon);
                                this.resetMCP.textContent = 'Reset';
                                return [2 /*return*/];
                        }
                    });
                }); });
                this.multiplier2.addEventListener('click', function () {
                    _this.MPC = 2;
                    _this.tempArray.forEach(function (item) {
                        if (item === _this.multiplier2)
                            return;
                        item.style.backgroundColor = 'transparent';
                        item.style.color = 'black';
                    });
                    _this.multiplier2.style.backgroundColor = 'blue';
                    _this.multiplier2.style.color = 'white';
                    _this.multiplierStatus.textContent = "".concat(_this.MPC, "X");
                });
                this.multiplier5.addEventListener('click', function () {
                    _this.MPC = 5;
                    _this.tempArray.forEach(function (item) {
                        if (item == _this.multiplier5)
                            return;
                        item.style.backgroundColor = 'transparent';
                        item.style.color = 'black';
                    });
                    _this.multiplier5.style.backgroundColor = 'orange';
                    _this.multiplier5.style.color = 'white';
                    _this.multiplierStatus.textContent = "".concat(_this.MPC, "X");
                });
                this.multiplier10.addEventListener('click', function () {
                    _this.MPC = 10;
                    _this.tempArray.forEach(function (item) {
                        if (item == _this.multiplier10)
                            return;
                        item.style.backgroundColor = 'transparent';
                        item.style.color = 'black';
                    });
                    _this.multiplier10.style.backgroundColor = 'green';
                    _this.multiplier10.style.color = 'white';
                    _this.multiplierStatus.textContent = "".concat(_this.MPC, "X");
                });
                return [2 /*return*/];
            });
        });
    };
    return System;
}());
var sleep = function (ms) { return new Promise(function (r) { return setTimeout(r, ms); }); };
var sys = new System();
sys.multiplierStatus.textContent = "".concat(sys.MPC, "X");
sys.BtnAction();
