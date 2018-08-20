// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        _countdown: 0,
        countdownLbl: {
            default: null,
            type: cc.Label
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        this.startCountdown(15);
    },
    startCountdown: function (countdown) {
        this._countdown = countdown;
        this._doShow();
        this._doSetCountdown(this._countdown);
        this.schedule(this._scheduleClock, 1);
    },

    _scheduleClock: function () {
        this._countdown--;
        console.log(this._countdown);
        if (this._countdown < 0) {
            this.stopCountdown();
            return;
        }
        this._doSetCountdown(this._countdown);
    },

    _doShow: function () {
        this.node.active = true;
    },

    _doHide: function () {
        this.node.active = false;
    },

    _doSetCountdown: function (countdown) {
        this.countdownLbl.string = countdown;
    },

    stopCountdown: function () {
        this._doSetCountdown(0);
        //this._doHide();
        this.unschedule(this._scheduleClock);
    },

    start() {

    },

    // update (dt) {},
});
