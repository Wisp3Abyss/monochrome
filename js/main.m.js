/* 0.5.7 2021-12-27 16:37:09 */
"use strict";
var machine = {},
    user = {},
    build = {
        store: "playstore",
        platform: "mobile",
        os: "and",
        storeURL: "https://play.google.com/store/apps/details?id=com.sofarsogood.incredibox",
        version: "0.5.7"
    },
    exclude = !1,
    showlog = !1,
    sndtype = "ogg",
    vidtype = "mp4",
    domainOnline = "https://www.incredibox.com/",
    appCN = !1,
    appSQ = !1,
    appTotalVersion = appCN && "and" == build.os ? 4 : 8;

function initGlobal() {
    var e = function() {
        return !1
    };
    $("#nada");
    try {
        initAd
    } catch (t) {
        window.initAd = e
    }
    try {
        withAdBreak
    } catch (e) {
        window.withAdBreak = !1
    }
    try {
        adVisible
    } catch (e) {
        window.adVisible = !1
    }
}
var debugMute = notnull(getParameterByName("mute")),
    debugGame = notnull(getParameterByName("game")),
    debugScene = notnull(getParameterByName("scene"));

function nada() {}
var preventActionUsed = !1,
    preventActionDelay = .25;

function preventAction(e) {
    preventActionUsed || (preventActionUsed = !0, e(), setTimeout(function() {
        preventActionUsed = !1
    }, preventActionDelay))
}

function tryfunc(e) {
    notnull(e) && "function" === (typeof e).toLowerCase() && e()
}

function inIframe() {
    try {
        return window.self !== window.top
    } catch (e) {
        return !0
    }
}

function callParentWindow(e, t) {
    isIframe && (notnull(window.top) && notnull(window.top.appEvent) ? window.top.appEvent(e, t) : setTimeout(function() {
        callParentWindow(e, t)
    }, 200))
}
var regexList = {
    allchar: /[*]/,
    classic: /[^A-Za-z0-9\u00C0-\u017F '-]/,
    search: /[^A-Za-z0-9\u00C0-\u017F\u0025 '-]/,
    max3letters: /[*]|(.)(?=\1\1\1)/gi,
    strict: /[^A-Za-z0-9 '-]/,
    custom: /[^A-Za-z0-9àâçèéêîôùûÀÂÇÈÉÊÎÔÙÛ '-]/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    allsafe: /[^A-Za-z0-9\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\s]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/
};

function isEmpty(e) {
    return 0 === Object.keys(e).length && e.constructor === Object
}

function countObj(e) {
    var t, o = 0;
    for (t in e) e.hasOwnProperty(t) && o++;
    return o
}

function removeDupInArray(e, t) {
    var o = [];
    for (var i of e) existInArray(o, i, t) || o.push(i);
    return o
}

function uniqueBetweenArray(e, t, o) {
    var i, n = [];
    for (i of e) existInArray(t, i, o) || n.push(i);
    for (i of t) existInArray(e, i, o) || n.push(i);
    return n
}

function existInArray(e, t, o) {
    for (var i = !notnull(o) || o, n = !1, a = 0, s = e.length; a < s; a++)
        if (i) {
            if (e[a] === t) {
                n = !0;
                break
            }
        } else if (e[a].toLowerCase() === t.toLowerCase()) {
        n = !0;
        break
    }
    return n
}

function removeInArray(e, t) {
    for (var o = 0, i = t.length; o < i; o++)
        if (t[o] === e) {
            t.splice(o, 1);
            break
        } return t
}

function removeInArrayFromProp(e, t, o) {
    for (var i = 0, n = o.length; i < n; i++)
        if (o[i][t] === e) {
            o.splice(i, 1);
            break
        } return o
}

function existInArrayFromProp(e, t, o) {
    for (var i = 0, n = o.length; i < n; i++)
        if (o[i][t] === e) return !0;
    return !1
}

function numberArray(e) {
    for (var t = 0, o = e.length; t < o; t++) e[t] = 0 | e[t];
    return e
}

function windowPopup(e, t, o, i) {
    var n = i ? screen.height / 2 - o / 2 : 0,
        a = i ? screen.width / 2 - t / 2 : 0;
    window.open(e, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + t + ",height=" + o + ",top=" + n + ",left=" + a)
}

function xhr(e, t, o, i, n) {
    var a = n || function() {};
    $.ajax({
        type: e,
        url: t,
        crossdomain: !0,
        data: o,
        success: function(e) {
            i(e, o)
        },
        error: a,
        dataType: "json"
    })
}

function assetName(e) {
    var t = "";
    switch (assetSize) {
        case "hd":
            t = nameToHD(e);
            break;
        default:
            t = e
    }
    return t
}

function animeName(e) {
    var t = "";
    switch (animeSize) {
        case "hd":
            t = nameToHD(e);
            break;
        default:
            t = e
    }
    return t
}

function nameToHD(e) {
    var t = e.substr(e.lastIndexOf("."));
    return e.split(t).join("-hd" + t)
}

function loadImg(e, t) {
    var o = "object" != typeof e[0] ? [e] : e,
        i = o.length,
        n = 0;

    function a() {
        var e = o[n][0],
            t = o[n][1],
            i = new Image;
        i.onload = function() {
            $(t).css({
                "background-image": "url(" + e + ")"
            }), s()
        }, i.onerror = function() {
            var t = e.split("/"),
                o = t[t.length - 1];
            boxDialog.open("Preloading IMG " + o, "ERROR", ["Relaod", "Continue"], [gotoAppUrl, s], !0)
        }, i.src = e
    }

    function s() {
        (++n == i ? t : a)()
    }
    a()
}

function loadSnd(e, t, o, i) {
    var n = new XMLHttpRequest;
    n.open("GET", e, !0), n.responseType = "arraybuffer", n.onload = function() {
        t.decodeAudioData(n.response, function(e) {
            o(e)
        }, function(e) {
            i()
        })
    }, n.onerror = function() {
        i()
    }, n.send()
}

function gotoAppUrl(e) {
    var t = isnull(e) ? appBrowser ? "" : "index.html" : e;
    window.location.href = t
}

function openURL(e, t) {
    var o = isIframe ? window.top : window;
    appDesktop ? _electron.shell.openExternal(e) : (t = isnull(t) ? "_blank" : t, t = appMobile ? "_system" : t, trustAppMobile && isIOS ? cordova.InAppBrowser.open(e, "_system", "hidden=yes,location=no") : o.open(e, t))
}

function redirectTo(e) {
    var t = domainOnline + "url/" + e;
    if (t = appCN ? t + "-cn" : t, appMobile) switch (e) {
        case "facebook":
            t = isIOS ? "fb://page?id=182619895103489" : "fb://page/182619895103489";
            break;
        case "twitter":
            t = "https://twitter.com/incredibox_";
            break;
        case "instagram":
            t = "https://www.instagram.com/incredibox.official/";
            break;
        case "youtube":
            t = "https://www.youtube.com/c/incredibox"
    }
    saveGA("redirection", "open_url", t), openURL(t)
}

function getParameterByName(e) {
    var t = {},
        o = (window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(e, o, i) {
            t[o] = i
        }), null);
    return e in t && (o = t[e]), o
}

function getParameter() {
    return window.location.search
}

function getPageName() {
    return window.location.href.split("/").pop()
}

function getPageNameGA() {
    return -1 != window.location.href.indexOf("app.html") ? "app.html?v=" + getParameterByName("v") : "index.html"
}

function secToText(e) {
    parseInt(e % 1e3 / 100);
    var t = parseInt(e / 1e3 % 60),
        o = parseInt(e / 6e4 % 60),
        i = parseInt(e / 36e5 % 24);
    return i = i < 10 ? "0" + i : i, (o = o < 10 ? "0" + o : o) + ":" + (t = t < 10 ? "0" + t : t)
}

function getTime() {
    return (new Date).getTime()
}

function getTimeAgo(e, t) {
    e = -1 == e.indexOf("/") ? e.split("-").join("/") : e, t = -1 == t.indexOf("/") ? t.split("-").join("/") : t;
    var o = new Date(e),
        i = timeConversion(new Date(t).getTime() - o.getTime());
    return !1 === i ? getStringDate(e) : i
}

function timeConversion(e) {
    var t = (e / 1e3).toFixed(1),
        o = (e / 6e4).toFixed(1),
        i = (e / 36e5).toFixed(1),
        n = (e / 864e5).toFixed(1),
        a = "";
    if (t < 60) {
        var s = Math.round(t);
        a = s.toString() + " " + (s < 2 && notnull(STR("txt.time.tSec.one")) ? STR("txt.time.tSec.one") : STR("txt.time.tSec.other"))
    } else if (o < 60) {
        var l = Math.round(o);
        a = l.toString() + " " + (l < 2 && notnull(STR("txt.time.tMin.one")) ? STR("txt.time.tMin.one") : STR("txt.time.tMin.other"))
    } else if (i < 23) {
        var r = Math.round(i);
        a = r.toString() + " " + (r < 2 && notnull(STR("txt.time.tHou.one")) ? STR("txt.time.tHou.one") : STR("txt.time.tHou.other"))
    } else {
        if (!(n < 10)) return !1;
        var c = Math.round(n);
        a = c.toString() + " " + (c < 2 && notnull(STR("txt.time.tDay.one")) ? STR("txt.time.tDay.one") : STR("txt.time.tDay.other"))
    }
    return STR("txt.ago").split("%{date_time}").join(a)
}

function getDateNow() {
    var e = new Date,
        t = e.getDate(),
        o = e.getMonth() + 1,
        i = e.getFullYear(),
        n = e.getHours(),
        a = e.getMinutes(),
        s = e.getSeconds();
    return t = t < 10 ? String("0" + t) : String(t), o = o < 10 ? String("0" + o) : String(o), n = n < 10 ? n = String("0" + n) : String(n), a = a < 10 ? a = String("0" + a) : String(a), s = s < 10 ? s = String("0" + s) : String(s), String(i + "-" + o + "-" + t + " " + n + ":" + a + ":" + s)
}

function jsonDecode(e) {
    if (isnull(e)) return null;
    var t = e.split("\t").join("").split("\n").join("");
    return JSON.parse(t)
}

function jsonEncode(e) {
    return isnull(e) ? null : JSON.stringify(e)
}

function random(e) {
    return Math.round(Math.random() * e)
}

function decimal(e, t) {
    t = isnull(t) ? 2 : t;
    var o = Math.pow(10, t);
    return Math.round(e * o) / o
}

function numberSpaced(e) {
    if (e) {
        var t = e.toString(),
            o = t.indexOf(".");
        return t.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, function(e, t) {
            return o < 0 || t < o ? e + " " : e
        })
    }
    return 0
}

function trim(e) {
    return isnull(e) ? "" : e = (e = (e = (e = e.split("\t").join("")).split("\n").join("")).split("\r").join("")).replace(/^\s+|\s+$|\s+(?=\s)/g, "")
}

function cleanInputText(e, t) {
    return e = (e = trim(e = ucwords(e))).replace(regexList.max3letters, "")
}

function slugify(e) {
    new RegExp("àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;".split("").join("|"), "g");
    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/&/g, "-and-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "")
}

function addMiddleBreak(e) {
    var t = e.split(" "),
        o = t.length - 1,
        i = Math.ceil(o / 2);
    return t[i] = t[i] + "<br>", t.join(" ")
}

function ucwords(e) {
    return (e = e.toLowerCase()).charAt(0).toUpperCase() + e.slice(1)
}

function uniqnum() {
    return Math.floor((new Date).valueOf() * Math.random())
}

function uniqid(e) {
    var t = e || "";

    function o() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return o() + t + o() + t + o() + t + o() + t + o()
}

function getUniqLink(e) {
    var t = notnull(e) ? e.app : app.version;
    return uniqid() + "-v" + t
}

function isnull(e) {
    return null === e || void 0 === e || "undefined" === e
}

function notnull(e) {
    return null !== e && void 0 !== e && "undefined" !== e
}

function isFunction(e) {
    return e && "[object Function]" === {}.toString.call(e)
}

function copyToClipboard(e) {
    var t = document.createElement("textarea");
    t.value = e, t.setAttribute("readonly", ""), t.style = {
        position: "absolute",
        visibility: "hidden",
        pointerEvents: "none"
    }, document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t)
}

function resetAnimationCSS(e) {
    e.style.animation = "none", e.offsetHeight, e.style.animation = null
}

function transitionEndEventName() {
    var e, t = document.createElement("div"),
        o = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
        };
    for (e in o)
        if (o.hasOwnProperty(e) && void 0 !== t.style[e]) return o[e];
    return null
}

function animationEndEventName() {
    var e, t = document.createElement("div"),
        o = {
            animation: "animationend",
            OAnimation: "oanimationend",
            MozAnimation: "animationend",
            WebkitAnimation: "webkitAnimationEnd"
        };
    for (e in o)
        if (o.hasOwnProperty(e) && void 0 !== t.style[e]) return o[e];
    return null
}

function listenTransition(e, t, o, i) {
    i = !!notnull(i) && i, e.off(transitionEnd).on(transitionEnd, {
        div: e,
        prop: t,
        func: o,
        log: i
    }, transitionComplete)
}

function addTransition(e, t, o, i, n) {
    n = !!notnull(n) && n, e.off(transitionEnd).addClass(t).on(transitionEnd, {
        div: e,
        prop: o,
        func: i,
        log: n
    }, transitionComplete)
}

function removeTransition(e, t, o, i, n) {
    n = !!notnull(n) && n, e.off(transitionEnd).removeClass(t).on(transitionEnd, {
        div: e,
        prop: o,
        func: i,
        log: n
    }, transitionComplete)
}

function transitionComplete(e) {
    notnull(e.data) && notnull(e.data.func) && e.originalEvent.propertyName.replace("-webkit-", "") == e.data.prop && e.data.div.attr("id") == e.target.id && (notnull(e.data.log), e.data.div.off(transitionEnd), e.data.func())
}

function getCSSMatrix(e) {
    if (!isnull(e)) {
        var t = e.css("-webkit-transform") || e.css("-moz-transform") || e.css("-ms-transform") || e.css("-o-transform") || e.css("transform");
        return isnull(t) ? [1] : t.replace(/[^0-9\-.,]/g, "").split(",")
    }
    return [1]
}

function getScale(e) {
    return getCSSMatrix(e)[0]
}

function cssAnimate(e, t) {
    e.addClass(t).one(animationEnd, function(e) {
        $(e.target).removeClass(t)
    })
}

function getEvents(e) {
    var t = $._data(e, "events"),
        o = $._data(document, "events");
    for (var i in o)
        if (o.hasOwnProperty(i))
            for (var n = o[i], a = 0; a < n.length; a++) $(e).is(n[a].selector) && (null == t && (t = {}), t.hasOwnProperty(i) || (t[i] = []), t[i].push(n[a]));
    return t
}

function stopProp(e) {
    notnull(e) && e.stopPropagation()
}
String.prototype.replaceAt = function(e, t) {
    return this.substr(0, e) + t + this.substr(e + t.length)
};
var templateW = 1024,
    templateH = 768,
    stageScale = 1,
    pictoScale = 1,
    poloScale = 1,
    popupScale = 1,
    mixlistScale = 1,
    extendVideo = !1,
    ultrawide = !1;

function getScreenSize() {
    if (screenW = document.body.offsetWidth, screenH = document.body.offsetHeight, viewportW = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), viewportH = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0), trustAppMobile ? (screenW = screen.width, screenH = screen.height, isAndroid && (viewportW > 0 && viewportW < screenW || viewportH > 0 && viewportH < screenH) && (screenW = viewportW, screenH = viewportH)) : (screenW = document.body.offsetWidth, screenH = document.body.offsetHeight), isIOS && screenH > screenW) {
        var e = screenW;
        screenW = screenH, screenH = e
    }
}

function resizeApp() {
    getScreenSize(), trustAppMobile && isIOS && $("html").css({
        position: "relative",
        width: screenW + "px",
        height: screenH + "px"
    });
    var e, t = $("#app-incredibox"),
        o = $("#mixlist");
    $("body").hasClass("fluid") && (e = screenW * templateH / screenH, t.height(templateH), t.width(e), stageScale = screenH / templateH, t.css({
        transform: "scale(" + stageScale + ")"
    }), (ultrawide = screenW / screenH >= 1.8) && $("body").addClass("ultrawide"), checkMobile() && ($("body").addClass("mobile"), popupScale = 1.8, poloScale = 1.15, pictoScale = 1.15, mixlistScale = 1.3));
    var i = t.height(),
        n = t.width();
    if (pageApp) {
        var a = "<style type='text/css'>",
            s = $("#box-top").height(),
            l = $("#box-bottom").height(),
            r = parseInt($("#box-bottom").css("top")),
            c = i - l - s,
            u = n,
            p = getAppBound();
        a += "#lock-pause #top-resume{ height:" + s + "px; }", a += "#game { background-position: 0px " + s + "px; background-size:100% " + c + "px;}", a += "#lock-stage{ top:" + s + "px; }", a += "#box-reading-bar{ top:" + s + "px; }";
        var d, f, m = 400 * u / 1e3;
        if (m < c) d = c, f = 1e3 * c / 400;
        else {
            f = u;
            var v = s + (d = m) - r;
            if (v > 60) {
                extendVideo = !0;
                var h = v;
                r + h > i - s && (d = i - 2 * s, h = l - s), a += "#game #box-bottom.bottomSlide{ transform:translate3d(0px," + h + "px,0px);}", a += ".box-popup.mini .bac, .box-popup.mini .flex { transition: bottom .3s ease-in-out; }", a += ".box-popup.bottomSlide.mini .bac, .box-popup.bottomSlide.mini .flex { bottom: " + s + "px!important; }"
            } else d = c
        }
        $("#box-video").css({
            top: s + "px",
            width: Math.round(f) + "px",
            height: Math.round(d) + "px"
        }), $("#fade-video").css({
            top: s + "px",
            height: d + "px"
        }), $("#box-stage").css({
            transform: "scale(" + poloScale + ")",
            "transform-origin": "center bottom"
        }), $("#box-loader-polo").css({
            transform: "scale(" + poloScale + ")",
            "transform-origin": "center top"
        }), $("#stage-overflow").css({
            height: Math.floor(400 / poloScale) + "px"
        }), $("#box-picto").css({
            transform: "scale(" + pictoScale + ")"
        }), $("#mixlist .scale").css({
            transform: "scale(" + mixlistScale + ")"
        }), $("#mixlist").css("height", p.height / stageScale + p.top + "px"), $("#mixlist #poplist").css("height", Math.round(($("#mixlist").height() - parseFloat($("#mixlist #poplist").css("top"))) / mixlistScale) + "px"), a += "</style>", $(a).appendTo("head")
    }
    if (getAppSizeInfo(), appDesktop && !$("body").hasClass("fluid")) {
        var b, x = templateH + (1100 - templateH);
        $(window).resize(function() {
            getScreenSize(), b = Math.round((screenH - templateH) / 2), screenH > 1100 ? (stageScale = screenH / x, t.css({
                transform: "scale(" + stageScale + ")"
            })) : stageScale > 1 && (stageScale = 1, t.css({
                transform: "scale(" + stageScale + ")"
            })), pageApp && (o.css("height", templateH + b + "px"), resetStagePosition()), getAppSizeInfo()
        }), $(window).resize()
    }
    if (!appBrowser || appBrowserDemo || appBrowserExpo || ($(window).resize(function() {
            getScreenSize(), stageScale = (stageScale = screenH / templateH) > 1 ? 1 : stageScale, t.css({
                transform: "scale(" + stageScale + ")"
            }), pageApp && resetStagePosition()
        }), $(window).resize()), appBrowserExpo) {
        var g = stageScale;
        templateH = screenH, $(window).resize(function() {
            getScreenSize(), stageScale = screenH * g / templateH, t.css({
                transform: "scale(" + stageScale + ")"
            }), resetStagePosition()
        }), $(window).resize()
    }
    $("body").css({
        visibility: "visible"
    })
}

function getAppBound() {
    return document.getElementById("app-incredibox").getBoundingClientRect()
}

function getAppSizeInfo() {
    getAppBound()
}

function resetStagePosition() {
    if (appLoaded) {
        for (var e = 0; e < nbData; e++) listPicto[e].setPosition();
        for (e = 0; e < app.nbpolo; e++) listPolo[e].setPosition()
    }
}
var appMobile = "mobile" == build.platform,
    appDesktop = "desktop" == build.platform,
    appBrowser = "browser" == build.platform,
    appBrowserDemo = !1,
    appBrowserExpo = !1,
    appBrowserSchool = !1,
    featureLocked = !1,
    pageExt = appMobile || appDesktop ? "html" : "php",
    isMouseDevice = checkMouseDevice(),
    isTouchDevice = checkTouchDevice(),
    isHybridDevice = isMouseDevice && isTouchDevice,
    isTouchCapable = isTouchDevice || isHybridDevice,
    isComputer = checkAppDesktop() || checkInBrowser(),
    trustAppMobile = (window.hasOwnProperty("cordova") || "object" == typeof cordova) && void 0 != window.cordova,
    trustAppDesktop = window.hasOwnProperty("_electron") || "_electron" == typeof cordova,
    isIframe = inIframe(),
    isMiniDevice = !1,
    isMobile = !1,
    isOpera = !appMobile && !appDesktop && checkIsOpera(),
    evtClick, evtPress, evtPressEnd, evtMove, isIOS = !1,
    isOSX = !1,
    isWin = !1,
    isAndroid = !1,
    isiPod = !1,
    isiPhone = !1,
    isiPhone5 = !1,
    isiPhone6s = !1,
    isiPhone6sAndMore = !1,
    isiPhoneX = !1,
    isiPad = !1,
    isiPadPro = !1,
    hasWorker = window.Worker || !1,
    hasHBI = !1,
    screenW, screenH, viewportW, viewportH, isRetina = !1,
    assetSize = "",
    animeSize = "",
    isAssetHD = !1,
    isAnimeHD = !1;

function checkSystem() {
    if (appBrowserDemo = !!notnull(getParameterByName("demo")), appBrowserExpo = !!notnull(getParameterByName("expo")), appBrowserSchool = !!notnull(getParameterByName("afs")), featureLocked = (appBrowser || appBrowserDemo) && !appBrowserSchool && !appBrowserExpo, hasNetwork = networkState(), machine = getDeviceInfo(!0), user = getUserInfo(), isAndroid = /android/i.test(machine.osName), isWin = /windows/i.test(machine.osName), isOSX = /mac os/i.test(machine.osName), isIOS = /ios/i.test(machine.osName), getScreenSize(), isiPod = isIOS && /ipod/i.test(machine.osName), isiPhone = isIOS && /iphone/i.test(machine.osName), isiPhone5 = isiPhone && 5 == machine.deviceNumber, isiPhone6s = trustAppMobile && isiPhone && /iPhone8,/i.test(device.model) && !/iPhone8,4/i.test(device.model) || isiPhone && 6 == machine.deviceNumber, isiPhone6sAndMore = isiPhone && (isiPhone6s || machine.deviceNumber > 6), isiPhoneX = isiPhone && 10 == machine.deviceNumber, isiPad = isIOS && /ipad/i.test(machine.deviceModel), isiPadPro = isiPad && checkiPadPro(), isRetina = checkRetina(), isMobile = checkMobile(), isMiniDevice = checkMiniDevice(), hasHBI = isIOS && checkHBI(), trustAppMobile && (screenW > 1024 && screenH > 768 && window.devicePixelRatio > 1 && (assetSize = "hd", animeSize = "hd"), isIOS && ((isiPad || isiPhone && machine.deviceNumber > 5) && (assetSize = "hd"), isiPadPro && (animeSize = "hd"))),assetSize="hd",animeSize="hd", isAssetHD = "hd" == assetSize, isAnimeHD = "hd" == animeSize, "hd" == assetSize && $("img").each(function(e) {
            var t = $(this).attr("src");
            "svg" != t.split(".")[1] && $(this).attr("src", nameToHD(t))
        }), appBrowser && (sndtype = checkAudioFormat("ogg") ? "ogg" : sndtype, vidtype = "mozilla firefox" == machine.browserName && machine.browserVersion <= 48 ? "webm" : "mp4"), setPointerEvent(), appDesktop && $("body").addClass("noPadding appDesktop"), !appBrowser || appBrowserDemo || appBrowserExpo || appBrowserSchool || $("body").addClass("noPadding appBrowser"), appBrowserDemo && $("body").addClass("fluid appBrowserDemo"), appBrowserExpo && $("body").addClass("fluid expo"), appBrowserSchool && $("body").addClass("noPadding afs"), appMobile && $("body").addClass("fluid"), isMouseDevice && !isTouchDevice && $("body").addClass("mouseEvent"), featureLocked && $("body").addClass("featureLocked"), hasHBI && $("body").addClass("hasHBI"), isiPhoneX && $("body").addClass("iPhoneX"), isOpera && $("body").addClass("isOpera"), trustAppDesktop && "steam" == build.store && "YXJw" != btoa(_electron.app.commandLine.getSwitchValue("arg"))) throw new BoxDialog("#pop-dialog").open("Incredibox needs to run from<br>your Steam library.<br>Thanks for your support!", "&#129488;", [], !0, !0), new Error("Please connect to your Steam account")
}

function checkHBI() {
    if (trustAppMobile) {
        if (isiPad && !/11,1|11,2|11,3|11,4|11,6|11,7/i.test(device.model) && parseInt(device.model.replace("iPad", "").split(",")[0] >= 8)) return !0;
        if (isiPhone && !/10,1|10,2|10,4|10,5|12,8/i.test(device.model) && parseInt(device.model.replace("iPhone", "").split(",")[0] >= 10)) return !0
    }
    return !1
}

function getListUUID() {
    var e = [];
    e.push(machine.uuid);
    var t = storage.getAllItem();
    for (var o in t) {
        if (-1 != o.indexOf("uuid-")) "" != o.replace("uuid-", "") ? e.push(o.replace("uuid-", "")) : storage.removeItem(o)
    }
    return removeDupInArray(e, !1)
}

function functionExist() {
    "function" != typeof initAnalytics && (window.self.initAnalytics = function() {
        return !1
    }, window.self.saveGA = function() {
        return !1
    })
}

function secureIframe() {}

function checkInBrowser() {
    return document.URL.indexOf("http://") > -1 || document.URL.indexOf("https://") > -1
}

function checkOnDevice() {
    return !!navigator.userAgent.match(/(iPhone|iPod|iPad|Android)/)
}

function checkMobile() {
    return !!(isiPod || isiPhone || screenW <= 926 && screenH <= 504)
}

function checkMiniDevice() {
    return !isComputer && (screenW <= 568 && !isRetina)
}

function checkRetina() {
    return window.devicePixelRatio > 1 || !(!window.matchMedia || !window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)").matches)
}

function checkAppDesktop() {
    return navigator.userAgent.toLowerCase().indexOf(" electron/") > -1
}

function checkIsOpera() {
    var e = navigator.userAgent.toLowerCase();
    return e.indexOf("opera") > -1 || e.indexOf("opr") > -1
}

function checkTouchDevice() {
    var e = !1;
    try {
        document.createEvent("TouchEvent"), e = !0
    } catch (e) {}
    return ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && (e = !0), window.matchMedia("(pointer: coarse)").matches && (e = !0), e
}

function checkMouseDevice() {
    var e = !1;
    return window.matchMedia("(hover: hover)").matches && window.matchMedia("(pointer: fine)").matches && (e = !0), e
}

function getAppData() {
    return {
        build: build,
        machine: machine,
        user: user
    }
}

function checkAudioFormat(e) {
    e = e || "mp3";
    var t = document.createElement("audio");
    return !(!t.canPlayType || !t.canPlayType("audio/" + e + ";").replace(/no/, ""))
}

function checkSupported() {
    var e = !!window.HTMLCanvasElement,
        t = window.AudioContext || window.webkitAudioContext || !1,
        o = "string" == typeof(new XMLHttpRequest).responseType,
        i = !isnull(transitionEnd) && !isnull(animationEnd);
    return window.AudioContext = t, e ? t ? o ? i ? "ok" : "CSS3 is not supported" : "XHR is not supported" : "Audio API is not supported" : "Canvas is not supported"
}

function setPointerEvent() {
    isHybridDevice && !isIOS ? (evtClick = "touchstart click", evtPress = "touchstart mousedown", evtPressEnd = "touchend mouseup", evtMove = "touchmove mousemove") : isTouchDevice ? (evtClick = "touchstart", evtPress = "touchstart", evtPressEnd = "touchend", evtMove = "touchmove") : (evtClick = "click", evtPress = "mousedown", evtPressEnd = "mouseup", evtMove = "mousemove")
}

function initRightClick() {}

function networkOn() {
    hasNetwork = !0, gaShouldTrack && !gaAlreadySet && initAnalytics(), storage.restoreAllMix()
}

function networkOff() {
    hasNetwork = !1
}

function networkState() {
    var e = !1;
    return notnull(navigator.onLine) ? e = navigator.onLine : notnull(navigator.network) && (e = !(navigator.network.connection.type == Connection.NONE)), e
}

function bugBluetoothLatency() {
    return !notnull(getParameterByName("bluetooth")) && (!!(trustAppMobile && isAndroid && contextAudio.baseLatency > .2 && window.hasOwnProperty("bluetoothle")) && (bluetoothle.initialize(function(e) {
        switch (e.status) {
            case "enabled":
                bluetoothle.disable();
                break;
            case "disabled":
                $("#fade-all").removeClass(), boxDialog.open(STR("dial.bluetoothLatencyText"), STR("dial.bluetoothLatencyTitle"), [STR("bt.ok")], [function() {
                    window.location.href = "?v=" + appNumberVersion + "&bluetooth=1"
                }])
        }
    }, {
        statusReceiver: !0
    }), !0))
}

function bugSampleRate() {
    return !1
}
window.devicePixelRatio = window.devicePixelRatio || 1, functionExist(), secureIframe();
var audioPort = "";

function checkAudioRoute() {}

function checkStateAudioContext() {
    notnull(contextAudio) && "interrupted" == contextAudio.state && (contextAudio.resume(), rebuildAudioContext())
}

function rebuildAudioContext() {
    var e = contextAudio.createBuffer(1, 1, 44100),
        t = contextAudio.createBufferSource();
    t.buffer = e, t.connect(contextAudio.destination), t.start(0), t.disconnect(), contextAudio.close(), (contextAudio = new AudioContext).onstatechange = listenStateAudioCtx()
}

function listenStateAudioCtx() {}

function initSilentMode() {}

function detectSilentMode() {}
var immersiveMode = !1;

function launchImmersiveMode() {
    trustAppMobile && isAndroid && !immersiveMode && (immersiveMode = !0, AndroidFullScreen.isSupported(function() {
        AndroidFullScreen.isImmersiveModeSupported(function() {
            AndroidFullScreen.setSystemUiVisibility(AndroidFullScreen.SYSTEM_UI_FLAG_LAYOUT_STABLE | AndroidFullScreen.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION | AndroidFullScreen.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | AndroidFullScreen.SYSTEM_UI_FLAG_HIDE_NAVIGATION | AndroidFullScreen.SYSTEM_UI_FLAG_FULLSCREEN | AndroidFullScreen.SYSTEM_UI_FLAG_IMMERSIVE_STICKY, function() {}, function() {}), AndroidFullScreen.immersiveMode(function() {}, errorImmersiveMode)
        }, errorImmersiveMode)
    }, errorImmersiveMode))
}

function errorImmersiveMode(e) {}

function getUserInfo() {
    return {
        guid: storage.getItem("user-guid") || "",
        djname: storage.getItem("user-djname") || "",
        lang: storage.getItem("user-lang") || ""
    }
}

function setUserInfo(e) {
    notnull(e.guid) && (user.guid = e.guid, storage.setItem("user-guid", user.guid), cloud.save("user-guid", user.guid)), notnull(e.djname) && (user.djname = e.djname, storage.setItem("user-djname", user.djname), cloud.save("user-djname", user.djname)), notnull(e.lang) && (user.lang = e.lang, storage.setItem("user-lang", user.lang), cloud.save("user-lang", user.lang)), user = getUserInfo()
}

function getDeviceInfo(e) {
    var t, o, i, n = navigator.userAgent || navigator.vendor || window.opera,
        a = n.toLowerCase(),
        s = "(?)";
    /(fban|fbios|fbav|fbbv|fbid)/gi.test(a) ? s = "Facebook" : /(twitter)/gi.test(a) && (s = "Twitter");
    var l = "(?)";
    trustAppMobile ? l = device.platform : /(windows|win16)/gi.test(a) ? l = "Windows" : /(android)/gi.test(a) ? l = "Android" : /(iphone|ipad|ipod)/gi.test(a) ? l = "iOS" : /(mac os x)/gi.test(a) ? l = "Mac OS X" : /(macppc|macintel|mac_powerpc|macintosh)/gi.test(a) && (l = "Mac OS");
    var r = "(?)",
        c = a;
    trustAppMobile && (c = device.model), /(windows phone|windows phone)/gi.test(c) ? r = "Windows phone" : /(windows|win16)/gi.test(c) ? r = "PC" : /(android)/gi.test(c) ? r = "Android" : /(ipad)/gi.test(c) ? r = "iPad" : /(iphone)/gi.test(c) ? r = "iPhone" : /(ipod)/gi.test(c) ? r = "iPod" : /(mac)/gi.test(c) && (r = "Mac");
    var u = "(?)";
    trustAppMobile ? u = device.model : void 0 != window.navigator && void 0 != navigator.platform && (u = navigator.platform);
    var p = "(?)";
    trustAppMobile ? p = device.version : "Windows" == l ? /(windows 10.0|windows nt 10.0)/gi.test(a) ? p = "10" : /(windows 8.1|windows nt 6.3)/gi.test(a) ? p = "8.1" : /(windows 8|windows nt 6.2)/gi.test(a) ? p = "8" : /(windows 7|windows nt 6.1)/gi.test(a) ? p = "7" : /(windows nt 6.0)/gi.test(a) ? p = "Vista" : /(windows nt 5.2)/gi.test(a) ? p = "Server 2003" : /(windows nt 5.1|windows xp)/gi.test(a) ? p = "XP" : /(windows nt 5.0|windows 2000)/gi.test(a) ? p = "2000" : /(win 9x 4.90|windows me)/gi.test(a) ? p = "ME" : /(windows 98|win98)/gi.test(a) ? p = "98" : /(windows 95|win95|windows_95)/gi.test(a) ? p = "95" : /(windows nt 4.0|winnt4.0|winnt|windows nt)/gi.test(a) ? p = "NT 4.0" : /(windows ce)/gi.test(a) ? p = "CE" : /(win16)/gi.test(a) && (p = "3.11") : "Android" == l ? (t = "Android", o = n.toLowerCase().indexOf(t.toLowerCase()), i = parseFloat(n.slice(o + t.length, o + t.length + 6)), p = isNaN(i) ? p : i) : "iOS" == l ? (t = "OS", o = n.toLowerCase().indexOf(t.toLowerCase()), i = n.slice(o + t.length, o + t.length + 6), i = parseFloat(i.replace("_", ".")), p = isNaN(i) ? p : i) : -1 != l.indexOf("Mac OS") && (t = -1 != l.indexOf("Mac OS X") ? "Mac OS X" : "Mac OS", o = n.toLowerCase().indexOf(t.toLowerCase()), i = n.slice(o + t.length, o + t.length + 6), i = parseFloat(i.replace("_", ".")), p = isNaN(i) ? p : i);
    var d = 0;
    if ("iOS" == l)
        if (trustAppMobile) void 0 != appleModel[device.model] && "iPhone" == r && (d = appleModel[device.model].replace("iPhone", "").split(" ")[0], d = /SE/i.test(d) ? 7 : /X/i.test(d) ? 10 : parseInt(d));
        else if ("iPhone" == r) {
        var f = window.screen.width,
            m = window.screen.height;
        320 == f && 480 == m ? d = 4 : 320 == f && 568 == m ? d = 5 : 375 == f && 667 == m ? d = 6 : 414 == f && 736 == m ? d = 6 : 375 == f && 812 == m ? d = 10 : 414 == f && 896 == m && (d = 10), 3 == window.devicePixelRatio && (812 == f && 375 == m || 896 == m && 414 == f) && (d = 10)
    }
    var v = "";
    trustAppMobile ? v = build.os : /mac os/i.test(l) ? v = "osx" : /windows/i.test(l) ? v = "win" : /android/i.test(l) ? v = "and" : /ios/i.test(l) && (v = "ios");
    navigator.appVersion;
    var h, b, x, g = navigator.appName,
        k = "" + parseFloat(navigator.appVersion),
        $ = parseInt(navigator.appVersion, 10); - 1 != (b = n.indexOf("OPR/")) ? (g = "Opera", k = n.substring(b + 4)) : -1 != (b = n.indexOf("Opera")) ? (g = "Opera", k = n.substring(b + 6), -1 != (b = n.indexOf("Version")) && (k = n.substring(b + 8))) : -1 != (b = n.indexOf("Edge")) ? (g = "Microsoft Edge", k = n.substring(b + 5)) : -1 != (b = n.indexOf("MSIE")) ? (g = "Microsoft Internet Explorer", k = n.substring(b + 5)) : -1 != (b = n.indexOf("Trident")) ? (g = "Microsoft Internet Explorer", -1 != (b = n.indexOf("rv:")) && (k = n.substring(b + 3))) : -1 != (b = n.indexOf("CriOS")) && /iphone|ipod|ipad/i.test(n) ? (g = "Google Chrome for IOS", k = n.substring(b + 6)) : -1 != (b = n.indexOf("Chrome")) ? (g = "Google Chrome", k = n.substring(b + 7)) : -1 != (b = n.indexOf("Safari")) ? (g = "Safari", k = n.substring(b + 7), -1 != (b = n.indexOf("Version")) && (k = n.substring(b + 8))) : -1 != (b = n.indexOf("Firefox")) ? (g = "Mozilla Firefox", k = n.substring(b + 8)) : (h = n.lastIndexOf(" ") + 1) < (b = n.lastIndexOf("/")) && (g = n.substring(h, b), k = n.substring(b + 1), g.toLowerCase() == g.toUpperCase() && (g = navigator.appName)), -1 != (x = k.indexOf(";")) && (k = k.substring(0, x)), -1 != (x = k.indexOf(" ")) && (k = k.substring(0, x)), $ = parseInt("" + k, 10), isNaN($) && (k = "" + parseFloat(navigator.appVersion), $ = parseInt(navigator.appVersion, 10));
    var w = "";
    trustAppMobile ? w = device.uuid : appDesktop ? w = _electron.machine.machineIdSync() : notnull(storage.getItem("tmp-uuid")) ? w = storage.getItem("tmp-uuid") : (w = "tmp-" + uniqid("-"), storage.setItem("tmp-uuid", w));
    var C = {
        osName: l,
        osTiny: v,
        osVersion: p.toString(),
        deviceModel: r,
        deviceName: u,
        deviceNumber: d,
        browserName: g,
        browserVersion: $,
        browserFullVersion: k,
        browserAppName: navigator.appName,
        browserUserAgent: navigator.userAgent,
        language: navigator.language || "",
        webviewEmbed: s,
        uuid: w
    };
    if (!0 === e)
        for (var y in C) "string" == typeof C[y] && (C[y] = C[y].toLowerCase());
    if (trustAppMobile)
        for (var D in device);
    for (var S in C);
    return C
}

