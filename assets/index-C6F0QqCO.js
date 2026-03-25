(async ()=>{
    (function() {
        const n = document.createElement("link").relList;
        if (n && n.supports && n.supports("modulepreload")) return;
        for (const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);
        new MutationObserver((c)=>{
            for (const d of c)if (d.type === "childList") for (const m of d.addedNodes)m.tagName === "LINK" && m.rel === "modulepreload" && s(m);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function i(c) {
            const d = {};
            return c.integrity && (d.integrity = c.integrity), c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy), c.crossOrigin === "use-credentials" ? d.credentials = "include" : c.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin", d;
        }
        function s(c) {
            if (c.ep) return;
            c.ep = !0;
            const d = i(c);
            fetch(c.href, d);
        }
    })();
    var un = (()=>{
        var r = import.meta.url;
        return function(n = {}) {
            var i = n, s, c, d = new Promise((e, t)=>{
                s = e, c = t;
            });
            const b = globalThis.ServiceWorkerGlobalScope !== void 0 && typeof self < "u" && globalThis.caches && globalThis.caches.default !== void 0, $ = typeof process == "object" && process.release && process.release.name === "node";
            (b || $) && (globalThis.ImageData || (globalThis.ImageData = class {
                constructor(t, a, o){
                    this.data = t, this.width = a, this.height = o;
                }
            }), import.meta.url === void 0 && (import.meta.url = "https://localhost"), typeof self < "u" && self.location === void 0 && (self.location = {
                href: ""
            }));
            var w = Object.assign({}, i), A = "./this.program", R = (e, t)=>{
                throw t;
            }, U = typeof window == "object", C = typeof importScripts == "function";
            typeof process == "object" && typeof process.versions == "object" && process.versions.node;
            var k = "";
            function O(e) {
                return i.locateFile ? i.locateFile(e, k) : k + e;
            }
            var Z;
            (U || C) && (C ? k = self.location.href : typeof document < "u" && document.currentScript && (k = document.currentScript.src), r && (k = r), k.startsWith("blob:") ? k = "" : k = k.substr(0, k.replace(/[?#].*/, "").lastIndexOf("/") + 1), C && (Z = (e)=>{
                var t = new XMLHttpRequest;
                return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response);
            }));
            var Ue = i.print || console.log.bind(console), H = i.printErr || console.error.bind(console);
            Object.assign(i, w), w = null, i.arguments && i.arguments, i.thisProgram && (A = i.thisProgram), i.quit && (R = i.quit);
            var G;
            i.wasmBinary && (G = i.wasmBinary);
            var he, qe = !1, j, S, ie, Ce, ae, T, Ne, Ge;
            function Xe() {
                var e = he.buffer;
                i.HEAP8 = j = new Int8Array(e), i.HEAP16 = ie = new Int16Array(e), i.HEAPU8 = S = new Uint8Array(e), i.HEAPU16 = Ce = new Uint16Array(e), i.HEAP32 = ae = new Int32Array(e), i.HEAPU32 = T = new Uint32Array(e), i.HEAPF32 = Ne = new Float32Array(e), i.HEAPF64 = Ge = new Float64Array(e);
            }
            var Ye = [], Qe = [], Je = [];
            function Pt() {
                if (i.preRun) for(typeof i.preRun == "function" && (i.preRun = [
                    i.preRun
                ]); i.preRun.length;)Mt(i.preRun.shift());
                ke(Ye);
            }
            function St() {
                ke(Qe);
            }
            function It() {
                if (i.postRun) for(typeof i.postRun == "function" && (i.postRun = [
                    i.postRun
                ]); i.postRun.length;)xt(i.postRun.shift());
                ke(Je);
            }
            function Mt(e) {
                Ye.unshift(e);
            }
            function Wt(e) {
                Qe.unshift(e);
            }
            function xt(e) {
                Je.unshift(e);
            }
            var X = 0, oe = null;
            function Lt(e) {
                X++, i.monitorRunDependencies?.(X);
            }
            function Ft(e) {
                if (X--, i.monitorRunDependencies?.(X), X == 0 && oe) {
                    var t = oe;
                    oe = null, t();
                }
            }
            function Ke(e) {
                i.onAbort?.(e), e = "Aborted(" + e + ")", H(e), qe = !0, e += ". Build with -sASSERTIONS for more info.";
                var t = new WebAssembly.RuntimeError(e);
                throw c(t), t;
            }
            var Ot = "data:application/octet-stream;base64,", Ze = (e)=>e.startsWith(Ot), Y;
            i.locateFile ? (Y = "mozjpeg_enc.wasm", Ze(Y) || (Y = O(Y))) : Y = new URL("" + new URL("mozjpeg_enc-DO-zoExo.wasm", import.meta.url).href, import.meta.url).href;
            function et(e) {
                if (e == Y && G) return new Uint8Array(G);
                if (Z) return Z(e);
                throw "both async and sync fetching of the wasm failed";
            }
            function jt(e) {
                return !G && (U || C) && typeof fetch == "function" ? fetch(e, {
                    credentials: "same-origin"
                }).then((t)=>{
                    if (!t.ok) throw `failed to load wasm binary file at '${e}'`;
                    return t.arrayBuffer();
                }).catch(()=>et(e)) : Promise.resolve().then(()=>et(e));
            }
            function tt(e, t, a) {
                return jt(e).then((o)=>WebAssembly.instantiate(o, t)).then(a, (o)=>{
                    H(`failed to asynchronously prepare wasm: ${o}`), Ke(o);
                });
            }
            function Dt(e, t, a, o) {
                return !e && typeof WebAssembly.instantiateStreaming == "function" && !Ze(t) && typeof fetch == "function" ? fetch(t, {
                    credentials: "same-origin"
                }).then((l)=>{
                    var f = WebAssembly.instantiateStreaming(l, a);
                    return f.then(o, function(h) {
                        return H(`wasm streaming compile failed: ${h}`), H("falling back to ArrayBuffer instantiation"), tt(t, a, o);
                    });
                }) : tt(t, a, o);
            }
            function zt() {
                var e = {
                    a: ln
                };
                function t(o, l) {
                    return L = o.exports, he = L.C, Xe(), lt = L.H, Wt(L.D), Ft(), L;
                }
                Lt();
                function a(o) {
                    t(o.instance);
                }
                if (i.instantiateWasm) try {
                    return i.instantiateWasm(e, t);
                } catch (o) {
                    H(`Module.instantiateWasm callback failed with error: ${o}`), c(o);
                }
                return Dt(G, Y, e, a).catch(c), {};
            }
            function Bt(e) {
                this.name = "ExitStatus", this.message = `Program terminated with exit(${e})`, this.status = e;
            }
            var ke = (e)=>{
                for(; e.length > 0;)e.shift()(i);
            };
            i.noExitRuntime;
            class Ht {
                constructor(t){
                    this.excPtr = t, this.ptr = t - 24;
                }
                set_type(t) {
                    T[this.ptr + 4 >> 2] = t;
                }
                get_type() {
                    return T[this.ptr + 4 >> 2];
                }
                set_destructor(t) {
                    T[this.ptr + 8 >> 2] = t;
                }
                get_destructor() {
                    return T[this.ptr + 8 >> 2];
                }
                set_caught(t) {
                    t = t ? 1 : 0, j[this.ptr + 12] = t;
                }
                get_caught() {
                    return j[this.ptr + 12] != 0;
                }
                set_rethrown(t) {
                    t = t ? 1 : 0, j[this.ptr + 13] = t;
                }
                get_rethrown() {
                    return j[this.ptr + 13] != 0;
                }
                init(t, a) {
                    this.set_adjusted_ptr(0), this.set_type(t), this.set_destructor(a);
                }
                set_adjusted_ptr(t) {
                    T[this.ptr + 16 >> 2] = t;
                }
                get_adjusted_ptr() {
                    return T[this.ptr + 16 >> 2];
                }
                get_exception_ptr() {
                    var t = ht(this.get_type());
                    if (t) return T[this.excPtr >> 2];
                    var a = this.get_adjusted_ptr();
                    return a !== 0 ? a : this.excPtr;
                }
            }
            var rt = 0, Vt = (e, t, a)=>{
                var o = new Ht(e);
                throw o.init(t, a), rt = e, rt;
            }, ge = {}, Pe = (e)=>{
                for(; e.length;){
                    var t = e.pop(), a = e.pop();
                    a(t);
                }
            };
            function me(e) {
                return this.fromWireType(T[e >> 2]);
            }
            var ee = {}, Q = {}, be = {}, nt, it = (e)=>{
                throw new nt(e);
            }, at = (e, t, a)=>{
                e.forEach(function(p) {
                    be[p] = t;
                });
                function o(p) {
                    var v = a(p);
                    v.length !== e.length && it("Mismatched type converter count");
                    for(var g = 0; g < e.length; ++g)D(e[g], v[g]);
                }
                var l = new Array(t.length), f = [], h = 0;
                t.forEach((p, v)=>{
                    Q.hasOwnProperty(p) ? l[v] = Q[p] : (f.push(p), ee.hasOwnProperty(p) || (ee[p] = []), ee[p].push(()=>{
                        l[v] = Q[p], ++h, h === f.length && o(l);
                    }));
                }), f.length === 0 && o(l);
            }, qt = (e)=>{
                var t = ge[e];
                delete ge[e];
                var a = t.rawConstructor, o = t.rawDestructor, l = t.fields, f = l.map((h)=>h.getterReturnType).concat(l.map((h)=>h.setterArgumentType));
                at([
                    e
                ], f, (h)=>{
                    var p = {};
                    return l.forEach((v, g)=>{
                        var _ = v.fieldName, E = h[g], P = v.getter, x = v.getterContext, F = h[g + l.length], Fe = v.setter, N = v.setterContext;
                        p[_] = {
                            read: (ce)=>E.fromWireType(P(x, ce)),
                            write: (ce, Oe)=>{
                                var _e = [];
                                Fe(N, ce, F.toWireType(_e, Oe)), Pe(_e);
                            }
                        };
                    }), [
                        {
                            name: t.name,
                            fromWireType: (v)=>{
                                var g = {};
                                for(var _ in p)g[_] = p[_].read(v);
                                return o(v), g;
                            },
                            toWireType: (v, g)=>{
                                for(var _ in p)if (!(_ in g)) throw new TypeError(`Missing field: "${_}"`);
                                var E = a();
                                for(_ in p)p[_].write(E, g[_]);
                                return v !== null && v.push(o, E), E;
                            },
                            argPackAdvance: V,
                            readValueFromPointer: me,
                            destructorFunction: o
                        }
                    ];
                });
            }, Nt = (e, t, a, o, l)=>{}, Gt = ()=>{
                for(var e = new Array(256), t = 0; t < 256; ++t)e[t] = String.fromCharCode(t);
                ot = e;
            }, ot, M = (e)=>{
                for(var t = "", a = e; S[a];)t += ot[S[a++]];
                return t;
            }, st, W = (e)=>{
                throw new st(e);
            };
            function Xt(e, t, a = {}) {
                var o = t.name;
                if (e || W(`type "${o}" must have a positive integer typeid pointer`), Q.hasOwnProperty(e)) {
                    if (a.ignoreDuplicateRegistrations) return;
                    W(`Cannot register type '${o}' twice`);
                }
                if (Q[e] = t, delete be[e], ee.hasOwnProperty(e)) {
                    var l = ee[e];
                    delete ee[e], l.forEach((f)=>f());
                }
            }
            function D(e, t, a = {}) {
                if (!("argPackAdvance" in t)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
                return Xt(e, t, a);
            }
            var V = 8, Yt = (e, t, a, o)=>{
                t = M(t), D(e, {
                    name: t,
                    fromWireType: function(l) {
                        return !!l;
                    },
                    toWireType: function(l, f) {
                        return f ? a : o;
                    },
                    argPackAdvance: V,
                    readValueFromPointer: function(l) {
                        return this.fromWireType(S[l]);
                    },
                    destructorFunction: null
                });
            }, Se = [], q = [], Ie = (e)=>{
                e > 9 && --q[e + 1] === 0 && (q[e] = void 0, Se.push(e));
            }, Qt = ()=>q.length / 2 - 5 - Se.length, Jt = ()=>{
                q.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1), i.count_emval_handles = Qt;
            }, J = {
                toValue: (e)=>(e || W("Cannot use deleted val. handle = " + e), q[e]),
                toHandle: (e)=>{
                    switch(e){
                        case void 0:
                            return 2;
                        case null:
                            return 4;
                        case !0:
                            return 6;
                        case !1:
                            return 8;
                        default:
                            {
                                const t = Se.pop() || q.length;
                                return q[t] = e, q[t + 1] = 1, t;
                            }
                    }
                }
            }, Kt = {
                name: "emscripten::val",
                fromWireType: (e)=>{
                    var t = J.toValue(e);
                    return Ie(e), t;
                },
                toWireType: (e, t)=>J.toHandle(t),
                argPackAdvance: V,
                readValueFromPointer: me,
                destructorFunction: null
            }, Zt = (e)=>D(e, Kt), er = (e, t)=>{
                switch(t){
                    case 4:
                        return function(a) {
                            return this.fromWireType(Ne[a >> 2]);
                        };
                    case 8:
                        return function(a) {
                            return this.fromWireType(Ge[a >> 3]);
                        };
                    default:
                        throw new TypeError(`invalid float width (${t}): ${e}`);
                }
            }, tr = (e, t, a)=>{
                t = M(t), D(e, {
                    name: t,
                    fromWireType: (o)=>o,
                    toWireType: (o, l)=>l,
                    argPackAdvance: V,
                    readValueFromPointer: er(t, a),
                    destructorFunction: null
                });
            }, Me = (e, t)=>Object.defineProperty(t, "name", {
                    value: e
                });
            function rr(e) {
                for(var t = 1; t < e.length; ++t)if (e[t] !== null && e[t].destructorFunction === void 0) return !0;
                return !1;
            }
            function nr(e, t, a, o, l, f) {
                var h = t.length;
                h < 2 && W("argTypes array size mismatch! Must at least get return value and 'this' types!"), t[1];
                var p = rr(t), v = t[0].name !== "void", g = h - 2, _ = new Array(g), E = [], P = [], x = function(...F) {
                    F.length !== g && W(`function ${e} called with ${F.length} arguments, expected ${g}`), P.length = 0;
                    var Fe;
                    E.length = 1, E[0] = l;
                    for(var N = 0; N < g; ++N)_[N] = t[N + 2].toWireType(P, F[N]), E.push(_[N]);
                    var ce = o(...E);
                    function Oe(_e) {
                        if (p) Pe(P);
                        else for(var te = 2; te < t.length; te++){
                            var cn = te === 1 ? Fe : _[te - 2];
                            t[te].destructorFunction !== null && t[te].destructorFunction(cn);
                        }
                        if (v) return t[0].fromWireType(_e);
                    }
                    return Oe(ce);
                };
                return Me(e, x);
            }
            var ir = (e, t, a)=>{
                if (e[t].overloadTable === void 0) {
                    var o = e[t];
                    e[t] = function(...l) {
                        return e[t].overloadTable.hasOwnProperty(l.length) || W(`Function '${a}' called with an invalid number of arguments (${l.length}) - expects one of (${e[t].overloadTable})!`), e[t].overloadTable[l.length].apply(this, l);
                    }, e[t].overloadTable = [], e[t].overloadTable[o.argCount] = o;
                }
            }, ar = (e, t, a)=>{
                i.hasOwnProperty(e) ? ((a === void 0 || i[e].overloadTable !== void 0 && i[e].overloadTable[a] !== void 0) && W(`Cannot register public name '${e}' twice`), ir(i, e, e), i.hasOwnProperty(a) && W(`Cannot register multiple overloads of a function with the same number of arguments (${a})!`), i[e].overloadTable[a] = t) : (i[e] = t, a !== void 0 && (i[e].numArguments = a));
            }, or = (e, t)=>{
                for(var a = [], o = 0; o < e; o++)a.push(T[t + o * 4 >> 2]);
                return a;
            }, sr = (e, t, a)=>{
                i.hasOwnProperty(e) || it("Replacing nonexistent public symbol"), i[e].overloadTable !== void 0 && a !== void 0 ? i[e].overloadTable[a] = t : (i[e] = t, i[e].argCount = a);
            }, lr = (e, t, a)=>{
                e = e.replace(/p/g, "i");
                var o = i["dynCall_" + e];
                return o(t, ...a);
            }, we = [], lt, ct = (e)=>{
                var t = we[e];
                return t || (e >= we.length && (we.length = e + 1), we[e] = t = lt.get(e)), t;
            }, cr = (e, t, a = [])=>{
                if (e.includes("j")) return lr(e, t, a);
                var o = ct(t)(...a);
                return o;
            }, ur = (e, t)=>(...a)=>cr(e, t, a), se = (e, t)=>{
                e = M(e);
                function a() {
                    return e.includes("j") ? ur(e, t) : ct(t);
                }
                var o = a();
                return typeof o != "function" && W(`unknown function pointer with signature ${e}: ${t}`), o;
            }, fr = (e, t)=>{
                var a = Me(t, function(o) {
                    this.name = t, this.message = o;
                    var l = new Error(o).stack;
                    l !== void 0 && (this.stack = this.toString() + `
` + l.replace(/^Error(:[^\n]*)?\n/, ""));
                });
                return a.prototype = Object.create(e.prototype), a.prototype.constructor = a, a.prototype.toString = function() {
                    return this.message === void 0 ? this.name : `${this.name}: ${this.message}`;
                }, a;
            }, ut, ft = (e)=>{
                var t = vt(e), a = M(t);
                return z(t), a;
            }, dr = (e, t)=>{
                var a = [], o = {};
                function l(f) {
                    if (!o[f] && !Q[f]) {
                        if (be[f]) {
                            be[f].forEach(l);
                            return;
                        }
                        a.push(f), o[f] = !0;
                    }
                }
                throw t.forEach(l), new ut(`${e}: ` + a.map(ft).join([
                    ", "
                ]));
            }, pr = (e)=>{
                e = e.trim();
                const t = e.indexOf("(");
                return t !== -1 ? e.substr(0, t) : e;
            }, vr = (e, t, a, o, l, f, h)=>{
                var p = or(t, a);
                e = M(e), e = pr(e), l = se(o, l), ar(e, function() {
                    dr(`Cannot call ${e} due to unbound types`, p);
                }, t - 1), at([], p, (v)=>{
                    var g = [
                        v[0],
                        null
                    ].concat(v.slice(1));
                    return sr(e, nr(e, g, null, l, f), t - 1), [];
                });
            }, hr = (e, t, a)=>{
                switch(t){
                    case 1:
                        return a ? (o)=>j[o] : (o)=>S[o];
                    case 2:
                        return a ? (o)=>ie[o >> 1] : (o)=>Ce[o >> 1];
                    case 4:
                        return a ? (o)=>ae[o >> 2] : (o)=>T[o >> 2];
                    default:
                        throw new TypeError(`invalid integer width (${t}): ${e}`);
                }
            }, gr = (e, t, a, o, l)=>{
                t = M(t);
                var f = (_)=>_;
                if (o === 0) {
                    var h = 32 - 8 * a;
                    f = (_)=>_ << h >>> h;
                }
                var p = t.includes("unsigned"), v = (_, E)=>{}, g;
                p ? g = function(_, E) {
                    return v(E, this.name), E >>> 0;
                } : g = function(_, E) {
                    return v(E, this.name), E;
                }, D(e, {
                    name: t,
                    fromWireType: f,
                    toWireType: g,
                    argPackAdvance: V,
                    readValueFromPointer: hr(t, a, o !== 0),
                    destructorFunction: null
                });
            }, mr = (e, t, a)=>{
                var o = [
                    Int8Array,
                    Uint8Array,
                    Int16Array,
                    Uint16Array,
                    Int32Array,
                    Uint32Array,
                    Float32Array,
                    Float64Array
                ], l = o[t];
                function f(h) {
                    var p = T[h >> 2], v = T[h + 4 >> 2];
                    return new l(j.buffer, v, p);
                }
                a = M(a), D(e, {
                    name: a,
                    fromWireType: f,
                    argPackAdvance: V,
                    readValueFromPointer: f
                }, {
                    ignoreDuplicateRegistrations: !0
                });
            }, br = (e, t, a, o)=>{
                if (!(o > 0)) return 0;
                for(var l = a, f = a + o - 1, h = 0; h < e.length; ++h){
                    var p = e.charCodeAt(h);
                    if (p >= 55296 && p <= 57343) {
                        var v = e.charCodeAt(++h);
                        p = 65536 + ((p & 1023) << 10) | v & 1023;
                    }
                    if (p <= 127) {
                        if (a >= f) break;
                        t[a++] = p;
                    } else if (p <= 2047) {
                        if (a + 1 >= f) break;
                        t[a++] = 192 | p >> 6, t[a++] = 128 | p & 63;
                    } else if (p <= 65535) {
                        if (a + 2 >= f) break;
                        t[a++] = 224 | p >> 12, t[a++] = 128 | p >> 6 & 63, t[a++] = 128 | p & 63;
                    } else {
                        if (a + 3 >= f) break;
                        t[a++] = 240 | p >> 18, t[a++] = 128 | p >> 12 & 63, t[a++] = 128 | p >> 6 & 63, t[a++] = 128 | p & 63;
                    }
                }
                return t[a] = 0, a - l;
            }, wr = (e, t, a)=>br(e, S, t, a), yr = (e)=>{
                for(var t = 0, a = 0; a < e.length; ++a){
                    var o = e.charCodeAt(a);
                    o <= 127 ? t++ : o <= 2047 ? t += 2 : o >= 55296 && o <= 57343 ? (t += 4, ++a) : t += 3;
                }
                return t;
            }, dt = (e, t, a)=>{
                for(var o = t + a, l = ""; !(t >= o);){
                    var f = e[t++];
                    if (!f) return l;
                    if (!(f & 128)) {
                        l += String.fromCharCode(f);
                        continue;
                    }
                    var h = e[t++] & 63;
                    if ((f & 224) == 192) {
                        l += String.fromCharCode((f & 31) << 6 | h);
                        continue;
                    }
                    var p = e[t++] & 63;
                    if ((f & 240) == 224 ? f = (f & 15) << 12 | h << 6 | p : f = (f & 7) << 18 | h << 12 | p << 6 | e[t++] & 63, f < 65536) l += String.fromCharCode(f);
                    else {
                        var v = f - 65536;
                        l += String.fromCharCode(55296 | v >> 10, 56320 | v & 1023);
                    }
                }
                return l;
            }, _r = (e, t)=>e ? dt(S, e, t) : "", $r = (e, t)=>{
                t = M(t);
                var a = t === "std::string";
                D(e, {
                    name: t,
                    fromWireType (o) {
                        var l = T[o >> 2], f = o + 4, h;
                        if (a) for(var p = f, v = 0; v <= l; ++v){
                            var g = f + v;
                            if (v == l || S[g] == 0) {
                                var _ = g - p, E = _r(p, _);
                                h === void 0 ? h = E : (h += "\0", h += E), p = g + 1;
                            }
                        }
                        else {
                            for(var P = new Array(l), v = 0; v < l; ++v)P[v] = String.fromCharCode(S[f + v]);
                            h = P.join("");
                        }
                        return z(o), h;
                    },
                    toWireType (o, l) {
                        l instanceof ArrayBuffer && (l = new Uint8Array(l));
                        var f, h = typeof l == "string";
                        h || l instanceof Uint8Array || l instanceof Uint8ClampedArray || l instanceof Int8Array || W("Cannot pass non-string to std::string"), a && h ? f = yr(l) : f = l.length;
                        var p = Le(4 + f + 1), v = p + 4;
                        if (T[p >> 2] = f, a && h) wr(l, v, f + 1);
                        else if (h) for(var g = 0; g < f; ++g){
                            var _ = l.charCodeAt(g);
                            _ > 255 && (z(v), W("String has UTF-16 code units that do not fit in 8 bits")), S[v + g] = _;
                        }
                        else for(var g = 0; g < f; ++g)S[v + g] = l[g];
                        return o !== null && o.push(z, p), p;
                    },
                    argPackAdvance: V,
                    readValueFromPointer: me,
                    destructorFunction (o) {
                        z(o);
                    }
                });
            }, Er = (e, t)=>{
                for(var a = "", o = 0; !(o >= t / 2); ++o){
                    var l = ie[e + o * 2 >> 1];
                    if (l == 0) break;
                    a += String.fromCharCode(l);
                }
                return a;
            }, Ar = (e, t, a)=>{
                if (a ??= 2147483647, a < 2) return 0;
                a -= 2;
                for(var o = t, l = a < e.length * 2 ? a / 2 : e.length, f = 0; f < l; ++f){
                    var h = e.charCodeAt(f);
                    ie[t >> 1] = h, t += 2;
                }
                return ie[t >> 1] = 0, t - o;
            }, Tr = (e)=>e.length * 2, Rr = (e, t)=>{
                for(var a = 0, o = ""; !(a >= t / 4);){
                    var l = ae[e + a * 4 >> 2];
                    if (l == 0) break;
                    if (++a, l >= 65536) {
                        var f = l - 65536;
                        o += String.fromCharCode(55296 | f >> 10, 56320 | f & 1023);
                    } else o += String.fromCharCode(l);
                }
                return o;
            }, Ur = (e, t, a)=>{
                if (a ??= 2147483647, a < 4) return 0;
                for(var o = t, l = o + a - 4, f = 0; f < e.length; ++f){
                    var h = e.charCodeAt(f);
                    if (h >= 55296 && h <= 57343) {
                        var p = e.charCodeAt(++f);
                        h = 65536 + ((h & 1023) << 10) | p & 1023;
                    }
                    if (ae[t >> 2] = h, t += 4, t + 4 > l) break;
                }
                return ae[t >> 2] = 0, t - o;
            }, Cr = (e)=>{
                for(var t = 0, a = 0; a < e.length; ++a){
                    var o = e.charCodeAt(a);
                    o >= 55296 && o <= 57343 && ++a, t += 4;
                }
                return t;
            }, kr = (e, t, a)=>{
                a = M(a);
                var o, l, f, h;
                t === 2 ? (o = Er, l = Ar, h = Tr, f = (p)=>Ce[p >> 1]) : t === 4 && (o = Rr, l = Ur, h = Cr, f = (p)=>T[p >> 2]), D(e, {
                    name: a,
                    fromWireType: (p)=>{
                        for(var v = T[p >> 2], g, _ = p + 4, E = 0; E <= v; ++E){
                            var P = p + 4 + E * t;
                            if (E == v || f(P) == 0) {
                                var x = P - _, F = o(_, x);
                                g === void 0 ? g = F : (g += "\0", g += F), _ = P + t;
                            }
                        }
                        return z(p), g;
                    },
                    toWireType: (p, v)=>{
                        typeof v != "string" && W(`Cannot pass non-string to C++ string type ${a}`);
                        var g = h(v), _ = Le(4 + g + t);
                        return T[_ >> 2] = g / t, l(v, _ + 4, g + t), p !== null && p.push(z, _), _;
                    },
                    argPackAdvance: V,
                    readValueFromPointer: me,
                    destructorFunction (p) {
                        z(p);
                    }
                });
            }, Pr = (e, t, a, o, l, f)=>{
                ge[e] = {
                    name: M(t),
                    rawConstructor: se(a, o),
                    rawDestructor: se(l, f),
                    fields: []
                };
            }, Sr = (e, t, a, o, l, f, h, p, v, g)=>{
                ge[e].fields.push({
                    fieldName: M(t),
                    getterReturnType: a,
                    getter: se(o, l),
                    getterContext: f,
                    setterArgumentType: h,
                    setter: se(p, v),
                    setterContext: g
                });
            }, Ir = (e, t)=>{
                t = M(t), D(e, {
                    isVoid: !0,
                    name: t,
                    argPackAdvance: 0,
                    fromWireType: ()=>{},
                    toWireType: (a, o)=>{}
                });
            }, Mr = (e, t, a)=>S.copyWithin(e, t, t + a), We = [], Wr = (e, t, a, o)=>(e = We[e], t = J.toValue(t), e(null, t, a, o)), xr = {}, Lr = (e)=>{
                var t = xr[e];
                return t === void 0 ? M(e) : t;
            }, pt = ()=>{
                if (typeof globalThis == "object") return globalThis;
                function e(t) {
                    t.$$$embind_global$$$ = t;
                    var a = typeof $$$embind_global$$$ == "object" && t.$$$embind_global$$$ == t;
                    return a || delete t.$$$embind_global$$$, a;
                }
                if (typeof $$$embind_global$$$ == "object" || (typeof global == "object" && e(global) ? $$$embind_global$$$ = global : typeof self == "object" && e(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")) return $$$embind_global$$$;
                throw Error("unable to get global object.");
            }, Fr = (e)=>e === 0 ? J.toHandle(pt()) : (e = Lr(e), J.toHandle(pt()[e])), Or = (e)=>{
                var t = We.length;
                return We.push(e), t;
            }, jr = (e, t)=>{
                var a = Q[e];
                return a === void 0 && W(`${t} has unknown type ${ft(e)}`), a;
            }, Dr = (e, t)=>{
                for(var a = new Array(e), o = 0; o < e; ++o)a[o] = jr(T[t + o * 4 >> 2], "parameter " + o);
                return a;
            }, zr = Reflect.construct, Br = (e, t, a)=>{
                var o = [], l = e.toWireType(o, a);
                return o.length && (T[t >> 2] = J.toHandle(o)), l;
            }, Hr = (e, t, a)=>{
                var o = Dr(e, t), l = o.shift();
                e--;
                var f = new Array(e), h = (v, g, _, E)=>{
                    for(var P = 0, x = 0; x < e; ++x)f[x] = o[x].readValueFromPointer(E + P), P += o[x].argPackAdvance;
                    var F = a === 1 ? zr(g, f) : g.apply(v, f);
                    return Br(l, _, F);
                }, p = `methodCaller<(${o.map((v)=>v.name).join(", ")}) => ${l.name}>`;
                return Or(Me(p, h));
            }, Vr = (e)=>{
                var t = J.toValue(e);
                Pe(t), Ie(e);
            }, qr = ()=>{
                Ke("");
            }, Nr = ()=>2147483648, Gr = (e)=>{
                var t = he.buffer, a = (e - t.byteLength + 65535) / 65536;
                try {
                    return he.grow(a), Xe(), 1;
                } catch  {}
            }, Xr = (e)=>{
                var t = S.length;
                e >>>= 0;
                var a = Nr();
                if (e > a) return !1;
                for(var o = (v, g)=>v + (g - v % g) % g, l = 1; l <= 4; l *= 2){
                    var f = t * (1 + .2 / l);
                    f = Math.min(f, e + 100663296);
                    var h = Math.min(a, o(Math.max(e, f), 65536)), p = Gr(h);
                    if (p) return !0;
                }
                return !1;
            }, xe = {}, Yr = ()=>A || "./this.program", le = ()=>{
                if (!le.strings) {
                    var e = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", t = {
                        USER: "web_user",
                        LOGNAME: "web_user",
                        PATH: "/",
                        PWD: "/",
                        HOME: "/home/web_user",
                        LANG: e,
                        _: Yr()
                    };
                    for(var a in xe)xe[a] === void 0 ? delete t[a] : t[a] = xe[a];
                    var o = [];
                    for(var a in t)o.push(`${a}=${t[a]}`);
                    le.strings = o;
                }
                return le.strings;
            }, Qr = (e, t)=>{
                for(var a = 0; a < e.length; ++a)j[t++] = e.charCodeAt(a);
                j[t] = 0;
            }, Jr = (e, t)=>{
                var a = 0;
                return le().forEach((o, l)=>{
                    var f = t + a;
                    T[e + l * 4 >> 2] = f, Qr(o, f), a += o.length + 1;
                }), 0;
            }, Kr = (e, t)=>{
                var a = le();
                T[e >> 2] = a.length;
                var o = 0;
                return a.forEach((l)=>o += l.length + 1), T[t >> 2] = o, 0;
            }, Zr = (e)=>{
                R(e, new Bt(e));
            }, en = (e, t)=>{
                Zr(e);
            }, tn = en, rn = (e)=>52;
            function nn(e, t, a, o, l) {
                return 70;
            }
            var an = [
                null,
                [],
                []
            ], on = (e, t)=>{
                var a = an[e];
                t === 0 || t === 10 ? ((e === 1 ? Ue : H)(dt(a, 0)), a.length = 0) : a.push(t);
            }, sn = (e, t, a, o)=>{
                for(var l = 0, f = 0; f < a; f++){
                    var h = T[t >> 2], p = T[t + 4 >> 2];
                    t += 8;
                    for(var v = 0; v < p; v++)on(e, S[h + v]);
                    l += p;
                }
                return T[o >> 2] = l, 0;
            };
            nt = i.InternalError = class extends Error {
                constructor(t){
                    super(t), this.name = "InternalError";
                }
            }, Gt(), st = i.BindingError = class extends Error {
                constructor(t){
                    super(t), this.name = "BindingError";
                }
            }, Jt(), ut = i.UnboundTypeError = fr(Error, "UnboundTypeError");
            var ln = {
                j: Vt,
                k: qt,
                n: Nt,
                h: Yt,
                z: Zt,
                f: tr,
                e: vr,
                c: gr,
                a: mr,
                g: $r,
                d: kr,
                l: Pr,
                b: Sr,
                i: Ir,
                s: Mr,
                y: Wr,
                u: Ie,
                A: Fr,
                x: Hr,
                w: Vr,
                o: qr,
                p: Xr,
                q: Jr,
                r: Kr,
                B: tn,
                t: rn,
                m: nn,
                v: sn
            }, L = zt(), vt = (e)=>(vt = L.E)(e), Le = (e)=>(Le = L.F)(e), z = (e)=>(z = L.G)(e), ht = (e)=>(ht = L.I)(e);
            i.dynCall_jiji = (e, t, a, o, l)=>(i.dynCall_jiji = L.J)(e, t, a, o, l);
            var ye;
            oe = function e() {
                ye || gt(), ye || (oe = e);
            };
            function gt() {
                if (X > 0 || (Pt(), X > 0)) return;
                function e() {
                    ye || (ye = !0, i.calledRun = !0, !qe && (St(), s(i), i.onRuntimeInitialized && i.onRuntimeInitialized(), It()));
                }
                i.setStatus ? (i.setStatus("Running..."), setTimeout(function() {
                    setTimeout(function() {
                        i.setStatus("");
                    }, 1), e();
                }, 1)) : e();
            }
            if (i.preInit) for(typeof i.preInit == "function" && (i.preInit = [
                i.preInit
            ]); i.preInit.length > 0;)i.preInit.pop()();
            return gt(), d;
        };
    })();
    const fn = {
        quality: 75,
        baseline: !1,
        arithmetic: !1,
        progressive: !0,
        optimize_coding: !0,
        smoothing: 0,
        color_space: 3,
        quant_table: 3,
        trellis_multipass: !1,
        trellis_opt_zero: !1,
        trellis_opt_table: !1,
        trellis_loops: 1,
        auto_subsample: !0,
        chroma_subsample: 2,
        separate_chroma_quality: !1,
        chroma_quality: 75
    };
    function dn(r, n, i = {}) {
        let s;
        return n && (s = (c, d)=>{
            const m = new WebAssembly.Instance(n, c);
            return d(m), m.exports;
        }), r({
            noInitialRun: !0,
            instantiateWasm: s,
            ...i
        });
    }
    let ze;
    async function pn(r, n) {
        let i = r, s = n;
        arguments.length === 1 && !(r instanceof WebAssembly.Module) && (i = void 0, s = r), ze = dn(un, i, s);
    }
    async function vn(r, n = {}) {
        ze || pn();
        const i = await ze, s = {
            ...fn,
            ...n
        };
        return i.encode(r.data, r.width, r.height, s).buffer;
    }
    const hn = "modulepreload", gn = function(r, n) {
        return new URL(r, n).href;
    }, mt = {}, Ae = function(n, i, s) {
        let c = Promise.resolve();
        if (i && i.length > 0) {
            const m = document.getElementsByTagName("link"), b = document.querySelector("meta[property=csp-nonce]"), $ = b?.nonce || b?.getAttribute("nonce");
            c = Promise.allSettled(i.map((w)=>{
                if (w = gn(w, s), w in mt) return;
                mt[w] = !0;
                const A = w.endsWith(".css"), R = A ? '[rel="stylesheet"]' : "";
                if (!!s) for(let k = m.length - 1; k >= 0; k--){
                    const O = m[k];
                    if (O.href === w && (!A || O.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${w}"]${R}`)) return;
                const C = document.createElement("link");
                if (C.rel = A ? "stylesheet" : hn, A || (C.as = "script"), C.crossOrigin = "", C.href = w, $ && C.setAttribute("nonce", $), document.head.appendChild(C), A) return new Promise((k, O)=>{
                    C.addEventListener("load", k), C.addEventListener("error", ()=>O(new Error(`Unable to preload CSS for ${w}`)));
                });
            }));
        }
        function d(m) {
            const b = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (b.payload = m, window.dispatchEvent(b), !b.defaultPrevented) throw m;
        }
        return c.then((m)=>{
            for (const b of m || [])b.status === "rejected" && d(b.reason);
            return n().catch(d);
        });
    }, mn = {
        quality: 75,
        target_size: 0,
        target_PSNR: 0,
        method: 4,
        sns_strength: 50,
        filter_strength: 60,
        filter_sharpness: 0,
        filter_type: 1,
        partitions: 0,
        segments: 4,
        pass: 1,
        show_compressed: 0,
        preprocessing: 0,
        autofilter: 0,
        partition_limit: 0,
        alpha_compression: 1,
        alpha_filtering: 1,
        alpha_quality: 100,
        lossless: 0,
        exact: 0,
        image_hint: 0,
        emulate_jpeg_size: 0,
        thread_level: 0,
        low_memory: 0,
        near_lossless: 100,
        use_delta_palette: 0,
        use_sharp_yuv: 0
    };
    function bt(r, n, i = {}) {
        let s;
        return n && (s = (c, d)=>{
            const m = new WebAssembly.Instance(n, c);
            return d(m), m.exports;
        }), r({
            noInitialRun: !0,
            instantiateWasm: s,
            ...i
        });
    }
    const bn = async ()=>WebAssembly.validate(new Uint8Array([
            0,
            97,
            115,
            109,
            1,
            0,
            0,
            0,
            1,
            5,
            1,
            96,
            0,
            1,
            123,
            3,
            2,
            1,
            0,
            10,
            10,
            1,
            8,
            0,
            65,
            0,
            253,
            15,
            253,
            98,
            11
        ])), wn = ()=>(async (r)=>{
            try {
                return typeof MessageChannel < "u" && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(r);
            } catch  {
                return !1;
            }
        })(new Uint8Array([
            0,
            97,
            115,
            109,
            1,
            0,
            0,
            0,
            1,
            4,
            1,
            96,
            0,
            0,
            3,
            2,
            1,
            0,
            5,
            4,
            1,
            3,
            1,
            1,
            10,
            11,
            1,
            9,
            0,
            65,
            0,
            254,
            16,
            2,
            0,
            26,
            11
        ]));
    let K;
    async function yn(r, n) {
        let i = r, s = n;
        if (arguments.length === 1 && !(r instanceof WebAssembly.Module) && (i = void 0, s = r), await bn()) {
            const d = await Ae(()=>import("./webp_enc_simd-C9n_RhDd.js"), [], import.meta.url);
            return K = bt(d.default, i, s), K;
        }
        const c = await Ae(()=>import("./webp_enc-f1AUqwAK.js"), [], import.meta.url);
        return K = bt(c.default, i, s), K;
    }
    async function wt(r, n = {}) {
        K || (K = yn());
        const i = {
            ...mn,
            ...n
        }, c = (await K).encode(r.data, r.width, r.height, i);
        if (!c) throw new Error("Encoding error.");
        return c.buffer;
    }
    let I;
    const B = new Array(128).fill(void 0);
    B.push(void 0, null, !0, !1);
    let ve = B.length;
    function $e(r) {
        ve === B.length && B.push(B.length + 1);
        const n = ve;
        return ve = B[n], B[n] = r, n;
    }
    function Be(r) {
        return B[r];
    }
    function _n(r) {
        r < 132 || (B[r] = ve, ve = r);
    }
    function $n(r) {
        const n = Be(r);
        return _n(r), n;
    }
    const $t = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    }) : {
        decode: ()=>{
            throw Error("TextDecoder not available");
        }
    };
    typeof TextDecoder < "u" && $t.decode();
    let fe = null;
    function Ve() {
        return (fe === null || fe.byteLength === 0) && (fe = new Uint8Array(I.memory.buffer)), fe;
    }
    function En(r, n) {
        return r = r >>> 0, $t.decode(Ve().subarray(r, r + n));
    }
    let de = null;
    function An() {
        return (de === null || de.byteLength === 0) && (de = new Uint8ClampedArray(I.memory.buffer)), de;
    }
    function Tn(r, n) {
        return r = r >>> 0, An().subarray(r / 1, r / 1 + n);
    }
    let Et = 0;
    function Rn(r, n) {
        const i = n(r.length * 1, 1) >>> 0;
        return Ve().set(r, i / 1), Et = r.length, i;
    }
    let pe = null;
    function yt() {
        return (pe === null || pe.byteLength === 0) && (pe = new Int32Array(I.memory.buffer)), pe;
    }
    function Un(r, n) {
        return r = r >>> 0, Ve().subarray(r / 1, r / 1 + n);
    }
    function Cn(r, n, i, s) {
        try {
            const b = I.__wbindgen_add_to_stack_pointer(-16), $ = Rn(r, I.__wbindgen_malloc), w = Et;
            I.encode(b, $, w, n, i, s);
            var c = yt()[b / 4 + 0], d = yt()[b / 4 + 1], m = Un(c, d).slice();
            return I.__wbindgen_free(c, d * 1, 1), m;
        } finally{
            I.__wbindgen_add_to_stack_pointer(16);
        }
    }
    async function kn(r, n) {
        if (typeof Response == "function" && r instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming == "function") try {
                return await WebAssembly.instantiateStreaming(r, n);
            } catch (s) {
                if (r.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", s);
                else throw s;
            }
            const i = await r.arrayBuffer();
            return await WebAssembly.instantiate(i, n);
        } else {
            const i = await WebAssembly.instantiate(r, n);
            return i instanceof WebAssembly.Instance ? {
                instance: i,
                module: r
            } : i;
        }
    }
    function Pn() {
        const r = {};
        return r.wbg = {}, r.wbg.__wbindgen_memory = function() {
            const n = I.memory;
            return $e(n);
        }, r.wbg.__wbg_buffer_a448f833075b71ba = function(n) {
            const i = Be(n).buffer;
            return $e(i);
        }, r.wbg.__wbg_newwithbyteoffsetandlength_099217381c451830 = function(n, i, s) {
            const c = new Uint16Array(Be(n), i >>> 0, s >>> 0);
            return $e(c);
        }, r.wbg.__wbindgen_object_drop_ref = function(n) {
            $n(n);
        }, r.wbg.__wbg_newwithownedu8clampedarrayandsh_91db5987993a08fb = function(n, i, s, c) {
            var d = Tn(n, i).slice();
            I.__wbindgen_free(n, i * 1, 1);
            const m = new ImageData(d, s >>> 0, c >>> 0);
            return $e(m);
        }, r.wbg.__wbindgen_throw = function(n, i) {
            throw new Error(En(n, i));
        }, r;
    }
    function Sn(r, n) {
        return I = r.exports, At.__wbindgen_wasm_module = n, pe = null, fe = null, de = null, I;
    }
    async function At(r) {
        if (I !== void 0) return I;
        typeof r > "u" && (r = new URL("" + new URL("squoosh_png_bg-DAY7U9NW.wasm", import.meta.url).href, import.meta.url));
        const n = Pn();
        (typeof r == "string" || typeof Request == "function" && r instanceof Request || typeof URL == "function" && r instanceof URL) && (r = fetch(r));
        const { instance: i, module: s } = await kn(await r, n);
        return Sn(i, s);
    }
    const In = globalThis.ServiceWorkerGlobalScope !== void 0, Mn = In && typeof self < "u" && globalThis.caches && globalThis.caches.default !== void 0, Wn = typeof process == "object" && process.release && process.release.name === "node";
    (Mn || Wn) && (globalThis.ImageData || (globalThis.ImageData = class {
        constructor(n, i, s){
            this.data = n, this.width = i, this.height = s;
        }
    }), import.meta.url === void 0 && (import.meta.url = "https://localhost"), typeof self < "u" && self.location === void 0 && (self.location = {
        href: ""
    }));
    let je;
    async function xn(r) {
        return je || (je = At(r)), je;
    }
    async function Ln(r, n = {}) {
        var i;
        await xn();
        const s = (i = n?.bitDepth) !== null && i !== void 0 ? i : 8;
        if (s !== 8 && s !== 16) throw new Error("Invalid bit depth. Must be either 8 or 16.");
        const c = r.data instanceof Uint16Array;
        if (c && s !== 16) throw new Error("Invalid bit depth, must be 16 for Uint16Array or manually convert to RGB8 values with Uint8Array.");
        if (!c && s === 16) throw new Error("Invalid bit depth, must be 8 for Uint8Array or manually convert to RGB16 values with Uint16Array.");
        const d = new Uint8Array(r.data.buffer), m = await Cn(d, r.width, r.height, s);
        if (!m) throw new Error("Encoding error.");
        return m.buffer;
    }
    const Fn = {
        level: 2,
        interlace: !1,
        optimiseAlpha: !1
    };
    async function On(r) {
        const { default: n, initThreadPool: i, optimise: s, optimise_raw: c } = await Ae(async ()=>{
            const { default: d, initThreadPool: m, optimise: b, optimise_raw: $ } = await import("./squoosh_oxipng-BOWiYjch.js");
            return {
                default: d,
                initThreadPool: m,
                optimise: b,
                optimise_raw: $
            };
        }, [], import.meta.url);
        return await n(r), await i(globalThis.navigator.hardwareConcurrency), {
            optimise: s,
            optimise_raw: c
        };
    }
    async function jn(r) {
        const { default: n, optimise: i, optimise_raw: s } = await Ae(async ()=>{
            const { default: c, optimise: d, optimise_raw: m } = await import("./squoosh_oxipng-yu2r7-gO.js");
            return {
                default: c,
                optimise: d,
                optimise_raw: m
            };
        }, [], import.meta.url);
        return await n(r), {
            optimise: i,
            optimise_raw: s
        };
    }
    let Ee;
    async function Dn(r) {
        var n;
        if (!Ee) {
            const i = ((n = globalThis.navigator) === null || n === void 0 ? void 0 : n.hardwareConcurrency) > 1;
            typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && i && await wn() ? Ee = On(r) : Ee = jn(r);
        }
        return Ee;
    }
    async function zn(r, n = {}) {
        const i = {
            ...Fn,
            ...n
        }, { optimise: s, optimise_raw: c } = await Dn();
        return r instanceof ImageData ? c(r.data, r.width, r.height, i.level, i.interlace, i.optimiseAlpha).buffer : s(new Uint8Array(r), i.level, i.interlace, i.optimiseAlpha).buffer;
    }
    function Bn(r, n, i) {
        const s = r.data;
        for(let c = 0; c < s.length; c += 4){
            const d = Math.max(s[c], s[c + 1], s[c + 2]);
            d <= n && (s[c + 3] = i > 0 ? Math.min(s[c + 3], Math.round(255 * Math.max(0, (d - n + i) / i))) : 0);
        }
        return r;
    }
    function Hn(r) {
        const n = r.data;
        for(let i = 0; i < n.length; i += 4){
            const s = n[i + 3] / 255;
            n[i] = Math.round(n[i] * s + 255 * (1 - s)), n[i + 1] = Math.round(n[i + 1] * s + 255 * (1 - s)), n[i + 2] = Math.round(n[i + 2] * s + 255 * (1 - s)), n[i + 3] = 255;
        }
        return r;
    }
    function Vn(r, n, i) {
        const { width: s, height: c, data: d } = r, m = Nn(d, n), b = new Uint8ClampedArray(d);
        for(let $ = 0; $ < c; $++)for(let w = 0; w < s; w++){
            const A = ($ * s + w) * 4;
            if (b[A + 3] === 0) continue;
            const R = b[A], U = b[A + 1], C = b[A + 2], [k, O, Z] = Gn(m, R, U, C);
            if (b[A] = k, b[A + 1] = O, b[A + 2] = Z, !i) continue;
            const Ue = R - k, H = U - O, G = C - Z;
            qn(b, s, c, w, $, Ue, H, G);
        }
        return new ImageData(b, s, c);
    }
    function qn(r, n, i, s, c, d, m, b) {
        const $ = [
            [
                s + 1,
                c,
                .4375
            ],
            [
                s - 1,
                c + 1,
                .1875
            ],
            [
                s,
                c + 1,
                .3125
            ],
            [
                s + 1,
                c + 1,
                .0625
            ]
        ];
        for (const [w, A, R] of $){
            if (w < 0 || w >= n || A >= i) continue;
            const U = (A * n + w) * 4;
            r[U] = De(r[U] + d * R), r[U + 1] = De(r[U + 1] + m * R), r[U + 2] = De(r[U + 2] + b * R);
        }
    }
    function De(r) {
        return Math.max(0, Math.min(255, Math.round(r)));
    }
    function Nn(r, n) {
        const i = [];
        for(let d = 0; d < r.length; d += 4)r[d + 3] < 128 || i.push([
            r[d],
            r[d + 1],
            r[d + 2]
        ]);
        if (i.length === 0) return [
            [
                0,
                0,
                0
            ]
        ];
        let c = [
            i.length > 5e4 ? i.filter((d, m)=>m % Math.ceil(i.length / 5e4) === 0) : i
        ];
        for(; c.length < n;){
            let d = -1, m = -1;
            for(let R = 0; R < c.length; R++){
                if (c[R].length < 2) continue;
                const U = _t(c[R]), C = Math.max(U[0], U[1], U[2]);
                C > m && (m = C, d = R);
            }
            if (d === -1) break;
            const b = c[d], $ = _t(b), w = $[0] >= $[1] && $[0] >= $[2] ? 0 : $[1] >= $[2] ? 1 : 2;
            b.sort((R, U)=>R[w] - U[w]);
            const A = Math.floor(b.length / 2);
            c.splice(d, 1, b.slice(0, A), b.slice(A));
        }
        return c.map((d)=>{
            let m = 0, b = 0, $ = 0;
            for (const A of d)m += A[0], b += A[1], $ += A[2];
            const w = d.length || 1;
            return [
                Math.round(m / w),
                Math.round(b / w),
                Math.round($ / w)
            ];
        });
    }
    function _t(r) {
        let n = 255, i = 0, s = 255, c = 0, d = 255, m = 0;
        for (const [b, $, w] of r)b < n && (n = b), b > i && (i = b), $ < s && (s = $), $ > c && (c = $), w < d && (d = w), w > m && (m = w);
        return [
            i - n,
            c - s,
            m - d
        ];
    }
    function Gn(r, n, i, s) {
        let c = r[0], d = 1 / 0;
        for (const m of r){
            const b = (m[0] - n) ** 2 + (m[1] - i) ** 2 + (m[2] - s) ** 2;
            b < d && (d = b, c = m);
        }
        return c;
    }
    function Xn(r) {
        return new Promise((n, i)=>{
            const s = new Image;
            s.onload = ()=>{
                const d = new OffscreenCanvas(s.naturalWidth, s.naturalHeight).getContext("2d");
                d.drawImage(s, 0, 0), n(d.getImageData(0, 0, s.naturalWidth, s.naturalHeight)), URL.revokeObjectURL(s.src);
            }, s.onerror = ()=>i(new Error("Failed to load image")), s.src = URL.createObjectURL(r);
        });
    }
    async function Yn(r, n) {
        const i = r.size;
        let s = await Xn(r);
        n.removeBlack && (s = Bn(s, n.threshold, n.feather));
        let c;
        switch(n.format){
            case "png":
                {
                    n.pngColors < 256 && (s = Vn(s, n.pngColors, n.pngDither));
                    const m = await Ln(s);
                    c = await zn(m, {
                        level: 3
                    });
                    break;
                }
            case "jpeg":
                {
                    n.removeBlack && (s = Hn(s)), c = await vn(s, {
                        quality: n.jpegQuality
                    });
                    break;
                }
            case "webp":
                {
                    n.webpLossless ? c = await wt(s, {
                        lossless: 1,
                        quality: 100
                    }) : c = await wt(s, {
                        quality: n.webpQuality
                    });
                    break;
                }
        }
        const d = new Blob([
            c
        ], {
            type: {
                png: "image/png",
                jpeg: "image/jpeg",
                webp: "image/webp"
            }[n.format]
        });
        return {
            url: URL.createObjectURL(d),
            inputSize: i,
            outputSize: d.size,
            width: s.width,
            height: s.height,
            format: n.format
        };
    }
    const u = {
        files: [],
        activeIndex: -1,
        format: "png",
        zoom: 1,
        panX: 0,
        panY: 0,
        isPanning: !1,
        panStart: {
            x: 0,
            y: 0
        },
        showCompare: !0,
        compareX: .5,
        imgW: 0,
        imgH: 0,
        debounce: null
    }, y = (r)=>document.querySelector(r), Tt = (r)=>document.querySelectorAll(r);
    function Te(r) {
        return r < 1024 ? r + " B" : r < 1048576 ? (r / 1024).toFixed(1) + " KB" : (r / 1048576).toFixed(2) + " MB";
    }
    function Qn() {
        return {
            format: u.format,
            removeBlack: y("#remove-black").checked,
            threshold: parseInt(y("#threshold").value),
            feather: parseInt(y("#feather").value),
            pngColors: parseInt(y("#png-colors").value),
            pngDither: y("#png-dither").checked,
            jpegQuality: parseInt(y("#jpeg-quality").value),
            webpLossless: y("#webp-lossless").checked,
            webpQuality: parseInt(y("#webp-quality").value)
        };
    }
    window.addFiles = ()=>y("#file-input").click();
    window.loadFiles = function(r) {
        for (const n of r)n.type.startsWith("image/") && u.files.push({
            file: n,
            name: n.name,
            inputSize: n.size,
            thumbUrl: URL.createObjectURL(n),
            resultUrl: null,
            outputSize: null,
            processing: !1,
            error: null,
            ver: 0
        });
        u.files.length > 0 && u.activeIndex === -1 && (u.activeIndex = 0), re(), Re(), Ct();
    };
    window.removeFile = function(r, n) {
        n.stopPropagation(), u.files[r].ver++, URL.revokeObjectURL(u.files[r].thumbUrl), u.files[r].resultUrl && URL.revokeObjectURL(u.files[r].resultUrl), u.files.splice(r, 1), u.files.length ? u.activeIndex >= u.files.length ? u.activeIndex = u.files.length - 1 : r < u.activeIndex ? u.activeIndex-- : r === u.activeIndex && (u.activeIndex = Math.min(u.activeIndex, u.files.length - 1)) : u.activeIndex = -1, re(), Re();
    };
    window.clearAllFiles = function() {
        u.files.forEach((r)=>{
            r.ver++, URL.revokeObjectURL(r.thumbUrl), r.resultUrl && URL.revokeObjectURL(r.resultUrl);
        }), u.files = [], u.activeIndex = -1, re(), Re();
    };
    window.selectFile = function(r) {
        u.activeIndex = r, u.compareX = .5, re(), Re();
    };
    function re() {
        const r = y("#file-list");
        r.innerHTML = u.files.map((n, i)=>{
            const s = [
                "file-item",
                i === u.activeIndex ? "active" : "",
                n.processing ? "processing" : "",
                n.error ? "error" : ""
            ].filter(Boolean).join(" ");
            let c = "";
            if (n.processing) c = '<div class="spinner"></div>';
            else if (n.error) c = '<span class="file-saved negative">err</span>';
            else if (n.outputSize != null) {
                const d = Math.round((1 - n.outputSize / n.inputSize) * 100);
                c = `<span class="file-saved ${d > 0 ? "positive" : d < 0 ? "negative" : ""}">${d > 0 ? "-" : d < 0 ? "+" : ""}${Math.abs(d)}%</span>`;
            }
            return `<div class="${s}" onclick="selectFile(${i})"><img class="file-thumb" src="${n.thumbUrl}"><div class="file-info"><div class="file-name">${n.name}</div><div class="file-meta">${Te(n.inputSize)}${n.outputSize != null ? " → " + Te(n.outputSize) : ""}</div></div>${c}<button class="file-remove" onclick="removeFile(${i},event)" title="Remove">×</button></div>`;
        }).join(""), y("#download-all-btn").style.display = u.files.some((n)=>n.resultUrl) ? "" : "none", y("#clear-all-btn").style.display = u.files.length ? "" : "none";
    }
    function Re() {
        const r = y("#main-area");
        if (!u.files.length) {
            r.innerHTML = '<div class="drop-zone" id="drop-zone"><p>Drop images here or click to browse</p><p>PNG, JPG, WebP, BMP, GIF</p></div>', kt();
            return;
        }
        const n = u.files[u.activeIndex];
        n && (r.innerHTML = `<div class="preview-area checker-bg" id="preview-area"><div class="preview-toolbar"><button onclick="toggleCompare()" id="compare-btn" title="Before / after" class="${u.showCompare ? "active" : ""}">&#9674;</button><div class="sep"></div><button onclick="zoomIn()" title="Zoom in">+</button><button onclick="zoomOut()" title="Zoom out">&minus;</button><button onclick="resetView()" title="Fit">&#8689;</button></div><div class="zoom-info" id="zoom-info">${Math.round(u.zoom * 100)}%</div><div class="canvas-wrap" id="canvas-wrap"></div></div><div class="stats-bar" id="stats-bar"></div>`, Rt(n), Jn(), He());
    }
    function Rt(r) {
        const n = new Image;
        n.onload = ()=>{
            u.imgW = n.naturalWidth, u.imgH = n.naturalHeight, Ut(r), resetView();
        }, n.src = r.resultUrl || r.thumbUrl;
    }
    function Ut(r) {
        const n = y("#canvas-wrap");
        if (!n || (r || (r = u.files[u.activeIndex]), !r)) return;
        const i = u.imgW, s = u.imgH;
        if (u.showCompare && r.resultUrl) {
            const c = Math.round(u.compareX * i);
            n.innerHTML = `<div class="compare-container" style="width:${i}px;height:${s}px;"><img src="${r.thumbUrl}" draggable="false" style="width:${i}px;height:${s}px;clip-path:inset(0 ${i - c}px 0 0);" id="img-before"><img src="${r.resultUrl}" draggable="false" style="width:${i}px;height:${s}px;clip-path:inset(0 0 0 ${c}px);" id="img-after"><div class="compare-label" style="left:8px;">before</div><div class="compare-label" style="right:8px;">after</div><div class="slider-divider" id="compare-slider" style="left:${c}px;"></div></div>`, Kn();
        } else n.innerHTML = `<img src="${r.resultUrl || r.thumbUrl}" draggable="false" style="width:${i}px;height:${s}px;">`;
        ne();
    }
    function ne() {
        const r = y("#canvas-wrap");
        if (!r) return;
        r.style.transform = `translate(${u.panX}px,${u.panY}px) scale(${u.zoom})`;
        const n = y("#zoom-info");
        n && (n.textContent = Math.round(u.zoom * 100) + "%");
    }
    window.resetView = function() {
        const r = y("#preview-area");
        if (!r || !u.imgW) return;
        const n = r.clientWidth, i = r.clientHeight, s = Math.min(n / u.imgW, i / u.imgH, 1) * .9;
        u.zoom = s, u.panX = (n - u.imgW * s) / 2, u.panY = (i - u.imgH * s) / 2, ne();
    };
    window.zoomIn = ()=>{
        u.zoom = Math.min(u.zoom * 1.3, 32), ne();
    };
    window.zoomOut = ()=>{
        u.zoom = Math.max(u.zoom / 1.3, .05), ne();
    };
    window.toggleCompare = ()=>{
        u.showCompare = !u.showCompare, u.compareX = .5, Ut();
        const r = y("#compare-btn");
        r && (r.className = u.showCompare ? "active" : "");
    };
    function Jn() {
        const r = y("#preview-area");
        r && (r.addEventListener("wheel", (n)=>{
            n.preventDefault();
            const i = r.getBoundingClientRect(), s = n.clientX - i.left, c = n.clientY - i.top, d = u.zoom;
            u.zoom = Math.min(Math.max(u.zoom * (n.deltaY < 0 ? 1.15 : 1 / 1.15), .05), 32), u.panX = s - (s - u.panX) * (u.zoom / d), u.panY = c - (c - u.panY) * (u.zoom / d), ne();
        }, {
            passive: !1
        }), r.addEventListener("mousedown", (n)=>{
            n.target.id === "compare-slider" || n.target.closest("#compare-slider") || (u.isPanning = !0, u.panStart = {
                x: n.clientX - u.panX,
                y: n.clientY - u.panY
            }, r.style.cursor = "grabbing");
        }));
    }
    window.addEventListener("mousemove", (r)=>{
        u.isPanning && (u.panX = r.clientX - u.panStart.x, u.panY = r.clientY - u.panStart.y, ne());
    });
    window.addEventListener("mouseup", ()=>{
        if (u.isPanning) {
            u.isPanning = !1;
            const r = y("#preview-area");
            r && (r.style.cursor = "");
        }
    });
    function Kn() {
        const r = y("#compare-slider");
        if (!r) return;
        let n = !1;
        r.addEventListener("mousedown", (s)=>{
            n = !0, s.preventDefault(), s.stopPropagation();
        });
        const i = (s)=>{
            if (!n) return;
            const c = document.querySelector("#canvas-wrap .compare-container");
            if (!c) return;
            const d = c.getBoundingClientRect(), m = Math.max(.01, Math.min(.99, (s.clientX - d.left) / d.width));
            u.compareX = m;
            const b = Math.round(m * u.imgW), $ = y("#img-before"), w = y("#img-after");
            $ && ($.style.clipPath = `inset(0 ${u.imgW - b}px 0 0)`), w && (w.style.clipPath = `inset(0 0 0 ${b}px)`), r.style.left = b + "px";
        };
        window.addEventListener("mousemove", i), window.addEventListener("mouseup", ()=>{
            n = !1;
        });
    }
    function He() {
        const r = y("#stats-bar"), n = u.files[u.activeIndex];
        if (!r) return;
        if (!n) {
            r.innerHTML = "";
            return;
        }
        let i = `<span><strong>${n.name}</strong></span><span>${(n.file.type.split("/")[1] || "").toUpperCase()}</span><span>In: ${Te(n.inputSize)}</span>`;
        if (n.outputSize != null) {
            i += `<span>Out: ${Te(n.outputSize)}</span>`;
            const s = Math.round((1 - n.outputSize / n.inputSize) * 100);
            s > 0 && (i += `<span style="color:var(--success);font-weight:600">-${s}%</span>`);
        }
        n.processing && (i += '<span style="color:var(--accent)">processing…</span>'), n.error && (i += `<span style="color:var(--danger)">${n.error}</span>`), n.resultUrl && (i += `<button class="btn btn-sm" style="margin-left:auto" onclick="downloadOne(${u.activeIndex})">Download</button>`), r.innerHTML = i;
    }
    async function Zn(r) {
        const n = u.files[r];
        if (!n || n.processing) return;
        n.processing = !0, n.error = null, n.ver++;
        const i = n.ver;
        re(), r === u.activeIndex && He();
        try {
            n.resultUrl && (URL.revokeObjectURL(n.resultUrl), n.resultUrl = null);
            const s = await Yn(n.file, Qn());
            if (n.ver !== i) return;
            n.resultUrl = s.url, n.outputSize = s.outputSize, n.processing = !1;
        } catch (s) {
            if (n.ver !== i) return;
            n.processing = !1, n.error = s.message, console.error("Process error:", s);
        }
        re(), r === u.activeIndex && (Rt(n), He());
    }
    function Ct() {
        u.files.forEach((r, n)=>Zn(n));
    }
    function ue() {
        clearTimeout(u.debounce), u.debounce = setTimeout(()=>{
            u.files.forEach((r)=>{
                r.resultUrl && URL.revokeObjectURL(r.resultUrl), r.resultUrl = null, r.outputSize = null;
            }), Ct();
        }, 400);
    }
    window.downloadOne = function(r) {
        const n = u.files[r];
        if (!n || !n.resultUrl) return;
        const i = {
            png: "png",
            jpeg: "jpg",
            webp: "webp"
        }[u.format] || "png", s = document.createElement("a");
        s.href = n.resultUrl, s.download = n.name.replace(/\.[^.]+$/, "") + "." + i, s.click();
    };
    window.downloadAll = function() {
        u.files.forEach((r, n)=>{
            r.resultUrl && setTimeout(()=>window.downloadOne(n), n * 200);
        });
    };
    function ei() {
        const r = u.format;
        Tt("#format-btns button").forEach((n)=>n.classList.toggle("active", n.dataset.fmt === r)), y("#png-settings").style.display = r === "png" ? "" : "none", y("#jpeg-settings").style.display = r === "jpeg" ? "" : "none", y("#webp-settings").style.display = r === "webp" ? "" : "none";
    }
    function kt() {
        const r = y("#drop-zone");
        r && (r.addEventListener("click", window.addFiles), r.addEventListener("dragover", (n)=>{
            n.preventDefault(), r.classList.add("over");
        }), r.addEventListener("dragleave", ()=>r.classList.remove("over")), r.addEventListener("drop", (n)=>{
            n.preventDefault(), r.classList.remove("over"), window.loadFiles(n.dataTransfer.files);
        }));
    }
    document.addEventListener("DOMContentLoaded", ()=>{
        kt(), document.addEventListener("dragover", (r)=>r.preventDefault()), document.addEventListener("drop", (r)=>{
            r.preventDefault(), r.dataTransfer.files.length && window.loadFiles(r.dataTransfer.files);
        }), y("#file-input").addEventListener("change", (r)=>{
            window.loadFiles(r.target.files), r.target.value = "";
        }), Tt("#format-btns button").forEach((r)=>{
            r.addEventListener("click", ()=>{
                u.format = r.dataset.fmt, ei(), ue();
            });
        }), y("#remove-black").addEventListener("change", ()=>{
            y("#black-settings").style.display = y("#remove-black").checked ? "" : "none", ue();
        }), [
            "threshold",
            "feather",
            "png-colors",
            "jpeg-quality",
            "webp-quality"
        ].forEach((r)=>{
            const n = y(`#${r}`), i = {
                threshold: "thresh-val",
                feather: "feather-val",
                "png-colors": "colors-val",
                "jpeg-quality": "jpeg-q-val",
                "webp-quality": "webp-q-val"
            }[r];
            n.addEventListener("input", ()=>{
                y(`#${i}`).textContent = n.value, ue();
            });
        }), [
            "png-dither",
            "jpeg-mozjpeg"
        ].forEach((r)=>{
            y(`#${r}`).addEventListener("change", ue);
        }), y("#webp-lossless").addEventListener("change", ()=>{
            y("#webp-q-row").style.display = y("#webp-lossless").checked ? "none" : "", ue();
        });
    });
})();
