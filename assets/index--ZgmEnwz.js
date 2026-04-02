(async ()=>{
    (function() {
        const d = document.createElement("link").relList;
        if (d && d.supports && d.supports("modulepreload")) return;
        for (const f of document.querySelectorAll('link[rel="modulepreload"]'))g(f);
        new MutationObserver((f)=>{
            for (const i of f)if (i.type === "childList") for (const s of i.addedNodes)s.tagName === "LINK" && s.rel === "modulepreload" && g(s);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function e(f) {
            const i = {};
            return f.integrity && (i.integrity = f.integrity), f.referrerPolicy && (i.referrerPolicy = f.referrerPolicy), f.crossOrigin === "use-credentials" ? i.credentials = "include" : f.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
        }
        function g(f) {
            if (f.ep) return;
            f.ep = !0;
            const i = e(f);
            fetch(f.href, i);
        }
    })();
    var vn = (()=>{
        var a = import.meta.url;
        return function(d = {}) {
            var e = d, g, f, i = new Promise((o, c)=>{
                g = o, f = c;
            });
            const n = globalThis.ServiceWorkerGlobalScope !== void 0 && typeof self < "u" && globalThis.caches && globalThis.caches.default !== void 0, h = typeof process == "object" && process.release && process.release.name === "node";
            (n || h) && (globalThis.ImageData || (globalThis.ImageData = class {
                constructor(c, C, O){
                    this.data = c, this.width = C, this.height = O;
                }
            }), import.meta.url === void 0 && (import.meta.url = "https://localhost"), typeof self < "u" && self.location === void 0 && (self.location = {
                href: ""
            }));
            var w = Object.assign({}, e), E = "./this.program", k = (o, c)=>{
                throw c;
            }, x = typeof window == "object", u = typeof importScripts == "function";
            typeof process == "object" && typeof process.versions == "object" && process.versions.node;
            var _ = "";
            function l(o) {
                return e.locateFile ? e.locateFile(o, _) : _ + o;
            }
            var v;
            (x || u) && (u ? _ = self.location.href : typeof document < "u" && document.currentScript && (_ = document.currentScript.src), a && (_ = a), _.startsWith("blob:") ? _ = "" : _ = _.substr(0, _.replace(/[?#].*/, "").lastIndexOf("/") + 1), u && (v = (o)=>{
                var c = new XMLHttpRequest;
                return c.open("GET", o, !1), c.responseType = "arraybuffer", c.send(null), new Uint8Array(c.response);
            }));
            var p = e.print || console.log.bind(console), y = e.printErr || console.error.bind(console);
            Object.assign(e, w), w = null, e.arguments && e.arguments, e.thisProgram && (E = e.thisProgram), e.quit && (k = e.quit);
            var S;
            e.wasmBinary && (S = e.wasmBinary);
            var T, I = !1, j, P, G, D, J, et, A, L;
            function r() {
                var o = T.buffer;
                e.HEAP8 = j = new Int8Array(o), e.HEAP16 = G = new Int16Array(o), e.HEAPU8 = P = new Uint8Array(o), e.HEAPU16 = D = new Uint16Array(o), e.HEAP32 = J = new Int32Array(o), e.HEAPU32 = et = new Uint32Array(o), e.HEAPF32 = A = new Float32Array(o), e.HEAPF64 = L = new Float64Array(o);
            }
            var M = [], ft = [], V = [];
            function dt() {
                if (e.preRun) for(typeof e.preRun == "function" && (e.preRun = [
                    e.preRun
                ]); e.preRun.length;)B(e.preRun.shift());
                m(M);
            }
            function X() {
                m(ft);
            }
            function ct() {
                if (e.postRun) for(typeof e.postRun == "function" && (e.postRun = [
                    e.postRun
                ]); e.postRun.length;)ut(e.postRun.shift());
                m(V);
            }
            function B(o) {
                M.unshift(o);
            }
            function U(o) {
                ft.unshift(o);
            }
            function ut(o) {
                V.unshift(o);
            }
            var rt = 0, Q = null;
            function wt(o) {
                rt++, e.monitorRunDependencies?.(rt);
            }
            function xt(o) {
                if (rt--, e.monitorRunDependencies?.(rt), rt == 0 && Q) {
                    var c = Q;
                    Q = null, c();
                }
            }
            function ht(o) {
                e.onAbort?.(o), o = "Aborted(" + o + ")", y(o), I = !0, o += ". Build with -sASSERTIONS for more info.";
                var c = new WebAssembly.RuntimeError(o);
                throw f(c), c;
            }
            var gt = "data:application/octet-stream;base64,", kt = (o)=>o.startsWith(gt), _t;
            e.locateFile ? (_t = "mozjpeg_enc.wasm", kt(_t) || (_t = l(_t))) : _t = new URL("" + new URL("mozjpeg_enc-DO-zoExo.wasm", import.meta.url).href, import.meta.url).href;
            function It(o) {
                if (o == _t && S) return new Uint8Array(S);
                if (v) return v(o);
                throw "both async and sync fetching of the wasm failed";
            }
            function Tt(o) {
                return !S && (x || u) && typeof fetch == "function" ? fetch(o, {
                    credentials: "same-origin"
                }).then((c)=>{
                    if (!c.ok) throw `failed to load wasm binary file at '${o}'`;
                    return c.arrayBuffer();
                }).catch(()=>It(o)) : Promise.resolve().then(()=>It(o));
            }
            function t(o, c, C) {
                return Tt(o).then((O)=>WebAssembly.instantiate(O, c)).then(C, (O)=>{
                    y(`failed to asynchronously prepare wasm: ${O}`), ht(O);
                });
            }
            function $(o, c, C, O) {
                return !o && typeof WebAssembly.instantiateStreaming == "function" && !kt(c) && typeof fetch == "function" ? fetch(c, {
                    credentials: "same-origin"
                }).then((N)=>{
                    var q = WebAssembly.instantiateStreaming(N, C);
                    return q.then(O, function(st) {
                        return y(`wasm streaming compile failed: ${st}`), y("falling back to ArrayBuffer instantiation"), t(c, C, O);
                    });
                }) : t(c, C, O);
            }
            function F() {
                var o = {
                    a: mn
                };
                function c(O, N) {
                    return Lt = O.exports, T = Lt.C, r(), Oe = Lt.H, U(Lt.D), xt(), Lt;
                }
                wt();
                function C(O) {
                    c(O.instance);
                }
                if (e.instantiateWasm) try {
                    return e.instantiateWasm(o, c);
                } catch (O) {
                    y(`Module.instantiateWasm callback failed with error: ${O}`), f(O);
                }
                return $(S, _t, o, C).catch(f), {};
            }
            function b(o) {
                this.name = "ExitStatus", this.message = `Program terminated with exit(${o})`, this.status = o;
            }
            var m = (o)=>{
                for(; o.length > 0;)o.shift()(e);
            };
            e.noExitRuntime;
            class z {
                constructor(c){
                    this.excPtr = c, this.ptr = c - 24;
                }
                set_type(c) {
                    et[this.ptr + 4 >> 2] = c;
                }
                get_type() {
                    return et[this.ptr + 4 >> 2];
                }
                set_destructor(c) {
                    et[this.ptr + 8 >> 2] = c;
                }
                get_destructor() {
                    return et[this.ptr + 8 >> 2];
                }
                set_caught(c) {
                    c = c ? 1 : 0, j[this.ptr + 12] = c;
                }
                get_caught() {
                    return j[this.ptr + 12] != 0;
                }
                set_rethrown(c) {
                    c = c ? 1 : 0, j[this.ptr + 13] = c;
                }
                get_rethrown() {
                    return j[this.ptr + 13] != 0;
                }
                init(c, C) {
                    this.set_adjusted_ptr(0), this.set_type(c), this.set_destructor(C);
                }
                set_adjusted_ptr(c) {
                    et[this.ptr + 16 >> 2] = c;
                }
                get_adjusted_ptr() {
                    return et[this.ptr + 16 >> 2];
                }
                get_exception_ptr() {
                    var c = We(this.get_type());
                    if (c) return et[this.excPtr >> 2];
                    var C = this.get_adjusted_ptr();
                    return C !== 0 ? C : this.excPtr;
                }
            }
            var H = 0, Z = (o, c, C)=>{
                var O = new z(o);
                throw O.init(c, C), H = o, H;
            }, R = {}, Y = (o)=>{
                for(; o.length;){
                    var c = o.pop(), C = o.pop();
                    C(c);
                }
            };
            function nt(o) {
                return this.fromWireType(et[o >> 2]);
            }
            var K = {}, ot = {}, vt = {}, pt, Ct = (o)=>{
                throw new pt(o);
            }, Nt = (o, c, C)=>{
                o.forEach(function(tt) {
                    vt[tt] = c;
                });
                function O(tt) {
                    var at = C(tt);
                    at.length !== o.length && Ct("Mismatched type converter count");
                    for(var lt = 0; lt < o.length; ++lt)Ft(o[lt], at[lt]);
                }
                var N = new Array(c.length), q = [], st = 0;
                c.forEach((tt, at)=>{
                    ot.hasOwnProperty(tt) ? N[at] = ot[tt] : (q.push(tt), K.hasOwnProperty(tt) || (K[tt] = []), K[tt].push(()=>{
                        N[at] = ot[tt], ++st, st === q.length && O(N);
                    }));
                }), q.length === 0 && O(N);
            }, Ot = (o)=>{
                var c = R[o];
                delete R[o];
                var C = c.rawConstructor, O = c.rawDestructor, N = c.fields, q = N.map((st)=>st.getterReturnType).concat(N.map((st)=>st.setterArgumentType));
                Nt([
                    o
                ], q, (st)=>{
                    var tt = {};
                    return N.forEach((at, lt)=>{
                        var mt = at.fieldName, bt = st[lt], St = at.getter, Pt = at.getterContext, Wt = st[lt + N.length], xe = at.setter, Ht = at.setterContext;
                        tt[mt] = {
                            read: (re)=>bt.fromWireType(St(Pt, re)),
                            write: (re, Ee)=>{
                                var ce = [];
                                xe(Ht, re, Wt.toWireType(ce, Ee)), Y(ce);
                            }
                        };
                    }), [
                        {
                            name: c.name,
                            fromWireType: (at)=>{
                                var lt = {};
                                for(var mt in tt)lt[mt] = tt[mt].read(at);
                                return O(at), lt;
                            },
                            toWireType: (at, lt)=>{
                                for(var mt in tt)if (!(mt in lt)) throw new TypeError(`Missing field: "${mt}"`);
                                var bt = C();
                                for(mt in tt)tt[mt].write(bt, lt[mt]);
                                return at !== null && at.push(O, bt), bt;
                            },
                            argPackAdvance: Dt,
                            readValueFromPointer: nt,
                            destructorFunction: O
                        }
                    ];
                });
            }, Zt = (o, c, C, O, N)=>{}, yt = ()=>{
                for(var o = new Array(256), c = 0; c < 256; ++c)o[c] = String.fromCharCode(c);
                Gt = o;
            }, Gt, Et = (o)=>{
                for(var c = "", C = o; P[C];)c += Gt[P[C++]];
                return c;
            }, Ut, At = (o)=>{
                throw new Ut(o);
            };
            function ve(o, c, C = {}) {
                var O = c.name;
                if (o || At(`type "${O}" must have a positive integer typeid pointer`), ot.hasOwnProperty(o)) {
                    if (C.ignoreDuplicateRegistrations) return;
                    At(`Cannot register type '${O}' twice`);
                }
                if (ot[o] = c, delete vt[o], K.hasOwnProperty(o)) {
                    var N = K[o];
                    delete K[o], N.forEach((q)=>q());
                }
            }
            function Ft(o, c, C = {}) {
                if (!("argPackAdvance" in c)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
                return ve(o, c, C);
            }
            var Dt = 8, oe = (o, c, C, O)=>{
                c = Et(c), Ft(o, {
                    name: c,
                    fromWireType: function(N) {
                        return !!N;
                    },
                    toWireType: function(N, q) {
                        return q ? C : O;
                    },
                    argPackAdvance: Dt,
                    readValueFromPointer: function(N) {
                        return this.fromWireType(P[N]);
                    },
                    destructorFunction: null
                });
            }, jt = [], Rt = [], _e = (o)=>{
                o > 9 && --Rt[o + 1] === 0 && (Rt[o] = void 0, jt.push(o));
            }, nr = ()=>Rt.length / 2 - 5 - jt.length, ir = ()=>{
                Rt.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1), e.count_emval_handles = nr;
            }, Vt = {
                toValue: (o)=>(o || At("Cannot use deleted val. handle = " + o), Rt[o]),
                toHandle: (o)=>{
                    switch(o){
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
                                const c = jt.pop() || Rt.length;
                                return Rt[c] = o, Rt[c + 1] = 1, c;
                            }
                    }
                }
            }, ar = {
                name: "emscripten::val",
                fromWireType: (o)=>{
                    var c = Vt.toValue(o);
                    return _e(o), c;
                },
                toWireType: (o, c)=>Vt.toHandle(c),
                argPackAdvance: Dt,
                readValueFromPointer: nt,
                destructorFunction: null
            }, sr = (o)=>Ft(o, ar), or = (o, c)=>{
                switch(c){
                    case 4:
                        return function(C) {
                            return this.fromWireType(A[C >> 2]);
                        };
                    case 8:
                        return function(C) {
                            return this.fromWireType(L[C >> 3]);
                        };
                    default:
                        throw new TypeError(`invalid float width (${c}): ${o}`);
                }
            }, lr = (o, c, C)=>{
                c = Et(c), Ft(o, {
                    name: c,
                    fromWireType: (O)=>O,
                    toWireType: (O, N)=>N,
                    argPackAdvance: Dt,
                    readValueFromPointer: or(c, C),
                    destructorFunction: null
                });
            }, be = (o, c)=>Object.defineProperty(c, "name", {
                    value: o
                });
            function ur(o) {
                for(var c = 1; c < o.length; ++c)if (o[c] !== null && o[c].destructorFunction === void 0) return !0;
                return !1;
            }
            function cr(o, c, C, O, N, q) {
                var st = c.length;
                st < 2 && At("argTypes array size mismatch! Must at least get return value and 'this' types!"), c[1];
                var tt = ur(c), at = c[0].name !== "void", lt = st - 2, mt = new Array(lt), bt = [], St = [], Pt = function(...Wt) {
                    Wt.length !== lt && At(`function ${o} called with ${Wt.length} arguments, expected ${lt}`), St.length = 0;
                    var xe;
                    bt.length = 1, bt[0] = N;
                    for(var Ht = 0; Ht < lt; ++Ht)mt[Ht] = c[Ht + 2].toWireType(St, Wt[Ht]), bt.push(mt[Ht]);
                    var re = O(...bt);
                    function Ee(ce) {
                        if (tt) Y(St);
                        else for(var Kt = 2; Kt < c.length; Kt++){
                            var gn = Kt === 1 ? xe : mt[Kt - 2];
                            c[Kt].destructorFunction !== null && c[Kt].destructorFunction(gn);
                        }
                        if (at) return c[0].fromWireType(ce);
                    }
                    return Ee(re);
                };
                return be(o, Pt);
            }
            var fr = (o, c, C)=>{
                if (o[c].overloadTable === void 0) {
                    var O = o[c];
                    o[c] = function(...N) {
                        return o[c].overloadTable.hasOwnProperty(N.length) || At(`Function '${C}' called with an invalid number of arguments (${N.length}) - expects one of (${o[c].overloadTable})!`), o[c].overloadTable[N.length].apply(this, N);
                    }, o[c].overloadTable = [], o[c].overloadTable[O.argCount] = O;
                }
            }, dr = (o, c, C)=>{
                e.hasOwnProperty(o) ? ((C === void 0 || e[o].overloadTable !== void 0 && e[o].overloadTable[C] !== void 0) && At(`Cannot register public name '${o}' twice`), fr(e, o, o), e.hasOwnProperty(C) && At(`Cannot register multiple overloads of a function with the same number of arguments (${C})!`), e[o].overloadTable[C] = c) : (e[o] = c, C !== void 0 && (e[o].numArguments = C));
            }, hr = (o, c)=>{
                for(var C = [], O = 0; O < o; O++)C.push(et[c + O * 4 >> 2]);
                return C;
            }, pr = (o, c, C)=>{
                e.hasOwnProperty(o) || Ct("Replacing nonexistent public symbol"), e[o].overloadTable !== void 0 && C !== void 0 ? e[o].overloadTable[C] = c : (e[o] = c, e[o].argCount = C);
            }, mr = (o, c, C)=>{
                o = o.replace(/p/g, "i");
                var O = e["dynCall_" + o];
                return O(c, ...C);
            }, le = [], Oe, Ue = (o)=>{
                var c = le[o];
                return c || (o >= le.length && (le.length = o + 1), le[o] = c = Oe.get(o)), c;
            }, gr = (o, c, C = [])=>{
                if (o.includes("j")) return mr(o, c, C);
                var O = Ue(c)(...C);
                return O;
            }, vr = (o, c)=>(...C)=>gr(o, c, C), te = (o, c)=>{
                o = Et(o);
                function C() {
                    return o.includes("j") ? vr(o, c) : Ue(c);
                }
                var O = C();
                return typeof O != "function" && At(`unknown function pointer with signature ${o}: ${c}`), O;
            }, _r = (o, c)=>{
                var C = be(c, function(O) {
                    this.name = c, this.message = O;
                    var N = new Error(O).stack;
                    N !== void 0 && (this.stack = this.toString() + `
` + N.replace(/^Error(:[^\n]*)?\n/, ""));
                });
                return C.prototype = Object.create(o.prototype), C.prototype.constructor = C, C.prototype.toString = function() {
                    return this.message === void 0 ? this.name : `${this.name}: ${this.message}`;
                }, C;
            }, Be, Fe = (o)=>{
                var c = Le(o), C = Et(c);
                return $t(c), C;
            }, br = (o, c)=>{
                var C = [], O = {};
                function N(q) {
                    if (!O[q] && !ot[q]) {
                        if (vt[q]) {
                            vt[q].forEach(N);
                            return;
                        }
                        C.push(q), O[q] = !0;
                    }
                }
                throw c.forEach(N), new Be(`${o}: ` + C.map(Fe).join([
                    ", "
                ]));
            }, wr = (o)=>{
                o = o.trim();
                const c = o.indexOf("(");
                return c !== -1 ? o.substr(0, c) : o;
            }, yr = (o, c, C, O, N, q, st)=>{
                var tt = hr(c, C);
                o = Et(o), o = wr(o), N = te(O, N), dr(o, function() {
                    br(`Cannot call ${o} due to unbound types`, tt);
                }, c - 1), Nt([], tt, (at)=>{
                    var lt = [
                        at[0],
                        null
                    ].concat(at.slice(1));
                    return pr(o, cr(o, lt, null, N, q), c - 1), [];
                });
            }, kr = (o, c, C)=>{
                switch(c){
                    case 1:
                        return C ? (O)=>j[O] : (O)=>P[O];
                    case 2:
                        return C ? (O)=>G[O >> 1] : (O)=>D[O >> 1];
                    case 4:
                        return C ? (O)=>J[O >> 2] : (O)=>et[O >> 2];
                    default:
                        throw new TypeError(`invalid integer width (${c}): ${o}`);
                }
            }, xr = (o, c, C, O, N)=>{
                c = Et(c);
                var q = (mt)=>mt;
                if (O === 0) {
                    var st = 32 - 8 * C;
                    q = (mt)=>mt << st >>> st;
                }
                var tt = c.includes("unsigned"), at = (mt, bt)=>{}, lt;
                tt ? lt = function(mt, bt) {
                    return at(bt, this.name), bt >>> 0;
                } : lt = function(mt, bt) {
                    return at(bt, this.name), bt;
                }, Ft(o, {
                    name: c,
                    fromWireType: q,
                    toWireType: lt,
                    argPackAdvance: Dt,
                    readValueFromPointer: kr(c, C, O !== 0),
                    destructorFunction: null
                });
            }, Er = (o, c, C)=>{
                var O = [
                    Int8Array,
                    Uint8Array,
                    Int16Array,
                    Uint16Array,
                    Int32Array,
                    Uint32Array,
                    Float32Array,
                    Float64Array
                ], N = O[c];
                function q(st) {
                    var tt = et[st >> 2], at = et[st + 4 >> 2];
                    return new N(j.buffer, at, tt);
                }
                C = Et(C), Ft(o, {
                    name: C,
                    fromWireType: q,
                    argPackAdvance: Dt,
                    readValueFromPointer: q
                }, {
                    ignoreDuplicateRegistrations: !0
                });
            }, Ar = (o, c, C, O)=>{
                if (!(O > 0)) return 0;
                for(var N = C, q = C + O - 1, st = 0; st < o.length; ++st){
                    var tt = o.charCodeAt(st);
                    if (tt >= 55296 && tt <= 57343) {
                        var at = o.charCodeAt(++st);
                        tt = 65536 + ((tt & 1023) << 10) | at & 1023;
                    }
                    if (tt <= 127) {
                        if (C >= q) break;
                        c[C++] = tt;
                    } else if (tt <= 2047) {
                        if (C + 1 >= q) break;
                        c[C++] = 192 | tt >> 6, c[C++] = 128 | tt & 63;
                    } else if (tt <= 65535) {
                        if (C + 2 >= q) break;
                        c[C++] = 224 | tt >> 12, c[C++] = 128 | tt >> 6 & 63, c[C++] = 128 | tt & 63;
                    } else {
                        if (C + 3 >= q) break;
                        c[C++] = 240 | tt >> 18, c[C++] = 128 | tt >> 12 & 63, c[C++] = 128 | tt >> 6 & 63, c[C++] = 128 | tt & 63;
                    }
                }
                return c[C] = 0, C - N;
            }, Cr = (o, c, C)=>Ar(o, P, c, C), Sr = (o)=>{
                for(var c = 0, C = 0; C < o.length; ++C){
                    var O = o.charCodeAt(C);
                    O <= 127 ? c++ : O <= 2047 ? c += 2 : O >= 55296 && O <= 57343 ? (c += 4, ++C) : c += 3;
                }
                return c;
            }, Pe = (o, c, C)=>{
                for(var O = c + C, N = ""; !(c >= O);){
                    var q = o[c++];
                    if (!q) return N;
                    if (!(q & 128)) {
                        N += String.fromCharCode(q);
                        continue;
                    }
                    var st = o[c++] & 63;
                    if ((q & 224) == 192) {
                        N += String.fromCharCode((q & 31) << 6 | st);
                        continue;
                    }
                    var tt = o[c++] & 63;
                    if ((q & 240) == 224 ? q = (q & 15) << 12 | st << 6 | tt : q = (q & 7) << 18 | st << 12 | tt << 6 | o[c++] & 63, q < 65536) N += String.fromCharCode(q);
                    else {
                        var at = q - 65536;
                        N += String.fromCharCode(55296 | at >> 10, 56320 | at & 1023);
                    }
                }
                return N;
            }, zr = (o, c)=>o ? Pe(P, o, c) : "", Ir = (o, c)=>{
                c = Et(c);
                var C = c === "std::string";
                Ft(o, {
                    name: c,
                    fromWireType (O) {
                        var N = et[O >> 2], q = O + 4, st;
                        if (C) for(var tt = q, at = 0; at <= N; ++at){
                            var lt = q + at;
                            if (at == N || P[lt] == 0) {
                                var mt = lt - tt, bt = zr(tt, mt);
                                st === void 0 ? st = bt : (st += "\0", st += bt), tt = lt + 1;
                            }
                        }
                        else {
                            for(var St = new Array(N), at = 0; at < N; ++at)St[at] = String.fromCharCode(P[q + at]);
                            st = St.join("");
                        }
                        return $t(O), st;
                    },
                    toWireType (O, N) {
                        N instanceof ArrayBuffer && (N = new Uint8Array(N));
                        var q, st = typeof N == "string";
                        st || N instanceof Uint8Array || N instanceof Uint8ClampedArray || N instanceof Int8Array || At("Cannot pass non-string to std::string"), C && st ? q = Sr(N) : q = N.length;
                        var tt = ke(4 + q + 1), at = tt + 4;
                        if (et[tt >> 2] = q, C && st) Cr(N, at, q + 1);
                        else if (st) for(var lt = 0; lt < q; ++lt){
                            var mt = N.charCodeAt(lt);
                            mt > 255 && ($t(at), At("String has UTF-16 code units that do not fit in 8 bits")), P[at + lt] = mt;
                        }
                        else for(var lt = 0; lt < q; ++lt)P[at + lt] = N[lt];
                        return O !== null && O.push($t, tt), tt;
                    },
                    argPackAdvance: Dt,
                    readValueFromPointer: nt,
                    destructorFunction (O) {
                        $t(O);
                    }
                });
            }, Tr = (o, c)=>{
                for(var C = "", O = 0; !(O >= c / 2); ++O){
                    var N = G[o + O * 2 >> 1];
                    if (N == 0) break;
                    C += String.fromCharCode(N);
                }
                return C;
            }, Rr = (o, c, C)=>{
                if (C ??= 2147483647, C < 2) return 0;
                C -= 2;
                for(var O = c, N = C < o.length * 2 ? C / 2 : o.length, q = 0; q < N; ++q){
                    var st = o.charCodeAt(q);
                    G[c >> 1] = st, c += 2;
                }
                return G[c >> 1] = 0, c - O;
            }, Or = (o)=>o.length * 2, Ur = (o, c)=>{
                for(var C = 0, O = ""; !(C >= c / 4);){
                    var N = J[o + C * 4 >> 2];
                    if (N == 0) break;
                    if (++C, N >= 65536) {
                        var q = N - 65536;
                        O += String.fromCharCode(55296 | q >> 10, 56320 | q & 1023);
                    } else O += String.fromCharCode(N);
                }
                return O;
            }, Br = (o, c, C)=>{
                if (C ??= 2147483647, C < 4) return 0;
                for(var O = c, N = O + C - 4, q = 0; q < o.length; ++q){
                    var st = o.charCodeAt(q);
                    if (st >= 55296 && st <= 57343) {
                        var tt = o.charCodeAt(++q);
                        st = 65536 + ((st & 1023) << 10) | tt & 1023;
                    }
                    if (J[c >> 2] = st, c += 4, c + 4 > N) break;
                }
                return J[c >> 2] = 0, c - O;
            }, Fr = (o)=>{
                for(var c = 0, C = 0; C < o.length; ++C){
                    var O = o.charCodeAt(C);
                    O >= 55296 && O <= 57343 && ++C, c += 4;
                }
                return c;
            }, Pr = (o, c, C)=>{
                C = Et(C);
                var O, N, q, st;
                c === 2 ? (O = Tr, N = Rr, st = Or, q = (tt)=>D[tt >> 1]) : c === 4 && (O = Ur, N = Br, st = Fr, q = (tt)=>et[tt >> 2]), Ft(o, {
                    name: C,
                    fromWireType: (tt)=>{
                        for(var at = et[tt >> 2], lt, mt = tt + 4, bt = 0; bt <= at; ++bt){
                            var St = tt + 4 + bt * c;
                            if (bt == at || q(St) == 0) {
                                var Pt = St - mt, Wt = O(mt, Pt);
                                lt === void 0 ? lt = Wt : (lt += "\0", lt += Wt), mt = St + c;
                            }
                        }
                        return $t(tt), lt;
                    },
                    toWireType: (tt, at)=>{
                        typeof at != "string" && At(`Cannot pass non-string to C++ string type ${C}`);
                        var lt = st(at), mt = ke(4 + lt + c);
                        return et[mt >> 2] = lt / c, N(at, mt + 4, lt + c), tt !== null && tt.push($t, mt), mt;
                    },
                    argPackAdvance: Dt,
                    readValueFromPointer: nt,
                    destructorFunction (tt) {
                        $t(tt);
                    }
                });
            }, Dr = (o, c, C, O, N, q)=>{
                R[o] = {
                    name: Et(c),
                    rawConstructor: te(C, O),
                    rawDestructor: te(N, q),
                    fields: []
                };
            }, Lr = (o, c, C, O, N, q, st, tt, at, lt)=>{
                R[o].fields.push({
                    fieldName: Et(c),
                    getterReturnType: C,
                    getter: te(O, N),
                    getterContext: q,
                    setterArgumentType: st,
                    setter: te(tt, at),
                    setterContext: lt
                });
            }, Wr = (o, c)=>{
                c = Et(c), Ft(o, {
                    isVoid: !0,
                    name: c,
                    argPackAdvance: 0,
                    fromWireType: ()=>{},
                    toWireType: (C, O)=>{}
                });
            }, jr = (o, c, C)=>P.copyWithin(o, c, c + C), we = [], $r = (o, c, C, O)=>(o = we[o], c = Vt.toValue(c), o(null, c, C, O)), Mr = {}, Nr = (o)=>{
                var c = Mr[o];
                return c === void 0 ? Et(o) : c;
            }, De = ()=>{
                if (typeof globalThis == "object") return globalThis;
                function o(c) {
                    c.$$$embind_global$$$ = c;
                    var C = typeof $$$embind_global$$$ == "object" && c.$$$embind_global$$$ == c;
                    return C || delete c.$$$embind_global$$$, C;
                }
                if (typeof $$$embind_global$$$ == "object" || (typeof global == "object" && o(global) ? $$$embind_global$$$ = global : typeof self == "object" && o(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")) return $$$embind_global$$$;
                throw Error("unable to get global object.");
            }, Hr = (o)=>o === 0 ? Vt.toHandle(De()) : (o = Nr(o), Vt.toHandle(De()[o])), Zr = (o)=>{
                var c = we.length;
                return we.push(o), c;
            }, Gr = (o, c)=>{
                var C = ot[o];
                return C === void 0 && At(`${c} has unknown type ${Fe(o)}`), C;
            }, Vr = (o, c)=>{
                for(var C = new Array(o), O = 0; O < o; ++O)C[O] = Gr(et[c + O * 4 >> 2], "parameter " + O);
                return C;
            }, qr = Reflect.construct, Xr = (o, c, C)=>{
                var O = [], N = o.toWireType(O, C);
                return O.length && (et[c >> 2] = Vt.toHandle(O)), N;
            }, Yr = (o, c, C)=>{
                var O = Vr(o, c), N = O.shift();
                o--;
                var q = new Array(o), st = (at, lt, mt, bt)=>{
                    for(var St = 0, Pt = 0; Pt < o; ++Pt)q[Pt] = O[Pt].readValueFromPointer(bt + St), St += O[Pt].argPackAdvance;
                    var Wt = C === 1 ? qr(lt, q) : lt.apply(at, q);
                    return Xr(N, mt, Wt);
                }, tt = `methodCaller<(${O.map((at)=>at.name).join(", ")}) => ${N.name}>`;
                return Zr(be(tt, st));
            }, Kr = (o)=>{
                var c = Vt.toValue(o);
                Y(c), _e(o);
            }, Jr = ()=>{
                ht("");
            }, Qr = ()=>2147483648, tn = (o)=>{
                var c = T.buffer, C = (o - c.byteLength + 65535) / 65536;
                try {
                    return T.grow(C), r(), 1;
                } catch  {}
            }, en = (o)=>{
                var c = P.length;
                o >>>= 0;
                var C = Qr();
                if (o > C) return !1;
                for(var O = (at, lt)=>at + (lt - at % lt) % lt, N = 1; N <= 4; N *= 2){
                    var q = c * (1 + .2 / N);
                    q = Math.min(q, o + 100663296);
                    var st = Math.min(C, O(Math.max(o, q), 65536)), tt = tn(st);
                    if (tt) return !0;
                }
                return !1;
            }, ye = {}, rn = ()=>E || "./this.program", ee = ()=>{
                if (!ee.strings) {
                    var o = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", c = {
                        USER: "web_user",
                        LOGNAME: "web_user",
                        PATH: "/",
                        PWD: "/",
                        HOME: "/home/web_user",
                        LANG: o,
                        _: rn()
                    };
                    for(var C in ye)ye[C] === void 0 ? delete c[C] : c[C] = ye[C];
                    var O = [];
                    for(var C in c)O.push(`${C}=${c[C]}`);
                    ee.strings = O;
                }
                return ee.strings;
            }, nn = (o, c)=>{
                for(var C = 0; C < o.length; ++C)j[c++] = o.charCodeAt(C);
                j[c] = 0;
            }, an = (o, c)=>{
                var C = 0;
                return ee().forEach((O, N)=>{
                    var q = c + C;
                    et[o + N * 4 >> 2] = q, nn(O, q), C += O.length + 1;
                }), 0;
            }, sn = (o, c)=>{
                var C = ee();
                et[o >> 2] = C.length;
                var O = 0;
                return C.forEach((N)=>O += N.length + 1), et[c >> 2] = O, 0;
            }, on = (o)=>{
                k(o, new b(o));
            }, ln = (o, c)=>{
                on(o);
            }, un = ln, cn = (o)=>52;
            function fn(o, c, C, O, N) {
                return 70;
            }
            var dn = [
                null,
                [],
                []
            ], hn = (o, c)=>{
                var C = dn[o];
                c === 0 || c === 10 ? ((o === 1 ? p : y)(Pe(C, 0)), C.length = 0) : C.push(c);
            }, pn = (o, c, C, O)=>{
                for(var N = 0, q = 0; q < C; q++){
                    var st = et[c >> 2], tt = et[c + 4 >> 2];
                    c += 8;
                    for(var at = 0; at < tt; at++)hn(o, P[st + at]);
                    N += tt;
                }
                return et[O >> 2] = N, 0;
            };
            pt = e.InternalError = class extends Error {
                constructor(c){
                    super(c), this.name = "InternalError";
                }
            }, yt(), Ut = e.BindingError = class extends Error {
                constructor(c){
                    super(c), this.name = "BindingError";
                }
            }, ir(), Be = e.UnboundTypeError = _r(Error, "UnboundTypeError");
            var mn = {
                j: Z,
                k: Ot,
                n: Zt,
                h: oe,
                z: sr,
                f: lr,
                e: yr,
                c: xr,
                a: Er,
                g: Ir,
                d: Pr,
                l: Dr,
                b: Lr,
                i: Wr,
                s: jr,
                y: $r,
                u: _e,
                A: Hr,
                x: Yr,
                w: Kr,
                o: Jr,
                p: en,
                q: an,
                r: sn,
                B: un,
                t: cn,
                m: fn,
                v: pn
            }, Lt = F(), Le = (o)=>(Le = Lt.E)(o), ke = (o)=>(ke = Lt.F)(o), $t = (o)=>($t = Lt.G)(o), We = (o)=>(We = Lt.I)(o);
            e.dynCall_jiji = (o, c, C, O, N)=>(e.dynCall_jiji = Lt.J)(o, c, C, O, N);
            var ue;
            Q = function o() {
                ue || je(), ue || (Q = o);
            };
            function je() {
                if (rt > 0 || (dt(), rt > 0)) return;
                function o() {
                    ue || (ue = !0, e.calledRun = !0, !I && (X(), g(e), e.onRuntimeInitialized && e.onRuntimeInitialized(), ct()));
                }
                e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
                    setTimeout(function() {
                        e.setStatus("");
                    }, 1), o();
                }, 1)) : o();
            }
            if (e.preInit) for(typeof e.preInit == "function" && (e.preInit = [
                e.preInit
            ]); e.preInit.length > 0;)e.preInit.pop()();
            return je(), i;
        };
    })();
    const _n = {
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
    function bn(a, d, e = {}) {
        let g;
        return d && (g = (f, i)=>{
            const s = new WebAssembly.Instance(d, f);
            return i(s), s.exports;
        }), a({
            noInitialRun: !0,
            instantiateWasm: g,
            ...e
        });
    }
    let Se;
    async function wn(a, d) {
        let e = a, g = d;
        arguments.length === 1 && !(a instanceof WebAssembly.Module) && (e = void 0, g = a), Se = bn(vn, e, g);
    }
    async function yn(a, d = {}) {
        Se || wn();
        const e = await Se, g = {
            ..._n,
            ...d
        };
        return e.encode(a.data, a.width, a.height, g).buffer;
    }
    const kn = "modulepreload", xn = function(a, d) {
        return new URL(a, d).href;
    }, $e = {}, me = function(d, e, g) {
        let f = Promise.resolve();
        if (e && e.length > 0) {
            const s = document.getElementsByTagName("link"), n = document.querySelector("meta[property=csp-nonce]"), h = n?.nonce || n?.getAttribute("nonce");
            f = Promise.allSettled(e.map((w)=>{
                if (w = xn(w, g), w in $e) return;
                $e[w] = !0;
                const E = w.endsWith(".css"), k = E ? '[rel="stylesheet"]' : "";
                if (!!g) for(let _ = s.length - 1; _ >= 0; _--){
                    const l = s[_];
                    if (l.href === w && (!E || l.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${w}"]${k}`)) return;
                const u = document.createElement("link");
                if (u.rel = E ? "stylesheet" : kn, E || (u.as = "script"), u.crossOrigin = "", u.href = w, h && u.setAttribute("nonce", h), document.head.appendChild(u), E) return new Promise((_, l)=>{
                    u.addEventListener("load", _), u.addEventListener("error", ()=>l(new Error(`Unable to preload CSS for ${w}`)));
                });
            }));
        }
        function i(s) {
            const n = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (n.payload = s, window.dispatchEvent(n), !n.defaultPrevented) throw s;
        }
        return f.then((s)=>{
            for (const n of s || [])n.status === "rejected" && i(n.reason);
            return d().catch(i);
        });
    }, En = {
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
    function Me(a, d, e = {}) {
        let g;
        return d && (g = (f, i)=>{
            const s = new WebAssembly.Instance(d, f);
            return i(s), s.exports;
        }), a({
            noInitialRun: !0,
            instantiateWasm: g,
            ...e
        });
    }
    const An = async ()=>WebAssembly.validate(new Uint8Array([
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
        ])), Cn = ()=>(async (a)=>{
            try {
                return typeof MessageChannel < "u" && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(a);
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
    let Xt;
    async function Sn(a, d) {
        let e = a, g = d;
        if (arguments.length === 1 && !(a instanceof WebAssembly.Module) && (e = void 0, g = a), await An()) {
            const i = await me(()=>import("./webp_enc_simd-C9n_RhDd.js"), [], import.meta.url);
            return Xt = Me(i.default, e, g), Xt;
        }
        const f = await me(()=>import("./webp_enc-f1AUqwAK.js"), [], import.meta.url);
        return Xt = Me(f.default, e, g), Xt;
    }
    async function Ne(a, d = {}) {
        Xt || (Xt = Sn());
        const e = {
            ...En,
            ...d
        }, f = (await Xt).encode(a.data, a.width, a.height, e);
        if (!f) throw new Error("Encoding error.");
        return f.buffer;
    }
    let zt;
    const Mt = new Array(128).fill(void 0);
    Mt.push(void 0, null, !0, !1);
    let se = Mt.length;
    function fe(a) {
        se === Mt.length && Mt.push(Mt.length + 1);
        const d = se;
        return se = Mt[d], Mt[d] = a, d;
    }
    function ze(a) {
        return Mt[a];
    }
    function zn(a) {
        a < 132 || (Mt[a] = se, se = a);
    }
    function In(a) {
        const d = ze(a);
        return zn(a), d;
    }
    const Ge = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    }) : {
        decode: ()=>{
            throw Error("TextDecoder not available");
        }
    };
    typeof TextDecoder < "u" && Ge.decode();
    let ne = null;
    function Te() {
        return (ne === null || ne.byteLength === 0) && (ne = new Uint8Array(zt.memory.buffer)), ne;
    }
    function Tn(a, d) {
        return a = a >>> 0, Ge.decode(Te().subarray(a, a + d));
    }
    let ie = null;
    function Rn() {
        return (ie === null || ie.byteLength === 0) && (ie = new Uint8ClampedArray(zt.memory.buffer)), ie;
    }
    function On(a, d) {
        return a = a >>> 0, Rn().subarray(a / 1, a / 1 + d);
    }
    let Ve = 0;
    function Un(a, d) {
        const e = d(a.length * 1, 1) >>> 0;
        return Te().set(a, e / 1), Ve = a.length, e;
    }
    let ae = null;
    function He() {
        return (ae === null || ae.byteLength === 0) && (ae = new Int32Array(zt.memory.buffer)), ae;
    }
    function Bn(a, d) {
        return a = a >>> 0, Te().subarray(a / 1, a / 1 + d);
    }
    function Fn(a, d, e, g) {
        try {
            const n = zt.__wbindgen_add_to_stack_pointer(-16), h = Un(a, zt.__wbindgen_malloc), w = Ve;
            zt.encode(n, h, w, d, e, g);
            var f = He()[n / 4 + 0], i = He()[n / 4 + 1], s = Bn(f, i).slice();
            return zt.__wbindgen_free(f, i * 1, 1), s;
        } finally{
            zt.__wbindgen_add_to_stack_pointer(16);
        }
    }
    async function Pn(a, d) {
        if (typeof Response == "function" && a instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming == "function") try {
                return await WebAssembly.instantiateStreaming(a, d);
            } catch (g) {
                if (a.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", g);
                else throw g;
            }
            const e = await a.arrayBuffer();
            return await WebAssembly.instantiate(e, d);
        } else {
            const e = await WebAssembly.instantiate(a, d);
            return e instanceof WebAssembly.Instance ? {
                instance: e,
                module: a
            } : e;
        }
    }
    function Dn() {
        const a = {};
        return a.wbg = {}, a.wbg.__wbindgen_memory = function() {
            const d = zt.memory;
            return fe(d);
        }, a.wbg.__wbg_buffer_a448f833075b71ba = function(d) {
            const e = ze(d).buffer;
            return fe(e);
        }, a.wbg.__wbg_newwithbyteoffsetandlength_099217381c451830 = function(d, e, g) {
            const f = new Uint16Array(ze(d), e >>> 0, g >>> 0);
            return fe(f);
        }, a.wbg.__wbindgen_object_drop_ref = function(d) {
            In(d);
        }, a.wbg.__wbg_newwithownedu8clampedarrayandsh_91db5987993a08fb = function(d, e, g, f) {
            var i = On(d, e).slice();
            zt.__wbindgen_free(d, e * 1, 1);
            const s = new ImageData(i, g >>> 0, f >>> 0);
            return fe(s);
        }, a.wbg.__wbindgen_throw = function(d, e) {
            throw new Error(Tn(d, e));
        }, a;
    }
    function Ln(a, d) {
        return zt = a.exports, qe.__wbindgen_wasm_module = d, ae = null, ne = null, ie = null, zt;
    }
    async function qe(a) {
        if (zt !== void 0) return zt;
        typeof a > "u" && (a = new URL("" + new URL("squoosh_png_bg-DAY7U9NW.wasm", import.meta.url).href, import.meta.url));
        const d = Dn();
        (typeof a == "string" || typeof Request == "function" && a instanceof Request || typeof URL == "function" && a instanceof URL) && (a = fetch(a));
        const { instance: e, module: g } = await Pn(await a, d);
        return Ln(e, g);
    }
    const Wn = globalThis.ServiceWorkerGlobalScope !== void 0, jn = Wn && typeof self < "u" && globalThis.caches && globalThis.caches.default !== void 0, $n = typeof process == "object" && process.release && process.release.name === "node";
    (jn || $n) && (globalThis.ImageData || (globalThis.ImageData = class {
        constructor(d, e, g){
            this.data = d, this.width = e, this.height = g;
        }
    }), import.meta.url === void 0 && (import.meta.url = "https://localhost"), typeof self < "u" && self.location === void 0 && (self.location = {
        href: ""
    }));
    let Ae;
    async function Mn(a) {
        return Ae || (Ae = qe(a)), Ae;
    }
    async function Nn(a, d = {}) {
        var e;
        await Mn();
        const g = (e = d?.bitDepth) !== null && e !== void 0 ? e : 8;
        if (g !== 8 && g !== 16) throw new Error("Invalid bit depth. Must be either 8 or 16.");
        const f = a.data instanceof Uint16Array;
        if (f && g !== 16) throw new Error("Invalid bit depth, must be 16 for Uint16Array or manually convert to RGB8 values with Uint8Array.");
        if (!f && g === 16) throw new Error("Invalid bit depth, must be 8 for Uint8Array or manually convert to RGB16 values with Uint16Array.");
        const i = new Uint8Array(a.data.buffer), s = await Fn(i, a.width, a.height, g);
        if (!s) throw new Error("Encoding error.");
        return s.buffer;
    }
    const Hn = {
        level: 2,
        interlace: !1,
        optimiseAlpha: !1
    };
    async function Zn(a) {
        const { default: d, initThreadPool: e, optimise: g, optimise_raw: f } = await me(async ()=>{
            const { default: i, initThreadPool: s, optimise: n, optimise_raw: h } = await import("./squoosh_oxipng-BOWiYjch.js");
            return {
                default: i,
                initThreadPool: s,
                optimise: n,
                optimise_raw: h
            };
        }, [], import.meta.url);
        return await d(a), await e(globalThis.navigator.hardwareConcurrency), {
            optimise: g,
            optimise_raw: f
        };
    }
    async function Gn(a) {
        const { default: d, optimise: e, optimise_raw: g } = await me(async ()=>{
            const { default: f, optimise: i, optimise_raw: s } = await import("./squoosh_oxipng-yu2r7-gO.js");
            return {
                default: f,
                optimise: i,
                optimise_raw: s
            };
        }, [], import.meta.url);
        return await d(a), {
            optimise: e,
            optimise_raw: g
        };
    }
    let de;
    async function Vn(a) {
        var d;
        if (!de) {
            const e = ((d = globalThis.navigator) === null || d === void 0 ? void 0 : d.hardwareConcurrency) > 1;
            typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && e && await Cn() ? de = Zn(a) : de = Gn(a);
        }
        return de;
    }
    async function qn(a, d = {}) {
        const e = {
            ...Hn,
            ...d
        }, { optimise: g, optimise_raw: f } = await Vn();
        return a instanceof ImageData ? f(a.data, a.width, a.height, e.level, e.interlace, e.optimiseAlpha).buffer : g(new Uint8Array(a), e.level, e.interlace, e.optimiseAlpha).buffer;
    }
    function Xn(a, d, e) {
        const g = a.data;
        for(let f = 0; f < g.length; f += 4){
            const i = Math.max(g[f], g[f + 1], g[f + 2]);
            i <= d && (g[f + 3] = e > 0 ? Math.min(g[f + 3], Math.round(255 * Math.max(0, (i - d + e) / e))) : 0);
        }
        return a;
    }
    function Yn(a) {
        const d = a.data;
        for(let e = 0; e < d.length; e += 4){
            const g = d[e + 3] / 255;
            d[e] = Math.round(d[e] * g + 255 * (1 - g)), d[e + 1] = Math.round(d[e + 1] * g + 255 * (1 - g)), d[e + 2] = Math.round(d[e + 2] * g + 255 * (1 - g)), d[e + 3] = 255;
        }
        return a;
    }
    function Kn(a, d, e) {
        const { width: g, height: f, data: i } = a, s = Qn(i, d), n = new Uint8ClampedArray(i);
        for(let h = 0; h < f; h++)for(let w = 0; w < g; w++){
            const E = (h * g + w) * 4;
            if (n[E + 3] === 0) continue;
            const k = n[E], x = n[E + 1], u = n[E + 2], [_, l, v] = ti(s, k, x, u);
            if (n[E] = _, n[E + 1] = l, n[E + 2] = v, !e) continue;
            const p = k - _, y = x - l, S = u - v;
            Jn(n, g, f, w, h, p, y, S);
        }
        return new ImageData(n, g, f);
    }
    function Jn(a, d, e, g, f, i, s, n) {
        const h = [
            [
                g + 1,
                f,
                .4375
            ],
            [
                g - 1,
                f + 1,
                .1875
            ],
            [
                g,
                f + 1,
                .3125
            ],
            [
                g + 1,
                f + 1,
                .0625
            ]
        ];
        for (const [w, E, k] of h){
            if (w < 0 || w >= d || E >= e) continue;
            const x = (E * d + w) * 4;
            a[x] = Ce(a[x] + i * k), a[x + 1] = Ce(a[x + 1] + s * k), a[x + 2] = Ce(a[x + 2] + n * k);
        }
    }
    function Ce(a) {
        return Math.max(0, Math.min(255, Math.round(a)));
    }
    function Qn(a, d) {
        const e = [];
        for(let i = 0; i < a.length; i += 4)a[i + 3] < 128 || e.push([
            a[i],
            a[i + 1],
            a[i + 2]
        ]);
        if (e.length === 0) return [
            [
                0,
                0,
                0
            ]
        ];
        let f = [
            e.length > 5e4 ? e.filter((i, s)=>s % Math.ceil(e.length / 5e4) === 0) : e
        ];
        for(; f.length < d;){
            let i = -1, s = -1;
            for(let k = 0; k < f.length; k++){
                if (f[k].length < 2) continue;
                const x = Ze(f[k]), u = Math.max(x[0], x[1], x[2]);
                u > s && (s = u, i = k);
            }
            if (i === -1) break;
            const n = f[i], h = Ze(n), w = h[0] >= h[1] && h[0] >= h[2] ? 0 : h[1] >= h[2] ? 1 : 2;
            n.sort((k, x)=>k[w] - x[w]);
            const E = Math.floor(n.length / 2);
            f.splice(i, 1, n.slice(0, E), n.slice(E));
        }
        return f.map((i)=>{
            let s = 0, n = 0, h = 0;
            for (const E of i)s += E[0], n += E[1], h += E[2];
            const w = i.length || 1;
            return [
                Math.round(s / w),
                Math.round(n / w),
                Math.round(h / w)
            ];
        });
    }
    function Ze(a) {
        let d = 255, e = 0, g = 255, f = 0, i = 255, s = 0;
        for (const [n, h, w] of a)n < d && (d = n), n > e && (e = n), h < g && (g = h), h > f && (f = h), w < i && (i = w), w > s && (s = w);
        return [
            e - d,
            f - g,
            s - i
        ];
    }
    function ti(a, d, e, g) {
        let f = a[0], i = 1 / 0;
        for (const s of a){
            const n = (s[0] - d) ** 2 + (s[1] - e) ** 2 + (s[2] - g) ** 2;
            n < i && (i = n, f = s);
        }
        return f;
    }
    function ei(a) {
        return new Promise((d, e)=>{
            const g = new Image;
            g.onload = ()=>{
                const i = new OffscreenCanvas(g.naturalWidth, g.naturalHeight).getContext("2d");
                i.drawImage(g, 0, 0), d(i.getImageData(0, 0, g.naturalWidth, g.naturalHeight)), URL.revokeObjectURL(g.src);
            }, g.onerror = ()=>e(new Error("Failed to load image")), g.src = URL.createObjectURL(a);
        });
    }
    async function ri(a, d) {
        const e = a.size;
        let g = await ei(a);
        if (d.removeBlack && (g = Xn(g, d.threshold, d.feather)), d.resizeEnabled && d.resizePct < 100 && (g = ni(g, d.resizePct / 100)), d.canvasEnabled && d.canvasW > 0 && d.canvasH > 0) {
            const s = Math.max(g.width, d.canvasW), n = Math.max(g.height, d.canvasH);
            (s !== g.width || n !== g.height) && (g = ii(g, s, n, d.canvasAnchor));
        }
        let f;
        switch(d.format){
            case "png":
                {
                    d.pngColors < 256 && (g = Kn(g, d.pngColors, d.pngDither));
                    const s = await Nn(g);
                    f = await qn(s, {
                        level: 3
                    });
                    break;
                }
            case "jpeg":
                {
                    (d.removeBlack || d.canvasEnabled) && (g = Yn(g)), f = await yn(g, {
                        quality: d.jpegQuality
                    });
                    break;
                }
            case "webp":
                {
                    d.webpLossless ? f = await Ne(g, {
                        lossless: 1,
                        quality: 100
                    }) : f = await Ne(g, {
                        quality: d.webpQuality
                    });
                    break;
                }
        }
        const i = new Blob([
            f
        ], {
            type: {
                png: "image/png",
                jpeg: "image/jpeg",
                webp: "image/webp"
            }[d.format]
        });
        return {
            url: URL.createObjectURL(i),
            inputSize: e,
            outputSize: i.size,
            width: g.width,
            height: g.height,
            format: d.format
        };
    }
    function ni(a, d) {
        const e = a.width, g = a.height, f = Math.max(1, Math.round(e * d)), i = Math.max(1, Math.round(g * d)), s = new OffscreenCanvas(e, g);
        s.getContext("2d").putImageData(a, 0, 0);
        const w = new OffscreenCanvas(f, i).getContext("2d");
        return w.imageSmoothingEnabled = !0, w.imageSmoothingQuality = "high", w.drawImage(s, 0, 0, f, i), w.getImageData(0, 0, f, i);
    }
    function ii(a, d, e, g) {
        const { width: f, height: i } = a;
        let s = 0, n = 0;
        const h = g[1] || "c", w = g[0] || "m";
        h === "c" ? s = Math.round((d - f) / 2) : h === "r" && (s = d - f), w === "m" ? n = Math.round((e - i) / 2) : w === "b" && (n = e - i);
        const k = new OffscreenCanvas(d, e).getContext("2d"), x = new OffscreenCanvas(f, i);
        return x.getContext("2d").putImageData(a, 0, 0), k.drawImage(x, s, n), k.getImageData(0, 0, d, e);
    }
    var he = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    function ai(a) {
        return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
    }
    function pe(a) {
        throw new Error('Could not dynamically require "' + a + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
    }
    var Xe = {
        exports: {}
    };
    (function(a, d) {
        (function(e) {
            a.exports = e();
        })(function() {
            return function e(g, f, i) {
                function s(w, E) {
                    if (!f[w]) {
                        if (!g[w]) {
                            var k = typeof pe == "function" && pe;
                            if (!E && k) return k(w, !0);
                            if (n) return n(w, !0);
                            var x = new Error("Cannot find module '" + w + "'");
                            throw x.code = "MODULE_NOT_FOUND", x;
                        }
                        var u = f[w] = {
                            exports: {}
                        };
                        g[w][0].call(u.exports, function(_) {
                            var l = g[w][1][_];
                            return s(l || _);
                        }, u, u.exports, e, g, f, i);
                    }
                    return f[w].exports;
                }
                for(var n = typeof pe == "function" && pe, h = 0; h < i.length; h++)s(i[h]);
                return s;
            }({
                1: [
                    function(e, g, f) {
                        var i = e("./utils"), s = e("./support"), n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                        f.encode = function(h) {
                            for(var w, E, k, x, u, _, l, v = [], p = 0, y = h.length, S = y, T = i.getTypeOf(h) !== "string"; p < h.length;)S = y - p, k = T ? (w = h[p++], E = p < y ? h[p++] : 0, p < y ? h[p++] : 0) : (w = h.charCodeAt(p++), E = p < y ? h.charCodeAt(p++) : 0, p < y ? h.charCodeAt(p++) : 0), x = w >> 2, u = (3 & w) << 4 | E >> 4, _ = 1 < S ? (15 & E) << 2 | k >> 6 : 64, l = 2 < S ? 63 & k : 64, v.push(n.charAt(x) + n.charAt(u) + n.charAt(_) + n.charAt(l));
                            return v.join("");
                        }, f.decode = function(h) {
                            var w, E, k, x, u, _, l = 0, v = 0, p = "data:";
                            if (h.substr(0, p.length) === p) throw new Error("Invalid base64 input, it looks like a data url.");
                            var y, S = 3 * (h = h.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
                            if (h.charAt(h.length - 1) === n.charAt(64) && S--, h.charAt(h.length - 2) === n.charAt(64) && S--, S % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
                            for(y = s.uint8array ? new Uint8Array(0 | S) : new Array(0 | S); l < h.length;)w = n.indexOf(h.charAt(l++)) << 2 | (x = n.indexOf(h.charAt(l++))) >> 4, E = (15 & x) << 4 | (u = n.indexOf(h.charAt(l++))) >> 2, k = (3 & u) << 6 | (_ = n.indexOf(h.charAt(l++))), y[v++] = w, u !== 64 && (y[v++] = E), _ !== 64 && (y[v++] = k);
                            return y;
                        };
                    },
                    {
                        "./support": 30,
                        "./utils": 32
                    }
                ],
                2: [
                    function(e, g, f) {
                        var i = e("./external"), s = e("./stream/DataWorker"), n = e("./stream/Crc32Probe"), h = e("./stream/DataLengthProbe");
                        function w(E, k, x, u, _) {
                            this.compressedSize = E, this.uncompressedSize = k, this.crc32 = x, this.compression = u, this.compressedContent = _;
                        }
                        w.prototype = {
                            getContentWorker: function() {
                                var E = new s(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new h("data_length")), k = this;
                                return E.on("end", function() {
                                    if (this.streamInfo.data_length !== k.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
                                }), E;
                            },
                            getCompressedWorker: function() {
                                return new s(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
                            }
                        }, w.createWorkerFrom = function(E, k, x) {
                            return E.pipe(new n).pipe(new h("uncompressedSize")).pipe(k.compressWorker(x)).pipe(new h("compressedSize")).withStreamInfo("compression", k);
                        }, g.exports = w;
                    },
                    {
                        "./external": 6,
                        "./stream/Crc32Probe": 25,
                        "./stream/DataLengthProbe": 26,
                        "./stream/DataWorker": 27
                    }
                ],
                3: [
                    function(e, g, f) {
                        var i = e("./stream/GenericWorker");
                        f.STORE = {
                            magic: "\0\0",
                            compressWorker: function() {
                                return new i("STORE compression");
                            },
                            uncompressWorker: function() {
                                return new i("STORE decompression");
                            }
                        }, f.DEFLATE = e("./flate");
                    },
                    {
                        "./flate": 7,
                        "./stream/GenericWorker": 28
                    }
                ],
                4: [
                    function(e, g, f) {
                        var i = e("./utils"), s = function() {
                            for(var n, h = [], w = 0; w < 256; w++){
                                n = w;
                                for(var E = 0; E < 8; E++)n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
                                h[w] = n;
                            }
                            return h;
                        }();
                        g.exports = function(n, h) {
                            return n !== void 0 && n.length ? i.getTypeOf(n) !== "string" ? function(w, E, k, x) {
                                var u = s, _ = x + k;
                                w ^= -1;
                                for(var l = x; l < _; l++)w = w >>> 8 ^ u[255 & (w ^ E[l])];
                                return -1 ^ w;
                            }(0 | h, n, n.length, 0) : function(w, E, k, x) {
                                var u = s, _ = x + k;
                                w ^= -1;
                                for(var l = x; l < _; l++)w = w >>> 8 ^ u[255 & (w ^ E.charCodeAt(l))];
                                return -1 ^ w;
                            }(0 | h, n, n.length, 0) : 0;
                        };
                    },
                    {
                        "./utils": 32
                    }
                ],
                5: [
                    function(e, g, f) {
                        f.base64 = !1, f.binary = !1, f.dir = !1, f.createFolders = !0, f.date = null, f.compression = null, f.compressionOptions = null, f.comment = null, f.unixPermissions = null, f.dosPermissions = null;
                    },
                    {}
                ],
                6: [
                    function(e, g, f) {
                        var i = null;
                        i = typeof Promise < "u" ? Promise : e("lie"), g.exports = {
                            Promise: i
                        };
                    },
                    {
                        lie: 37
                    }
                ],
                7: [
                    function(e, g, f) {
                        var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", s = e("pako"), n = e("./utils"), h = e("./stream/GenericWorker"), w = i ? "uint8array" : "array";
                        function E(k, x) {
                            h.call(this, "FlateWorker/" + k), this._pako = null, this._pakoAction = k, this._pakoOptions = x, this.meta = {};
                        }
                        f.magic = "\b\0", n.inherits(E, h), E.prototype.processChunk = function(k) {
                            this.meta = k.meta, this._pako === null && this._createPako(), this._pako.push(n.transformTo(w, k.data), !1);
                        }, E.prototype.flush = function() {
                            h.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
                        }, E.prototype.cleanUp = function() {
                            h.prototype.cleanUp.call(this), this._pako = null;
                        }, E.prototype._createPako = function() {
                            this._pako = new s[this._pakoAction]({
                                raw: !0,
                                level: this._pakoOptions.level || -1
                            });
                            var k = this;
                            this._pako.onData = function(x) {
                                k.push({
                                    data: x,
                                    meta: k.meta
                                });
                            };
                        }, f.compressWorker = function(k) {
                            return new E("Deflate", k);
                        }, f.uncompressWorker = function() {
                            return new E("Inflate", {});
                        };
                    },
                    {
                        "./stream/GenericWorker": 28,
                        "./utils": 32,
                        pako: 38
                    }
                ],
                8: [
                    function(e, g, f) {
                        function i(u, _) {
                            var l, v = "";
                            for(l = 0; l < _; l++)v += String.fromCharCode(255 & u), u >>>= 8;
                            return v;
                        }
                        function s(u, _, l, v, p, y) {
                            var S, T, I = u.file, j = u.compression, P = y !== w.utf8encode, G = n.transformTo("string", y(I.name)), D = n.transformTo("string", w.utf8encode(I.name)), J = I.comment, et = n.transformTo("string", y(J)), A = n.transformTo("string", w.utf8encode(J)), L = D.length !== I.name.length, r = A.length !== J.length, M = "", ft = "", V = "", dt = I.dir, X = I.date, ct = {
                                crc32: 0,
                                compressedSize: 0,
                                uncompressedSize: 0
                            };
                            _ && !l || (ct.crc32 = u.crc32, ct.compressedSize = u.compressedSize, ct.uncompressedSize = u.uncompressedSize);
                            var B = 0;
                            _ && (B |= 8), P || !L && !r || (B |= 2048);
                            var U = 0, ut = 0;
                            dt && (U |= 16), p === "UNIX" ? (ut = 798, U |= function(Q, wt) {
                                var xt = Q;
                                return Q || (xt = wt ? 16893 : 33204), (65535 & xt) << 16;
                            }(I.unixPermissions, dt)) : (ut = 20, U |= function(Q) {
                                return 63 & (Q || 0);
                            }(I.dosPermissions)), S = X.getUTCHours(), S <<= 6, S |= X.getUTCMinutes(), S <<= 5, S |= X.getUTCSeconds() / 2, T = X.getUTCFullYear() - 1980, T <<= 4, T |= X.getUTCMonth() + 1, T <<= 5, T |= X.getUTCDate(), L && (ft = i(1, 1) + i(E(G), 4) + D, M += "up" + i(ft.length, 2) + ft), r && (V = i(1, 1) + i(E(et), 4) + A, M += "uc" + i(V.length, 2) + V);
                            var rt = "";
                            return rt += `
\0`, rt += i(B, 2), rt += j.magic, rt += i(S, 2), rt += i(T, 2), rt += i(ct.crc32, 4), rt += i(ct.compressedSize, 4), rt += i(ct.uncompressedSize, 4), rt += i(G.length, 2), rt += i(M.length, 2), {
                                fileRecord: k.LOCAL_FILE_HEADER + rt + G + M,
                                dirRecord: k.CENTRAL_FILE_HEADER + i(ut, 2) + rt + i(et.length, 2) + "\0\0\0\0" + i(U, 4) + i(v, 4) + G + M + et
                            };
                        }
                        var n = e("../utils"), h = e("../stream/GenericWorker"), w = e("../utf8"), E = e("../crc32"), k = e("../signature");
                        function x(u, _, l, v) {
                            h.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = _, this.zipPlatform = l, this.encodeFileName = v, this.streamFiles = u, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
                        }
                        n.inherits(x, h), x.prototype.push = function(u) {
                            var _ = u.meta.percent || 0, l = this.entriesCount, v = this._sources.length;
                            this.accumulate ? this.contentBuffer.push(u) : (this.bytesWritten += u.data.length, h.prototype.push.call(this, {
                                data: u.data,
                                meta: {
                                    currentFile: this.currentFile,
                                    percent: l ? (_ + 100 * (l - v - 1)) / l : 100
                                }
                            }));
                        }, x.prototype.openedSource = function(u) {
                            this.currentSourceOffset = this.bytesWritten, this.currentFile = u.file.name;
                            var _ = this.streamFiles && !u.file.dir;
                            if (_) {
                                var l = s(u, _, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                                this.push({
                                    data: l.fileRecord,
                                    meta: {
                                        percent: 0
                                    }
                                });
                            } else this.accumulate = !0;
                        }, x.prototype.closedSource = function(u) {
                            this.accumulate = !1;
                            var _ = this.streamFiles && !u.file.dir, l = s(u, _, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                            if (this.dirRecords.push(l.dirRecord), _) this.push({
                                data: function(v) {
                                    return k.DATA_DESCRIPTOR + i(v.crc32, 4) + i(v.compressedSize, 4) + i(v.uncompressedSize, 4);
                                }(u),
                                meta: {
                                    percent: 100
                                }
                            });
                            else for(this.push({
                                data: l.fileRecord,
                                meta: {
                                    percent: 0
                                }
                            }); this.contentBuffer.length;)this.push(this.contentBuffer.shift());
                            this.currentFile = null;
                        }, x.prototype.flush = function() {
                            for(var u = this.bytesWritten, _ = 0; _ < this.dirRecords.length; _++)this.push({
                                data: this.dirRecords[_],
                                meta: {
                                    percent: 100
                                }
                            });
                            var l = this.bytesWritten - u, v = function(p, y, S, T, I) {
                                var j = n.transformTo("string", I(T));
                                return k.CENTRAL_DIRECTORY_END + "\0\0\0\0" + i(p, 2) + i(p, 2) + i(y, 4) + i(S, 4) + i(j.length, 2) + j;
                            }(this.dirRecords.length, l, u, this.zipComment, this.encodeFileName);
                            this.push({
                                data: v,
                                meta: {
                                    percent: 100
                                }
                            });
                        }, x.prototype.prepareNextSource = function() {
                            this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
                        }, x.prototype.registerPrevious = function(u) {
                            this._sources.push(u);
                            var _ = this;
                            return u.on("data", function(l) {
                                _.processChunk(l);
                            }), u.on("end", function() {
                                _.closedSource(_.previous.streamInfo), _._sources.length ? _.prepareNextSource() : _.end();
                            }), u.on("error", function(l) {
                                _.error(l);
                            }), this;
                        }, x.prototype.resume = function() {
                            return !!h.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
                        }, x.prototype.error = function(u) {
                            var _ = this._sources;
                            if (!h.prototype.error.call(this, u)) return !1;
                            for(var l = 0; l < _.length; l++)try {
                                _[l].error(u);
                            } catch  {}
                            return !0;
                        }, x.prototype.lock = function() {
                            h.prototype.lock.call(this);
                            for(var u = this._sources, _ = 0; _ < u.length; _++)u[_].lock();
                        }, g.exports = x;
                    },
                    {
                        "../crc32": 4,
                        "../signature": 23,
                        "../stream/GenericWorker": 28,
                        "../utf8": 31,
                        "../utils": 32
                    }
                ],
                9: [
                    function(e, g, f) {
                        var i = e("../compressions"), s = e("./ZipFileWorker");
                        f.generateWorker = function(n, h, w) {
                            var E = new s(h.streamFiles, w, h.platform, h.encodeFileName), k = 0;
                            try {
                                n.forEach(function(x, u) {
                                    k++;
                                    var _ = function(y, S) {
                                        var T = y || S, I = i[T];
                                        if (!I) throw new Error(T + " is not a valid compression method !");
                                        return I;
                                    }(u.options.compression, h.compression), l = u.options.compressionOptions || h.compressionOptions || {}, v = u.dir, p = u.date;
                                    u._compressWorker(_, l).withStreamInfo("file", {
                                        name: x,
                                        dir: v,
                                        date: p,
                                        comment: u.comment || "",
                                        unixPermissions: u.unixPermissions,
                                        dosPermissions: u.dosPermissions
                                    }).pipe(E);
                                }), E.entriesCount = k;
                            } catch (x) {
                                E.error(x);
                            }
                            return E;
                        };
                    },
                    {
                        "../compressions": 3,
                        "./ZipFileWorker": 8
                    }
                ],
                10: [
                    function(e, g, f) {
                        function i() {
                            if (!(this instanceof i)) return new i;
                            if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
                            this.files = Object.create(null), this.comment = null, this.root = "", this.clone = function() {
                                var s = new i;
                                for(var n in this)typeof this[n] != "function" && (s[n] = this[n]);
                                return s;
                            };
                        }
                        (i.prototype = e("./object")).loadAsync = e("./load"), i.support = e("./support"), i.defaults = e("./defaults"), i.version = "3.10.1", i.loadAsync = function(s, n) {
                            return new i().loadAsync(s, n);
                        }, i.external = e("./external"), g.exports = i;
                    },
                    {
                        "./defaults": 5,
                        "./external": 6,
                        "./load": 11,
                        "./object": 15,
                        "./support": 30
                    }
                ],
                11: [
                    function(e, g, f) {
                        var i = e("./utils"), s = e("./external"), n = e("./utf8"), h = e("./zipEntries"), w = e("./stream/Crc32Probe"), E = e("./nodejsUtils");
                        function k(x) {
                            return new s.Promise(function(u, _) {
                                var l = x.decompressed.getContentWorker().pipe(new w);
                                l.on("error", function(v) {
                                    _(v);
                                }).on("end", function() {
                                    l.streamInfo.crc32 !== x.decompressed.crc32 ? _(new Error("Corrupted zip : CRC32 mismatch")) : u();
                                }).resume();
                            });
                        }
                        g.exports = function(x, u) {
                            var _ = this;
                            return u = i.extend(u || {}, {
                                base64: !1,
                                checkCRC32: !1,
                                optimizedBinaryString: !1,
                                createFolders: !1,
                                decodeFileName: n.utf8decode
                            }), E.isNode && E.isStream(x) ? s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : i.prepareContent("the loaded zip file", x, !0, u.optimizedBinaryString, u.base64).then(function(l) {
                                var v = new h(u);
                                return v.load(l), v;
                            }).then(function(l) {
                                var v = [
                                    s.Promise.resolve(l)
                                ], p = l.files;
                                if (u.checkCRC32) for(var y = 0; y < p.length; y++)v.push(k(p[y]));
                                return s.Promise.all(v);
                            }).then(function(l) {
                                for(var v = l.shift(), p = v.files, y = 0; y < p.length; y++){
                                    var S = p[y], T = S.fileNameStr, I = i.resolve(S.fileNameStr);
                                    _.file(I, S.decompressed, {
                                        binary: !0,
                                        optimizedBinaryString: !0,
                                        date: S.date,
                                        dir: S.dir,
                                        comment: S.fileCommentStr.length ? S.fileCommentStr : null,
                                        unixPermissions: S.unixPermissions,
                                        dosPermissions: S.dosPermissions,
                                        createFolders: u.createFolders
                                    }), S.dir || (_.file(I).unsafeOriginalName = T);
                                }
                                return v.zipComment.length && (_.comment = v.zipComment), _;
                            });
                        };
                    },
                    {
                        "./external": 6,
                        "./nodejsUtils": 14,
                        "./stream/Crc32Probe": 25,
                        "./utf8": 31,
                        "./utils": 32,
                        "./zipEntries": 33
                    }
                ],
                12: [
                    function(e, g, f) {
                        var i = e("../utils"), s = e("../stream/GenericWorker");
                        function n(h, w) {
                            s.call(this, "Nodejs stream input adapter for " + h), this._upstreamEnded = !1, this._bindStream(w);
                        }
                        i.inherits(n, s), n.prototype._bindStream = function(h) {
                            var w = this;
                            (this._stream = h).pause(), h.on("data", function(E) {
                                w.push({
                                    data: E,
                                    meta: {
                                        percent: 0
                                    }
                                });
                            }).on("error", function(E) {
                                w.isPaused ? this.generatedError = E : w.error(E);
                            }).on("end", function() {
                                w.isPaused ? w._upstreamEnded = !0 : w.end();
                            });
                        }, n.prototype.pause = function() {
                            return !!s.prototype.pause.call(this) && (this._stream.pause(), !0);
                        }, n.prototype.resume = function() {
                            return !!s.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
                        }, g.exports = n;
                    },
                    {
                        "../stream/GenericWorker": 28,
                        "../utils": 32
                    }
                ],
                13: [
                    function(e, g, f) {
                        var i = e("readable-stream").Readable;
                        function s(n, h, w) {
                            i.call(this, h), this._helper = n;
                            var E = this;
                            n.on("data", function(k, x) {
                                E.push(k) || E._helper.pause(), w && w(x);
                            }).on("error", function(k) {
                                E.emit("error", k);
                            }).on("end", function() {
                                E.push(null);
                            });
                        }
                        e("../utils").inherits(s, i), s.prototype._read = function() {
                            this._helper.resume();
                        }, g.exports = s;
                    },
                    {
                        "../utils": 32,
                        "readable-stream": 16
                    }
                ],
                14: [
                    function(e, g, f) {
                        g.exports = {
                            isNode: typeof Buffer < "u",
                            newBufferFrom: function(i, s) {
                                if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(i, s);
                                if (typeof i == "number") throw new Error('The "data" argument must not be a number');
                                return new Buffer(i, s);
                            },
                            allocBuffer: function(i) {
                                if (Buffer.alloc) return Buffer.alloc(i);
                                var s = new Buffer(i);
                                return s.fill(0), s;
                            },
                            isBuffer: function(i) {
                                return Buffer.isBuffer(i);
                            },
                            isStream: function(i) {
                                return i && typeof i.on == "function" && typeof i.pause == "function" && typeof i.resume == "function";
                            }
                        };
                    },
                    {}
                ],
                15: [
                    function(e, g, f) {
                        function i(I, j, P) {
                            var G, D = n.getTypeOf(j), J = n.extend(P || {}, E);
                            J.date = J.date || new Date, J.compression !== null && (J.compression = J.compression.toUpperCase()), typeof J.unixPermissions == "string" && (J.unixPermissions = parseInt(J.unixPermissions, 8)), J.unixPermissions && 16384 & J.unixPermissions && (J.dir = !0), J.dosPermissions && 16 & J.dosPermissions && (J.dir = !0), J.dir && (I = p(I)), J.createFolders && (G = v(I)) && y.call(this, G, !0);
                            var et = D === "string" && J.binary === !1 && J.base64 === !1;
                            P && P.binary !== void 0 || (J.binary = !et), (j instanceof k && j.uncompressedSize === 0 || J.dir || !j || j.length === 0) && (J.base64 = !1, J.binary = !0, j = "", J.compression = "STORE", D = "string");
                            var A = null;
                            A = j instanceof k || j instanceof h ? j : _.isNode && _.isStream(j) ? new l(I, j) : n.prepareContent(I, j, J.binary, J.optimizedBinaryString, J.base64);
                            var L = new x(I, A, J);
                            this.files[I] = L;
                        }
                        var s = e("./utf8"), n = e("./utils"), h = e("./stream/GenericWorker"), w = e("./stream/StreamHelper"), E = e("./defaults"), k = e("./compressedObject"), x = e("./zipObject"), u = e("./generate"), _ = e("./nodejsUtils"), l = e("./nodejs/NodejsStreamInputAdapter"), v = function(I) {
                            I.slice(-1) === "/" && (I = I.substring(0, I.length - 1));
                            var j = I.lastIndexOf("/");
                            return 0 < j ? I.substring(0, j) : "";
                        }, p = function(I) {
                            return I.slice(-1) !== "/" && (I += "/"), I;
                        }, y = function(I, j) {
                            return j = j !== void 0 ? j : E.createFolders, I = p(I), this.files[I] || i.call(this, I, null, {
                                dir: !0,
                                createFolders: j
                            }), this.files[I];
                        };
                        function S(I) {
                            return Object.prototype.toString.call(I) === "[object RegExp]";
                        }
                        var T = {
                            load: function() {
                                throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
                            },
                            forEach: function(I) {
                                var j, P, G;
                                for(j in this.files)G = this.files[j], (P = j.slice(this.root.length, j.length)) && j.slice(0, this.root.length) === this.root && I(P, G);
                            },
                            filter: function(I) {
                                var j = [];
                                return this.forEach(function(P, G) {
                                    I(P, G) && j.push(G);
                                }), j;
                            },
                            file: function(I, j, P) {
                                if (arguments.length !== 1) return I = this.root + I, i.call(this, I, j, P), this;
                                if (S(I)) {
                                    var G = I;
                                    return this.filter(function(J, et) {
                                        return !et.dir && G.test(J);
                                    });
                                }
                                var D = this.files[this.root + I];
                                return D && !D.dir ? D : null;
                            },
                            folder: function(I) {
                                if (!I) return this;
                                if (S(I)) return this.filter(function(D, J) {
                                    return J.dir && I.test(D);
                                });
                                var j = this.root + I, P = y.call(this, j), G = this.clone();
                                return G.root = P.name, G;
                            },
                            remove: function(I) {
                                I = this.root + I;
                                var j = this.files[I];
                                if (j || (I.slice(-1) !== "/" && (I += "/"), j = this.files[I]), j && !j.dir) delete this.files[I];
                                else for(var P = this.filter(function(D, J) {
                                    return J.name.slice(0, I.length) === I;
                                }), G = 0; G < P.length; G++)delete this.files[P[G].name];
                                return this;
                            },
                            generate: function() {
                                throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
                            },
                            generateInternalStream: function(I) {
                                var j, P = {};
                                try {
                                    if ((P = n.extend(I || {}, {
                                        streamFiles: !1,
                                        compression: "STORE",
                                        compressionOptions: null,
                                        type: "",
                                        platform: "DOS",
                                        comment: null,
                                        mimeType: "application/zip",
                                        encodeFileName: s.utf8encode
                                    })).type = P.type.toLowerCase(), P.compression = P.compression.toUpperCase(), P.type === "binarystring" && (P.type = "string"), !P.type) throw new Error("No output type specified.");
                                    n.checkSupport(P.type), P.platform !== "darwin" && P.platform !== "freebsd" && P.platform !== "linux" && P.platform !== "sunos" || (P.platform = "UNIX"), P.platform === "win32" && (P.platform = "DOS");
                                    var G = P.comment || this.comment || "";
                                    j = u.generateWorker(this, P, G);
                                } catch (D) {
                                    (j = new h("error")).error(D);
                                }
                                return new w(j, P.type || "string", P.mimeType);
                            },
                            generateAsync: function(I, j) {
                                return this.generateInternalStream(I).accumulate(j);
                            },
                            generateNodeStream: function(I, j) {
                                return (I = I || {}).type || (I.type = "nodebuffer"), this.generateInternalStream(I).toNodejsStream(j);
                            }
                        };
                        g.exports = T;
                    },
                    {
                        "./compressedObject": 2,
                        "./defaults": 5,
                        "./generate": 9,
                        "./nodejs/NodejsStreamInputAdapter": 12,
                        "./nodejsUtils": 14,
                        "./stream/GenericWorker": 28,
                        "./stream/StreamHelper": 29,
                        "./utf8": 31,
                        "./utils": 32,
                        "./zipObject": 35
                    }
                ],
                16: [
                    function(e, g, f) {
                        g.exports = e("stream");
                    },
                    {
                        stream: void 0
                    }
                ],
                17: [
                    function(e, g, f) {
                        var i = e("./DataReader");
                        function s(n) {
                            i.call(this, n);
                            for(var h = 0; h < this.data.length; h++)n[h] = 255 & n[h];
                        }
                        e("../utils").inherits(s, i), s.prototype.byteAt = function(n) {
                            return this.data[this.zero + n];
                        }, s.prototype.lastIndexOfSignature = function(n) {
                            for(var h = n.charCodeAt(0), w = n.charCodeAt(1), E = n.charCodeAt(2), k = n.charCodeAt(3), x = this.length - 4; 0 <= x; --x)if (this.data[x] === h && this.data[x + 1] === w && this.data[x + 2] === E && this.data[x + 3] === k) return x - this.zero;
                            return -1;
                        }, s.prototype.readAndCheckSignature = function(n) {
                            var h = n.charCodeAt(0), w = n.charCodeAt(1), E = n.charCodeAt(2), k = n.charCodeAt(3), x = this.readData(4);
                            return h === x[0] && w === x[1] && E === x[2] && k === x[3];
                        }, s.prototype.readData = function(n) {
                            if (this.checkOffset(n), n === 0) return [];
                            var h = this.data.slice(this.zero + this.index, this.zero + this.index + n);
                            return this.index += n, h;
                        }, g.exports = s;
                    },
                    {
                        "../utils": 32,
                        "./DataReader": 18
                    }
                ],
                18: [
                    function(e, g, f) {
                        var i = e("../utils");
                        function s(n) {
                            this.data = n, this.length = n.length, this.index = 0, this.zero = 0;
                        }
                        s.prototype = {
                            checkOffset: function(n) {
                                this.checkIndex(this.index + n);
                            },
                            checkIndex: function(n) {
                                if (this.length < this.zero + n || n < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + n + "). Corrupted zip ?");
                            },
                            setIndex: function(n) {
                                this.checkIndex(n), this.index = n;
                            },
                            skip: function(n) {
                                this.setIndex(this.index + n);
                            },
                            byteAt: function() {},
                            readInt: function(n) {
                                var h, w = 0;
                                for(this.checkOffset(n), h = this.index + n - 1; h >= this.index; h--)w = (w << 8) + this.byteAt(h);
                                return this.index += n, w;
                            },
                            readString: function(n) {
                                return i.transformTo("string", this.readData(n));
                            },
                            readData: function() {},
                            lastIndexOfSignature: function() {},
                            readAndCheckSignature: function() {},
                            readDate: function() {
                                var n = this.readInt(4);
                                return new Date(Date.UTC(1980 + (n >> 25 & 127), (n >> 21 & 15) - 1, n >> 16 & 31, n >> 11 & 31, n >> 5 & 63, (31 & n) << 1));
                            }
                        }, g.exports = s;
                    },
                    {
                        "../utils": 32
                    }
                ],
                19: [
                    function(e, g, f) {
                        var i = e("./Uint8ArrayReader");
                        function s(n) {
                            i.call(this, n);
                        }
                        e("../utils").inherits(s, i), s.prototype.readData = function(n) {
                            this.checkOffset(n);
                            var h = this.data.slice(this.zero + this.index, this.zero + this.index + n);
                            return this.index += n, h;
                        }, g.exports = s;
                    },
                    {
                        "../utils": 32,
                        "./Uint8ArrayReader": 21
                    }
                ],
                20: [
                    function(e, g, f) {
                        var i = e("./DataReader");
                        function s(n) {
                            i.call(this, n);
                        }
                        e("../utils").inherits(s, i), s.prototype.byteAt = function(n) {
                            return this.data.charCodeAt(this.zero + n);
                        }, s.prototype.lastIndexOfSignature = function(n) {
                            return this.data.lastIndexOf(n) - this.zero;
                        }, s.prototype.readAndCheckSignature = function(n) {
                            return n === this.readData(4);
                        }, s.prototype.readData = function(n) {
                            this.checkOffset(n);
                            var h = this.data.slice(this.zero + this.index, this.zero + this.index + n);
                            return this.index += n, h;
                        }, g.exports = s;
                    },
                    {
                        "../utils": 32,
                        "./DataReader": 18
                    }
                ],
                21: [
                    function(e, g, f) {
                        var i = e("./ArrayReader");
                        function s(n) {
                            i.call(this, n);
                        }
                        e("../utils").inherits(s, i), s.prototype.readData = function(n) {
                            if (this.checkOffset(n), n === 0) return new Uint8Array(0);
                            var h = this.data.subarray(this.zero + this.index, this.zero + this.index + n);
                            return this.index += n, h;
                        }, g.exports = s;
                    },
                    {
                        "../utils": 32,
                        "./ArrayReader": 17
                    }
                ],
                22: [
                    function(e, g, f) {
                        var i = e("../utils"), s = e("../support"), n = e("./ArrayReader"), h = e("./StringReader"), w = e("./NodeBufferReader"), E = e("./Uint8ArrayReader");
                        g.exports = function(k) {
                            var x = i.getTypeOf(k);
                            return i.checkSupport(x), x !== "string" || s.uint8array ? x === "nodebuffer" ? new w(k) : s.uint8array ? new E(i.transformTo("uint8array", k)) : new n(i.transformTo("array", k)) : new h(k);
                        };
                    },
                    {
                        "../support": 30,
                        "../utils": 32,
                        "./ArrayReader": 17,
                        "./NodeBufferReader": 19,
                        "./StringReader": 20,
                        "./Uint8ArrayReader": 21
                    }
                ],
                23: [
                    function(e, g, f) {
                        f.LOCAL_FILE_HEADER = "PK", f.CENTRAL_FILE_HEADER = "PK", f.CENTRAL_DIRECTORY_END = "PK", f.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", f.ZIP64_CENTRAL_DIRECTORY_END = "PK", f.DATA_DESCRIPTOR = "PK\x07\b";
                    },
                    {}
                ],
                24: [
                    function(e, g, f) {
                        var i = e("./GenericWorker"), s = e("../utils");
                        function n(h) {
                            i.call(this, "ConvertWorker to " + h), this.destType = h;
                        }
                        s.inherits(n, i), n.prototype.processChunk = function(h) {
                            this.push({
                                data: s.transformTo(this.destType, h.data),
                                meta: h.meta
                            });
                        }, g.exports = n;
                    },
                    {
                        "../utils": 32,
                        "./GenericWorker": 28
                    }
                ],
                25: [
                    function(e, g, f) {
                        var i = e("./GenericWorker"), s = e("../crc32");
                        function n() {
                            i.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
                        }
                        e("../utils").inherits(n, i), n.prototype.processChunk = function(h) {
                            this.streamInfo.crc32 = s(h.data, this.streamInfo.crc32 || 0), this.push(h);
                        }, g.exports = n;
                    },
                    {
                        "../crc32": 4,
                        "../utils": 32,
                        "./GenericWorker": 28
                    }
                ],
                26: [
                    function(e, g, f) {
                        var i = e("../utils"), s = e("./GenericWorker");
                        function n(h) {
                            s.call(this, "DataLengthProbe for " + h), this.propName = h, this.withStreamInfo(h, 0);
                        }
                        i.inherits(n, s), n.prototype.processChunk = function(h) {
                            if (h) {
                                var w = this.streamInfo[this.propName] || 0;
                                this.streamInfo[this.propName] = w + h.data.length;
                            }
                            s.prototype.processChunk.call(this, h);
                        }, g.exports = n;
                    },
                    {
                        "../utils": 32,
                        "./GenericWorker": 28
                    }
                ],
                27: [
                    function(e, g, f) {
                        var i = e("../utils"), s = e("./GenericWorker");
                        function n(h) {
                            s.call(this, "DataWorker");
                            var w = this;
                            this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, h.then(function(E) {
                                w.dataIsReady = !0, w.data = E, w.max = E && E.length || 0, w.type = i.getTypeOf(E), w.isPaused || w._tickAndRepeat();
                            }, function(E) {
                                w.error(E);
                            });
                        }
                        i.inherits(n, s), n.prototype.cleanUp = function() {
                            s.prototype.cleanUp.call(this), this.data = null;
                        }, n.prototype.resume = function() {
                            return !!s.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, i.delay(this._tickAndRepeat, [], this)), !0);
                        }, n.prototype._tickAndRepeat = function() {
                            this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (i.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
                        }, n.prototype._tick = function() {
                            if (this.isPaused || this.isFinished) return !1;
                            var h = null, w = Math.min(this.max, this.index + 16384);
                            if (this.index >= this.max) return this.end();
                            switch(this.type){
                                case "string":
                                    h = this.data.substring(this.index, w);
                                    break;
                                case "uint8array":
                                    h = this.data.subarray(this.index, w);
                                    break;
                                case "array":
                                case "nodebuffer":
                                    h = this.data.slice(this.index, w);
                            }
                            return this.index = w, this.push({
                                data: h,
                                meta: {
                                    percent: this.max ? this.index / this.max * 100 : 0
                                }
                            });
                        }, g.exports = n;
                    },
                    {
                        "../utils": 32,
                        "./GenericWorker": 28
                    }
                ],
                28: [
                    function(e, g, f) {
                        function i(s) {
                            this.name = s || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
                                data: [],
                                end: [],
                                error: []
                            }, this.previous = null;
                        }
                        i.prototype = {
                            push: function(s) {
                                this.emit("data", s);
                            },
                            end: function() {
                                if (this.isFinished) return !1;
                                this.flush();
                                try {
                                    this.emit("end"), this.cleanUp(), this.isFinished = !0;
                                } catch (s) {
                                    this.emit("error", s);
                                }
                                return !0;
                            },
                            error: function(s) {
                                return !this.isFinished && (this.isPaused ? this.generatedError = s : (this.isFinished = !0, this.emit("error", s), this.previous && this.previous.error(s), this.cleanUp()), !0);
                            },
                            on: function(s, n) {
                                return this._listeners[s].push(n), this;
                            },
                            cleanUp: function() {
                                this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
                            },
                            emit: function(s, n) {
                                if (this._listeners[s]) for(var h = 0; h < this._listeners[s].length; h++)this._listeners[s][h].call(this, n);
                            },
                            pipe: function(s) {
                                return s.registerPrevious(this);
                            },
                            registerPrevious: function(s) {
                                if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
                                this.streamInfo = s.streamInfo, this.mergeStreamInfo(), this.previous = s;
                                var n = this;
                                return s.on("data", function(h) {
                                    n.processChunk(h);
                                }), s.on("end", function() {
                                    n.end();
                                }), s.on("error", function(h) {
                                    n.error(h);
                                }), this;
                            },
                            pause: function() {
                                return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
                            },
                            resume: function() {
                                if (!this.isPaused || this.isFinished) return !1;
                                var s = this.isPaused = !1;
                                return this.generatedError && (this.error(this.generatedError), s = !0), this.previous && this.previous.resume(), !s;
                            },
                            flush: function() {},
                            processChunk: function(s) {
                                this.push(s);
                            },
                            withStreamInfo: function(s, n) {
                                return this.extraStreamInfo[s] = n, this.mergeStreamInfo(), this;
                            },
                            mergeStreamInfo: function() {
                                for(var s in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo, s) && (this.streamInfo[s] = this.extraStreamInfo[s]);
                            },
                            lock: function() {
                                if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
                                this.isLocked = !0, this.previous && this.previous.lock();
                            },
                            toString: function() {
                                var s = "Worker " + this.name;
                                return this.previous ? this.previous + " -> " + s : s;
                            }
                        }, g.exports = i;
                    },
                    {}
                ],
                29: [
                    function(e, g, f) {
                        var i = e("../utils"), s = e("./ConvertWorker"), n = e("./GenericWorker"), h = e("../base64"), w = e("../support"), E = e("../external"), k = null;
                        if (w.nodestream) try {
                            k = e("../nodejs/NodejsStreamOutputAdapter");
                        } catch  {}
                        function x(_, l) {
                            return new E.Promise(function(v, p) {
                                var y = [], S = _._internalType, T = _._outputType, I = _._mimeType;
                                _.on("data", function(j, P) {
                                    y.push(j), l && l(P);
                                }).on("error", function(j) {
                                    y = [], p(j);
                                }).on("end", function() {
                                    try {
                                        var j = function(P, G, D) {
                                            switch(P){
                                                case "blob":
                                                    return i.newBlob(i.transformTo("arraybuffer", G), D);
                                                case "base64":
                                                    return h.encode(G);
                                                default:
                                                    return i.transformTo(P, G);
                                            }
                                        }(T, function(P, G) {
                                            var D, J = 0, et = null, A = 0;
                                            for(D = 0; D < G.length; D++)A += G[D].length;
                                            switch(P){
                                                case "string":
                                                    return G.join("");
                                                case "array":
                                                    return Array.prototype.concat.apply([], G);
                                                case "uint8array":
                                                    for(et = new Uint8Array(A), D = 0; D < G.length; D++)et.set(G[D], J), J += G[D].length;
                                                    return et;
                                                case "nodebuffer":
                                                    return Buffer.concat(G);
                                                default:
                                                    throw new Error("concat : unsupported type '" + P + "'");
                                            }
                                        }(S, y), I);
                                        v(j);
                                    } catch (P) {
                                        p(P);
                                    }
                                    y = [];
                                }).resume();
                            });
                        }
                        function u(_, l, v) {
                            var p = l;
                            switch(l){
                                case "blob":
                                case "arraybuffer":
                                    p = "uint8array";
                                    break;
                                case "base64":
                                    p = "string";
                            }
                            try {
                                this._internalType = p, this._outputType = l, this._mimeType = v, i.checkSupport(p), this._worker = _.pipe(new s(p)), _.lock();
                            } catch (y) {
                                this._worker = new n("error"), this._worker.error(y);
                            }
                        }
                        u.prototype = {
                            accumulate: function(_) {
                                return x(this, _);
                            },
                            on: function(_, l) {
                                var v = this;
                                return _ === "data" ? this._worker.on(_, function(p) {
                                    l.call(v, p.data, p.meta);
                                }) : this._worker.on(_, function() {
                                    i.delay(l, arguments, v);
                                }), this;
                            },
                            resume: function() {
                                return i.delay(this._worker.resume, [], this._worker), this;
                            },
                            pause: function() {
                                return this._worker.pause(), this;
                            },
                            toNodejsStream: function(_) {
                                if (i.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
                                return new k(this, {
                                    objectMode: this._outputType !== "nodebuffer"
                                }, _);
                            }
                        }, g.exports = u;
                    },
                    {
                        "../base64": 1,
                        "../external": 6,
                        "../nodejs/NodejsStreamOutputAdapter": 13,
                        "../support": 30,
                        "../utils": 32,
                        "./ConvertWorker": 24,
                        "./GenericWorker": 28
                    }
                ],
                30: [
                    function(e, g, f) {
                        if (f.base64 = !0, f.array = !0, f.string = !0, f.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", f.nodebuffer = typeof Buffer < "u", f.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") f.blob = !1;
                        else {
                            var i = new ArrayBuffer(0);
                            try {
                                f.blob = new Blob([
                                    i
                                ], {
                                    type: "application/zip"
                                }).size === 0;
                            } catch  {
                                try {
                                    var s = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                                    s.append(i), f.blob = s.getBlob("application/zip").size === 0;
                                } catch  {
                                    f.blob = !1;
                                }
                            }
                        }
                        try {
                            f.nodestream = !!e("readable-stream").Readable;
                        } catch  {
                            f.nodestream = !1;
                        }
                    },
                    {
                        "readable-stream": 16
                    }
                ],
                31: [
                    function(e, g, f) {
                        for(var i = e("./utils"), s = e("./support"), n = e("./nodejsUtils"), h = e("./stream/GenericWorker"), w = new Array(256), E = 0; E < 256; E++)w[E] = 252 <= E ? 6 : 248 <= E ? 5 : 240 <= E ? 4 : 224 <= E ? 3 : 192 <= E ? 2 : 1;
                        w[254] = w[254] = 1;
                        function k() {
                            h.call(this, "utf-8 decode"), this.leftOver = null;
                        }
                        function x() {
                            h.call(this, "utf-8 encode");
                        }
                        f.utf8encode = function(u) {
                            return s.nodebuffer ? n.newBufferFrom(u, "utf-8") : function(_) {
                                var l, v, p, y, S, T = _.length, I = 0;
                                for(y = 0; y < T; y++)(64512 & (v = _.charCodeAt(y))) == 55296 && y + 1 < T && (64512 & (p = _.charCodeAt(y + 1))) == 56320 && (v = 65536 + (v - 55296 << 10) + (p - 56320), y++), I += v < 128 ? 1 : v < 2048 ? 2 : v < 65536 ? 3 : 4;
                                for(l = s.uint8array ? new Uint8Array(I) : new Array(I), y = S = 0; S < I; y++)(64512 & (v = _.charCodeAt(y))) == 55296 && y + 1 < T && (64512 & (p = _.charCodeAt(y + 1))) == 56320 && (v = 65536 + (v - 55296 << 10) + (p - 56320), y++), v < 128 ? l[S++] = v : (v < 2048 ? l[S++] = 192 | v >>> 6 : (v < 65536 ? l[S++] = 224 | v >>> 12 : (l[S++] = 240 | v >>> 18, l[S++] = 128 | v >>> 12 & 63), l[S++] = 128 | v >>> 6 & 63), l[S++] = 128 | 63 & v);
                                return l;
                            }(u);
                        }, f.utf8decode = function(u) {
                            return s.nodebuffer ? i.transformTo("nodebuffer", u).toString("utf-8") : function(_) {
                                var l, v, p, y, S = _.length, T = new Array(2 * S);
                                for(l = v = 0; l < S;)if ((p = _[l++]) < 128) T[v++] = p;
                                else if (4 < (y = w[p])) T[v++] = 65533, l += y - 1;
                                else {
                                    for(p &= y === 2 ? 31 : y === 3 ? 15 : 7; 1 < y && l < S;)p = p << 6 | 63 & _[l++], y--;
                                    1 < y ? T[v++] = 65533 : p < 65536 ? T[v++] = p : (p -= 65536, T[v++] = 55296 | p >> 10 & 1023, T[v++] = 56320 | 1023 & p);
                                }
                                return T.length !== v && (T.subarray ? T = T.subarray(0, v) : T.length = v), i.applyFromCharCode(T);
                            }(u = i.transformTo(s.uint8array ? "uint8array" : "array", u));
                        }, i.inherits(k, h), k.prototype.processChunk = function(u) {
                            var _ = i.transformTo(s.uint8array ? "uint8array" : "array", u.data);
                            if (this.leftOver && this.leftOver.length) {
                                if (s.uint8array) {
                                    var l = _;
                                    (_ = new Uint8Array(l.length + this.leftOver.length)).set(this.leftOver, 0), _.set(l, this.leftOver.length);
                                } else _ = this.leftOver.concat(_);
                                this.leftOver = null;
                            }
                            var v = function(y, S) {
                                var T;
                                for((S = S || y.length) > y.length && (S = y.length), T = S - 1; 0 <= T && (192 & y[T]) == 128;)T--;
                                return T < 0 || T === 0 ? S : T + w[y[T]] > S ? T : S;
                            }(_), p = _;
                            v !== _.length && (s.uint8array ? (p = _.subarray(0, v), this.leftOver = _.subarray(v, _.length)) : (p = _.slice(0, v), this.leftOver = _.slice(v, _.length))), this.push({
                                data: f.utf8decode(p),
                                meta: u.meta
                            });
                        }, k.prototype.flush = function() {
                            this.leftOver && this.leftOver.length && (this.push({
                                data: f.utf8decode(this.leftOver),
                                meta: {}
                            }), this.leftOver = null);
                        }, f.Utf8DecodeWorker = k, i.inherits(x, h), x.prototype.processChunk = function(u) {
                            this.push({
                                data: f.utf8encode(u.data),
                                meta: u.meta
                            });
                        }, f.Utf8EncodeWorker = x;
                    },
                    {
                        "./nodejsUtils": 14,
                        "./stream/GenericWorker": 28,
                        "./support": 30,
                        "./utils": 32
                    }
                ],
                32: [
                    function(e, g, f) {
                        var i = e("./support"), s = e("./base64"), n = e("./nodejsUtils"), h = e("./external");
                        function w(l) {
                            return l;
                        }
                        function E(l, v) {
                            for(var p = 0; p < l.length; ++p)v[p] = 255 & l.charCodeAt(p);
                            return v;
                        }
                        e("setimmediate"), f.newBlob = function(l, v) {
                            f.checkSupport("blob");
                            try {
                                return new Blob([
                                    l
                                ], {
                                    type: v
                                });
                            } catch  {
                                try {
                                    var p = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                                    return p.append(l), p.getBlob(v);
                                } catch  {
                                    throw new Error("Bug : can't construct the Blob.");
                                }
                            }
                        };
                        var k = {
                            stringifyByChunk: function(l, v, p) {
                                var y = [], S = 0, T = l.length;
                                if (T <= p) return String.fromCharCode.apply(null, l);
                                for(; S < T;)v === "array" || v === "nodebuffer" ? y.push(String.fromCharCode.apply(null, l.slice(S, Math.min(S + p, T)))) : y.push(String.fromCharCode.apply(null, l.subarray(S, Math.min(S + p, T)))), S += p;
                                return y.join("");
                            },
                            stringifyByChar: function(l) {
                                for(var v = "", p = 0; p < l.length; p++)v += String.fromCharCode(l[p]);
                                return v;
                            },
                            applyCanBeUsed: {
                                uint8array: function() {
                                    try {
                                        return i.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
                                    } catch  {
                                        return !1;
                                    }
                                }(),
                                nodebuffer: function() {
                                    try {
                                        return i.nodebuffer && String.fromCharCode.apply(null, n.allocBuffer(1)).length === 1;
                                    } catch  {
                                        return !1;
                                    }
                                }()
                            }
                        };
                        function x(l) {
                            var v = 65536, p = f.getTypeOf(l), y = !0;
                            if (p === "uint8array" ? y = k.applyCanBeUsed.uint8array : p === "nodebuffer" && (y = k.applyCanBeUsed.nodebuffer), y) for(; 1 < v;)try {
                                return k.stringifyByChunk(l, p, v);
                            } catch  {
                                v = Math.floor(v / 2);
                            }
                            return k.stringifyByChar(l);
                        }
                        function u(l, v) {
                            for(var p = 0; p < l.length; p++)v[p] = l[p];
                            return v;
                        }
                        f.applyFromCharCode = x;
                        var _ = {};
                        _.string = {
                            string: w,
                            array: function(l) {
                                return E(l, new Array(l.length));
                            },
                            arraybuffer: function(l) {
                                return _.string.uint8array(l).buffer;
                            },
                            uint8array: function(l) {
                                return E(l, new Uint8Array(l.length));
                            },
                            nodebuffer: function(l) {
                                return E(l, n.allocBuffer(l.length));
                            }
                        }, _.array = {
                            string: x,
                            array: w,
                            arraybuffer: function(l) {
                                return new Uint8Array(l).buffer;
                            },
                            uint8array: function(l) {
                                return new Uint8Array(l);
                            },
                            nodebuffer: function(l) {
                                return n.newBufferFrom(l);
                            }
                        }, _.arraybuffer = {
                            string: function(l) {
                                return x(new Uint8Array(l));
                            },
                            array: function(l) {
                                return u(new Uint8Array(l), new Array(l.byteLength));
                            },
                            arraybuffer: w,
                            uint8array: function(l) {
                                return new Uint8Array(l);
                            },
                            nodebuffer: function(l) {
                                return n.newBufferFrom(new Uint8Array(l));
                            }
                        }, _.uint8array = {
                            string: x,
                            array: function(l) {
                                return u(l, new Array(l.length));
                            },
                            arraybuffer: function(l) {
                                return l.buffer;
                            },
                            uint8array: w,
                            nodebuffer: function(l) {
                                return n.newBufferFrom(l);
                            }
                        }, _.nodebuffer = {
                            string: x,
                            array: function(l) {
                                return u(l, new Array(l.length));
                            },
                            arraybuffer: function(l) {
                                return _.nodebuffer.uint8array(l).buffer;
                            },
                            uint8array: function(l) {
                                return u(l, new Uint8Array(l.length));
                            },
                            nodebuffer: w
                        }, f.transformTo = function(l, v) {
                            if (v = v || "", !l) return v;
                            f.checkSupport(l);
                            var p = f.getTypeOf(v);
                            return _[p][l](v);
                        }, f.resolve = function(l) {
                            for(var v = l.split("/"), p = [], y = 0; y < v.length; y++){
                                var S = v[y];
                                S === "." || S === "" && y !== 0 && y !== v.length - 1 || (S === ".." ? p.pop() : p.push(S));
                            }
                            return p.join("/");
                        }, f.getTypeOf = function(l) {
                            return typeof l == "string" ? "string" : Object.prototype.toString.call(l) === "[object Array]" ? "array" : i.nodebuffer && n.isBuffer(l) ? "nodebuffer" : i.uint8array && l instanceof Uint8Array ? "uint8array" : i.arraybuffer && l instanceof ArrayBuffer ? "arraybuffer" : void 0;
                        }, f.checkSupport = function(l) {
                            if (!i[l.toLowerCase()]) throw new Error(l + " is not supported by this platform");
                        }, f.MAX_VALUE_16BITS = 65535, f.MAX_VALUE_32BITS = -1, f.pretty = function(l) {
                            var v, p, y = "";
                            for(p = 0; p < (l || "").length; p++)y += "\\x" + ((v = l.charCodeAt(p)) < 16 ? "0" : "") + v.toString(16).toUpperCase();
                            return y;
                        }, f.delay = function(l, v, p) {
                            setImmediate(function() {
                                l.apply(p || null, v || []);
                            });
                        }, f.inherits = function(l, v) {
                            function p() {}
                            p.prototype = v.prototype, l.prototype = new p;
                        }, f.extend = function() {
                            var l, v, p = {};
                            for(l = 0; l < arguments.length; l++)for(v in arguments[l])Object.prototype.hasOwnProperty.call(arguments[l], v) && p[v] === void 0 && (p[v] = arguments[l][v]);
                            return p;
                        }, f.prepareContent = function(l, v, p, y, S) {
                            return h.Promise.resolve(v).then(function(T) {
                                return i.blob && (T instanceof Blob || [
                                    "[object File]",
                                    "[object Blob]"
                                ].indexOf(Object.prototype.toString.call(T)) !== -1) && typeof FileReader < "u" ? new h.Promise(function(I, j) {
                                    var P = new FileReader;
                                    P.onload = function(G) {
                                        I(G.target.result);
                                    }, P.onerror = function(G) {
                                        j(G.target.error);
                                    }, P.readAsArrayBuffer(T);
                                }) : T;
                            }).then(function(T) {
                                var I = f.getTypeOf(T);
                                return I ? (I === "arraybuffer" ? T = f.transformTo("uint8array", T) : I === "string" && (S ? T = s.decode(T) : p && y !== !0 && (T = function(j) {
                                    return E(j, i.uint8array ? new Uint8Array(j.length) : new Array(j.length));
                                }(T))), T) : h.Promise.reject(new Error("Can't read the data of '" + l + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
                            });
                        };
                    },
                    {
                        "./base64": 1,
                        "./external": 6,
                        "./nodejsUtils": 14,
                        "./support": 30,
                        setimmediate: 54
                    }
                ],
                33: [
                    function(e, g, f) {
                        var i = e("./reader/readerFor"), s = e("./utils"), n = e("./signature"), h = e("./zipEntry"), w = e("./support");
                        function E(k) {
                            this.files = [], this.loadOptions = k;
                        }
                        E.prototype = {
                            checkSignature: function(k) {
                                if (!this.reader.readAndCheckSignature(k)) {
                                    this.reader.index -= 4;
                                    var x = this.reader.readString(4);
                                    throw new Error("Corrupted zip or bug: unexpected signature (" + s.pretty(x) + ", expected " + s.pretty(k) + ")");
                                }
                            },
                            isSignature: function(k, x) {
                                var u = this.reader.index;
                                this.reader.setIndex(k);
                                var _ = this.reader.readString(4) === x;
                                return this.reader.setIndex(u), _;
                            },
                            readBlockEndOfCentral: function() {
                                this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
                                var k = this.reader.readData(this.zipCommentLength), x = w.uint8array ? "uint8array" : "array", u = s.transformTo(x, k);
                                this.zipComment = this.loadOptions.decodeFileName(u);
                            },
                            readBlockZip64EndOfCentral: function() {
                                this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
                                for(var k, x, u, _ = this.zip64EndOfCentralSize - 44; 0 < _;)k = this.reader.readInt(2), x = this.reader.readInt(4), u = this.reader.readData(x), this.zip64ExtensibleData[k] = {
                                    id: k,
                                    length: x,
                                    value: u
                                };
                            },
                            readBlockZip64EndOfCentralLocator: function() {
                                if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
                            },
                            readLocalFiles: function() {
                                var k, x;
                                for(k = 0; k < this.files.length; k++)x = this.files[k], this.reader.setIndex(x.localHeaderOffset), this.checkSignature(n.LOCAL_FILE_HEADER), x.readLocalPart(this.reader), x.handleUTF8(), x.processAttributes();
                            },
                            readCentralDir: function() {
                                var k;
                                for(this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(n.CENTRAL_FILE_HEADER);)(k = new h({
                                    zip64: this.zip64
                                }, this.loadOptions)).readCentralPart(this.reader), this.files.push(k);
                                if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
                            },
                            readEndOfCentral: function() {
                                var k = this.reader.lastIndexOfSignature(n.CENTRAL_DIRECTORY_END);
                                if (k < 0) throw this.isSignature(0, n.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
                                this.reader.setIndex(k);
                                var x = k;
                                if (this.checkSignature(n.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
                                    if (this.zip64 = !0, (k = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
                                    if (this.reader.setIndex(k), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, n.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
                                    this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
                                }
                                var u = this.centralDirOffset + this.centralDirSize;
                                this.zip64 && (u += 20, u += 12 + this.zip64EndOfCentralSize);
                                var _ = x - u;
                                if (0 < _) this.isSignature(x, n.CENTRAL_FILE_HEADER) || (this.reader.zero = _);
                                else if (_ < 0) throw new Error("Corrupted zip: missing " + Math.abs(_) + " bytes.");
                            },
                            prepareReader: function(k) {
                                this.reader = i(k);
                            },
                            load: function(k) {
                                this.prepareReader(k), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
                            }
                        }, g.exports = E;
                    },
                    {
                        "./reader/readerFor": 22,
                        "./signature": 23,
                        "./support": 30,
                        "./utils": 32,
                        "./zipEntry": 34
                    }
                ],
                34: [
                    function(e, g, f) {
                        var i = e("./reader/readerFor"), s = e("./utils"), n = e("./compressedObject"), h = e("./crc32"), w = e("./utf8"), E = e("./compressions"), k = e("./support");
                        function x(u, _) {
                            this.options = u, this.loadOptions = _;
                        }
                        x.prototype = {
                            isEncrypted: function() {
                                return (1 & this.bitFlag) == 1;
                            },
                            useUTF8: function() {
                                return (2048 & this.bitFlag) == 2048;
                            },
                            readLocalPart: function(u) {
                                var _, l;
                                if (u.skip(22), this.fileNameLength = u.readInt(2), l = u.readInt(2), this.fileName = u.readData(this.fileNameLength), u.skip(l), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
                                if ((_ = function(v) {
                                    for(var p in E)if (Object.prototype.hasOwnProperty.call(E, p) && E[p].magic === v) return E[p];
                                    return null;
                                }(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
                                this.decompressed = new n(this.compressedSize, this.uncompressedSize, this.crc32, _, u.readData(this.compressedSize));
                            },
                            readCentralPart: function(u) {
                                this.versionMadeBy = u.readInt(2), u.skip(2), this.bitFlag = u.readInt(2), this.compressionMethod = u.readString(2), this.date = u.readDate(), this.crc32 = u.readInt(4), this.compressedSize = u.readInt(4), this.uncompressedSize = u.readInt(4);
                                var _ = u.readInt(2);
                                if (this.extraFieldsLength = u.readInt(2), this.fileCommentLength = u.readInt(2), this.diskNumberStart = u.readInt(2), this.internalFileAttributes = u.readInt(2), this.externalFileAttributes = u.readInt(4), this.localHeaderOffset = u.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
                                u.skip(_), this.readExtraFields(u), this.parseZIP64ExtraField(u), this.fileComment = u.readData(this.fileCommentLength);
                            },
                            processAttributes: function() {
                                this.unixPermissions = null, this.dosPermissions = null;
                                var u = this.versionMadeBy >> 8;
                                this.dir = !!(16 & this.externalFileAttributes), u == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), u == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
                            },
                            parseZIP64ExtraField: function() {
                                if (this.extraFields[1]) {
                                    var u = i(this.extraFields[1].value);
                                    this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = u.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = u.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = u.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = u.readInt(4));
                                }
                            },
                            readExtraFields: function(u) {
                                var _, l, v, p = u.index + this.extraFieldsLength;
                                for(this.extraFields || (this.extraFields = {}); u.index + 4 < p;)_ = u.readInt(2), l = u.readInt(2), v = u.readData(l), this.extraFields[_] = {
                                    id: _,
                                    length: l,
                                    value: v
                                };
                                u.setIndex(p);
                            },
                            handleUTF8: function() {
                                var u = k.uint8array ? "uint8array" : "array";
                                if (this.useUTF8()) this.fileNameStr = w.utf8decode(this.fileName), this.fileCommentStr = w.utf8decode(this.fileComment);
                                else {
                                    var _ = this.findExtraFieldUnicodePath();
                                    if (_ !== null) this.fileNameStr = _;
                                    else {
                                        var l = s.transformTo(u, this.fileName);
                                        this.fileNameStr = this.loadOptions.decodeFileName(l);
                                    }
                                    var v = this.findExtraFieldUnicodeComment();
                                    if (v !== null) this.fileCommentStr = v;
                                    else {
                                        var p = s.transformTo(u, this.fileComment);
                                        this.fileCommentStr = this.loadOptions.decodeFileName(p);
                                    }
                                }
                            },
                            findExtraFieldUnicodePath: function() {
                                var u = this.extraFields[28789];
                                if (u) {
                                    var _ = i(u.value);
                                    return _.readInt(1) !== 1 || h(this.fileName) !== _.readInt(4) ? null : w.utf8decode(_.readData(u.length - 5));
                                }
                                return null;
                            },
                            findExtraFieldUnicodeComment: function() {
                                var u = this.extraFields[25461];
                                if (u) {
                                    var _ = i(u.value);
                                    return _.readInt(1) !== 1 || h(this.fileComment) !== _.readInt(4) ? null : w.utf8decode(_.readData(u.length - 5));
                                }
                                return null;
                            }
                        }, g.exports = x;
                    },
                    {
                        "./compressedObject": 2,
                        "./compressions": 3,
                        "./crc32": 4,
                        "./reader/readerFor": 22,
                        "./support": 30,
                        "./utf8": 31,
                        "./utils": 32
                    }
                ],
                35: [
                    function(e, g, f) {
                        function i(_, l, v) {
                            this.name = _, this.dir = v.dir, this.date = v.date, this.comment = v.comment, this.unixPermissions = v.unixPermissions, this.dosPermissions = v.dosPermissions, this._data = l, this._dataBinary = v.binary, this.options = {
                                compression: v.compression,
                                compressionOptions: v.compressionOptions
                            };
                        }
                        var s = e("./stream/StreamHelper"), n = e("./stream/DataWorker"), h = e("./utf8"), w = e("./compressedObject"), E = e("./stream/GenericWorker");
                        i.prototype = {
                            internalStream: function(_) {
                                var l = null, v = "string";
                                try {
                                    if (!_) throw new Error("No output type specified.");
                                    var p = (v = _.toLowerCase()) === "string" || v === "text";
                                    v !== "binarystring" && v !== "text" || (v = "string"), l = this._decompressWorker();
                                    var y = !this._dataBinary;
                                    y && !p && (l = l.pipe(new h.Utf8EncodeWorker)), !y && p && (l = l.pipe(new h.Utf8DecodeWorker));
                                } catch (S) {
                                    (l = new E("error")).error(S);
                                }
                                return new s(l, v, "");
                            },
                            async: function(_, l) {
                                return this.internalStream(_).accumulate(l);
                            },
                            nodeStream: function(_, l) {
                                return this.internalStream(_ || "nodebuffer").toNodejsStream(l);
                            },
                            _compressWorker: function(_, l) {
                                if (this._data instanceof w && this._data.compression.magic === _.magic) return this._data.getCompressedWorker();
                                var v = this._decompressWorker();
                                return this._dataBinary || (v = v.pipe(new h.Utf8EncodeWorker)), w.createWorkerFrom(v, _, l);
                            },
                            _decompressWorker: function() {
                                return this._data instanceof w ? this._data.getContentWorker() : this._data instanceof E ? this._data : new n(this._data);
                            }
                        };
                        for(var k = [
                            "asText",
                            "asBinary",
                            "asNodeBuffer",
                            "asUint8Array",
                            "asArrayBuffer"
                        ], x = function() {
                            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
                        }, u = 0; u < k.length; u++)i.prototype[k[u]] = x;
                        g.exports = i;
                    },
                    {
                        "./compressedObject": 2,
                        "./stream/DataWorker": 27,
                        "./stream/GenericWorker": 28,
                        "./stream/StreamHelper": 29,
                        "./utf8": 31
                    }
                ],
                36: [
                    function(e, g, f) {
                        (function(i) {
                            var s, n, h = i.MutationObserver || i.WebKitMutationObserver;
                            if (h) {
                                var w = 0, E = new h(_), k = i.document.createTextNode("");
                                E.observe(k, {
                                    characterData: !0
                                }), s = function() {
                                    k.data = w = ++w % 2;
                                };
                            } else if (i.setImmediate || i.MessageChannel === void 0) s = "document" in i && "onreadystatechange" in i.document.createElement("script") ? function() {
                                var l = i.document.createElement("script");
                                l.onreadystatechange = function() {
                                    _(), l.onreadystatechange = null, l.parentNode.removeChild(l), l = null;
                                }, i.document.documentElement.appendChild(l);
                            } : function() {
                                setTimeout(_, 0);
                            };
                            else {
                                var x = new i.MessageChannel;
                                x.port1.onmessage = _, s = function() {
                                    x.port2.postMessage(0);
                                };
                            }
                            var u = [];
                            function _() {
                                var l, v;
                                n = !0;
                                for(var p = u.length; p;){
                                    for(v = u, u = [], l = -1; ++l < p;)v[l]();
                                    p = u.length;
                                }
                                n = !1;
                            }
                            g.exports = function(l) {
                                u.push(l) !== 1 || n || s();
                            };
                        }).call(this, typeof he < "u" ? he : typeof self < "u" ? self : typeof window < "u" ? window : {});
                    },
                    {}
                ],
                37: [
                    function(e, g, f) {
                        var i = e("immediate");
                        function s() {}
                        var n = {}, h = [
                            "REJECTED"
                        ], w = [
                            "FULFILLED"
                        ], E = [
                            "PENDING"
                        ];
                        function k(p) {
                            if (typeof p != "function") throw new TypeError("resolver must be a function");
                            this.state = E, this.queue = [], this.outcome = void 0, p !== s && l(this, p);
                        }
                        function x(p, y, S) {
                            this.promise = p, typeof y == "function" && (this.onFulfilled = y, this.callFulfilled = this.otherCallFulfilled), typeof S == "function" && (this.onRejected = S, this.callRejected = this.otherCallRejected);
                        }
                        function u(p, y, S) {
                            i(function() {
                                var T;
                                try {
                                    T = y(S);
                                } catch (I) {
                                    return n.reject(p, I);
                                }
                                T === p ? n.reject(p, new TypeError("Cannot resolve promise with itself")) : n.resolve(p, T);
                            });
                        }
                        function _(p) {
                            var y = p && p.then;
                            if (p && (typeof p == "object" || typeof p == "function") && typeof y == "function") return function() {
                                y.apply(p, arguments);
                            };
                        }
                        function l(p, y) {
                            var S = !1;
                            function T(P) {
                                S || (S = !0, n.reject(p, P));
                            }
                            function I(P) {
                                S || (S = !0, n.resolve(p, P));
                            }
                            var j = v(function() {
                                y(I, T);
                            });
                            j.status === "error" && T(j.value);
                        }
                        function v(p, y) {
                            var S = {};
                            try {
                                S.value = p(y), S.status = "success";
                            } catch (T) {
                                S.status = "error", S.value = T;
                            }
                            return S;
                        }
                        (g.exports = k).prototype.finally = function(p) {
                            if (typeof p != "function") return this;
                            var y = this.constructor;
                            return this.then(function(S) {
                                return y.resolve(p()).then(function() {
                                    return S;
                                });
                            }, function(S) {
                                return y.resolve(p()).then(function() {
                                    throw S;
                                });
                            });
                        }, k.prototype.catch = function(p) {
                            return this.then(null, p);
                        }, k.prototype.then = function(p, y) {
                            if (typeof p != "function" && this.state === w || typeof y != "function" && this.state === h) return this;
                            var S = new this.constructor(s);
                            return this.state !== E ? u(S, this.state === w ? p : y, this.outcome) : this.queue.push(new x(S, p, y)), S;
                        }, x.prototype.callFulfilled = function(p) {
                            n.resolve(this.promise, p);
                        }, x.prototype.otherCallFulfilled = function(p) {
                            u(this.promise, this.onFulfilled, p);
                        }, x.prototype.callRejected = function(p) {
                            n.reject(this.promise, p);
                        }, x.prototype.otherCallRejected = function(p) {
                            u(this.promise, this.onRejected, p);
                        }, n.resolve = function(p, y) {
                            var S = v(_, y);
                            if (S.status === "error") return n.reject(p, S.value);
                            var T = S.value;
                            if (T) l(p, T);
                            else {
                                p.state = w, p.outcome = y;
                                for(var I = -1, j = p.queue.length; ++I < j;)p.queue[I].callFulfilled(y);
                            }
                            return p;
                        }, n.reject = function(p, y) {
                            p.state = h, p.outcome = y;
                            for(var S = -1, T = p.queue.length; ++S < T;)p.queue[S].callRejected(y);
                            return p;
                        }, k.resolve = function(p) {
                            return p instanceof this ? p : n.resolve(new this(s), p);
                        }, k.reject = function(p) {
                            var y = new this(s);
                            return n.reject(y, p);
                        }, k.all = function(p) {
                            var y = this;
                            if (Object.prototype.toString.call(p) !== "[object Array]") return this.reject(new TypeError("must be an array"));
                            var S = p.length, T = !1;
                            if (!S) return this.resolve([]);
                            for(var I = new Array(S), j = 0, P = -1, G = new this(s); ++P < S;)D(p[P], P);
                            return G;
                            function D(J, et) {
                                y.resolve(J).then(function(A) {
                                    I[et] = A, ++j !== S || T || (T = !0, n.resolve(G, I));
                                }, function(A) {
                                    T || (T = !0, n.reject(G, A));
                                });
                            }
                        }, k.race = function(p) {
                            var y = this;
                            if (Object.prototype.toString.call(p) !== "[object Array]") return this.reject(new TypeError("must be an array"));
                            var S = p.length, T = !1;
                            if (!S) return this.resolve([]);
                            for(var I = -1, j = new this(s); ++I < S;)P = p[I], y.resolve(P).then(function(G) {
                                T || (T = !0, n.resolve(j, G));
                            }, function(G) {
                                T || (T = !0, n.reject(j, G));
                            });
                            var P;
                            return j;
                        };
                    },
                    {
                        immediate: 36
                    }
                ],
                38: [
                    function(e, g, f) {
                        var i = {};
                        (0, e("./lib/utils/common").assign)(i, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), g.exports = i;
                    },
                    {
                        "./lib/deflate": 39,
                        "./lib/inflate": 40,
                        "./lib/utils/common": 41,
                        "./lib/zlib/constants": 44
                    }
                ],
                39: [
                    function(e, g, f) {
                        var i = e("./zlib/deflate"), s = e("./utils/common"), n = e("./utils/strings"), h = e("./zlib/messages"), w = e("./zlib/zstream"), E = Object.prototype.toString, k = 0, x = -1, u = 0, _ = 8;
                        function l(p) {
                            if (!(this instanceof l)) return new l(p);
                            this.options = s.assign({
                                level: x,
                                method: _,
                                chunkSize: 16384,
                                windowBits: 15,
                                memLevel: 8,
                                strategy: u,
                                to: ""
                            }, p || {});
                            var y = this.options;
                            y.raw && 0 < y.windowBits ? y.windowBits = -y.windowBits : y.gzip && 0 < y.windowBits && y.windowBits < 16 && (y.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new w, this.strm.avail_out = 0;
                            var S = i.deflateInit2(this.strm, y.level, y.method, y.windowBits, y.memLevel, y.strategy);
                            if (S !== k) throw new Error(h[S]);
                            if (y.header && i.deflateSetHeader(this.strm, y.header), y.dictionary) {
                                var T;
                                if (T = typeof y.dictionary == "string" ? n.string2buf(y.dictionary) : E.call(y.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(y.dictionary) : y.dictionary, (S = i.deflateSetDictionary(this.strm, T)) !== k) throw new Error(h[S]);
                                this._dict_set = !0;
                            }
                        }
                        function v(p, y) {
                            var S = new l(y);
                            if (S.push(p, !0), S.err) throw S.msg || h[S.err];
                            return S.result;
                        }
                        l.prototype.push = function(p, y) {
                            var S, T, I = this.strm, j = this.options.chunkSize;
                            if (this.ended) return !1;
                            T = y === ~~y ? y : y === !0 ? 4 : 0, typeof p == "string" ? I.input = n.string2buf(p) : E.call(p) === "[object ArrayBuffer]" ? I.input = new Uint8Array(p) : I.input = p, I.next_in = 0, I.avail_in = I.input.length;
                            do {
                                if (I.avail_out === 0 && (I.output = new s.Buf8(j), I.next_out = 0, I.avail_out = j), (S = i.deflate(I, T)) !== 1 && S !== k) return this.onEnd(S), !(this.ended = !0);
                                I.avail_out !== 0 && (I.avail_in !== 0 || T !== 4 && T !== 2) || (this.options.to === "string" ? this.onData(n.buf2binstring(s.shrinkBuf(I.output, I.next_out))) : this.onData(s.shrinkBuf(I.output, I.next_out)));
                            }while ((0 < I.avail_in || I.avail_out === 0) && S !== 1);
                            return T === 4 ? (S = i.deflateEnd(this.strm), this.onEnd(S), this.ended = !0, S === k) : T !== 2 || (this.onEnd(k), !(I.avail_out = 0));
                        }, l.prototype.onData = function(p) {
                            this.chunks.push(p);
                        }, l.prototype.onEnd = function(p) {
                            p === k && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = p, this.msg = this.strm.msg;
                        }, f.Deflate = l, f.deflate = v, f.deflateRaw = function(p, y) {
                            return (y = y || {}).raw = !0, v(p, y);
                        }, f.gzip = function(p, y) {
                            return (y = y || {}).gzip = !0, v(p, y);
                        };
                    },
                    {
                        "./utils/common": 41,
                        "./utils/strings": 42,
                        "./zlib/deflate": 46,
                        "./zlib/messages": 51,
                        "./zlib/zstream": 53
                    }
                ],
                40: [
                    function(e, g, f) {
                        var i = e("./zlib/inflate"), s = e("./utils/common"), n = e("./utils/strings"), h = e("./zlib/constants"), w = e("./zlib/messages"), E = e("./zlib/zstream"), k = e("./zlib/gzheader"), x = Object.prototype.toString;
                        function u(l) {
                            if (!(this instanceof u)) return new u(l);
                            this.options = s.assign({
                                chunkSize: 16384,
                                windowBits: 0,
                                to: ""
                            }, l || {});
                            var v = this.options;
                            v.raw && 0 <= v.windowBits && v.windowBits < 16 && (v.windowBits = -v.windowBits, v.windowBits === 0 && (v.windowBits = -15)), !(0 <= v.windowBits && v.windowBits < 16) || l && l.windowBits || (v.windowBits += 32), 15 < v.windowBits && v.windowBits < 48 && !(15 & v.windowBits) && (v.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new E, this.strm.avail_out = 0;
                            var p = i.inflateInit2(this.strm, v.windowBits);
                            if (p !== h.Z_OK) throw new Error(w[p]);
                            this.header = new k, i.inflateGetHeader(this.strm, this.header);
                        }
                        function _(l, v) {
                            var p = new u(v);
                            if (p.push(l, !0), p.err) throw p.msg || w[p.err];
                            return p.result;
                        }
                        u.prototype.push = function(l, v) {
                            var p, y, S, T, I, j, P = this.strm, G = this.options.chunkSize, D = this.options.dictionary, J = !1;
                            if (this.ended) return !1;
                            y = v === ~~v ? v : v === !0 ? h.Z_FINISH : h.Z_NO_FLUSH, typeof l == "string" ? P.input = n.binstring2buf(l) : x.call(l) === "[object ArrayBuffer]" ? P.input = new Uint8Array(l) : P.input = l, P.next_in = 0, P.avail_in = P.input.length;
                            do {
                                if (P.avail_out === 0 && (P.output = new s.Buf8(G), P.next_out = 0, P.avail_out = G), (p = i.inflate(P, h.Z_NO_FLUSH)) === h.Z_NEED_DICT && D && (j = typeof D == "string" ? n.string2buf(D) : x.call(D) === "[object ArrayBuffer]" ? new Uint8Array(D) : D, p = i.inflateSetDictionary(this.strm, j)), p === h.Z_BUF_ERROR && J === !0 && (p = h.Z_OK, J = !1), p !== h.Z_STREAM_END && p !== h.Z_OK) return this.onEnd(p), !(this.ended = !0);
                                P.next_out && (P.avail_out !== 0 && p !== h.Z_STREAM_END && (P.avail_in !== 0 || y !== h.Z_FINISH && y !== h.Z_SYNC_FLUSH) || (this.options.to === "string" ? (S = n.utf8border(P.output, P.next_out), T = P.next_out - S, I = n.buf2string(P.output, S), P.next_out = T, P.avail_out = G - T, T && s.arraySet(P.output, P.output, S, T, 0), this.onData(I)) : this.onData(s.shrinkBuf(P.output, P.next_out)))), P.avail_in === 0 && P.avail_out === 0 && (J = !0);
                            }while ((0 < P.avail_in || P.avail_out === 0) && p !== h.Z_STREAM_END);
                            return p === h.Z_STREAM_END && (y = h.Z_FINISH), y === h.Z_FINISH ? (p = i.inflateEnd(this.strm), this.onEnd(p), this.ended = !0, p === h.Z_OK) : y !== h.Z_SYNC_FLUSH || (this.onEnd(h.Z_OK), !(P.avail_out = 0));
                        }, u.prototype.onData = function(l) {
                            this.chunks.push(l);
                        }, u.prototype.onEnd = function(l) {
                            l === h.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = l, this.msg = this.strm.msg;
                        }, f.Inflate = u, f.inflate = _, f.inflateRaw = function(l, v) {
                            return (v = v || {}).raw = !0, _(l, v);
                        }, f.ungzip = _;
                    },
                    {
                        "./utils/common": 41,
                        "./utils/strings": 42,
                        "./zlib/constants": 44,
                        "./zlib/gzheader": 47,
                        "./zlib/inflate": 49,
                        "./zlib/messages": 51,
                        "./zlib/zstream": 53
                    }
                ],
                41: [
                    function(e, g, f) {
                        var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
                        f.assign = function(h) {
                            for(var w = Array.prototype.slice.call(arguments, 1); w.length;){
                                var E = w.shift();
                                if (E) {
                                    if (typeof E != "object") throw new TypeError(E + "must be non-object");
                                    for(var k in E)E.hasOwnProperty(k) && (h[k] = E[k]);
                                }
                            }
                            return h;
                        }, f.shrinkBuf = function(h, w) {
                            return h.length === w ? h : h.subarray ? h.subarray(0, w) : (h.length = w, h);
                        };
                        var s = {
                            arraySet: function(h, w, E, k, x) {
                                if (w.subarray && h.subarray) h.set(w.subarray(E, E + k), x);
                                else for(var u = 0; u < k; u++)h[x + u] = w[E + u];
                            },
                            flattenChunks: function(h) {
                                var w, E, k, x, u, _;
                                for(w = k = 0, E = h.length; w < E; w++)k += h[w].length;
                                for(_ = new Uint8Array(k), w = x = 0, E = h.length; w < E; w++)u = h[w], _.set(u, x), x += u.length;
                                return _;
                            }
                        }, n = {
                            arraySet: function(h, w, E, k, x) {
                                for(var u = 0; u < k; u++)h[x + u] = w[E + u];
                            },
                            flattenChunks: function(h) {
                                return [].concat.apply([], h);
                            }
                        };
                        f.setTyped = function(h) {
                            h ? (f.Buf8 = Uint8Array, f.Buf16 = Uint16Array, f.Buf32 = Int32Array, f.assign(f, s)) : (f.Buf8 = Array, f.Buf16 = Array, f.Buf32 = Array, f.assign(f, n));
                        }, f.setTyped(i);
                    },
                    {}
                ],
                42: [
                    function(e, g, f) {
                        var i = e("./common"), s = !0, n = !0;
                        try {
                            String.fromCharCode.apply(null, [
                                0
                            ]);
                        } catch  {
                            s = !1;
                        }
                        try {
                            String.fromCharCode.apply(null, new Uint8Array(1));
                        } catch  {
                            n = !1;
                        }
                        for(var h = new i.Buf8(256), w = 0; w < 256; w++)h[w] = 252 <= w ? 6 : 248 <= w ? 5 : 240 <= w ? 4 : 224 <= w ? 3 : 192 <= w ? 2 : 1;
                        function E(k, x) {
                            if (x < 65537 && (k.subarray && n || !k.subarray && s)) return String.fromCharCode.apply(null, i.shrinkBuf(k, x));
                            for(var u = "", _ = 0; _ < x; _++)u += String.fromCharCode(k[_]);
                            return u;
                        }
                        h[254] = h[254] = 1, f.string2buf = function(k) {
                            var x, u, _, l, v, p = k.length, y = 0;
                            for(l = 0; l < p; l++)(64512 & (u = k.charCodeAt(l))) == 55296 && l + 1 < p && (64512 & (_ = k.charCodeAt(l + 1))) == 56320 && (u = 65536 + (u - 55296 << 10) + (_ - 56320), l++), y += u < 128 ? 1 : u < 2048 ? 2 : u < 65536 ? 3 : 4;
                            for(x = new i.Buf8(y), l = v = 0; v < y; l++)(64512 & (u = k.charCodeAt(l))) == 55296 && l + 1 < p && (64512 & (_ = k.charCodeAt(l + 1))) == 56320 && (u = 65536 + (u - 55296 << 10) + (_ - 56320), l++), u < 128 ? x[v++] = u : (u < 2048 ? x[v++] = 192 | u >>> 6 : (u < 65536 ? x[v++] = 224 | u >>> 12 : (x[v++] = 240 | u >>> 18, x[v++] = 128 | u >>> 12 & 63), x[v++] = 128 | u >>> 6 & 63), x[v++] = 128 | 63 & u);
                            return x;
                        }, f.buf2binstring = function(k) {
                            return E(k, k.length);
                        }, f.binstring2buf = function(k) {
                            for(var x = new i.Buf8(k.length), u = 0, _ = x.length; u < _; u++)x[u] = k.charCodeAt(u);
                            return x;
                        }, f.buf2string = function(k, x) {
                            var u, _, l, v, p = x || k.length, y = new Array(2 * p);
                            for(u = _ = 0; u < p;)if ((l = k[u++]) < 128) y[_++] = l;
                            else if (4 < (v = h[l])) y[_++] = 65533, u += v - 1;
                            else {
                                for(l &= v === 2 ? 31 : v === 3 ? 15 : 7; 1 < v && u < p;)l = l << 6 | 63 & k[u++], v--;
                                1 < v ? y[_++] = 65533 : l < 65536 ? y[_++] = l : (l -= 65536, y[_++] = 55296 | l >> 10 & 1023, y[_++] = 56320 | 1023 & l);
                            }
                            return E(y, _);
                        }, f.utf8border = function(k, x) {
                            var u;
                            for((x = x || k.length) > k.length && (x = k.length), u = x - 1; 0 <= u && (192 & k[u]) == 128;)u--;
                            return u < 0 || u === 0 ? x : u + h[k[u]] > x ? u : x;
                        };
                    },
                    {
                        "./common": 41
                    }
                ],
                43: [
                    function(e, g, f) {
                        g.exports = function(i, s, n, h) {
                            for(var w = 65535 & i | 0, E = i >>> 16 & 65535 | 0, k = 0; n !== 0;){
                                for(n -= k = 2e3 < n ? 2e3 : n; E = E + (w = w + s[h++] | 0) | 0, --k;);
                                w %= 65521, E %= 65521;
                            }
                            return w | E << 16 | 0;
                        };
                    },
                    {}
                ],
                44: [
                    function(e, g, f) {
                        g.exports = {
                            Z_NO_FLUSH: 0,
                            Z_PARTIAL_FLUSH: 1,
                            Z_SYNC_FLUSH: 2,
                            Z_FULL_FLUSH: 3,
                            Z_FINISH: 4,
                            Z_BLOCK: 5,
                            Z_TREES: 6,
                            Z_OK: 0,
                            Z_STREAM_END: 1,
                            Z_NEED_DICT: 2,
                            Z_ERRNO: -1,
                            Z_STREAM_ERROR: -2,
                            Z_DATA_ERROR: -3,
                            Z_BUF_ERROR: -5,
                            Z_NO_COMPRESSION: 0,
                            Z_BEST_SPEED: 1,
                            Z_BEST_COMPRESSION: 9,
                            Z_DEFAULT_COMPRESSION: -1,
                            Z_FILTERED: 1,
                            Z_HUFFMAN_ONLY: 2,
                            Z_RLE: 3,
                            Z_FIXED: 4,
                            Z_DEFAULT_STRATEGY: 0,
                            Z_BINARY: 0,
                            Z_TEXT: 1,
                            Z_UNKNOWN: 2,
                            Z_DEFLATED: 8
                        };
                    },
                    {}
                ],
                45: [
                    function(e, g, f) {
                        var i = function() {
                            for(var s, n = [], h = 0; h < 256; h++){
                                s = h;
                                for(var w = 0; w < 8; w++)s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
                                n[h] = s;
                            }
                            return n;
                        }();
                        g.exports = function(s, n, h, w) {
                            var E = i, k = w + h;
                            s ^= -1;
                            for(var x = w; x < k; x++)s = s >>> 8 ^ E[255 & (s ^ n[x])];
                            return -1 ^ s;
                        };
                    },
                    {}
                ],
                46: [
                    function(e, g, f) {
                        var i, s = e("../utils/common"), n = e("./trees"), h = e("./adler32"), w = e("./crc32"), E = e("./messages"), k = 0, x = 4, u = 0, _ = -2, l = -1, v = 4, p = 2, y = 8, S = 9, T = 286, I = 30, j = 19, P = 2 * T + 1, G = 15, D = 3, J = 258, et = J + D + 1, A = 42, L = 113, r = 1, M = 2, ft = 3, V = 4;
                        function dt(t, $) {
                            return t.msg = E[$], $;
                        }
                        function X(t) {
                            return (t << 1) - (4 < t ? 9 : 0);
                        }
                        function ct(t) {
                            for(var $ = t.length; 0 <= --$;)t[$] = 0;
                        }
                        function B(t) {
                            var $ = t.state, F = $.pending;
                            F > t.avail_out && (F = t.avail_out), F !== 0 && (s.arraySet(t.output, $.pending_buf, $.pending_out, F, t.next_out), t.next_out += F, $.pending_out += F, t.total_out += F, t.avail_out -= F, $.pending -= F, $.pending === 0 && ($.pending_out = 0));
                        }
                        function U(t, $) {
                            n._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, $), t.block_start = t.strstart, B(t.strm);
                        }
                        function ut(t, $) {
                            t.pending_buf[t.pending++] = $;
                        }
                        function rt(t, $) {
                            t.pending_buf[t.pending++] = $ >>> 8 & 255, t.pending_buf[t.pending++] = 255 & $;
                        }
                        function Q(t, $) {
                            var F, b, m = t.max_chain_length, z = t.strstart, H = t.prev_length, Z = t.nice_match, R = t.strstart > t.w_size - et ? t.strstart - (t.w_size - et) : 0, Y = t.window, nt = t.w_mask, K = t.prev, ot = t.strstart + J, vt = Y[z + H - 1], pt = Y[z + H];
                            t.prev_length >= t.good_match && (m >>= 2), Z > t.lookahead && (Z = t.lookahead);
                            do if (Y[(F = $) + H] === pt && Y[F + H - 1] === vt && Y[F] === Y[z] && Y[++F] === Y[z + 1]) {
                                z += 2, F++;
                                do ;
                                while (Y[++z] === Y[++F] && Y[++z] === Y[++F] && Y[++z] === Y[++F] && Y[++z] === Y[++F] && Y[++z] === Y[++F] && Y[++z] === Y[++F] && Y[++z] === Y[++F] && Y[++z] === Y[++F] && z < ot);
                                if (b = J - (ot - z), z = ot - J, H < b) {
                                    if (t.match_start = $, Z <= (H = b)) break;
                                    vt = Y[z + H - 1], pt = Y[z + H];
                                }
                            }
                            while (($ = K[$ & nt]) > R && --m != 0);
                            return H <= t.lookahead ? H : t.lookahead;
                        }
                        function wt(t) {
                            var $, F, b, m, z, H, Z, R, Y, nt, K = t.w_size;
                            do {
                                if (m = t.window_size - t.lookahead - t.strstart, t.strstart >= K + (K - et)) {
                                    for(s.arraySet(t.window, t.window, K, K, 0), t.match_start -= K, t.strstart -= K, t.block_start -= K, $ = F = t.hash_size; b = t.head[--$], t.head[$] = K <= b ? b - K : 0, --F;);
                                    for($ = F = K; b = t.prev[--$], t.prev[$] = K <= b ? b - K : 0, --F;);
                                    m += K;
                                }
                                if (t.strm.avail_in === 0) break;
                                if (H = t.strm, Z = t.window, R = t.strstart + t.lookahead, Y = m, nt = void 0, nt = H.avail_in, Y < nt && (nt = Y), F = nt === 0 ? 0 : (H.avail_in -= nt, s.arraySet(Z, H.input, H.next_in, nt, R), H.state.wrap === 1 ? H.adler = h(H.adler, Z, nt, R) : H.state.wrap === 2 && (H.adler = w(H.adler, Z, nt, R)), H.next_in += nt, H.total_in += nt, nt), t.lookahead += F, t.lookahead + t.insert >= D) for(z = t.strstart - t.insert, t.ins_h = t.window[z], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[z + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[z + D - 1]) & t.hash_mask, t.prev[z & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = z, z++, t.insert--, !(t.lookahead + t.insert < D)););
                            }while (t.lookahead < et && t.strm.avail_in !== 0);
                        }
                        function xt(t, $) {
                            for(var F, b;;){
                                if (t.lookahead < et) {
                                    if (wt(t), t.lookahead < et && $ === k) return r;
                                    if (t.lookahead === 0) break;
                                }
                                if (F = 0, t.lookahead >= D && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + D - 1]) & t.hash_mask, F = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), F !== 0 && t.strstart - F <= t.w_size - et && (t.match_length = Q(t, F)), t.match_length >= D) if (b = n._tr_tally(t, t.strstart - t.match_start, t.match_length - D), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= D) {
                                    for(t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + D - 1]) & t.hash_mask, F = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, --t.match_length != 0;);
                                    t.strstart++;
                                } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
                                else b = n._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
                                if (b && (U(t, !1), t.strm.avail_out === 0)) return r;
                            }
                            return t.insert = t.strstart < D - 1 ? t.strstart : D - 1, $ === x ? (U(t, !0), t.strm.avail_out === 0 ? ft : V) : t.last_lit && (U(t, !1), t.strm.avail_out === 0) ? r : M;
                        }
                        function ht(t, $) {
                            for(var F, b, m;;){
                                if (t.lookahead < et) {
                                    if (wt(t), t.lookahead < et && $ === k) return r;
                                    if (t.lookahead === 0) break;
                                }
                                if (F = 0, t.lookahead >= D && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + D - 1]) & t.hash_mask, F = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = D - 1, F !== 0 && t.prev_length < t.max_lazy_match && t.strstart - F <= t.w_size - et && (t.match_length = Q(t, F), t.match_length <= 5 && (t.strategy === 1 || t.match_length === D && 4096 < t.strstart - t.match_start) && (t.match_length = D - 1)), t.prev_length >= D && t.match_length <= t.prev_length) {
                                    for(m = t.strstart + t.lookahead - D, b = n._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - D), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= m && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + D - 1]) & t.hash_mask, F = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), --t.prev_length != 0;);
                                    if (t.match_available = 0, t.match_length = D - 1, t.strstart++, b && (U(t, !1), t.strm.avail_out === 0)) return r;
                                } else if (t.match_available) {
                                    if ((b = n._tr_tally(t, 0, t.window[t.strstart - 1])) && U(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0) return r;
                                } else t.match_available = 1, t.strstart++, t.lookahead--;
                            }
                            return t.match_available && (b = n._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < D - 1 ? t.strstart : D - 1, $ === x ? (U(t, !0), t.strm.avail_out === 0 ? ft : V) : t.last_lit && (U(t, !1), t.strm.avail_out === 0) ? r : M;
                        }
                        function gt(t, $, F, b, m) {
                            this.good_length = t, this.max_lazy = $, this.nice_length = F, this.max_chain = b, this.func = m;
                        }
                        function kt() {
                            this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = y, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * P), this.dyn_dtree = new s.Buf16(2 * (2 * I + 1)), this.bl_tree = new s.Buf16(2 * (2 * j + 1)), ct(this.dyn_ltree), ct(this.dyn_dtree), ct(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(G + 1), this.heap = new s.Buf16(2 * T + 1), ct(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * T + 1), ct(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
                        }
                        function _t(t) {
                            var $;
                            return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = p, ($ = t.state).pending = 0, $.pending_out = 0, $.wrap < 0 && ($.wrap = -$.wrap), $.status = $.wrap ? A : L, t.adler = $.wrap === 2 ? 0 : 1, $.last_flush = k, n._tr_init($), u) : dt(t, _);
                        }
                        function It(t) {
                            var $ = _t(t);
                            return $ === u && function(F) {
                                F.window_size = 2 * F.w_size, ct(F.head), F.max_lazy_match = i[F.level].max_lazy, F.good_match = i[F.level].good_length, F.nice_match = i[F.level].nice_length, F.max_chain_length = i[F.level].max_chain, F.strstart = 0, F.block_start = 0, F.lookahead = 0, F.insert = 0, F.match_length = F.prev_length = D - 1, F.match_available = 0, F.ins_h = 0;
                            }(t.state), $;
                        }
                        function Tt(t, $, F, b, m, z) {
                            if (!t) return _;
                            var H = 1;
                            if ($ === l && ($ = 6), b < 0 ? (H = 0, b = -b) : 15 < b && (H = 2, b -= 16), m < 1 || S < m || F !== y || b < 8 || 15 < b || $ < 0 || 9 < $ || z < 0 || v < z) return dt(t, _);
                            b === 8 && (b = 9);
                            var Z = new kt;
                            return (t.state = Z).strm = t, Z.wrap = H, Z.gzhead = null, Z.w_bits = b, Z.w_size = 1 << Z.w_bits, Z.w_mask = Z.w_size - 1, Z.hash_bits = m + 7, Z.hash_size = 1 << Z.hash_bits, Z.hash_mask = Z.hash_size - 1, Z.hash_shift = ~~((Z.hash_bits + D - 1) / D), Z.window = new s.Buf8(2 * Z.w_size), Z.head = new s.Buf16(Z.hash_size), Z.prev = new s.Buf16(Z.w_size), Z.lit_bufsize = 1 << m + 6, Z.pending_buf_size = 4 * Z.lit_bufsize, Z.pending_buf = new s.Buf8(Z.pending_buf_size), Z.d_buf = 1 * Z.lit_bufsize, Z.l_buf = 3 * Z.lit_bufsize, Z.level = $, Z.strategy = z, Z.method = F, It(t);
                        }
                        i = [
                            new gt(0, 0, 0, 0, function(t, $) {
                                var F = 65535;
                                for(F > t.pending_buf_size - 5 && (F = t.pending_buf_size - 5);;){
                                    if (t.lookahead <= 1) {
                                        if (wt(t), t.lookahead === 0 && $ === k) return r;
                                        if (t.lookahead === 0) break;
                                    }
                                    t.strstart += t.lookahead, t.lookahead = 0;
                                    var b = t.block_start + F;
                                    if ((t.strstart === 0 || t.strstart >= b) && (t.lookahead = t.strstart - b, t.strstart = b, U(t, !1), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - et && (U(t, !1), t.strm.avail_out === 0)) return r;
                                }
                                return t.insert = 0, $ === x ? (U(t, !0), t.strm.avail_out === 0 ? ft : V) : (t.strstart > t.block_start && (U(t, !1), t.strm.avail_out), r);
                            }),
                            new gt(4, 4, 8, 4, xt),
                            new gt(4, 5, 16, 8, xt),
                            new gt(4, 6, 32, 32, xt),
                            new gt(4, 4, 16, 16, ht),
                            new gt(8, 16, 32, 32, ht),
                            new gt(8, 16, 128, 128, ht),
                            new gt(8, 32, 128, 256, ht),
                            new gt(32, 128, 258, 1024, ht),
                            new gt(32, 258, 258, 4096, ht)
                        ], f.deflateInit = function(t, $) {
                            return Tt(t, $, y, 15, 8, 0);
                        }, f.deflateInit2 = Tt, f.deflateReset = It, f.deflateResetKeep = _t, f.deflateSetHeader = function(t, $) {
                            return t && t.state ? t.state.wrap !== 2 ? _ : (t.state.gzhead = $, u) : _;
                        }, f.deflate = function(t, $) {
                            var F, b, m, z;
                            if (!t || !t.state || 5 < $ || $ < 0) return t ? dt(t, _) : _;
                            if (b = t.state, !t.output || !t.input && t.avail_in !== 0 || b.status === 666 && $ !== x) return dt(t, t.avail_out === 0 ? -5 : _);
                            if (b.strm = t, F = b.last_flush, b.last_flush = $, b.status === A) if (b.wrap === 2) t.adler = 0, ut(b, 31), ut(b, 139), ut(b, 8), b.gzhead ? (ut(b, (b.gzhead.text ? 1 : 0) + (b.gzhead.hcrc ? 2 : 0) + (b.gzhead.extra ? 4 : 0) + (b.gzhead.name ? 8 : 0) + (b.gzhead.comment ? 16 : 0)), ut(b, 255 & b.gzhead.time), ut(b, b.gzhead.time >> 8 & 255), ut(b, b.gzhead.time >> 16 & 255), ut(b, b.gzhead.time >> 24 & 255), ut(b, b.level === 9 ? 2 : 2 <= b.strategy || b.level < 2 ? 4 : 0), ut(b, 255 & b.gzhead.os), b.gzhead.extra && b.gzhead.extra.length && (ut(b, 255 & b.gzhead.extra.length), ut(b, b.gzhead.extra.length >> 8 & 255)), b.gzhead.hcrc && (t.adler = w(t.adler, b.pending_buf, b.pending, 0)), b.gzindex = 0, b.status = 69) : (ut(b, 0), ut(b, 0), ut(b, 0), ut(b, 0), ut(b, 0), ut(b, b.level === 9 ? 2 : 2 <= b.strategy || b.level < 2 ? 4 : 0), ut(b, 3), b.status = L);
                            else {
                                var H = y + (b.w_bits - 8 << 4) << 8;
                                H |= (2 <= b.strategy || b.level < 2 ? 0 : b.level < 6 ? 1 : b.level === 6 ? 2 : 3) << 6, b.strstart !== 0 && (H |= 32), H += 31 - H % 31, b.status = L, rt(b, H), b.strstart !== 0 && (rt(b, t.adler >>> 16), rt(b, 65535 & t.adler)), t.adler = 1;
                            }
                            if (b.status === 69) if (b.gzhead.extra) {
                                for(m = b.pending; b.gzindex < (65535 & b.gzhead.extra.length) && (b.pending !== b.pending_buf_size || (b.gzhead.hcrc && b.pending > m && (t.adler = w(t.adler, b.pending_buf, b.pending - m, m)), B(t), m = b.pending, b.pending !== b.pending_buf_size));)ut(b, 255 & b.gzhead.extra[b.gzindex]), b.gzindex++;
                                b.gzhead.hcrc && b.pending > m && (t.adler = w(t.adler, b.pending_buf, b.pending - m, m)), b.gzindex === b.gzhead.extra.length && (b.gzindex = 0, b.status = 73);
                            } else b.status = 73;
                            if (b.status === 73) if (b.gzhead.name) {
                                m = b.pending;
                                do {
                                    if (b.pending === b.pending_buf_size && (b.gzhead.hcrc && b.pending > m && (t.adler = w(t.adler, b.pending_buf, b.pending - m, m)), B(t), m = b.pending, b.pending === b.pending_buf_size)) {
                                        z = 1;
                                        break;
                                    }
                                    z = b.gzindex < b.gzhead.name.length ? 255 & b.gzhead.name.charCodeAt(b.gzindex++) : 0, ut(b, z);
                                }while (z !== 0);
                                b.gzhead.hcrc && b.pending > m && (t.adler = w(t.adler, b.pending_buf, b.pending - m, m)), z === 0 && (b.gzindex = 0, b.status = 91);
                            } else b.status = 91;
                            if (b.status === 91) if (b.gzhead.comment) {
                                m = b.pending;
                                do {
                                    if (b.pending === b.pending_buf_size && (b.gzhead.hcrc && b.pending > m && (t.adler = w(t.adler, b.pending_buf, b.pending - m, m)), B(t), m = b.pending, b.pending === b.pending_buf_size)) {
                                        z = 1;
                                        break;
                                    }
                                    z = b.gzindex < b.gzhead.comment.length ? 255 & b.gzhead.comment.charCodeAt(b.gzindex++) : 0, ut(b, z);
                                }while (z !== 0);
                                b.gzhead.hcrc && b.pending > m && (t.adler = w(t.adler, b.pending_buf, b.pending - m, m)), z === 0 && (b.status = 103);
                            } else b.status = 103;
                            if (b.status === 103 && (b.gzhead.hcrc ? (b.pending + 2 > b.pending_buf_size && B(t), b.pending + 2 <= b.pending_buf_size && (ut(b, 255 & t.adler), ut(b, t.adler >> 8 & 255), t.adler = 0, b.status = L)) : b.status = L), b.pending !== 0) {
                                if (B(t), t.avail_out === 0) return b.last_flush = -1, u;
                            } else if (t.avail_in === 0 && X($) <= X(F) && $ !== x) return dt(t, -5);
                            if (b.status === 666 && t.avail_in !== 0) return dt(t, -5);
                            if (t.avail_in !== 0 || b.lookahead !== 0 || $ !== k && b.status !== 666) {
                                var Z = b.strategy === 2 ? function(R, Y) {
                                    for(var nt;;){
                                        if (R.lookahead === 0 && (wt(R), R.lookahead === 0)) {
                                            if (Y === k) return r;
                                            break;
                                        }
                                        if (R.match_length = 0, nt = n._tr_tally(R, 0, R.window[R.strstart]), R.lookahead--, R.strstart++, nt && (U(R, !1), R.strm.avail_out === 0)) return r;
                                    }
                                    return R.insert = 0, Y === x ? (U(R, !0), R.strm.avail_out === 0 ? ft : V) : R.last_lit && (U(R, !1), R.strm.avail_out === 0) ? r : M;
                                }(b, $) : b.strategy === 3 ? function(R, Y) {
                                    for(var nt, K, ot, vt, pt = R.window;;){
                                        if (R.lookahead <= J) {
                                            if (wt(R), R.lookahead <= J && Y === k) return r;
                                            if (R.lookahead === 0) break;
                                        }
                                        if (R.match_length = 0, R.lookahead >= D && 0 < R.strstart && (K = pt[ot = R.strstart - 1]) === pt[++ot] && K === pt[++ot] && K === pt[++ot]) {
                                            vt = R.strstart + J;
                                            do ;
                                            while (K === pt[++ot] && K === pt[++ot] && K === pt[++ot] && K === pt[++ot] && K === pt[++ot] && K === pt[++ot] && K === pt[++ot] && K === pt[++ot] && ot < vt);
                                            R.match_length = J - (vt - ot), R.match_length > R.lookahead && (R.match_length = R.lookahead);
                                        }
                                        if (R.match_length >= D ? (nt = n._tr_tally(R, 1, R.match_length - D), R.lookahead -= R.match_length, R.strstart += R.match_length, R.match_length = 0) : (nt = n._tr_tally(R, 0, R.window[R.strstart]), R.lookahead--, R.strstart++), nt && (U(R, !1), R.strm.avail_out === 0)) return r;
                                    }
                                    return R.insert = 0, Y === x ? (U(R, !0), R.strm.avail_out === 0 ? ft : V) : R.last_lit && (U(R, !1), R.strm.avail_out === 0) ? r : M;
                                }(b, $) : i[b.level].func(b, $);
                                if (Z !== ft && Z !== V || (b.status = 666), Z === r || Z === ft) return t.avail_out === 0 && (b.last_flush = -1), u;
                                if (Z === M && ($ === 1 ? n._tr_align(b) : $ !== 5 && (n._tr_stored_block(b, 0, 0, !1), $ === 3 && (ct(b.head), b.lookahead === 0 && (b.strstart = 0, b.block_start = 0, b.insert = 0))), B(t), t.avail_out === 0)) return b.last_flush = -1, u;
                            }
                            return $ !== x ? u : b.wrap <= 0 ? 1 : (b.wrap === 2 ? (ut(b, 255 & t.adler), ut(b, t.adler >> 8 & 255), ut(b, t.adler >> 16 & 255), ut(b, t.adler >> 24 & 255), ut(b, 255 & t.total_in), ut(b, t.total_in >> 8 & 255), ut(b, t.total_in >> 16 & 255), ut(b, t.total_in >> 24 & 255)) : (rt(b, t.adler >>> 16), rt(b, 65535 & t.adler)), B(t), 0 < b.wrap && (b.wrap = -b.wrap), b.pending !== 0 ? u : 1);
                        }, f.deflateEnd = function(t) {
                            var $;
                            return t && t.state ? ($ = t.state.status) !== A && $ !== 69 && $ !== 73 && $ !== 91 && $ !== 103 && $ !== L && $ !== 666 ? dt(t, _) : (t.state = null, $ === L ? dt(t, -3) : u) : _;
                        }, f.deflateSetDictionary = function(t, $) {
                            var F, b, m, z, H, Z, R, Y, nt = $.length;
                            if (!t || !t.state || (z = (F = t.state).wrap) === 2 || z === 1 && F.status !== A || F.lookahead) return _;
                            for(z === 1 && (t.adler = h(t.adler, $, nt, 0)), F.wrap = 0, nt >= F.w_size && (z === 0 && (ct(F.head), F.strstart = 0, F.block_start = 0, F.insert = 0), Y = new s.Buf8(F.w_size), s.arraySet(Y, $, nt - F.w_size, F.w_size, 0), $ = Y, nt = F.w_size), H = t.avail_in, Z = t.next_in, R = t.input, t.avail_in = nt, t.next_in = 0, t.input = $, wt(F); F.lookahead >= D;){
                                for(b = F.strstart, m = F.lookahead - (D - 1); F.ins_h = (F.ins_h << F.hash_shift ^ F.window[b + D - 1]) & F.hash_mask, F.prev[b & F.w_mask] = F.head[F.ins_h], F.head[F.ins_h] = b, b++, --m;);
                                F.strstart = b, F.lookahead = D - 1, wt(F);
                            }
                            return F.strstart += F.lookahead, F.block_start = F.strstart, F.insert = F.lookahead, F.lookahead = 0, F.match_length = F.prev_length = D - 1, F.match_available = 0, t.next_in = Z, t.input = R, t.avail_in = H, F.wrap = z, u;
                        }, f.deflateInfo = "pako deflate (from Nodeca project)";
                    },
                    {
                        "../utils/common": 41,
                        "./adler32": 43,
                        "./crc32": 45,
                        "./messages": 51,
                        "./trees": 52
                    }
                ],
                47: [
                    function(e, g, f) {
                        g.exports = function() {
                            this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
                        };
                    },
                    {}
                ],
                48: [
                    function(e, g, f) {
                        g.exports = function(i, s) {
                            var n, h, w, E, k, x, u, _, l, v, p, y, S, T, I, j, P, G, D, J, et, A, L, r, M;
                            n = i.state, h = i.next_in, r = i.input, w = h + (i.avail_in - 5), E = i.next_out, M = i.output, k = E - (s - i.avail_out), x = E + (i.avail_out - 257), u = n.dmax, _ = n.wsize, l = n.whave, v = n.wnext, p = n.window, y = n.hold, S = n.bits, T = n.lencode, I = n.distcode, j = (1 << n.lenbits) - 1, P = (1 << n.distbits) - 1;
                            t: do {
                                S < 15 && (y += r[h++] << S, S += 8, y += r[h++] << S, S += 8), G = T[y & j];
                                e: for(;;){
                                    if (y >>>= D = G >>> 24, S -= D, (D = G >>> 16 & 255) === 0) M[E++] = 65535 & G;
                                    else {
                                        if (!(16 & D)) {
                                            if (!(64 & D)) {
                                                G = T[(65535 & G) + (y & (1 << D) - 1)];
                                                continue e;
                                            }
                                            if (32 & D) {
                                                n.mode = 12;
                                                break t;
                                            }
                                            i.msg = "invalid literal/length code", n.mode = 30;
                                            break t;
                                        }
                                        J = 65535 & G, (D &= 15) && (S < D && (y += r[h++] << S, S += 8), J += y & (1 << D) - 1, y >>>= D, S -= D), S < 15 && (y += r[h++] << S, S += 8, y += r[h++] << S, S += 8), G = I[y & P];
                                        r: for(;;){
                                            if (y >>>= D = G >>> 24, S -= D, !(16 & (D = G >>> 16 & 255))) {
                                                if (!(64 & D)) {
                                                    G = I[(65535 & G) + (y & (1 << D) - 1)];
                                                    continue r;
                                                }
                                                i.msg = "invalid distance code", n.mode = 30;
                                                break t;
                                            }
                                            if (et = 65535 & G, S < (D &= 15) && (y += r[h++] << S, (S += 8) < D && (y += r[h++] << S, S += 8)), u < (et += y & (1 << D) - 1)) {
                                                i.msg = "invalid distance too far back", n.mode = 30;
                                                break t;
                                            }
                                            if (y >>>= D, S -= D, (D = E - k) < et) {
                                                if (l < (D = et - D) && n.sane) {
                                                    i.msg = "invalid distance too far back", n.mode = 30;
                                                    break t;
                                                }
                                                if (L = p, (A = 0) === v) {
                                                    if (A += _ - D, D < J) {
                                                        for(J -= D; M[E++] = p[A++], --D;);
                                                        A = E - et, L = M;
                                                    }
                                                } else if (v < D) {
                                                    if (A += _ + v - D, (D -= v) < J) {
                                                        for(J -= D; M[E++] = p[A++], --D;);
                                                        if (A = 0, v < J) {
                                                            for(J -= D = v; M[E++] = p[A++], --D;);
                                                            A = E - et, L = M;
                                                        }
                                                    }
                                                } else if (A += v - D, D < J) {
                                                    for(J -= D; M[E++] = p[A++], --D;);
                                                    A = E - et, L = M;
                                                }
                                                for(; 2 < J;)M[E++] = L[A++], M[E++] = L[A++], M[E++] = L[A++], J -= 3;
                                                J && (M[E++] = L[A++], 1 < J && (M[E++] = L[A++]));
                                            } else {
                                                for(A = E - et; M[E++] = M[A++], M[E++] = M[A++], M[E++] = M[A++], 2 < (J -= 3););
                                                J && (M[E++] = M[A++], 1 < J && (M[E++] = M[A++]));
                                            }
                                            break;
                                        }
                                    }
                                    break;
                                }
                            }while (h < w && E < x);
                            h -= J = S >> 3, y &= (1 << (S -= J << 3)) - 1, i.next_in = h, i.next_out = E, i.avail_in = h < w ? w - h + 5 : 5 - (h - w), i.avail_out = E < x ? x - E + 257 : 257 - (E - x), n.hold = y, n.bits = S;
                        };
                    },
                    {}
                ],
                49: [
                    function(e, g, f) {
                        var i = e("../utils/common"), s = e("./adler32"), n = e("./crc32"), h = e("./inffast"), w = e("./inftrees"), E = 1, k = 2, x = 0, u = -2, _ = 1, l = 852, v = 592;
                        function p(A) {
                            return (A >>> 24 & 255) + (A >>> 8 & 65280) + ((65280 & A) << 8) + ((255 & A) << 24);
                        }
                        function y() {
                            this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new i.Buf16(320), this.work = new i.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
                        }
                        function S(A) {
                            var L;
                            return A && A.state ? (L = A.state, A.total_in = A.total_out = L.total = 0, A.msg = "", L.wrap && (A.adler = 1 & L.wrap), L.mode = _, L.last = 0, L.havedict = 0, L.dmax = 32768, L.head = null, L.hold = 0, L.bits = 0, L.lencode = L.lendyn = new i.Buf32(l), L.distcode = L.distdyn = new i.Buf32(v), L.sane = 1, L.back = -1, x) : u;
                        }
                        function T(A) {
                            var L;
                            return A && A.state ? ((L = A.state).wsize = 0, L.whave = 0, L.wnext = 0, S(A)) : u;
                        }
                        function I(A, L) {
                            var r, M;
                            return A && A.state ? (M = A.state, L < 0 ? (r = 0, L = -L) : (r = 1 + (L >> 4), L < 48 && (L &= 15)), L && (L < 8 || 15 < L) ? u : (M.window !== null && M.wbits !== L && (M.window = null), M.wrap = r, M.wbits = L, T(A))) : u;
                        }
                        function j(A, L) {
                            var r, M;
                            return A ? (M = new y, (A.state = M).window = null, (r = I(A, L)) !== x && (A.state = null), r) : u;
                        }
                        var P, G, D = !0;
                        function J(A) {
                            if (D) {
                                var L;
                                for(P = new i.Buf32(512), G = new i.Buf32(32), L = 0; L < 144;)A.lens[L++] = 8;
                                for(; L < 256;)A.lens[L++] = 9;
                                for(; L < 280;)A.lens[L++] = 7;
                                for(; L < 288;)A.lens[L++] = 8;
                                for(w(E, A.lens, 0, 288, P, 0, A.work, {
                                    bits: 9
                                }), L = 0; L < 32;)A.lens[L++] = 5;
                                w(k, A.lens, 0, 32, G, 0, A.work, {
                                    bits: 5
                                }), D = !1;
                            }
                            A.lencode = P, A.lenbits = 9, A.distcode = G, A.distbits = 5;
                        }
                        function et(A, L, r, M) {
                            var ft, V = A.state;
                            return V.window === null && (V.wsize = 1 << V.wbits, V.wnext = 0, V.whave = 0, V.window = new i.Buf8(V.wsize)), M >= V.wsize ? (i.arraySet(V.window, L, r - V.wsize, V.wsize, 0), V.wnext = 0, V.whave = V.wsize) : (M < (ft = V.wsize - V.wnext) && (ft = M), i.arraySet(V.window, L, r - M, ft, V.wnext), (M -= ft) ? (i.arraySet(V.window, L, r - M, M, 0), V.wnext = M, V.whave = V.wsize) : (V.wnext += ft, V.wnext === V.wsize && (V.wnext = 0), V.whave < V.wsize && (V.whave += ft))), 0;
                        }
                        f.inflateReset = T, f.inflateReset2 = I, f.inflateResetKeep = S, f.inflateInit = function(A) {
                            return j(A, 15);
                        }, f.inflateInit2 = j, f.inflate = function(A, L) {
                            var r, M, ft, V, dt, X, ct, B, U, ut, rt, Q, wt, xt, ht, gt, kt, _t, It, Tt, t, $, F, b, m = 0, z = new i.Buf8(4), H = [
                                16,
                                17,
                                18,
                                0,
                                8,
                                7,
                                9,
                                6,
                                10,
                                5,
                                11,
                                4,
                                12,
                                3,
                                13,
                                2,
                                14,
                                1,
                                15
                            ];
                            if (!A || !A.state || !A.output || !A.input && A.avail_in !== 0) return u;
                            (r = A.state).mode === 12 && (r.mode = 13), dt = A.next_out, ft = A.output, ct = A.avail_out, V = A.next_in, M = A.input, X = A.avail_in, B = r.hold, U = r.bits, ut = X, rt = ct, $ = x;
                            t: for(;;)switch(r.mode){
                                case _:
                                    if (r.wrap === 0) {
                                        r.mode = 13;
                                        break;
                                    }
                                    for(; U < 16;){
                                        if (X === 0) break t;
                                        X--, B += M[V++] << U, U += 8;
                                    }
                                    if (2 & r.wrap && B === 35615) {
                                        z[r.check = 0] = 255 & B, z[1] = B >>> 8 & 255, r.check = n(r.check, z, 2, 0), U = B = 0, r.mode = 2;
                                        break;
                                    }
                                    if (r.flags = 0, r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & B) << 8) + (B >> 8)) % 31) {
                                        A.msg = "incorrect header check", r.mode = 30;
                                        break;
                                    }
                                    if ((15 & B) != 8) {
                                        A.msg = "unknown compression method", r.mode = 30;
                                        break;
                                    }
                                    if (U -= 4, t = 8 + (15 & (B >>>= 4)), r.wbits === 0) r.wbits = t;
                                    else if (t > r.wbits) {
                                        A.msg = "invalid window size", r.mode = 30;
                                        break;
                                    }
                                    r.dmax = 1 << t, A.adler = r.check = 1, r.mode = 512 & B ? 10 : 12, U = B = 0;
                                    break;
                                case 2:
                                    for(; U < 16;){
                                        if (X === 0) break t;
                                        X--, B += M[V++] << U, U += 8;
                                    }
                                    if (r.flags = B, (255 & r.flags) != 8) {
                                        A.msg = "unknown compression method", r.mode = 30;
                                        break;
                                    }
                                    if (57344 & r.flags) {
                                        A.msg = "unknown header flags set", r.mode = 30;
                                        break;
                                    }
                                    r.head && (r.head.text = B >> 8 & 1), 512 & r.flags && (z[0] = 255 & B, z[1] = B >>> 8 & 255, r.check = n(r.check, z, 2, 0)), U = B = 0, r.mode = 3;
                                case 3:
                                    for(; U < 32;){
                                        if (X === 0) break t;
                                        X--, B += M[V++] << U, U += 8;
                                    }
                                    r.head && (r.head.time = B), 512 & r.flags && (z[0] = 255 & B, z[1] = B >>> 8 & 255, z[2] = B >>> 16 & 255, z[3] = B >>> 24 & 255, r.check = n(r.check, z, 4, 0)), U = B = 0, r.mode = 4;
                                case 4:
                                    for(; U < 16;){
                                        if (X === 0) break t;
                                        X--, B += M[V++] << U, U += 8;
                                    }
                                    r.head && (r.head.xflags = 255 & B, r.head.os = B >> 8), 512 & r.flags && (z[0] = 255 & B, z[1] = B >>> 8 & 255, r.check = n(r.check, z, 2, 0)), U = B = 0, r.mode = 5;
                                case 5:
                                    if (1024 & r.flags) {
                                        for(; U < 16;){
                                            if (X === 0) break t;
                                            X--, B += M[V++] << U, U += 8;
                                        }
                                        r.length = B, r.head && (r.head.extra_len = B), 512 & r.flags && (z[0] = 255 & B, z[1] = B >>> 8 & 255, r.check = n(r.check, z, 2, 0)), U = B = 0;
                                    } else r.head && (r.head.extra = null);
                                    r.mode = 6;
                                case 6:
                                    if (1024 & r.flags && (X < (Q = r.length) && (Q = X), Q && (r.head && (t = r.head.extra_len - r.length, r.head.extra || (r.head.extra = new Array(r.head.extra_len)), i.arraySet(r.head.extra, M, V, Q, t)), 512 & r.flags && (r.check = n(r.check, M, Q, V)), X -= Q, V += Q, r.length -= Q), r.length)) break t;
                                    r.length = 0, r.mode = 7;
                                case 7:
                                    if (2048 & r.flags) {
                                        if (X === 0) break t;
                                        for(Q = 0; t = M[V + Q++], r.head && t && r.length < 65536 && (r.head.name += String.fromCharCode(t)), t && Q < X;);
                                        if (512 & r.flags && (r.check = n(r.check, M, Q, V)), X -= Q, V += Q, t) break t;
                                    } else r.head && (r.head.name = null);
                                    r.length = 0, r.mode = 8;
                                case 8:
                                    if (4096 & r.flags) {
                                        if (X === 0) break t;
                                        for(Q = 0; t = M[V + Q++], r.head && t && r.length < 65536 && (r.head.comment += String.fromCharCode(t)), t && Q < X;);
                                        if (512 & r.flags && (r.check = n(r.check, M, Q, V)), X -= Q, V += Q, t) break t;
                                    } else r.head && (r.head.comment = null);
                                    r.mode = 9;
                                case 9:
                                    if (512 & r.flags) {
                                        for(; U < 16;){
                                            if (X === 0) break t;
                                            X--, B += M[V++] << U, U += 8;
                                        }
                                        if (B !== (65535 & r.check)) {
                                            A.msg = "header crc mismatch", r.mode = 30;
                                            break;
                                        }
                                        U = B = 0;
                                    }
                                    r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), A.adler = r.check = 0, r.mode = 12;
                                    break;
                                case 10:
                                    for(; U < 32;){
                                        if (X === 0) break t;
                                        X--, B += M[V++] << U, U += 8;
                                    }
                                    A.adler = r.check = p(B), U = B = 0, r.mode = 11;
                                case 11:
                                    if (r.havedict === 0) return A.next_out = dt, A.avail_out = ct, A.next_in = V, A.avail_in = X, r.hold = B, r.bits = U, 2;
                                    A.adler = r.check = 1, r.mode = 12;
                                case 12:
                                    if (L === 5 || L === 6) break t;
                                case 13:
                                    if (r.last) {
                                        B >>>= 7 & U, U -= 7 & U, r.mode = 27;
                                        break;
                                    }
                                    for(; U < 3;){
                                        if (X === 0) break t;
                                        X--, B += M[V++] << U, U += 8;
                                    }
                                    switch(r.last = 1 & B, U -= 1, 3 & (B >>>= 1)){
                                        case 0:
                                            r.mode = 14;
                                            break;
                                        case 1:
                                            if (J(r), r.mode = 20, L !== 6) break;
                                            B >>>= 2, U -= 2;
                                            break t;
                                        case 2:
                                            r.mode = 17;
                                            break;
                                        case 3:
                                            A.msg = "invalid block type", r.mode = 30;
                                    }
                                    B >>>= 2, U -= 2;
                                    break;
                                case 14:
                                    for(B >>>= 7 & U, U -= 7 & U; U < 32;){
                                        if (X === 0) break t;
                                        X--, B += M[V++] << U, U += 8;
                                    }
                                    if ((65535 & B) != (B >>> 16 ^ 65535)) {
                                        A.msg = "invalid stored block lengths", r.mode = 30;
                                        break;
                                    }
                                    if (r.length = 65535 & B, U = B = 0, r.mode = 15, L === 6) break t;
                                case 15:
                                    r.mode = 16;
                                case 16:
                                    if (Q = r.length) {
                                        if (X < Q && (Q = X), ct < Q && (Q = ct), Q === 0) break t;
                                        i.arraySet(ft, M, V, Q, dt), X -= Q, V += Q, ct -= Q, dt += Q, r.length -= Q;
                                        break;
                                    }
                                    r.mode = 12;
                                    break;
                                case 17:
                                    for(; U < 14;){
                                        if (X === 0) break t;
                                        X--, B += M[V++] << U, U += 8;
                                    }
                                    if (r.nlen = 257 + (31 & B), B >>>= 5, U -= 5, r.ndist = 1 + (31 & B), B >>>= 5, U -= 5, r.ncode = 4 + (15 & B), B >>>= 4, U -= 4, 286 < r.nlen || 30 < r.ndist) {
                                        A.msg = "too many length or distance symbols", r.mode = 30;
                                        break;
                                    }
                                    r.have = 0, r.mode = 18;
                                case 18:
                                    for(; r.have < r.ncode;){
                                        for(; U < 3;){
                                            if (X === 0) break t;
                                            X--, B += M[V++] << U, U += 8;
                                        }
                                        r.lens[H[r.have++]] = 7 & B, B >>>= 3, U -= 3;
                                    }
                                    for(; r.have < 19;)r.lens[H[r.have++]] = 0;
                                    if (r.lencode = r.lendyn, r.lenbits = 7, F = {
                                        bits: r.lenbits
                                    }, $ = w(0, r.lens, 0, 19, r.lencode, 0, r.work, F), r.lenbits = F.bits, $) {
                                        A.msg = "invalid code lengths set", r.mode = 30;
                                        break;
                                    }
                                    r.have = 0, r.mode = 19;
                                case 19:
                                    for(; r.have < r.nlen + r.ndist;){
                                        for(; gt = (m = r.lencode[B & (1 << r.lenbits) - 1]) >>> 16 & 255, kt = 65535 & m, !((ht = m >>> 24) <= U);){
                                            if (X === 0) break t;
                                            X--, B += M[V++] << U, U += 8;
                                        }
                                        if (kt < 16) B >>>= ht, U -= ht, r.lens[r.have++] = kt;
                                        else {
                                            if (kt === 16) {
                                                for(b = ht + 2; U < b;){
                                                    if (X === 0) break t;
                                                    X--, B += M[V++] << U, U += 8;
                                                }
                                                if (B >>>= ht, U -= ht, r.have === 0) {
                                                    A.msg = "invalid bit length repeat", r.mode = 30;
                                                    break;
                                                }
                                                t = r.lens[r.have - 1], Q = 3 + (3 & B), B >>>= 2, U -= 2;
                                            } else if (kt === 17) {
                                                for(b = ht + 3; U < b;){
                                                    if (X === 0) break t;
                                                    X--, B += M[V++] << U, U += 8;
                                                }
                                                U -= ht, t = 0, Q = 3 + (7 & (B >>>= ht)), B >>>= 3, U -= 3;
                                            } else {
                                                for(b = ht + 7; U < b;){
                                                    if (X === 0) break t;
                                                    X--, B += M[V++] << U, U += 8;
                                                }
                                                U -= ht, t = 0, Q = 11 + (127 & (B >>>= ht)), B >>>= 7, U -= 7;
                                            }
                                            if (r.have + Q > r.nlen + r.ndist) {
                                                A.msg = "invalid bit length repeat", r.mode = 30;
                                                break;
                                            }
                                            for(; Q--;)r.lens[r.have++] = t;
                                        }
                                    }
                                    if (r.mode === 30) break;
                                    if (r.lens[256] === 0) {
                                        A.msg = "invalid code -- missing end-of-block", r.mode = 30;
                                        break;
                                    }
                                    if (r.lenbits = 9, F = {
                                        bits: r.lenbits
                                    }, $ = w(E, r.lens, 0, r.nlen, r.lencode, 0, r.work, F), r.lenbits = F.bits, $) {
                                        A.msg = "invalid literal/lengths set", r.mode = 30;
                                        break;
                                    }
                                    if (r.distbits = 6, r.distcode = r.distdyn, F = {
                                        bits: r.distbits
                                    }, $ = w(k, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, F), r.distbits = F.bits, $) {
                                        A.msg = "invalid distances set", r.mode = 30;
                                        break;
                                    }
                                    if (r.mode = 20, L === 6) break t;
                                case 20:
                                    r.mode = 21;
                                case 21:
                                    if (6 <= X && 258 <= ct) {
                                        A.next_out = dt, A.avail_out = ct, A.next_in = V, A.avail_in = X, r.hold = B, r.bits = U, h(A, rt), dt = A.next_out, ft = A.output, ct = A.avail_out, V = A.next_in, M = A.input, X = A.avail_in, B = r.hold, U = r.bits, r.mode === 12 && (r.back = -1);
                                        break;
                                    }
                                    for(r.back = 0; gt = (m = r.lencode[B & (1 << r.lenbits) - 1]) >>> 16 & 255, kt = 65535 & m, !((ht = m >>> 24) <= U);){
                                        if (X === 0) break t;
                                        X--, B += M[V++] << U, U += 8;
                                    }
                                    if (gt && !(240 & gt)) {
                                        for(_t = ht, It = gt, Tt = kt; gt = (m = r.lencode[Tt + ((B & (1 << _t + It) - 1) >> _t)]) >>> 16 & 255, kt = 65535 & m, !(_t + (ht = m >>> 24) <= U);){
                                            if (X === 0) break t;
                                            X--, B += M[V++] << U, U += 8;
                                        }
                                        B >>>= _t, U -= _t, r.back += _t;
                                    }
                                    if (B >>>= ht, U -= ht, r.back += ht, r.length = kt, gt === 0) {
                                        r.mode = 26;
                                        break;
                                    }
                                    if (32 & gt) {
                                        r.back = -1, r.mode = 12;
                                        break;
                                    }
                                    if (64 & gt) {
                                        A.msg = "invalid literal/length code", r.mode = 30;
                                        break;
                                    }
                                    r.extra = 15 & gt, r.mode = 22;
                                case 22:
                                    if (r.extra) {
                                        for(b = r.extra; U < b;){
                                            if (X === 0) break t;
                                            X--, B += M[V++] << U, U += 8;
                                        }
                                        r.length += B & (1 << r.extra) - 1, B >>>= r.extra, U -= r.extra, r.back += r.extra;
                                    }
                                    r.was = r.length, r.mode = 23;
                                case 23:
                                    for(; gt = (m = r.distcode[B & (1 << r.distbits) - 1]) >>> 16 & 255, kt = 65535 & m, !((ht = m >>> 24) <= U);){
                                        if (X === 0) break t;
                                        X--, B += M[V++] << U, U += 8;
                                    }
                                    if (!(240 & gt)) {
                                        for(_t = ht, It = gt, Tt = kt; gt = (m = r.distcode[Tt + ((B & (1 << _t + It) - 1) >> _t)]) >>> 16 & 255, kt = 65535 & m, !(_t + (ht = m >>> 24) <= U);){
                                            if (X === 0) break t;
                                            X--, B += M[V++] << U, U += 8;
                                        }
                                        B >>>= _t, U -= _t, r.back += _t;
                                    }
                                    if (B >>>= ht, U -= ht, r.back += ht, 64 & gt) {
                                        A.msg = "invalid distance code", r.mode = 30;
                                        break;
                                    }
                                    r.offset = kt, r.extra = 15 & gt, r.mode = 24;
                                case 24:
                                    if (r.extra) {
                                        for(b = r.extra; U < b;){
                                            if (X === 0) break t;
                                            X--, B += M[V++] << U, U += 8;
                                        }
                                        r.offset += B & (1 << r.extra) - 1, B >>>= r.extra, U -= r.extra, r.back += r.extra;
                                    }
                                    if (r.offset > r.dmax) {
                                        A.msg = "invalid distance too far back", r.mode = 30;
                                        break;
                                    }
                                    r.mode = 25;
                                case 25:
                                    if (ct === 0) break t;
                                    if (Q = rt - ct, r.offset > Q) {
                                        if ((Q = r.offset - Q) > r.whave && r.sane) {
                                            A.msg = "invalid distance too far back", r.mode = 30;
                                            break;
                                        }
                                        wt = Q > r.wnext ? (Q -= r.wnext, r.wsize - Q) : r.wnext - Q, Q > r.length && (Q = r.length), xt = r.window;
                                    } else xt = ft, wt = dt - r.offset, Q = r.length;
                                    for(ct < Q && (Q = ct), ct -= Q, r.length -= Q; ft[dt++] = xt[wt++], --Q;);
                                    r.length === 0 && (r.mode = 21);
                                    break;
                                case 26:
                                    if (ct === 0) break t;
                                    ft[dt++] = r.length, ct--, r.mode = 21;
                                    break;
                                case 27:
                                    if (r.wrap) {
                                        for(; U < 32;){
                                            if (X === 0) break t;
                                            X--, B |= M[V++] << U, U += 8;
                                        }
                                        if (rt -= ct, A.total_out += rt, r.total += rt, rt && (A.adler = r.check = r.flags ? n(r.check, ft, rt, dt - rt) : s(r.check, ft, rt, dt - rt)), rt = ct, (r.flags ? B : p(B)) !== r.check) {
                                            A.msg = "incorrect data check", r.mode = 30;
                                            break;
                                        }
                                        U = B = 0;
                                    }
                                    r.mode = 28;
                                case 28:
                                    if (r.wrap && r.flags) {
                                        for(; U < 32;){
                                            if (X === 0) break t;
                                            X--, B += M[V++] << U, U += 8;
                                        }
                                        if (B !== (4294967295 & r.total)) {
                                            A.msg = "incorrect length check", r.mode = 30;
                                            break;
                                        }
                                        U = B = 0;
                                    }
                                    r.mode = 29;
                                case 29:
                                    $ = 1;
                                    break t;
                                case 30:
                                    $ = -3;
                                    break t;
                                case 31:
                                    return -4;
                                case 32:
                                default:
                                    return u;
                            }
                            return A.next_out = dt, A.avail_out = ct, A.next_in = V, A.avail_in = X, r.hold = B, r.bits = U, (r.wsize || rt !== A.avail_out && r.mode < 30 && (r.mode < 27 || L !== 4)) && et(A, A.output, A.next_out, rt - A.avail_out) ? (r.mode = 31, -4) : (ut -= A.avail_in, rt -= A.avail_out, A.total_in += ut, A.total_out += rt, r.total += rt, r.wrap && rt && (A.adler = r.check = r.flags ? n(r.check, ft, rt, A.next_out - rt) : s(r.check, ft, rt, A.next_out - rt)), A.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === 12 ? 128 : 0) + (r.mode === 20 || r.mode === 15 ? 256 : 0), (ut == 0 && rt === 0 || L === 4) && $ === x && ($ = -5), $);
                        }, f.inflateEnd = function(A) {
                            if (!A || !A.state) return u;
                            var L = A.state;
                            return L.window && (L.window = null), A.state = null, x;
                        }, f.inflateGetHeader = function(A, L) {
                            var r;
                            return A && A.state && 2 & (r = A.state).wrap ? ((r.head = L).done = !1, x) : u;
                        }, f.inflateSetDictionary = function(A, L) {
                            var r, M = L.length;
                            return A && A.state ? (r = A.state).wrap !== 0 && r.mode !== 11 ? u : r.mode === 11 && s(1, L, M, 0) !== r.check ? -3 : et(A, L, M, M) ? (r.mode = 31, -4) : (r.havedict = 1, x) : u;
                        }, f.inflateInfo = "pako inflate (from Nodeca project)";
                    },
                    {
                        "../utils/common": 41,
                        "./adler32": 43,
                        "./crc32": 45,
                        "./inffast": 48,
                        "./inftrees": 50
                    }
                ],
                50: [
                    function(e, g, f) {
                        var i = e("../utils/common"), s = [
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10,
                            11,
                            13,
                            15,
                            17,
                            19,
                            23,
                            27,
                            31,
                            35,
                            43,
                            51,
                            59,
                            67,
                            83,
                            99,
                            115,
                            131,
                            163,
                            195,
                            227,
                            258,
                            0,
                            0
                        ], n = [
                            16,
                            16,
                            16,
                            16,
                            16,
                            16,
                            16,
                            16,
                            17,
                            17,
                            17,
                            17,
                            18,
                            18,
                            18,
                            18,
                            19,
                            19,
                            19,
                            19,
                            20,
                            20,
                            20,
                            20,
                            21,
                            21,
                            21,
                            21,
                            16,
                            72,
                            78
                        ], h = [
                            1,
                            2,
                            3,
                            4,
                            5,
                            7,
                            9,
                            13,
                            17,
                            25,
                            33,
                            49,
                            65,
                            97,
                            129,
                            193,
                            257,
                            385,
                            513,
                            769,
                            1025,
                            1537,
                            2049,
                            3073,
                            4097,
                            6145,
                            8193,
                            12289,
                            16385,
                            24577,
                            0,
                            0
                        ], w = [
                            16,
                            16,
                            16,
                            16,
                            17,
                            17,
                            18,
                            18,
                            19,
                            19,
                            20,
                            20,
                            21,
                            21,
                            22,
                            22,
                            23,
                            23,
                            24,
                            24,
                            25,
                            25,
                            26,
                            26,
                            27,
                            27,
                            28,
                            28,
                            29,
                            29,
                            64,
                            64
                        ];
                        g.exports = function(E, k, x, u, _, l, v, p) {
                            var y, S, T, I, j, P, G, D, J, et = p.bits, A = 0, L = 0, r = 0, M = 0, ft = 0, V = 0, dt = 0, X = 0, ct = 0, B = 0, U = null, ut = 0, rt = new i.Buf16(16), Q = new i.Buf16(16), wt = null, xt = 0;
                            for(A = 0; A <= 15; A++)rt[A] = 0;
                            for(L = 0; L < u; L++)rt[k[x + L]]++;
                            for(ft = et, M = 15; 1 <= M && rt[M] === 0; M--);
                            if (M < ft && (ft = M), M === 0) return _[l++] = 20971520, _[l++] = 20971520, p.bits = 1, 0;
                            for(r = 1; r < M && rt[r] === 0; r++);
                            for(ft < r && (ft = r), A = X = 1; A <= 15; A++)if (X <<= 1, (X -= rt[A]) < 0) return -1;
                            if (0 < X && (E === 0 || M !== 1)) return -1;
                            for(Q[1] = 0, A = 1; A < 15; A++)Q[A + 1] = Q[A] + rt[A];
                            for(L = 0; L < u; L++)k[x + L] !== 0 && (v[Q[k[x + L]]++] = L);
                            if (P = E === 0 ? (U = wt = v, 19) : E === 1 ? (U = s, ut -= 257, wt = n, xt -= 257, 256) : (U = h, wt = w, -1), A = r, j = l, dt = L = B = 0, T = -1, I = (ct = 1 << (V = ft)) - 1, E === 1 && 852 < ct || E === 2 && 592 < ct) return 1;
                            for(;;){
                                for(G = A - dt, J = v[L] < P ? (D = 0, v[L]) : v[L] > P ? (D = wt[xt + v[L]], U[ut + v[L]]) : (D = 96, 0), y = 1 << A - dt, r = S = 1 << V; _[j + (B >> dt) + (S -= y)] = G << 24 | D << 16 | J | 0, S !== 0;);
                                for(y = 1 << A - 1; B & y;)y >>= 1;
                                if (y !== 0 ? (B &= y - 1, B += y) : B = 0, L++, --rt[A] == 0) {
                                    if (A === M) break;
                                    A = k[x + v[L]];
                                }
                                if (ft < A && (B & I) !== T) {
                                    for(dt === 0 && (dt = ft), j += r, X = 1 << (V = A - dt); V + dt < M && !((X -= rt[V + dt]) <= 0);)V++, X <<= 1;
                                    if (ct += 1 << V, E === 1 && 852 < ct || E === 2 && 592 < ct) return 1;
                                    _[T = B & I] = ft << 24 | V << 16 | j - l | 0;
                                }
                            }
                            return B !== 0 && (_[j + B] = A - dt << 24 | 64 << 16 | 0), p.bits = ft, 0;
                        };
                    },
                    {
                        "../utils/common": 41
                    }
                ],
                51: [
                    function(e, g, f) {
                        g.exports = {
                            2: "need dictionary",
                            1: "stream end",
                            0: "",
                            "-1": "file error",
                            "-2": "stream error",
                            "-3": "data error",
                            "-4": "insufficient memory",
                            "-5": "buffer error",
                            "-6": "incompatible version"
                        };
                    },
                    {}
                ],
                52: [
                    function(e, g, f) {
                        var i = e("../utils/common"), s = 0, n = 1;
                        function h(m) {
                            for(var z = m.length; 0 <= --z;)m[z] = 0;
                        }
                        var w = 0, E = 29, k = 256, x = k + 1 + E, u = 30, _ = 19, l = 2 * x + 1, v = 15, p = 16, y = 7, S = 256, T = 16, I = 17, j = 18, P = [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            1,
                            1,
                            1,
                            1,
                            2,
                            2,
                            2,
                            2,
                            3,
                            3,
                            3,
                            3,
                            4,
                            4,
                            4,
                            4,
                            5,
                            5,
                            5,
                            5,
                            0
                        ], G = [
                            0,
                            0,
                            0,
                            0,
                            1,
                            1,
                            2,
                            2,
                            3,
                            3,
                            4,
                            4,
                            5,
                            5,
                            6,
                            6,
                            7,
                            7,
                            8,
                            8,
                            9,
                            9,
                            10,
                            10,
                            11,
                            11,
                            12,
                            12,
                            13,
                            13
                        ], D = [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            2,
                            3,
                            7
                        ], J = [
                            16,
                            17,
                            18,
                            0,
                            8,
                            7,
                            9,
                            6,
                            10,
                            5,
                            11,
                            4,
                            12,
                            3,
                            13,
                            2,
                            14,
                            1,
                            15
                        ], et = new Array(2 * (x + 2));
                        h(et);
                        var A = new Array(2 * u);
                        h(A);
                        var L = new Array(512);
                        h(L);
                        var r = new Array(256);
                        h(r);
                        var M = new Array(E);
                        h(M);
                        var ft, V, dt, X = new Array(u);
                        function ct(m, z, H, Z, R) {
                            this.static_tree = m, this.extra_bits = z, this.extra_base = H, this.elems = Z, this.max_length = R, this.has_stree = m && m.length;
                        }
                        function B(m, z) {
                            this.dyn_tree = m, this.max_code = 0, this.stat_desc = z;
                        }
                        function U(m) {
                            return m < 256 ? L[m] : L[256 + (m >>> 7)];
                        }
                        function ut(m, z) {
                            m.pending_buf[m.pending++] = 255 & z, m.pending_buf[m.pending++] = z >>> 8 & 255;
                        }
                        function rt(m, z, H) {
                            m.bi_valid > p - H ? (m.bi_buf |= z << m.bi_valid & 65535, ut(m, m.bi_buf), m.bi_buf = z >> p - m.bi_valid, m.bi_valid += H - p) : (m.bi_buf |= z << m.bi_valid & 65535, m.bi_valid += H);
                        }
                        function Q(m, z, H) {
                            rt(m, H[2 * z], H[2 * z + 1]);
                        }
                        function wt(m, z) {
                            for(var H = 0; H |= 1 & m, m >>>= 1, H <<= 1, 0 < --z;);
                            return H >>> 1;
                        }
                        function xt(m, z, H) {
                            var Z, R, Y = new Array(v + 1), nt = 0;
                            for(Z = 1; Z <= v; Z++)Y[Z] = nt = nt + H[Z - 1] << 1;
                            for(R = 0; R <= z; R++){
                                var K = m[2 * R + 1];
                                K !== 0 && (m[2 * R] = wt(Y[K]++, K));
                            }
                        }
                        function ht(m) {
                            var z;
                            for(z = 0; z < x; z++)m.dyn_ltree[2 * z] = 0;
                            for(z = 0; z < u; z++)m.dyn_dtree[2 * z] = 0;
                            for(z = 0; z < _; z++)m.bl_tree[2 * z] = 0;
                            m.dyn_ltree[2 * S] = 1, m.opt_len = m.static_len = 0, m.last_lit = m.matches = 0;
                        }
                        function gt(m) {
                            8 < m.bi_valid ? ut(m, m.bi_buf) : 0 < m.bi_valid && (m.pending_buf[m.pending++] = m.bi_buf), m.bi_buf = 0, m.bi_valid = 0;
                        }
                        function kt(m, z, H, Z) {
                            var R = 2 * z, Y = 2 * H;
                            return m[R] < m[Y] || m[R] === m[Y] && Z[z] <= Z[H];
                        }
                        function _t(m, z, H) {
                            for(var Z = m.heap[H], R = H << 1; R <= m.heap_len && (R < m.heap_len && kt(z, m.heap[R + 1], m.heap[R], m.depth) && R++, !kt(z, Z, m.heap[R], m.depth));)m.heap[H] = m.heap[R], H = R, R <<= 1;
                            m.heap[H] = Z;
                        }
                        function It(m, z, H) {
                            var Z, R, Y, nt, K = 0;
                            if (m.last_lit !== 0) for(; Z = m.pending_buf[m.d_buf + 2 * K] << 8 | m.pending_buf[m.d_buf + 2 * K + 1], R = m.pending_buf[m.l_buf + K], K++, Z === 0 ? Q(m, R, z) : (Q(m, (Y = r[R]) + k + 1, z), (nt = P[Y]) !== 0 && rt(m, R -= M[Y], nt), Q(m, Y = U(--Z), H), (nt = G[Y]) !== 0 && rt(m, Z -= X[Y], nt)), K < m.last_lit;);
                            Q(m, S, z);
                        }
                        function Tt(m, z) {
                            var H, Z, R, Y = z.dyn_tree, nt = z.stat_desc.static_tree, K = z.stat_desc.has_stree, ot = z.stat_desc.elems, vt = -1;
                            for(m.heap_len = 0, m.heap_max = l, H = 0; H < ot; H++)Y[2 * H] !== 0 ? (m.heap[++m.heap_len] = vt = H, m.depth[H] = 0) : Y[2 * H + 1] = 0;
                            for(; m.heap_len < 2;)Y[2 * (R = m.heap[++m.heap_len] = vt < 2 ? ++vt : 0)] = 1, m.depth[R] = 0, m.opt_len--, K && (m.static_len -= nt[2 * R + 1]);
                            for(z.max_code = vt, H = m.heap_len >> 1; 1 <= H; H--)_t(m, Y, H);
                            for(R = ot; H = m.heap[1], m.heap[1] = m.heap[m.heap_len--], _t(m, Y, 1), Z = m.heap[1], m.heap[--m.heap_max] = H, m.heap[--m.heap_max] = Z, Y[2 * R] = Y[2 * H] + Y[2 * Z], m.depth[R] = (m.depth[H] >= m.depth[Z] ? m.depth[H] : m.depth[Z]) + 1, Y[2 * H + 1] = Y[2 * Z + 1] = R, m.heap[1] = R++, _t(m, Y, 1), 2 <= m.heap_len;);
                            m.heap[--m.heap_max] = m.heap[1], function(pt, Ct) {
                                var Nt, Ot, Zt, yt, Gt, Et, Ut = Ct.dyn_tree, At = Ct.max_code, ve = Ct.stat_desc.static_tree, Ft = Ct.stat_desc.has_stree, Dt = Ct.stat_desc.extra_bits, oe = Ct.stat_desc.extra_base, jt = Ct.stat_desc.max_length, Rt = 0;
                                for(yt = 0; yt <= v; yt++)pt.bl_count[yt] = 0;
                                for(Ut[2 * pt.heap[pt.heap_max] + 1] = 0, Nt = pt.heap_max + 1; Nt < l; Nt++)jt < (yt = Ut[2 * Ut[2 * (Ot = pt.heap[Nt]) + 1] + 1] + 1) && (yt = jt, Rt++), Ut[2 * Ot + 1] = yt, At < Ot || (pt.bl_count[yt]++, Gt = 0, oe <= Ot && (Gt = Dt[Ot - oe]), Et = Ut[2 * Ot], pt.opt_len += Et * (yt + Gt), Ft && (pt.static_len += Et * (ve[2 * Ot + 1] + Gt)));
                                if (Rt !== 0) {
                                    do {
                                        for(yt = jt - 1; pt.bl_count[yt] === 0;)yt--;
                                        pt.bl_count[yt]--, pt.bl_count[yt + 1] += 2, pt.bl_count[jt]--, Rt -= 2;
                                    }while (0 < Rt);
                                    for(yt = jt; yt !== 0; yt--)for(Ot = pt.bl_count[yt]; Ot !== 0;)At < (Zt = pt.heap[--Nt]) || (Ut[2 * Zt + 1] !== yt && (pt.opt_len += (yt - Ut[2 * Zt + 1]) * Ut[2 * Zt], Ut[2 * Zt + 1] = yt), Ot--);
                                }
                            }(m, z), xt(Y, vt, m.bl_count);
                        }
                        function t(m, z, H) {
                            var Z, R, Y = -1, nt = z[1], K = 0, ot = 7, vt = 4;
                            for(nt === 0 && (ot = 138, vt = 3), z[2 * (H + 1) + 1] = 65535, Z = 0; Z <= H; Z++)R = nt, nt = z[2 * (Z + 1) + 1], ++K < ot && R === nt || (K < vt ? m.bl_tree[2 * R] += K : R !== 0 ? (R !== Y && m.bl_tree[2 * R]++, m.bl_tree[2 * T]++) : K <= 10 ? m.bl_tree[2 * I]++ : m.bl_tree[2 * j]++, Y = R, vt = (K = 0) === nt ? (ot = 138, 3) : R === nt ? (ot = 6, 3) : (ot = 7, 4));
                        }
                        function $(m, z, H) {
                            var Z, R, Y = -1, nt = z[1], K = 0, ot = 7, vt = 4;
                            for(nt === 0 && (ot = 138, vt = 3), Z = 0; Z <= H; Z++)if (R = nt, nt = z[2 * (Z + 1) + 1], !(++K < ot && R === nt)) {
                                if (K < vt) for(; Q(m, R, m.bl_tree), --K != 0;);
                                else R !== 0 ? (R !== Y && (Q(m, R, m.bl_tree), K--), Q(m, T, m.bl_tree), rt(m, K - 3, 2)) : K <= 10 ? (Q(m, I, m.bl_tree), rt(m, K - 3, 3)) : (Q(m, j, m.bl_tree), rt(m, K - 11, 7));
                                Y = R, vt = (K = 0) === nt ? (ot = 138, 3) : R === nt ? (ot = 6, 3) : (ot = 7, 4);
                            }
                        }
                        h(X);
                        var F = !1;
                        function b(m, z, H, Z) {
                            rt(m, (w << 1) + (Z ? 1 : 0), 3), function(R, Y, nt, K) {
                                gt(R), ut(R, nt), ut(R, ~nt), i.arraySet(R.pending_buf, R.window, Y, nt, R.pending), R.pending += nt;
                            }(m, z, H);
                        }
                        f._tr_init = function(m) {
                            F || (function() {
                                var z, H, Z, R, Y, nt = new Array(v + 1);
                                for(R = Z = 0; R < E - 1; R++)for(M[R] = Z, z = 0; z < 1 << P[R]; z++)r[Z++] = R;
                                for(r[Z - 1] = R, R = Y = 0; R < 16; R++)for(X[R] = Y, z = 0; z < 1 << G[R]; z++)L[Y++] = R;
                                for(Y >>= 7; R < u; R++)for(X[R] = Y << 7, z = 0; z < 1 << G[R] - 7; z++)L[256 + Y++] = R;
                                for(H = 0; H <= v; H++)nt[H] = 0;
                                for(z = 0; z <= 143;)et[2 * z + 1] = 8, z++, nt[8]++;
                                for(; z <= 255;)et[2 * z + 1] = 9, z++, nt[9]++;
                                for(; z <= 279;)et[2 * z + 1] = 7, z++, nt[7]++;
                                for(; z <= 287;)et[2 * z + 1] = 8, z++, nt[8]++;
                                for(xt(et, x + 1, nt), z = 0; z < u; z++)A[2 * z + 1] = 5, A[2 * z] = wt(z, 5);
                                ft = new ct(et, P, k + 1, x, v), V = new ct(A, G, 0, u, v), dt = new ct(new Array(0), D, 0, _, y);
                            }(), F = !0), m.l_desc = new B(m.dyn_ltree, ft), m.d_desc = new B(m.dyn_dtree, V), m.bl_desc = new B(m.bl_tree, dt), m.bi_buf = 0, m.bi_valid = 0, ht(m);
                        }, f._tr_stored_block = b, f._tr_flush_block = function(m, z, H, Z) {
                            var R, Y, nt = 0;
                            0 < m.level ? (m.strm.data_type === 2 && (m.strm.data_type = function(K) {
                                var ot, vt = 4093624447;
                                for(ot = 0; ot <= 31; ot++, vt >>>= 1)if (1 & vt && K.dyn_ltree[2 * ot] !== 0) return s;
                                if (K.dyn_ltree[18] !== 0 || K.dyn_ltree[20] !== 0 || K.dyn_ltree[26] !== 0) return n;
                                for(ot = 32; ot < k; ot++)if (K.dyn_ltree[2 * ot] !== 0) return n;
                                return s;
                            }(m)), Tt(m, m.l_desc), Tt(m, m.d_desc), nt = function(K) {
                                var ot;
                                for(t(K, K.dyn_ltree, K.l_desc.max_code), t(K, K.dyn_dtree, K.d_desc.max_code), Tt(K, K.bl_desc), ot = _ - 1; 3 <= ot && K.bl_tree[2 * J[ot] + 1] === 0; ot--);
                                return K.opt_len += 3 * (ot + 1) + 5 + 5 + 4, ot;
                            }(m), R = m.opt_len + 3 + 7 >>> 3, (Y = m.static_len + 3 + 7 >>> 3) <= R && (R = Y)) : R = Y = H + 5, H + 4 <= R && z !== -1 ? b(m, z, H, Z) : m.strategy === 4 || Y === R ? (rt(m, 2 + (Z ? 1 : 0), 3), It(m, et, A)) : (rt(m, 4 + (Z ? 1 : 0), 3), function(K, ot, vt, pt) {
                                var Ct;
                                for(rt(K, ot - 257, 5), rt(K, vt - 1, 5), rt(K, pt - 4, 4), Ct = 0; Ct < pt; Ct++)rt(K, K.bl_tree[2 * J[Ct] + 1], 3);
                                $(K, K.dyn_ltree, ot - 1), $(K, K.dyn_dtree, vt - 1);
                            }(m, m.l_desc.max_code + 1, m.d_desc.max_code + 1, nt + 1), It(m, m.dyn_ltree, m.dyn_dtree)), ht(m), Z && gt(m);
                        }, f._tr_tally = function(m, z, H) {
                            return m.pending_buf[m.d_buf + 2 * m.last_lit] = z >>> 8 & 255, m.pending_buf[m.d_buf + 2 * m.last_lit + 1] = 255 & z, m.pending_buf[m.l_buf + m.last_lit] = 255 & H, m.last_lit++, z === 0 ? m.dyn_ltree[2 * H]++ : (m.matches++, z--, m.dyn_ltree[2 * (r[H] + k + 1)]++, m.dyn_dtree[2 * U(z)]++), m.last_lit === m.lit_bufsize - 1;
                        }, f._tr_align = function(m) {
                            rt(m, 2, 3), Q(m, S, et), function(z) {
                                z.bi_valid === 16 ? (ut(z, z.bi_buf), z.bi_buf = 0, z.bi_valid = 0) : 8 <= z.bi_valid && (z.pending_buf[z.pending++] = 255 & z.bi_buf, z.bi_buf >>= 8, z.bi_valid -= 8);
                            }(m);
                        };
                    },
                    {
                        "../utils/common": 41
                    }
                ],
                53: [
                    function(e, g, f) {
                        g.exports = function() {
                            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
                        };
                    },
                    {}
                ],
                54: [
                    function(e, g, f) {
                        (function(i) {
                            (function(s, n) {
                                if (!s.setImmediate) {
                                    var h, w, E, k, x = 1, u = {}, _ = !1, l = s.document, v = Object.getPrototypeOf && Object.getPrototypeOf(s);
                                    v = v && v.setTimeout ? v : s, h = {}.toString.call(s.process) === "[object process]" ? function(T) {
                                        process.nextTick(function() {
                                            y(T);
                                        });
                                    } : function() {
                                        if (s.postMessage && !s.importScripts) {
                                            var T = !0, I = s.onmessage;
                                            return s.onmessage = function() {
                                                T = !1;
                                            }, s.postMessage("", "*"), s.onmessage = I, T;
                                        }
                                    }() ? (k = "setImmediate$" + Math.random() + "$", s.addEventListener ? s.addEventListener("message", S, !1) : s.attachEvent("onmessage", S), function(T) {
                                        s.postMessage(k + T, "*");
                                    }) : s.MessageChannel ? ((E = new MessageChannel).port1.onmessage = function(T) {
                                        y(T.data);
                                    }, function(T) {
                                        E.port2.postMessage(T);
                                    }) : l && "onreadystatechange" in l.createElement("script") ? (w = l.documentElement, function(T) {
                                        var I = l.createElement("script");
                                        I.onreadystatechange = function() {
                                            y(T), I.onreadystatechange = null, w.removeChild(I), I = null;
                                        }, w.appendChild(I);
                                    }) : function(T) {
                                        setTimeout(y, 0, T);
                                    }, v.setImmediate = function(T) {
                                        typeof T != "function" && (T = new Function("" + T));
                                        for(var I = new Array(arguments.length - 1), j = 0; j < I.length; j++)I[j] = arguments[j + 1];
                                        var P = {
                                            callback: T,
                                            args: I
                                        };
                                        return u[x] = P, h(x), x++;
                                    }, v.clearImmediate = p;
                                }
                                function p(T) {
                                    delete u[T];
                                }
                                function y(T) {
                                    if (_) setTimeout(y, 0, T);
                                    else {
                                        var I = u[T];
                                        if (I) {
                                            _ = !0;
                                            try {
                                                (function(j) {
                                                    var P = j.callback, G = j.args;
                                                    switch(G.length){
                                                        case 0:
                                                            P();
                                                            break;
                                                        case 1:
                                                            P(G[0]);
                                                            break;
                                                        case 2:
                                                            P(G[0], G[1]);
                                                            break;
                                                        case 3:
                                                            P(G[0], G[1], G[2]);
                                                            break;
                                                        default:
                                                            P.apply(n, G);
                                                    }
                                                })(I);
                                            } finally{
                                                p(T), _ = !1;
                                            }
                                        }
                                    }
                                }
                                function S(T) {
                                    T.source === s && typeof T.data == "string" && T.data.indexOf(k) === 0 && y(+T.data.slice(k.length));
                                }
                            })(typeof self > "u" ? i === void 0 ? this : i : self);
                        }).call(this, typeof he < "u" ? he : typeof self < "u" ? self : typeof window < "u" ? window : {});
                    },
                    {}
                ]
            }, {}, [
                10
            ])(10);
        });
    })(Xe);
    var si = Xe.exports;
    const oi = ai(si), W = {
        files: [],
        activeIndex: -1,
        format: "png",
        anchor: "mc",
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
    }, it = (a)=>document.querySelector(a), qt = (a)=>document.querySelectorAll(a);
    function Yt(a) {
        return a < 1024 ? a + " B" : a < 1048576 ? (a / 1024).toFixed(1) + " KB" : (a / 1048576).toFixed(2) + " MB";
    }
    function li() {
        return {
            format: W.format,
            removeBlack: it("#remove-black").checked,
            threshold: parseInt(it("#threshold").value),
            feather: parseInt(it("#feather").value),
            pngColors: parseInt(it("#png-colors").value),
            pngDither: it("#png-dither").checked,
            jpegQuality: parseInt(it("#jpeg-quality").value),
            webpLossless: it("#webp-lossless").checked,
            webpQuality: parseInt(it("#webp-quality").value),
            resizeEnabled: it("#enable-resize").checked,
            resizePct: parseInt(it("#resize-pct").value),
            canvasEnabled: it("#enable-canvas").checked,
            canvasW: parseInt(it("#canvas-w").value) || 0,
            canvasH: parseInt(it("#canvas-h").value) || 0,
            canvasAnchor: W.anchor
        };
    }
    window.addFiles = ()=>it("#file-input").click();
    window.loadFiles = function(a) {
        for (const d of a)d.type.startsWith("image/") && W.files.push({
            file: d,
            name: d.name,
            inputSize: d.size,
            thumbUrl: URL.createObjectURL(d),
            resultUrl: null,
            outputSize: null,
            processing: !1,
            error: null,
            ver: 0
        });
        W.files.length > 0 && W.activeIndex === -1 && (W.activeIndex = 0), Jt(), ge(), Je();
    };
    window.removeFile = function(a, d) {
        d.stopPropagation(), W.files[a].ver++, URL.revokeObjectURL(W.files[a].thumbUrl), W.files[a].resultUrl && URL.revokeObjectURL(W.files[a].resultUrl), W.files.splice(a, 1), W.files.length ? W.activeIndex >= W.files.length ? W.activeIndex = W.files.length - 1 : a < W.activeIndex ? W.activeIndex-- : a === W.activeIndex && (W.activeIndex = Math.min(W.activeIndex, W.files.length - 1)) : W.activeIndex = -1, Jt(), ge();
    };
    window.clearAllFiles = function() {
        W.files.forEach((a)=>{
            a.ver++, URL.revokeObjectURL(a.thumbUrl), a.resultUrl && URL.revokeObjectURL(a.resultUrl);
        }), W.files = [], W.activeIndex = -1, Jt(), ge();
    };
    window.selectFile = function(a) {
        W.activeIndex = a, W.compareX = .5, it("#enable-canvas").checked && (it("#canvas-w").value = "", it("#canvas-h").value = "", er()), Jt(), ge();
    };
    function Jt() {
        const a = it("#file-list");
        a.innerHTML = W.files.map((d, e)=>{
            const g = [
                "file-item",
                e === W.activeIndex ? "active" : "",
                d.processing ? "processing" : "",
                d.error ? "error" : ""
            ].filter(Boolean).join(" ");
            let f = "";
            if (d.processing) f = '<div class="spinner"></div>';
            else if (d.error) f = '<span class="file-saved negative">err</span>';
            else if (d.outputSize != null) {
                const i = Math.round((1 - d.outputSize / d.inputSize) * 100);
                f = `<span class="file-saved ${i > 0 ? "positive" : i < 0 ? "negative" : ""}">${i > 0 ? "-" : i < 0 ? "+" : ""}${Math.abs(i)}%</span>`;
            }
            return `<div class="${g}" onclick="selectFile(${e})"><img class="file-thumb" src="${d.thumbUrl}"><div class="file-info"><div class="file-name">${d.name}</div><div class="file-meta">${Yt(d.inputSize)}${d.outputSize != null ? " → " + Yt(d.outputSize) : ""}</div></div>${f}<button class="file-remove" onclick="removeFile(${e},event)" title="Remove">×</button></div>`;
        }).join(""), it("#download-wrap").style.display = W.files.some((d)=>d.resultUrl) ? "" : "none", it("#clear-all-btn").style.display = W.files.length ? "" : "none", ui();
    }
    function ui() {
        const a = it("#summary-bar"), d = W.files.filter((s)=>s.outputSize != null);
        if (d.length < 1) {
            a.style.display = "none";
            return;
        }
        const e = d.reduce((s, n)=>s + n.inputSize, 0), g = d.reduce((s, n)=>s + n.outputSize, 0), f = e > 0 ? Math.round((1 - g / e) * 100) : 0, i = W.files.some((s)=>s.processing);
        a.style.display = "", a.innerHTML = `
    <div class="summary-label">Total${i ? " (processing…)" : ""}</div>
    <div class="summary-total">${f > 0 ? "-" : ""}${Math.abs(f)}% saved</div>
    <div class="summary-detail">${Yt(e)} → ${Yt(g)}${e > g ? " · " + Yt(e - g) + " freed" : ""}</div>
    <div class="summary-detail">${d.length}/${W.files.length} file${W.files.length !== 1 ? "s" : ""} optimized</div>
  `;
    }
    function ge() {
        const a = it("#main-area");
        if (!W.files.length) {
            a.innerHTML = '<div class="drop-zone" id="drop-zone"><p>Drop images here or click to browse</p><p>PNG, JPG, WebP, BMP, GIF</p></div>', rr();
            return;
        }
        const d = W.files[W.activeIndex];
        d && (a.innerHTML = `<div class="preview-area checker-bg" id="preview-area"><div class="preview-toolbar"><button onclick="toggleCompare()" id="compare-btn" title="Before / after" class="${W.showCompare ? "active" : ""}">&#9674;</button><div class="sep"></div><button onclick="zoomIn()" title="Zoom in">+</button><button onclick="zoomOut()" title="Zoom out">&minus;</button><button onclick="resetView()" title="Fit">&#8689;</button></div><div class="zoom-info" id="zoom-info">${Math.round(W.zoom * 100)}%</div><div class="canvas-wrap" id="canvas-wrap"></div></div><div class="stats-bar" id="stats-bar"></div>`, Ye(d, !0), fi(), Ie());
    }
    function Ye(a, d) {
        const e = new Image;
        e.onload = ()=>{
            W.imgW = e.naturalWidth, W.imgH = e.naturalHeight, Re(a), d && resetView();
        }, e.src = a.resultUrl || a.thumbUrl;
    }
    function ci(a) {
        if (a.outW && a.outH && (a.outW !== W.imgW || a.outH !== W.imgH)) {
            Ye(a, !1);
            return;
        }
        const d = it("#img-after"), e = !W.showCompare && it("#canvas-wrap > img");
        d && a.resultUrl ? d.src = a.resultUrl : e && a.resultUrl ? e.src = a.resultUrl : Re(a);
    }
    function Re(a) {
        const d = it("#canvas-wrap");
        if (!d || (a || (a = W.files[W.activeIndex]), !a)) return;
        const e = W.imgW, g = W.imgH;
        if (W.showCompare && a.resultUrl) {
            const f = Math.round(W.compareX * e);
            d.innerHTML = `<div class="compare-container" style="width:${e}px;height:${g}px;"><img src="${a.thumbUrl}" draggable="false" style="width:${e}px;height:${g}px;clip-path:inset(0 ${e - f}px 0 0);" id="img-before"><img src="${a.resultUrl}" draggable="false" style="width:${e}px;height:${g}px;clip-path:inset(0 0 0 ${f}px);" id="img-after"><div class="slider-divider" id="compare-slider" style="left:${f}px;"></div></div>`, Ke(), di();
        } else d.innerHTML = `<img src="${a.resultUrl || a.thumbUrl}" draggable="false" style="width:${e}px;height:${g}px;">`;
        Qt();
    }
    function Qt() {
        const a = it("#canvas-wrap");
        if (!a) return;
        a.style.transform = `translate(${W.panX}px,${W.panY}px) scale(${W.zoom})`;
        const d = it("#zoom-info");
        d && (d.textContent = Math.round(W.zoom * 100) + "%"), Ke();
    }
    function Ke() {
        const a = it("#preview-area");
        if (!a) return;
        let d = it("#compare-labels");
        if (!W.showCompare || !W.files[W.activeIndex]?.resultUrl) {
            d && d.remove();
            return;
        }
        d || (d = document.createElement("div"), d.id = "compare-labels", d.style.cssText = "position:absolute;top:12px;left:12px;right:12px;z-index:6;display:flex;justify-content:space-between;pointer-events:none;", d.innerHTML = '<span class="compare-label">before</span><span class="compare-label">after</span>', a.appendChild(d));
    }
    window.resetView = function() {
        const a = it("#preview-area");
        if (!a || !W.imgW) return;
        const d = a.clientWidth, e = a.clientHeight, g = Math.min(d / W.imgW, e / W.imgH, 1) * .9;
        W.zoom = g, W.panX = (d - W.imgW * g) / 2, W.panY = (e - W.imgH * g) / 2, Qt();
    };
    window.zoomIn = ()=>{
        W.zoom = Math.min(W.zoom * 1.3, 32), Qt();
    };
    window.zoomOut = ()=>{
        W.zoom = Math.max(W.zoom / 1.3, .05), Qt();
    };
    window.toggleCompare = ()=>{
        W.showCompare = !W.showCompare, W.compareX = .5;
        const a = it("#compare-labels");
        a && a.remove(), Re();
        const d = it("#compare-btn");
        d && (d.className = W.showCompare ? "active" : "");
    };
    function fi() {
        const a = it("#preview-area");
        a && (a.addEventListener("wheel", (d)=>{
            d.preventDefault();
            const e = a.getBoundingClientRect(), g = d.clientX - e.left, f = d.clientY - e.top, i = W.zoom;
            W.zoom = Math.min(Math.max(W.zoom * (d.deltaY < 0 ? 1.15 : 1 / 1.15), .05), 32), W.panX = g - (g - W.panX) * (W.zoom / i), W.panY = f - (f - W.panY) * (W.zoom / i), Qt();
        }, {
            passive: !1
        }), a.addEventListener("mousedown", (d)=>{
            d.target.id === "compare-slider" || d.target.closest("#compare-slider") || (W.isPanning = !0, W.panStart = {
                x: d.clientX - W.panX,
                y: d.clientY - W.panY
            }, a.style.cursor = "grabbing");
        }));
    }
    window.addEventListener("mousemove", (a)=>{
        W.isPanning && (W.panX = a.clientX - W.panStart.x, W.panY = a.clientY - W.panStart.y, Qt());
    });
    window.addEventListener("mouseup", ()=>{
        if (W.isPanning) {
            W.isPanning = !1;
            const a = it("#preview-area");
            a && (a.style.cursor = "");
        }
    });
    function di() {
        const a = it("#compare-slider");
        if (!a) return;
        let d = !1;
        a.addEventListener("mousedown", (g)=>{
            d = !0, g.preventDefault(), g.stopPropagation();
        });
        const e = (g)=>{
            if (!d) return;
            const f = document.querySelector("#canvas-wrap .compare-container");
            if (!f) return;
            const i = f.getBoundingClientRect(), s = Math.max(.01, Math.min(.99, (g.clientX - i.left) / i.width));
            W.compareX = s;
            const n = Math.round(s * W.imgW), h = it("#img-before"), w = it("#img-after");
            h && (h.style.clipPath = `inset(0 ${W.imgW - n}px 0 0)`), w && (w.style.clipPath = `inset(0 0 0 ${n}px)`), a.style.left = n + "px";
        };
        window.addEventListener("mousemove", e), window.addEventListener("mouseup", ()=>{
            d = !1;
        });
    }
    function Ie() {
        const a = it("#stats-bar"), d = W.files[W.activeIndex];
        if (!a) return;
        if (!d) {
            a.innerHTML = "";
            return;
        }
        let e = `<span><strong>${d.name}</strong></span><span>${(d.file.type.split("/")[1] || "").toUpperCase()}</span><span>In: ${Yt(d.inputSize)}</span>`;
        if (d.outputSize != null) {
            e += `<span>Out: ${Yt(d.outputSize)}</span>`;
            const g = Math.round((1 - d.outputSize / d.inputSize) * 100);
            g > 0 && (e += `<span style="color:var(--success);font-weight:600">-${g}%</span>`);
        }
        d.outW && d.outH && (e += `<span>${d.outW}×${d.outH}</span>`), d.processing && (e += '<span style="color:var(--accent)">processing…</span>'), d.error && (e += `<span style="color:var(--danger)">${d.error}</span>`), d.resultUrl && (e += `<button class="btn btn-sm" style="margin-left:auto" onclick="downloadOne(${W.activeIndex})">Download</button>`), a.innerHTML = e;
    }
    async function hi(a) {
        const d = W.files[a];
        if (!d || d.processing) return;
        d.processing = !0, d.error = null, d.ver++;
        const e = d.ver;
        Jt(), a === W.activeIndex && Ie();
        try {
            d.resultUrl && (URL.revokeObjectURL(d.resultUrl), d.resultUrl = null);
            const g = await ri(d.file, li());
            if (d.ver !== e) return;
            d.resultUrl = g.url, d.outputSize = g.outputSize, d.outW = g.width, d.outH = g.height, d.processing = !1;
        } catch (g) {
            if (d.ver !== e) return;
            d.processing = !1, d.error = g.message, console.error("Process error:", g);
        }
        Jt(), a === W.activeIndex && (ci(d), Ie());
    }
    function Je() {
        W.files.forEach((a, d)=>hi(d));
    }
    function Bt() {
        clearTimeout(W.debounce), W.debounce = setTimeout(()=>{
            W.files.forEach((a)=>{
                a.resultUrl && URL.revokeObjectURL(a.resultUrl), a.resultUrl = null, a.outputSize = null;
            }), Je();
        }, 400);
    }
    window.downloadOne = function(a) {
        const d = W.files[a];
        if (!d || !d.resultUrl) return;
        const e = {
            png: "png",
            jpeg: "jpg",
            webp: "webp"
        }[W.format] || "png", g = document.createElement("a");
        g.href = d.resultUrl, g.download = d.name.replace(/\.[^.]+$/, "") + "." + e, g.click();
    };
    function Qe(a) {
        const d = {
            png: "png",
            jpeg: "jpg",
            webp: "webp"
        }[W.format] || "png";
        return a.name.replace(/\.[^.]+$/, "") + "." + d;
    }
    async function tr(a) {
        return (await fetch(a)).blob();
    }
    const pi = typeof window.showDirectoryPicker == "function";
    window.downloadAllZip = async function() {
        const a = it("#download-all-btn"), d = a.textContent;
        a.textContent = "Packing ZIP…", a.disabled = !0;
        try {
            const e = new oi, g = W.files.filter((s)=>s.resultUrl);
            for (const s of g){
                const n = await tr(s.resultUrl);
                e.file(Qe(s), n);
            }
            const f = await e.generateAsync({
                type: "blob"
            }), i = document.createElement("a");
            i.href = URL.createObjectURL(f), i.download = "images-optimized.zip", i.click(), setTimeout(()=>URL.revokeObjectURL(i.href), 5e3);
        } catch (e) {
            console.error("ZIP error:", e);
        } finally{
            a.textContent = d, a.disabled = !1;
        }
    };
    window.downloadAllToFolder = async function() {
        try {
            const a = await window.showDirectoryPicker({
                mode: "readwrite"
            }), d = W.files.filter((g)=>g.resultUrl);
            let e = 0;
            for (const g of d){
                const f = await tr(g.resultUrl), i = Qe(g), n = await (await a.getFileHandle(i, {
                    create: !0
                })).createWritable();
                await n.write(f), await n.close(), e++;
            }
            alert(`Saved ${e} file(s) to folder.`);
        } catch (a) {
            a.name !== "AbortError" && console.error("Folder save error:", a);
        }
    };
    window.showDownloadMenu = function() {
        let a = it("#download-menu");
        if (a) {
            a.remove();
            return;
        }
        a = document.createElement("div"), a.id = "download-menu", a.style.cssText = "position:absolute;top:100%;right:0;margin-top:4px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-sm);box-shadow:0 4px 12px rgba(0,0,0,.12);z-index:100;min-width:180px;overflow:hidden;";
        const d = [
            {
                label: "Download as ZIP",
                action: "downloadAllZip()"
            }
        ];
        pi && d.push({
            label: "Save to folder…",
            action: "downloadAllToFolder()"
        }), a.innerHTML = d.map((f)=>`<div style="padding:8px 14px;font-size:12px;cursor:pointer;transition:background .1s;" onmouseenter="this.style.background='var(--surface2)'" onmouseleave="this.style.background=''" onclick="this.parentElement.remove();${f.action}">${f.label}</div>`).join("");
        const e = it("#download-wrap");
        e.appendChild(a);
        const g = (f)=>{
            e.contains(f.target) || (a.remove(), document.removeEventListener("click", g));
        };
        setTimeout(()=>document.addEventListener("click", g), 0);
    };
    function mi() {
        const a = W.format;
        qt("#format-btns button").forEach((d)=>d.classList.toggle("active", d.dataset.fmt === a)), it("#png-settings").style.display = a === "png" ? "" : "none", it("#jpeg-settings").style.display = a === "jpeg" ? "" : "none", it("#webp-settings").style.display = a === "webp" ? "" : "none";
    }
    function er() {
        const a = W.files[W.activeIndex];
        if (!a) return;
        const d = new Image;
        d.onload = ()=>{
            const e = it("#canvas-w"), g = it("#canvas-h");
            e && !parseInt(e.value) && (e.value = d.naturalWidth), g && !parseInt(g.value) && (g.value = d.naturalHeight);
        }, d.src = a.thumbUrl;
    }
    function rr() {
        const a = it("#drop-zone");
        a && (a.addEventListener("click", window.addFiles), a.addEventListener("dragover", (d)=>{
            d.preventDefault(), a.classList.add("over");
        }), a.addEventListener("dragleave", ()=>a.classList.remove("over")), a.addEventListener("drop", (d)=>{
            d.preventDefault(), d.stopPropagation(), a.classList.remove("over"), window.loadFiles(d.dataTransfer.files);
        }));
    }
    document.addEventListener("DOMContentLoaded", ()=>{
        rr(), document.addEventListener("dragover", (a)=>a.preventDefault()), document.addEventListener("drop", (a)=>{
            a.preventDefault(), a.dataTransfer.files.length && window.loadFiles(a.dataTransfer.files);
        }), it("#file-input").addEventListener("change", (a)=>{
            window.loadFiles(a.target.files), a.target.value = "";
        }), qt("#format-btns button").forEach((a)=>{
            a.addEventListener("click", ()=>{
                W.format = a.dataset.fmt, mi(), Bt();
            });
        }), it("#remove-black").addEventListener("change", ()=>{
            it("#black-settings").style.display = it("#remove-black").checked ? "" : "none", Bt();
        }), [
            "threshold",
            "feather",
            "png-colors",
            "jpeg-quality",
            "webp-quality"
        ].forEach((a)=>{
            const d = it(`#${a}`), e = {
                threshold: "thresh-val",
                feather: "feather-val",
                "png-colors": "colors-val",
                "jpeg-quality": "jpeg-q-val",
                "webp-quality": "webp-q-val"
            }[a];
            d.addEventListener("input", ()=>{
                it(`#${e}`).textContent = d.value, Bt();
            });
        }), [
            "png-dither",
            "jpeg-mozjpeg"
        ].forEach((a)=>{
            it(`#${a}`).addEventListener("change", Bt);
        }), it("#webp-lossless").addEventListener("change", ()=>{
            it("#webp-q-row").style.display = it("#webp-lossless").checked ? "none" : "", Bt();
        }), it("#enable-resize").addEventListener("change", ()=>{
            it("#resize-settings").style.display = it("#enable-resize").checked ? "" : "none", Bt();
        }), it("#resize-pct").addEventListener("input", ()=>{
            const a = it("#resize-pct").value;
            it("#resize-val").textContent = a + "%", qt("#resize-presets button").forEach((d)=>d.classList.toggle("active", d.dataset.pct === a)), Bt();
        }), qt("#resize-presets button").forEach((a)=>{
            a.addEventListener("click", ()=>{
                const d = a.dataset.pct;
                it("#resize-pct").value = d, it("#resize-val").textContent = d + "%", qt("#resize-presets button").forEach((e)=>e.classList.toggle("active", e.dataset.pct === d)), Bt();
            });
        }), it("#enable-canvas").addEventListener("change", ()=>{
            const a = it("#enable-canvas").checked;
            it("#canvas-settings").style.display = a ? "" : "none", a && er(), Bt();
        }), it("#canvas-w").addEventListener("change", Bt), it("#canvas-h").addEventListener("change", Bt), qt("#anchor-grid button").forEach((a)=>{
            a.addEventListener("click", ()=>{
                W.anchor = a.dataset.a, qt("#anchor-grid button").forEach((d)=>d.classList.toggle("active", d.dataset.a === W.anchor)), Bt();
            });
        });
    });
})();