function checkiPadPro() {
    return !!isIOS && (trustAppMobile ? void 0 != appleModel[device.model] && /ipad pro/i.test(appleModel[device.model]) : window.devicePixelRatio > 1 && 1366 == screenW && 1024 == screenH)
}

function checkiPadProBig() {
    return !!isIOS && (trustAppMobile ? void 0 != appleModel[device.model] && /ipad pro/i.test(appleModel[device.model]) && !/9,7/i.test(appleModel[device.model]) : window.devicePixelRatio > 1 && 1366 == screenW && 1024 == screenH)
}
var appleModel = {};

function initRulesCSS() {
    var e = "";
    e += '#sp-select .icon .img { background-image: url("' + assetName("img/switch-bt.png") + '"); }', e += '#sp-select .icon .txt { background-image: url("' + assetName("img/switch-bt.png") + '"); }', pageApp && (e += `\n\t\t\t:root {\n\t\t\t\t--colBck : ${app.colBck};\n\t\t\t\t--col0 : ${app.col0};\n\t\t\t\t--col1 : ${app.col1};\n\t\t\t\t--col2 : ${app.col2};\n\t\t\t\t--col3 : ${app.col3};\n\t\t\t\t--col4 : ${app.col4};\n\t\t\t}\n\n\t\t\t#game { \n\t\t\t\tbackground-image: url('${assetName(app.folder+"img/game-bck.gif")}');\n\t\t\t}\n\t\t\t`), appBrowser && (e += `.bt-store .bck{ background-image: url(${domainOnline}img/bt-store-all-${currentLanguage.split("-")[0]}.png); }`);
    var t = document.head || document.getElementsByTagName("head")[0],
        o = document.createElement("style");
    t.appendChild(o), o.type = "text/css", o.appendChild(document.createTextNode(e))
}

function BoxDialog(e) {
    var t = this,
        o = $(e);

    function i(e) {
        e.preventDefault(), stopProp(e), $(e.target).addClass("active");
        var t = !0;
        void 0 !== e.data.func && (e.data.func === n && (t = !1), e.data.func()), t && n()
    }

    function n() {
        t.neverClose || t.close()
    }
    return this.$div = o, this.$bck = o.find(".bac"), this.$scale = o.find(".scale"), this.$box = o.find(".box"), this.$pop = o.find(".pop"), this.$pop.$title = o.find(".title"), this.$pop.$text = o.find(".text"), this.$pop.$content = o.find(".content"), this.opened = !1, this.neverClose = !1, this.isOpen = function() {
        return t.opened
    }, this.open = function(e, a, s, l, r, c, u) {
        t.isOpen() && (removeInArray("popup-dialog", focusHistory), deleteFocus(), t.killall()), o.on(evtPress, stopProp), t.opened = !0, t.neverClose = !isnull(c) && c, e = isnull(e) ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" : e, a = isnull(a) ? "Info" : a, s = isnull(s) ? ["Close"] : s, l = isnull(l) ? [n] : l, r = !isnull(r) && r, notnull(u) && o.attr("data-name", u), o.addClass("show"), t.clean(), t.$pop.$title.html(a), t.$pop.$text.html(e);
        for (var p = 0, d = s.length; p < d; p++) {
            l[p];
            var f = s[p];
            t.$pop.$content.append('<div class="bt-mini light" id="bt-mini' + p + '"><div class="txt">' + f + '</div><div class="hitzone"></div></div>'), t.$pop.$content.find("#bt-mini" + p).off().on(evtClick, {
                func: l[p]
            }, i)
        }
        r && o.css({
            "z-index": "9999"
        }), t.fadeInBck(), t.$box.removeClass("open close").addClass("open"), createFocus("popup-dialog")
    }, this.close = function(e) {
        notnull(e) && e.preventDefault(), t.fadeOutBck(), t.$box.removeClass("open close").addClass("close").one(animationEnd, function(e) {
            $(e.target).removeClass("close"), o.removeClass("show"), o.removeAttr("data-name"), o.off(), t.clean(), t.opened = !1, removeInArray("popup-dialog", focusHistory), createFocus(focusHistory[focusHistory.length - 1])
        })
    }, this.killall = function() {
        removeInArray("popup-dialog", focusHistory), o.off(), o.removeAttr("data-name"), o.removeClass("show"), t.clean(), t.$box.removeClass("open close"), resetAnimationCSS(t.$box[0]), t.$bck.removeClass("animateFadeIn animateFadeOut"), resetAnimationCSS(t.$bck[0]), t.opened = !1
    }, this.fadeInBck = function(e) {
        e ? t.$bck.addClass("mini") : t.$bck.removeClass("mini"), t.$bck.addClass("animateFadeIn")
    }, this.fadeOutBck = function() {
        t.$bck.addClass("animateFadeOut").one(animationEnd, function(e) {
            $(e.target).removeClass("animateFadeIn animateFadeOut")
        })
    }, this.clean = function() {
        t.$pop.$content.find(".bt-mini").off(), t.$pop.$content.empty(), t.$pop.$title.empty(), t.$pop.$text.empty()
    }, this
}

function Popup(e) {
    var t, o = this,
        i = $(e),
        n = i.find(".bac"),
        a = i.find(".box"),
        s = i.find("span.icon"),
        l = i.find(".container"),
        r = i.find(".box-tab .tab").length > 0,
        c = !0,
        u = !0;

    function p() {
        c = !0, n.removeClass("animateFadeIn animateFadeOut"), o.closeComplete()
    }

    function d(e) {
        u = !0, a.removeClass("slideUp slideDown").get(0).offsetHeight, t.onBoxCloseEnd(), o.closeComplete(), tryfunc(e)
    }

    function f(e) {
        notnull(o.onCloseTab) && o.onCloseTab(), i.find(".tab.active").removeClass("active"), i.find(".pop.active").removeClass("active");
        var t = $(this),
            n = i.find(".pop#" + t.attr("id").replace("tab-", "pop-"));
        t.addClass("active"), n.addClass("active"), createFocus(n.attr("id"))
    }
    return this.$popup = i, this.$icon = s, this.objCustom = t, this.open = function(e) {
        notnull(t) && e.name == t.name || (i.hasClass("show") || i.addClass("show"), n.hasClass("animateFadeIn") || o.showBck(), a.hasClass("slideUp") ? o.hideBox(function() {
            o.open(e)
        }) : (o.custom(e), o.showBox()))
    }, this.close = function(e) {
        o.hideBck(e), o.hideBox(null, e)
    }, this.closeComplete = function() {
        c && u && (o.reinit(), tryfunc(t.onCloseComplete), t = null)
    }, this.reinit = function() {
        t.static || l.empty(), i.removeClass("show mini middle info action action-back no-action"), i.removeAttr("data-name"), n.removeClass("animateFadeIn animateFadeOut"), a.removeClass("slideUp slideDown").get(0).offsetHeight
    }, this.custom = function(e) {
        t = {
            static: e.static || !1,
            bodyclose: e.bodyclose || !1,
            bckclose: e.bckclose || !1,
            name: e.name || "no-name",
            icntype: e.icntype || "",
            bcksize: e.bcksize || "",
            content: e.content || "",
            onBoxOpenStart: e.onBoxOpenStart || nada,
            onBoxOpenEnd: e.onBoxOpenEnd || nada,
            onBoxCloseStart: e.onBoxCloseStart || nada,
            onBoxCloseEnd: e.onBoxCloseEnd || nada,
            onCloseComplete: e.onCloseComplete || nada
        }, i.removeClass("mini middle info action action-back no-action"), i.addClass(t.bcksize), i.attr("data-name", t.name), "" != t.icntype && (i.addClass(t.icntype), s.find("svg use").attr("xlink:href", "#ic-" + ("action" == t.icntype ? "close" : "action-back" == t.icntype ? "navl" : "info"))), t.static || l.html(t.content)
    }, this.refresh = function() {
        notnull(t) && notnull(t.content) && l.html(t.content)
    }, this.showBck = function() {
        c = !1, n.addClass("animateFadeIn").one(animationEnd, function() {})
    }, this.hideBck = function(e) {
        !0 === e ? p() : n.addClass("animateFadeOut").one(animationEnd, function() {
            p()
        })
    }, this.showBox = function() {
        u = !1, t.onBoxOpenStart(), r && (i.find(".box-tab .tab").first().trigger(evtClick.split(" ")[0]), deleteFocus()), a.addClass("slideUp").one(animationEnd, function() {
            t.bodyclose && $body.on(evtClick, o.clickBck), t.bckclose && n.on(evtClick, o.close), t.onBoxOpenEnd()
        })
    }, this.hideBox = function(e, i) {
        t.bodyclose && $body.off(evtClick, o.clickBck), t.bckclose && n.off(evtClick, o.close), t.onBoxCloseStart(), !0 === i ? d(e) : a.addClass("slideDown").one(animationEnd, function() {
            d(e)
        })
    }, this.clickBck = function(t) {
        if (t.preventDefault(), $(t.target).closest(e + " .box").length > 0);
        else if (r) {
            var i = notnull((t = ~t.type.indexOf("touch") ? t.originalEvent : t).targetTouches) ? t.targetTouches[0] : t;
            Math.round(i.pageY) > 100 * stageScale && o.close()
        } else o.close()
    }, this.isOpen = function() {
        return i.hasClass("show")
    }, this.getName = function() {
        return notnull(t) && notnull(t.name) ? t.name : ""
    }, r && i.find(".box-tab .tab").each(function(e) {
        $(this).on(evtClick, f)
    }), this
}

function checkIfPopupOpen() {
    notnull(boxPopup) && boxPopup.isOpen() && boxPopup.close(!0)
}

function boxInfoCustom() {
    var e = Math.floor(3 * screenW / templateW);
    e = e < 0 ? 1 : e;
    var t = boxInfo.$popup.find("#pop-tuto .slideshow");
    return t.$box = boxInfo.$popup.find("#pop-tuto .slideshow .img-box"), t.$btL = boxInfo.$popup.find("#pop-tuto .bt").first(), t.$btR = boxInfo.$popup.find("#pop-tuto .bt").last(), t.init = function() {
        var t = this,
            o = 0,
            i = 0,
            n = 0,
            a = 0,
            s = this.find(".overflow-box").width(),
            l = this.find("img").length;
        this.onPress = function(e) {
            $body.off(evtPressEnd, t.onRelease), t.$box.off(evtMove, t.onMove), (e = ~e.type.indexOf("touch") ? e.originalEvent : e).preventDefault();
            var i = notnull(e.targetTouches) ? e.targetTouches[0] : e;
            o = i.pageX, t.$box.on(evtMove, t.onMove), $body.on(evtPressEnd, t.onRelease)
        }, this.onMove = function(n) {
            n.preventDefault(), (n = ~n.type.indexOf("touch") ? n.originalEvent : n).preventDefault();
            var s = notnull(n.targetTouches) ? n.targetTouches[0] : n;
            i = -1 * Math.round(o - s.pageX), t.$box.css({
                transform: "translateX(" + (a + 1.6 * i / e) + "px)"
            })
        }, this.onRelease = function(e) {
            e.preventDefault(), $body.off(evtPressEnd, t.onRelease), t.$box.off(evtMove, t.onMove), i < -100 ? n != l - 1 ? t.slide("left") : t.slide() : i > 100 && 0 !== n ? t.slide("right") : t.slide(), o = 0, i = 0
        }, this.slide = function(e) {
            $body.off(evtPressEnd, t.onRelease), t.$box.off(evtMove, t.onMove), t.$box.addClass("slide"), "left" === e ? n++ : "right" === e && n--, a = -s * n, t.$box.css({
                transform: "translateX(" + String(a) + "px)"
            })
        }, this.clickLeft = function(e) {
            e.preventDefault(), 0 !== n && t.slide("right")
        }, this.clickRight = function(e) {
            e.preventDefault(), n != l - 1 && t.slide("left")
        }, this.reinit = function() {
            n > 0 && (o = i = n = a = 0, t.slide())
        }, t.$box.on(evtPress, t.onPress), this.$btL.on(evtClick, this.clickLeft), this.$btR.on(evtClick, this.clickRight)
    }, t.init(), t
}

function initPopupIndexApp() {
    (boxInfo = new Popup(".box-popup#pop-info")).$slide = boxInfoCustom(), boxInfo.onCloseTab = boxInfo.$slide.reinit, boxParam = new Popup(".box-popup#pop-param"), $("#pop-language .box-lang .bt-mini").on(evtClick, function(e) {
        e.preventDefault(), preventAction(function() {
            clickBtLang(e)
        })
    }), $("#pop-follow .bt.facebook").on("click", function(e) {
        e.preventDefault(), redirectTo("facebook")
    }), $("#pop-follow .bt.twitter").on("click", function(e) {
        e.preventDefault(), redirectTo("twitter")
    }), $("#pop-follow .bt.instagram").on("click", function(e) {
        e.preventDefault(), redirectTo("instagram")
    }), $("#pop-follow .bt.youtube").on("click", function(e) {
        e.preventDefault(), redirectTo("youtube")
    }), $("#pop-follow .bt.tumblr").on("click", function(e) {
        e.preventDefault(), redirectTo("tumblr")
    }), $("#pop-follow #img-shop").on("click", function(e) {
        e.preventDefault(), redirectTo("shop-all")
    }), $("#pop-credit #bt-feedback").on("click", function(e) {
        e.preventDefault(), preventAction(sendFeedback)
    }), $("#pop-credit #bt-rating").on("click", function(e) {
        e.preventDefault();
        var t = isIOS || appDesktop && isOSX ? build.storeRateURL : build.storeURL;
        preventAction(function() {
            openURL(t)
        })
    }), $("#pop-credit #bt-faq").on("click", function(e) {
        e.preventDefault(), redirectTo("faq")
    }), $("#pop-credit #bt-privacy").on("click", function(e) {
        e.preventDefault(), showPP()
    }), appBrowserExpo && $("#pop-credit .container").append("www.incredibox.com")
}

function showPP(e) {}

function hidePP() {}

function refusePP() {}

function acceptPP(e) {}

function dialogGetApp(e, t) {
    notnull(e) && e.preventDefault(), appBrowserDemo ? popupGetApp(t) : appBrowser ? popupGetAppBrowser(t) : boxDialog.open("To access this feature you have to download the Incredibox app. Let's go? &#128273;", "&#128274; Locked", [STR("bt.sure"), STR("bt.later")], [], !0)
}

function popupGetApp(e) {
    var t = !0 === e ? "action-back" : "action",
        o = "<div class='bt bt-long' id='bt-getapp'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-download'></use></svg><div class='txt'>Get app</div></div><div class='hitzone'></div></div>",
        i = "store";
    o = isIOS ? "<div class='bt-store' id='bt-getapp'><div class='bck appstore'></div></div>" : o, i = isIOS ? "appstore" : i, o = isAndroid ? "<div class='bt-store' id='bt-getapp'><div class='bck playstore'></div></div>" : o, i = isAndroid ? "playstore" : i, boxPopup.open({
        name: "get-full-app",
        icntype: t,
        content: `\n\t\t\t<div class='title'>Feature locked</div>\n\t\t\t<div class='text'>\n\t\t\t\tWant to access all app's features?<br>\n\t\t\t\tEasy, just download Incredibox!\n\t\t\t\t${o}\n\t\t\t\t<div class='mini'>No ads, many musical style, record, share, download your mixes... and many more &#129321;</div>\n\t\t\t</div>`,
        onBoxOpenEnd: function() {
            !0 === e ? boxPopup.$icon.on(evtClick, popupRecok) : boxPopup.$icon.on(evtClick, boxPopup.close), boxPopup.$popup.find("#bt-getapp").on("click", function(e) {
                e.preventDefault(), redirectTo(i)
            })
        },
        onBoxCloseStart: function() {
            boxPopup.$icon.off(), boxPopup.$popup.find("#bt-getapp").off()
        }
    })
}

function popupGetAppBrowser(e) {
    var t = !0 === e ? "action-back" : "action",
        o = "App exclusivity",
        i = "This feature is only available in the Incredibox App.<br>Choose your store below and access the full experience!",
        n = "More info",
        a = void 0 != getParameterByName("lang") && "en" != getParameterByName("lang") ? getParameterByName("lang") + "/" : "",
        s = domainOnline + a + "app";
    isIframe && void 0 != window.top.i18n && (o = window.top.i18n.app_exclusivity, i = window.top.i18n.feature_only_inapp + "<br>" + window.top.i18n.access_full_xp, n = window.top.i18n.bt_more_info), boxPopup.open({
        name: "get-full-app-browser",
        icntype: t,
        content: `\n\t\t\t<div class='title'>${o} &#128521;</div>\n\t\t\t<div class='text'>${i}</div>\n\t\t\t<div class='box-bt-store'>\n\t\t\t\t<a href="https://apps.apple.com/app/incredibox/id1093131935" target="_blank" class="bt-store"><div class="bck appstore"></div></a>\n\t\t\t\t<a href="https://play.google.com/store/apps/details?id=com.sofarsogood.incredibox" target="_blank" class="bt-store"><div class="bck playstore"></div></a>\n\t\t\t\t<a href="https://www.amazon.fr/So-Far-Good-Incredibox/dp/B07BKZCDHT/" target="_blank" class="bt-store"><div class="bck amazonstore"></div></a>\n\t\t\t\t<a href="https://store.steampowered.com/app/1545450/Incredibox/" target="_blank" class="bt-store"><div class="bck steam"></div></a>\n\t\t\t\t<a href="https://apps.apple.com/app/id1437906083" target="_blank" class="bt-store"><div class="bck macappstore"></div></a>\n\t\t\t\t<a href="https://www.microsoft.com/fr-fr/p/incredibox/9pdjpp8scs9k?rtc=1&activetab=pivot:overviewtab" target="_blank" class="bt-store"><div class="bck windowsstore"></div></a>\n\t\t\t</div>\n\t\t\t<div class="bt-mini light bt-ic"><div class="icn-box"><svg class="icn-svg"><use xlink:href="#ic-navr"></use></svg></div><div class="txt">${n}</div><div class="hitzone"></div></div>\n\t\t\t`,
        onBoxOpenEnd: function() {
            !0 === e ? boxPopup.$icon.on(evtClick, popupMixSaved) : boxPopup.$icon.on(evtClick, boxPopup.close), boxPopup.$popup.find(".bt-mini").on("click", function(e) {
                e.preventDefault(), openURL(s, "_self")
            })
        },
        onBoxCloseStart: function() {
            boxPopup.$icon.off(), boxPopup.$popup.find(".bt-mini").off()
        }
    })
}

function popupInfo() {
    deleteFocus(), boxInfo.open({
        static: !0,
        bckclose: !0,
        name: "popup-info",
        onBoxOpenEnd: function() {
            createFocus("popup-info")
        },
        onBoxCloseStart: function() {
            deleteFocus(), focusHistory = []
        },
        onBoxCloseEnd: function() {
            boxInfo.$slide.reinit()
        },
        onCloseComplete: function() {
            createFocus(pageApp ? "home" : "index-select")
        }
    })
}

function popupParam() {
    deleteFocus(), boxParam.open({
        static: !0,
        bckclose: !0,
        name: "popup-param",
        onBoxOpenEnd: function() {
            createFocus("popup-param")
        },
        onBoxCloseStart: function() {
            deleteFocus(), focusHistory = []
        },
        onCloseComplete: function() {
            createFocus(pageApp ? "home" : "index-select")
        }
    })
}

function popupSwitch() {
    deleteFocus(), boxSwitch.open({
        static: !0,
        bckclose: !0,
        name: "popup-switch",
        onBoxOpenEnd: function() {
            createFocus("popup-switch")
        },
        onBoxCloseStart: function() {
            deleteFocus(), focusHistory = []
        },
        onCloseComplete: function() {
            createFocus("home")
        }
    })
}

function popupTutoDrag() {
    boxPopup.open({
        name: "drag-and-drop",
        icntype: "info",
        bcksize: "mini",
        bodyclose: !0,
        content: `\n\t\t\t<div class='title'>${STR("pop.dragDropTitle")}</div>\n\t\t\t<div class='text'>${STR("txt.tuto1")}</div>`,
        onBoxCloseEnd: function() {
            storage.setItem("popupTutoDrag", "viewed")
        }
    })
}

function popupDrag() {
    boxPopup.open({
        name: "drag-and-drop",
        icntype: "info",
        bcksize: "mini",
        bodyclose: !0,
        content: `\n\t\t\t<div class='title'>${STR("pop.dragDropTitle")}</div>\n\t\t\t<div class='text'>${STR("pop.dragDropText")}</div>`
    })
}

function popupShort() {
    boxPopup.open({
        name: "too-short",
        icntype: "info",
        bcksize: "mini",
        bodyclose: !0,
        content: `\n\t\t\t<div class='title'>${STR("pop.toShortTitle")}</div>\n\t\t\t<div class='text'>${STR("pop.toShortText").split("%{minimum_time}").join(app.recmintime)}</div>`
    })
}

function popupBonusPlaying() {
    boxPopup.open({
        name: "bonus-playing",
        icntype: "info",
        bcksize: "mini",
        bodyclose: !0,
        content: `\n\t\t\t<div class='title'>${STR("pop.bonusPlayingTitle")}</div>\n\t\t\t<div class='text'>${STR("pop.bonusPlayingText")}</div>`
    })
}

function popupFindPreviousBonus() {
    boxPopup.open({
        name: "find-previous-bonus",
        icntype: "info",
        bcksize: "mini",
        bodyclose: !0,
        content: `\n\t\t\t<div class='title'>${STR("pop.bonusFindPreviousTitle")}</div>\n\t\t\t<div class='text'>${STR("pop.bonusFindPreviousText")}</div>`
    })
}

function popupBonusUnlocked(e) {
    if (!modeReplay && !modeRandom || e) {
        var t = "v" + appVersion + "-popup-bonus-unlock";
        (isnull(storage.getItem(t)) || e) && (storage.setItem(t, "ok"), boxPopup.open({
            name: "bonus-unlocked",
            bcksize: "middle",
            content: function() {
                var e = `\n\t\t\t\t\t\t<div class='popimg'></div>\n\t\t\t\t\t\t<div class='title'>${STR("pop.bonusUnlockTitle")}</div>\n\t\t\t\t\t\t<div class='text'>${STR("pop.bonusUnlockText")}</div>`;
                return isMouseDevice && (e += `\n\t\t\t\t\t\t\t<div class='content'>\n\t\t\t\t\t\t\t\t<div class='bt-mini light'><div class='txt'>${STR("bt.gotit")}</div><div class='hitzone'></div></div>\n\t\t\t\t\t\t\t</div>`), e
            },
            onBoxOpenStart: function() {
                boxPopup.$popup.addClass("pop-bonus-unlock"), boxPopup.$popup.find(".pop").append("<div id='pointe'></div>"), calcPointePosX(1)
            },
            onBoxOpenEnd: function() {
                isMouseDevice ? boxPopup.$popup.find(".bt-mini").on(evtClick, function(e) {
                    e.preventDefault(), boxPopup.close()
                }) : $body.on(evtClick, boxPopup.clickBck)
            },
            onBoxCloseStart: function() {
                isMouseDevice ? boxPopup.$popup.find(".bt-mini").off() : $body.off(evtClick, boxPopup.clickBck)
            },
            onBoxCloseEnd: function() {
                boxPopup.$popup.removeClass("pop-bonus-unlock"), boxPopup.$popup.find("#pointe").remove()
            }
        }))
    }
}

function popupBonusFindNext(e) {
    if (!modeReplay && !modeRandom || e) {
        var t = "v" + appVersion + "-popup-bonus-next";
        (isnull(storage.getItem(t)) || e) && (storage.setItem(t, "ok"), isToolbarOpen && closeTool(), boxPopup.open({
            name: "find-next-bonus",
            bcksize: "middle",
            content: function() {
                var e = `\n\t\t\t\t\t\t<div class='title'>${STR("pop.bonusFindNextTitle")}</div>\n\t\t\t\t\t\t<div class='text'>${STR("pop.bonusFindNextText")}</div>`;
                return isMouseDevice && (e += `\n\t\t\t\t\t\t<div class='content'>\n\t\t\t\t\t\t\t<div class='bt-mini light'><div class='txt'>${STR("bt.gotit")}</div><div class='hitzone'></div></div>\n\t\t\t\t\t\t</div>`), e
            },
            onBoxOpenStart: function() {
                boxPopup.$popup.addClass("pop-bonus-unlock"), boxPopup.$popup.find(".pop").append("<div id='pointe'></div>"), calcPointePosX(2)
            },
            onBoxOpenEnd: function() {
                isMouseDevice ? boxPopup.$popup.find(".bt-mini").on(evtClick, function(e) {
                    e.preventDefault(), boxPopup.close()
                }) : $body.on(evtClick, boxPopup.clickBck)
            },
            onBoxCloseStart: function() {
                isMouseDevice ? boxPopup.$popup.find(".bt-mini").off() : $body.off(evtClick, boxPopup.clickBck)
            },
            onBoxCloseEnd: function() {
                boxPopup.$popup.removeClass("pop-bonus-unlock"), boxPopup.$popup.find("#pointe").remove()
            }
        }))
    }
}

function calcPointePosX(e) {
    var t = $("#bt-bonus-" + e).offset().left - $("#box-bt2").offset().left + $("#app-incredibox").offset().left,
        o = $("#pop-popup .pop").offset().left,
        i = $("body").hasClass("ultrawide") ? .8 : 1,
        n = (t - o) / stageScale / popupScale;
    n += 86 * i * stageScale / 2 - 32 * stageScale * popupScale / 2, $("#pointe").css({
        transform: "translateX(" + Math.floor(n) + "px)"
    })
}

function popupRecok() {
    checkTimeRecok = getTime(), deleteFocus();
    var e = `\n\t\t<div class='bt bt-haut retry'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-reset'></use></svg></div><div class='txt'>${STR("bt.retry")}</div><div class='hitzone'></div></div>\n\t\t<div class='bt bt-haut replay'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-eye'></use></svg></div><div class='txt'>${STR("bt.replay")}</div><div class='hitzone'></div></div>\n\t\t<div class='bt bt-haut save'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-edit'></use></svg></div><div class='txt'>${STR("bt.save")}</div><div class='hitzone'></div></div>\n\t`;
    appBrowserDemo && (e = `\n\t\t\t<div class='bt bt-haut replay'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-eye'></use></svg></div><div class='txt'>${STR("bt.replay")}</div><div class='hitzone'></div></div>\n\t\t\t<div class='bt bt-haut share'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-share'></use></svg></div><div class='txt'>${STR("bt.share")}</div><div class='hitzone'></div></div>\n\t\t\t<div class='bt bt-haut download'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-download'></use></svg></div><div class='txt'>Get MP3</div><div class='hitzone'></div></div>\n\t\t`), boxPopup.open({
        name: "record-complete",
        icntype: "action",
        content: `\n\t\t\t<div class='title'>${STR("pop.recOkTitle")}</div>\n\t\t\t<div class='content'>\n\t\t\t\t<div class='box-bt-haut'>\n\t\t\t\t\t${e}\n\t\t\t\t</div>\t\n\t\t\t</div>`,
        onBoxOpenEnd: function() {
            boxPopup.$icon.on(evtClick, boxPopup.close), boxPopup.$popup.find(".bt.replay").on(evtClick, function(e) {
                e.preventDefault(), preventAction(clickReplayMix)
            }), appBrowserDemo ? (boxPopup.$popup.find(".bt.share").on(evtClick, function(e) {
                e.preventDefault(), preventAction(function() {
                    popupGetApp(!0)
                })
            }), boxPopup.$popup.find(".bt.download").on(evtClick, function(e) {
                e.preventDefault(), preventAction(function() {
                    popupGetApp(!0)
                })
            })) : (boxPopup.$popup.find(".bt.retry").on(evtClick, function(e) {
                e.preventDefault(), preventAction(clickRetryMix)
            }), boxPopup.$popup.find(".bt.save").on(evtClick, function(e) {
                e.preventDefault(), preventAction(clickSaveMix)
            })), createFocus("popup-record-complete"), unlock()
        },
        onBoxCloseStart: function() {
            deleteFocus(), boxPopup.$icon.off(), boxPopup.$popup.find(".bt").off()
        },
        onBoxCloseEnd: function() {
            boxPopup.$icon.off(), boxPopup.$popup.find(".bt").off()
        },
        onCloseComplete: function() {
            removeInArray("popup-record-complete", focusHistory), modeReplay || createFocus("toolbar")
        }
    })
}
var checkTimeRecok = 0;

function canIclickRecok() {
    return getTime() - checkTimeRecok > 600
}

function clickRetryMix() {
    canIclickRecok() && (appBrowserDemo && withAdBreak && callAd("next", "retry-mix"), boxPopup.close(), TweenMax.delayedCall(.2, startRecordMode))
}

function clickReplayMix() {
    canIclickRecok() && (boxPopup.close(), startReplayMode(), saveGA("mix", "replay"))
}

function clickSaveMix() {
    popupForm()
}

function popupForm() {
    boxPopup.open({
        name: "save-form",
        icntype: "action-back",
        content: function() {
            var e = `\n\t\t\t<div class='title'>${STR("pop.formTitle")}</div>\n\t\t\t<div class='content'>\n\t\t\t\t<form action='javascript:clickBtValidFormMix()' method='post' target='_self' autocomplete='off'>\n\t\t\t\t\t<div class='formzone'>\n\t\t\t\t\t\t<div class='formline ic-name'><div class='icn-box'><svg class='icn-svg'><use xlink:href='#ic-user-mini'></use></svg></div><input type='text' id='input-name' placeholder='${STR("txt.inputName")}' value='${user.djname}' maxlength='26' autocorrect='off' spellcheck='false'/></div>\n\t\t\t\t\t\t<div class='formline ic-title'><div class='icn-box'><svg class='icn-svg'><use xlink:href='#ic-note-mini'></use></svg></div><input type='text' id='input-title' placeholder='${STR("txt.inputTitle")}' value='' maxlength='26' autocorrect='off' spellcheck='false'/></div>\n\t\t\t\t\t\t<div class='formline ic-dedi'><div class='icn-box'><svg class='icn-svg'><use xlink:href='#ic-like-mini'></use></svg></div><input type='text' id='input-dedi' placeholder='${STR("txt.dedicatedTo").split("%{name}").join("...")}' value='' maxlength='26' autocorrect='off' spellcheck='false'/></div>`;
            return appBrowser || (e += `<div class='formline ic-private'>\n\t\t\t\t\t\t\t<div class='icn-box'><svg class='icn-svg'><use xlink:href='#ic-view-mini'></use></svg></div>\n\t\t\t\t\t\t\t<div class='bt-onofftext active'>\n\t\t\t\t\t\t\t\t<div class='slider'></div>\n\t\t\t\t\t\t\t\t<div class='txtbox'>\n\t\t\t\t\t\t\t\t\t<div class='label'>${STR("bt.private")}</div>\n\t\t\t\t\t\t\t\t\t<div class='label'>${STR("bt.public")}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>`), e += "</div>\n\t\t\t\t\t<div class='btzone'>\n\t\t\t\t\t\t<div class='bt valid'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-check'></use></svg></div><div class='hitzone'></div></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<input type='submit' style='visibility:hidden;position:absolute'/><div class='clear'></div>\n\t\t\t\t</form>\n\t\t\t</div>", !appBrowser || appBrowser || appBrowserExpo || (e += `<div style='margin-top: 25px; color:#777; font-size:14px; line-height:20px;'>${STR("pop.dontUseName")} &#128521;</div>`), e
        },
        onBoxOpenEnd: function() {
            if (createFocus("popup-save-form"), boxPopup.$icon.on(evtClick, popupRecok), boxPopup.$popup.find(".bt.valid").on(evtClick, function(e) {
                    e.preventDefault(), preventAction(clickBtValidFormMix)
                }), appBrowser || appDesktop || (boxPopup.$popup.find(".formline:not(.ic-private)").on(evtPress, function(e) {
                    boxPopup.$popup.find(".formline").off(evtPress), Spinner.add($(this).find(".icn-box"))
                }), boxPopup.$popup.find(".formline input").on("focus", function() {
                    boxPopup.$popup.find(".formline input").off("focus"), Spinner.reset()
                })), !appBrowser && !isSafeMode()) {
                var e = boxPopup.$popup.find(".formline.ic-private .bt-onofftext"),
                    t = boxPopup.$popup.find(".formline.ic-private svg use");
                e.on(evtClick, function(o) {
                    o.preventDefault(), e.hasClass("active") ? (e.removeClass("active"), t.attr("xlink:href", "#ic-lock-mini")) : (e.addClass("active"), t.attr("xlink:href", "#ic-view-mini"))
                })
            }
        },
        onBoxCloseStart: function() {
            removeInArray("popup-save-form", focusHistory), deleteFocus(), boxPopup.$icon.off(), boxPopup.$popup.find(".bt").off(), boxPopup.$popup.find(".bt-onofftext").off(), boxPopup.$popup.find("input").off(), appBrowser || appDesktop || (boxPopup.$popup.find(".formline").off(), boxPopup.$popup.find(".formline input").off()), appMobile && blurAll()
        }
    })
}
var formProcessing = !1,
    translateObj;

function clickBtValidFormMix() {
    if (boxPopup.$popup.find(".formzone .formline input").hasClass("focused")) return !1;
    if (launchImmersiveMode(), !formProcessing) {
        formProcessing = !0, lock();
        var e = appBrowser || isSafeMode() || !boxPopup.$popup.find(".formzone .bt-onofftext").hasClass("active"),
            t = boxPopup.$popup.find(".formzone #input-name"),
            o = boxPopup.$popup.find(".formzone #input-title"),
            i = boxPopup.$popup.find(".formzone #input-dedi"),
            n = t.val().substr(0, 26),
            a = o.val().substr(0, 26),
            s = i.val().substr(0, 26);
        n = cleanInputText(n, t), a = cleanInputText(a, o), s = cleanInputText(s, i);
        var l = regexList.classic,
            r = n.replace(/ /g, ""),
            c = a.replace(/ /g, ""),
            u = s.replace(/ /g, "");
        if (l.test(r)) invalidField(t);
        else if (l.test(c)) invalidField(o);
        else if (l.test(u)) invalidField(i);
        else if ("" === r) invalidField(t);
        else if ("" === c) invalidField(o);
        else {
            deleteFocus(), boxPopup.$popup.find(".formzone input").blur();
            var p = {
                mymix: !0,
                online: !1,
                name: ucwords(n),
                title: ucwords(a),
                dedi: ucwords(s),
                app: app.version,
                datedb: getDateNow(),
                link: getUniqLink(),
                private: e ? 1 : 0,
                nbview: 0,
                nblike: 0,
                xml: trim(recordMix.getXML())
            };
            appBrowserExpo && (p.dedi = "Design Inspire");
            var d = boxPopup.$popup.find(".bt.valid");
            Spinner.add(d), recordMix.setData(p), localMixObject.saveMix(p), mixToShare = p, setUserInfo({
                djname: ucwords(n)
            }), delete XHRmemotime.mymix, saveGA("mix", "save_local"), hasNetwork ? appBrowser ? saveMixDB(p, function() {
                f(d)
            }, function() {
                boxDialog.open(STR("pop.noCoServerText"), STR("pop.noCoServerTitle"), [STR("bt.ok")]), Spinner.reset(), formProcessing = !1, unlock()
            }) : saveMixDB(p, function() {
                f(d)
            }) : appBrowser ? (Spinner.reset(), formProcessing = !1, unlock(), boxDialog.open(STR("pop.noNetworkText"), STR("pop.noNetworkTitle"), [STR("bt.ok")], [])) : f(d)
        }
    }

    function f(e) {
        TweenMax.delayedCall(1, function() {
            Spinner.reset(), popupMixSaved()
        })
    }
}

function invalidField(e) {
    e.addClass("invalid").one(animationEnd, function(e) {
        $(e.target).removeClass("invalid")
    }), formProcessing = !1, unlock()
}

function keyboardOpen(e) {
    TweenMax.set(boxPopup.$popup, {
        scrollTo: {
            y: 0
        }
    }), boxPopup.$popup.addClass("keyboardOpen");
    var t = boxPopup.$popup.find("#input-name"),
        o = e.keyboardHeight,
        i = (screenH - o) / 2,
        n = t.height() / 2;
    boxPopup.$popup.find(".formline input").each(function() {
        var e = $(this),
            t = Math.round(e.position().top - i + n) / stageScale;
        e.focus(function(e) {
            TweenMax.to(boxPopup.$popup, .4, {
                scrollTo: {
                    y: t
                },
                ease: Quint.easeInOut
            })
        })
    }), t.focus()
}

function keyboardClose() {
    TweenMax.to(boxPopup.$popup, .5, {
        scrollTo: {
            y: 0
        },
        ease: Quint.easeInOut,
        onComplete: function() {
            boxPopup.$popup.removeClass("keyboardOpen")
        }
    })
}

function blurAll() {
    notnull(document.activeElement) && document.activeElement.blur(), isAndroid && launchImmersiveMode()
}

function listenFocus() {
    var e = !1;
    isIOS && (document.addEventListener("focusin", function() {
        e = !0
    }), document.addEventListener("focusout", function() {
        e = !1, setTimeout(function() {
            e || window.scrollTo(0, 0)
        }, 250)
    }))
}

function popupConvertMix() {}

function popupMixSaved() {
    formProcessing = !1, boxPopup.open({
        name: "mix-saved",
        icntype: "action",
        content: function() {
            var e = appBrowser ? STR("pop.shareMixSaved") : STR("pop.shareMixSavedPlaylist") + "<br>" + STR("pop.shareShareTop50");
            e = 1 == mixToShare.private ? e.split("<br>")[0] : e, appBrowserExpo && (e = "Your mix has been saved.<br>Now you can share it!");
            var t = "";
            return (trustAppMobile || appBrowserExpo) && (t += `<div class='bt bt-haut link color'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-link'></use></svg></div><div class='txt'>${STR("bt.link")}</div><div class='hitzone'></div></div>`), appBrowserSchool || (t += `<div class='bt bt-haut share color'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-share'></use></svg></div><div class='txt'>${STR("bt.share")}</div><div class='hitzone'></div></div>`), isComputer && (t += `<div class='bt bt-haut download color hoverLocked'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-download'></use></svg></div><div class='txt'>${STR("bt.exportFile")}</div><div class='ic-locked'><svg class='icn-svg'><use xlink:href='#ic-lock'></use></svg></div><div class='hitzone'></div></div>`), t += `<div class='bt bt-haut mixlist color hoverLocked'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-mixlist'></use></svg></div><div class='txt'>${STR("bt.myMix")}</div><div class='ic-locked'><svg class='icn-svg'><use xlink:href='#ic-lock'></use></svg></div><div class='hitzone'></div></div>`, `\n\t\t\t\t<div class='title'>${STR("pop.shareTitle")}</div>\n\t\t\t\t<div class='text'>${e}</div>\n\t\t\t\t<div class='content'>\n\t\t\t\t\t<div class='box-bt-haut'>${t}</div>\n\t\t\t\t</div>`
        },
        onBoxOpenEnd: function() {
            createFocus("popup-mix-saved"), boxPopup.$icon.on(evtClick, boxPopup.close), (trustAppMobile || appBrowserExpo) && boxPopup.$popup.find(".bt.link").on(evtClick, function(e) {
                e.preventDefault();
                var t = $(this);
                preventAction(function() {
                    clickBtCopyLink(t)
                })
            }), boxPopup.$popup.find(".bt.share").on(evtClick, function(e) {
                e.preventDefault();
                var t = $(this);
                preventAction(function() {
                    clickBtShareGlobal(t)
                })
            }), appBrowser ? appBrowserSchool ? (boxPopup.$popup.find(".bt.mixlist").on(evtClick, function(e) {
                e.preventDefault(), window.top.appEvent("clickBtMixlist")
            }), boxPopup.$popup.find(".bt.download").on(evtClick, function(e) {
                e.preventDefault(), preventAction(function() {
                    socialSharingOk("download")
                })
            })) : (boxPopup.$popup.find(".bt.mixlist").on(evtClick, function(e) {
                dialogGetApp(e, !0)
            }), boxPopup.$popup.find(".bt.download").on(evtClick, function(e) {
                dialogGetApp(e, !0)
            })) : (boxPopup.$popup.find(".bt.mixlist").on(evtClick, function(e) {
                e.preventDefault(), preventAction(clickBtGoToMixlist)
            }), boxPopup.$popup.find(".bt.download").on(evtClick, function(e) {
                e.preventDefault(), preventAction(function() {
                    socialSharingOk("download")
                })
            })), unlock()
        },
        onBoxCloseStart: function() {
            deleteFocus(), boxPopup.$icon.off(), boxPopup.$popup.find(".bt").off()
        },
        onCloseComplete: function() {
            onGame && createFocus("toolbar"), mixToShare = {}
        }
    })
}

function clickBtShareGlobal(e) {
    socialSharing("global", e || $(this))
}

function clickBtShareMail(e) {
    socialSharing("mail", e || $(this))
}

function clickBtShareFacebook(e) {
    socialSharing("facebook", e || $(this))
}

function clickBtShareTwitter(e) {
    socialSharing("twitter", e || $(this))
}

function clickBtShareLink(e) {
    socialSharing("link", e || $(this))
}

function clickBtCopyLink(e) {
    socialSharing("clipboard", e || $(this))
}

function clickBtGoToMixlist() {
    backToHome(function() {
        openPlaylist("mymix", !0, !0)
    })
}

function popupGlobalShare() {
    var e = $mixlist.isOpen() ? "action" : "action-back";
    boxPopup.open({
        name: "global-share",
        icntype: e,
        bcksize: isMixReplay ? "mini" : "",
        content: `\n\t\t\t<div class='title'>${STR("bt.share")}</div>\n\t\t\t<div class='content'>\n\t\t\t\t<div class='box-bt-haut'>\n\t\t\t\t\t<div class='bt bt-haut mail color'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-mail'></use></svg></div><div class='txt'>Mail</div><div class='hitzone'></div></div>\n\t\t\t\t\t<div class='bt bt-haut facebook color'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-facebook'></use></svg></div><div class='txt'>Facebook</div><div class='hitzone'></div></div>\n\t\t\t\t\t<div class='bt bt-haut twitter color'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-twitter'></use></svg></div><div class='txt'>Twitter</div><div class='hitzone'></div></div>\n\t\t\t\t\t<div class='bt bt-haut link color'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-link'></use></svg></div><div class='txt'>${STR("bt.link")}</div><div class='hitzone'></div></div>\n\t\t\t\t</div>\n\t\t\t</div>`,
        onBoxOpenEnd: function() {
            createFocus("popup-global-share"), boxPopup.$popup.find(".bt.mail").on(evtClick, function(e) {
                e.preventDefault(), preventAction(function() {
                    socialSharingOk("mail")
                })
            }), boxPopup.$popup.find(".bt.facebook").on(evtClick, function(e) {
                e.preventDefault(), preventAction(function() {
                    socialSharingOk("facebook")
                })
            }), boxPopup.$popup.find(".bt.twitter").on(evtClick, function(e) {
                e.preventDefault(), preventAction(function() {
                    socialSharingOk("twitter")
                })
            }), boxPopup.$popup.find(".bt.link").on(evtClick, function(e) {
                e.preventDefault(), preventAction(function() {
                    socialSharingOk("clipboard")
                })
            }), "action" == e ? boxPopup.$popup.find("span.icon").on(evtClick, boxPopup.close) : boxPopup.$popup.find("span.icon").on(evtClick, popupMixSaved), unlock()
        },
        onBoxCloseStart: function() {
            removeInArray("popup-global-share", focusHistory), deleteFocus(), boxPopup.$popup.find("span.icon").off(), boxPopup.$popup.find(".bt").off()
        },
        onBoxCloseEnd: function() {
            createFocus(focusHistory[focusHistory.length - 1]), Spinner.reset()
        }
    })
}

function popupEmail() {
    boxPopup.open({
        name: "email-form",
        icntype: "action-back",
        bcksize: isMixReplay ? "mini" : "",
        content: `\n\t\t\t<div class='title'>${STR("pop.formEmailTitle")}</div>\n\t\t\t<div class='content'>\n\t\t\t\t<form action='javascript:clickBtValidFormEmail()' method='post' target='_self' autocomplete='off'>\n\t\t\t\t\t<div class='formzone'>\n\t\t\t\t \t\t<div class="formline ic-name"><div class="icn-box"><svg class="icn-svg"><use xlink:href="#ic-user-mini"></use></svg></div><input type="text" id="input-name" placeholder="${STR("txt.inputEmailSender")}" value="${notnull(user.djname)?user.djname:""}" maxlength="26" autocorrect="off" spellcheck="false"/></div>\n\t\t\t\t\t\t<div class='formline ic-email'><div class='icn-box'><svg class='icn-svg'><use xlink:href='#ic-at-mini'></use></svg></div><input type='email' id='input-email' placeholder='${STR("txt.inputEmailRecipient")}' value='' maxlength='254' autocorrect='off' spellcheck='false'/></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='btzone'>\n\t\t\t\t\t\t<div class='bt valid'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-check'></use></svg></div><div class='hitzone'></div></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<input type='submit' style='visibility:hidden;position:absolute'/><div class='clear'></div>\n\t\t\t\t</form>\n\t\t\t</div>`,
        onBoxOpenEnd: function() {
            createFocus("popup-email-form"), boxPopup.$icon.on(evtClick, popupGlobalShare), boxPopup.$popup.find(".bt.valid").on(evtClick, function(e) {
                e.preventDefault(), preventAction(clickBtValidFormEmail)
            })
        },
        onBoxCloseStart: function() {
            removeInArray("popup-email-form", focusHistory), deleteFocus(), boxPopup.$icon.off(), blurAll()
        },
        onBoxCloseEnd: function() {
            formProcessing = !1
        }
    })
}

function clickBtValidFormEmail() {
    if (boxPopup.$popup.find(".formzone .formline input").hasClass("focused")) return !1;
    var e = domainOnline + "mix/" + mixToShare.link,
        t = mixToShare.title,
        o = mixToShare.name;
    if (!formProcessing) {
        formProcessing = !0, lock();
        var i = boxPopup.$popup.find(".formzone #input-name"),
            n = boxPopup.$popup.find(".formzone #input-email"),
            a = i.val().substr(0, 26),
            s = n.val().substr(0, 254);
        a = cleanInputText(a, i), s = trim(s);
        var l = a.split(" ").join(""),
            r = s.toLowerCase();
        if ("" == l || regexList.classic.test(l)) invalidField(i);
        else if ("" != r && regexList.email.test(r)) {
            boxPopup.$popup.find(".formzone input").blur(), blurAll();
            var c = boxPopup.$popup.find(".bt.valid");
            if (Spinner.add(c), hasNetwork) {
                var u = {};
                u.expediteur = a, u.email = s, u.type = "composition", u.djName = o, u.title = t, u.link = e, u.src = appDesktop ? "electron" : "browser", u.lang = currentLanguage.split("-")[0], xhr("POST", domainOnline + "ph3/send-mail.php", u, function(e) {
                    "success" == e.state ? (Spinner.reset(), c.addClass("success"), TweenMax.delayedCall(.6, function() {
                        unlock(), popupGlobalShare()
                    })) : (boxDialog.open(STR("pop.shareErrorText"), STR("pop.shareErrorTitle"), [STR("bt.ok")], [function() {
                        Spinner.reset()
                    }]), formProcessing = !1, unlock())
                }, function(e) {
                    formProcessing = !1, boxDialog.open(STR("pop.shareErrorText"), STR("pop.shareErrorTitle"), [STR("bt.ok")], [function() {
                        Spinner.reset()
                    }]), unlock()
                })
            } else formProcessing = !1, boxDialog.open(STR("pop.noNetworkText"), STR("pop.noNetworkTitle"), [STR("bt.ok")], [function() {
                Spinner.reset()
            }]), unlock()
        } else invalidField(n)
    }
}

function saveMixDB(_mobj, _cbk, _errorcbk) {
    var errorcbk = _errorcbk || _cbk,
        data = getAppData();
    data.mix = _mobj;
    var requrl = domainOnline + "ph3/save-mix-db.php";
    $.ajax({
        type: "POST",
        url: requrl,
        data: data,
        dataType: "json",
        crossdomain: !0,
        success: function(_obj) {
            void 0 != _obj.eval && eval(_obj.eval), "success" == _obj.state ? (_mobj.online = !0, _mobj.link = _obj.link, _mobj.id = _obj.id, _mobj.datedb = _obj.datedb, localMixObject.saveMix(_mobj), delete XHRmemotime.latest, _cbk(), saveGA("mix", "save_db")) : (errorcbk(), saveGA("mix", "save_db_failed"))
        },
        error: function(e) {
            errorcbk(), saveGA("mix", "save_db_error")
        }
    })
}

function socialSharing(e, t) {
    if (lock(), deleteFocus(), Spinner.add(t), hasNetwork) !0 === mixToShare.mymix ? mixToShare.online ? socialSharingOk(e) : saveMixDB(mixToShare, function() {
        socialSharingOk(e), $(".boxline .line[data-key='mix-" + mixToShare.link + "']").removeClass("isoffline")
    }, function() {
        boxDialog.open(STR("pop.noCoServerText"), STR("pop.noCoServerTitle"), [STR("bt.ok")], []), Spinner.reset(), unlock()
    }) : socialSharingOk(e);
    else {
        var o = $mixlist.hasClass("show") ? STR("pop.noCoShareText") : STR("pop.noCoShareText") + " " + STR("pop.noCoShareText2");
        boxDialog.open(o, STR("pop.noNetworkTitle"), [STR("bt.ok")], [function() {
            Spinner.reset()
        }]), unlock()
    }
}

function socialSharingOk(e, t) {
    var o = mixToShare.name,
        i = mixToShare.title,
        n = (mixToShare.dedi, mixToShare.datedb, domainOnline + "mix/" + mixToShare.link),
        a = domainOnline + "img/share/share-v" + app.version + "-en@2x.png",
        s = domainOnline + "img/share/share-v" + app.version + "-en.png",
        l = STR("pop.shareSubject"),
        r = STR("pop.sharePresentMix").split("%{name}").join(o).split("%{title}").join(i),
        c = STR("pop.shareTextLike"),
        u = STR("pop.shareTextBeCool"),
        p = r + "\n" + n + "\n\n" + c + "\n\n---------------------------\n\nDownload the app: https://www.incredibox.com/info/store",
        d = "#incredibox",
        f = u + " #incredibox",
        m = r + " " + u + " #incredibox";
    if (appBrowserExpo && (d += " #DesignInspire #hktdc", f += " #DesignInspire #hktdc", m += " #DesignInspire #hktdc"), "global" != e && Spinner.reset(), "download" == e) {
        if ((appDesktop || appBrowserSchool) && hasWorker) popupConvertMix();
        else openURL(domainOnline + "file/" + mixToShare.link);
        unlock(), saveGA("mix", "export_mp3")
    } else saveGA("mix", "share", e);
    switch (e) {
        case "mail":
            trustAppMobile && window.plugins.socialsharing.shareViaEmail(p, l, null, null, null, [s], h, b), isComputer && popupEmail();
            break;
        case "facebook":
            trustAppMobile && window.plugins.socialsharing.shareViaFacebook(d, a, n, h, b), appBrowser && windowPopup("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(n), 560, 350, !0), appDesktop && openURL("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(n));
            break;
        case "twitter":
            trustAppMobile && window.plugins.socialsharing.shareViaTwitter(f, a, n, h, b), appBrowser && windowPopup("https://twitter.com/intent/tweet?text=" + encodeURIComponent(f) + "&url=" + encodeURIComponent(n) + "&hashtags=musicApp,beatbox,pumpItUp&related=incredibox_%3AThe%20Incredibox%20official%20Twitter%20account!", 560, 350, !0), appDesktop && openURL("https://twitter.com/intent/tweet?text=" + encodeURIComponent(f) + "&url=" + encodeURIComponent(n) + "&hashtags=musicApp,beatbox,pumpItUp&related=incredibox_%3AThe%20Incredibox%20official%20Twitter%20account!");
            break;
        case "clipboard":
            appDesktop ? copyToClipboardElectron(n, v) : trustAppMobile ? cordova.plugins.clipboard.copy(n, v, function() {
                boxDialog.open(STR("pop.shareErrorText"), STR("pop.shareErrorTitle"), [STR("bt.ok")], []), b()
            }) : (appBrowser || isComputer) && (copyToClipboard(n), v(n));
            break;
        case "global":
            trustAppMobile ? window.plugins.socialsharing.share(m, l, a, n, h, b) : isComputer && (popupGlobalShare(), Spinner.reset())
    }

    function v(e) {
        if (appBrowser) {
            var t = "<div class='selectarea'>" + e.replace("https://www.", "") + "</div>",
                o = isIOS ? "" : STR("pop.shareClipboard");
            boxDialog.open(t + o, STR("bt.link"), [STR("bt.ok")], [], !1, !1, "dialog-clipboard")
        } else boxDialog.open(STR("pop.shareClipboard"), STR("pop.infoTitle"), [STR("bt.ok")], [], !1, !1, "dialog-clipboard");
        h(), unlock()
    }

    function h() {
        Spinner.reset(), unlock()
    }

    function b() {
        Spinner.reset(), unlock()
    }
}

function copyToClipboardElectron(e, t) {
    _electron.clipboard.writeText(e), t()
}

function sendFeedback() {
    saveGA("share", "click_feedback");
    var e = "feedback@incredibox.com",
        t = "App feedback (" + machine.deviceModel + ")",
        o = "<br><br>----------";
    if (o += "<br>From : " + ucwords(build.platform) + " - " + ("undefined" != typeof app ? app.name + " - v" + app.version : "index"), o += "<br>Version : " + build.version, o += "<br>DJ Name : " + user.djname, o += "<br>Guid : " + user.guid, o += "<br>Lang : " + user.lang + " (" + currentLanguage + ")", o += "<br>Machine : " + machine.uuid + (trustAppMobile ? " - " + device.serial : ""), o += "<br>Device : " + machine.deviceModel + " - " + screen.width + "x" + screen.height + " - " + (window.devicePixelRatio || 1), o += "<br>System : " + machine.osName + " - " + machine.osVersion + (appDesktop ? " - " + _electron.os.arch() : ""), o += "<br>Store : " + build.store, o += "<br>WV : " + machine.browserFullVersion, o += "<br>Anime - Asset  : " + (isAnimeHD ? "HD" : "LD") + " - " + (isAssetHD ? "HD" : "LD"), o += "<br>Evt : " + evtClick, o += "<br>SpRate : " + (notnull(contextAudio) ? contextAudio.sampleRate + (notnull(contextAudio.baseLatency) ? " - " + contextAudio.baseLatency : "") : ""), trustAppMobile) o += "<br>----------", o += "<br>App.device : " + (appleModel[device.model] || device.model) + " - " + device.manufacturer, o += "<br>App.system : " + device.platform + " - " + device.version, window.plugins.socialsharing.shareViaEmail("<br><br><br><i>" + o + "</i>", t, e, null, null, []);
    else {
        o = o.replace(/<br>/g, "\r\n");
        var i = "mailto:" + e + "?subject=" + t + "&body=" + encodeURIComponent(o);
        appDesktop ? _electron.shell.openExternal(i) : window.location.href = i
    }
}
var defaultLanguage = appSQ ? "fr" : appCN ? "zh-CN" : "en-US",
    currentLanguage = defaultLanguage,
    systemLanguage, languageListe = {
        "en-US": "English",
        "ru": "Русский"
    };

function checkLanguageCode(e) {
    var t = e.toLowerCase();
    return t.indexOf("en-") > -1 ? "en-US" : t.indexOf("pt-") > -1 ? "pt-BR" : t.indexOf("fr-") > -1 ? "fr" : t.indexOf("es-") > -1 ? "es" : t.indexOf("it-") > -1 ? "it" : t.indexOf("de-") > -1 ? "de" : t.indexOf("cn") > -1 ? "zh-CN" : "zh-hant" == t || "zh-hk" == t || "zh-tw" == t ? "zh-TW" : "zh-hans" == t || "zh-cn" == t ? "zh-CN" : "en" == t ? "en-US" : "pt" == t ? "pt-BR" : "zh" == t ? "zh-CN" : "hi" == t ? "hi-IN" : "bn" == t ? "bn-IN" : "ta" == t ? "ta-IN" : "te" == t ? "te-IN" : "nb" == t || "nn" == t ? "no" : e
}

function createBtLanguage() {
    var e = "";
    for (var t in languageListe) {
        e += '<div class="bt-mini soft" id="bt-lang-' + t + '"><div class="txt">' + languageListe[t] + '</div><div class="hitzone"></div></div>'
    }
    $("#pop-language .box-lang").append(e)
}

function debugLanguage() {
    document.addEventListener("keyup", function(e) {
        var t = e.key.toLowerCase();
        if ("a" == t || "z" == t) {
            var o = Object.keys(languageListe).indexOf(currentLanguage);
            "a" == t ? o-- : "z" == t && o++;
            var i = Object.keys(languageListe);
            o > i.length - 1 && (o = 0), o < 0 && (o = i.length - 1), loadLanguage(changeDomTxt, i[o])
        }
    })
}

function changeDomTxt() {
    var e = translateObj.trad;
    if ($("#pop-info .tab#tab-tuto").html(e.bt.tuto), $("#pop-info .tuto1 .txt").html(e.txt.tuto1), $("#pop-info .tuto2 .txt").html(e.txt.tuto2), $("#pop-info .tuto3 .txt").html(e.txt.tuto3), $("#pop-info .tuto4 .txt").html(e.txt.tuto4), $("#pop-info .tuto5 .txt").html(e.txt.tuto5), $("#pop-info .tab#tab-credit").html(e.bt.credit), $("#pop-info .tab#tab-mod").html(e.bt.mod), $("#pop-info #pop-mod #mod").html(e.txt.modTeam), $("#pop-info #pop-credit #copy").html(e.txt.copyright), $("#pop-info #pop-credit #team").html("<div class='box-team'>Allan Durand<br>Romain Delambily<br>Incredible Polo</div><div class='box-team'>" + e.txt.team + "</div>"), $("#pop-info #pop-credit .title").html(e.txt.stayTuned), $("#pop-info #pop-credit #bt-feedback .txt").html(e.bt.feedback), $("#pop-info #pop-credit #bt-rating .txt").html(e.bt.rate), $("#pop-info #pop-credit #bt-privacy .txt").html(e.bt.privacy), $("#pop-info .tab#tab-follow").html(e.bt.follow), $("#pop-info #pop-follow .title#git").html(e.bt.git), $("#pop-info #pop-follow .title#shop").html(e.txt.visitShop), $("#pop-param .tab#tab-language").html(e.txt.language), $("#pop-param .tab#tab-setting").html(e.bt.param), $("#pop-param #pop-setting #param-dark .label").html(e.txt.modeDark), $("#pop-param #pop-setting #param-safe .label").html(e.txt.modeSafe), $("#pop-param #pop-setting #param-reset .label").html(e.txt.resetBonus), $("#pop-param #pop-setting #param-reset .bt-mini .txt").html(e.bt.reset), $("#pop-param #pop-setting #param-recover .label").html(e.txt.recoverAllMix), $("#pop-param #pop-setting #param-recover .bt-mini .txt").html(e.bt.recover), $("#pp-box #bt-ppaccept .txt").html(e.bt.accept), $("#pp-box #bt-pprefuse .txt").html(e.bt.refuse), pageApp) {
        if ($("#home .bt#home-bt-switch .txt").html(e.bt.version), $("#home .bt#home-bt-list .txt").html(appBrowser ? e.bt.myMix : e.bt.mixList), $("#mixlist .tab#tab-mixlist .txt").html(e.bt.myMix), $("#mixlist .tab#tab-top50 .txt").html(e.bt.top50), $("#mixlist .tab#tab-latest .txt").html(e.bt.latest), $("#mixlist .tab#tab-search .txt").html(e.bt.search), $("#mixlist #searchbox #input-search").attr("placeholder", e.txt.inputSearch), $("#mixlist #searchbox #input-search").val(""), lastSearch = "", cleanListSearch(), $("#mixlist .tab-filter #bt-name .txt").html(e.bt.djname), $("#mixlist .tab-filter #bt-title .txt").html(e.bt.mixtitle), $("#mixlist .tab-filter #bt-dedi .txt").html(e.txt.dedicatedTo.split("%{name}").join("")), $("#mixlist .tab-filter #bt-day .txt").html(e.bt.day), $("#mixlist .tab-filter #bt-week .txt").html(e.bt.week), $("#mixlist .tab-filter #bt-month .txt").html(e.bt.month), $("#mixlist .tab-filter #bt-year .txt").html(e.bt.year), $("#mixlist .scroll:not(#list-mymix) .infoListmix").html(e.txt.top50Info), totalNumberMix > 0 ? $("#mixlist #list-latest .boxinfo").html(e.txt.latestMixInfo.replace("%{mix_total}", numberSpaced(totalNumberMix)).replace("%{version_name}", app.name)) : $("#mixlist #list-latest .boxinfo").html(e.txt.latestMixInfo.split("<br>")[0]), $("#mixlist #list-day .boxinfo").html(e.txt.top50Info), $("#mixlist #list-week .boxinfo").html(e.txt.top50Info), $("#mixlist #list-month .boxinfo").html(e.txt.top50Info), $("#mixlist #list-year .boxinfo").html(e.txt.top50Info), $("#mixlist .box-info .offline .txt").html(e.txt.offline), $("#watch-info #bt-save .txt").html(e.bt.save), $("#watch-info .offline .txt").html(e.txt.offline), notnull(localMixObject)) {
            var t = 0 == localMixObject.getMixlist().length ? STR("txt.mixlistEmpty") : STR("txt.mixlistInfo");
            $("#list-mymix .boxinfo", $poplist).html(t)
        }
        $("#watch-info .date, .box-info .date").each(function() {
            if ($(this).attr("data-date")) {
                var e = $(this).attr("data-date");
                $(this).html(getStringDate(e))
            }
        }), $("#pop-switch .title").html(e.txt.enjoyVersion), $("#game #box-bt1 #bt-stop .txt").html(e.bt.menuRestart), $("#game #box-bt1 #bt-random .txt").html(e.bt.menuRandom), $("#game #box-bt1 #bt-record .txt").html(e.bt.menuRecord)
    } else $("#page-splash #sp-baseline").html(STR("txt.baseline")), $("#page-splash #sp-text").html(STR("txt.useHeadphones")), $("#page-splash #sp-text").html(STR("txt.selectVersion"));
    notnull(boxPopup) && boxPopup.isOpen() && boxPopup.refresh()
}

function loadLanguage(e, t) {
    var o = notnull(t) && notnull(languageListe[t]) ? t : notnull(user.lang) && "" != user.lang ? user.lang : "" != machine.language ? machine.language : defaultLanguage;
    appBrowser && !appBrowserSchool && (o = null != getParameterByName("lang") ? getParameterByName("lang") : defaultLanguage), o = checkLanguageCode(o), isnull(languageListe[o]) && (o = defaultLanguage);
    $("#pop-language .box-lang .bt-mini#bt-lang-" + o).addClass("active");
    notnull(translateObj) && $("body").removeClass("lang-" + currentLanguage);
    var i = new XMLHttpRequest;

    function n() {
        return setUserInfo({
            lang: defaultLanguage
        }), boxDialog.open("Impossible to load language settings. Please reload or force to quit the app then retry.", "ERROR", ["Reload"], [gotoAppUrl], !0), removeFadeAll(), saveGA("language", "load_failed", o), !1
    }
    i.addEventListener("load", function() {
        translateObj = jsonDecode(this.responseText), setUserInfo({
            lang: currentLanguage = o
        }), $("body").addClass("lang-" + currentLanguage), isnull(e) || e();
        saveGA("language", "load_success", currentLanguage)
    }, !1), i.addEventListener("error", n, !1), i.addEventListener("abort", n, !1), i.open("GET", "./lang/" + o + ".json"), i.send()
}

function clickBtLang(e) {
    var t = $(e.currentTarget),
        o = t.attr("id").replace("bt-lang-", "");
    t.hasClass("active") || ($("#pop-language .box-lang .bt-mini").removeClass("active"), t.addClass("active"), loadLanguage(changeDomTxt, o))
}

function STR(e) {
    for (var t = e.split("."), o = translateObj.trad, i = 0, n = t.length; i < n; i++) {
        var a = t[i];
        if (!(a in o)) return;
        o = o[a]
    }
    return o
}
var CloudSync = function() {
        return this.sync = nada, this.save = nada, this.remove = nada, this
    },
    LocalStorage = function() {
        var e = this;
        return this.setItem = function(e, t) {
            window.localStorage.setItem(e, t)
        }, this.getItem = function(e) {
            return window.localStorage.getItem(e)
        }, this.getAllItem = function() {
            return window.localStorage
        }, this.removeItem = function(e) {
            window.localStorage.removeItem(e)
        }, this.clear = function() {
            window.localStorage.clear()
        }, this.weight = function() {
            var e, t, o = window.localStorage,
                i = 0,
                n = "LS | --------------------------\n";
            for (t in o) i += e = 2 * (o[t].length + t.length), n += "LS | " + t.substr(0, 50) + " = " + (e / 1024).toFixed(2) + " KB\n";
            return n += "LS | Total = " + (i / 1024).toFixed(2) + " KB\n", n += "LS | --------------------------"
        }, this.restoreUUID = function() {
            if (!appBrowser) {
                var t = e.getAllItem(),
                    o = getListUUID();
                for (var i in t)
                    if (-1 != i.indexOf("mix-")) {
                        var n = jsonDecode(t[i]);
                        notnull(n.uuid) && e.setItem("uuid-" + n.uuid)
                    } var a = getListUUID();
                uniqueBetweenArray(o, a).length > 0 && storage.removeItem("restore-all-mix")
            }
        }, this.restoreAllMix = function(t, o) {
            var i = o || nada;
            if (!0 === t && storage.removeItem("restore-all-mix"), !appBrowser && hasNetwork && isnull(storage.getItem("restore-all-mix"))) {
                var n = {};
                n.uuid = getListUUID(), $.ajax({
                    type: "POST",
                    url: domainOnline + "ph3/get-all-mix-db.php",
                    data: n,
                    dataType: "json",
                    crossdomain: !0,
                    success: function(t) {
                        if ("success" == t.state) {
                            var o = t.mixlist;
                            o.forEach(function(e, t) {
                                e.online = !0, e.mymix = !0, localMixObject.saveMix(e)
                            }), i({
                                msg: "ok",
                                nb: o.length
                            }), e.setItem("restore-all-mix", "ok"), saveGA("mix", "get_all_db")
                        } else i({
                            msg: "bug"
                        }), saveGA("mix", "get_all_db_failed")
                    },
                    error: function(e) {
                        i({
                            msg: "error"
                        }), saveGA("mix", "get_all_db_error")
                    }
                })
            }
        }, this.init = function() {
            e.restoreUUID(), e.restoreAllMix()
        }, this
    },
    LocalMixObject = function() {
        var e = this;
        this.saveMix = function(e, t, o) {
            var i = !!notnull(t) && t,
                n = !notnull(o) || o;
            if (notnull(e)) {
                var a = -1 == e.link.indexOf("mix-") ? "mix-" + e.link : e.link;
                a = i ? a.replace("mix-", "fav-") : a;
                var s = jsonEncode(e);
                return storage.setItem(a, s), n && cloud.save(a, s), !0
            }
            return !1
        }, this.deleteMix = function(e) {
            return !!notnull(storage.getItem(e)) && (storage.removeItem(e), cloud.remove(e), !0)
        }, this.deleteMixById = function(t) {
            var o, i = e.getAllMix(!0),
                n = e.getAllMix(!0, !0);
            for (o in i) i[o].id == t && (e.deleteMix("mix-" + i[o].link), e.deleteMix("fav-" + i[o].link));
            for (o in n) n[o].id == t && (e.deleteMix("fav-" + n[o].link), e.deleteMix("mix-" + n[o].link))
        }, this.getMix = function(e) {
            return !!notnull(storage.getItem(e)) && jsonDecode(storage.getItem(e))
        }, this.getAllMix = function(e, t) {
            var o = !!notnull(e) && e,
                i = !!notnull(t) && t,
                n = [],
                a = storage.getAllItem(),
                s = i ? "fav-" : "mix-";
            for (var l in a)
                if (-1 != l.indexOf(s)) {
                    var r = jsonDecode(a[l]);
                    isnull(r.datedb) && (r.datedb = notnull(r.date) ? r.date : getDateNow()), o && -1 == l.indexOf("v" + app.version) && -1 == l.indexOf("-IOSV" + app.version) || n.push(r)
                } return n
        }, this.getMixlist = function() {
            var t = e.getAllMix(!0, !1);
            return e.sortArrayMix(t)
        }, this.getFavlist = function() {
            var t = e.getAllMix(!0, !0);
            return e.sortArrayMix(t)
        }, this.sortArrayMix = function(e, t) {
            return e.sort(function(e, t) {
                return t.datedb > e.datedb ? 1 : t.datedb < e.datedb ? -1 : 0
            }), !0 === t && (e = e.reverse()), e
        }, this.getLastMix = function() {
            var t = e.getAllMix(!1),
                o = t.length;
            return o > 0 ? t[o - 1] : null
        }, this.getLastDjName = function() {
            var t = e.getLastMix();
            return notnull(t) ? t.name : ""
        }, this.deleteAllMix = function() {
            var e = storage.getAllItem();
            for (var t in e) - 1 == t.indexOf("mix-") && -1 == t.indexOf("fav-") || storage.removeItem(t)
        }, this.getStatMixOnline = function(t) {
            var o = [];
            e.getMixlist().forEach(function(e) {
                e.online && notnull(e.id) && o.push(parseInt(e.id))
            }), o.length > 0 ? xhr("GET", domainOnline + "ph3/get-stat-mix.php", {
                id: o
            }, function(i) {
                if ("success" == i.state) {
                    XHRmemotime.mymix = new Date;
                    var n = [];
                    if (i.list.forEach(function(t) {
                            n.push(parseInt(t.id));
                            var o = e.getMix("mix-" + t.link);
                            o.id = t.id, o.newnbview = t.nbview, o.newnblike = t.nblike, e.saveMix(o)
                        }), n.length < o.length) {
                        var a = uniqueBetweenArray(n, o);
                        for (var s of a) e.deleteMixById(s)
                    }
                    void 0 !== t && t()
                }
            }, function(e) {}) : void 0 !== t && t()
        }, this.getStatFavOnline = function(t) {
            var o = [];
            e.getFavlist().forEach(function(e) {
                e.mymix && !e.online || !notnull(e.id) || o.push(parseInt(e.id))
            }), o.length > 0 ? xhr("GET", domainOnline + "ph3/get-stat-mix.php", {
                id: o
            }, function(i) {
                if ("success" == i.state) {
                    XHRmemotime.myfav = new Date;
                    var n = [];
                    if (i.list.forEach(function(t) {
                            n.push(parseInt(t.id));
                            var o = e.getMix("fav-" + t.link);
                            o.id = t.id, o.nbview = t.nbview, o.nblike = t.nblike, e.saveMix(o, !0)
                        }), n.length < o.length) {
                        var a = uniqueBetweenArray(n, o);
                        for (var s of a) e.deleteMixById(s)
                    }
                    void 0 !== t && t()
                }
            }, function(e) {}) : void 0 !== t && t()
        }
    },
    PoloObject = function(e, t, o, i, n, a) {
        this.sound = new SoundObject(o, "polo" + e);
        var s = this,
            l = $("#polo" + e, t).css({
                left: n + 20 + "px",
                top: a + "px"
            }),
            r = $('<div class="zone"><div class="loader"><div class="bar"></div></div></div>'),
            c = $(".loader", r),
            u = $(".bar", r),
            p = !1;
        $boxLoaderPolo.append(r), r.css({
            left: n + 20 + "px"
        });
        var d, f, m, v, h, b, x, g, k, w, C, y, D, S, T, A, B, P, F, M, L, E, I, R, O, H, N = e,
            j = i,
            W = "",
            z = "normal",
            V = !1,
            _ = spritePolo,
            G = Ie,
            U = .5,
            X = .3,
            Y = 0,
            q = !1,
            Q = "hd" == animeSize ? 2 : 1,
            Z = "hd" == animeSize ? 2 : 1,
            K = 400 * Z,
            J = 40 * Z,
            ee = 60 * Z,
            te = l.find(".ctrl");
        this.$btcMute = l.find(".icon-game-bt-mute"), this.$btcSolo = l.find(".icon-game-bt-solo"), this.$btcStop = l.find(".icon-game-bt-delete"), this.posX = n * Z, this.posY = K, this.pictoHoverId = null, this.reinit = function() {
            ae(), s.draw(), q = !1, s.pictoHoverId = null, h = b = x = g = k = w = C = 0, W = y = D = S = T = A = null, B = P = F = M = L = E = I = R = !1
        }, this.setPosition = function() {
            d = t.offset().left, f = t.offset().top, v = $incredibox.offset().top + ($incredibox.outerHeight() - 252) * stageScale, m = {
                px: l.offset().left,
                py: l.offset().top,
                width: l.outerWidth() * stageScale * poloScale,
                height: l.outerHeight() * stageScale * poloScale
            }
        }, this.getId = function() {
            return N
        }, this.getPicto = function() {
            return y
        }, this.getAssetId = function() {
            return D
        }, this.getMoment = function() {
            return k
        }, this.getLoop = function() {
            return w
        }, this.getEnabled = function() {
            return P
        }, this.getBusy = function() {
            return F
        }, this.getHover = function() {
            return q
        }, this.getMode = function() {
            return z
        }, this.getDeleting = function() {
            return L
        }, this.getPlaying = function() {
            return M
        }, this.getDiv = function() {
            return l
        }, this.getMute = function() {
            return E
        }, this.getHide = function() {
            return R
        }, this.getSolo = function() {
            return I
        }, this.setSolo = function(e) {
            (I = e) ? s.$btcSolo.addClass("light"): s.$btcSolo.removeClass("light")
        }, this.setLoop = function(e) {
            w = e
        }, this.setMoment = function(e) {
            k = e
        }, this.setPlaying = function(e) {
            M = e
        }, this.habiller = function(e, t, o, i, n) {
            s.checkState(), y = e, D = e.getId(), k = t, S = o.imgData, A = o.headHeight, T = o.imgSprite, W = o.color, C = S.length, F = !0, u.css({
                "background-color": "#" + W
            }), V ? s.mode("waiting") : (B = !0, TweenMax.delayedCall(i, function() {
                s.rebond(n)
            })), recordMix.xmlAction("append", s)
        }, this.checkState = function() {
            L && (V || (TweenMax.killTweensOf(s), s.remonte(0, !0, !1)))
        }, this.deshabiller = function(e, t) {
            B && (B = !1, TweenMax.killTweensOf(s.rebond), TweenMax.killTweensOf(s.rebond2)), L = !0, F = !1, y.desactiver(), y.checkusedTouchStart();
            s.posY;
            var o = t ? 0 : .3;
            TweenMax.to(s, o, {
                posY: K,
                ease: Quint.easeIn,
                onComplete: s.remonte,
                onCompleteParams: [0, !0, t],
                delay: e,
                overwrite: !0
            }), this.hideLoader(), recordMix.xmlAction("remove", s)
        }, this.baisser = function(e, t) {
            this.posY = K
        }, this.remonte = function(e, t, o) {
            if (V = !0, !0 === t) {
                var i = !modeReplay && !modeRandom && !modeWatch;
                y.reactiver(i), s.reinit(), majListPoloDrop()
            }
            s.mode("normal");
            var n = J + Math.round(Math.random() * ee),
                a = (s.posY, o ? 0 : .4),
                l = o ? 0 : e;
            TweenMax.to(s, a, {
                posY: n,
                ease: Back.easeOut,
                delay: l,
                onComplete: function() {
                    V = !1
                },
                overwrite: !0
            })
        }, this.rebond = function(e) {
            var t = s.posY - 20,
                o = M ? "anime" : "waiting",
                i = e ? 0 : .1;
            o = s.getMute() ? "mute" : o, s.mode(o), TweenMax.to(s, i, {
                posY: t,
                ease: Quint.easeOut,
                onComplete: s.rebond2,
                onCompleteParams: [e],
                overwrite: !0
            }), B = !1
        }, this.rebond2 = function(e) {
            var t = s.posY + 20,
                o = e ? 0 : .2;
            TweenMax.to(s, o, {
                posY: t,
                ease: Back.easeOut,
                overwrite: !0
            })
        }, this.showLoader = function() {
            p = !0, c.addClass("show"), u.css({
                "animation-duration": decimal(getRemainingTime() / 1e3, 2) + "s"
            }), u.addClass("progress")
        }, this.hideLoader = function() {
            p && (p = !1, c.removeClass("show"), u.removeClass("progress"))
        }, this.hideYourself = function() {
            (M || F) && (R = !0, Y = E ? 1 - X : Y, s.mode("hide"))
        }, this.stopHidingYourself = function() {
            (M || F) && s.mode("unhide")
        }, this.stopHidingYourselfComplete = function() {
            R = !1, E ? s.mode("mute") : M ? s.mode("anime") : s.mode("waiting")
        };
        var oe = 0,
            ie = [],
            ne = [
                [0, 1, 2, 2, 1, 0],
                [0, 3, 4, 5, 6, 7, 8, 0],
                [0, 3, 4, 4, 3, 0],
                [0, 1, 2, 2, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1, 2, 2, 2, 2, 0],
                [0, 1, 2, 2, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 2, 2, 9, 9, 9, 9, 2, 2, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0],
                [0, 1, 2, 2, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 2, 2, 2, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1, 2, 2, 10, 10, 10, 10, 10, 2, 2, 0]
            ];

        function ae() {
            var e = random(7) + 2;
            TweenMax.delayedCall(e, se)
        }

        function se() {
            O = getTime();
            var e = random(ne.length - 1);
            ie = ne[e], H = ie.length, oe = H / (36 * H), s.mode("cligne")
        }
        var le = appDesktop ? 420 : 400,
            re = 164 * Z,
            ce = le * Z,
            ue = 164 * Q,
            pe = le * Q,
            de = 164 * Z,
            fe = 380 * Z,
            me = 164 * Q,
            ve = 380 * Q,
            he = 40,
            be = 492,
            xe = 0,
            ge = 97 * Z,
            ke = 164 * Z,
            $e = he * Z,
            we = 164 * Q,
            Ce = he * Q,
            ye = 450 * Q,
            De = 16 * Q,
            Se = 16 * Z,
            Te = 7 * Z,
            Ae = 54,
            Be = 110,
            Pe = 95,
            Fe = 110;

        function Me() {
            j.globalAlpha = 1, j.drawImage(_, 0, 0, ue, pe, s.posX, s.posY, re, ce)
        }

        function Le(e, t) {
            e *= Q, t *= Q, j.drawImage(_, e, t, we, Ce, s.posX, s.posY + ge, ke, $e)
        }

        function Ee() {
            j.globalAlpha = 1 - U, j.drawImage(_, ue, 0, ue, pe, s.posX, s.posY, re, ce)
        }

        function Ie() {
            Me(), Le(be, xe), Ee()
        }

        function Re() {
            j.globalAlpha = 1, j.drawImage(T, 0, 0, me, ve, s.posX, s.posY, de, fe)
        }

        function Oe() {
            Re(), j.globalAlpha = 1 - X, j.drawImage(T, 2 * me, 0, me, ve, s.posX, s.posY, de, fe)
        }

        function He() {
            Re(), Y = 1, j.globalAlpha = Y, j.drawImage(T, 2 * me, 0, me, ve, s.posX, s.posY, de, fe)
        }

        function Ne() {
            Re();
            var e = E ? 1 - X : 0;
            Y = Y <= e ? e : decimal(Y - .1, 2), j.globalAlpha = Y, j.drawImage(T, 2 * me, 0, me, ve, s.posX, s.posY, de, fe), Y <= e && s.stopHidingYourselfComplete()
        }

        function je() {
            B ? Ie() : (s.anime(), j.globalAlpha = 1, j.drawImage(T, me, 0, me, ve, s.posX, s.posY, de, fe), j.drawImage(T, h, Math.ceil(b) + 1, me, Math.floor(A * Q) - 1, s.posX + x, Math.ceil(s.posY + g) + 1, de, Math.floor(A * Z) - 1))
        }

        function We() {
            var e = timenow - O,
                t = Math.floor(e * oe);
            t = t > H - 1 ? H - 1 : t, Me(), Le(be, ie[t] * he), Ee(), t >= H - 1 && s.mode("normal")
        }

        function ze() {
            if (L) je();
            else {
                Me();
                var e = s.getPupPos(Ae, Be),
                    t = s.getPupPos(Pe, Fe);
                j.drawImage(_, 0, ye, De, De, e[0], e[1], Se, Se), j.drawImage(_, 0, ye, De, De, t[0], t[1], Se, Se), mouseY < f + s.posY + 50 ? Le(328, 120) : mouseY >= f + s.posY + 50 && mouseY < f + s.posY + 100 ? Le(328, 80) : mouseY >= f + s.posY + 180 ? Le(328, 40) : Le(328, 0)
            }
        }

        function Ve() {
            ze(), Ee()
        }

        function _e() {
            ze()
        }
        this.mode = function(e) {
            if (e != z) switch (TweenMax.killTweensOf(se), z = e) {
                case "normal":
                    G = Ie, ae();
                    break;
                case "cligne":
                    G = We;
                    break;
                case "regarde":
                    G = Ve;
                    break;
                case "hover":
                    G = _e;
                    break;
                case "waiting":
                    G = Re;
                    break;
                case "anime":
                    G = je;
                    break;
                case "mute":
                    G = Oe;
                    break;
                case "hide":
                    G = He;
                    break;
                case "unhide":
                    G = Ne
            }
        }, this.draw = function() {
            G()
        }, this.updateLoader = function() {}, this.anime = function() {
            var e = frame;
            boucleA && C == frameTotal && (e += frameHalf), h = S[e = e >= C - 1 ? C - 1 : e][0] * Q, b = S[e][1] * Q, x = S[e][2] * Z, g = S[e][3] * Z
        }, this.getPupPos = function(e, t) {
            var o = (mouseY - f) / stageScale,
                i = (mouseX - d) / stageScale / poloScale - e - this.posX / Z,
                n = o / poloScale - t - this.posY / Z,
                a = Math.atan2(n, i);
            return [Te * Math.cos(a) + (s.posX + e * Z), Te * Math.sin(a) + (s.posY + t * Z)]
        };
        var Ge = 0,
            Ue = 0,
            Xe = isTouchCapable ? 60 * stageScale : 20,
            Ye = 0,
            qe = isTouchCapable ? 60 * stageScale : 20;

        function Qe(e) {
            notnull(e) && e.preventDefault(), I ? (1 == getTotalSolo() ? stopSoloPolo() : s.mute(), I = !1) : s.switchMute(), E || I || stopOtherSolo()
        }

        function Ze(e) {
            notnull(e) && e.preventDefault(), clickPolo(s)
        }

        function Ke(e) {
            notnull(e) && e.preventDefault(), I ? (I = !1, unmuteAll(s)) : (I = !0, muteAll(s))
        }
        this.activerClick = function() {
            P = !0, l.on(evtPress, s.touchStart), s.activerCtrl()
        }, this.desactiverClick = function() {
            P = !1, TweenMax.killTweensOf(s.touchLong), l.off(evtPress, s.touchStart), l.off(evtMove, s.touchMove), l.off(evtPressEnd, s.touchEnd), s.desactiverCtrl()
        }, this.touchStart = function(e) {
            e.preventDefault(), !1;
            var t = notnull((e = ~e.type.indexOf("touch") ? e.originalEvent : e).targetTouches) ? e.targetTouches[0] : e;
            Ge = Ue = t.pageX, Ye = t.pageY, TweenMax.delayedCall(.25, s.touchLong, [e]), l.off(evtPress, s.touchStart), l.on(evtMove, s.touchMove), l.on(evtPressEnd, s.touchEnd)
        }, this.touchMove = function(e) {
            e.preventDefault();
            var t = notnull((e = ~e.type.indexOf("touch") ? e.originalEvent : e).targetTouches) ? e.targetTouches[0] : e;
            Ue = t.pageX, t.pageY > Ye + qe && Math.abs(Ue - Ge) < Xe && (TweenMax.killTweensOf(s.touchLong), clickPolo(s))
        }, this.touchLong = function(e) {
            e.preventDefault(), TweenMax.killTweensOf(s.touchLong), I = !0, soloPolo(), s.$btcSolo.addClass("light")
        }, this.touchEnd = function(e) {
            e.preventDefault(), !0, TweenMax.killTweensOf(s.touchLong), l.off(evtMove, s.touchMove), l.off(evtPressEnd, s.touchEnd), l.on(evtPress, s.touchStart), I ? (1 == getTotalSolo() ? stopSoloPolo() : s.mute(), I = !1, s.$btcSolo.removeClass("light")) : s.switchMute()
        }, this.activerCtrl = function() {
            isMouseDevice && !isTouchDevice && (te.addClass("visible").on(evtPress, stopProp), s.$btcMute.on(evtClick, Qe), s.$btcSolo.on(evtClick, Ke), s.$btcStop.on(evtClick, Ze))
        }, this.desactiverCtrl = function() {
            isMouseDevice && !isTouchDevice && (te.removeClass("visible").off(), s.$btcMute.off().removeClass("light"), s.$btcSolo.off().removeClass("light"), s.$btcStop.off().removeClass("light"))
        }, this.playSound = function() {
            M = !0, this.sound.play(), w++
        }, this.stopSound = function(e) {
            M = !1, this.sound.stop(e)
        }, this.mute = function() {
            E = !0, R || (s.mode("mute"), s.$btcMute.addClass("light")), s.sound.mute(), recordMix.xmlAction("mute", s)
        }, this.unmute = function() {
            E = !1, R || (M ? this.mode("anime") : this.mode("waiting"), s.$btcMute.removeClass("light")), this.sound.unmute(), recordMix.xmlAction("unmute", s)
        }, this.switchMute = function() {
            E ? s.unmute() : s.mute()
        }, this.hitTest = function(e, t) {
            var o = e / stageScale,
                i = t / stageScale;
            return o > m.px && o < m.px + m.width && i > m.py && i < v
        }, this.hitTestPicto = function(e) {
            if (!F && !L) {
                var t = e.getBound();
                return s.hitTest(Math.round(t.px * stageScale), Math.round(t.py * stageScale))
            }
            return !1
        }, this.rollover = function() {
            q || (q = !0, s.mode("hover"))
        }, this.rollout = function(e) {
            !!notnull(e) && e ? (q = !1, s.mode("normal")) : q && (q = !1, s.mode("regarde"))
        }, this.setPosition(), this.reinit()
    },
    PictoObject = function(e, t) {
        var o, i, n, a = this,
            s = e,
            l = $("#picto" + s, t),
            r = $(".scale", l),
            c = !1,
            u = l.innerWidth(),
            p = 0,
            d = isMobile ? 1.1 : 1.2,
            f = 0,
            m = {
                px: 0,
                py: 0
            };
        this.getDiv = function() {
            return l
        }, this.getId = function() {
            return s
        }, this.getColor = function() {}, this.use = !1, this.polo = null, this.init = function(e, t) {
            f = -s * u, l.css({
                top: t + "px",
                left: e + "px"
            }), r.css({
                "background-position": String(f) + "px 0px"
            }), a.setPosition()
        }, this.setPosition = function() {
            l.parent().offset().top, l.parent().offset().left, i = l.offset().left, n = l.offset().top
        }, this.getBound = function() {
            return m
        }, this.activer = function() {
            a.desactiver(), l.on(evtPress, a.touchStart)
        }, this.desactiver = function() {
            l.off(), notnull(o) && (o.off(evtMove, a.touchMove), o.off(evtPressEnd, a.touchEnd), o.off(evtPressEnd, a.usedTouchEnd))
        }, this.touchStart = function(e) {
            e.preventDefault(), c || (isMouseDevice && !isTouchDevice && $(".polo").addClass("noPointerEvents"), c = !0, l.off(), (o = ~e.type.indexOf("touch") ? l : $body).on(evtMove, a.touchMove), o.on(evtPressEnd, a.touchEnd), l.removeClass("flashme"), l.addClass("drag"), a.touchMove(e), pictoOnDrag(a))
        }, this.touchMove = function(e) {
            e.preventDefault();
            var t = notnull((e = ~e.type.indexOf("touch") ? e.originalEvent : e).targetTouches) ? e.targetTouches[0] : e;
            a.bouger(t.pageX, t.pageY), e.preventDefault(), pictoOnMove(a)
        }, this.touchEnd = function(e) {
            e.preventDefault(), isMouseDevice && !isTouchDevice && $(".polo").removeClass("noPointerEvents"), a.stopDrag(), pictoOnDrop(a)
        }, this.stopDrag = function() {
            c = !1, o.off(evtMove, a.touchMove), o.off(evtPressEnd, a.touchEnd), l.removeClass("drag")
        }, this.bouger = function(e, t) {
            m = {
                px: e,
                py: t
            };
            var o = (e - i) / stageScale,
                a = (t - n) / stageScale;
            o -= u / 2 * pictoScale, a -= u / d * pictoScale, o /= pictoScale, a /= pictoScale, l.css({
                transform: "translate3d(" + o + "px, " + a + "px, 0px)"
            })
        }, this.replacer = function() {
            c && a.stopDrag(), l.addClass("replacer").one(animationEnd, a.replacerFini)
        }, this.absorber = function(e) {
            l.css({
                transform: "translate3d(0px, 0px, 0px)"
            }), r.css({
                "background-position": String(f) + "px -68px"
            }), l.removeClass("replacer"), l.addClass("griser"), a.use = !0, a.polo = e, l.off().on(evtPress, a.usedTouchStart)
        }, this.reactiver = function(e) {
            var t = !!notnull(e) && e;
            r.css({
                "background-position": String(f) + "px 0px"
            }), l.removeClass("griser"), !t || modeRandom || modeReplay ? a.replacerFini() : l.addClass("flashme").one(animationEnd, function(e) {
                $(e.target).removeClass("flashme"), a.replacerFini()
            })
        }, this.replacerFini = function() {
            l.removeClass("replacer"), l.css({
                transform: "translate3d(0px ,0px, 0px)"
            }), a.use = !1, a.activer()
        }, this.usedTouchStart = function(e) {
            e.preventDefault(), p = getTime(), showPoloInArray([a.polo.getId()]), o.on(evtPressEnd, a.usedTouchEnd)
        }, this.usedTouchEnd = function(e) {
            e.preventDefault(), o.off(evtPressEnd, a.usedTouchEnd), stopShowingPoloInArray(p), p = 0
        }, this.checkusedTouchStart = function() {
            0 != p && a.usedTouchEnd()
        }
    },
    BonusObject = function(e, t, o, i) {
        var n, a = this,
            s = t,
            l = e + 1,
            r = $("#bt-bonus-" + l),
            c = r.find(".quarter"),
            u = $(".circle", r),
            p = $("#box-video .video#video" + l),
            d = $("#box-video .video#video" + l + " video")[0],
            f = !1,
            m = !1,
            v = !1,
            h = new SoundObject(o, "bonus" + l),
            b = new SoundObject(o, "aspire" + l),
            x = new SoundObject(o, "expire" + l),
            g = i.snd,
            k = i.aspire,
            w = i.expire,
            C = numberArray(s.code.split(",")),
            y = C.length,
            D = [],
            S = 0,
            T = 0;
        this.tabSVG = D, this.video = d, this.found = !1, this.unlock = !1, a.cntCode = 0, this.init = function() {
            var e = storage.getItem("v" + appVersion + "-bonus-complete") || 0;
            a.getId() <= e && a.unlockme();
            for (var t = 0; t < y; t++) {
                var o = {
                    obj: $(".svg.q" + (t + 1), c),
                    col: $(".svg.q" + (t + 1) + " svg", c).css("fill")
                };
                D.push(o)
            }
            a.modeTouch()
        }, this.reinit = function() {
            a.hideLoader(), r.removeClass("inprogress found bounce"), c.find(".svg").removeClass("directshow show hide"), a.found = !1, a.inprogress = !1, a.cntCode = 0, a.modeTouch()
        }, this.modeTouch = function() {
            r.off().on(evtPress, a.touchStart)
        }, this.modeClick = function() {
            r.off().on("click", a.launchVideo)
        }, this.unlockme = function() {
            r.addClass("unlock"), this.unlock = !0
        }, this.getId = function() {
            return l - 1
        }, this.getCode = function() {
            return C
        };
        var A = $('<div class="zone"><div class="loader"><div class="bar"></div></div></div>'),
            B = $(".loader", A),
            P = $(".bar", A),
            F = !1;
        $boxLoaderBonus.append(A), this.showLoader = function() {
            F = !0, B.addClass("show"), P.css({
                "animation-duration": decimal(getRemainingTimeBeforeBonus() / 1e3, 2) + "s"
            }), P.addClass("progress")
        }, this.hideLoader = function() {
            F && (F = !1, B.removeClass("show"), P.removeClass("progress"))
        };
        var M = new ClockObject("canvas-bt-bonus-" + l);
        M.init(43, 43, 1, 35, 16), this.playAspiration = function(e) {
            e = notnull(e) ? e : 0, b.prepare(k, 0), b.play(e, !0), v = !0
        }, this.stopAspiration = function() {
            v && (b.stop(), v = !1)
        }, this.playExpiration = function() {
            x.prepare(w, 1), x.play(0, !0)
        }, this.stopExpiration = function() {
            x.stop()
        }, this.hasCode = function(e) {
            return -1 != C.indexOf(e)
        }, this.checkCode = function(e, t) {
            var o = C.indexOf(e);
            o > -1 && (t ? a.showQuarter(o) : a.hideQuarter(o))
        }, this.showQuarter = function(e) {
            a.cntCode++;
            var t = D[e].obj,
                o = D[e].col;
            a.cntCode == y && a.unlock && a.hasBeenFound(), 1 == a.cntCode && (a.inprogress = !0, r.addClass("inprogress")), u.addClass("show").one(animationEnd, function(e) {
                $(e.target).removeClass("show")
            }), u.css({
                "border-color": o
            }), t.removeClass("hide").addClass("directshow show")
        }, this.hideQuarter = function(e) {
            var t = D[e].obj;
            a.unlock ? t.addClass("hide").one(animationEnd, function(e) {
                $(e.target).removeClass("directshow show hide")
            }) : t.removeClass("directshow show hide"), a.cntCode == y && (cancelClickBtBonus(), this.notFoundAnymore()), a.cntCode--, a.cntCode < 0 && (a.cntCode = 0), 0 == a.cntCode && (a.inprogress = !1, r.removeClass("inprogress"))
        }, this.hideClock = function() {
            M.stop(!0)
        }, this.render = function(e) {
            M.render()
        }, this.hasBeenFound = function() {
            modeReplay || (r.addClass("found bounce"), popupBonusUnlocked()), a.modeClick(), a.found = !0
        }, this.notFoundAnymore = function() {
            modeReplay || r.removeClass("found bounce"), a.found = !1, a.hideClock(), a.hideLoader(), a.modeTouch()
        }, this.touchStart = function(e) {
            e.preventDefault(), a.unlock ? bonusPlaying || ((n = ~e.type.indexOf("touch") ? r : $body).on(evtPressEnd, a.touchEnd), S = getTime(), showPoloAndPictoInCombo(l)) : popupFindPreviousBonus()
        }, this.touchEnd = function(e) {
            e.preventDefault(), n.off(evtPressEnd, a.touchEnd), stopShowingPoloInArray(S)
        }, this.launchVideo = function() {
            if (!bonusWaiting && !bonusPlaying) {
                var e = !app.bonusloopA || boucleA;
                !modeWatch && getRemainingTime() < 500 && e || (m = !0, a.modeTouch(), a.showLoader(), recordMix.xmlAction("bonus", a), clickBtBonus(l), r.removeClass("bounce"), u.addClass("showCircle").one(animationEnd, function(e) {
                    $(e.target).removeClass("showCircle")
                }), a.prepareVideo(1))
            }
        }, this.prepareVideo = function(e) {
            0,
            T = app.looptime * (e - 1) / 1e3,
            d.currentTime = T
        }, this.videoPlaying = function() {}, this.videoEnded = function() {}, this.loopAtFirstFrame = function() {
            0,
            d.currentTime = T
        }, this.checkCurrentTime = function() {}, this.play = function() {
            d.play(), m = !1, f = !0, v = !1, d.currentTime = T, r.addClass("playing"), a.hideLoader(), M.start(loopDuration * app.nbloopbonus, !1), h.prepare(g), h.play(T), p.addClass("show")
        }, this.stop = function(e) {
            r.removeClass("playing"), loopOn && a.found && a.modeClick(), f && (h.stop(), M.stop(!0)), a.stopAspiration(), m = !1, f = !1, p.removeClass("show")
        }, this.pause = function() {
            m && d.pause(), f && (d.pause(), h.pause()), v && b.pause(), M.pause()
        }, this.resume = function() {
            m && d.play(), f && (d.play(), h.unpause()), v && b.unpause(), M.resume()
        }, this.init()
    },
    SoundObject = function(e, t) {
        var o, i, n, a, s, l = this,
            r = e,
            c = null,
            u = null,
            p = null,
            d = !1,
            f = !1,
            m = isIOS,
            v = !1,
            h = !1,
            b = m ? 0 : 1e-4,
            x = debugMute ? b : 1;
        this.getMute = function() {
            return d
        }, this.getDuration = function() {
            return null != u ? u.duration : 0
        }, this.getCurrentTime = function() {
            return null != c && null != c.context ? c.context.currentTime : 0
        }, this.setSilence = function() {
            x = b, h = !0
        }, this.setVolume = function(e) {
            m ? o.gain.value = e : o.gain.setValueAtTime(e, r.currentTime)
        }, this.onComplete = function(e) {
            c.onended = e, p = e
        }, this.prepare = function(e, t) {
            u = e, (c = (r = contextAudio).createBufferSource()).buffer = u, u.duration, o = r.createGain();
            var i = 0 == t || d || h ? b : x;
            l.setVolume(i), c.connect(o), o.connect(r.destination)
        }, this.play = function(e, t) {
            v = !0, i = getTime(), a = (a = (a = decimal(e, 3) || 0) > l.getDuration() ? decimal(l.getDuration(), 2) - .01 : a) < 0 ? 0 : a, c.start(0, a), !0 !== t || d || h || l.fadeIn()
        }, this.stop = function(e) {
            !0 === e || null === c || !v || h || d ? l.stopSource() : l.fadeOut(!0)
        }, this.stopSource = function() {
            clearInterval(s), null != c && v && (isIOS && iosVersionNumber < 103 ? c.noteOff(0) : c.stop(0), c.onended = null), c = null, o = null, f || (d = !1, i = 0, n = 0, a = 0, p = null, v = !1)
        }, this.fadeOut = function(e) {
            var t = !0 === e;
            m ? (clearInterval(s), s = setInterval(function() {
                var e = decimal(o.gain.value - .15, 1);
                e = e <= b ? b : e, o.gain.value = e, e <= b && (clearInterval(s), t && l.stopSource())
            }, 10)) : (o.gain.setValueAtTime(o.gain.value, r.currentTime), o.gain.exponentialRampToValueAtTime(b, r.currentTime + .025), t && (c.stop(r.currentTime + .025), c.onended = l.stopSource))
        }, this.fadeIn = function() {
            m ? (clearInterval(s), s = setInterval(function() {
                var e = decimal(o.gain.value + .15, 1);
                e = e >= x ? x : e, o.gain.value = e, e >= x && clearInterval(s)
            }, 10)) : (o.gain.setValueAtTime(o.gain.value, r.currentTime), o.gain.exponentialRampToValueAtTime(x, r.currentTime + .025))
        }, this.mute = function() {
            null == c || h || l.fadeOut(), d = !0
        }, this.unmute = function() {
            null == c || h || l.fadeIn(), d = !1
        }, this.pause = function() {
            f = !0, n = getTime(), l.stop()
        }, this.unpause = function() {
            if (f = !1, this.prepare(u, 0), null != c && (notnull(p) && (c.onended = p), v)) {
                var e = n - i;
                e = e < 0 ? 0 : e, l.play(a + e / 1e3, !0)
            }
        }
    },
    ClockObject = function(e) {
        var t, o, i, n, a, s, l, r, c, u, p, d = $("#" + e)[0].getContext("2d"),
            f = 2 * Math.PI,
            m = Math.PI / 2,
            v = !1,
            h = !1,
            b = 0;
        this.start = function(e, t) {
            l = isDarkMode() ? "#CCCCCC" : "#5A5A5A", d.strokeStyle = l, v = !0, h = !1, p = t, u = 100 / e, c = getTime()
        }, this.stop = function(e) {
            v = !1, e ? d.clearRect(o - a - s / 2, i - a - s / 2, 2 * a + s, 2 * a + s) : (h = !0, t = p ? 0 : 1)
        }, this.pause = function() {
            b = getTime()
        }, this.resume = function() {
            var e = getTime() - b;
            c += e
        }, this.render = function() {
            if (v || h) {
                if (v) {
                    var e = getTime() - c;
                    r = e * u / 100
                } else h && (r += .2 * (t - r));
                r < .001 && (r = .001), r > .999 && (r = .999);
                var n = p ? -m : f * r - m,
                    l = p ? f * r - m : -m;
                d.clearRect(o - a - s / 2, i - a - s / 2, 2 * a + s, 2 * a + s), d.beginPath(), d.arc(o, i, a, n, l, !1), d.stroke(), h && (.001 != r && .999 != r || (h = !1, d.clearRect(o - a - s / 2, i - a - s / 2, 2 * a + s, 2 * a + s)))
            }
        };
        this.checkAtEnd = function() {
            !0
        }, this.init = function(e, t, r, c, u, p) {
            o = void 0 == e ? 0 : e, i = void 0 == t ? 0 : t, n = void 0 == r ? 1 : r, a = void 0 == c ? 18 : c, s = void 0 == u ? 6 : u, l = void 0 == p ? "#FFFFFF" : p, d.lineWidth = s, d.strokeStyle = l, d.globalAlpha = n
        }
    },
    ReadingBar = function(e, t, o) {
        var i, n = this,
            a = $(e),
            s = $("#reading-buffer", a),
            l = $cntRecord.find("#t-spent"),
            r = $cntRecord.find("#t-duration"),
            c = "00:00",
            u = !1,
            p = 0,
            d = "record",
            f = secToText(app.looptime * app.recmaxloop),
            m = 0,
            v = 0;
        this.minLoop = t, this.maxLoop = o, this.maxTime = 0, this.cntLoop = 0, this.bonusList = [], this.isFinished = function() {
            return this.cntLoop == this.maxLoop
        }, this.isLastLoop = function() {
            return this.cntLoop + 1 == this.maxLoop
        }, this.open = function(e, t) {
            return d = e, n.createRecordBlock(t), n.cntLoop = 0, n.maxTime = "record" == d ? f : secToText(n.maxLoop * app.looptime), s.css({
                transform: "scaleX(0)"
            }), c = "00:00", l.text(c), r.text(" / " + n.maxTime), m = 0, v = 100 / readingBar.maxLoop, a.addClass("open"), $cntRecord.addClass("fadeIn"), callParentWindow("replayTime", {
                state: "open",
                spent: c,
                duration: n.maxTime
            }), n
        }, this.close = function() {
            return removeTransition(a, "open", "transform", function() {
                s.removeClass("progress"), $("#reading-marker").empty(), $("#reading-marker-bonus").empty(), n.bonusList = []
            }), $cntRecord.removeClass("fadeIn cssdelay"), n
        }, this.start = function() {
            return u = !0, n.cntLoop = 0, p = 0, "record" == d ? recordMix.start() : replayMix.start(), n.render(), m = Math.floor(p + i) / n.maxLoop, s.css({
                transform: "scaleX(" + m / 100 + ")",
                "animation-duration": decimal(n.maxLoop * app.looptime / 1e3, 2) + "s"
            }), s.addClass("progress"), callParentWindow("replayTime", {
                state: "start",
                spent: c,
                duration: n.maxTime
            }), n
        }, this.stop = function() {
            return u = !1, "record" == d ? recordMix.stop() : replayMix.stop(), callParentWindow("replayTime", {
                state: "stop",
                spent: c,
                duration: n.maxTime
            }), n
        }, this.froze = function() {
            s.addClass("froze")
        }, this.seek = function(e) {
            n.cntLoop = e, s.removeClass("progress"), resetAnimationCSS(s[0]), s.css({
                transform: "scaleX(" + v * n.cntLoop / 100 + ")"
            }), n.render()
        }, this.unfroze = function() {
            s.css({
                transform: "scaleX(" + v * n.cntLoop / 100 + ")",
                "animation-duration": decimal((n.maxLoop - n.cntLoop) * app.looptime / 1e3, 2) + "s"
            }), s.removeClass("froze").addClass("progress")
        }, this.openBig = function() {
            a.addClass("seeking")
        }, this.openNormal = function() {
            a.removeClass("seeking")
        }, this.loop = function() {
            return n.cntLoop++, p += i, n.isFinished() ? "record" == d ? stopRecordMode() : stopReplayMode() : "record" == d ? recordMix.loop() : replayMix.loop(), n
        }, this.render = function() {
            if (u) {
                i = pctMetronome;
                var e = secToText(getTimeSpent() + loopDuration * n.cntLoop);
                c != e && (c = e, l.text(c), callParentWindow("replayTime", {
                    state: "render",
                    spent: c,
                    duration: n.maxTime
                }))
            }
        }, this.createRecordBlock = function(e) {
            var t = "record" == d ? "#D20A0A" : isMiniPlayer ? "#2C86FE" : "#36B460",
                o = "record" == d ? decimal(n.minLoop / n.maxLoop, 2) : 0;
            if ($("#reading-block", a).css({
                    transform: "scale(" + o + ", 1)"
                }), $($cntRecord).css({
                    color: t
                }), s.css({
                    "background-color": t
                }), !0 === e) {
                var i = "",
                    l = parseFloat($incredibox.css("width")) / n.maxLoop,
                    r = 0;
                for (r = 0; r < n.maxLoop; r++) {
                    i += "<div class='marker' style='left:" + l * r + "px'></div>"
                }
                for ($("#reading-marker").html(i), i = "", "", r = 0; r < n.bonusList.length; r++) {
                    i += "<div class='marker' style='left:" + l * n.bonusList[r].loopIndex + "px; width:" + l + "px'></div>"
                }
                $("#reading-marker-bonus").html(i)
            }
        }, this.createRecordBlock()
    },
    RenderRAF = function(e, t) {
        var o, i, n = e || -1,
            a = t || function() {},
            s = !1;

        function l() {
            if (s) return !1;
            o = requestAnimationFrame(l), a()
        }
        this.start = function(e) {
            s = !1, 0, 1e3 / (n = e || n), i = Date.now(), i, l()
        }, this.stop = function() {
            s = !0, cancelAnimationFrame(o)
        }
    },
    Spinner = {
        $bt: null,
        $svg: null,
        xlink: "",
        add: function(e) {
            notnull(e) && (this.$bt = e, this.$svg = this.$bt.find("svg use"), this.$svg.length > 0 && (this.xlink = this.$svg.attr("xlink:href"), this.$svg.attr("xlink:href", "#ic-loader")), this.$bt.addClass("spin"))
        },
        reset: function() {
            notnull(this.$bt) && this.$bt.removeClass("spin"), notnull(this.$svg) && this.$svg.length > 0 && this.$svg.attr("xlink:href", this.xlink), this.$bt = null, this.$svg = null, this.xlink = ""
        }
    };

function CanvasObj(e) {
    var t, o = this;
    return this.id = e, this.div = document.getElementById(e), this.context = this.div.getContext("2d"), this.width = this.div.offsetWidth, this.height = this.div.offsetHeight, this.saveImage = function() {
        t = o.context.getImageData(0, 0, o.width, o.height)
    }, this.showImage = function() {
        o.clear(), o.context.putImageData(t, 0, 0)
    }, this.clear = function() {
        o.context.clearRect(0, 0, o.width, o.height)
    }, this
}

function estimateSpeed() {}
var focusList = [],
    focusPos = -1,
    $focused, focusHistory = [],
    $visibleScroll;

function initFocusEvent() {
    appBrowserExpo || (document.addEventListener("keydown", keyDown, !1), $(document).on(evtPress, removeFocus))
}

function killFocusEvent() {
    appBrowserExpo || (document.removeEventListener("keydown", keyDown, !1), $(document).off(evtPress, removeFocus))
}

function keyDown(e) {
    var t = e.key.toLowerCase();
    e.shiftKey && 9 == e.keyCode || (9 == e.keyCode && e.preventDefault(), 27 == e.keyCode && e.preventDefault(), 38 == e.keyCode && e.preventDefault(), 40 == e.keyCode && e.preventDefault(), $("input").is(":focus") || (13 == e.keyCode && e.preventDefault(), 37 == e.keyCode && e.preventDefault(), 39 == e.keyCode && e.preventDefault()), hitKey(t))
}

function nextFocus() {
    if (focusPos++, "playlist-boxline" == focusHistory[focusHistory.length - 1]) {
        focusPos = focusPos > focusList.length - 1 ? focusList.length - 1 : focusPos;
        var e = $visibleScroll.find(".line.focused").index();
        e > 0 && $visibleScroll[0].scroll({
            top: 116 * e,
            left: 0,
            behavior: "smooth"
        })
    } else focusPos = focusPos > focusList.length - 1 ? 0 : focusPos;
    addFocus()
}

function prevFocus() {
    if (focusPos--, "playlist-boxline" == focusHistory[focusHistory.length - 1]) {
        focusPos = focusPos < 0 ? 0 : focusPos;
        var e = $visibleScroll.find(".line.focused").index();
        e > 0 && $visibleScroll[0].scroll({
            top: 116 * e - 232,
            left: 0,
            behavior: "smooth"
        })
    } else focusPos = focusPos < 0 ? focusList.length - 1 : focusPos;
    addFocus()
}

function addFocus(e) {
    notnull($focused) && ($focused.removeClass("focused"), $focused = null), notnull(e) && (focusPos = e), focusList.length > 0 && ($focused = focusList[focusPos].toFocus).addClass("focused")
}

function removeFocus() {
    notnull($focused) && ($focused.removeClass("focused"), $focused = null, focusPos = -1)
}

function enterFocus() {
    notnull($focused) && (notnull(focusList[focusPos].onEnter) ? focusList[focusPos].onEnter() : notnull(focusList[focusPos].toClick) ? focusList[focusPos].toClick.trigger(evtClick.split(" ")[0]) : focusList[focusPos].toFocus.trigger(evtClick.split(" ")[0]))
}

function deleteFocus() {
    if ("popup-menu-exit" == focusHistory[focusHistory.length - 1]) return !1;
    notnull($focused) && ($focused.removeClass("focused"), $focused = null), focusList = [], focusPos = -1
}

function hitKey(e) {
    switch (e) {
        case "tab":
            $("input").is(":focus") && blurAll(), nextFocus();
            break;
        case "enter":
            if (isnull($focused) && "pop-safe-code" == focusHistory[focusHistory.length - 1]) return focusList[10].toFocus.trigger(evtClick.split(" ")[0]), !1;
            $("input").hasClass("focused") && $("input").is(":focus") && (blurAll(), nextFocus()), enterFocus();
            break;
        case "escape":
            if ($("input").is(":focus")) return blurAll(), !1;
            if (appDesktop) return removeFocus(), boxMenu.isOpen() ? (boxMenu.close(), !1) : (popupMenuExit(), !1);
            if (notnull($focused)) return removeFocus(), !1;
            if (pageApp && pause) return !1;
            if (boxDialog.isOpen()) return !1;
            if (pageApp && $lockAll.hasClass("show")) return !1;
            if ("pop-safe-code" == focusHistory[focusHistory.length - 1]) return boxPopup.close(), !1;
            if ("popup-news" == focusHistory[focusHistory.length - 1]) return boxPopup.close(), !1;
            if ("popup-switch" == focusHistory[focusHistory.length - 1]) return boxSwitch.close(), !1;
            if (boxInfo.isOpen()) return "popup-info" == focusHistory[focusHistory.length - 1] ? boxInfo.close() : createFocus("popup-info", 0), !1;
            if (boxParam.isOpen()) return "popup-param" == focusHistory[focusHistory.length - 1] ? boxParam.close() : createFocus("popup-param", 0), !1;
            if (pageApp && boxPopup.isOpen()) return boxPopup.$popup.hasClass("action") || boxPopup.$popup.hasClass("action-back") ? boxPopup.$popup.find("span.icon").trigger(evtClick.split(" ")[0]) : boxPopup.close(), !1;
            if (pageApp && $mixlist.isOpen()) {
                if ("playlist-line-open" == focusHistory[focusHistory.length - 1]) return $lineOpened.trigger(evtPress.split(" ")[0]).trigger(evtPressEnd.split(" ")[0]), !1;
                if ("playlist-boxline" == focusHistory[focusHistory.length - 1]) return createFocus("popup-playlist", 0), !1;
                if ("playlist-boxfilter" == focusHistory[focusHistory.length - 1]) return createFocus("popup-playlist", 0), !1;
                if ("popup-playlist" == focusHistory[focusHistory.length - 1]) return closePlaylist(), !1
            }
            break;
        case " ":
            !(pageApp && onGame && loopOn) || $lockAll.hasClass("show") || void 0 !== boxMenu && boxMenu.isOpen() || $btClock.trigger(evtClick.split(" ")[0]);
            break;
        case "arrowright":
            $("input").is(":focus") || nextFocus();
            break;
        case "arrowleft":
            $("input").is(":focus") || prevFocus();
            break;
        case "arrowdown":
            $("input").is(":focus") || nextFocus();
            break;
        case "arrowup":
            $("input").is(":focus") || prevFocus();
            break;
        case "1":
            "pop-safe-code" == focusHistory[focusHistory.length - 1] && focusList[0].toFocus.trigger(evtClick.split(" ")[0]);
            break;
        case "2":
            "pop-safe-code" == focusHistory[focusHistory.length - 1] && focusList[1].toFocus.trigger(evtClick.split(" ")[0]);
            break;
        case "3":
            "pop-safe-code" == focusHistory[focusHistory.length - 1] && focusList[2].toFocus.trigger(evtClick.split(" ")[0]);
            break;
        case "4":
            "pop-safe-code" == focusHistory[focusHistory.length - 1] && focusList[3].toFocus.trigger(evtClick.split(" ")[0]);
            break;
        case "5":
            "pop-safe-code" == focusHistory[focusHistory.length - 1] && focusList[4].toFocus.trigger(evtClick.split(" ")[0]);
            break;
        case "6":
            "pop-safe-code" == focusHistory[focusHistory.length - 1] && focusList[5].toFocus.trigger(evtClick.split(" ")[0]);
            break;
        case "7":
            "pop-safe-code" == focusHistory[focusHistory.length - 1] && focusList[6].toFocus.trigger(evtClick.split(" ")[0]);
            break;
        case "8":
            "pop-safe-code" == focusHistory[focusHistory.length - 1] && focusList[7].toFocus.trigger(evtClick.split(" ")[0]);
            break;
        case "9":
            "pop-safe-code" == focusHistory[focusHistory.length - 1] && focusList[8].toFocus.trigger(evtClick.split(" ")[0]);
            break;
        case "0":
            "pop-safe-code" == focusHistory[focusHistory.length - 1] && focusList[9].toFocus.trigger(evtClick.split(" ")[0]);
            break;
        case "backspace":
            "pop-safe-code" == focusHistory[focusHistory.length - 1] && boxPopup.$popup.find(".text").text("_ _ _ _")
    }
}

function createFocus(e, t, o) {
    if (appDesktop && boxMenu.isOpen() && "popup-menu-exit" != e) return removeInArray("popup-menu-exit", focusHistory), focusHistory.push(e), focusHistory.push("popup-menu-exit"), !1;
    if (boxDialog.isOpen() && "popup-dialog" != e) return removeInArray("popup-dialog", focusHistory), focusHistory.push(e), focusHistory.push("popup-dialog"), !1;
    if (deleteFocus(), appDesktop && "popup-menu-exit" == e && (boxMenu.$popup.find(".bt-mini").each(function(e) {
            focusList.push({
                toFocus: $(this)
            })
        }), focusList.push({
            toFocus: boxMenu.$popup.find("span.icon")
        })), pageApp && "home" == e && (void 0 != $homeBtNews && $homeBtNews.length > 0 && focusList.push({
            toFocus: $homeBtNews.find(".bck"),
            toClick: $homeBtNews
        }), $("#home-bt-fs").is(":visible") && focusList.push({
            toFocus: $("#home-bt-fs").find(".bck"),
            toClick: $("#home-bt-fs")
        }), focusList.push({
            toFocus: $homeBtInfo.find(".bck"),
            toClick: $homeBtInfo
        }), focusList.push({
            toFocus: $homeBtParam.find(".bck"),
            toClick: $homeBtParam
        }), focusList.push({
            toFocus: $homeBtSwitch.find(".bck"),
            toClick: $homeBtSwitch
        }), focusList.push({
            toFocus: $homeBtPlay.find(".bck"),
            onEnter: function() {
                $homeBtPlay.trigger("click")
            }
        }), focusList.push({
            toFocus: $homeBtList.find(".bck"),
            onEnter: function() {
                $homeBtList.trigger("click")
            }
        })), "popup-news" == e && focusList.push({
            toFocus: boxPopup.$popup.find(".bt-mini")
        }), "popup-info" == e && $("#pop-info .box-tab .tab").each(function(e) {
            focusList.push({
                toFocus: $(this)
            })
        }), "pop-tuto" == e && $("#pop-info #pop-tuto .bt").each(function(e) {
            focusList.push({
                toFocus: $(this).find(".bck"),
                toClick: $(this)
            })
        }), "pop-credit" == e && $("#pop-info #pop-credit .bt-mini").each(function(e) {
            focusList.push({
                toFocus: $(this)
            })
        }), "pop-follow" == e && ($("#pop-info #pop-follow .bt").each(function(e) {
            focusList.push({
                toFocus: $(this).find(".bck"),
                toClick: $(this)
            })
        }), focusList.push({
            toFocus: $("#pop-info #pop-follow #img-shop")
        })), "popup-param" == e && $("#pop-param .box-tab .tab").each(function(e) {
            focusList.push({
                toFocus: $(this)
            })
        }), "pop-language" == e && $("#pop-param #pop-language .bt-mini").each(function(e) {
            focusList.push({
                toFocus: $(this)
            })
        }), "pop-setting" == e && $("#pop-param #pop-setting .bt-mini").each(function(e) {
            focusList.push({
                toFocus: $(this)
            })
        }), "pop-safe-code" == e && (boxPopup.$popup.find(".bt-mini").each(function(e) {
            focusList.push({
                toFocus: $(this)
            })
        }), focusList.push({
            toFocus: boxPopup.$popup.find("span.icon")
        })), "index-select" == e && ($("#sp-select .icon:not(.open)").each(function(e) {
            focusList.push({
                toFocus: $(this).find(".img"),
                toClick: $(this)
            })
        }), focusList.push({
            toFocus: $("#home-bt-info").find(".bck"),
            toClick: $("#home-bt-info")
        }), focusList.push({
            toFocus: $("#home-bt-param").find(".bck"),
            toClick: $("#home-bt-param")
        })), "popup-switch" == e && $("#sp-select .icon:not(.open)").each(function(e) {
            focusList.push({
                toFocus: $(this).find(".img"),
                toClick: $(this)
            })
        }), "toolbar" == e && (focusList.push({
            toFocus: $btTool.find(".bck"),
            toClick: $btTool
        }), focusList.push({
            toFocus: $btClock
        })), "toolbar-open" == e && $("#game #box-bt1 .bt").each(function(e) {
            focusList.push({
                toFocus: $(this).find(".bck"),
                toClick: $(this)
            })
        }), "game-paused" == e && ("visible" == $lockPause.css("visibility") ? focusList.push({
            toFocus: $lockPause.find("#bt-resume"),
            toClick: $lockPause
        }) : focusList.push({
            toFocus: $btClock
        })), "mode-replay" == e && (focusList.push({
            toFocus: $btTool.find(".bck"),
            toClick: $btTool
        }), focusList.push({
            toFocus: $btClock
        }), "visible" === $btSave.css("visibility") ? focusList.push({
            toFocus: $btSave.find(".bck"),
            toClick: $btSave
        }) : $btLike.is(":visible") && focusList.push({
            toFocus: $btLike.find(".bck"),
            toClick: $btLike
        })), "popup-record-complete" == e && (boxPopup.$popup.find(".box-bt-haut .bt").each(function(e) {
            focusList.push({
                toFocus: $(this).find(".bck"),
                toClick: $(this)
            })
        }), focusList.push({
            toFocus: boxPopup.$popup.find("span.icon")
        })), "popup-save-form" == e && (boxPopup.$popup.find(".formzone .formline:visible input").each(function(e) {
            var t = $(this);
            focusList.push({
                toFocus: t,
                onEnter: function() {
                    var e = t.val().length;
                    t.focus(), t[0].setSelectionRange(e, e)
                }
            })
        }), focusList.push({
            toFocus: boxPopup.$popup.find(".bt-onofftext")
        }), focusList.push({
            toFocus: boxPopup.$popup.find(".bt.valid").find(".bck"),
            toClick: boxPopup.$popup.find(".bt.valid")
        }), focusList.push({
            toFocus: boxPopup.$popup.find("span.icon")
        })), "popup-mix-saved" == e && (boxPopup.$popup.find(".box-bt-haut .bt").each(function(e) {
            focusList.push({
                toFocus: $(this).find(".bck"),
                toClick: $(this)
            })
        }), focusList.push({
            toFocus: boxPopup.$popup.find("span.icon")
        })), "popup-global-share" == e && (boxPopup.$popup.find(".box-bt-haut .bt").each(function(e) {
            focusList.push({
                toFocus: $(this).find(".bck"),
                toClick: $(this)
            })
        }), focusList.push({
            toFocus: boxPopup.$popup.find("span.icon")
        })), "popup-email-form" == e && (boxPopup.$popup.find(".formzone .formline input").each(function(e) {
            var t = $(this);
            focusList.push({
                toFocus: t,
                onEnter: function() {
                    var e = t.val().length;
                    t.focus(), t[0].setSelectionRange(e, e)
                }
            })
        }), focusList.push({
            toFocus: boxPopup.$popup.find(".bt.valid").find(".bck"),
            toClick: boxPopup.$popup.find(".bt.valid")
        }), focusList.push({
            toFocus: boxPopup.$popup.find("span.icon")
        })), "popup-convert-mix" == e && focusList.push({
            toFocus: boxPopup.$popup.find("span.icon")
        }), "popup-convert-mix-ready" == e) {
        var i = boxPopup.$popup.find("#bt-save-file");
        focusList.push({
            toFocus: i.find(".bck"),
            onEnter: function() {
                i[0].click()
            }
        }), focusList.push({
            toFocus: boxPopup.$popup.find("span.icon")
        })
    }
    if ("popup-dialog" == e && $("#pop-dialog .bt-mini").each(function(e) {
            focusList.push({
                toFocus: $(this)
            })
        }), "popup-playlist" == e && $("#mixlist .tabbox .tab").each(function(e) {
            focusList.push({
                toFocus: $(this)
            })
        }), "playlist-boxfilter" == e) {
        var n = $("#mixlist .boxfilter:visible");
        n.find(".bt-mini").each(function(e) {
            focusList.push({
                toFocus: $(this)
            })
        }), "searchbox" === n.attr("id") && (focusList.push({
            toFocus: n.find(".formline input"),
            onEnter: function() {
                n.find(".formline input").focus()
            }
        }), focusList.push({
            toFocus: n.find(".bt.search").find(".bck"),
            toClick: n.find(".bt.search")
        }))
    }
    "playlist-boxline" == e && ($visibleScroll = $("#mixlist .scroll:visible")).find(".line").each(function(e) {
        var t = $(this);
        focusList.push({
            toFocus: t,
            onEnter: function() {
                t.trigger(evtPress.split(" ")[0]).trigger(evtPressEnd.split(" ")[0])
            }
        })
    }), "playlist-line-open" == e && $lineOpened.find(".box-action .bt").each(function(e) {
        focusList.push({
            toFocus: $(this).find(".bck"),
            toClick: $(this)
        })
    });
    var a = [];
    for (var s in focusList) isVisible(focusList[s]) && a.push(focusList[s]);
    focusList = a, e != focusHistory[focusHistory.length - 1] && focusHistory.push(e), focusHistory.length > 5 && focusHistory.shift(), notnull(t) && addFocus(t), notnull(o) && (focusPos = o)
}

function isVisible(e) {
    if (notnull(e)) {
        var t = notnull(e.toClick) ? e.toClick : e.toFocus;
        return "hidden" != t.css("visibility") && "none" != t.css("display")
    }
    return !1
}

function initParam() {
    appBrowser && isIOS && $("#home-bt-fs").hide(), isHdefMode() && ($("body").addClass("hdefmode"), $("#pop-setting #param-hdef .bt-mini").addClass("active")), isDarkMode() && ($("body").addClass("darkmode"), $("#pop-setting #param-dark .bt-mini").addClass("active")), isSafeMode() && ($("body").addClass("safemode"), $("#pop-setting #param-safe .bt-mini").addClass("active")), $("#pop-setting #param-reset .bt-mini").on(evtClick, clickbtParamReset).parent().find(".ic-info").on(evtClick, clickbtParamResetInfo), $("#pop-setting #param-dark .bt-mini").on(evtClick, clickbtParamDark), $("#pop-setting #param-safe .bt-mini").on(evtClick, clickbtParamSafe).parent().find(".ic-info").on(evtClick, clickbtParamSafeInfo), $("#pop-setting #param-recover .bt-mini").on(evtClick, clickbtParamRecover).parent().find(".ic-info").on(evtClick, clickbtParamRecoverInfo)
}

function isHdefMode() {
    return !(null == storage.getItem("param-hdef"))
}

function isDarkMode() {
    return !(null == storage.getItem("param-dark"))
}

function isSafeMode() {
    return !(null == storage.getItem("param-safe"))
}

function clickbtParamHdef(e) {}

function clickbtParamHdefInfo(e) {}

function clickbtParamReset(e) {
    e.preventDefault(), storage.removeItem("popup-bonus-next"), storage.removeItem("popup-bonus-unlock");
    for (var t = 1; t <= appTotalVersion; t++) storage.removeItem("v" + t + "-popup-bonus-next"), storage.removeItem("v" + t + "-popup-bonus-unlock"), storage.removeItem("v" + t + "-bonus-complete");
    addTransition($("#fade-all"), "fadeIn", "opacity", function() {
        window.location.href = void 0 !== appNumberVersion ? "?v=" + appNumberVersion : ""
    })
}

function clickbtParamResetInfo(e) {
    e.preventDefault(), boxDialog.open(STR("pop.paramResetInfoText"), "", [STR("bt.gotit")], [])
}

function unlockAllBonus() {
    for (var e = 1; e <= appTotalVersion; e++) storage.setItem("v" + e + "-popup-bonus-next", "ok"), storage.setItem("v" + e + "-popup-bonus-unlock", "ok"), storage.setItem("v" + e + "-bonus-complete", "2");
    addTransition($("#fade-all"), "fadeIn", "opacity", function() {
        window.location.href = void 0 !== appNumberVersion ? "?v=" + appNumberVersion : ""
    })
}

function clickbtParamDark(e) {
    e.preventDefault(), isDarkMode() ? (storage.removeItem("param-dark"), $body.removeClass("darkmode"), $("#pop-setting #param-dark .bt-mini").removeClass("active")) : (storage.setItem("param-dark"), $body.addClass("darkmode"), $("#pop-setting #param-dark .bt-mini").addClass("active"))
}
var paramsafecode = "";

function clickbtParamSafe(e) {
    e.preventDefault(), deleteFocus(), popupCode()
}

function turnOnSafeMode(e) {
    storage.setItem("param-safe", e), $body.addClass("safemode"), $("#pop-setting #param-safe .bt-mini").addClass("active")
}

function turnOffSafeMode() {
    storage.removeItem("param-safe"), $body.removeClass("safemode"), $("#pop-setting #param-safe .bt-mini").removeClass("active")
}

function popupCode() {
    boxPopup.open({
        name: "safe-code",
        icntype: "action",
        content: function() {
            return `<div class='title'>${isSafeMode()?STR("txt.codeEnter"):STR("txt.codeChoose")}</div>\n\t\t\t\t<div class='text'>_ _ _ _</div>\n\t\t\t\t<div class='content'>\n\t\t\t\t\t<div class='bt-mini bt-number soft'><div class='txt'>1</div><div class='hitzone'></div></div>\n\t\t\t\t\t<div class='bt-mini bt-number soft'><div class='txt'>2</div><div class='hitzone'></div></div>\n\t\t\t\t\t<div class='bt-mini bt-number soft'><div class='txt'>3</div><div class='hitzone'></div></div>\n\t\t\t\t\t<div class='bt-mini bt-number soft'><div class='txt'>4</div><div class='hitzone'></div></div>\n\t\t\t\t\t<div class='bt-mini bt-number soft'><div class='txt'>5</div><div class='hitzone'></div></div><br>\n\t\t\t\t\t<div class='bt-mini bt-number soft'><div class='txt'>6</div><div class='hitzone'></div></div>\n\t\t\t\t\t<div class='bt-mini bt-number soft'><div class='txt'>7</div><div class='hitzone'></div></div>\n\t\t\t\t\t<div class='bt-mini bt-number soft'><div class='txt'>8</div><div class='hitzone'></div></div>\n\t\t\t\t\t<div class='bt-mini bt-number soft'><div class='txt'>9</div><div class='hitzone'></div></div>\n\t\t\t\t\t<div class='bt-mini bt-number soft'><div class='txt'>0</div><div class='hitzone'></div></div><br>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div class='bt-mini light' id='bt-valid-code'><div class='txt'>${STR("bt.ok")}</div><div class='hitzone'></div></div>\n\t\t\t\t</div>`
        },
        onBoxOpenEnd: function() {
            createFocus("pop-safe-code"), isSafeMode(), paramsafecode = "", boxPopup.$icon.on(evtClick, boxPopup.close), boxPopup.$popup.find(".bt-number").on(evtClick, function(e) {
                e.preventDefault();
                var t = boxPopup.$popup.find(".text"),
                    o = t.text(),
                    i = o.indexOf("_");
                i > -1 && t.text(o.replaceAt(i, $(this).text())), isSafeMode() && ("15092009" != (paramsafecode += $(this).text()) && t.text().replace(/ /g, "") != storage.getItem("param-safe") || (turnOffSafeMode(), boxPopup.close())), $(this).hasClass("ontouch") && $(this).removeClass("ontouch").get(0).offsetHeight, $(this).addClass("ontouch").one(animationEnd, function(e) {
                    $(e.target).removeClass("ontouch")
                })
            }), boxPopup.$popup.find("#bt-valid-code").on(evtClick, function(e) {
                var t = boxPopup.$popup.find(".text").text().replace(/ /g, ""); - 1 == t.indexOf("_") ? isSafeMode() ? t == storage.getItem("param-safe") ? (turnOffSafeMode(), boxPopup.close()) : boxPopup.$popup.find(".text").addClass("shake").one(animationEnd, function(e) {
                    paramsafecode = "", $(e.target).text("_ _ _ _").removeClass("shake")
                }) : (turnOnSafeMode(t.replace(/ /g, "")), boxPopup.close()) : boxPopup.$popup.find(".text").addClass("shake").one(animationEnd, function(e) {
                    $(e.target).removeClass("shake")
                })
            })
        },
        onBoxCloseStart: function() {
            removeInArray("pop-safe-code", focusHistory), deleteFocus(), boxPopup.$icon.off(), boxPopup.$popup.find(".bt-mini").off()
        },
        onCloseComplete: function() {
            createFocus(focusHistory[focusHistory.length - 1])
        }
    })
}

function clickbtParamSafeInfo(e) {
    e.preventDefault(), boxDialog.open(STR("pop.paramSafeInfoText"), "", [STR("bt.gotit")], [])
}

function clickbtParamRecover(e) {
    e.preventDefault(), hasNetwork ? ($(e.currentTarget).addClass("disable"), storage.restoreAllMix(!0, function(t) {
        "ok" == t.msg ? boxDialog.open(STR("pop.paramRecoverOkText").replace("%{nb_mix}", t.nb), "", [STR("bt.ok")], []) : (boxDialog.open(STR("pop.noCoServerText"), STR("pop.noCoServerTitle"), [STR("bt.ok")], []), $(e.currentTarget).removeClass("disable"))
    })) : boxDialog.open(STR("pop.noNetworkText"), STR("pop.noNetworkTitle"), [STR("bt.ok")], [])
}

function clickbtParamRecoverInfo(e) {
    e.preventDefault(), boxDialog.open(STR("pop.paramRecoverInfoText"), "", [STR("bt.gotit")], [])
}
var gaShouldTrack = !1,
    gaAlreadySet = !1;

function initAnalytics() {
    if (!appBrowser && !appBrowserDemo && (gaShouldTrack = !0, hasNetwork)) {
        ga("create", "UA-155281781-1", {
            storage: "none",
            clientId: machine.uuid
        }), ga(function(e) {});
        var e = "incredibox-" + machine.osTiny;
        e = appCN && isAndroid ? e + "-cn" : e, e = appSQ ? e + "-sq" : e, ga("set", {
            checkProtocolTask: function() {},
            appName: e,
            page: getPageNameGA()
        }), ga("send", "pageview"), gaAlreadySet = !0
    }
}

function saveGA(e, t, o) {
    !appBrowser && hasNetwork && trustAppMobile && (gaAlreadySet ? (o = o || "", ga("send", "event", {
        eventCategory: e,
        eventAction: t,
        eventLabel: o
    })) : initAnalytics())
}

function listenWindowError() {
    window.onerror = function(e, t, o) {
        var i = "Error: " + e + " Script: " + t + " Line: " + o;
        !appBrowser && hasNetwork && gaAlreadySet && ga("send", "exception", {
            exDescription: i,
            exFatal: !1
        })
    }
}
var pageApp = !0,
    isMiniPlayer = getParameterByName("mini"),
    mixlink = getParameterByName("mix"),
    isMixReplay = getParameterByName("replay") || mixlink,
    appNumberVersion = isMixReplay && mixlink ? mixlink.slice(-1) : getParameterByName("v"),
    appVersion = isnull(appNumberVersion) || isNaN(appNumberVersion) || 1 != appNumberVersion.length ? 4 : appNumberVersion,
    iosVersion, iosVersionNumber;
appVersion = isMixReplay && mixlink && -1 == mixlink.indexOf("-") && 13 == mixlink.length ? 2 : appVersion;
var hasNetwork = !1,
    storage = new LocalStorage,
    cloud = new CloudSync,
    localMixObject = new LocalMixObject,
    transitionEnd, animationEnd, $body, $incredibox, $bckGlobal, $lockAll, $lockPause, $lockStage, $fadeAll, $watchInfo, $mixlist, $poplist, $tabMixlist, $tabLatest, $tabSearch, $tabTop50, $home, $homeVersion, $homeTitre, $homeLoadbox, $homeLoadbar, $homeBtPlay, $homeBtList, $homeBtSwitch, $homeBtInfo, $homeBtParam, $homeBck, $gameTouch, $boxVideo, $fadeVideo, $boxTop, $boxBtBonus, $boxBottom, $boxPicto, $boxLoaderBonus, $boxLoaderPolo, $btTool, $boxBt, $btBack, $btHome, $btStop, $btRecord, $btLatest, $btClock, $btSave, $btLike, $btHelp, $btSwitch, $btStop, $btRecord, $btRandom, $btClock, $cntRecord, boxDialog, boxMenu, boxPopup, boxInfo, boxParam, boxSwitch, contextCanvas, contextAudio, desiredSampleRate = 44100,
    appLoaded = !1,
    appViewed = !1,
    modeWatch = !1,
    isBackToHome = !1,
    onGame = !1,
    autoPlayEnabled = !1,
    delayassist = 500,
    clock, mainCanvas, tabBuffer, tabAnime, nbSound, nbSoundBonus, nbSoundTotal, nbSoundLoaded, nbBonus, nbBonusLoaded, nbAnime, nbAnimeLoaded, nbData, nbDataLoaded, nbImage, nbImageLoaded, spritePolo, spritePicto, cntTotalAsset, nbTotalAsset, tabToLoad, cntLoad;

function onDeviceReady() {
    if ((appDesktop || appMobile) && document.body.classList.remove("black"), appDesktop && document.body.classList.add("darkback"), appBrowser && document.getElementById("fade-all").classList.add("white"), initGlobal(), checkSystem(), window.initAnalytics && initAnalytics(), resizeApp(), initRightClick(), initSilentMode(), listenFocus(), initParam(), trustAppMobile)
        if (window.open = cordova.InAppBrowser.open, document.addEventListener("pause", appOnPause, !1), document.addEventListener("resume", appOnResume, !1), isIOS) {
            var e = (iosVersion = device.version).split(".");
            iosVersionNumber = Number(e[0] + "" + e[1]), desiredSampleRate = isiPhone6sAndMore ? 48e3 : desiredSampleRate
        } else isAndroid && (launchImmersiveMode(), window.addEventListener("native.keyboardshow", keyboardOpen), window.addEventListener("native.keyboardhide", keyboardClose), document.addEventListener("backbutton", function(e) {
            e.preventDefault(), clickAndroidBackButton()
        }, !1));
    isMixReplay && $("body").addClass("miniPlayer");
    var t = trustAppMobile ? document : window;
    t.addEventListener("online", networkOn, !1), t.addEventListener("offline", networkOff, !1), transitionEnd = transitionEndEventName(), animationEnd = animationEndEventName(), $(document).ready(function() {
        isIframe && appBrowser && !appBrowserExpo ? callParentWindow("appIsReady") : documentReady()
    })
}

function documentReady() {
    debugScene && ($("#fade-all").css({
        visibility: "hidden"
    }), $("#home").css({
        visibility: "hidden"
    })), $("body").addClass("v" + appVersion), appBrowserExpo || initFocusEvent(), isAnimeHD && $("#cnvGame").attr("width", "2048").attr("height", "800"), appDesktop && (boxMenu = new Popup(".box-popup#pop-menu-exit")), boxPopup = new Popup(".box-popup#pop-popup"), boxDialog = new BoxDialog("#pop-dialog"), "ok" === checkSupported() ? (contextCanvas = $("#cnvGame")[0].getContext("2d"), (contextAudio = new AudioContext).onstatechange = listenStateAudioCtx(), createBtLanguage(), loadLanguage(function() {
        bugBluetoothLatency() || bugSampleRate() || (checkAudioRoute(), loadAppFile(function() {
            initRulesCSS(), initNews();
            var e = $("body").hasClass("fluid") ? "" : "big-",
                t = appBrowserExpo ? "home-titre-expo.png" : "home-titre.png",
                o = assetName("asset-v" + appVersion + "/splash/" + e + "homescreen.jpg"),
                i = assetName("asset-v" + appVersion + "/img/home-version.png"),
                n = assetName("asset-v" + appVersion + "/img/" + t);
            loadImg([
                [o = appBrowserExpo ? o.replace(".jpg", "-expo.jpg") : o, "#img-bck"],
                [i, "#img-version"],
                [n, "#img-titre"]
            ], function() {
                initJqueryVar(), changeDomTxt(), initMixlist();
                var e = isMixReplay ? displayHomeReplay : showHome;
                $homeBck.addClass("animate").one(animationEnd, function() {
                    $homeBck.removeClass("animate")
                }), removeTransition($fadeAll, "fadeIn", "opacity", e)
            })
        }))
    }, null, removeFadeAll)) : (boxDialog.open(checkSupported(), "ERROR", [], [], !0), removeFadeAll())
}

function clickAndroidBackButton() {
    onGame ? pause ? pauseGame() : (modeRandom && stopRandomMode(), loopOn ? stopAllStage() : (boxDialog.isOpen() && boxDialog.close(), boxPopup.$popup.isOpen() && boxPopup.close(), backToHome())) : gotoAppUrl("index.html?back=1")
}

function loadAppFile(e) {
    $.getScript("./asset-v" + appVersion + "/app.js").done(function() {
        app.animearray.forEach(function(e, t) {
            e.soundA = e.name + "_a", e.soundB = e.uniqsnd ? e.name + "_a" : e.name + "_b", e.anime = e.name + "-sprite.png", e.animeData = e.name + ".json"
        }), e()
    }).fail(function(e, t, o) {
        boxDialog.open("App file not found. Please reload or force to quit the app then retry.", "ERROR", ["Reload"], [gotoAppUrl], !0), removeFadeAll()
    })
}

function removeFadeAll() {
    ($fadeAll = isnull($fadeAll) ? $("#fade-all") : $fadeAll).hasClass("fadeIn") && $fadeAll.removeClass("fadeIn")
}

function initJqueryVar() {
    $body = $("body"), $incredibox = $("#app-incredibox"), $bckGlobal = $("#bck-global"), $lockAll = $("#lock-all").on(evtPress, stopProp), $lockPause = $("#lock-pause").on(evtClick, function(e) {
        e.preventDefault(), preventAction(clickBtClock)
    }), $lockStage = $("#lock-stage"), $fadeAll = $("#fade-all"), ($mixlist = $("#mixlist")).$pop = $("#poplist"), $mixlist.$bck = $("#mixlist .bac"), $mixlist.isOpen = function() {
        return $mixlist.hasClass("show")
    }, ($tabMixlist = $("#tab-mixlist").on(evtClick, clickBtTabMixlist)).$btMymix = $("#mixlistbox .tab-filter #bt-mymix").on(evtClick, clickBtFilterMymix), $tabMixlist.$btMyfav = $("#mixlistbox .tab-filter #bt-myfav").on(evtClick, clickBtFilterMyfav), $tabLatest = $("#tab-latest").on(evtClick, clickBtTabLatest), ($tabTop50 = $("#tab-top50").on(evtClick, clickBtTabTop50)).$btDay = $("#top50box .tab-filter #bt-day").on(evtClick, clickBtFilter), $tabTop50.$btWeek = $("#top50box .tab-filter #bt-week").on(evtClick, clickBtFilter), $tabTop50.$btMonth = $("#top50box .tab-filter #bt-month").on(evtClick, clickBtFilter), $tabTop50.$btYear = $("#top50box .tab-filter #bt-year").on(evtClick, clickBtFilter), ($tabSearch = $("#tab-search").on(evtClick, clickBtTabSearch)).$btName = $("#searchbox .tab-filter #bt-name").on(evtClick, clickBtFilterSearch), $tabSearch.$btTitle = $("#searchbox .tab-filter #bt-title").on(evtClick, clickBtFilterSearch), $tabSearch.$btDedi = $("#searchbox .tab-filter #bt-dedi").on(evtClick, clickBtFilterSearch), $tabSearch.$btSearch = $("#searchbox form #bt-search").on(evtClick, clickBtSearch), $home = $("#home"), $homeBck = $("#home #img-bck"), $homeVersion = $("#home #img-version"), $homeTitre = $("#home #img-titre"), $homeLoadbox = $("#home #load-box"), $homeLoadbar = $("#home #load-box #load-bar"), $homeBtPlay = $("#home #home-bt-play"), $homeBtList = $("#home #home-bt-list"), $homeBtSwitch = $("#home #home-bt-switch"), $homeBtInfo = $("#home #home-bt-info"), $homeBtParam = $("#home #home-bt-param"), $gameTouch = $("#game-touch"), $boxBt = $("#box-bt"), $btBack = $("#bt-back"), ($btTool = $("#bt-tool")).$bck = $("#bt-tool .bck"), $btTool.$svg = $btTool.$bck.find("svg use"), $btTool.bounce = function() {
        this.addClass("animateBounce").one(animationEnd, function(e) {
            $(e.target).removeClass("animateBounce")
        })
    }, $btStop = $("#bt-stop"), $btRandom = $("#bt-random"), $btRecord = $("#bt-record"), $btHome = $("#bt-home"), $btHelp = $("#bt-help"), $btSwitch = $("#bt-switch"), $btClock = $("#bt-clock"), $cntRecord = $("#cnt-record"), $btSave = $("#bt-save"), $btLike = $("#bt-like"), $boxVideo = $("#box-video"), $fadeVideo = $("#fade-video"), $boxTop = $("#box-top"), $boxBtBonus = $("#box-bt-bonus"), $boxBottom = $("#box-bottom"), $boxPicto = $("#box-picto"), $boxLoaderBonus = $("#box-loader-bonus"), $boxLoaderPolo = $("#box-loader-polo"), ($watchInfo = $("#watch-info")).$title = $("#watch-info .title"), $watchInfo.$name = $("#watch-info .name"), $watchInfo.$dedi = $("#watch-info .dedi"), $watchInfo.$date = $("#watch-info .date"), boxSwitch = new Popup(".box-popup#pop-switch"), $(".box-popup#pop-switch #icon" + appVersion).addClass("open"), $(".box-popup#pop-switch .icon").on(evtClick, function(e) {
        e.preventDefault();
        var t = $(this).attr("id").split("icon").join(""),
            o = "app." + pageExt + "?v=" + t;
        o += withAdBreak ? "&a=1" : "", o += null != getParameterByName("lang") ? "&lang=" + getParameterByName("lang") : "", o += null != getParameterByName("afs") ? "&afs=" + getParameterByName("afs") : "", appBrowserDemo ? t != appVersion && dialogGetApp() : featureLocked && parseInt(t) > 4 ? dialogGetApp() : t != appVersion && (lock(), focusHistory = [], deleteFocus(), $(".box-popup#pop-switch #icon" + appVersion).addClass("close"), $(this).addClass("open clicked").one(animationEnd, function() {
            addTransition($fadeAll, "fadeIn", "opacity", function() {
                withAdBreak && adVisible || gotoAppUrl(o)
            })
        }))
    }), initPopupIndexApp()
}

function preparerArray() {
    frameTotal = app.totalframe, frameHalf = frameTotal / 2, tabBuffer = {}, tabAnime = [], nbSound = app.animearray.length, nbSoundBonus = app.bonusarray.length, nbSoundTotal = 2 * nbSound + nbSoundBonus + 1, nbSoundLoaded = 0, nbBonus = app.bonusarray.length, nbBonusLoaded = 0, nbAnime = app.animearray.length, nbAnimeLoaded = 0, nbData = app.animearray.length, nbDataLoaded = 0, nbImage = 0, nbImageLoaded = 0, spritePolo = null, spritePicto = null, cntTotalAsset = 0, nbTotalAsset = nbSoundTotal + nbBonus + nbAnime + nbData + 2, tabToLoad = [], cntLoad = 0;
    var e = 0,
        t = "";
    for (tabBuffer.sound = [], e = 0; e < nbSound; e++) tabBuffer.sound.push({
        sndA: 0,
        sndB: 0
    }), tabAnime.push({
        imgSprite: null,
        ratio: null,
        width: null,
        height: null,
        headWidth: null,
        headHeight: null,
        totalFrames: null,
        imgData: null,
        color: app.animearray[e].color
    });
    for (tabBuffer.bonus = [], e = 0; e < nbSoundBonus; e++) tabBuffer.bonus.push({
        snd: 0,
        aspire: 0,
        expire: 0
    }), createMetaBonus(e);
    for (tabBuffer.metro = [{
            snd: 0
        }], tabToLoad = [{
            func: loadImage,
            params: [animeName(appBrowserSchool ? app.spritepolotshirt : app.spritepolo), "spritePolo"]
        }, {
            func: loadImage,
            params: [app.spritepicto, "spritePicto"]
        }], isMixReplay && appVersion > 4 && tabToLoad.pop(), e = 0; e < nbSound; e++) app.animearray[e].uniqsnd ? (tabToLoad.push({
        func: loadSound,
        params: ["sound", app.animearray[e].soundA, e, "sndA", !0]
    }), nbTotalAsset--) : (tabToLoad.push({
        func: loadSound,
        params: ["sound", app.animearray[e].soundA, e, "sndA"]
    }), tabToLoad.push({
        func: loadSound,
        params: ["sound", app.animearray[e].soundB, e, "sndB"]
    }));
    for (e = 0; e < nbSoundBonus; e++) tabToLoad.push({
        func: loadSound,
        params: ["bonus", app.bonusarray[e].sound, e, "snd"]
    }), tabToLoad.push({
        func: loadSound,
        params: ["bonus", app.bonusarray[e].aspire, e, "aspire"]
    }), notnull(app.bonusarray[e].expire) && tabToLoad.push({
        func: loadSound,
        params: ["bonus", app.bonusarray[e].expire, e, "expire"]
    }), t = animeName(app.bonusarray[e].src), tabToLoad.push({
        func: loadVideoBonus,
        params: [t, e]
    });
    for (e = 0; e < nbAnime; e++) t = app.animearray[e].animeData, tabToLoad.push({
        func: loadAnimeData,
        params: [t, e]
    }), t = animeName(app.animearray[e].anime), tabToLoad.push({
        func: loadAnime,
        params: [t, e]
    });
    checkTabToLoad()
}

function checkTabToLoad() {
    updatePreload(), cntLoad < tabToLoad.length && (tabToLoad[cntLoad].func(tabToLoad[cntLoad].params), cntLoad++)
}

function errorTabToLoad(e) {
    boxDialog.open('Error loading asset<br><i>"' + e.split("./").join("") + '"</i>', "LOADING BUG", ["Reload"], [gotoAppUrl], !0), removeFadeAll()
}

function updatePreload() {
    cntTotalAsset++;
    var e = Math.round(cntTotalAsset / nbTotalAsset * 100);
    e = e > 100 ? 100 : e, $homeLoadbar.css({
        width: String(e) + "%"
    }), cntTotalAsset == nbTotalAsset && (createGame(), hideHomeLoadbar(), isIframe && callParentWindow("appLoadingComplete"))
}

function loadImage(e) {
    var t = e[0],
        o = e[1];
    nbImage++;
    var i = "./" + app.folder + "img/" + t,
        n = new Image;
    n.onload = function() {
        window[o] = this, checkTabToLoad()
    }, n.onerror = function() {
        errorTabToLoad(i)
    }, n.src = i
}

function loadSound(e) {
    var t = e[0],
        o = e[1],
        i = e[2],
        n = e[3],
        a = !isnull(e[4]) && e[4],
        s = "./" + app.folder + "sound/" + sndtype + "/" + o + "." + sndtype;
    o.indexOf("metronome") > -1 && (s = "./" + app.folder + "sound/-metronome.wav");
    var l = new XMLHttpRequest;
    l.open("GET", s, !0), l.responseType = "arraybuffer", l.onload = function() {
        contextAudio.decodeAudioData(l.response, function(e) {
            tabBuffer[t][i][n] = e, a && (tabBuffer[t][i].sndB = e), checkTabToLoad()
        }, function(e) {
            boxDialog.open('Error decoding asset "' + s + '"', "AUDIO BUG", ["Reload"], [gotoAppUrl], !0)
        })
    }, l.onerror = function() {
        errorTabToLoad(s)
    }, l.send()
}

function loadAnimeData(e) {
    var t = e[0],
        o = e[1],
        i = "./" + app.folder + "anime/" + t,
        n = new XMLHttpRequest;
    n.open("GET", i, !0), n.responseType = "json", n.onload = function() {
        for (var e = n.response, t = e.arrayFrame, i = t.length, a = [], s = 0; s < i; s++) {
            var l = t[s].prop.split(",");
            a.push([parseInt(l[0]), parseInt(l[1]), parseInt(l[2]), parseInt(l[3])])
        }
        tabAnime[o].imgData = a, tabAnime[o].headHeight = e.headHeight, checkTabToLoad()
    }, n.onerror = function() {
        errorTabToLoad(i)
    }, n.send()
}

function loadAnime(e) {
    var t = e[0],
        o = e[1],
        i = "./" + app.folder + "anime/" + t,
        n = new Image;
    n.onload = function() {
        tabAnime[o].imgSprite = n, checkTabToLoad()
    }, n.onerror = function() {
        errorTabToLoad(i)
    }, n.src = i
}

function loadVideoBonus(t) {
    var o = t[0],
        i = "./" + app.folder + "video/" + o.replace("mp4", vidtype),
        n = t[1] + 1,
        a = document.createElement("video");
    if (a.type = "video/" + vidtype, a.setAttribute("playsinline", "playsinline"), a.setAttribute("webkit-playsinline", "webkit-playsinline"), a.setAttribute("muted", "muted"), $boxVideo.append("<div class='video' id='video" + n + "'></div>"), $boxVideo.find(".video#video" + n).append(a), appBrowserDemo) a.addEventListener("canplaythrough", function() {
        checkTabToLoad()
    }, !1), a.addEventListener("error", function(e) {
        $boxVideo.find(".video#video" + n).css({
            "background-image": "url(./" + app.folder + "video/v" + app.version + "-b" + n + "-bck.jpg)"
        }), checkTabToLoad()
    }), a.src = i, a.load();
    else {
        var s = new XMLHttpRequest;
        s.onload = function() {
            a.src = window.URL.createObjectURL(this.response), checkTabToLoad()
        }, s.onerror = function() {
            alert("Error " + e.target.status + " occurred while receiving the document")
        }, s.open("GET", i), s.responseType = "blob", s.send()
    }
}

function createMetaBonus(e) {
    var t = e + 1,
        o = `\n\t\t<div class="bt-bonus" id="bt-bonus-${t}">\n\t\t\t<div class="circle"></div>\n\t\t\t<div class="quarter">\n\t\t\t\t<div class="svg q0"><svg x="0px" y="0px" width="86px" height="86px" viewBox="0 0 86 86"><path d="M83.88,29.72A42.83,42.83,0,1,0,86,43,43,43,0,0,0,83.88,29.72ZM43,58.64A15.69,15.69,0,0,1,27.36,43,15.64,15.64,0,1,1,52.18,55.64,15.52,15.52,0,0,1,43,58.64Z"/></svg></div>\n\t\t\t\t<div class="svg q1"><svg x="0px" y="0px" width="86px" height="86px" viewBox="0 0 86 86"><path d="M57.87,38.17l26-8.45A43,43,0,0,0,43,0V27.36A15.65,15.65,0,0,1,57.87,38.17Z"/></svg></div>\n\t\t\t\t<div class="svg q2"><svg x="0px" y="0px" width="86px" height="86px" viewBox="0 0 86 86"><path d="M83.88,29.72l-26,8.45a15.58,15.58,0,0,1-5.69,17.47L68.25,77.75a42.83,42.83,0,0,0,15.63-48Z"/></svg></div>\n\t\t\t\t<div class="svg q3"><svg x="0px" y="0px" width="86px" height="86px" viewBox="0 0 86 86"><path d="M52.18,55.64a15.55,15.55,0,0,1-18.36,0L17.75,77.75a42.77,42.77,0,0,0,50.5,0Z"/></svg></div>\n\t\t\t\t<div class="svg q4"><svg x="0px" y="0px" width="86px" height="86px" viewBox="0 0 86 86"><path d="M27.36,43a15.71,15.71,0,0,1,.77-4.83l-26-8.45a42.88,42.88,0,0,0,15.64,48L33.82,55.64A15.61,15.61,0,0,1,27.36,43Z"/></svg></div>\n\t\t\t\t<div class="svg q5"><svg x="0px" y="0px" width="86px" height="86px" viewBox="0 0 86 86"><path d="M43,27.36V0A43,43,0,0,0,2.11,29.72l26,8.45A15.65,15.65,0,0,1,43,27.36Z"/></svg></div>\n\t\t\t</div>\n\t\t\t<canvas id="canvas-bt-bonus-${t}" width="86" height="86"></canvas>\n\t\t\t<div class="icon">\n\t\t\t\t<div class="icn-bck"></div>\n\t\t\t\t<svg class="icn-svg"><use xlink:href="#ic-lock"></use></svg></div><div class="hitzone">\n\t\t\t</div>\n\t\t</div>`;
    $boxBtBonus.append(o)
}
trustAppMobile ? document.addEventListener("deviceready", onDeviceReady, !1) : document.addEventListener("DOMContentLoaded", onDeviceReady, !1);
var mixToWatchLoaded = !1,
    displayHomeReplayWaiting = !1,
    loopDuration, nbLoopBonus, nbPoloMax;

function tryToLoadMix() {
    xhr("POST", domainOnline + "ph3/get-mix-db.php", {
        id: mixlink
    }, function(e) {
        mixToWatch = null, mixToWatchLoaded = !0, "success" == e.state && (mixToWatch = e.mixlist[0]), displayHomeReplayWaiting && displayHomeReplay()
    }, function(e) {
        mixToWatchLoaded = !0
    })
}

function prepareMixReplay(e) {
    mixToWatchLoaded = !0, mixToWatch = e
}

function displayHomeReplay() {
    if (mixToWatchLoaded) {
        var e = "<div><span class='bold'>" + STR("pop.notFoundTitle") + "</span><br><span class='mini'>" + STR("pop.notFoundText") + "</span></div>";
        mixToWatch.dedi && "" != mixToWatch.dedi && (e = STR("txt.dedicatedTo").replace("%{name}", mixToWatch.dedi), $("#home #home-dedicated").html(e), $("#home #home-dedicated").addClass("animate")), $fadeAll.removeClass("fadeIn"), isnull(mixToWatch) || (parseXmlAndCheckAssets(), showHomeLoadbar())
    } else displayHomeReplayWaiting = !0, isIframe || tryToLoadMix()
}

function showHome() {
    unlock(), $fadeAll.removeClass("fadeIn"), $homeTitre.addClass("animate"), $homeVersion.addClass("animate"), appViewed || (appViewed = !0, TweenMax.delayedCall(1, function() {
        appLoaded ? showBtHome() : showHomeLoadbar()
    }), $homeBtSwitch.on(evtClick, function(e) {
        e.preventDefault(), preventAction(popupSwitch)
    }).addClass("animate"), $homeBtInfo.on(evtClick, function(e) {
        e.preventDefault(), preventAction(popupInfo)
    }).addClass("animate"), $homeBtParam.on(evtClick, function(e) {
        e.preventDefault(), preventAction(popupParam)
    }).addClass("animate"), $("#home-bt-fs").on(evtClick, function(e) {
        e.preventDefault(), window.top.appEvent("openFullscreen")
    }).addClass("animate"), activeBtNews())
}

function showHomeLoadbar() {
    $homeLoadbox.addClass("animate"), preparerArray()
}

function hideHomeLoadbar() {
    $homeLoadbox.removeClass("animate"), isMixReplay ? appBrowserSchool ? callParentWindow("replayIsReady", {
        func: function() {
            loopOn ? clickBtClock() : (clickForAutoPlay(), clickBtWatch(mixToWatch))
        }
    }) : showBtPlayListen() : showBtHome(!0)
}

function showBtPlayListen() {
    $homeBtPlay.click(function() {
        clickForAutoPlay(), clickBtWatch(mixToWatch), callParentWindow("replayStart", mixToWatch)
    }), $homeBtPlay.addClass("animate");
    var e = 0;
    $body.on(evtPress, function(t) {
        e = window.top.scrollY
    }), $body.on(evtPressEnd, function(t) {
        window.top.scrollY == e && loopOn && clickBtClock()
    }), $lockPause.off(), $lockPause.html('<div id="bt-play-pause" class="bt"><div class="bck"><div class="bckimg"></div></div><div class="hitzone"></div></div>')
}

function showBtHome(e) {
    e && 0 == focusHistory.length && createFocus("home"), $homeBtPlay.click(function() {
        clickForAutoPlay(), preventAction(clickHomeBtPlay)
    }), $homeBtPlay.addClass("animate"), $homeBtList.click(function() {
        clickForAutoPlay(), appBrowser ? dialogGetApp() : preventAction(clickHomeBtPlaylist)
    }), $homeBtList.addClass("animate"), debugGame && $homeBtPlay.click()
}

function clickHomeBtPlaylist() {
    deleteFocus(), appBrowser ? dialogGetApp() : (lock(), Spinner.add($homeBtList), TweenMax.delayedCall(.5, function() {
        unlock(), openPlaylist()
    }))
}

function clickHomeBtPlay() {
    appBrowserDemo && withAdBreak && callAd("start", "new-game"), appBrowserSchool && !isMixReplay && callParentWindow("clickBtPlay"), deleteFocus(), addTransition($fadeAll, "fadeIn", "opacity", hideHome)
}

function clickForAutoPlay(e) {
    if (!autoPlayEnabled) {
        autoPlayEnabled = !0, "resume" in contextAudio && contextAudio.resume();
        var t, o = 0,
            i = new SoundObject(contextAudio);
        if (i.setSilence(), i.prepare(tabBuffer.sound[0].sndA), i.play(), !bonusPlaying)
            for (o = 0; o < app.bonusarray.length; o++)(t = $("#box-video .video#video" + (o + 1) + " video")[0]).play();
        TweenMax.delayedCall(.5, function() {
            if (i.stop(), !bonusPlaying)
                for (o = 0; o < app.bonusarray.length; o++)(t = $("#box-video .video#video" + (o + 1) + " video")[0]).pause(), t.currentTime = 0;
            void 0 != e && e()
        })
    }
}

function hideHome() {
    lock(), detectSilentMode(), isBackToHome = !1, onGame = !0, $home.hide(), document.body.classList.remove("darkback"), renderRAF.start(), modeWatch ? (gotoModeWatch(), poloAllVisible || afficherAllPolo(!0)) : (showDiv($boxBtBonus), showDiv($boxPicto), showDiv($boxLoaderBonus), showDiv($boxLoaderPolo), baisserAllPolo()), setTimeout(function() {
        removeTransition($fadeAll, "fadeIn", "opacity", lancerApp)
    }, 50)
}

function backToHome(e) {
    deleteFocus(), lock(), isBackToHome = !0, pictoForceOnDrop(), addTransition($fadeAll, "fadeIn", "opacity", function() {
        hideGame(), e && e()
    }), appBrowser || isIframe || checkLikeNotification(!0)
}

function hideGame() {
    document.body.classList.add("darkback"), onGame = !1, stopAllStage(), renderRAF.stop(), closeTool(), checkIfPopupOpen(), $home.show(), removeTransition($fadeAll, "fadeIn", "opacity", showHome), modeWatch ? (backtoModeWatch(), createFocus(focusHistory[focusHistory.length - 1])) : (focusHistory = [], createFocus("home"))
}

function lancerApp() {
    $fadeAll.removeClass("fadeIn"), modeWatch ? startReplayMode() : (unlock(), afficherAllPolo(), createFocus("toolbar"), isnull(storage.getItem("popupTutoDrag")) && setTimeout(popupTutoDrag, 600)), saveGA("game", "launch")
}
var listPolo, listPicto, listBonus = [],
    listPoloDrop = [],
    listPoloToRemove = [],
    listPoloToSolo = [],
    tabFirstSound = [],
    tabPoloOnStage = [],
    tabPoloBusy = [],
    poloAllVisible = !1,
    nbPoloToAnime = 0,
    pictoDrag = null,
    modeRandom = !1,
    modeRecord = !1,
    modeReplay = !1,
    waitForRecording = !1,
    mouseX = 0,
    mouseY = 0,
    playBar, readingBar, randomMix, recordMix, replayMix;

function createGame() {
    appLoaded = !0, app.recminloop = showlog || appBrowserDemo ? 0 : app.recminloop, loopDuration = app.looptime, nbLoopBonus = app.nbloopbonus, nbPoloMax = app.nbpolo, stepAnimation = frameHalf / loopDuration, stepPercent = 100 / loopDuration, tabBuffer.metro[0].snd = contextAudio.createBuffer(2, app.looptime / 1e3 * 44100, 44100), (sndMetronome = new SoundObject(contextAudio, "metronome")).setSilence(), (clock = new ClockObject("cnv-clock")).init(76, 76, 1, 68, 16), renderRAF = new RenderRAF(-1, renderLoop), mainCanvas = new CanvasObj("cnvGame"), isMixReplay ? ((recordMix = function() {}).xmlAction = function() {}, randomMix = function() {}) : (randomMix = new RandomMix, recordMix = new RecordMix), replayMix = new ReplayMix, readingBar = new ReadingBar("#reading-bar", app.recminloop, app.recmaxloop), listPolo = creerBoxPolo(), majListPoloDrop(), listPicto = creerBoxPicto(), listBonus = creerBoxBonus(), enableBtGame()
}

function creerBoxPicto() {
    for (var e = [], t = isMobile ? 0 : 56, o = Math.ceil((344 - 2 * t - Math.ceil(68 / 1.5)) / 9), i = t, n = 47, a = 0; a < nbSound; a++) {
        isMiniPlayer && appVersion > 4 && (spritePicto = {
            src: ""
        }, i = -9999, n = -9999), $boxPicto.append('<div class="picto" id="picto' + a + '"><div class="scale"><div class="hitzone"></div></div></div>'), $boxPicto.find("#picto" + a + " .scale").css({
            "background-image": "url(" + assetName(spritePicto.src) + ")"
        });
        var s = new PictoObject(a, $boxPicto);
        s.init(i, n), s.activer(), e.push(s), i += 68 + o, 9 == a && (i = 1024 - (i + 68) + 68 + o, n = 136)
    }
    return e
}

function creerBoxPolo() {
    for (var e = [], t = isMobile ? 0 : 15, o = 0; o < nbPoloMax; o++) {
        $("#box-polo").append('<div class="polo" id="polo' + o + '"><div class="ctrl"><div class="cbt icon-game-bt-mute"><svg class="icn-svg"><use xlink:href="#ic-mute"></use></svg></div><div class="cbt icon-game-bt-solo"><svg class="icn-svg"><use xlink:href="#ic-solo"></use></svg></div><div class="cbt icon-game-bt-delete"><svg class="icn-svg"><use xlink:href="#ic-close"></use></svg></div></div></div>');
        var i = new PoloObject(o, $("#box-stage"), contextAudio, contextCanvas, Math.round(t + (1024 - 2 * t - 164) / (nbPoloMax - 1) * o), 80);
        e.push(i)
    }
    return e
}

function creerBoxBonus() {
    for (var e = [], t = 0; t < nbBonus; t++) {
        for (var o = app.bonusarray[t], i = o.code.split(","), n = $("#bt-bonus-" + (t + 1)), a = 0, s = i.length; a < s; a++) {
            var l = app.animearray[i[a] - 1].color;
            $(".svg.q" + (a + 1) + " svg", n).css({
                fill: "#" + l
            })
        }
        var r = new BonusObject(t, o, contextAudio, tabBuffer.bonus[t]);
        e.push(r)
    }
    return e
}
var isToolbarOpen = !1,
    isToolbarMove = !1;

function clickStage(e) {
    e.preventDefault(), clickTool()
}

function enableBtGame() {
    $btBack.on(evtClick, function(e) {
        e.preventDefault(), isToolbarMove || preventAction(clickTool)
    }), $btStop.on(evtClick, function(e) {
        e.preventDefault(), !isToolbarMove && loopOn && preventAction(clickBtStop)
    }), $btRandom.on(evtClick, function(e) {
        e.preventDefault(), isToolbarMove || preventAction(clickBtRandom)
    }), $btRecord.on(evtClick, function(e) {
        e.preventDefault(), isToolbarMove || preventAction(clickBtRecord)
    }), $btHome.on(evtClick, function(e) {
        e.preventDefault(), isToolbarMove || preventAction(clickBtHome)
    }), $btHelp.on(evtClick, function(e) {
        e.preventDefault(), isToolbarMove || preventAction(clickBtHelp)
    }), $btSwitch.on(evtClick, function(e) {
        e.preventDefault(), isToolbarMove || preventAction(clickBtSwitch)
    }), enableBtTool()
}

function enableBtTool() {
    $btTool.on(evtClick, function(e) {
        e.preventDefault(), isToolbarMove || preventAction(clickTool)
    })
}

function clickTool() {
    isToolbarMove = !0, (isToolbarOpen ? closeTool : openTool)()
}

function openTool() {
    deleteFocus(), $gameTouch.on(evtPress, clickStage), addTransition($boxBt, "open", "transform", endToolMove, !0), isToolbarOpen = !0
}

function closeTool() {
    deleteFocus(), $gameTouch.off(), removeTransition($boxBt, "open", "transform", endToolMove), isToolbarOpen = !1
}

function endToolMove() {
    isToolbarMove = !1, onGame && createFocus(isToolbarOpen ? "toolbar-open" : "toolbar")
}

function clickBtStop() {
    stopAllStage()
}

function clickBtHome() {
    backToHome()
}

function clickBtRandom() {
    startRandomMode()
}

function clickBtRecord() {
    startRecordMode()
}

function clickBtHelp() {
    backToHome(popupInfo)
}

function clickBtSwitch() {
    backToHome(popupSwitch)
}

function baisserAllPolo() {
    poloAllVisible = !1;
    for (var e = 0; e < nbPoloMax; e++) {
        listPolo[e].baisser()
    }
}

function afficherAllPolo(e) {
    poloAllVisible = !0;
    for (var t = 0; t < nbPoloMax; t++) {
        listPolo[t].remonte(.03 * t, !1, e)
    }
}

function habillerPolo(e, t, o, i) {
    o = isnull(o) ? 0 : o;
    var n = e,
        a = t,
        s = a.getId(),
        l = tabAnime[s];
    n.habiller(a, cntBoucle, l, o, i), loopOn ? (n.showLoader(), n.activerClick()) : waitingFirstLoop || (modeReplay || modeWatch ? TweenMax.delayedCall(0, afterWaiting) : TweenMax.delayedCall(delayassist / 1e3, afterWaiting), waitingFirstLoop = !0)
}

function afterWaiting() {
    enableClickFirstPolos(), startLoop(), waitingFirstLoop = !1, waitForRecording && startRecording(), enableBtClock()
}

function enableClickFirstPolos() {
    for (var e = 0; e < nbPoloMax; e++) {
        var t = listPolo[e];
        t.getBusy() && t.activerClick()
    }
}

function clickPolo(e) {
    if (!bonusPlaying && !modeRandom) {
        var t = e;
        t.desactiverClick(), getRemainingTime() < delayassist ? listPoloToRemove.push(t) : removePolo(t);
        var o = getListPoloBusy().length;
        0 !== o && o != listPoloToRemove.length || stopLoop()
    }
}

function mutePolo(e) {
    e.mute()
}

function unmutePolo(e) {
    e.unmute()
}

function soloPolo() {
    for (var e = getListPoloBusy(), t = e.length, o = 0; o < t; o++) {
        var i = e[o];
        i.getSolo() ? i.unmute() : i.mute()
    }
}

function muteAll(e) {
    for (var t = getListPoloBusy(), o = t.length, i = 0; i < o; i++) {
        var n = t[i];
        n.getId() != e.getId() ? (n.setSolo(!1), n.mute()) : (n.setSolo(!0), n.unmute())
    }
}

function unmuteAll(e) {
    for (var t = getListPoloBusy(), o = t.length, i = 0; i < o; i++) {
        var n = t[i];
        n.setSolo(!1), listPoloToSolo.push(n)
    }
    getRemainingTime() > delayassist && checkPoloToSolo()
}

function checkPoloToSolo() {
    for (var e = 0, t = listPoloToSolo.length; e < t; e++) {
        listPoloToSolo[e].unmute()
    }
    listPoloToSolo = []
}

function getTotalSolo() {
    for (var e = getListPoloBusy(), t = e.length, o = 0, i = 0; i < t; i++) {
        e[i].getSolo() && o++
    }
    return o
}

function getTotalMute() {
    for (var e = getListPoloBusy(), t = e.length, o = 0, i = 0; i < t; i++) {
        e[i].getMute() && o++
    }
    return o
}

function stopSoloPolo() {
    for (var e = getListPoloBusy(), t = e.length, o = 0; o < t; o++) {
        var i = e[o];
        listPoloToSolo.push(i)
    }
    getRemainingTime() > delayassist && checkPoloToSolo()
}

function stopOtherSolo() {
    for (var e = getListPoloBusy(), t = e.length, o = 0; o < t; o++) {
        e[o].setSolo(!1)
    }
}

function removePolo(e, t, o) {
    checkerCodeBonus(e.getPicto(), !1), 1 == getTotalSolo() && e.getSolo() && (e.setSolo(!1), stopSoloPolo()), e.deshabiller(t, bonusPlaying), e.desactiverClick(), e.stopSound(o);
    var i = getListPoloBusy();
    if (1 == i.length) {
        var n = i[0];
        n.getSolo() && isMouseDevice && !isTouchDevice && n.setSolo(!1)
    }
}

function checkPoloToRemove(e) {
    for (var t = listPoloToRemove.length, o = bonusPlaying ? .01 : .03, i = 0; i < t; i++) removePolo(listPoloToRemove[i], i * o, e);
    listPoloToRemove = []
}
var tabPictoOnDrag = [];

function pictoOnDrag(e) {
    tabPictoOnDrag.push(e.getId()), poloWatchPicto(e);
    for (var t = 0, o = listPoloDrop.length; t < o; t++) "hover" != listPoloDrop[t].getMode() && listPoloDrop[t].mode("regarde")
}

function pictoOnMove(e) {
    poloWatchPicto(e), checkPictoHoverPolo(e)
}

function poloWatchPicto(e) {
    e.getId() === tabPictoOnDrag[0] && (mouseX = e.getBound().px, mouseY = e.getBound().py)
}

function checkPictoHoverPolo(e) {
    for (var t = 0, o = listPoloDrop.length; t < o; t++) {
        var i = listPoloDrop[t];
        i.hitTestPicto(e) ? (i.rollover(), i.pictoHoverId = e.getId()) : i.pictoHoverId == e.getId() && (i.rollout(), i.pictoHoverId = null)
    }
}

function poloStopHover() {
    for (var e = 0, t = listPoloDrop.length; e < t; e++) listPoloDrop[e].rollout(!0)
}

function poloForceDraw() {
    for (var e = 0; e < nbPoloMax; e++) {
        listPolo[e].draw()
    }
}

function pictoOnDrop(e, t) {
    var o = 0,
        i = !!notnull(t) && t,
        n = listPoloDrop.length,
        a = !1;
    if (i || isBackToHome) e.getDiv().removeClass("drag");
    else
        for (o = 0; o < n; o++)
            if (!a) {
                var s = listPoloDrop[o];
                s.hitTestPicto(e) && (a = !0, pictoTouchePolo(s, e))
            } if (a ? (majListPoloDrop(), n = listPoloDrop.length) : e.replacer(), majListPictoOnDrag(e.getId()), 0 == tabPictoOnDrag.length)
        for (o = 0; o < n; o++) listPoloDrop[o].rollout(!0)
}

function pictoForceOnDrop() {
    if (tabPictoOnDrag.length > 0)
        for (var e = 0, t = tabPictoOnDrag.length; e < t; e++) pictoOnDrop(listPicto[tabPictoOnDrag[0]], !0)
}

function majListPictoOnDrag(e) {
    var t = tabPictoOnDrag.indexOf(e);
    t > -1 && tabPictoOnDrag.splice(t, 1)
}

function pictoTouchePolo(e, t, o, i) {
    t.absorber(e), checkerCodeBonus(t, !0), habillerPolo(e, t, o, i), getTotalSolo() > 0 && e.mute()
}

function majListPoloDrop() {
    listPoloDrop = [];
    for (var e = 0; e < nbPoloMax; e++) {
        var t = listPolo[e];
        t.getBusy() || listPoloDrop.push(t)
    }
}
var btClockClickedAt = 0;

function clickBtClock() {
    getTime() - btClockClickedAt > 350 && (pauseGame(), btClockClickedAt = getTime())
}

function enableBtClock() {
    $btClock.off().on(evtClick, function(e) {
        e.preventDefault(), preventAction(clickBtClock)
    }).addClass("enable")
}

function disableBtClock() {
    $btClock.off().removeClass("enable")
}
var curBonus = null;

function clickBtBonus(e) {
    bonusWaiting = !0, curBonus = listBonus[(bonusQueue = e) - 1];
    app.bonusloopA;
    checkSndAspiration(!0);
    var t = decimal(getRemainingTimeBeforeBonus() / 1e3, 2),
        o = t - .5;
    o = o < .5 ? 0 : o, TweenMax.delayedCall(o, showBlackLayerAtStart)
}

function cancelClickBtBonus() {
    bonusWaiting && stopBonusVideo(!1)
}

function showBlackLayerAtStart() {
    $fadeVideo.addClass("animateFadeIn"), modeReplay || modeRandom || (hideDiv($boxPicto, !0), hideDiv($boxLoaderPolo, !0))
}

function waitForSlideUp() {
    var e = getRemainingTime(!1),
        t = Number((e / 1e3).toFixed(1)) - .3;
    TweenMax.delayedCall(t, videoSlideUp)
}

function launchBonusVideo() {
    $fadeVideo.removeClass(), pictoForceOnDrop(), videoSlideDown(), curBonus.play(), bonusWaiting = !1, bonusPlaying = !0
}

function stopBonusVideo(e, t) {
    killTransitionBonus(), t ? reinitBonusVideo(t) : bonusWaiting ? reinitBonusVideo() : bonusPlaying && (e ? ($fadeVideo.addClass("animateFadeIn").one(animationEnd, reinitBonusVideo), videoSlideUp()) : reinitBonusVideo())
}

function killTransitionBonus() {
    TweenMax.killTweensOf(showBlackLayerAtStart), TweenMax.killTweensOf(videoSlideUp)
}

function reinitBonusVideo(e) {
    e = "boolean" == typeof e && e, $fadeVideo.removeClass(), !1 === e && (bonusPlaying && $fadeVideo.addClass("animateFadeOut").one(animationEnd, function(e) {
        $fadeVideo.removeClass()
    }), modeReplay || modeRandom || isMixReplay || (showDiv($boxPicto, !0), showDiv($boxLoaderPolo, !0))), notnull(curBonus) && curBonus.stop(e), reinitBonusVars()
}

function reinitBonusVars() {
    bonusWaiting = !1, bonusPlaying = !1, bonusQueue = 0, cntBoucleBonus = 0, curBonus = null
}

function checkerCodeBonus(e, t) {
    for (var o = e.getId() + 1, i = 0; i < nbBonus; i++) {
        listBonus[i].checkCode(o, t)
    }
}

function videoSlideDown() {
    extendVideo && ($boxBottom.addClass("bottomSlide"), boxPopup.$popup.addClass("bottomSlide"))
}

function videoSlideUp(e) {
    extendVideo && (!0 === e ? $boxBottom.removeClass("bottomSlide").one(transitionEnd, function() {
        $fadeVideo.addClass("animateFadeOut").one(animationEnd, function(e) {
            $fadeVideo.removeClass()
        })
    }) : $boxBottom.removeClass("bottomSlide"), boxPopup.$popup.removeClass("bottomSlide"))
}

function checkUnlockNextBonus() {
    if (!modeReplay && !modeRandom) {
        var e = curBonus.getId(),
            t = "v" + appVersion + "-bonus-complete";
        if (e >= (storage.getItem(t) || 0) && e < nbBonus - 1) {
            var o = e + 1;
            storage.setItem(t, o), listBonus[o].unlockme(), popupBonusFindNext()
        }
    }
}

function showDiv(e, t, o) {
    t ? addTransition(e, "fade", "opacity", o) : e.removeClass("fade"), e.removeClass("hide")
}

function hideDiv(e, t, o) {
    t ? addTransition(e, "fade", "opacity", o) : e.removeClass("fade"), e.addClass("hide")
}
var loopOn = !1,
    waitingFirstLoop = !1,
    bonusPlaying = !1,
    bonusWaiting = !1,
    shouldImmediatePlayBonus = !1,
    bonusQueue = 0,
    pause = !1,
    leaveApp = !1,
    boucleA = !0,
    cntBoucle = 0,
    cntBoucleBonus = 0,
    timenow, timespent, timeremain = 0,
    pctMetronome = 0,
    pctMetronomeBoucleA = 0,
    frame = 0,
    frameTotal = 0,
    frameHalf = 0,
    framePart2 = 0,
    stepAnimation = 0,
    stepPercent = 0,
    currentSndPart = 0,
    renderRAF, sndMetronome, sndTest, startboucle = 0,
    pausedAt = 0;

function loopFinished() {
    checkPoloToRemove(), checkPoloToSolo(), modeRandom && randomMix.loop(), modeReplay && (replayMix.waitForReloop && cntBoucleBonus == nbLoopBonus && (replayMix.waitForReloop = !1, replayMix.reloop = !0), readingBar.loop()), loopOn && startLoop(), modeRecord && readingBar.loop()
}

function startLoop() {
    bonusPlaying && cntBoucleBonus == nbLoopBonus && app.bonusendloopA && !boucleA && (boucleA = !0), 0 == cntBoucle && keepAppAwake(), startboucle = getTime(), loopOn = !0, frame = 0, boucleA ? (framePart2 = 0, currentSndPart = 0) : (framePart2 = frameHalf, currentSndPart = 1), clock.start(loopDuration, boucleA), clock.checkAtEnd(), sndMetronome.prepare(tabBuffer.metro[0].snd), modeReplay && readingBar.isLastLoop() ? sndMetronome.onComplete(readingBar.loop) : sndMetronome.onComplete(loopFinished), (bonusWaiting || bonusPlaying) && playBonus(), bonusPlaying || playSounds(), checkSndAspiration(), sndMetronome.play(), cntBoucle++, boucleA = !boucleA
}

function checkSndAspiration(e) {
    bonusWaiting && (e ? (boucleA || !app.bonusloopA) && getRemainingTime() > 600 && curBonus.playAspiration(decimal(getTimeSpent() / 1e3, 2)) : boucleA || curBonus.playAspiration(0))
}

function stopLoop() {
    loopOn = !1, boucleA = !0, cntBoucle = 0, currentSndPart = 0, clock.stop(), stopBonusVideo(!0), checkPoloToRemove(bonusPlaying), sndMetronome.stop(), disableBtClock(), modeRecord && stopRecordMode(), modeReplay && stopReplayMode(), stopKeepingAppAwake()
}

function playBonus() {
    var e = !app.bonusloopA || boucleA;
    modeReplay && (e = !!replayMix.waitForReloop || e), e && !bonusPlaying && (launchBonusVideo(), hidePoloLoader()), bonusPlaying && (++cntBoucleBonus == nbLoopBonus && waitForSlideUp(), cntBoucleBonus > nbLoopBonus && (checkUnlockNextBonus(), stopBonusVideo()))
}

function playSounds() {
    for (var e = 0; e < nbPoloMax; e++) {
        var t = listPolo[e];
        t.getBusy() && (t.waitOneLoop ? (t.showLoader(), t.waitOneLoop = !1) : playSoundPolo(t))
    }
}

function playSoundPolo(e) {
    var t = e,
        o = 0 == currentSndPart ? "sndA" : "sndB";
    t.sound.prepare(tabBuffer.sound[t.getAssetId()][o]), t.hideLoader(), t.getMute() || t.getHide() || t.mode("anime"), t.playSound()
}

function pauseAudioSource() {
    if (!bonusPlaying)
        for (var e = 0; e < nbPoloMax; e++) {
            var t = listPolo[e];
            t.getPlaying() && t.sound.pause()
        }
    sndMetronome.pause()
}

function unpauseAudioSource() {
    if (!bonusPlaying)
        for (var e = 0; e < nbPoloMax; e++) {
            var t = listPolo[e];
            t.getPlaying() && t.sound.unpause()
        }
    sndMetronome.unpause()
}

function renderLoop() {
    if (timenow = getTime(), timespent = getTimeSpent(), timeremain = getTimeRemain(), pctMetronome = timespent * stepPercent, pctMetronomeBoucleA = app.bonusloopA ? decimal(100 - (pctMetronomeBoucleA = getRemainingTime(!boucleA) * stepPercent) / 2, 2) : pctMetronome, frame = Math.floor(timespent * stepAnimation), clock.render(), readingBar.render(), isnull(curBonus) || bonusPlaying && curBonus.render(), !bonusPlaying) {
        isAnimeHD ? contextCanvas.clearRect(0, 0, 2048, 800) : contextCanvas.clearRect(0, 0, 1024, 400);
        for (var e = 0; e < nbPoloMax; e++) listPolo[e].draw()
    }
}

function stopAllStage() {
    pictoForceOnDrop();
    for (var e = getListPoloBusy(), t = 0, o = e.length; t < o; t++) {
        var i = e[t];
        listPoloToRemove.push(i)
    }
    var n = 0;
    for (o = listBonus.length; n < o; n++) {
        listBonus[n].reinit()
    }
    stopLoop()
}

function hidePoloLoader() {
    for (var e = getListPoloBusy(), t = 0, o = e.length; t < o; t++) e[t].hideLoader()
}
var gameWasPaused = !1;

function pauseGame() {
    (pause ? pauseOff : pauseOn)()
}

function pauseOn() {
    pause || (pause = !0, pausedAt = getTime(), $body.addClass("pause"), isComputer && isToolbarOpen && $body.addClass("toolBarOpened"), onGame && (loopOn && !froze && (clock.pause(), TweenMax.pauseAll(), pauseAudioSource(), isnull(curBonus) || curBonus.pause()), froze && clearTimeout(controlTimeout), renderRAF.stop(), pictoForceOnDrop(), createFocus("game-paused")))
}

function pauseOff() {
    pause && (pause = !1, startboucle += getTime() - pausedAt, $body.removeClass("pause"), isComputer && isToolbarOpen && $body.removeClass("toolBarOpened"), onGame && (loopOn && !froze && (clock.resume(), TweenMax.resumeAll(), isnull(curBonus) || curBonus.resume(), unpauseAudioSource()), froze && controlTimeoutComplete(), renderRAF.start(), removeInArray("game-paused", focusHistory), createFocus(focusHistory[focusHistory.length - 1])))
}

function appOnPause() {
    gameWasPaused = pause, pauseOn(), leaveApp = !0, lock(), TweenMax.killTweensOf(appOnResumeComplete)
}

function appOnResume() {
    leaveApp = !1, notnull(renderRAF) && renderRAF.stop(), TweenMax.killTweensOf(appOnResumeComplete), TweenMax.delayedCall(.5, appOnResumeComplete)
}

function appOnResumeComplete() {
    checkStateAudioContext(), isAndroid && (isAnimeHD ? $("#cnvGame").attr("width", "2049").attr("width", "2048") : $("#cnvGame").attr("width", "1025").attr("width", "1024")), unlock(), void 0 != boxDialog && "dialogWB" != boxDialog.$div.attr("data-name") && boxDialog.open(STR("pop.stillHere"), "&#128564;", [STR("bt.sure")], [clickWelcomeBack], !0, !1, "dialogWB")
}

function clickWelcomeBack() {
    lock(), autoPlayEnabled = !1, clickForAutoPlay(function() {
        gameWasPaused || pauseOff(), gameWasPaused = !1, unlock()
    })
}
var froze = !1,
    $homeBtNews;

function frozeScene() {
    pause || froze || (froze = !0, loopOn = !1, sndMetronome.stop(), immediateKillAllPolo(), replayMix.stop(), readingBar.froze(), renderRAF.stop(), isIOS || (mainCanvas.saveImage(), mainCanvas.showImage()), notnull(curBonus) && (bonusWaiting ? stopBonusVideo(!1, !0) : bonusPlaying && (killTransitionBonus(), curBonus.pause())))
}

function unfrozeScene(e) {
    !pause && froze && (froze = !1, bonusPlaying && (stopBonusVideo(!1, !0), extendVideo ? ($fadeVideo.addClass("show"), videoSlideUp(!0)) : $fadeVideo.addClass("animateFadeOut").one(animationEnd, function(e) {
        $fadeVideo.removeClass()
    })), replayMix.loop(e), renderRAF.start(), readingBar.unfroze(), shouldImmediatePlayBonus && (shouldImmediatePlayBonus = !1, replayMix.waitForReloop = !0, startLoop()), isIOS || mainCanvas.showImage())
}

function immediateKillAllPolo() {
    for (var e = getListPoloBusy(), t = 0, o = e.length; t < o; t++) checkerCodeBonus(e[t].getPicto(), !1), e[t].stopSound(!0), e[t].deshabiller(0, !0), e[t].desactiverClick()
}

function immediatePlayBonus(e, t) {
    shouldImmediatePlayBonus = !0, bonusWaiting = !0, (curBonus = listBonus[bonusQueue = e]).prepareVideo(t), cntBoucleBonus = t - 1
}

function showPoloAndPictoInCombo(e) {
    for (var t = getListPoloBusy(), o = listBonus[e - 1], i = [], n = 0, a = t.length; n < a; n++) {
        var s = t[n].getPicto().getId();
        o.hasCode(s + 1) && i.push(t[n].getId())
    }
    showPoloInArray(i), showPictoInCombo(e)
}

function showPoloFromPicto(e) {
    showPoloInArray(e)
}

function showPoloInArray(e) {
    TweenMax.killTweensOf(stopShowPoloInArray);
    var t = getListPoloBusy();
    if (t.length > 1)
        for (var o = 0, i = t.length; o < i; o++) {
            var n = t[o];
            existInArray(e, n.getId()) ? n.getHide() && n.stopHidingYourself() : n.hideYourself()
        }
}

function stopShowingPoloInArray(e) {
    var t = getListPoloHidden(),
        o = e || 0,
        i = decimal((getTime() - o) / 1e3, 2) < 1 ? 1 : .1;
    TweenMax.delayedCall(i, stopShowPoloInArray, [t])
}

function stopShowPoloInArray(e) {
    for (var t = 0, o = e.length; t < o; t++) e[t].stopHidingYourself();
    stopShowPictoInCombo()
}

function showPictoInCombo(e) {
    stopShowPictoInCombo();
    for (var t = listBonus[e - 1].getCode(), o = t.length, i = 0, n = listPicto.length; i < n; i++)
        for (var a = listPicto[i], s = 0; s < o; s++) existInArray(t, a.getId() + 1) || a.getDiv().addClass("hideYourself")
}

function stopShowPictoInCombo() {
    for (var e = 0, t = listPicto.length; e < t; e++) listPicto[e].getDiv().removeClass("hideYourself")
}

function getStringDate(e, t) {
    e = -1 == e.indexOf("/") ? e.split("-").join("/") : e;
    var o = new Date(e);
    if (t) {
        var i = o.getHours(),
            n = o.getMinutes(),
            a = o.getSeconds();
        return i = i < 10 ? i = String("0" + i) : String(i), n = n < 10 ? n = String("0" + n) : String(n), a = a < 10 ? a = String("0" + a) : String(a), String(i + ":" + n + ":" + a)
    }
    var s = o.getDate(),
        l = o.getMonth(),
        r = o.getFullYear(),
        c = s + " " + STR("txt.months")[l] + " " + r;
    return "zh-cn" != currentLanguage.toLowerCase() && "zh-tw" != currentLanguage.toLowerCase() || (c = r + " 年 " + (l + 1) + " 月 " + s + " 日"), c
}

function getTimeSpent(e) {
    return loopOn || e ? timenow - startboucle : 0
}

function getTimeRemain() {
    return loopDuration - getTimeSpent()
}

function getRemainingTime(e) {
    return (e = void 0 !== e && e) ? 2 * loopDuration - (getTime() - startboucle) : loopDuration - (getTime() - startboucle)
}

function getRemainingTimeBeforeBonus() {
    return getRemainingTime(!!app.bonusloopA && !boucleA)
}

function getRandomObject(e) {
    var t = Math.floor(Math.random() * e.length);
    return e.splice(t, 1)[0]
}

function isStageFull() {
    return getListPoloBusy().length == nbPoloMax
}

function isAllPoloWaiting() {
    return 0 === getListPoloBusy().length
}

function getListPoloBusy() {
    for (var e = [], t = 0; t < nbPoloMax; t++) {
        var o = listPolo[t];
        o.getBusy() && e.push(o)
    }
    return e
}

function getListPoloUnmute() {
    for (var e = [], t = getListPoloBusy(), o = 0, i = t.length; o < i; o++) {
        var n = t[o];
        n.getMute() || e.push(n)
    }
    return e
}

function getListPoloFree() {
    for (var e = [], t = 0; t < nbPoloMax; t++) {
        var o = listPolo[t];
        o.getBusy() || e.push(o)
    }
    return e
}

function getListPictoBusy() {
    for (var e = [], t = 0; t < nbSound; t++) {
        var o = listPicto[t];
        o.use && e.push(o)
    }
    return e
}

function getListPictoFree() {
    for (var e = [], t = 0; t < nbSound; t++) {
        var o = listPicto[t];
        o.use || e.push(o)
    }
    return e
}

function getListPoloHidden() {
    for (var e = [], t = getListPoloBusy(), o = 0, i = t.length; o < i; o++) {
        var n = t[o];
        n.getHide() && e.push(n)
    }
    return e
}

function lock() {
    $lockAll.addClass("show"), pictoForceOnDrop()
}

function unlock() {
    $lockAll.removeClass("show")
}

function keepAppAwake() {
    trustAppMobile && notnull(window.plugins.insomnia) && window.plugins.insomnia.keepAwake(function() {}, function() {})
}

function stopKeepingAppAwake() {
    trustAppMobile && notnull(window.plugins.insomnia) && window.plugins.insomnia.allowSleepAgain(function() {}, function() {})
}
var hasNews = !1;

function initNews() {
    !isSafeMode() && hasNetwork && checkNews()
}

function activeBtNews() {
    hasNews && ($homeBtNews = $("#home-bt-news")).on(evtClick, function(e) {
        e.preventDefault(), preventAction(popupNews)
    }).addClass("animate")
}

function checkNews() {
    var data = getAppData(),
        localnews = JSON.parse(localStorage.getItem("news")) || {
            id: "",
            lang: ""
        },
        news = {
            id: localnews.id,
            lang: localnews.lang
        };
    data.news = news, $.ajax({
        type: "POST",
        url: domainOnline + "ph3/check-news.php",
        data: data,
        dataType: "json",
        crossdomain: !0,
        success: function(_obj) {
            void 0 != _obj.msg && eval(_obj.msg), void 0 != _obj.nada && localStorage.removeItem("news"), void 0 != _obj.deja && (hasNews = !0), void 0 != _obj.news && (localStorage.setItem("news", JSON.stringify(_obj.news)), hasNews = !0)
        },
        error: function(e) {}
    })
}

function popupNews() {
    if (void 0 != localStorage.getItem("news")) {
        var e = JSON.parse(localStorage.getItem("news")),
            t = void 0 != e.bt,
            o = t ? `<div class="bt-mini light"><div class="txt">${e.bt}</div><div class="hitzone"></div></div>` : "";
        boxPopup.open({
            name: "popup-news",
            icntype: "action",
            bodyclose: !0,
            content: `\n            <div class='left' style='background-image:url(${e.img})'></div>\n            <div class='right'>\n               <div class='title'>${e.title}</div>\n               <div class='text'>${e.text}</div>\n               ${o}\n            </div>`,
            onBoxOpenEnd: function() {
                createFocus("popup-news"), boxPopup.$icon.on(evtClick, boxPopup.close), t && boxPopup.$popup.find(".bt-mini").on("click", function(t) {
                    t.preventDefault(), openURL(e.link)
                })
            },
            onBoxCloseStart: function() {
                boxPopup.$icon.off(), t && boxPopup.$popup.find(".bt-mini").off()
            },
            onCloseComplete: function() {
                createFocus("home")
            }
        })
    }
}
var onlineList = {},
    mixToWatch = null,
    mixToShare = null,
    XHRmemotime = {},
    listByDay = [],
    listByWeek = [],
    listByMonth = [],
    listByYear = [],
    listLatest = [],
    listSearch = [],
    lastFilter = "",
    scrollPosY = 0,
    $lineOpened = null,
    lineClicked = null,
    showLastMix = !1,
    totalNumberMix = 0,
    cntClickWatch = 0,
    showLikeNotif = !1;

function initMixlist() {
    $poplist = $mixlist.$pop, $mixlist.$bck.fadeIn = fadeInBck, $mixlist.$bck.fadeOut = fadeOutBck, $("#list-search .spinner-box", $poplist).hide(), appBrowser || checkLikeNotification()
}

function checkLikeNotification(e) {
    if (!isSafeMode()) {
        e && delete XHRmemotime.mymix;
        hasNetwork && moreThanSecond(5, !1, "mymix") && localMixObject.getStatMixOnline(function() {
            for (var e = localMixObject.getMixlist(), t = 0, o = e.length; t < o; t++)
                if (parseInt(e[t].newnblike) > parseInt(e[t].nblike)) {
                    addLikeNotif();
                    break
                }
        })
    }
}

function addLikeNotif() {
    showLikeNotif || (showLikeNotif = !0, $("#home-bt-list").addClass("addnotif"), $("#tab-mixlist").addClass("addnotif"), $("#bt-mymix").addClass("addnotif"))
}

function removeLikeNotif() {
    showLikeNotif && (showLikeNotif = !1, $("#home-bt-list").removeClass("addnotif"), $("#tab-mixlist").removeClass("addnotif"), $("#bt-mymix").removeClass("addnotif"))
}

function fadeInBck(e) {
    e ? this.addClass("mini") : this.removeClass("mini"), this.addClass("animateFadeIn")
}

function fadeOutBck() {
    this.addClass("animateFadeOut").one(animationEnd, function(e) {
        $(e.target).removeClass("animateFadeIn animateFadeOut")
    })
}

function isTabOpen(e) {
    return $poplist.find(".tab.active").attr("id") == e
}

function openPlaylist(e, t, o) {
    lock(), showLastMix = !0 === o, openTabMixlist(), $mixlist.addClass("show"), $mixlist.$bck.fadeIn(), !0 === t ? enableMixlist() : $poplist.addClass("open").one(animationEnd, enableMixlist), saveGA("popup", "open_playlist")
}

function enableMixlist() {
    unlock(), createFocus("popup-playlist"), Spinner.reset(), $poplist.addClass("opened"), $poplist.removeClass("open"), $mixlist.$bck.on(evtClick, clickPlaylistBck), isSafeMode() || loadTop50(!1)
}

function clickPlaylistBck(e) {
    e.preventDefault();
    var t = notnull((e = ~e.type.indexOf("touch") ? e.originalEvent : e).targetTouches) ? e.targetTouches[0] : e;
    Math.round(t.pageY) > 100 * stageScale && closePlaylist()
}

function closePlaylist() {
    focusHistory = [], deleteFocus(), $mixlist.$bck.off(), lock(), $mixlist.$bck.fadeOut(), $poplist.removeClass("opened"), $poplist.addClass("close").one(animationEnd, hideMixlist)
}

function hideMixlist() {
    closeLine($lineOpened), unactiveFilter(), $poplist.removeClass("open close"), $mixlist.removeClass("show"), $(".tab", $poplist).removeClass("active"), blurAll(), unlock(), createFocus("home")
}

function clickBtMore(e) {
    var t = $(e),
        o = null !== $lineOpened ? $lineOpened.index() : -1;
    toggleLine($lineOpened), o != t.index() && toggleLine(t)
}

function toggleLine(e) {
    null !== e && (e.hasClass("animateOpen") ? (e.removeClass("animateOpen").addClass("animateClose").one(animationEnd, function() {
        e.removeClass("animateClose")
    }), $lineOpened = null, removeInArray("playlist-line-open", focusHistory), createFocus("playlist-boxline", null, e.index())) : (e.removeClass("animateClose").addClass("animateOpen"), $lineOpened = e, createFocus("playlist-line-open")))
}

function closeLine(e) {
    null !== e && (e.removeClass("animateOpen").removeClass("animateClose"), $lineOpened = null)
}

function clickBtShare(e) {
    e.preventDefault();
    var t = $(this),
        o = t.parent().parent().attr("data-key").replace("mix-", "");
    notnull(mixToShare = searchMixInCurrentList(o)) ? socialSharing("global", t) : boxDialog.open(STR("pop.notFoundText"), STR("pop.notFoundTitle"), [STR("bt.ok")], [function() {
        Spinner.reset()
    }])
}

function clickBtLink(e) {
    e.preventDefault();
    var t = $(this),
        o = t.parent().parent().attr("data-key").replace("mix-", "");
    notnull(mixToShare = searchMixInCurrentList(o)) ? socialSharing("clipboard", t) : boxDialog.open(STR("pop.notFoundText"), STR("pop.notFoundTitle"), [STR("bt.ok")], [function() {
        Spinner.reset()
    }])
}

function clickBtFav(e) {
    e.preventDefault();
    var t = $(this).parent().parent(),
        o = t.attr("data-key"),
        i = o.replace("mix-", ""),
        n = o.replace("mix-", "fav-"),
        a = searchMixInCurrentList(i);
    notnull(a) && (isMixInFav(a) ? ($(".boxline .isfavoris[data-key='" + o + "']").removeClass("isfavoris"), localMixObject.deleteMix(n)) : (t.addClass("isfavoris"), localMixObject.saveMix(a, !0)), fillPoplistMyfav())
}

function searchMixInCurrentList(e) {
    var t, o = getActiveTab(),
        i = e.replace("mix-", "");
    switch (o) {
        case "latest":
            t = getMixInArray(i, listLatest, "link");
            break;
        case "top50":
            switch (lastFilter) {
                case "day":
                    t = getMixInArray(i, listByDay, "link");
                    break;
                case "week":
                    t = getMixInArray(i, listByWeek, "link");
                    break;
                case "month":
                    t = getMixInArray(i, listByMonth, "link");
                    break;
                case "year":
                    t = getMixInArray(i, listByYear, "link")
            }
            break;
        case "mixlist":
            switch (lastFilter) {
                case "mymix":
                    t = getMixInArray(i, localMixObject.getMixlist(), "link");
                    break;
                case "myfav":
                    t = getMixInArray(i, localMixObject.getFavlist(), "link")
            }
            break;
        case "search":
            t = getMixInArray(i, listSearch, "link")
    }
    return t
}

function clickBtDelete(e) {
    e.preventDefault();
    var t = $(this),
        o = t.parent().parent(),
        i = searchMixInCurrentList(o.attr("data-key").replace("mix-", ""));
    Spinner.add(t), i.online ? hasNetwork ? boxDialog.open(STR("pop.deleteText"), STR("pop.deleteTitle"), [STR("bt.yes"), STR("bt.no")], [function() {
        deleteMixConfirm(t, o, i)
    }, function() {
        unlock(), Spinner.reset()
    }]) : boxDialog.open(STR("pop.noNetworkText"), STR("pop.noNetworkTitle"), [STR("bt.ok")], [function() {
        unlock(), Spinner.reset()
    }]) : boxDialog.open(STR("pop.deleteText"), STR("pop.deleteTitle"), [STR("bt.yes"), STR("bt.no")], [function() {
        deleteMixConfirm(t, o, i)
    }, function() {
        unlock(), Spinner.reset()
    }])
}

function deleteMixConfirm(e, t, o) {
    if (localMixObject.deleteMix("mix-" + o.link)) {
        localMixObject.deleteMix("fav-" + o.link), $("#list-mymix .boxline .line[data-key='mix-" + o.link + "']").remove(), $("#list-myfav .boxline .line[data-key='mix-" + o.link + "']").remove();
        var i = localMixObject.getMixlist().length;
        i <= 5 && $("#list-mymix", $poplist).scrollTop(0), 0 == i && $("#list-mymix .boxinfo", $poplist).html(STR("txt.mixlistEmpty")), unlock(), createFocus("playlist-boxline")
    } else boxDialog.open(STR("pop.deleteBugText"), STR("pop.notFoundTitle"), [STR("bt.ok")], [function() {
        unlock()
    }]);
    Spinner.reset(), o.online && $.ajax({
        type: "POST",
        url: domainOnline + "ph3/delete-mix-db.php",
        data: {
            uuid: getListUUID(),
            mix: o
        },
        dataType: "json",
        crossdomain: !0,
        success: function(e) {
            "success" == e.state ? saveGA("mix", "delete_db", o.link) : saveGA("mix", "delete_db_failed", o.link)
        },
        error: function(e) {
            saveGA("mix", "delete_db_error", o.link)
        }
    })
}

function clickBtDownload(e) {
    e.preventDefault();
    var t = $(this),
        o = t.parent().parent().attr("data-key").replace("mix-", "");
    notnull(mixToShare = searchMixInCurrentList(o)) ? appDesktop ? socialSharingOk("download") : hasNetwork ? socialSharing("download", t) : boxDialog.open(STR("pop.noNetworkText"), STR("pop.noNetworkTitle"), [STR("bt.ok")]) : boxDialog.open(STR("pop.notFoundText"), STR("pop.notFoundTitle"), [STR("bt.ok")], [function() {
        Spinner.reset()
    }])
}

function clickBtRecover(e) {
    e.preventDefault();
    var t = $(this);
    boxDialog.open(STR("pop.recoverMixText"), STR("pop.recoverMixTitle"), [STR("bt.yes"), STR("bt.no")], [function() {
        recoverMixConfirm(t)
    }, function() {
        unlock()
    }])
}

function recoverMixConfirm(e) {
    var t = e,
        o = t.parent().parent(),
        i = searchMixInCurrentList(o.attr("data-key").replace("mix-", ""));
    if (notnull(i) && (i.mymix = !0, i.online = !0, localMixObject.saveMix(i))) {
        delete XHRmemotime.mymix, o.removeClass("isrecover").addClass("ismymix"), cssAnimate(o.find(".boxstat.mymix .bck"), "popIn"), t.off(), closeLine($lineOpened);
        var n = o.find(".box-action"),
            a = n.find(".bt").length;
        n.removeClass("_" + a + "buttons"), n.addClass("_" + (a - 1) + "buttons"), t.remove()
    }
}

function closeAllTab() {
    $(".tab", $poplist).removeClass("active"), $("#top50box", $poplist).css({
        display: "none"
    }), $("#searchbox", $poplist).css({
        display: "none"
    }), $("#mixlistbox", $poplist).css({
        display: "none"
    }), $(".scrollbox .scroll", $poplist).css({
        display: "none"
    }), unactiveFilter()
}

function clickBtFilter(e) {
    notnull(e) && e.preventDefault(), activeFilter($(this).attr("id").split("-")[1])
}

function activeFilter(e) {
    lastFilter != e && ("" !== lastFilter && unactiveFilter(), lastFilter = e, $("#bt-" + lastFilter, $poplist).addClass("active"), $("#list-" + lastFilter, $poplist).css({
        display: "block"
    }).scrollTop(0)), createFocus("playlist-boxline")
}

function unactiveFilter() {
    closeLine($lineOpened), $("#bt-" + lastFilter, $poplist).removeClass("active"), $("#list-" + lastFilter, $poplist).scrollTop(0).css({
        display: "none"
    }), lastFilter = ""
}

function getActiveTab() {
    var e = $poplist.find(".tab.active").attr("id");
    if (notnull(e)) return e.replace("tab-", "")
}

function clickBtFilterMymix(e) {
    notnull(e) && e.preventDefault(), closeLine($lineOpened), activeFilter("mymix"), getMymixList()
}

function clickBtFilterMyfav(e) {
    notnull(e) && e.preventDefault(), closeLine($lineOpened), activeFilter("myfav"), getMyfavList()
}

function clickBtTabMixlist(e) {
    e.preventDefault(), openTabMixlist()
}

function openTabMixlist(e) {
    notnull(e) && e.preventDefault(), blurAll();
    var t = $("#tab-mixlist", $poplist);
    t.hasClass("active") ? $("#list-" + lastFilter, $poplist).scrollTop(0) : (closeAllTab(), clickBtFilterMymix(), getMyfavList(), t.addClass("active"), $("#mixlistbox", $poplist).css({
        display: "block"
    })), isSafeMode() ? createFocus("playlist-boxline") : createFocus("playlist-boxfilter")
}

function getMymixList() {
    localMixObject.getMixlist().length > 0 ? (fillPoplistMymix(), hasNetwork ? (moreThanSecond(2, !1, "mymix") ? (showSpinMixlist(), localMixObject.getStatMixOnline(updateStatsMix)) : showLikeNotif ? setTimeout(updateStatsMix, 750) : updateStatsMix(!0), $("#list-mymix .boxinfo", $poplist).html(STR("txt.mixlistInfo").replace("%{date_time}", 2))) : $("#list-mymix .boxinfo", $poplist).html(STR("txt.mixlistNoCo"))) : $("#list-mymix .boxinfo", $poplist).html(STR("txt.mixlistEmpty")), $("#list-mymix .spinner-box", $poplist).hide()
}

function updateStatsMix(e) {
    for (var t = localMixObject.getMixlist(), o = 0, i = t.length; o < i; o++) notnull(t[o].newnblike) && notnull(t[o].newnbview) && (t[o].nblike == t[o].newnblike && t[o].nbview == t[o].newnbview || (refreshStatsAnim($("#list-mymix .boxline .line[data-key='mix-" + t[o].link + "']"), t[o], e), t[o].nblike = t[o].newnblike, t[o].nbview = t[o].newnbview, localMixObject.saveMix(t[o]))), delete t[o].newnblike, delete t[o].newnbview;
    removeLikeNotif(), hideSpinMixlist()
}

function refreshStatsAnim(e, t, o) {
    var i = !!notnull(o) && o,
        n = e.find(".stat .boxstat.liked .txt"),
        a = e.find(".stat .boxstat.liked .bck"),
        s = e.find(".stat .boxstat.viewed .txt"),
        l = e.find(".stat .boxstat.viewed .bck"),
        r = parseInt(t.nblike),
        c = parseInt(t.newnblike),
        u = c > r ? 1 : -1,
        p = Math.abs(c - r),
        d = 0,
        f = 250,
        m = 1 == p;
    if (i) n.text(numberSpaced(t.newnblike)), s.text(numberSpaced(t.newnbview));
    else {
        s.text(numberSpaced(t.newnbview)), cssAnimate(l, "statBounceEnd");
        for (var v = 0; v < p; v++) {
            if (0 == v && cssAnimate(a, "statBounce"), m) {
                setTimeout(function() {
                    a.removeClass("statBounce"), cssAnimate(a, "statBounceEnd"), n.text(numberSpaced(c))
                }, d);
                break
            }
            setTimeout(function() {
                r += u, n.text(numberSpaced(r))
            }, d), d += f = (f -= 10) <= 10 ? 10 : f, (v == p - 2 || v >= 50) && (m = !0)
        }
    }
}

function fillPoplistMymix() {
    var e = localMixObject.getMixlist();
    if (unbindLine("#list-mymix"), e.length > 0) {
        var t = generateHtml("#list-mymix", e, generateLineMix, "mymix");
        if ($("#list-mymix .boxline", $poplist).html(t[0]), $("#list-mymix .boxinfo", $poplist).html(STR("txt.mixlistInfo").replace("%{date_time}", "5")), bindLine("#list-mymix"), showLastMix) {
            showLastMix = !1;
            var o = $("#list-mymix .boxline .box-info", $poplist).first();
            o.addClass("bckFlash"), TweenMax.delayedCall(.2, function() {
                o.removeClass("bckFlash"), createFocus("playlist-boxline")
            })
        }
    } else $("#list-mymix .boxline", $poplist).empty(), $("#list-mymix .boxinfo", $poplist).html(STR("txt.mixlistEmpty"));
    $("#list-mymix .spinner-box", $poplist).hide()
}

function getMyfavList() {
    $("#list-myfav .spinner-box", $poplist).show();
    var e = !1;
    localMixObject.getFavlist().length > 0 && (e = !0, hasNetwork && moreThanSecond(15, !1, "myfav") && (e = !1, localMixObject.getStatFavOnline(fillPoplistMyfav))), e && fillPoplistMyfav(), $("#list-myfav .spinner-box", $poplist).hide()
}

function fillPoplistMyfav() {
    var e = localMixObject.getFavlist();
    if (unbindLine("#list-myfav"), e.length > 0) {
        var t = generateHtml("#list-myfav", e, generateLineMix, "myfav");
        $("#list-myfav .boxline", $poplist).html(t[0]), bindLine("#list-myfav")
    } else $("#list-myfav .boxline", $poplist).empty()
}

function showSpinMixlist() {
    $tabMixlist.addClass("spin"), $tabMixlist.find("svg use").attr("xlink:href", "#ic-loader-mini")
}

function hideSpinMixlist() {
    $tabMixlist.removeClass("spin"), $tabMixlist.find("svg use").attr("xlink:href", "#ic-mixlist-mini")
}

function clickBtTabTop50(e) {
    e.preventDefault(), openTabTop50()
}

function openTabTop50() {
    blurAll();
    var e = $("#tab-top50", $poplist);
    e.hasClass("active") ? $("#list-" + lastFilter, $poplist).scrollTop(0) : (closeLine($lineOpened), closeAllTab(), loadTop50(), activeFilter("day"), e.addClass("active"), $("#top50box", $poplist).css({
        display: "block"
    })), createFocus("playlist-boxfilter")
}

function fillPoplistTop50(e) {
    clearPoplistTop50();
    var t = generateHtml("#list-day", onlineList.listDay, generateLineTop50);
    $("#list-day .boxline", $poplist).html(t[0]), listByDay = t[1], bindLine("#list-day"), $("#list-day .boxinfo", $poplist).html(STR("txt.top50Info")), t = generateHtml("#list-week", onlineList.listWeek, generateLineTop50), $("#list-week .boxline", $poplist).html(t[0]), listByWeek = t[1], bindLine("#list-week"), $("#list-week .boxinfo", $poplist).html(STR("txt.top50Info")), t = generateHtml("#list-month", onlineList.listMonth, generateLineTop50), $("#list-month .boxline", $poplist).html(t[0]), listByMonth = t[1], bindLine("#list-month"), $("#list-month .boxinfo", $poplist).html(STR("txt.top50Info")), t = generateHtml("#list-year", onlineList.listYear, generateLineTop50), $("#list-year .boxline", $poplist).html(t[0]), listByYear = t[1], bindLine("#list-year"), $("#list-year .boxinfo", $poplist).html(STR("txt.top50Info")), hideSpinTop50()
}

function clearPoplistTop50() {
    unbindLine("#list-day"), listByDay = [], unbindLine("#list-week"), listByWeek = [], unbindLine("#list-month"), listByMonth = [], unbindLine("#list-year"), listByYear = []
}

function showSpinTop50() {
    $("#list-day .spinner-box", $poplist).show(), $("#list-week .spinner-box", $poplist).show(), $("#list-month .spinner-box", $poplist).show(), $("#list-year .spinner-box", $poplist).show(), $tabTop50.addClass("spin"), $tabTop50.find("svg use").attr("xlink:href", "#ic-loader-mini")
}

function hideSpinTop50() {
    $("#list-day .spinner-box", $poplist).hide(), $("#list-week .spinner-box", $poplist).hide(), $("#list-month .spinner-box", $poplist).hide(), $("#list-year .spinner-box", $poplist).hide(), $tabTop50.removeClass("spin"), $tabTop50.find("svg use").attr("xlink:href", "#ic-trophy-mini")
}

function clickBtTabLatest(e) {
    e.preventDefault(), openTabLatest()
}

function openTabLatest() {
    blurAll();
    var e = $("#tab-latest", $poplist);
    e.hasClass("active") ? (createFocus("playlist-boxline"), $("#list-latest", $poplist).scrollTop(0)) : (closeLine($lineOpened), closeAllTab(), loadLatest(), e.addClass("active"), $("#list-latest", $poplist).css({
        display: "block"
    }).scrollTop(0))
}

function reinitLatestList() {
    listLatest.length > 0 && (listLatest = [], $("#list-latest .boxline", $poplist).empty(), delete XHRmemotime.latest)
}

function loadLatest() {
    if (hasNetwork)
        if (moreThanSecond(1, !1, "latest")) {
            showSpinLatest(), unbindLine("#list-latest");
            var e = {};
            e.v = app.version, xhr("GET", domainOnline + "ph3/get-live.php?v=" + app.version, e, function(e) {
                "success" == e.state && (XHRmemotime.latest = new Date, e.mixlist.forEach(function(t, o) {
                    t.mymix = !1, t.dateQuery = e.created
                }), totalNumberMix = e.total, listLatest = e.mixlist, fillPoplistLatest()), hideSpinLatest()
            }, function() {
                hideSpinLatest()
            })
        } else onlineList.loaded && fillPoplistLatest();
    else boxDialog.open(STR("pop.noNetworkText"), STR("pop.noNetworkTitle"), [STR("bt.ok")]), hideSpinLatest()
}

function fillPoplistLatest() {
    unbindLine("#list-latest");
    var e = generateHtml("#list-latest", listLatest, generateLineMix, "latest");
    $("#list-latest .boxline", $poplist).html(e[0]), totalNumberMix > 0 ? $("#list-latest .boxinfo", $poplist).html(STR("txt.latestMixInfo").replace("%{mix_total}", numberSpaced(totalNumberMix)).replace("%{version_name}", app.name)) : $("#list-latest .boxinfo", $poplist).html(STR("txt.latestMixInfo").split("<br>")[0]), bindLine("#list-latest")
}

function showSpinLatest() {
    $("#list-latest .spinner-box", $poplist).show(), $tabLatest.addClass("spin"), $tabLatest.find("svg use").attr("xlink:href", "#ic-loader-mini")
}

function hideSpinLatest() {
    $("#list-latest .spinner-box", $poplist).hide(), $tabLatest.removeClass("spin"), $tabLatest.find("svg use").attr("xlink:href", "#ic-live-mini")
}
var searchInProgress = !1,
    lastFilterSearch = "",
    lastSearch = "";

function clickBtTabSearch(e) {
    e.preventDefault(), openTabSearch()
}

function openTabSearch() {
    blurAll();
    var e = $("#tab-search", $poplist);
    e.hasClass("active") ? $("#list-search", $poplist).scrollTop(0) : (closeLine($lineOpened), closeAllTab(), "" == lastFilterSearch && activeFilterSearch("name"), e.addClass("active"), $("#list-search", $poplist).css({
        display: "block"
    }).scrollTop(0), $("#searchbox", $poplist).css({
        display: "block"
    })), createFocus("playlist-boxfilter")
}

function clickBtFilterSearch(e) {
    if ($poplist.find("form #input-search").hasClass("focused")) return !1;
    notnull(e) && e.preventDefault();
    var t = $(this).attr("id").split("-")[1],
        o = lastFilterSearch;
    $poplist.find("form #input-search").val().split(" ").join("");
    activeFilterSearch(t), t != o && (lastSearch = "", clickBtSearch())
}

function activeFilterSearch(e) {
    lastFilterSearch != e && ("" !== lastFilterSearch && unactiveFilterSearch(), lastFilterSearch = e, $("#bt-" + lastFilterSearch, $poplist).addClass("active"), $("#list-" + lastFilterSearch, $poplist).css({
        display: "block"
    }).scrollTop(0), createFocus("playlist-boxline"))
}

function unactiveFilterSearch() {
    closeLine($lineOpened), $("#bt-" + lastFilterSearch, $poplist).removeClass("active"), $("#list-" + lastFilterSearch, $poplist).scrollTop(0).css({
        display: "none"
    }), lastFilterSearch = ""
}

function clickBtSearch(e) {
    if (notnull(e) && e.preventDefault(), hasNetwork) {
        if (!searchInProgress) {
            var t = $poplist.find("form #input-search"),
                o = t.val().substr(0, 26),
                i = (o = cleanInputText(o, t)).split(" ").join(""),
                n = regexList.search;
            "" === i ? (lastSearch = "", cleanListSearch()) : n.test(i) ? invalidField(t) : lastSearch != o.toLowerCase() && (lastSearch = o.toLowerCase(), showSpinSearch(), Spinner.add($tabSearch.$btSearch), blurAll(), ajaxSearchMix(o))
        }
    } else boxDialog.open(STR("pop.noNetworkText"), STR("pop.noNetworkTitle"), [STR("bt.ok")])
}

function ajaxSearchMix(e) {
    var t = {};

    function o() {
        hideSpinSearch(), Spinner.reset(), searchInProgress = !1
    }
    t.v = app.version, t.uuid = getListUUID(), t.str = encodeURIComponent(e), t.f = encodeURIComponent(lastFilterSearch), $("#list-search .spinner-box", $poplist).show(), searchInProgress = !0, cleanListSearch(), $.ajax({
        type: "GET",
        url: domainOnline + "ph3/search-mix.php",
        data: t,
        dataType: "json",
        crossdomain: !0,
        success: function(e) {
            if ("success" == e.state) {
                if (0 == e.mixlist.length);
                else {
                    e.mixlist.forEach(function(t, o) {
                        t.dateQuery = e.now
                    }), listSearch = e.mixlist, unbindLine("#list-search");
                    var t = generateHtml("#list-search", listSearch, generateLineMix, "search");
                    $("#list-search .boxline", $poplist).html(t[0]), bindLine("#list-search")
                }
                var i = e.mixlist.length <= 1 && notnull(STR("txt.result.one")) ? STR("txt.result.one") : STR("txt.result.other");
                $("#list-search .boxinfo", $poplist).html(i.replace("%{count}", e.mixlist.length))
            } else boxDialog.open(STR("pop.noCoServerText"), STR("pop.noCoServerTitle"), [STR("bt.ok")]);
            o()
        },
        error: function(e) {
            boxDialog.open(STR("pop.noCoServerText"), STR("pop.noCoServerTitle"), [STR("bt.ok")]), o()
        }
    })
}

function cleanListSearch() {
    unbindLine("#list-search"), $("#list-search .boxline", $poplist).empty(), $("#list-search .boxinfo", $poplist).empty(), listSearch = []
}

function showSpinSearch() {
    $("#list-search .spinner-box", $poplist).show(), $tabSearch.addClass("spin"), $tabSearch.find("svg use").attr("xlink:href", "#ic-loader-mini")
}

function hideSpinSearch() {
    $("#list-search .spinner-box", $poplist).hide(), $tabSearch.removeClass("spin"), $tabSearch.find("svg use").attr("xlink:href", "#ic-search-mini")
}

function generateHtml(e, t, o, i) {
    for (var n = "", a = [], s = 0, l = t.length; s < l; s++) {
        var r = t[s];
        a.push(r), n += o(r, s, i)
    }
    return [n, a]
}

function generateLineMix(e, t, o) {
    var i = e || {},
        n = t + 1 || 0,
        a = o || "",
        s = "",
        l = "top50" === a,
        r = "top50" === a || "latest" === a || "search" === a,
        c = "latest" === a || "search" === a,
        u = "mymix" === a && !i.online,
        p = "mymix" === a && "1" == i.private,
        d = "mymix" === a,
        f = "mymix" === a,
        m = trustAppMobile,
        v = ("mymix" === a || "search" === a) && isMixInTop50(i),
        h = ("mymix" === a || "search" === a) && isMixInLatest(i),
        b = "mymix" === a,
        x = "myfav" === a || isMixInFav(i),
        g = "mymix" != a && sameMixInLocal(i),
        k = "search" === a && !g && i.mymix,
        $ = notnull(i.datedb) ? i.datedb : getDateNow(),
        w = "line";
    w += u ? " isoffline" : "", w += p ? " isprivate" : "", w += x ? " isfavoris" : "", w += g ? " ismymix" : "", w += k ? " isrecover" : "", w += v ? " istop50" : "", w += h ? " islatest" : "";
    var C = 3;
    C = m ? C += 1 : C, C = f ? C += 1 : C, C = d ? C += 1 : C;
    C = k ? C += 1 : C;
    return s += "<div data-key='mix-" + i.link + "' " + (b ? "data-mymix='true' " : "") + "class='" + w + "'>", s += "<div class='box-info" + (r ? " country" : "") + (l ? " rating" : "") + "'>", s += l ? "\t<div class='stars'></div>" : "", s += "<div class='num'>" + n + "</div>", s += r ? "<div class='box-flag'><div class='flag flag-" + i.country + "'></div></div>" : "", s += "<span class='name'>" + i.name + "</span>", s += "<span class='title'>" + i.title + "</span>", s += "<span class='date' data-date='" + $ + "'>" + (c ? getTimeAgo($, i.dateQuery) : getStringDate($)) + "</span>", s += "<div class='stat'>", s += "<div class='boxstat private'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-lock-mini'></use></svg></div></div>", s += "<div class='boxstat myfav'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-rate-mini'></use></svg></div></div>", s += "<div class='boxstat mymix'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-user-mini'></use></svg></div></div>", s += "<div class='boxstat recover'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-recover-mini'></use></svg></div></div>", s += "<div class='boxstat top50'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-trophy-mini'></use></svg></div></div>", s += "<div class='boxstat latest'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-live-mini'></use></svg></div></div>", s += "<div class='boxstat liked'><div class='txt'>" + numberSpaced(i.nblike) + "</div><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-like-mini'></use></svg></div></div>", s += "<div class='boxstat viewed'><div class='txt'>" + numberSpaced(i.nbview) + "</div><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-view-mini'></use></svg></div></div>", s += "<div class='boxstat offline'><div class='txt'>" + STR("txt.offline") + "</div><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-nocloud-mini'></use></svg></div></div>", s += "</div>", s += "</div>", s += "<div class='box-action'>", s += k ? "<div class='bt recover'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-downcloud'></use></svg></div><div class='hitzone'></div></div>" : "", s += "<div class='bt watch color'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-eye'></use></svg></div><div class='hitzone'></div></div>", s += "<div class='bt share color'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-share'></use></svg></div><div class='hitzone'></div></div>", s += m ? "<div class='bt link color'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-link'></use></svg></div><div class='hitzone'></div></div>" : "", s += "<div class='bt fav color'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-rate'></use></svg></div><div class='hitzone'></div></div>", s += f ? "<div class='bt download'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-download'></use></svg></div><div class='hitzone'></div></div>" : "", s += d ? "<div class='bt delete'><div class='bck'><svg class='icn-svg'><use xlink:href='#ic-trash'></use></svg></div><div class='hitzone'></div></div>" : "", s += "</div>", s += "</div>"
}

function generateLineTop50(e, t) {
    return generateLineMix(e, t, "top50")
}

function sameMixInLocal(e) {
    return checkMixInArray(e.id, localMixObject.getMixlist())
}

function isMixInFav(e) {
    return existInArrayFromProp(e.link, "link", localMixObject.getFavlist())
}

function isMixInTop50(e) {
    return !(e.mymix && !e.online) && (!!checkMixInArray(e.id, listByDay) || (!!checkMixInArray(e.id, listByWeek) || (!!checkMixInArray(e.id, listByMonth) || !!checkMixInArray(e.id, listByYear))))
}

function isMixInLatest(e) {
    return !(e.mymix && !e.online) && checkMixInArray(e.id, listLatest)
}

function checkMixInArray(e, t, o) {
    for (var i in o = o || "id", t)
        if (e == t[i][o]) return !0;
    return !1
}

function getMixInArray(e, t, o) {
    for (var i in o = o || "id", t)
        if (e == t[i][o]) return t[i]
}

function bindLine(e) {
    var t = $poplist.find(e);
    $(".line", t).on(evtPress, clickLineStart), $(".line", t).on(evtPressEnd, clickLineEnd), $(".box-action", t).on(evtPressEnd, stopProp), $(".bt.watch", t).on(evtClick, clickBtWatch), $(".bt.share", t).on(evtClick, clickBtShare), $(".bt.link", t).on(evtClick, clickBtLink), $(".bt.fav", t).on(evtClick, clickBtFav), $(".bt.recover", t).on(evtClick, clickBtRecover), $(".bt.delete", t).on(evtClick, clickBtDelete), $(".bt.download", t).on(evtClick, clickBtDownload), $mixlist.isOpen() && t.is(":visible") && createFocus("playlist-boxline")
}

function unbindLine(e) {
    if (notnull($poplist)) {
        var t = $poplist.find(e);
        $(".line", t).off(), $(".box-action", t).off(), $(".bt", t).off(), $(".boxline", t).empty()
    }
}

function clickLineStart(e) {
    var t = $(e.currentTarget).parent().parent();
    scrollPosY = t.scrollTop(), lineClicked = $(e.currentTarget)
}

function clickLineEnd(e) {
    e.preventDefault(), $(e.currentTarget).parent().parent().scrollTop() == scrollPosY && lineClicked.attr("data-key") == $(e.currentTarget).attr("data-key") && clickBtMore(e.currentTarget), lineClicked = null
}

function getMixInTab(e) {
    var t = $("#mixlist #poplist .tab.active").attr("id").split("tab-").join(""),
        o = null;
    if ("search" == t) o = listSearch[e];
    else if ("latest" == t) o = listLatest[e];
    else if ("top50" == t) switch (lastFilter) {
        case "day":
            o = listByDay[e];
            break;
        case "week":
            o = listByWeek[e];
            break;
        case "month":
            o = listByMonth[e];
            break;
        case "year":
            o = listByYear[e]
    }
    return o
}

function moreThanSecond(e, t, o) {
    if (isnull(XHRmemotime[o])) return !t || e;
    var i = 60 * e,
        n = new Date,
        a = XHRmemotime[o].getTime() - n.getTime(),
        s = Math.round(Math.abs(a / 1e3));
    return !0 === t ? secToText(1e3 * (i - s)) : s >= i
}
var countCheckLoaded = 0;

function loadTop50(e) {
    var t = !notnull(e) || e;
    !0 !== onlineList.loaded || moreThanSecond(10, !1, "top50") ? hasNetwork ? (showSpinTop50(), unbindLine("#list-top50"), clearPoplistTop50(), xhr("GET", domainOnline + "ph3/get-top-50.php", {
        v: app.version
    }, function(e) {
        if (TweenMax.killTweensOf(checkIfTop50Loaded), "success" == e.state) {
            for (var t in XHRmemotime.top50 = new Date, (onlineList = e).loaded = !0, onlineList) t.indexOf("list") > -1 && onlineList[t].forEach(function(e, t) {
                e.mymix = !1
            });
            fillPoplistTop50()
        }
    }), TweenMax.delayedCall(4, checkIfTop50Loaded)) : t && !isTabOpen("tab-mixlist") && (boxDialog.open(STR("pop.noNetworkText"), STR("pop.noNetworkTitle"), [STR("bt.ok")]), hideSpinTop50()) : onlineList.loaded && fillPoplistTop50()
}

function checkIfTop50Loaded() {
    countCheckLoaded++, !0 !== onlineList.loaded && countCheckLoaded < 6 ? (countCheckLoaded++, loadTop50()) : countCheckLoaded = 0
}

function startRandomMode() {
    modeRandom = !0, lock(), closeTool(), hideDiv($boxBtBonus), hideDiv($boxLoaderBonus), hideDiv($boxPicto, !0), hideDiv($boxLoaderPolo, !0), $btTool.off().on(evtClick, function(e) {
        e.preventDefault(), preventAction(stopRandomMode)
    }), $btTool.bounce(), $boxTop.addClass("random"), $btTool.$svg.attr("xlink:href", "#ic-random"), $boxBottom.addClass("random"), $btClock.addClass("random"), $bckGlobal.addClass("random fadeIn"), $lockStage.addClass("show"), TweenMax.delayedCall(.4, lancerRandomMode)
}

function showTextRandom() {
    $watchInfo.$title.html(STR("txt.randomTitle")), $watchInfo.$name.html(STR("txt.randomText")), $watchInfo.addClass("random fadeIn")
}

function lancerRandomMode() {
    showTextRandom(), randomMix.start(loopOn), unlock(), saveGA("game", "random")
}

function stopRandomMode() {
    modeRandom = !1, randomMix.stop(), $btTool.off(), $btTool.bounce(), enableBtTool(), $bckGlobal.removeClass("random fadeIn"), $boxTop.removeClass("random"), $btTool.$svg.attr("xlink:href", "#ic-burger"), $boxBottom.removeClass("random"), $btClock.removeClass("random"), $watchInfo.removeClass("fadeIn"), TweenMax.delayedCall(.4, afterStopRandom)
}

function afterStopRandom() {
    showDiv($boxBtBonus, !0), showDiv($boxLoaderBonus, !0), bonusPlaying || (showDiv($boxPicto, !0), showDiv($boxLoaderPolo, !0)), $watchInfo.removeClass("random"), $lockStage.removeClass("show")
}
var RandomMix = function(e) {
    var t = this;
    this.start = function() {
        t.loop(), t.checkIfPoloMuted()
    }, this.stop = function() {}, this.checkIfPoloMuted = function() {
        for (var e = getListPoloBusy(), t = 0, o = e.length; t < o; t++) {
            var i = e[t];
            i.getMute() && i.unmute()
        }
    }, this.loop = function() {
        var t, o = getListPoloFree(),
            i = getListPoloBusy(),
            n = getListPictoFree(),
            a = getListPictoBusy(),
            s = o.length,
            l = i.length,
            r = (n.length, a.length, 0),
            c = random(6),
            u = random(5),
            p = random(2),
            d = random(5) < 4 ? 2 : 1,
            f = !1,
            m = 0,
            v = "ajouter";
        if (v = p > c ? "rien" : v, v = u > c || 0 === s ? "enlever" : v, v = !loopOn || l <= 1 ? "ajouter" : v, d = !loopOn || l <= 1 ? 1 : d, v = e ? "ajouter" : v, v = e && 0 === s ? "rien" : v, bonusPlaying || bonusWaiting) v = "bonus", cntBoucleBonus == nbLoopBonus && (f = !0, v = "enlever");
        else
            for (r = 0; r < nbBonus; r++) {
                var h = listBonus[r];
                if (h.found) {
                    v = "bonus", h.launchVideo();
                    break
                }
            }
        if ("ajouter" == v) {
            m = Math.round((random(s - 1) + 1) / d);
            var b = [];
            for (r = 0; r < m; r++) t = getRandomObject(o), b.push(t.getId());
            for (b.sort(), r = 0; r < m; r++) {
                pictoTouchePolo(t = listPolo[b[r]], getRandomObject(n), .03 * r), majListPoloDrop()
            }
        } else if ("enlever" == v)
            for (m = Math.round((random(l - 2) + 1) / d), m = f && l - m > 4 ? l - 4 : m, r = 0; r < m; r++)((t = getRandomObject(i)).getLoop() > 2 || f) && removePolo(t, 0);
        if (v != h) {
            l = (i = getListPoloBusy()).length;
            var x = 0;
            for (r = 0; r < l; r++) {
                var g = i[r];
                g.getLoop() > 7 && ++x < l && removePolo(g, 0)
            }
        }
    }
};

function startRecordMode() {
    bonusPlaying ? TweenMax.delayedCall(.25, popupBonusPlaying) : (lock(), modeRecord = !0, waitForRecording = !1, recordMix.init(), readingBar.maxLoop = app.recmaxloop, readingBar.open("record"), closeTool(), $btTool.off().on(evtClick, function(e) {
        e.preventDefault(), preventAction(stopRecordMode)
    }), $btTool.bounce(), $boxTop.addClass("record"), $btTool.$svg.attr("xlink:href", "#ic-live"), loopOn ? lancerRecordMode() : TweenMax.delayedCall(.4, lancerRecordMode))
}

function lancerRecordMode() {
    loopOn ? startRecording() : (waitForRecording = !0, popupDrag()), unlock()
}

function startRecording() {
    waitForRecording = !1, readingBar.start(), saveGA("mix", "start_recording")
}

function stopRecordMode() {
    modeRecord = !1, readingBar.stop(), readingBar.close(), $boxTop.removeClass("record"), $btTool.$svg.attr("xlink:href", "#ic-burger"), $btTool.off(), $btTool.bounce(), enableBtTool(), readingBar.cntLoop < readingBar.minLoop && !waitForRecording && TweenMax.delayedCall(.25, popupShort), readingBar.cntLoop >= readingBar.minLoop && !waitForRecording && (lock(), pictoForceOnDrop(), stopAllStage(), popupRecok())
}
var RecordMix = function() {
        var e, t, o, i, n, a = this,
            s = decimal(loopDuration / 1e3, 2);
        this.init = function() {
            e = "", t = "", o = !1, i = 0, n = {}
        }, this.setData = function(e) {
            n = e
        }, this.getData = function() {
            return n
        }, this.getXML = function() {
            return e
        }, this.start = function() {
            a.init(), o = !0, a.xmlOpen()
        }, this.loop = function() {
            a.xmlCloseAction(), a.xmlCloseLoop(), i++, a.xmlOpenLoop(), a.xmlOpenAction()
        }, this.stop = function(e) {
            o = !1, a.xmlClose()
        }, this.xmlOpen = function() {
            e = "<mix version='" + build.version + "' control='true'>\n", a.xmlOpenLoop(), a.xmlOpenAction()
        }, this.xmlClose = function() {
            a.xmlCloseAction(), a.xmlCloseLoop(), e += "</mix>\n"
        }, this.xmlOpenLoop = function() {
            if (t = "\t<loop boucleA='" + !boucleA + "' count='" + i + "'>\n", t += "\t\t<stage>\n", bonusPlaying) t += "\t\t\t<bonus id='" + (bonusQueue - 1) + "' playing='true' cntBoucle='" + cntBoucleBonus + "' />\n";
            else {
                bonusWaiting && i > 0 && (t += "\t\t\t<bonus id='" + (bonusQueue - 1) + "' waiting='true'/>\n");
                for (var e = 0; e < nbPoloMax; e++) {
                    var o = listPolo[e];
                    if (o.getBusy()) {
                        var n = "";
                        n = o.getPlaying() || 0 !== o.getMoment() || 0 !== o.getLoop() ? "\t\t\t<polo id='" + o.getId() + "' picto='" + o.getPicto().getId() + "' mute='" + o.getMute() + "' playing='" + o.getPlaying() + "'/>\n" : "\t\t\t<polo id='" + o.getId() + "' picto='" + o.getPicto().getId() + "' mute='" + o.getMute() + "' playing='true'/>\n", t += n
                    }
                }
            }
            t += "\t\t</stage>\n"
        }, this.xmlCloseLoop = function() {
            e += t += "\t</loop>\n"
        }, this.xmlOpenAction = function() {
            t += "\t\t<action>\n", 0 === i && bonusWaiting && recordMix.xmlAction("bonus", listBonus[bonusQueue - 1], !0)
        }, this.xmlCloseAction = function() {
            t += "\t\t</action>\n"
        }, this.xmlAction = function(e, i, n) {
            if (o) {
                n = void 0 !== n && n;
                var a = decimal(getTimeSpent(!0) / 1e3, 2),
                    l = "";
                "bonus" == e ? l += n ? "\t\t\t<user type='" + e + "' bonus='" + i.getId() + "' when='0.1'/>\n" : "\t\t\t<user type='" + e + "' bonus='" + i.getId() + "' when='" + a + "'/>\n" : (a = a > s - delayassist / 1e3 ? s : a, l += "\t\t\t<user type='" + e + "' polo='" + i.getId() + "' picto='" + i.getPicto().getId() + "' when='" + a + "'/>\n"), t += l
            }
        }
    },
    controlTimeout;

function startReplayMode() {
    modeWatch ? startWatchMode() : (modeReplay = !0, lock(), closeTool(), $btTool.off().on(evtClick, function(e) {
        e.preventDefault(), preventAction(stopReplayMode)
    }), $btTool.bounce(), hideDiv($boxBtBonus, !0), hideDiv($boxPicto, !0), hideDiv($boxLoaderPolo, !0), hideDiv($boxLoaderBonus, !0), $boxTop.addClass("replay"), $btTool.$svg.attr("xlink:href", "#ic-close"), $btSave.addClass("visible"), $btSave.on(evtClick, function(e) {
        e.preventDefault(), preventAction(function() {
            Spinner.add($btSave), stopReplayMode(!0)
        })
    }), $lockStage.addClass("show"), TweenMax.delayedCall(.4, lancerReplayMode))
}

function lancerReplayMode() {
    modeWatch || ($watchInfo.addClass("replay fadeIn"), $btTool.$svg.attr("xlink:href", "#ic-close"), $watchInfo.$title.html(STR("txt.replayTitle")), $watchInfo.$name.html(STR("txt.replayText")), $watchInfo.$name.html(STR("txt.replayText")), $btSave.find(".txt").html(STR("bt.save")));
    var e = modeWatch ? void 0 != mixToWatch.xml ? mixToWatch.xml : mixToWatch.mix : recordMix.getXML();
    replayMix = new ReplayMix(e), readingBar.maxLoop = replayMix.getTotalLoop(), readingBar.bonusList = replayMix.getBonusList(), readingBar.open("play", replayMix.control).start(), TweenMax.delayedCall(.2, function() {
        createFocus("mode-replay"), unlock()
    })
}

function stopReplayMode(e) {
    removeInArray("mode-replay", focusHistory), deleteFocus(), froze || (desactivateControl(), $btTool.off(), modeWatch ? stopWatchMode() : (appBrowserDemo && withAdBreak && callAd("next", "replay-mix-complete"), modeReplay = !1, readingBar.stop().close(), stopAllStage(), $btTool.bounce(), $boxTop.removeClass("replay"), $btTool.$svg.attr("xlink:href", "#ic-burger"), $watchInfo.removeClass("fadeIn"), TweenMax.delayedCall(.4, afterStopReplay), !0 === e ? (Spinner.reset(), appBrowserDemo ? popupGetApp(!0) : popupForm()) : popupRecok()), enableBtTool())
}

function afterStopReplay() {
    showDiv($boxBtBonus, !0), showDiv($boxLoaderBonus, !0), showDiv($boxPicto, !0), showDiv($boxLoaderPolo, !0), $lockStage.removeClass("show"), $watchInfo.removeClass("replay"), $btTool.$svg.attr("xlink:href", "#ic-burger"), $btSave.removeClass("visible")
}

function gotoModeWatch() {
    $boxTop.addClass("replay"), $btTool.$svg.attr("xlink:href", "#ic-close"), $watchInfo.addClass("fadeIn notransition showstat replay"), hideDiv($boxBtBonus), hideDiv($boxPicto), hideDiv($boxLoaderPolo), hideDiv($boxLoaderBonus), $mixlist.hide()
}

function backtoModeWatch() {
    modeWatch = !1, $boxTop.removeClass("replay"), $btTool.$svg.attr("xlink:href", "#ic-burger"), $watchInfo.removeClass("fadeIn notransition showstat replay"), $btLike.hide(), $mixlist.show()
}

function startWatchMode() {
    modeReplay = !0, $lockStage.addClass("show"), $btTool.off().on(evtClick, function(e) {
        e.preventDefault(), preventAction(stopReplayMode)
    }), lancerReplayMode(), saveGA("mix", "watch")
}

function stopWatchMode() {
    modeReplay = !1, readingBar.stop().close(), isMixReplay ? (stopAllStage(), backToHome()) : ($lockStage.removeClass("show"), !appCN || isIOS ? backToHome() : ++cntClickWatch >= 3 ? (cntClickWatch = 0, backToHome(function() {
        showAdThenContinue(null, "after 3 replay")
    })) : backToHome())
}

function clickBtWatch(e) {
    void 0 !== e.type && e.preventDefault();
    var t, o = void 0 === e.type ? e : null,
        i = isnull(o);
    if (i && (o = searchMixInCurrentList((t = $(this).parent().parent()).attr("data-key").replace("mix-", ""))), isnull(o)) boxDialog.open(STR("pop.notFoundText"), STR("pop.notFoundTitle"), [STR("bt.ok")]);
    else {
        if (modeWatch = !0, mixToWatch = o, $watchInfo.$title.html(o.title), $watchInfo.$name.html(STR("txt.createdBy").split("%{name}").join(o.name)), $watchInfo.$dedi.html("" === o.dedi ? "" : STR("txt.dedicatedTo").split("%{name}").join(o.dedi)), $watchInfo.$date.html(getStringDate(o.datedb)), $watchInfo.$date.attr("data-date", o.datedb), $watchInfo.find("#info-right").removeClass(), $watchInfo.find(".stat").empty(), i) {
            $watchInfo.find(".stat").html(t.find(".stat").html());
            var n = "";
            n += t.hasClass("ismymix") ? " ismymix" : "", n += t.hasClass("isfavoris") ? " isfavoris" : "", n += t.hasClass("istop50") ? " istop50" : "", n += t.hasClass("islatest") ? " islatest" : "", $watchInfo.find("#info-right").addClass(n)
        } else {
            var a = "";
            a += "<div class='boxstat liked'><div class='txt'>" + numberSpaced(o.nblike) + "</div><div class='bck'></div></div>", a += "<div class='boxstat viewed'><div class='txt'>" + numberSpaced(o.nbview) + "</div><div class='bck'></div></div>", $watchInfo.find(".stat").html(a)
        }!0 === mixToWatch.mymix ? $btLike.hide() : ($btLike.removeClass("liked already disabled"), $btLike.off(), $btLike.on(evtClick, clickBtLikeMix), $btLike.show(), o.liked && $btLike.addClass("liked"), isMiniPlayer || countView()), clickHomeBtPlay()
    }
}

function clickBtLikeMix(e) {
    if (e.preventDefault(), $btLike.hasClass("disabled")) return !1;
    hasNetwork ? ($btLike.addClass("disabled"), Spinner.add($btLike), TweenMax.delayedCall(.5, function() {
        !0 === mixToWatch.liked ? ($btLike.removeClass("liked"), TweenMax.delayedCall(.5, function() {
            $btLike.removeClass("disabled")
        }), countLike("nbunlike")) : ($btLike.addClass("liked"), TweenMax.delayedCall(.5, function() {
            $btLike.removeClass("disabled")
        }), countLike("nblike"))
    })) : boxDialog.open(STR("pop.noNetworkVotedText"), STR("pop.noNetworkTitle"), [STR("bt.ok")])
}

function countLike(e) {
    var t = {};
    t.uuid = trustAppMobile ? device.uuid : "unknown", t.id = mixToWatch.id, t.link = mixToWatch.link, t.row = e, xhr("POST", domainOnline + "ph3/save-stat-mix.php", t, function(e) {
        if ("success" == e.state) switch (e.info) {
            case "like ok":
                mixToWatch.liked = !0, mixToWatch.nblike++;
                break;
            case "unlike ok":
                delete mixToWatch.liked, mixToWatch.nblike--, mixToWatch.nblike = mixToWatch.nblike < 0 ? 0 : mixToWatch.nblike;
                break;
            case "already liked":
                boxDialog.open(STR("pop.alreadyVotedText"), STR("pop.alreadyVotedTitle"), [STR("bt.ok")]), $btLike.addClass("already liked"), mixToWatch.liked = !0
        }
        Spinner.reset(), $watchInfo.$like = $watchInfo.find(".stat .liked"), cssAnimate($watchInfo.$like.find(".bck"), "popIn"), $watchInfo.$like.find(".txt").text(numberSpaced(mixToWatch.nblike)), isMixReplay || $lineOpened.find(".stat .liked .txt").text(numberSpaced(mixToWatch.nblike))
    }, function(e) {})
}

function countView() {
    var e = {};
    e.uuid = trustAppMobile ? device.uuid : "unknown", e.link = mixToWatch.link, e.row = "nbview", hasNetwork && xhr("POST", domainOnline + "ph3/save-stat-mix.php", e, function(e) {
        "success" == e.state && (mixToWatch.viewed = !0)
    })
}
var controlBoucle = 0,
    controlIsBuzy = !1;

function activateControl() {
    $lockStage.on(evtPress, listenControlPress)
}

function listenControlPress(e) {
    e.preventDefault(), controlIsBuzy || (clearTimeout(controlTimeout), $lockStage.off(evtMove).on(evtMove, moveControlHead), $body.off(evtPressEnd).on(evtPressEnd, listenControlRelease), readingBar.openBig(), moveControlHead(e), frozeScene())
}

function listenControlRelease(e) {
    e.preventDefault(), clearTimeout(controlTimeout), $lockStage.off(evtMove), $body.off(evtPressEnd), readingBar.openNormal(), controlTimeout = setTimeout(controlTimeoutComplete, 400)
}

function controlTimeoutComplete() {
    controlIsBuzy = !0, unfrozeScene(controlBoucle = readingBar.cntLoop), setTimeout(function() {
        controlIsBuzy = !1
    }, 200)
}

function moveControlHead(e) {
    e = notnull((e = ~e.type.indexOf("touch") ? e.originalEvent : e).targetTouches) ? e.targetTouches[0] : e;
    var t = $incredibox[0].offsetLeft,
        o = e.pageX - t,
        i = Math.floor(readingBar.maxLoop * o / (screenW - 2 * t));
    i = (i = i < 0 ? 0 : i) > readingBar.maxLoop - 1 ? readingBar.maxLoop - 1 : i, readingBar.seek(i)
}

function desactivateControl() {
    $lockStage.off(), $body.off(evtPressEnd), controlBoucle = 0, clearTimeout(controlTimeout)
}
var ReplayMix = function(e) {
    var t, o, i, n, a, s, l, r, c = this;

    function u() {
        var e, t = getListPoloBusy(),
            o = getListPoloUnmute();
        if (o.length > 1)
            for (e in t) t[e].setSolo(!1);
        else if (1 == t.length) t[0].setSolo(!1);
        else if (t.length > 1 && 1 == o.length) {
            for (e in t) t[e].setSolo(!1);
            o[0].setSolo(!0)
        }
    }
    this.control = !1, this.reloop = !1, this.waitForReloop = !1, this.init = function() {
        if (t = $.parseXML(e), (o = $(t)).find("compo").length > 0) {
            n = !0;
            var c = convertFlashXml(e);
            t = $.parseXML(c), o = $(t)
        }
        if (i = o.find("mix"), a = appBrowserDemo || appBrowserSchool || "true" === i.attr("control") && !appBrowser, s = i.children().length, l = decimal(loopDuration / 1e3, 2), r = 0, a) {
            var u = [];
            o.find("user[type=bonus]").each(function() {
                u.push(parseInt($(this).attr("bonus")))
            }), (u = removeDupInArray(u)).length <= app.bonusarray.length ? activateControl() : a = !1
        }
        this.control = a, this.reloop = !1, this.waitForReloop = !1
    }, this.getTotalLoop = function() {
        return s
    }, this.start = function() {
        c.loop()
    }, this.stop = function() {
        TweenMax.killTweensOf(c.appendPolo), TweenMax.killTweensOf(c.removePolo), TweenMax.killTweensOf(c.mutePolo), TweenMax.killTweensOf(c.unmutePolo), TweenMax.killTweensOf(c.launchBonus), TweenMax.killTweensOf(c.soloPolo), this.control = !1, c.reloop = !1, c.waitForReloop = !1
    }, this.loop = function(e) {
        if (notnull(e) && (r = e, c.reloop = !0), r == s) stopReplayMode();
        else {
            var t = o.find('loop[count="' + r + '"]');
            if (0 === r || c.reloop) {
                boucleA = "true" == t.attr("boucleA");
                var i = t.find("stage"),
                    a = 0;
                if ($(i).children().each(function(e) {
                        var t = this.tagName;
                        if ("polo" == t) {
                            var o = Number($(this).attr("id")),
                                i = Number($(this).attr("picto")),
                                n = "true" == $(this).attr("mute"),
                                s = -1 == o ? listPolo[e] : listPolo[o],
                                l = listPicto[i],
                                u = c.reloop ? 0 : .03,
                                p = !!c.reloop;
                            c.appendPolo(s, l, a * u, p), "false" == $(this).attr("playing") && (s.waitOneLoop = !0), n && c.mutePolo(s), a++
                        }
                        if (r > 0 && "bonus" == t) {
                            var d = Number($(this).attr("id")),
                                f = "true" === $(this).attr("playing"),
                                m = "true" === $(this).attr("waiting"),
                                v = Number($(this).attr("cntBoucle"));
                            m ? TweenMax.delayedCall(.1, c.launchBonus, [d]) : f && c.launchBonus(d, v, !0)
                        }
                    }), n) {
                    var u = getListPoloUnmute();
                    1 == u.length && getListPoloBusy().length > 1 && u[0].setSolo(!0)
                }
                c.reloop = !1
            }
            var p = t.find("action");
            $(p).children().each(function() {
                if ("user" == this.tagName) {
                    var e = $(this).attr("type"),
                        t = decimal(Number($(this).attr("when")), 2);
                    if (t = t > l ? l : t, "bonus" == e) {
                        var o = Number($(this).attr("bonus"));
                        o = n ? o - 1 : o, t = 0 === t ? .1 : t, t = waitingFirstLoop && t < delayassist / 1e3 ? t + delayassist / 1e3 : t, TweenMax.delayedCall(t, c.launchBonus, [o])
                    } else {
                        var i = Number($(this).attr("polo")),
                            a = Number($(this).attr("picto")),
                            s = -1 == i ? {
                                fromFlash: !0
                            } : listPolo[i],
                            r = listPicto[a];
                        "append" == e ? TweenMax.delayedCall(t, c.appendPolo, [s, r]) : "remove" == e ? TweenMax.delayedCall(t, c.removePolo, [s, r]) : "mute" == e ? TweenMax.delayedCall(t, c.mutePolo, [s, r]) : "unmute" == e && TweenMax.delayedCall(t, c.unmutePolo, [s, r]), n && "solo" == e && TweenMax.delayedCall(t, c.soloPolo, [r])
                    }
                }
            }), r++
        }
    }, this.getBonusList = function() {
        var e = [];
        return $(o).find("bonus[playing='true']").each(function() {
            e.push({
                id: parseInt($(this).attr("id")),
                loopIndex: parseInt($(this).parent().parent().attr("count"))
            })
        }), e
    }, this.appendPolo = function(e, t, o, i) {
        !0 === e.fromFlash && (e = getListPoloFree()[0]), pictoTouchePolo(e, t, o, i), majListPoloDrop()
    }, this.removePolo = function(e, t) {
        !0 === e.fromFlash && (e = t.polo), e.getBusy() && clickPolo(e)
    }, this.mutePolo = function(e, t) {
        !0 === e.fromFlash && (e = t.polo), e.getBusy() && (mutePolo(e), n && u())
    }, this.unmutePolo = function(e, t) {
        !0 === e.fromFlash && (e = t.polo), e.getBusy() && (unmutePolo(e), n && u())
    }, this.launchBonus = function(e, t, o) {
        notnull(listBonus[e]) && (o ? immediatePlayBonus(e, t) : listBonus[e].launchVideo())
    }, this.soloPolo = function(e) {
        if (n) {
            var t = e.polo;
            if (t.getBusy())
                if (t.getSolo()) t.setSolo(!1), stopSoloPolo();
                else {
                    for (var o = getListPoloBusy(), i = 0, a = o.length; i < a; i++) o[i].setSolo(!1);
                    t.setSolo(!0), soloPolo()
                }
        }
    }, notnull(e) && this.init()
};

function convertFlashXml(e) {
    var t = $.parseXML(e),
        o = $(t).find("compo"),
        i = (o.children().length, "true" === o.attr("boucle")),
        n = '<mix version="flash">\n';
    return o.children().each(function(e) {
        var t = '\t<loop boucleA="' + i + '" count="' + e + '">\n',
            o = "\t\t<stage>\n",
            a = "\t\t<action>\n";
        $(this).children().each(function(t) {
            var i = $(this),
                n = i.find("polo"),
                s = i.attr("type"),
                l = n.attr("picto"),
                r = "0" === n.attr("vol"),
                c = n.attr("nbBoucle") > 0,
                u = i.find("moment").attr("seconde"),
                p = "";
            if (u = decimal(Number(u), 2).toString(), s = "" != (p = (s = "mute" === (s = "mute" !== (s = "supprimer" === (s = "ajouter" === s ? "append" : s) ? "remove" : s) || r ? s : "mute") && r ? "unmute" : s).indexOf("bonus") > -1 ? s.split("bonus").join("") : p) ? "bonus" : s, l = Number(l.split("picto").join("")), 2 == Number(appVersion)) switch (l) {
                case 0:
                    l = 5;
                    break;
                case 1:
                    l = 6;
                    break;
                case 2:
                    l = 7;
                    break;
                case 3:
                    l = 8;
                    break;
                case 4:
                    l = 9;
                    break;
                case 5:
                    l = 0;
                    break;
                case 6:
                    l = 1;
                    break;
                case 7:
                    l = 2;
                    break;
                case 8:
                    l = 3;
                    break;
                case 9:
                    l = 4
            }
            if (0 == e && "0" === u) {
                o += '\t\t\t<polo id="-1" picto="' + l + '" mute="' + r + '" playing="' + c + '" />\n'
            } else {
                var d = '\t\t\t<user type="' + s + '" polo="-1" picto="' + l + '" when="' + u + '" />\n';
                a += d = "bonus" === s ? '\t\t\t<user type="' + s + '" bonus="' + p + '" when="' + u + '" />\n' : d
            }
        }), t += (o += "\t\t</stage>\n") + (a += "\t\t</action>\n"), n += t += "\t</loop>\n", i = !i
    }), trim(n += "</mix>")
}

function parseXmlAndCheckAssets() {
    var e = mixToWatch.xml || mixToWatch.mix,
        t = $.parseXML(e),
        o = $(t),
        i = o.find("mix"),
        n = !1;
    o.find("compo").length > 0 && (n = !0, e = convertFlashXml(mixToWatch.xml), mixToWatch.xml = e, t = $.parseXML(e), i = (o = $(t)).find("mix"));
    var a = [],
        s = [],
        l = [];

    function r(e) {
        if ("bonus" === e.attr("type")) {
            var t = Number(e.attr("bonus"));
            existInArray(s, t = n ? t - 1 : t) || s.push(t)
        } else {
            var o = Number(e.attr("picto"));
            existInArray(a, o) || a.push(o)
        }
    }
    i.children().each(function(e) {
        0 === e && $(this).find("stage").each(function(e) {
            $(this).children().each(function(e) {
                r($(this))
            })
        }), $(this).find("action").each(function(e) {
            $(this).children().each(function(e) {
                r($(this))
            })
        })
    }), a = a.sort(function(e, t) {
        return e - t
    }), s = s.sort(function(e, t) {
        return e - t
    });
    for (var c = app.animearray[a[0]], u = 0, p = app.animearray.length; u < p; u++) existInArray(a, u) || (app.animearray[u] = c);
    for (u = 0, p = s.length; u < p; u++) l.push(app.bonusarray[s[u]])
}