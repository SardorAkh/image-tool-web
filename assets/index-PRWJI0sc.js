(async ()=>{
    (function() {
        const g = document.createElement("link").relList;
        if (g && g.supports && g.supports("modulepreload")) return;
        for (const f of document.querySelectorAll('link[rel="modulepreload"]'))v(f);
        new MutationObserver((f)=>{
            for (const i of f)if (i.type === "childList") for (const s of i.addedNodes)s.tagName === "LINK" && s.rel === "modulepreload" && v(s);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function e(f) {
            const i = {};
            return f.integrity && (i.integrity = f.integrity), f.referrerPolicy && (i.referrerPolicy = f.referrerPolicy), f.crossOrigin === "use-credentials" ? i.credentials = "include" : f.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
        }
        function v(f) {
            if (f.ep) return;
            f.ep = !0;
            const i = e(f);
            fetch(f.href, i);
        }
    })();
    var mn = (()=>{
        var l = import.meta.url;
        return function(g = {}) {
            var e = g, v, f, i = new Promise((a, c)=>{
                v = a, f = c;
            });
            const n = globalThis.ServiceWorkerGlobalScope !== void 0 && typeof self < "u" && globalThis.caches && globalThis.caches.default !== void 0, d = typeof process == "object" && process.release && process.release.name === "node";
            (n || d) && (globalThis.ImageData || (globalThis.ImageData = class {
                constructor(c, S, O){
                    this.data = c, this.width = S, this.height = O;
                }
            }), import.meta.url === void 0 && (import.meta.url = "https://localhost"), typeof self < "u" && self.location === void 0 && (self.location = {
                href: ""
            }));
            var w = Object.assign({}, e), E = "./this.program", k = (a, c)=>{
                throw c;
            }, x = typeof window == "object", u = typeof importScripts == "function";
            typeof process == "object" && typeof process.versions == "object" && process.versions.node;
            var _ = "";
            function o(a) {
                return e.locateFile ? e.locateFile(a, _) : _ + a;
            }
            var m;
            (x || u) && (u ? _ = self.location.href : typeof document < "u" && document.currentScript && (_ = document.currentScript.src), l && (_ = l), _.startsWith("blob:") ? _ = "" : _ = _.substr(0, _.replace(/[?#].*/, "").lastIndexOf("/") + 1), u && (m = (a)=>{
                var c = new XMLHttpRequest;
                return c.open("GET", a, !1), c.responseType = "arraybuffer", c.send(null), new Uint8Array(c.response);
            }));
            var h = e.print || console.log.bind(console), y = e.printErr || console.error.bind(console);
            Object.assign(e, w), w = null, e.arguments && e.arguments, e.thisProgram && (E = e.thisProgram), e.quit && (k = e.quit);
            var C;
            e.wasmBinary && (C = e.wasmBinary);
            var I, T = !1, j, P, G, D, J, et, A, L;
            function r() {
                var a = I.buffer;
                e.HEAP8 = j = new Int8Array(a), e.HEAP16 = G = new Int16Array(a), e.HEAPU8 = P = new Uint8Array(a), e.HEAPU16 = D = new Uint16Array(a), e.HEAP32 = J = new Int32Array(a), e.HEAPU32 = et = new Uint32Array(a), e.HEAPF32 = A = new Float32Array(a), e.HEAPF64 = L = new Float64Array(a);
            }
            var M = [], ft = [], V = [];
            function dt() {
                if (e.preRun) for(typeof e.preRun == "function" && (e.preRun = [
                    e.preRun
                ]); e.preRun.length;)B(e.preRun.shift());
                p(M);
            }
            function X() {
                p(ft);
            }
            function ut() {
                if (e.postRun) for(typeof e.postRun == "function" && (e.postRun = [
                    e.postRun
                ]); e.postRun.length;)lt(e.postRun.shift());
                p(V);
            }
            function B(a) {
                M.unshift(a);
            }
            function U(a) {
                ft.unshift(a);
            }
            function lt(a) {
                V.unshift(a);
            }
            var rt = 0, Q = null;
            function wt(a) {
                rt++, e.monitorRunDependencies?.(rt);
            }
            function xt(a) {
                if (rt--, e.monitorRunDependencies?.(rt), rt == 0 && Q) {
                    var c = Q;
                    Q = null, c();
                }
            }
            function ht(a) {
                e.onAbort?.(a), a = "Aborted(" + a + ")", y(a), T = !0, a += ". Build with -sASSERTIONS for more info.";
                var c = new WebAssembly.RuntimeError(a);
                throw f(c), c;
            }
            var gt = "data:application/octet-stream;base64,", kt = (a)=>a.startsWith(gt), _t;
            e.locateFile ? (_t = "mozjpeg_enc.wasm", kt(_t) || (_t = o(_t))) : _t = new URL("" + new URL("mozjpeg_enc-DO-zoExo.wasm", import.meta.url).href, import.meta.url).href;
            function Tt(a) {
                if (a == _t && C) return new Uint8Array(C);
                if (m) return m(a);
                throw "both async and sync fetching of the wasm failed";
            }
            function It(a) {
                return !C && (x || u) && typeof fetch == "function" ? fetch(a, {
                    credentials: "same-origin"
                }).then((c)=>{
                    if (!c.ok) throw `failed to load wasm binary file at '${a}'`;
                    return c.arrayBuffer();
                }).catch(()=>Tt(a)) : Promise.resolve().then(()=>Tt(a));
            }
            function t(a, c, S) {
                return It(a).then((O)=>WebAssembly.instantiate(O, c)).then(S, (O)=>{
                    y(`failed to asynchronously prepare wasm: ${O}`), ht(O);
                });
            }
            function $(a, c, S, O) {
                return !a && typeof WebAssembly.instantiateStreaming == "function" && !kt(c) && typeof fetch == "function" ? fetch(c, {
                    credentials: "same-origin"
                }).then((N)=>{
                    var q = WebAssembly.instantiateStreaming(N, S);
                    return q.then(O, function(at) {
                        return y(`wasm streaming compile failed: ${at}`), y("falling back to ArrayBuffer instantiation"), t(c, S, O);
                    });
                }) : t(c, S, O);
            }
            function F() {
                var a = {
                    a: hn
                };
                function c(O, N) {
                    return Dt = O.exports, I = Dt.C, r(), Re = Dt.H, U(Dt.D), xt(), Dt;
                }
                wt();
                function S(O) {
                    c(O.instance);
                }
                if (e.instantiateWasm) try {
                    return e.instantiateWasm(a, c);
                } catch (O) {
                    y(`Module.instantiateWasm callback failed with error: ${O}`), f(O);
                }
                return $(C, _t, a, S).catch(f), {};
            }
            function b(a) {
                this.name = "ExitStatus", this.message = `Program terminated with exit(${a})`, this.status = a;
            }
            var p = (a)=>{
                for(; a.length > 0;)a.shift()(e);
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
                init(c, S) {
                    this.set_adjusted_ptr(0), this.set_type(c), this.set_destructor(S);
                }
                set_adjusted_ptr(c) {
                    et[this.ptr + 16 >> 2] = c;
                }
                get_adjusted_ptr() {
                    return et[this.ptr + 16 >> 2];
                }
                get_exception_ptr() {
                    var c = Le(this.get_type());
                    if (c) return et[this.excPtr >> 2];
                    var S = this.get_adjusted_ptr();
                    return S !== 0 ? S : this.excPtr;
                }
            }
            var Z = 0, H = (a, c, S)=>{
                var O = new z(a);
                throw O.init(c, S), Z = a, Z;
            }, R = {}, Y = (a)=>{
                for(; a.length;){
                    var c = a.pop(), S = a.pop();
                    S(c);
                }
            };
            function nt(a) {
                return this.fromWireType(et[a >> 2]);
            }
            var K = {}, st = {}, vt = {}, pt, St = (a)=>{
                throw new pt(a);
            }, Mt = (a, c, S)=>{
                a.forEach(function(tt) {
                    vt[tt] = c;
                });
                function O(tt) {
                    var it = S(tt);
                    it.length !== a.length && St("Mismatched type converter count");
                    for(var ot = 0; ot < a.length; ++ot)Bt(a[ot], it[ot]);
                }
                var N = new Array(c.length), q = [], at = 0;
                c.forEach((tt, it)=>{
                    st.hasOwnProperty(tt) ? N[it] = st[tt] : (q.push(tt), K.hasOwnProperty(tt) || (K[tt] = []), K[tt].push(()=>{
                        N[it] = st[tt], ++at, at === q.length && O(N);
                    }));
                }), q.length === 0 && O(N);
            }, Ot = (a)=>{
                var c = R[a];
                delete R[a];
                var S = c.rawConstructor, O = c.rawDestructor, N = c.fields, q = N.map((at)=>at.getterReturnType).concat(N.map((at)=>at.setterArgumentType));
                Mt([
                    a
                ], q, (at)=>{
                    var tt = {};
                    return N.forEach((it, ot)=>{
                        var mt = it.fieldName, bt = at[ot], Ct = it.getter, Ft = it.getterContext, Lt = at[ot + N.length], ke = it.setter, Nt = it.setterContext;
                        tt[mt] = {
                            read: (te)=>bt.fromWireType(Ct(Ft, te)),
                            write: (te, xe)=>{
                                var ue = [];
                                ke(Nt, te, Lt.toWireType(ue, xe)), Y(ue);
                            }
                        };
                    }), [
                        {
                            name: c.name,
                            fromWireType: (it)=>{
                                var ot = {};
                                for(var mt in tt)ot[mt] = tt[mt].read(it);
                                return O(it), ot;
                            },
                            toWireType: (it, ot)=>{
                                for(var mt in tt)if (!(mt in ot)) throw new TypeError(`Missing field: "${mt}"`);
                                var bt = S();
                                for(mt in tt)tt[mt].write(bt, ot[mt]);
                                return it !== null && it.push(O, bt), bt;
                            },
                            argPackAdvance: Pt,
                            readValueFromPointer: nt,
                            destructorFunction: O
                        }
                    ];
                });
            }, Zt = (a, c, S, O, N)=>{}, yt = ()=>{
                for(var a = new Array(256), c = 0; c < 256; ++c)a[c] = String.fromCharCode(c);
                Ht = a;
            }, Ht, Et = (a)=>{
                for(var c = "", S = a; P[S];)c += Ht[P[S++]];
                return c;
            }, Ut, At = (a)=>{
                throw new Ut(a);
            };
            function ge(a, c, S = {}) {
                var O = c.name;
                if (a || At(`type "${O}" must have a positive integer typeid pointer`), st.hasOwnProperty(a)) {
                    if (S.ignoreDuplicateRegistrations) return;
                    At(`Cannot register type '${O}' twice`);
                }
                if (st[a] = c, delete vt[a], K.hasOwnProperty(a)) {
                    var N = K[a];
                    delete K[a], N.forEach((q)=>q());
                }
            }
            function Bt(a, c, S = {}) {
                if (!("argPackAdvance" in c)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
                return ge(a, c, S);
            }
            var Pt = 8, se = (a, c, S, O)=>{
                c = Et(c), Bt(a, {
                    name: c,
                    fromWireType: function(N) {
                        return !!N;
                    },
                    toWireType: function(N, q) {
                        return q ? S : O;
                    },
                    argPackAdvance: Pt,
                    readValueFromPointer: function(N) {
                        return this.fromWireType(P[N]);
                    },
                    destructorFunction: null
                });
            }, jt = [], Rt = [], ve = (a)=>{
                a > 9 && --Rt[a + 1] === 0 && (Rt[a] = void 0, jt.push(a));
            }, er = ()=>Rt.length / 2 - 5 - jt.length, rr = ()=>{
                Rt.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1), e.count_emval_handles = er;
            }, Gt = {
                toValue: (a)=>(a || At("Cannot use deleted val. handle = " + a), Rt[a]),
                toHandle: (a)=>{
                    switch(a){
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
                                return Rt[c] = a, Rt[c + 1] = 1, c;
                            }
                    }
                }
            }, nr = {
                name: "emscripten::val",
                fromWireType: (a)=>{
                    var c = Gt.toValue(a);
                    return ve(a), c;
                },
                toWireType: (a, c)=>Gt.toHandle(c),
                argPackAdvance: Pt,
                readValueFromPointer: nt,
                destructorFunction: null
            }, ir = (a)=>Bt(a, nr), ar = (a, c)=>{
                switch(c){
                    case 4:
                        return function(S) {
                            return this.fromWireType(A[S >> 2]);
                        };
                    case 8:
                        return function(S) {
                            return this.fromWireType(L[S >> 3]);
                        };
                    default:
                        throw new TypeError(`invalid float width (${c}): ${a}`);
                }
            }, sr = (a, c, S)=>{
                c = Et(c), Bt(a, {
                    name: c,
                    fromWireType: (O)=>O,
                    toWireType: (O, N)=>N,
                    argPackAdvance: Pt,
                    readValueFromPointer: ar(c, S),
                    destructorFunction: null
                });
            }, _e = (a, c)=>Object.defineProperty(c, "name", {
                    value: a
                });
            function or(a) {
                for(var c = 1; c < a.length; ++c)if (a[c] !== null && a[c].destructorFunction === void 0) return !0;
                return !1;
            }
            function lr(a, c, S, O, N, q) {
                var at = c.length;
                at < 2 && At("argTypes array size mismatch! Must at least get return value and 'this' types!"), c[1];
                var tt = or(c), it = c[0].name !== "void", ot = at - 2, mt = new Array(ot), bt = [], Ct = [], Ft = function(...Lt) {
                    Lt.length !== ot && At(`function ${a} called with ${Lt.length} arguments, expected ${ot}`), Ct.length = 0;
                    var ke;
                    bt.length = 1, bt[0] = N;
                    for(var Nt = 0; Nt < ot; ++Nt)mt[Nt] = c[Nt + 2].toWireType(Ct, Lt[Nt]), bt.push(mt[Nt]);
                    var te = O(...bt);
                    function xe(ue) {
                        if (tt) Y(Ct);
                        else for(var Xt = 2; Xt < c.length; Xt++){
                            var pn = Xt === 1 ? ke : mt[Xt - 2];
                            c[Xt].destructorFunction !== null && c[Xt].destructorFunction(pn);
                        }
                        if (it) return c[0].fromWireType(ue);
                    }
                    return xe(te);
                };
                return _e(a, Ft);
            }
            var ur = (a, c, S)=>{
                if (a[c].overloadTable === void 0) {
                    var O = a[c];
                    a[c] = function(...N) {
                        return a[c].overloadTable.hasOwnProperty(N.length) || At(`Function '${S}' called with an invalid number of arguments (${N.length}) - expects one of (${a[c].overloadTable})!`), a[c].overloadTable[N.length].apply(this, N);
                    }, a[c].overloadTable = [], a[c].overloadTable[O.argCount] = O;
                }
            }, cr = (a, c, S)=>{
                e.hasOwnProperty(a) ? ((S === void 0 || e[a].overloadTable !== void 0 && e[a].overloadTable[S] !== void 0) && At(`Cannot register public name '${a}' twice`), ur(e, a, a), e.hasOwnProperty(S) && At(`Cannot register multiple overloads of a function with the same number of arguments (${S})!`), e[a].overloadTable[S] = c) : (e[a] = c, S !== void 0 && (e[a].numArguments = S));
            }, fr = (a, c)=>{
                for(var S = [], O = 0; O < a; O++)S.push(et[c + O * 4 >> 2]);
                return S;
            }, dr = (a, c, S)=>{
                e.hasOwnProperty(a) || St("Replacing nonexistent public symbol"), e[a].overloadTable !== void 0 && S !== void 0 ? e[a].overloadTable[S] = c : (e[a] = c, e[a].argCount = S);
            }, hr = (a, c, S)=>{
                a = a.replace(/p/g, "i");
                var O = e["dynCall_" + a];
                return O(c, ...S);
            }, oe = [], Re, Oe = (a)=>{
                var c = oe[a];
                return c || (a >= oe.length && (oe.length = a + 1), oe[a] = c = Re.get(a)), c;
            }, pr = (a, c, S = [])=>{
                if (a.includes("j")) return hr(a, c, S);
                var O = Oe(c)(...S);
                return O;
            }, mr = (a, c)=>(...S)=>pr(a, c, S), Jt = (a, c)=>{
                a = Et(a);
                function S() {
                    return a.includes("j") ? mr(a, c) : Oe(c);
                }
                var O = S();
                return typeof O != "function" && At(`unknown function pointer with signature ${a}: ${c}`), O;
            }, gr = (a, c)=>{
                var S = _e(c, function(O) {
                    this.name = c, this.message = O;
                    var N = new Error(O).stack;
                    N !== void 0 && (this.stack = this.toString() + `
` + N.replace(/^Error(:[^\n]*)?\n/, ""));
                });
                return S.prototype = Object.create(a.prototype), S.prototype.constructor = S, S.prototype.toString = function() {
                    return this.message === void 0 ? this.name : `${this.name}: ${this.message}`;
                }, S;
            }, Ue, Be = (a)=>{
                var c = De(a), S = Et(c);
                return $t(c), S;
            }, vr = (a, c)=>{
                var S = [], O = {};
                function N(q) {
                    if (!O[q] && !st[q]) {
                        if (vt[q]) {
                            vt[q].forEach(N);
                            return;
                        }
                        S.push(q), O[q] = !0;
                    }
                }
                throw c.forEach(N), new Ue(`${a}: ` + S.map(Be).join([
                    ", "
                ]));
            }, _r = (a)=>{
                a = a.trim();
                const c = a.indexOf("(");
                return c !== -1 ? a.substr(0, c) : a;
            }, br = (a, c, S, O, N, q, at)=>{
                var tt = fr(c, S);
                a = Et(a), a = _r(a), N = Jt(O, N), cr(a, function() {
                    vr(`Cannot call ${a} due to unbound types`, tt);
                }, c - 1), Mt([], tt, (it)=>{
                    var ot = [
                        it[0],
                        null
                    ].concat(it.slice(1));
                    return dr(a, lr(a, ot, null, N, q), c - 1), [];
                });
            }, wr = (a, c, S)=>{
                switch(c){
                    case 1:
                        return S ? (O)=>j[O] : (O)=>P[O];
                    case 2:
                        return S ? (O)=>G[O >> 1] : (O)=>D[O >> 1];
                    case 4:
                        return S ? (O)=>J[O >> 2] : (O)=>et[O >> 2];
                    default:
                        throw new TypeError(`invalid integer width (${c}): ${a}`);
                }
            }, yr = (a, c, S, O, N)=>{
                c = Et(c);
                var q = (mt)=>mt;
                if (O === 0) {
                    var at = 32 - 8 * S;
                    q = (mt)=>mt << at >>> at;
                }
                var tt = c.includes("unsigned"), it = (mt, bt)=>{}, ot;
                tt ? ot = function(mt, bt) {
                    return it(bt, this.name), bt >>> 0;
                } : ot = function(mt, bt) {
                    return it(bt, this.name), bt;
                }, Bt(a, {
                    name: c,
                    fromWireType: q,
                    toWireType: ot,
                    argPackAdvance: Pt,
                    readValueFromPointer: wr(c, S, O !== 0),
                    destructorFunction: null
                });
            }, kr = (a, c, S)=>{
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
                function q(at) {
                    var tt = et[at >> 2], it = et[at + 4 >> 2];
                    return new N(j.buffer, it, tt);
                }
                S = Et(S), Bt(a, {
                    name: S,
                    fromWireType: q,
                    argPackAdvance: Pt,
                    readValueFromPointer: q
                }, {
                    ignoreDuplicateRegistrations: !0
                });
            }, xr = (a, c, S, O)=>{
                if (!(O > 0)) return 0;
                for(var N = S, q = S + O - 1, at = 0; at < a.length; ++at){
                    var tt = a.charCodeAt(at);
                    if (tt >= 55296 && tt <= 57343) {
                        var it = a.charCodeAt(++at);
                        tt = 65536 + ((tt & 1023) << 10) | it & 1023;
                    }
                    if (tt <= 127) {
                        if (S >= q) break;
                        c[S++] = tt;
                    } else if (tt <= 2047) {
                        if (S + 1 >= q) break;
                        c[S++] = 192 | tt >> 6, c[S++] = 128 | tt & 63;
                    } else if (tt <= 65535) {
                        if (S + 2 >= q) break;
                        c[S++] = 224 | tt >> 12, c[S++] = 128 | tt >> 6 & 63, c[S++] = 128 | tt & 63;
                    } else {
                        if (S + 3 >= q) break;
                        c[S++] = 240 | tt >> 18, c[S++] = 128 | tt >> 12 & 63, c[S++] = 128 | tt >> 6 & 63, c[S++] = 128 | tt & 63;
                    }
                }
                return c[S] = 0, S - N;
            }, Er = (a, c, S)=>xr(a, P, c, S), Ar = (a)=>{
                for(var c = 0, S = 0; S < a.length; ++S){
                    var O = a.charCodeAt(S);
                    O <= 127 ? c++ : O <= 2047 ? c += 2 : O >= 55296 && O <= 57343 ? (c += 4, ++S) : c += 3;
                }
                return c;
            }, Fe = (a, c, S)=>{
                for(var O = c + S, N = ""; !(c >= O);){
                    var q = a[c++];
                    if (!q) return N;
                    if (!(q & 128)) {
                        N += String.fromCharCode(q);
                        continue;
                    }
                    var at = a[c++] & 63;
                    if ((q & 224) == 192) {
                        N += String.fromCharCode((q & 31) << 6 | at);
                        continue;
                    }
                    var tt = a[c++] & 63;
                    if ((q & 240) == 224 ? q = (q & 15) << 12 | at << 6 | tt : q = (q & 7) << 18 | at << 12 | tt << 6 | a[c++] & 63, q < 65536) N += String.fromCharCode(q);
                    else {
                        var it = q - 65536;
                        N += String.fromCharCode(55296 | it >> 10, 56320 | it & 1023);
                    }
                }
                return N;
            }, Sr = (a, c)=>a ? Fe(P, a, c) : "", Cr = (a, c)=>{
                c = Et(c);
                var S = c === "std::string";
                Bt(a, {
                    name: c,
                    fromWireType (O) {
                        var N = et[O >> 2], q = O + 4, at;
                        if (S) for(var tt = q, it = 0; it <= N; ++it){
                            var ot = q + it;
                            if (it == N || P[ot] == 0) {
                                var mt = ot - tt, bt = Sr(tt, mt);
                                at === void 0 ? at = bt : (at += "\0", at += bt), tt = ot + 1;
                            }
                        }
                        else {
                            for(var Ct = new Array(N), it = 0; it < N; ++it)Ct[it] = String.fromCharCode(P[q + it]);
                            at = Ct.join("");
                        }
                        return $t(O), at;
                    },
                    toWireType (O, N) {
                        N instanceof ArrayBuffer && (N = new Uint8Array(N));
                        var q, at = typeof N == "string";
                        at || N instanceof Uint8Array || N instanceof Uint8ClampedArray || N instanceof Int8Array || At("Cannot pass non-string to std::string"), S && at ? q = Ar(N) : q = N.length;
                        var tt = ye(4 + q + 1), it = tt + 4;
                        if (et[tt >> 2] = q, S && at) Er(N, it, q + 1);
                        else if (at) for(var ot = 0; ot < q; ++ot){
                            var mt = N.charCodeAt(ot);
                            mt > 255 && ($t(it), At("String has UTF-16 code units that do not fit in 8 bits")), P[it + ot] = mt;
                        }
                        else for(var ot = 0; ot < q; ++ot)P[it + ot] = N[ot];
                        return O !== null && O.push($t, tt), tt;
                    },
                    argPackAdvance: Pt,
                    readValueFromPointer: nt,
                    destructorFunction (O) {
                        $t(O);
                    }
                });
            }, zr = (a, c)=>{
                for(var S = "", O = 0; !(O >= c / 2); ++O){
                    var N = G[a + O * 2 >> 1];
                    if (N == 0) break;
                    S += String.fromCharCode(N);
                }
                return S;
            }, Tr = (a, c, S)=>{
                if (S ??= 2147483647, S < 2) return 0;
                S -= 2;
                for(var O = c, N = S < a.length * 2 ? S / 2 : a.length, q = 0; q < N; ++q){
                    var at = a.charCodeAt(q);
                    G[c >> 1] = at, c += 2;
                }
                return G[c >> 1] = 0, c - O;
            }, Ir = (a)=>a.length * 2, Rr = (a, c)=>{
                for(var S = 0, O = ""; !(S >= c / 4);){
                    var N = J[a + S * 4 >> 2];
                    if (N == 0) break;
                    if (++S, N >= 65536) {
                        var q = N - 65536;
                        O += String.fromCharCode(55296 | q >> 10, 56320 | q & 1023);
                    } else O += String.fromCharCode(N);
                }
                return O;
            }, Or = (a, c, S)=>{
                if (S ??= 2147483647, S < 4) return 0;
                for(var O = c, N = O + S - 4, q = 0; q < a.length; ++q){
                    var at = a.charCodeAt(q);
                    if (at >= 55296 && at <= 57343) {
                        var tt = a.charCodeAt(++q);
                        at = 65536 + ((at & 1023) << 10) | tt & 1023;
                    }
                    if (J[c >> 2] = at, c += 4, c + 4 > N) break;
                }
                return J[c >> 2] = 0, c - O;
            }, Ur = (a)=>{
                for(var c = 0, S = 0; S < a.length; ++S){
                    var O = a.charCodeAt(S);
                    O >= 55296 && O <= 57343 && ++S, c += 4;
                }
                return c;
            }, Br = (a, c, S)=>{
                S = Et(S);
                var O, N, q, at;
                c === 2 ? (O = zr, N = Tr, at = Ir, q = (tt)=>D[tt >> 1]) : c === 4 && (O = Rr, N = Or, at = Ur, q = (tt)=>et[tt >> 2]), Bt(a, {
                    name: S,
                    fromWireType: (tt)=>{
                        for(var it = et[tt >> 2], ot, mt = tt + 4, bt = 0; bt <= it; ++bt){
                            var Ct = tt + 4 + bt * c;
                            if (bt == it || q(Ct) == 0) {
                                var Ft = Ct - mt, Lt = O(mt, Ft);
                                ot === void 0 ? ot = Lt : (ot += "\0", ot += Lt), mt = Ct + c;
                            }
                        }
                        return $t(tt), ot;
                    },
                    toWireType: (tt, it)=>{
                        typeof it != "string" && At(`Cannot pass non-string to C++ string type ${S}`);
                        var ot = at(it), mt = ye(4 + ot + c);
                        return et[mt >> 2] = ot / c, N(it, mt + 4, ot + c), tt !== null && tt.push($t, mt), mt;
                    },
                    argPackAdvance: Pt,
                    readValueFromPointer: nt,
                    destructorFunction (tt) {
                        $t(tt);
                    }
                });
            }, Fr = (a, c, S, O, N, q)=>{
                R[a] = {
                    name: Et(c),
                    rawConstructor: Jt(S, O),
                    rawDestructor: Jt(N, q),
                    fields: []
                };
            }, Pr = (a, c, S, O, N, q, at, tt, it, ot)=>{
                R[a].fields.push({
                    fieldName: Et(c),
                    getterReturnType: S,
                    getter: Jt(O, N),
                    getterContext: q,
                    setterArgumentType: at,
                    setter: Jt(tt, it),
                    setterContext: ot
                });
            }, Dr = (a, c)=>{
                c = Et(c), Bt(a, {
                    isVoid: !0,
                    name: c,
                    argPackAdvance: 0,
                    fromWireType: ()=>{},
                    toWireType: (S, O)=>{}
                });
            }, Lr = (a, c, S)=>P.copyWithin(a, c, c + S), be = [], jr = (a, c, S, O)=>(a = be[a], c = Gt.toValue(c), a(null, c, S, O)), $r = {}, Wr = (a)=>{
                var c = $r[a];
                return c === void 0 ? Et(a) : c;
            }, Pe = ()=>{
                if (typeof globalThis == "object") return globalThis;
                function a(c) {
                    c.$$$embind_global$$$ = c;
                    var S = typeof $$$embind_global$$$ == "object" && c.$$$embind_global$$$ == c;
                    return S || delete c.$$$embind_global$$$, S;
                }
                if (typeof $$$embind_global$$$ == "object" || (typeof global == "object" && a(global) ? $$$embind_global$$$ = global : typeof self == "object" && a(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")) return $$$embind_global$$$;
                throw Error("unable to get global object.");
            }, Mr = (a)=>a === 0 ? Gt.toHandle(Pe()) : (a = Wr(a), Gt.toHandle(Pe()[a])), Nr = (a)=>{
                var c = be.length;
                return be.push(a), c;
            }, Zr = (a, c)=>{
                var S = st[a];
                return S === void 0 && At(`${c} has unknown type ${Be(a)}`), S;
            }, Hr = (a, c)=>{
                for(var S = new Array(a), O = 0; O < a; ++O)S[O] = Zr(et[c + O * 4 >> 2], "parameter " + O);
                return S;
            }, Gr = Reflect.construct, Vr = (a, c, S)=>{
                var O = [], N = a.toWireType(O, S);
                return O.length && (et[c >> 2] = Gt.toHandle(O)), N;
            }, qr = (a, c, S)=>{
                var O = Hr(a, c), N = O.shift();
                a--;
                var q = new Array(a), at = (it, ot, mt, bt)=>{
                    for(var Ct = 0, Ft = 0; Ft < a; ++Ft)q[Ft] = O[Ft].readValueFromPointer(bt + Ct), Ct += O[Ft].argPackAdvance;
                    var Lt = S === 1 ? Gr(ot, q) : ot.apply(it, q);
                    return Vr(N, mt, Lt);
                }, tt = `methodCaller<(${O.map((it)=>it.name).join(", ")}) => ${N.name}>`;
                return Nr(_e(tt, at));
            }, Xr = (a)=>{
                var c = Gt.toValue(a);
                Y(c), ve(a);
            }, Yr = ()=>{
                ht("");
            }, Kr = ()=>2147483648, Jr = (a)=>{
                var c = I.buffer, S = (a - c.byteLength + 65535) / 65536;
                try {
                    return I.grow(S), r(), 1;
                } catch  {}
            }, Qr = (a)=>{
                var c = P.length;
                a >>>= 0;
                var S = Kr();
                if (a > S) return !1;
                for(var O = (it, ot)=>it + (ot - it % ot) % ot, N = 1; N <= 4; N *= 2){
                    var q = c * (1 + .2 / N);
                    q = Math.min(q, a + 100663296);
                    var at = Math.min(S, O(Math.max(a, q), 65536)), tt = Jr(at);
                    if (tt) return !0;
                }
                return !1;
            }, we = {}, tn = ()=>E || "./this.program", Qt = ()=>{
                if (!Qt.strings) {
                    var a = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", c = {
                        USER: "web_user",
                        LOGNAME: "web_user",
                        PATH: "/",
                        PWD: "/",
                        HOME: "/home/web_user",
                        LANG: a,
                        _: tn()
                    };
                    for(var S in we)we[S] === void 0 ? delete c[S] : c[S] = we[S];
                    var O = [];
                    for(var S in c)O.push(`${S}=${c[S]}`);
                    Qt.strings = O;
                }
                return Qt.strings;
            }, en = (a, c)=>{
                for(var S = 0; S < a.length; ++S)j[c++] = a.charCodeAt(S);
                j[c] = 0;
            }, rn = (a, c)=>{
                var S = 0;
                return Qt().forEach((O, N)=>{
                    var q = c + S;
                    et[a + N * 4 >> 2] = q, en(O, q), S += O.length + 1;
                }), 0;
            }, nn = (a, c)=>{
                var S = Qt();
                et[a >> 2] = S.length;
                var O = 0;
                return S.forEach((N)=>O += N.length + 1), et[c >> 2] = O, 0;
            }, an = (a)=>{
                k(a, new b(a));
            }, sn = (a, c)=>{
                an(a);
            }, on = sn, ln = (a)=>52;
            function un(a, c, S, O, N) {
                return 70;
            }
            var cn = [
                null,
                [],
                []
            ], fn = (a, c)=>{
                var S = cn[a];
                c === 0 || c === 10 ? ((a === 1 ? h : y)(Fe(S, 0)), S.length = 0) : S.push(c);
            }, dn = (a, c, S, O)=>{
                for(var N = 0, q = 0; q < S; q++){
                    var at = et[c >> 2], tt = et[c + 4 >> 2];
                    c += 8;
                    for(var it = 0; it < tt; it++)fn(a, P[at + it]);
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
            }, rr(), Ue = e.UnboundTypeError = gr(Error, "UnboundTypeError");
            var hn = {
                j: H,
                k: Ot,
                n: Zt,
                h: se,
                z: ir,
                f: sr,
                e: br,
                c: yr,
                a: kr,
                g: Cr,
                d: Br,
                l: Fr,
                b: Pr,
                i: Dr,
                s: Lr,
                y: jr,
                u: ve,
                A: Mr,
                x: qr,
                w: Xr,
                o: Yr,
                p: Qr,
                q: rn,
                r: nn,
                B: on,
                t: ln,
                m: un,
                v: dn
            }, Dt = F(), De = (a)=>(De = Dt.E)(a), ye = (a)=>(ye = Dt.F)(a), $t = (a)=>($t = Dt.G)(a), Le = (a)=>(Le = Dt.I)(a);
            e.dynCall_jiji = (a, c, S, O, N)=>(e.dynCall_jiji = Dt.J)(a, c, S, O, N);
            var le;
            Q = function a() {
                le || je(), le || (Q = a);
            };
            function je() {
                if (rt > 0 || (dt(), rt > 0)) return;
                function a() {
                    le || (le = !0, e.calledRun = !0, !T && (X(), v(e), e.onRuntimeInitialized && e.onRuntimeInitialized(), ut()));
                }
                e.setStatus ? (e.setStatus("Running..."), setTimeout(function() {
                    setTimeout(function() {
                        e.setStatus("");
                    }, 1), a();
                }, 1)) : a();
            }
            if (e.preInit) for(typeof e.preInit == "function" && (e.preInit = [
                e.preInit
            ]); e.preInit.length > 0;)e.preInit.pop()();
            return je(), i;
        };
    })();
    const gn = {
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
    function vn(l, g, e = {}) {
        let v;
        return g && (v = (f, i)=>{
            const s = new WebAssembly.Instance(g, f);
            return i(s), s.exports;
        }), l({
            noInitialRun: !0,
            instantiateWasm: v,
            ...e
        });
    }
    let Se;
    async function _n(l, g) {
        let e = l, v = g;
        arguments.length === 1 && !(l instanceof WebAssembly.Module) && (e = void 0, v = l), Se = vn(mn, e, v);
    }
    async function bn(l, g = {}) {
        Se || _n();
        const e = await Se, v = {
            ...gn,
            ...g
        };
        return e.encode(l.data, l.width, l.height, v).buffer;
    }
    const wn = "modulepreload", yn = function(l, g) {
        return new URL(l, g).href;
    }, $e = {}, pe = function(g, e, v) {
        let f = Promise.resolve();
        if (e && e.length > 0) {
            const s = document.getElementsByTagName("link"), n = document.querySelector("meta[property=csp-nonce]"), d = n?.nonce || n?.getAttribute("nonce");
            f = Promise.allSettled(e.map((w)=>{
                if (w = yn(w, v), w in $e) return;
                $e[w] = !0;
                const E = w.endsWith(".css"), k = E ? '[rel="stylesheet"]' : "";
                if (!!v) for(let _ = s.length - 1; _ >= 0; _--){
                    const o = s[_];
                    if (o.href === w && (!E || o.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${w}"]${k}`)) return;
                const u = document.createElement("link");
                if (u.rel = E ? "stylesheet" : wn, E || (u.as = "script"), u.crossOrigin = "", u.href = w, d && u.setAttribute("nonce", d), document.head.appendChild(u), E) return new Promise((_, o)=>{
                    u.addEventListener("load", _), u.addEventListener("error", ()=>o(new Error(`Unable to preload CSS for ${w}`)));
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
            return g().catch(i);
        });
    }, kn = {
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
    function We(l, g, e = {}) {
        let v;
        return g && (v = (f, i)=>{
            const s = new WebAssembly.Instance(g, f);
            return i(s), s.exports;
        }), l({
            noInitialRun: !0,
            instantiateWasm: v,
            ...e
        });
    }
    const xn = async ()=>WebAssembly.validate(new Uint8Array([
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
        ])), En = ()=>(async (l)=>{
            try {
                return typeof MessageChannel < "u" && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(l);
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
    let Vt;
    async function An(l, g) {
        let e = l, v = g;
        if (arguments.length === 1 && !(l instanceof WebAssembly.Module) && (e = void 0, v = l), await xn()) {
            const i = await pe(()=>import("./webp_enc_simd-C9n_RhDd.js"), [], import.meta.url);
            return Vt = We(i.default, e, v), Vt;
        }
        const f = await pe(()=>import("./webp_enc-f1AUqwAK.js"), [], import.meta.url);
        return Vt = We(f.default, e, v), Vt;
    }
    async function Me(l, g = {}) {
        Vt || (Vt = An());
        const e = {
            ...kn,
            ...g
        }, f = (await Vt).encode(l.data, l.width, l.height, e);
        if (!f) throw new Error("Encoding error.");
        return f.buffer;
    }
    let zt;
    const Wt = new Array(128).fill(void 0);
    Wt.push(void 0, null, !0, !1);
    let ae = Wt.length;
    function ce(l) {
        ae === Wt.length && Wt.push(Wt.length + 1);
        const g = ae;
        return ae = Wt[g], Wt[g] = l, g;
    }
    function Ce(l) {
        return Wt[l];
    }
    function Sn(l) {
        l < 132 || (Wt[l] = ae, ae = l);
    }
    function Cn(l) {
        const g = Ce(l);
        return Sn(l), g;
    }
    const He = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    }) : {
        decode: ()=>{
            throw Error("TextDecoder not available");
        }
    };
    typeof TextDecoder < "u" && He.decode();
    let re = null;
    function Te() {
        return (re === null || re.byteLength === 0) && (re = new Uint8Array(zt.memory.buffer)), re;
    }
    function zn(l, g) {
        return l = l >>> 0, He.decode(Te().subarray(l, l + g));
    }
    let ne = null;
    function Tn() {
        return (ne === null || ne.byteLength === 0) && (ne = new Uint8ClampedArray(zt.memory.buffer)), ne;
    }
    function In(l, g) {
        return l = l >>> 0, Tn().subarray(l / 1, l / 1 + g);
    }
    let Ge = 0;
    function Rn(l, g) {
        const e = g(l.length * 1, 1) >>> 0;
        return Te().set(l, e / 1), Ge = l.length, e;
    }
    let ie = null;
    function Ne() {
        return (ie === null || ie.byteLength === 0) && (ie = new Int32Array(zt.memory.buffer)), ie;
    }
    function On(l, g) {
        return l = l >>> 0, Te().subarray(l / 1, l / 1 + g);
    }
    function Un(l, g, e, v) {
        try {
            const n = zt.__wbindgen_add_to_stack_pointer(-16), d = Rn(l, zt.__wbindgen_malloc), w = Ge;
            zt.encode(n, d, w, g, e, v);
            var f = Ne()[n / 4 + 0], i = Ne()[n / 4 + 1], s = On(f, i).slice();
            return zt.__wbindgen_free(f, i * 1, 1), s;
        } finally{
            zt.__wbindgen_add_to_stack_pointer(16);
        }
    }
    async function Bn(l, g) {
        if (typeof Response == "function" && l instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming == "function") try {
                return await WebAssembly.instantiateStreaming(l, g);
            } catch (v) {
                if (l.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", v);
                else throw v;
            }
            const e = await l.arrayBuffer();
            return await WebAssembly.instantiate(e, g);
        } else {
            const e = await WebAssembly.instantiate(l, g);
            return e instanceof WebAssembly.Instance ? {
                instance: e,
                module: l
            } : e;
        }
    }
    function Fn() {
        const l = {};
        return l.wbg = {}, l.wbg.__wbindgen_memory = function() {
            const g = zt.memory;
            return ce(g);
        }, l.wbg.__wbg_buffer_a448f833075b71ba = function(g) {
            const e = Ce(g).buffer;
            return ce(e);
        }, l.wbg.__wbg_newwithbyteoffsetandlength_099217381c451830 = function(g, e, v) {
            const f = new Uint16Array(Ce(g), e >>> 0, v >>> 0);
            return ce(f);
        }, l.wbg.__wbindgen_object_drop_ref = function(g) {
            Cn(g);
        }, l.wbg.__wbg_newwithownedu8clampedarrayandsh_91db5987993a08fb = function(g, e, v, f) {
            var i = In(g, e).slice();
            zt.__wbindgen_free(g, e * 1, 1);
            const s = new ImageData(i, v >>> 0, f >>> 0);
            return ce(s);
        }, l.wbg.__wbindgen_throw = function(g, e) {
            throw new Error(zn(g, e));
        }, l;
    }
    function Pn(l, g) {
        return zt = l.exports, Ve.__wbindgen_wasm_module = g, ie = null, re = null, ne = null, zt;
    }
    async function Ve(l) {
        if (zt !== void 0) return zt;
        typeof l > "u" && (l = new URL("" + new URL("squoosh_png_bg-DAY7U9NW.wasm", import.meta.url).href, import.meta.url));
        const g = Fn();
        (typeof l == "string" || typeof Request == "function" && l instanceof Request || typeof URL == "function" && l instanceof URL) && (l = fetch(l));
        const { instance: e, module: v } = await Bn(await l, g);
        return Pn(e, v);
    }
    const Dn = globalThis.ServiceWorkerGlobalScope !== void 0, Ln = Dn && typeof self < "u" && globalThis.caches && globalThis.caches.default !== void 0, jn = typeof process == "object" && process.release && process.release.name === "node";
    (Ln || jn) && (globalThis.ImageData || (globalThis.ImageData = class {
        constructor(g, e, v){
            this.data = g, this.width = e, this.height = v;
        }
    }), import.meta.url === void 0 && (import.meta.url = "https://localhost"), typeof self < "u" && self.location === void 0 && (self.location = {
        href: ""
    }));
    let Ee;
    async function $n(l) {
        return Ee || (Ee = Ve(l)), Ee;
    }
    async function Wn(l, g = {}) {
        var e;
        await $n();
        const v = (e = g?.bitDepth) !== null && e !== void 0 ? e : 8;
        if (v !== 8 && v !== 16) throw new Error("Invalid bit depth. Must be either 8 or 16.");
        const f = l.data instanceof Uint16Array;
        if (f && v !== 16) throw new Error("Invalid bit depth, must be 16 for Uint16Array or manually convert to RGB8 values with Uint8Array.");
        if (!f && v === 16) throw new Error("Invalid bit depth, must be 8 for Uint8Array or manually convert to RGB16 values with Uint16Array.");
        const i = new Uint8Array(l.data.buffer), s = await Un(i, l.width, l.height, v);
        if (!s) throw new Error("Encoding error.");
        return s.buffer;
    }
    const Mn = {
        level: 2,
        interlace: !1,
        optimiseAlpha: !1
    };
    async function Nn(l) {
        const { default: g, initThreadPool: e, optimise: v, optimise_raw: f } = await pe(async ()=>{
            const { default: i, initThreadPool: s, optimise: n, optimise_raw: d } = await import("./squoosh_oxipng-BOWiYjch.js");
            return {
                default: i,
                initThreadPool: s,
                optimise: n,
                optimise_raw: d
            };
        }, [], import.meta.url);
        return await g(l), await e(globalThis.navigator.hardwareConcurrency), {
            optimise: v,
            optimise_raw: f
        };
    }
    async function Zn(l) {
        const { default: g, optimise: e, optimise_raw: v } = await pe(async ()=>{
            const { default: f, optimise: i, optimise_raw: s } = await import("./squoosh_oxipng-yu2r7-gO.js");
            return {
                default: f,
                optimise: i,
                optimise_raw: s
            };
        }, [], import.meta.url);
        return await g(l), {
            optimise: e,
            optimise_raw: v
        };
    }
    let fe;
    async function Hn(l) {
        var g;
        if (!fe) {
            const e = ((g = globalThis.navigator) === null || g === void 0 ? void 0 : g.hardwareConcurrency) > 1;
            typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && e && await En() ? fe = Nn(l) : fe = Zn(l);
        }
        return fe;
    }
    async function Gn(l, g = {}) {
        const e = {
            ...Mn,
            ...g
        }, { optimise: v, optimise_raw: f } = await Hn();
        return l instanceof ImageData ? f(l.data, l.width, l.height, e.level, e.interlace, e.optimiseAlpha).buffer : v(new Uint8Array(l), e.level, e.interlace, e.optimiseAlpha).buffer;
    }
    function Vn(l, g, e) {
        const v = l.data;
        for(let f = 0; f < v.length; f += 4){
            const i = Math.max(v[f], v[f + 1], v[f + 2]);
            i <= g && (v[f + 3] = e > 0 ? Math.min(v[f + 3], Math.round(255 * Math.max(0, (i - g + e) / e))) : 0);
        }
        return l;
    }
    function qn(l) {
        const g = l.data;
        for(let e = 0; e < g.length; e += 4){
            const v = g[e + 3] / 255;
            g[e] = Math.round(g[e] * v + 255 * (1 - v)), g[e + 1] = Math.round(g[e + 1] * v + 255 * (1 - v)), g[e + 2] = Math.round(g[e + 2] * v + 255 * (1 - v)), g[e + 3] = 255;
        }
        return l;
    }
    function Xn(l, g, e) {
        const { width: v, height: f, data: i } = l, s = Kn(i, g), n = new Uint8ClampedArray(i);
        for(let d = 0; d < f; d++)for(let w = 0; w < v; w++){
            const E = (d * v + w) * 4;
            if (n[E + 3] === 0) continue;
            const k = n[E], x = n[E + 1], u = n[E + 2], [_, o, m] = Jn(s, k, x, u);
            if (n[E] = _, n[E + 1] = o, n[E + 2] = m, !e) continue;
            const h = k - _, y = x - o, C = u - m;
            Yn(n, v, f, w, d, h, y, C);
        }
        return new ImageData(n, v, f);
    }
    function Yn(l, g, e, v, f, i, s, n) {
        const d = [
            [
                v + 1,
                f,
                .4375
            ],
            [
                v - 1,
                f + 1,
                .1875
            ],
            [
                v,
                f + 1,
                .3125
            ],
            [
                v + 1,
                f + 1,
                .0625
            ]
        ];
        for (const [w, E, k] of d){
            if (w < 0 || w >= g || E >= e) continue;
            const x = (E * g + w) * 4;
            l[x] = Ae(l[x] + i * k), l[x + 1] = Ae(l[x + 1] + s * k), l[x + 2] = Ae(l[x + 2] + n * k);
        }
    }
    function Ae(l) {
        return Math.max(0, Math.min(255, Math.round(l)));
    }
    function Kn(l, g) {
        const e = [];
        for(let i = 0; i < l.length; i += 4)l[i + 3] < 128 || e.push([
            l[i],
            l[i + 1],
            l[i + 2]
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
        for(; f.length < g;){
            let i = -1, s = -1;
            for(let k = 0; k < f.length; k++){
                if (f[k].length < 2) continue;
                const x = Ze(f[k]), u = Math.max(x[0], x[1], x[2]);
                u > s && (s = u, i = k);
            }
            if (i === -1) break;
            const n = f[i], d = Ze(n), w = d[0] >= d[1] && d[0] >= d[2] ? 0 : d[1] >= d[2] ? 1 : 2;
            n.sort((k, x)=>k[w] - x[w]);
            const E = Math.floor(n.length / 2);
            f.splice(i, 1, n.slice(0, E), n.slice(E));
        }
        return f.map((i)=>{
            let s = 0, n = 0, d = 0;
            for (const E of i)s += E[0], n += E[1], d += E[2];
            const w = i.length || 1;
            return [
                Math.round(s / w),
                Math.round(n / w),
                Math.round(d / w)
            ];
        });
    }
    function Ze(l) {
        let g = 255, e = 0, v = 255, f = 0, i = 255, s = 0;
        for (const [n, d, w] of l)n < g && (g = n), n > e && (e = n), d < v && (v = d), d > f && (f = d), w < i && (i = w), w > s && (s = w);
        return [
            e - g,
            f - v,
            s - i
        ];
    }
    function Jn(l, g, e, v) {
        let f = l[0], i = 1 / 0;
        for (const s of l){
            const n = (s[0] - g) ** 2 + (s[1] - e) ** 2 + (s[2] - v) ** 2;
            n < i && (i = n, f = s);
        }
        return f;
    }
    function Qn(l) {
        return new Promise((g, e)=>{
            const v = new Image;
            v.onload = ()=>{
                const i = new OffscreenCanvas(v.naturalWidth, v.naturalHeight).getContext("2d");
                i.drawImage(v, 0, 0), g(i.getImageData(0, 0, v.naturalWidth, v.naturalHeight)), URL.revokeObjectURL(v.src);
            }, v.onerror = ()=>e(new Error("Failed to load image")), v.src = URL.createObjectURL(l);
        });
    }
    async function ti(l, g) {
        const e = l.size;
        let v = await Qn(l);
        g.removeBlack && (v = Vn(v, g.threshold, g.feather));
        let f;
        switch(g.format){
            case "png":
                {
                    g.pngColors < 256 && (v = Xn(v, g.pngColors, g.pngDither));
                    const s = await Wn(v);
                    f = await Gn(s, {
                        level: 3
                    });
                    break;
                }
            case "jpeg":
                {
                    g.removeBlack && (v = qn(v)), f = await bn(v, {
                        quality: g.jpegQuality
                    });
                    break;
                }
            case "webp":
                {
                    g.webpLossless ? f = await Me(v, {
                        lossless: 1,
                        quality: 100
                    }) : f = await Me(v, {
                        quality: g.webpQuality
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
            }[g.format]
        });
        return {
            url: URL.createObjectURL(i),
            inputSize: e,
            outputSize: i.size,
            width: v.width,
            height: v.height,
            format: g.format
        };
    }
    var de = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    function ei(l) {
        return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
    }
    function he(l) {
        throw new Error('Could not dynamically require "' + l + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
    }
    var qe = {
        exports: {}
    };
    (function(l, g) {
        (function(e) {
            l.exports = e();
        })(function() {
            return function e(v, f, i) {
                function s(w, E) {
                    if (!f[w]) {
                        if (!v[w]) {
                            var k = typeof he == "function" && he;
                            if (!E && k) return k(w, !0);
                            if (n) return n(w, !0);
                            var x = new Error("Cannot find module '" + w + "'");
                            throw x.code = "MODULE_NOT_FOUND", x;
                        }
                        var u = f[w] = {
                            exports: {}
                        };
                        v[w][0].call(u.exports, function(_) {
                            var o = v[w][1][_];
                            return s(o || _);
                        }, u, u.exports, e, v, f, i);
                    }
                    return f[w].exports;
                }
                for(var n = typeof he == "function" && he, d = 0; d < i.length; d++)s(i[d]);
                return s;
            }({
                1: [
                    function(e, v, f) {
                        var i = e("./utils"), s = e("./support"), n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                        f.encode = function(d) {
                            for(var w, E, k, x, u, _, o, m = [], h = 0, y = d.length, C = y, I = i.getTypeOf(d) !== "string"; h < d.length;)C = y - h, k = I ? (w = d[h++], E = h < y ? d[h++] : 0, h < y ? d[h++] : 0) : (w = d.charCodeAt(h++), E = h < y ? d.charCodeAt(h++) : 0, h < y ? d.charCodeAt(h++) : 0), x = w >> 2, u = (3 & w) << 4 | E >> 4, _ = 1 < C ? (15 & E) << 2 | k >> 6 : 64, o = 2 < C ? 63 & k : 64, m.push(n.charAt(x) + n.charAt(u) + n.charAt(_) + n.charAt(o));
                            return m.join("");
                        }, f.decode = function(d) {
                            var w, E, k, x, u, _, o = 0, m = 0, h = "data:";
                            if (d.substr(0, h.length) === h) throw new Error("Invalid base64 input, it looks like a data url.");
                            var y, C = 3 * (d = d.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
                            if (d.charAt(d.length - 1) === n.charAt(64) && C--, d.charAt(d.length - 2) === n.charAt(64) && C--, C % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
                            for(y = s.uint8array ? new Uint8Array(0 | C) : new Array(0 | C); o < d.length;)w = n.indexOf(d.charAt(o++)) << 2 | (x = n.indexOf(d.charAt(o++))) >> 4, E = (15 & x) << 4 | (u = n.indexOf(d.charAt(o++))) >> 2, k = (3 & u) << 6 | (_ = n.indexOf(d.charAt(o++))), y[m++] = w, u !== 64 && (y[m++] = E), _ !== 64 && (y[m++] = k);
                            return y;
                        };
                    },
                    {
                        "./support": 30,
                        "./utils": 32
                    }
                ],
                2: [
                    function(e, v, f) {
                        var i = e("./external"), s = e("./stream/DataWorker"), n = e("./stream/Crc32Probe"), d = e("./stream/DataLengthProbe");
                        function w(E, k, x, u, _) {
                            this.compressedSize = E, this.uncompressedSize = k, this.crc32 = x, this.compression = u, this.compressedContent = _;
                        }
                        w.prototype = {
                            getContentWorker: function() {
                                var E = new s(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new d("data_length")), k = this;
                                return E.on("end", function() {
                                    if (this.streamInfo.data_length !== k.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
                                }), E;
                            },
                            getCompressedWorker: function() {
                                return new s(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
                            }
                        }, w.createWorkerFrom = function(E, k, x) {
                            return E.pipe(new n).pipe(new d("uncompressedSize")).pipe(k.compressWorker(x)).pipe(new d("compressedSize")).withStreamInfo("compression", k);
                        }, v.exports = w;
                    },
                    {
                        "./external": 6,
                        "./stream/Crc32Probe": 25,
                        "./stream/DataLengthProbe": 26,
                        "./stream/DataWorker": 27
                    }
                ],
                3: [
                    function(e, v, f) {
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
                    function(e, v, f) {
                        var i = e("./utils"), s = function() {
                            for(var n, d = [], w = 0; w < 256; w++){
                                n = w;
                                for(var E = 0; E < 8; E++)n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
                                d[w] = n;
                            }
                            return d;
                        }();
                        v.exports = function(n, d) {
                            return n !== void 0 && n.length ? i.getTypeOf(n) !== "string" ? function(w, E, k, x) {
                                var u = s, _ = x + k;
                                w ^= -1;
                                for(var o = x; o < _; o++)w = w >>> 8 ^ u[255 & (w ^ E[o])];
                                return -1 ^ w;
                            }(0 | d, n, n.length, 0) : function(w, E, k, x) {
                                var u = s, _ = x + k;
                                w ^= -1;
                                for(var o = x; o < _; o++)w = w >>> 8 ^ u[255 & (w ^ E.charCodeAt(o))];
                                return -1 ^ w;
                            }(0 | d, n, n.length, 0) : 0;
                        };
                    },
                    {
                        "./utils": 32
                    }
                ],
                5: [
                    function(e, v, f) {
                        f.base64 = !1, f.binary = !1, f.dir = !1, f.createFolders = !0, f.date = null, f.compression = null, f.compressionOptions = null, f.comment = null, f.unixPermissions = null, f.dosPermissions = null;
                    },
                    {}
                ],
                6: [
                    function(e, v, f) {
                        var i = null;
                        i = typeof Promise < "u" ? Promise : e("lie"), v.exports = {
                            Promise: i
                        };
                    },
                    {
                        lie: 37
                    }
                ],
                7: [
                    function(e, v, f) {
                        var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", s = e("pako"), n = e("./utils"), d = e("./stream/GenericWorker"), w = i ? "uint8array" : "array";
                        function E(k, x) {
                            d.call(this, "FlateWorker/" + k), this._pako = null, this._pakoAction = k, this._pakoOptions = x, this.meta = {};
                        }
                        f.magic = "\b\0", n.inherits(E, d), E.prototype.processChunk = function(k) {
                            this.meta = k.meta, this._pako === null && this._createPako(), this._pako.push(n.transformTo(w, k.data), !1);
                        }, E.prototype.flush = function() {
                            d.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
                        }, E.prototype.cleanUp = function() {
                            d.prototype.cleanUp.call(this), this._pako = null;
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
                    function(e, v, f) {
                        function i(u, _) {
                            var o, m = "";
                            for(o = 0; o < _; o++)m += String.fromCharCode(255 & u), u >>>= 8;
                            return m;
                        }
                        function s(u, _, o, m, h, y) {
                            var C, I, T = u.file, j = u.compression, P = y !== w.utf8encode, G = n.transformTo("string", y(T.name)), D = n.transformTo("string", w.utf8encode(T.name)), J = T.comment, et = n.transformTo("string", y(J)), A = n.transformTo("string", w.utf8encode(J)), L = D.length !== T.name.length, r = A.length !== J.length, M = "", ft = "", V = "", dt = T.dir, X = T.date, ut = {
                                crc32: 0,
                                compressedSize: 0,
                                uncompressedSize: 0
                            };
                            _ && !o || (ut.crc32 = u.crc32, ut.compressedSize = u.compressedSize, ut.uncompressedSize = u.uncompressedSize);
                            var B = 0;
                            _ && (B |= 8), P || !L && !r || (B |= 2048);
                            var U = 0, lt = 0;
                            dt && (U |= 16), h === "UNIX" ? (lt = 798, U |= function(Q, wt) {
                                var xt = Q;
                                return Q || (xt = wt ? 16893 : 33204), (65535 & xt) << 16;
                            }(T.unixPermissions, dt)) : (lt = 20, U |= function(Q) {
                                return 63 & (Q || 0);
                            }(T.dosPermissions)), C = X.getUTCHours(), C <<= 6, C |= X.getUTCMinutes(), C <<= 5, C |= X.getUTCSeconds() / 2, I = X.getUTCFullYear() - 1980, I <<= 4, I |= X.getUTCMonth() + 1, I <<= 5, I |= X.getUTCDate(), L && (ft = i(1, 1) + i(E(G), 4) + D, M += "up" + i(ft.length, 2) + ft), r && (V = i(1, 1) + i(E(et), 4) + A, M += "uc" + i(V.length, 2) + V);
                            var rt = "";
                            return rt += `
\0`, rt += i(B, 2), rt += j.magic, rt += i(C, 2), rt += i(I, 2), rt += i(ut.crc32, 4), rt += i(ut.compressedSize, 4), rt += i(ut.uncompressedSize, 4), rt += i(G.length, 2), rt += i(M.length, 2), {
                                fileRecord: k.LOCAL_FILE_HEADER + rt + G + M,
                                dirRecord: k.CENTRAL_FILE_HEADER + i(lt, 2) + rt + i(et.length, 2) + "\0\0\0\0" + i(U, 4) + i(m, 4) + G + M + et
                            };
                        }
                        var n = e("../utils"), d = e("../stream/GenericWorker"), w = e("../utf8"), E = e("../crc32"), k = e("../signature");
                        function x(u, _, o, m) {
                            d.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = _, this.zipPlatform = o, this.encodeFileName = m, this.streamFiles = u, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
                        }
                        n.inherits(x, d), x.prototype.push = function(u) {
                            var _ = u.meta.percent || 0, o = this.entriesCount, m = this._sources.length;
                            this.accumulate ? this.contentBuffer.push(u) : (this.bytesWritten += u.data.length, d.prototype.push.call(this, {
                                data: u.data,
                                meta: {
                                    currentFile: this.currentFile,
                                    percent: o ? (_ + 100 * (o - m - 1)) / o : 100
                                }
                            }));
                        }, x.prototype.openedSource = function(u) {
                            this.currentSourceOffset = this.bytesWritten, this.currentFile = u.file.name;
                            var _ = this.streamFiles && !u.file.dir;
                            if (_) {
                                var o = s(u, _, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                                this.push({
                                    data: o.fileRecord,
                                    meta: {
                                        percent: 0
                                    }
                                });
                            } else this.accumulate = !0;
                        }, x.prototype.closedSource = function(u) {
                            this.accumulate = !1;
                            var _ = this.streamFiles && !u.file.dir, o = s(u, _, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                            if (this.dirRecords.push(o.dirRecord), _) this.push({
                                data: function(m) {
                                    return k.DATA_DESCRIPTOR + i(m.crc32, 4) + i(m.compressedSize, 4) + i(m.uncompressedSize, 4);
                                }(u),
                                meta: {
                                    percent: 100
                                }
                            });
                            else for(this.push({
                                data: o.fileRecord,
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
                            var o = this.bytesWritten - u, m = function(h, y, C, I, T) {
                                var j = n.transformTo("string", T(I));
                                return k.CENTRAL_DIRECTORY_END + "\0\0\0\0" + i(h, 2) + i(h, 2) + i(y, 4) + i(C, 4) + i(j.length, 2) + j;
                            }(this.dirRecords.length, o, u, this.zipComment, this.encodeFileName);
                            this.push({
                                data: m,
                                meta: {
                                    percent: 100
                                }
                            });
                        }, x.prototype.prepareNextSource = function() {
                            this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
                        }, x.prototype.registerPrevious = function(u) {
                            this._sources.push(u);
                            var _ = this;
                            return u.on("data", function(o) {
                                _.processChunk(o);
                            }), u.on("end", function() {
                                _.closedSource(_.previous.streamInfo), _._sources.length ? _.prepareNextSource() : _.end();
                            }), u.on("error", function(o) {
                                _.error(o);
                            }), this;
                        }, x.prototype.resume = function() {
                            return !!d.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
                        }, x.prototype.error = function(u) {
                            var _ = this._sources;
                            if (!d.prototype.error.call(this, u)) return !1;
                            for(var o = 0; o < _.length; o++)try {
                                _[o].error(u);
                            } catch  {}
                            return !0;
                        }, x.prototype.lock = function() {
                            d.prototype.lock.call(this);
                            for(var u = this._sources, _ = 0; _ < u.length; _++)u[_].lock();
                        }, v.exports = x;
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
                    function(e, v, f) {
                        var i = e("../compressions"), s = e("./ZipFileWorker");
                        f.generateWorker = function(n, d, w) {
                            var E = new s(d.streamFiles, w, d.platform, d.encodeFileName), k = 0;
                            try {
                                n.forEach(function(x, u) {
                                    k++;
                                    var _ = function(y, C) {
                                        var I = y || C, T = i[I];
                                        if (!T) throw new Error(I + " is not a valid compression method !");
                                        return T;
                                    }(u.options.compression, d.compression), o = u.options.compressionOptions || d.compressionOptions || {}, m = u.dir, h = u.date;
                                    u._compressWorker(_, o).withStreamInfo("file", {
                                        name: x,
                                        dir: m,
                                        date: h,
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
                    function(e, v, f) {
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
                        }, i.external = e("./external"), v.exports = i;
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
                    function(e, v, f) {
                        var i = e("./utils"), s = e("./external"), n = e("./utf8"), d = e("./zipEntries"), w = e("./stream/Crc32Probe"), E = e("./nodejsUtils");
                        function k(x) {
                            return new s.Promise(function(u, _) {
                                var o = x.decompressed.getContentWorker().pipe(new w);
                                o.on("error", function(m) {
                                    _(m);
                                }).on("end", function() {
                                    o.streamInfo.crc32 !== x.decompressed.crc32 ? _(new Error("Corrupted zip : CRC32 mismatch")) : u();
                                }).resume();
                            });
                        }
                        v.exports = function(x, u) {
                            var _ = this;
                            return u = i.extend(u || {}, {
                                base64: !1,
                                checkCRC32: !1,
                                optimizedBinaryString: !1,
                                createFolders: !1,
                                decodeFileName: n.utf8decode
                            }), E.isNode && E.isStream(x) ? s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : i.prepareContent("the loaded zip file", x, !0, u.optimizedBinaryString, u.base64).then(function(o) {
                                var m = new d(u);
                                return m.load(o), m;
                            }).then(function(o) {
                                var m = [
                                    s.Promise.resolve(o)
                                ], h = o.files;
                                if (u.checkCRC32) for(var y = 0; y < h.length; y++)m.push(k(h[y]));
                                return s.Promise.all(m);
                            }).then(function(o) {
                                for(var m = o.shift(), h = m.files, y = 0; y < h.length; y++){
                                    var C = h[y], I = C.fileNameStr, T = i.resolve(C.fileNameStr);
                                    _.file(T, C.decompressed, {
                                        binary: !0,
                                        optimizedBinaryString: !0,
                                        date: C.date,
                                        dir: C.dir,
                                        comment: C.fileCommentStr.length ? C.fileCommentStr : null,
                                        unixPermissions: C.unixPermissions,
                                        dosPermissions: C.dosPermissions,
                                        createFolders: u.createFolders
                                    }), C.dir || (_.file(T).unsafeOriginalName = I);
                                }
                                return m.zipComment.length && (_.comment = m.zipComment), _;
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
                    function(e, v, f) {
                        var i = e("../utils"), s = e("../stream/GenericWorker");
                        function n(d, w) {
                            s.call(this, "Nodejs stream input adapter for " + d), this._upstreamEnded = !1, this._bindStream(w);
                        }
                        i.inherits(n, s), n.prototype._bindStream = function(d) {
                            var w = this;
                            (this._stream = d).pause(), d.on("data", function(E) {
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
                        }, v.exports = n;
                    },
                    {
                        "../stream/GenericWorker": 28,
                        "../utils": 32
                    }
                ],
                13: [
                    function(e, v, f) {
                        var i = e("readable-stream").Readable;
                        function s(n, d, w) {
                            i.call(this, d), this._helper = n;
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
                        }, v.exports = s;
                    },
                    {
                        "../utils": 32,
                        "readable-stream": 16
                    }
                ],
                14: [
                    function(e, v, f) {
                        v.exports = {
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
                    function(e, v, f) {
                        function i(T, j, P) {
                            var G, D = n.getTypeOf(j), J = n.extend(P || {}, E);
                            J.date = J.date || new Date, J.compression !== null && (J.compression = J.compression.toUpperCase()), typeof J.unixPermissions == "string" && (J.unixPermissions = parseInt(J.unixPermissions, 8)), J.unixPermissions && 16384 & J.unixPermissions && (J.dir = !0), J.dosPermissions && 16 & J.dosPermissions && (J.dir = !0), J.dir && (T = h(T)), J.createFolders && (G = m(T)) && y.call(this, G, !0);
                            var et = D === "string" && J.binary === !1 && J.base64 === !1;
                            P && P.binary !== void 0 || (J.binary = !et), (j instanceof k && j.uncompressedSize === 0 || J.dir || !j || j.length === 0) && (J.base64 = !1, J.binary = !0, j = "", J.compression = "STORE", D = "string");
                            var A = null;
                            A = j instanceof k || j instanceof d ? j : _.isNode && _.isStream(j) ? new o(T, j) : n.prepareContent(T, j, J.binary, J.optimizedBinaryString, J.base64);
                            var L = new x(T, A, J);
                            this.files[T] = L;
                        }
                        var s = e("./utf8"), n = e("./utils"), d = e("./stream/GenericWorker"), w = e("./stream/StreamHelper"), E = e("./defaults"), k = e("./compressedObject"), x = e("./zipObject"), u = e("./generate"), _ = e("./nodejsUtils"), o = e("./nodejs/NodejsStreamInputAdapter"), m = function(T) {
                            T.slice(-1) === "/" && (T = T.substring(0, T.length - 1));
                            var j = T.lastIndexOf("/");
                            return 0 < j ? T.substring(0, j) : "";
                        }, h = function(T) {
                            return T.slice(-1) !== "/" && (T += "/"), T;
                        }, y = function(T, j) {
                            return j = j !== void 0 ? j : E.createFolders, T = h(T), this.files[T] || i.call(this, T, null, {
                                dir: !0,
                                createFolders: j
                            }), this.files[T];
                        };
                        function C(T) {
                            return Object.prototype.toString.call(T) === "[object RegExp]";
                        }
                        var I = {
                            load: function() {
                                throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
                            },
                            forEach: function(T) {
                                var j, P, G;
                                for(j in this.files)G = this.files[j], (P = j.slice(this.root.length, j.length)) && j.slice(0, this.root.length) === this.root && T(P, G);
                            },
                            filter: function(T) {
                                var j = [];
                                return this.forEach(function(P, G) {
                                    T(P, G) && j.push(G);
                                }), j;
                            },
                            file: function(T, j, P) {
                                if (arguments.length !== 1) return T = this.root + T, i.call(this, T, j, P), this;
                                if (C(T)) {
                                    var G = T;
                                    return this.filter(function(J, et) {
                                        return !et.dir && G.test(J);
                                    });
                                }
                                var D = this.files[this.root + T];
                                return D && !D.dir ? D : null;
                            },
                            folder: function(T) {
                                if (!T) return this;
                                if (C(T)) return this.filter(function(D, J) {
                                    return J.dir && T.test(D);
                                });
                                var j = this.root + T, P = y.call(this, j), G = this.clone();
                                return G.root = P.name, G;
                            },
                            remove: function(T) {
                                T = this.root + T;
                                var j = this.files[T];
                                if (j || (T.slice(-1) !== "/" && (T += "/"), j = this.files[T]), j && !j.dir) delete this.files[T];
                                else for(var P = this.filter(function(D, J) {
                                    return J.name.slice(0, T.length) === T;
                                }), G = 0; G < P.length; G++)delete this.files[P[G].name];
                                return this;
                            },
                            generate: function() {
                                throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
                            },
                            generateInternalStream: function(T) {
                                var j, P = {};
                                try {
                                    if ((P = n.extend(T || {}, {
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
                                    (j = new d("error")).error(D);
                                }
                                return new w(j, P.type || "string", P.mimeType);
                            },
                            generateAsync: function(T, j) {
                                return this.generateInternalStream(T).accumulate(j);
                            },
                            generateNodeStream: function(T, j) {
                                return (T = T || {}).type || (T.type = "nodebuffer"), this.generateInternalStream(T).toNodejsStream(j);
                            }
                        };
                        v.exports = I;
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
                    function(e, v, f) {
                        v.exports = e("stream");
                    },
                    {
                        stream: void 0
                    }
                ],
                17: [
                    function(e, v, f) {
                        var i = e("./DataReader");
                        function s(n) {
                            i.call(this, n);
                            for(var d = 0; d < this.data.length; d++)n[d] = 255 & n[d];
                        }
                        e("../utils").inherits(s, i), s.prototype.byteAt = function(n) {
                            return this.data[this.zero + n];
                        }, s.prototype.lastIndexOfSignature = function(n) {
                            for(var d = n.charCodeAt(0), w = n.charCodeAt(1), E = n.charCodeAt(2), k = n.charCodeAt(3), x = this.length - 4; 0 <= x; --x)if (this.data[x] === d && this.data[x + 1] === w && this.data[x + 2] === E && this.data[x + 3] === k) return x - this.zero;
                            return -1;
                        }, s.prototype.readAndCheckSignature = function(n) {
                            var d = n.charCodeAt(0), w = n.charCodeAt(1), E = n.charCodeAt(2), k = n.charCodeAt(3), x = this.readData(4);
                            return d === x[0] && w === x[1] && E === x[2] && k === x[3];
                        }, s.prototype.readData = function(n) {
                            if (this.checkOffset(n), n === 0) return [];
                            var d = this.data.slice(this.zero + this.index, this.zero + this.index + n);
                            return this.index += n, d;
                        }, v.exports = s;
                    },
                    {
                        "../utils": 32,
                        "./DataReader": 18
                    }
                ],
                18: [
                    function(e, v, f) {
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
                                var d, w = 0;
                                for(this.checkOffset(n), d = this.index + n - 1; d >= this.index; d--)w = (w << 8) + this.byteAt(d);
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
                        }, v.exports = s;
                    },
                    {
                        "../utils": 32
                    }
                ],
                19: [
                    function(e, v, f) {
                        var i = e("./Uint8ArrayReader");
                        function s(n) {
                            i.call(this, n);
                        }
                        e("../utils").inherits(s, i), s.prototype.readData = function(n) {
                            this.checkOffset(n);
                            var d = this.data.slice(this.zero + this.index, this.zero + this.index + n);
                            return this.index += n, d;
                        }, v.exports = s;
                    },
                    {
                        "../utils": 32,
                        "./Uint8ArrayReader": 21
                    }
                ],
                20: [
                    function(e, v, f) {
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
                            var d = this.data.slice(this.zero + this.index, this.zero + this.index + n);
                            return this.index += n, d;
                        }, v.exports = s;
                    },
                    {
                        "../utils": 32,
                        "./DataReader": 18
                    }
                ],
                21: [
                    function(e, v, f) {
                        var i = e("./ArrayReader");
                        function s(n) {
                            i.call(this, n);
                        }
                        e("../utils").inherits(s, i), s.prototype.readData = function(n) {
                            if (this.checkOffset(n), n === 0) return new Uint8Array(0);
                            var d = this.data.subarray(this.zero + this.index, this.zero + this.index + n);
                            return this.index += n, d;
                        }, v.exports = s;
                    },
                    {
                        "../utils": 32,
                        "./ArrayReader": 17
                    }
                ],
                22: [
                    function(e, v, f) {
                        var i = e("../utils"), s = e("../support"), n = e("./ArrayReader"), d = e("./StringReader"), w = e("./NodeBufferReader"), E = e("./Uint8ArrayReader");
                        v.exports = function(k) {
                            var x = i.getTypeOf(k);
                            return i.checkSupport(x), x !== "string" || s.uint8array ? x === "nodebuffer" ? new w(k) : s.uint8array ? new E(i.transformTo("uint8array", k)) : new n(i.transformTo("array", k)) : new d(k);
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
                    function(e, v, f) {
                        f.LOCAL_FILE_HEADER = "PK", f.CENTRAL_FILE_HEADER = "PK", f.CENTRAL_DIRECTORY_END = "PK", f.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", f.ZIP64_CENTRAL_DIRECTORY_END = "PK", f.DATA_DESCRIPTOR = "PK\x07\b";
                    },
                    {}
                ],
                24: [
                    function(e, v, f) {
                        var i = e("./GenericWorker"), s = e("../utils");
                        function n(d) {
                            i.call(this, "ConvertWorker to " + d), this.destType = d;
                        }
                        s.inherits(n, i), n.prototype.processChunk = function(d) {
                            this.push({
                                data: s.transformTo(this.destType, d.data),
                                meta: d.meta
                            });
                        }, v.exports = n;
                    },
                    {
                        "../utils": 32,
                        "./GenericWorker": 28
                    }
                ],
                25: [
                    function(e, v, f) {
                        var i = e("./GenericWorker"), s = e("../crc32");
                        function n() {
                            i.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
                        }
                        e("../utils").inherits(n, i), n.prototype.processChunk = function(d) {
                            this.streamInfo.crc32 = s(d.data, this.streamInfo.crc32 || 0), this.push(d);
                        }, v.exports = n;
                    },
                    {
                        "../crc32": 4,
                        "../utils": 32,
                        "./GenericWorker": 28
                    }
                ],
                26: [
                    function(e, v, f) {
                        var i = e("../utils"), s = e("./GenericWorker");
                        function n(d) {
                            s.call(this, "DataLengthProbe for " + d), this.propName = d, this.withStreamInfo(d, 0);
                        }
                        i.inherits(n, s), n.prototype.processChunk = function(d) {
                            if (d) {
                                var w = this.streamInfo[this.propName] || 0;
                                this.streamInfo[this.propName] = w + d.data.length;
                            }
                            s.prototype.processChunk.call(this, d);
                        }, v.exports = n;
                    },
                    {
                        "../utils": 32,
                        "./GenericWorker": 28
                    }
                ],
                27: [
                    function(e, v, f) {
                        var i = e("../utils"), s = e("./GenericWorker");
                        function n(d) {
                            s.call(this, "DataWorker");
                            var w = this;
                            this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, d.then(function(E) {
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
                            var d = null, w = Math.min(this.max, this.index + 16384);
                            if (this.index >= this.max) return this.end();
                            switch(this.type){
                                case "string":
                                    d = this.data.substring(this.index, w);
                                    break;
                                case "uint8array":
                                    d = this.data.subarray(this.index, w);
                                    break;
                                case "array":
                                case "nodebuffer":
                                    d = this.data.slice(this.index, w);
                            }
                            return this.index = w, this.push({
                                data: d,
                                meta: {
                                    percent: this.max ? this.index / this.max * 100 : 0
                                }
                            });
                        }, v.exports = n;
                    },
                    {
                        "../utils": 32,
                        "./GenericWorker": 28
                    }
                ],
                28: [
                    function(e, v, f) {
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
                                if (this._listeners[s]) for(var d = 0; d < this._listeners[s].length; d++)this._listeners[s][d].call(this, n);
                            },
                            pipe: function(s) {
                                return s.registerPrevious(this);
                            },
                            registerPrevious: function(s) {
                                if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
                                this.streamInfo = s.streamInfo, this.mergeStreamInfo(), this.previous = s;
                                var n = this;
                                return s.on("data", function(d) {
                                    n.processChunk(d);
                                }), s.on("end", function() {
                                    n.end();
                                }), s.on("error", function(d) {
                                    n.error(d);
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
                        }, v.exports = i;
                    },
                    {}
                ],
                29: [
                    function(e, v, f) {
                        var i = e("../utils"), s = e("./ConvertWorker"), n = e("./GenericWorker"), d = e("../base64"), w = e("../support"), E = e("../external"), k = null;
                        if (w.nodestream) try {
                            k = e("../nodejs/NodejsStreamOutputAdapter");
                        } catch  {}
                        function x(_, o) {
                            return new E.Promise(function(m, h) {
                                var y = [], C = _._internalType, I = _._outputType, T = _._mimeType;
                                _.on("data", function(j, P) {
                                    y.push(j), o && o(P);
                                }).on("error", function(j) {
                                    y = [], h(j);
                                }).on("end", function() {
                                    try {
                                        var j = function(P, G, D) {
                                            switch(P){
                                                case "blob":
                                                    return i.newBlob(i.transformTo("arraybuffer", G), D);
                                                case "base64":
                                                    return d.encode(G);
                                                default:
                                                    return i.transformTo(P, G);
                                            }
                                        }(I, function(P, G) {
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
                                        }(C, y), T);
                                        m(j);
                                    } catch (P) {
                                        h(P);
                                    }
                                    y = [];
                                }).resume();
                            });
                        }
                        function u(_, o, m) {
                            var h = o;
                            switch(o){
                                case "blob":
                                case "arraybuffer":
                                    h = "uint8array";
                                    break;
                                case "base64":
                                    h = "string";
                            }
                            try {
                                this._internalType = h, this._outputType = o, this._mimeType = m, i.checkSupport(h), this._worker = _.pipe(new s(h)), _.lock();
                            } catch (y) {
                                this._worker = new n("error"), this._worker.error(y);
                            }
                        }
                        u.prototype = {
                            accumulate: function(_) {
                                return x(this, _);
                            },
                            on: function(_, o) {
                                var m = this;
                                return _ === "data" ? this._worker.on(_, function(h) {
                                    o.call(m, h.data, h.meta);
                                }) : this._worker.on(_, function() {
                                    i.delay(o, arguments, m);
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
                        }, v.exports = u;
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
                    function(e, v, f) {
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
                    function(e, v, f) {
                        for(var i = e("./utils"), s = e("./support"), n = e("./nodejsUtils"), d = e("./stream/GenericWorker"), w = new Array(256), E = 0; E < 256; E++)w[E] = 252 <= E ? 6 : 248 <= E ? 5 : 240 <= E ? 4 : 224 <= E ? 3 : 192 <= E ? 2 : 1;
                        w[254] = w[254] = 1;
                        function k() {
                            d.call(this, "utf-8 decode"), this.leftOver = null;
                        }
                        function x() {
                            d.call(this, "utf-8 encode");
                        }
                        f.utf8encode = function(u) {
                            return s.nodebuffer ? n.newBufferFrom(u, "utf-8") : function(_) {
                                var o, m, h, y, C, I = _.length, T = 0;
                                for(y = 0; y < I; y++)(64512 & (m = _.charCodeAt(y))) == 55296 && y + 1 < I && (64512 & (h = _.charCodeAt(y + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (h - 56320), y++), T += m < 128 ? 1 : m < 2048 ? 2 : m < 65536 ? 3 : 4;
                                for(o = s.uint8array ? new Uint8Array(T) : new Array(T), y = C = 0; C < T; y++)(64512 & (m = _.charCodeAt(y))) == 55296 && y + 1 < I && (64512 & (h = _.charCodeAt(y + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (h - 56320), y++), m < 128 ? o[C++] = m : (m < 2048 ? o[C++] = 192 | m >>> 6 : (m < 65536 ? o[C++] = 224 | m >>> 12 : (o[C++] = 240 | m >>> 18, o[C++] = 128 | m >>> 12 & 63), o[C++] = 128 | m >>> 6 & 63), o[C++] = 128 | 63 & m);
                                return o;
                            }(u);
                        }, f.utf8decode = function(u) {
                            return s.nodebuffer ? i.transformTo("nodebuffer", u).toString("utf-8") : function(_) {
                                var o, m, h, y, C = _.length, I = new Array(2 * C);
                                for(o = m = 0; o < C;)if ((h = _[o++]) < 128) I[m++] = h;
                                else if (4 < (y = w[h])) I[m++] = 65533, o += y - 1;
                                else {
                                    for(h &= y === 2 ? 31 : y === 3 ? 15 : 7; 1 < y && o < C;)h = h << 6 | 63 & _[o++], y--;
                                    1 < y ? I[m++] = 65533 : h < 65536 ? I[m++] = h : (h -= 65536, I[m++] = 55296 | h >> 10 & 1023, I[m++] = 56320 | 1023 & h);
                                }
                                return I.length !== m && (I.subarray ? I = I.subarray(0, m) : I.length = m), i.applyFromCharCode(I);
                            }(u = i.transformTo(s.uint8array ? "uint8array" : "array", u));
                        }, i.inherits(k, d), k.prototype.processChunk = function(u) {
                            var _ = i.transformTo(s.uint8array ? "uint8array" : "array", u.data);
                            if (this.leftOver && this.leftOver.length) {
                                if (s.uint8array) {
                                    var o = _;
                                    (_ = new Uint8Array(o.length + this.leftOver.length)).set(this.leftOver, 0), _.set(o, this.leftOver.length);
                                } else _ = this.leftOver.concat(_);
                                this.leftOver = null;
                            }
                            var m = function(y, C) {
                                var I;
                                for((C = C || y.length) > y.length && (C = y.length), I = C - 1; 0 <= I && (192 & y[I]) == 128;)I--;
                                return I < 0 || I === 0 ? C : I + w[y[I]] > C ? I : C;
                            }(_), h = _;
                            m !== _.length && (s.uint8array ? (h = _.subarray(0, m), this.leftOver = _.subarray(m, _.length)) : (h = _.slice(0, m), this.leftOver = _.slice(m, _.length))), this.push({
                                data: f.utf8decode(h),
                                meta: u.meta
                            });
                        }, k.prototype.flush = function() {
                            this.leftOver && this.leftOver.length && (this.push({
                                data: f.utf8decode(this.leftOver),
                                meta: {}
                            }), this.leftOver = null);
                        }, f.Utf8DecodeWorker = k, i.inherits(x, d), x.prototype.processChunk = function(u) {
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
                    function(e, v, f) {
                        var i = e("./support"), s = e("./base64"), n = e("./nodejsUtils"), d = e("./external");
                        function w(o) {
                            return o;
                        }
                        function E(o, m) {
                            for(var h = 0; h < o.length; ++h)m[h] = 255 & o.charCodeAt(h);
                            return m;
                        }
                        e("setimmediate"), f.newBlob = function(o, m) {
                            f.checkSupport("blob");
                            try {
                                return new Blob([
                                    o
                                ], {
                                    type: m
                                });
                            } catch  {
                                try {
                                    var h = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                                    return h.append(o), h.getBlob(m);
                                } catch  {
                                    throw new Error("Bug : can't construct the Blob.");
                                }
                            }
                        };
                        var k = {
                            stringifyByChunk: function(o, m, h) {
                                var y = [], C = 0, I = o.length;
                                if (I <= h) return String.fromCharCode.apply(null, o);
                                for(; C < I;)m === "array" || m === "nodebuffer" ? y.push(String.fromCharCode.apply(null, o.slice(C, Math.min(C + h, I)))) : y.push(String.fromCharCode.apply(null, o.subarray(C, Math.min(C + h, I)))), C += h;
                                return y.join("");
                            },
                            stringifyByChar: function(o) {
                                for(var m = "", h = 0; h < o.length; h++)m += String.fromCharCode(o[h]);
                                return m;
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
                        function x(o) {
                            var m = 65536, h = f.getTypeOf(o), y = !0;
                            if (h === "uint8array" ? y = k.applyCanBeUsed.uint8array : h === "nodebuffer" && (y = k.applyCanBeUsed.nodebuffer), y) for(; 1 < m;)try {
                                return k.stringifyByChunk(o, h, m);
                            } catch  {
                                m = Math.floor(m / 2);
                            }
                            return k.stringifyByChar(o);
                        }
                        function u(o, m) {
                            for(var h = 0; h < o.length; h++)m[h] = o[h];
                            return m;
                        }
                        f.applyFromCharCode = x;
                        var _ = {};
                        _.string = {
                            string: w,
                            array: function(o) {
                                return E(o, new Array(o.length));
                            },
                            arraybuffer: function(o) {
                                return _.string.uint8array(o).buffer;
                            },
                            uint8array: function(o) {
                                return E(o, new Uint8Array(o.length));
                            },
                            nodebuffer: function(o) {
                                return E(o, n.allocBuffer(o.length));
                            }
                        }, _.array = {
                            string: x,
                            array: w,
                            arraybuffer: function(o) {
                                return new Uint8Array(o).buffer;
                            },
                            uint8array: function(o) {
                                return new Uint8Array(o);
                            },
                            nodebuffer: function(o) {
                                return n.newBufferFrom(o);
                            }
                        }, _.arraybuffer = {
                            string: function(o) {
                                return x(new Uint8Array(o));
                            },
                            array: function(o) {
                                return u(new Uint8Array(o), new Array(o.byteLength));
                            },
                            arraybuffer: w,
                            uint8array: function(o) {
                                return new Uint8Array(o);
                            },
                            nodebuffer: function(o) {
                                return n.newBufferFrom(new Uint8Array(o));
                            }
                        }, _.uint8array = {
                            string: x,
                            array: function(o) {
                                return u(o, new Array(o.length));
                            },
                            arraybuffer: function(o) {
                                return o.buffer;
                            },
                            uint8array: w,
                            nodebuffer: function(o) {
                                return n.newBufferFrom(o);
                            }
                        }, _.nodebuffer = {
                            string: x,
                            array: function(o) {
                                return u(o, new Array(o.length));
                            },
                            arraybuffer: function(o) {
                                return _.nodebuffer.uint8array(o).buffer;
                            },
                            uint8array: function(o) {
                                return u(o, new Uint8Array(o.length));
                            },
                            nodebuffer: w
                        }, f.transformTo = function(o, m) {
                            if (m = m || "", !o) return m;
                            f.checkSupport(o);
                            var h = f.getTypeOf(m);
                            return _[h][o](m);
                        }, f.resolve = function(o) {
                            for(var m = o.split("/"), h = [], y = 0; y < m.length; y++){
                                var C = m[y];
                                C === "." || C === "" && y !== 0 && y !== m.length - 1 || (C === ".." ? h.pop() : h.push(C));
                            }
                            return h.join("/");
                        }, f.getTypeOf = function(o) {
                            return typeof o == "string" ? "string" : Object.prototype.toString.call(o) === "[object Array]" ? "array" : i.nodebuffer && n.isBuffer(o) ? "nodebuffer" : i.uint8array && o instanceof Uint8Array ? "uint8array" : i.arraybuffer && o instanceof ArrayBuffer ? "arraybuffer" : void 0;
                        }, f.checkSupport = function(o) {
                            if (!i[o.toLowerCase()]) throw new Error(o + " is not supported by this platform");
                        }, f.MAX_VALUE_16BITS = 65535, f.MAX_VALUE_32BITS = -1, f.pretty = function(o) {
                            var m, h, y = "";
                            for(h = 0; h < (o || "").length; h++)y += "\\x" + ((m = o.charCodeAt(h)) < 16 ? "0" : "") + m.toString(16).toUpperCase();
                            return y;
                        }, f.delay = function(o, m, h) {
                            setImmediate(function() {
                                o.apply(h || null, m || []);
                            });
                        }, f.inherits = function(o, m) {
                            function h() {}
                            h.prototype = m.prototype, o.prototype = new h;
                        }, f.extend = function() {
                            var o, m, h = {};
                            for(o = 0; o < arguments.length; o++)for(m in arguments[o])Object.prototype.hasOwnProperty.call(arguments[o], m) && h[m] === void 0 && (h[m] = arguments[o][m]);
                            return h;
                        }, f.prepareContent = function(o, m, h, y, C) {
                            return d.Promise.resolve(m).then(function(I) {
                                return i.blob && (I instanceof Blob || [
                                    "[object File]",
                                    "[object Blob]"
                                ].indexOf(Object.prototype.toString.call(I)) !== -1) && typeof FileReader < "u" ? new d.Promise(function(T, j) {
                                    var P = new FileReader;
                                    P.onload = function(G) {
                                        T(G.target.result);
                                    }, P.onerror = function(G) {
                                        j(G.target.error);
                                    }, P.readAsArrayBuffer(I);
                                }) : I;
                            }).then(function(I) {
                                var T = f.getTypeOf(I);
                                return T ? (T === "arraybuffer" ? I = f.transformTo("uint8array", I) : T === "string" && (C ? I = s.decode(I) : h && y !== !0 && (I = function(j) {
                                    return E(j, i.uint8array ? new Uint8Array(j.length) : new Array(j.length));
                                }(I))), I) : d.Promise.reject(new Error("Can't read the data of '" + o + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
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
                    function(e, v, f) {
                        var i = e("./reader/readerFor"), s = e("./utils"), n = e("./signature"), d = e("./zipEntry"), w = e("./support");
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
                                for(this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(n.CENTRAL_FILE_HEADER);)(k = new d({
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
                        }, v.exports = E;
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
                    function(e, v, f) {
                        var i = e("./reader/readerFor"), s = e("./utils"), n = e("./compressedObject"), d = e("./crc32"), w = e("./utf8"), E = e("./compressions"), k = e("./support");
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
                                var _, o;
                                if (u.skip(22), this.fileNameLength = u.readInt(2), o = u.readInt(2), this.fileName = u.readData(this.fileNameLength), u.skip(o), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
                                if ((_ = function(m) {
                                    for(var h in E)if (Object.prototype.hasOwnProperty.call(E, h) && E[h].magic === m) return E[h];
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
                                var _, o, m, h = u.index + this.extraFieldsLength;
                                for(this.extraFields || (this.extraFields = {}); u.index + 4 < h;)_ = u.readInt(2), o = u.readInt(2), m = u.readData(o), this.extraFields[_] = {
                                    id: _,
                                    length: o,
                                    value: m
                                };
                                u.setIndex(h);
                            },
                            handleUTF8: function() {
                                var u = k.uint8array ? "uint8array" : "array";
                                if (this.useUTF8()) this.fileNameStr = w.utf8decode(this.fileName), this.fileCommentStr = w.utf8decode(this.fileComment);
                                else {
                                    var _ = this.findExtraFieldUnicodePath();
                                    if (_ !== null) this.fileNameStr = _;
                                    else {
                                        var o = s.transformTo(u, this.fileName);
                                        this.fileNameStr = this.loadOptions.decodeFileName(o);
                                    }
                                    var m = this.findExtraFieldUnicodeComment();
                                    if (m !== null) this.fileCommentStr = m;
                                    else {
                                        var h = s.transformTo(u, this.fileComment);
                                        this.fileCommentStr = this.loadOptions.decodeFileName(h);
                                    }
                                }
                            },
                            findExtraFieldUnicodePath: function() {
                                var u = this.extraFields[28789];
                                if (u) {
                                    var _ = i(u.value);
                                    return _.readInt(1) !== 1 || d(this.fileName) !== _.readInt(4) ? null : w.utf8decode(_.readData(u.length - 5));
                                }
                                return null;
                            },
                            findExtraFieldUnicodeComment: function() {
                                var u = this.extraFields[25461];
                                if (u) {
                                    var _ = i(u.value);
                                    return _.readInt(1) !== 1 || d(this.fileComment) !== _.readInt(4) ? null : w.utf8decode(_.readData(u.length - 5));
                                }
                                return null;
                            }
                        }, v.exports = x;
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
                    function(e, v, f) {
                        function i(_, o, m) {
                            this.name = _, this.dir = m.dir, this.date = m.date, this.comment = m.comment, this.unixPermissions = m.unixPermissions, this.dosPermissions = m.dosPermissions, this._data = o, this._dataBinary = m.binary, this.options = {
                                compression: m.compression,
                                compressionOptions: m.compressionOptions
                            };
                        }
                        var s = e("./stream/StreamHelper"), n = e("./stream/DataWorker"), d = e("./utf8"), w = e("./compressedObject"), E = e("./stream/GenericWorker");
                        i.prototype = {
                            internalStream: function(_) {
                                var o = null, m = "string";
                                try {
                                    if (!_) throw new Error("No output type specified.");
                                    var h = (m = _.toLowerCase()) === "string" || m === "text";
                                    m !== "binarystring" && m !== "text" || (m = "string"), o = this._decompressWorker();
                                    var y = !this._dataBinary;
                                    y && !h && (o = o.pipe(new d.Utf8EncodeWorker)), !y && h && (o = o.pipe(new d.Utf8DecodeWorker));
                                } catch (C) {
                                    (o = new E("error")).error(C);
                                }
                                return new s(o, m, "");
                            },
                            async: function(_, o) {
                                return this.internalStream(_).accumulate(o);
                            },
                            nodeStream: function(_, o) {
                                return this.internalStream(_ || "nodebuffer").toNodejsStream(o);
                            },
                            _compressWorker: function(_, o) {
                                if (this._data instanceof w && this._data.compression.magic === _.magic) return this._data.getCompressedWorker();
                                var m = this._decompressWorker();
                                return this._dataBinary || (m = m.pipe(new d.Utf8EncodeWorker)), w.createWorkerFrom(m, _, o);
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
                        v.exports = i;
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
                    function(e, v, f) {
                        (function(i) {
                            var s, n, d = i.MutationObserver || i.WebKitMutationObserver;
                            if (d) {
                                var w = 0, E = new d(_), k = i.document.createTextNode("");
                                E.observe(k, {
                                    characterData: !0
                                }), s = function() {
                                    k.data = w = ++w % 2;
                                };
                            } else if (i.setImmediate || i.MessageChannel === void 0) s = "document" in i && "onreadystatechange" in i.document.createElement("script") ? function() {
                                var o = i.document.createElement("script");
                                o.onreadystatechange = function() {
                                    _(), o.onreadystatechange = null, o.parentNode.removeChild(o), o = null;
                                }, i.document.documentElement.appendChild(o);
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
                                var o, m;
                                n = !0;
                                for(var h = u.length; h;){
                                    for(m = u, u = [], o = -1; ++o < h;)m[o]();
                                    h = u.length;
                                }
                                n = !1;
                            }
                            v.exports = function(o) {
                                u.push(o) !== 1 || n || s();
                            };
                        }).call(this, typeof de < "u" ? de : typeof self < "u" ? self : typeof window < "u" ? window : {});
                    },
                    {}
                ],
                37: [
                    function(e, v, f) {
                        var i = e("immediate");
                        function s() {}
                        var n = {}, d = [
                            "REJECTED"
                        ], w = [
                            "FULFILLED"
                        ], E = [
                            "PENDING"
                        ];
                        function k(h) {
                            if (typeof h != "function") throw new TypeError("resolver must be a function");
                            this.state = E, this.queue = [], this.outcome = void 0, h !== s && o(this, h);
                        }
                        function x(h, y, C) {
                            this.promise = h, typeof y == "function" && (this.onFulfilled = y, this.callFulfilled = this.otherCallFulfilled), typeof C == "function" && (this.onRejected = C, this.callRejected = this.otherCallRejected);
                        }
                        function u(h, y, C) {
                            i(function() {
                                var I;
                                try {
                                    I = y(C);
                                } catch (T) {
                                    return n.reject(h, T);
                                }
                                I === h ? n.reject(h, new TypeError("Cannot resolve promise with itself")) : n.resolve(h, I);
                            });
                        }
                        function _(h) {
                            var y = h && h.then;
                            if (h && (typeof h == "object" || typeof h == "function") && typeof y == "function") return function() {
                                y.apply(h, arguments);
                            };
                        }
                        function o(h, y) {
                            var C = !1;
                            function I(P) {
                                C || (C = !0, n.reject(h, P));
                            }
                            function T(P) {
                                C || (C = !0, n.resolve(h, P));
                            }
                            var j = m(function() {
                                y(T, I);
                            });
                            j.status === "error" && I(j.value);
                        }
                        function m(h, y) {
                            var C = {};
                            try {
                                C.value = h(y), C.status = "success";
                            } catch (I) {
                                C.status = "error", C.value = I;
                            }
                            return C;
                        }
                        (v.exports = k).prototype.finally = function(h) {
                            if (typeof h != "function") return this;
                            var y = this.constructor;
                            return this.then(function(C) {
                                return y.resolve(h()).then(function() {
                                    return C;
                                });
                            }, function(C) {
                                return y.resolve(h()).then(function() {
                                    throw C;
                                });
                            });
                        }, k.prototype.catch = function(h) {
                            return this.then(null, h);
                        }, k.prototype.then = function(h, y) {
                            if (typeof h != "function" && this.state === w || typeof y != "function" && this.state === d) return this;
                            var C = new this.constructor(s);
                            return this.state !== E ? u(C, this.state === w ? h : y, this.outcome) : this.queue.push(new x(C, h, y)), C;
                        }, x.prototype.callFulfilled = function(h) {
                            n.resolve(this.promise, h);
                        }, x.prototype.otherCallFulfilled = function(h) {
                            u(this.promise, this.onFulfilled, h);
                        }, x.prototype.callRejected = function(h) {
                            n.reject(this.promise, h);
                        }, x.prototype.otherCallRejected = function(h) {
                            u(this.promise, this.onRejected, h);
                        }, n.resolve = function(h, y) {
                            var C = m(_, y);
                            if (C.status === "error") return n.reject(h, C.value);
                            var I = C.value;
                            if (I) o(h, I);
                            else {
                                h.state = w, h.outcome = y;
                                for(var T = -1, j = h.queue.length; ++T < j;)h.queue[T].callFulfilled(y);
                            }
                            return h;
                        }, n.reject = function(h, y) {
                            h.state = d, h.outcome = y;
                            for(var C = -1, I = h.queue.length; ++C < I;)h.queue[C].callRejected(y);
                            return h;
                        }, k.resolve = function(h) {
                            return h instanceof this ? h : n.resolve(new this(s), h);
                        }, k.reject = function(h) {
                            var y = new this(s);
                            return n.reject(y, h);
                        }, k.all = function(h) {
                            var y = this;
                            if (Object.prototype.toString.call(h) !== "[object Array]") return this.reject(new TypeError("must be an array"));
                            var C = h.length, I = !1;
                            if (!C) return this.resolve([]);
                            for(var T = new Array(C), j = 0, P = -1, G = new this(s); ++P < C;)D(h[P], P);
                            return G;
                            function D(J, et) {
                                y.resolve(J).then(function(A) {
                                    T[et] = A, ++j !== C || I || (I = !0, n.resolve(G, T));
                                }, function(A) {
                                    I || (I = !0, n.reject(G, A));
                                });
                            }
                        }, k.race = function(h) {
                            var y = this;
                            if (Object.prototype.toString.call(h) !== "[object Array]") return this.reject(new TypeError("must be an array"));
                            var C = h.length, I = !1;
                            if (!C) return this.resolve([]);
                            for(var T = -1, j = new this(s); ++T < C;)P = h[T], y.resolve(P).then(function(G) {
                                I || (I = !0, n.resolve(j, G));
                            }, function(G) {
                                I || (I = !0, n.reject(j, G));
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
                    function(e, v, f) {
                        var i = {};
                        (0, e("./lib/utils/common").assign)(i, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), v.exports = i;
                    },
                    {
                        "./lib/deflate": 39,
                        "./lib/inflate": 40,
                        "./lib/utils/common": 41,
                        "./lib/zlib/constants": 44
                    }
                ],
                39: [
                    function(e, v, f) {
                        var i = e("./zlib/deflate"), s = e("./utils/common"), n = e("./utils/strings"), d = e("./zlib/messages"), w = e("./zlib/zstream"), E = Object.prototype.toString, k = 0, x = -1, u = 0, _ = 8;
                        function o(h) {
                            if (!(this instanceof o)) return new o(h);
                            this.options = s.assign({
                                level: x,
                                method: _,
                                chunkSize: 16384,
                                windowBits: 15,
                                memLevel: 8,
                                strategy: u,
                                to: ""
                            }, h || {});
                            var y = this.options;
                            y.raw && 0 < y.windowBits ? y.windowBits = -y.windowBits : y.gzip && 0 < y.windowBits && y.windowBits < 16 && (y.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new w, this.strm.avail_out = 0;
                            var C = i.deflateInit2(this.strm, y.level, y.method, y.windowBits, y.memLevel, y.strategy);
                            if (C !== k) throw new Error(d[C]);
                            if (y.header && i.deflateSetHeader(this.strm, y.header), y.dictionary) {
                                var I;
                                if (I = typeof y.dictionary == "string" ? n.string2buf(y.dictionary) : E.call(y.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(y.dictionary) : y.dictionary, (C = i.deflateSetDictionary(this.strm, I)) !== k) throw new Error(d[C]);
                                this._dict_set = !0;
                            }
                        }
                        function m(h, y) {
                            var C = new o(y);
                            if (C.push(h, !0), C.err) throw C.msg || d[C.err];
                            return C.result;
                        }
                        o.prototype.push = function(h, y) {
                            var C, I, T = this.strm, j = this.options.chunkSize;
                            if (this.ended) return !1;
                            I = y === ~~y ? y : y === !0 ? 4 : 0, typeof h == "string" ? T.input = n.string2buf(h) : E.call(h) === "[object ArrayBuffer]" ? T.input = new Uint8Array(h) : T.input = h, T.next_in = 0, T.avail_in = T.input.length;
                            do {
                                if (T.avail_out === 0 && (T.output = new s.Buf8(j), T.next_out = 0, T.avail_out = j), (C = i.deflate(T, I)) !== 1 && C !== k) return this.onEnd(C), !(this.ended = !0);
                                T.avail_out !== 0 && (T.avail_in !== 0 || I !== 4 && I !== 2) || (this.options.to === "string" ? this.onData(n.buf2binstring(s.shrinkBuf(T.output, T.next_out))) : this.onData(s.shrinkBuf(T.output, T.next_out)));
                            }while ((0 < T.avail_in || T.avail_out === 0) && C !== 1);
                            return I === 4 ? (C = i.deflateEnd(this.strm), this.onEnd(C), this.ended = !0, C === k) : I !== 2 || (this.onEnd(k), !(T.avail_out = 0));
                        }, o.prototype.onData = function(h) {
                            this.chunks.push(h);
                        }, o.prototype.onEnd = function(h) {
                            h === k && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = h, this.msg = this.strm.msg;
                        }, f.Deflate = o, f.deflate = m, f.deflateRaw = function(h, y) {
                            return (y = y || {}).raw = !0, m(h, y);
                        }, f.gzip = function(h, y) {
                            return (y = y || {}).gzip = !0, m(h, y);
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
                    function(e, v, f) {
                        var i = e("./zlib/inflate"), s = e("./utils/common"), n = e("./utils/strings"), d = e("./zlib/constants"), w = e("./zlib/messages"), E = e("./zlib/zstream"), k = e("./zlib/gzheader"), x = Object.prototype.toString;
                        function u(o) {
                            if (!(this instanceof u)) return new u(o);
                            this.options = s.assign({
                                chunkSize: 16384,
                                windowBits: 0,
                                to: ""
                            }, o || {});
                            var m = this.options;
                            m.raw && 0 <= m.windowBits && m.windowBits < 16 && (m.windowBits = -m.windowBits, m.windowBits === 0 && (m.windowBits = -15)), !(0 <= m.windowBits && m.windowBits < 16) || o && o.windowBits || (m.windowBits += 32), 15 < m.windowBits && m.windowBits < 48 && !(15 & m.windowBits) && (m.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new E, this.strm.avail_out = 0;
                            var h = i.inflateInit2(this.strm, m.windowBits);
                            if (h !== d.Z_OK) throw new Error(w[h]);
                            this.header = new k, i.inflateGetHeader(this.strm, this.header);
                        }
                        function _(o, m) {
                            var h = new u(m);
                            if (h.push(o, !0), h.err) throw h.msg || w[h.err];
                            return h.result;
                        }
                        u.prototype.push = function(o, m) {
                            var h, y, C, I, T, j, P = this.strm, G = this.options.chunkSize, D = this.options.dictionary, J = !1;
                            if (this.ended) return !1;
                            y = m === ~~m ? m : m === !0 ? d.Z_FINISH : d.Z_NO_FLUSH, typeof o == "string" ? P.input = n.binstring2buf(o) : x.call(o) === "[object ArrayBuffer]" ? P.input = new Uint8Array(o) : P.input = o, P.next_in = 0, P.avail_in = P.input.length;
                            do {
                                if (P.avail_out === 0 && (P.output = new s.Buf8(G), P.next_out = 0, P.avail_out = G), (h = i.inflate(P, d.Z_NO_FLUSH)) === d.Z_NEED_DICT && D && (j = typeof D == "string" ? n.string2buf(D) : x.call(D) === "[object ArrayBuffer]" ? new Uint8Array(D) : D, h = i.inflateSetDictionary(this.strm, j)), h === d.Z_BUF_ERROR && J === !0 && (h = d.Z_OK, J = !1), h !== d.Z_STREAM_END && h !== d.Z_OK) return this.onEnd(h), !(this.ended = !0);
                                P.next_out && (P.avail_out !== 0 && h !== d.Z_STREAM_END && (P.avail_in !== 0 || y !== d.Z_FINISH && y !== d.Z_SYNC_FLUSH) || (this.options.to === "string" ? (C = n.utf8border(P.output, P.next_out), I = P.next_out - C, T = n.buf2string(P.output, C), P.next_out = I, P.avail_out = G - I, I && s.arraySet(P.output, P.output, C, I, 0), this.onData(T)) : this.onData(s.shrinkBuf(P.output, P.next_out)))), P.avail_in === 0 && P.avail_out === 0 && (J = !0);
                            }while ((0 < P.avail_in || P.avail_out === 0) && h !== d.Z_STREAM_END);
                            return h === d.Z_STREAM_END && (y = d.Z_FINISH), y === d.Z_FINISH ? (h = i.inflateEnd(this.strm), this.onEnd(h), this.ended = !0, h === d.Z_OK) : y !== d.Z_SYNC_FLUSH || (this.onEnd(d.Z_OK), !(P.avail_out = 0));
                        }, u.prototype.onData = function(o) {
                            this.chunks.push(o);
                        }, u.prototype.onEnd = function(o) {
                            o === d.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = o, this.msg = this.strm.msg;
                        }, f.Inflate = u, f.inflate = _, f.inflateRaw = function(o, m) {
                            return (m = m || {}).raw = !0, _(o, m);
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
                    function(e, v, f) {
                        var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
                        f.assign = function(d) {
                            for(var w = Array.prototype.slice.call(arguments, 1); w.length;){
                                var E = w.shift();
                                if (E) {
                                    if (typeof E != "object") throw new TypeError(E + "must be non-object");
                                    for(var k in E)E.hasOwnProperty(k) && (d[k] = E[k]);
                                }
                            }
                            return d;
                        }, f.shrinkBuf = function(d, w) {
                            return d.length === w ? d : d.subarray ? d.subarray(0, w) : (d.length = w, d);
                        };
                        var s = {
                            arraySet: function(d, w, E, k, x) {
                                if (w.subarray && d.subarray) d.set(w.subarray(E, E + k), x);
                                else for(var u = 0; u < k; u++)d[x + u] = w[E + u];
                            },
                            flattenChunks: function(d) {
                                var w, E, k, x, u, _;
                                for(w = k = 0, E = d.length; w < E; w++)k += d[w].length;
                                for(_ = new Uint8Array(k), w = x = 0, E = d.length; w < E; w++)u = d[w], _.set(u, x), x += u.length;
                                return _;
                            }
                        }, n = {
                            arraySet: function(d, w, E, k, x) {
                                for(var u = 0; u < k; u++)d[x + u] = w[E + u];
                            },
                            flattenChunks: function(d) {
                                return [].concat.apply([], d);
                            }
                        };
                        f.setTyped = function(d) {
                            d ? (f.Buf8 = Uint8Array, f.Buf16 = Uint16Array, f.Buf32 = Int32Array, f.assign(f, s)) : (f.Buf8 = Array, f.Buf16 = Array, f.Buf32 = Array, f.assign(f, n));
                        }, f.setTyped(i);
                    },
                    {}
                ],
                42: [
                    function(e, v, f) {
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
                        for(var d = new i.Buf8(256), w = 0; w < 256; w++)d[w] = 252 <= w ? 6 : 248 <= w ? 5 : 240 <= w ? 4 : 224 <= w ? 3 : 192 <= w ? 2 : 1;
                        function E(k, x) {
                            if (x < 65537 && (k.subarray && n || !k.subarray && s)) return String.fromCharCode.apply(null, i.shrinkBuf(k, x));
                            for(var u = "", _ = 0; _ < x; _++)u += String.fromCharCode(k[_]);
                            return u;
                        }
                        d[254] = d[254] = 1, f.string2buf = function(k) {
                            var x, u, _, o, m, h = k.length, y = 0;
                            for(o = 0; o < h; o++)(64512 & (u = k.charCodeAt(o))) == 55296 && o + 1 < h && (64512 & (_ = k.charCodeAt(o + 1))) == 56320 && (u = 65536 + (u - 55296 << 10) + (_ - 56320), o++), y += u < 128 ? 1 : u < 2048 ? 2 : u < 65536 ? 3 : 4;
                            for(x = new i.Buf8(y), o = m = 0; m < y; o++)(64512 & (u = k.charCodeAt(o))) == 55296 && o + 1 < h && (64512 & (_ = k.charCodeAt(o + 1))) == 56320 && (u = 65536 + (u - 55296 << 10) + (_ - 56320), o++), u < 128 ? x[m++] = u : (u < 2048 ? x[m++] = 192 | u >>> 6 : (u < 65536 ? x[m++] = 224 | u >>> 12 : (x[m++] = 240 | u >>> 18, x[m++] = 128 | u >>> 12 & 63), x[m++] = 128 | u >>> 6 & 63), x[m++] = 128 | 63 & u);
                            return x;
                        }, f.buf2binstring = function(k) {
                            return E(k, k.length);
                        }, f.binstring2buf = function(k) {
                            for(var x = new i.Buf8(k.length), u = 0, _ = x.length; u < _; u++)x[u] = k.charCodeAt(u);
                            return x;
                        }, f.buf2string = function(k, x) {
                            var u, _, o, m, h = x || k.length, y = new Array(2 * h);
                            for(u = _ = 0; u < h;)if ((o = k[u++]) < 128) y[_++] = o;
                            else if (4 < (m = d[o])) y[_++] = 65533, u += m - 1;
                            else {
                                for(o &= m === 2 ? 31 : m === 3 ? 15 : 7; 1 < m && u < h;)o = o << 6 | 63 & k[u++], m--;
                                1 < m ? y[_++] = 65533 : o < 65536 ? y[_++] = o : (o -= 65536, y[_++] = 55296 | o >> 10 & 1023, y[_++] = 56320 | 1023 & o);
                            }
                            return E(y, _);
                        }, f.utf8border = function(k, x) {
                            var u;
                            for((x = x || k.length) > k.length && (x = k.length), u = x - 1; 0 <= u && (192 & k[u]) == 128;)u--;
                            return u < 0 || u === 0 ? x : u + d[k[u]] > x ? u : x;
                        };
                    },
                    {
                        "./common": 41
                    }
                ],
                43: [
                    function(e, v, f) {
                        v.exports = function(i, s, n, d) {
                            for(var w = 65535 & i | 0, E = i >>> 16 & 65535 | 0, k = 0; n !== 0;){
                                for(n -= k = 2e3 < n ? 2e3 : n; E = E + (w = w + s[d++] | 0) | 0, --k;);
                                w %= 65521, E %= 65521;
                            }
                            return w | E << 16 | 0;
                        };
                    },
                    {}
                ],
                44: [
                    function(e, v, f) {
                        v.exports = {
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
                    function(e, v, f) {
                        var i = function() {
                            for(var s, n = [], d = 0; d < 256; d++){
                                s = d;
                                for(var w = 0; w < 8; w++)s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
                                n[d] = s;
                            }
                            return n;
                        }();
                        v.exports = function(s, n, d, w) {
                            var E = i, k = w + d;
                            s ^= -1;
                            for(var x = w; x < k; x++)s = s >>> 8 ^ E[255 & (s ^ n[x])];
                            return -1 ^ s;
                        };
                    },
                    {}
                ],
                46: [
                    function(e, v, f) {
                        var i, s = e("../utils/common"), n = e("./trees"), d = e("./adler32"), w = e("./crc32"), E = e("./messages"), k = 0, x = 4, u = 0, _ = -2, o = -1, m = 4, h = 2, y = 8, C = 9, I = 286, T = 30, j = 19, P = 2 * I + 1, G = 15, D = 3, J = 258, et = J + D + 1, A = 42, L = 113, r = 1, M = 2, ft = 3, V = 4;
                        function dt(t, $) {
                            return t.msg = E[$], $;
                        }
                        function X(t) {
                            return (t << 1) - (4 < t ? 9 : 0);
                        }
                        function ut(t) {
                            for(var $ = t.length; 0 <= --$;)t[$] = 0;
                        }
                        function B(t) {
                            var $ = t.state, F = $.pending;
                            F > t.avail_out && (F = t.avail_out), F !== 0 && (s.arraySet(t.output, $.pending_buf, $.pending_out, F, t.next_out), t.next_out += F, $.pending_out += F, t.total_out += F, t.avail_out -= F, $.pending -= F, $.pending === 0 && ($.pending_out = 0));
                        }
                        function U(t, $) {
                            n._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, $), t.block_start = t.strstart, B(t.strm);
                        }
                        function lt(t, $) {
                            t.pending_buf[t.pending++] = $;
                        }
                        function rt(t, $) {
                            t.pending_buf[t.pending++] = $ >>> 8 & 255, t.pending_buf[t.pending++] = 255 & $;
                        }
                        function Q(t, $) {
                            var F, b, p = t.max_chain_length, z = t.strstart, Z = t.prev_length, H = t.nice_match, R = t.strstart > t.w_size - et ? t.strstart - (t.w_size - et) : 0, Y = t.window, nt = t.w_mask, K = t.prev, st = t.strstart + J, vt = Y[z + Z - 1], pt = Y[z + Z];
                            t.prev_length >= t.good_match && (p >>= 2), H > t.lookahead && (H = t.lookahead);
                            do if (Y[(F = $) + Z] === pt && Y[F + Z - 1] === vt && Y[F] === Y[z] && Y[++F] === Y[z + 1]) {
                                z += 2, F++;
                                do ;
                                while (Y[++z] === Y[++F] && Y[++z] === Y[++F] && Y[++z] === Y[++F] && Y[++z] === Y[++F] && Y[++z] === Y[++F] && Y[++z] === Y[++F] && Y[++z] === Y[++F] && Y[++z] === Y[++F] && z < st);
                                if (b = J - (st - z), z = st - J, Z < b) {
                                    if (t.match_start = $, H <= (Z = b)) break;
                                    vt = Y[z + Z - 1], pt = Y[z + Z];
                                }
                            }
                            while (($ = K[$ & nt]) > R && --p != 0);
                            return Z <= t.lookahead ? Z : t.lookahead;
                        }
                        function wt(t) {
                            var $, F, b, p, z, Z, H, R, Y, nt, K = t.w_size;
                            do {
                                if (p = t.window_size - t.lookahead - t.strstart, t.strstart >= K + (K - et)) {
                                    for(s.arraySet(t.window, t.window, K, K, 0), t.match_start -= K, t.strstart -= K, t.block_start -= K, $ = F = t.hash_size; b = t.head[--$], t.head[$] = K <= b ? b - K : 0, --F;);
                                    for($ = F = K; b = t.prev[--$], t.prev[$] = K <= b ? b - K : 0, --F;);
                                    p += K;
                                }
                                if (t.strm.avail_in === 0) break;
                                if (Z = t.strm, H = t.window, R = t.strstart + t.lookahead, Y = p, nt = void 0, nt = Z.avail_in, Y < nt && (nt = Y), F = nt === 0 ? 0 : (Z.avail_in -= nt, s.arraySet(H, Z.input, Z.next_in, nt, R), Z.state.wrap === 1 ? Z.adler = d(Z.adler, H, nt, R) : Z.state.wrap === 2 && (Z.adler = w(Z.adler, H, nt, R)), Z.next_in += nt, Z.total_in += nt, nt), t.lookahead += F, t.lookahead + t.insert >= D) for(z = t.strstart - t.insert, t.ins_h = t.window[z], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[z + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[z + D - 1]) & t.hash_mask, t.prev[z & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = z, z++, t.insert--, !(t.lookahead + t.insert < D)););
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
                            for(var F, b, p;;){
                                if (t.lookahead < et) {
                                    if (wt(t), t.lookahead < et && $ === k) return r;
                                    if (t.lookahead === 0) break;
                                }
                                if (F = 0, t.lookahead >= D && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + D - 1]) & t.hash_mask, F = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = D - 1, F !== 0 && t.prev_length < t.max_lazy_match && t.strstart - F <= t.w_size - et && (t.match_length = Q(t, F), t.match_length <= 5 && (t.strategy === 1 || t.match_length === D && 4096 < t.strstart - t.match_start) && (t.match_length = D - 1)), t.prev_length >= D && t.match_length <= t.prev_length) {
                                    for(p = t.strstart + t.lookahead - D, b = n._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - D), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= p && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + D - 1]) & t.hash_mask, F = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), --t.prev_length != 0;);
                                    if (t.match_available = 0, t.match_length = D - 1, t.strstart++, b && (U(t, !1), t.strm.avail_out === 0)) return r;
                                } else if (t.match_available) {
                                    if ((b = n._tr_tally(t, 0, t.window[t.strstart - 1])) && U(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0) return r;
                                } else t.match_available = 1, t.strstart++, t.lookahead--;
                            }
                            return t.match_available && (b = n._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < D - 1 ? t.strstart : D - 1, $ === x ? (U(t, !0), t.strm.avail_out === 0 ? ft : V) : t.last_lit && (U(t, !1), t.strm.avail_out === 0) ? r : M;
                        }
                        function gt(t, $, F, b, p) {
                            this.good_length = t, this.max_lazy = $, this.nice_length = F, this.max_chain = b, this.func = p;
                        }
                        function kt() {
                            this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = y, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * P), this.dyn_dtree = new s.Buf16(2 * (2 * T + 1)), this.bl_tree = new s.Buf16(2 * (2 * j + 1)), ut(this.dyn_ltree), ut(this.dyn_dtree), ut(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(G + 1), this.heap = new s.Buf16(2 * I + 1), ut(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * I + 1), ut(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
                        }
                        function _t(t) {
                            var $;
                            return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = h, ($ = t.state).pending = 0, $.pending_out = 0, $.wrap < 0 && ($.wrap = -$.wrap), $.status = $.wrap ? A : L, t.adler = $.wrap === 2 ? 0 : 1, $.last_flush = k, n._tr_init($), u) : dt(t, _);
                        }
                        function Tt(t) {
                            var $ = _t(t);
                            return $ === u && function(F) {
                                F.window_size = 2 * F.w_size, ut(F.head), F.max_lazy_match = i[F.level].max_lazy, F.good_match = i[F.level].good_length, F.nice_match = i[F.level].nice_length, F.max_chain_length = i[F.level].max_chain, F.strstart = 0, F.block_start = 0, F.lookahead = 0, F.insert = 0, F.match_length = F.prev_length = D - 1, F.match_available = 0, F.ins_h = 0;
                            }(t.state), $;
                        }
                        function It(t, $, F, b, p, z) {
                            if (!t) return _;
                            var Z = 1;
                            if ($ === o && ($ = 6), b < 0 ? (Z = 0, b = -b) : 15 < b && (Z = 2, b -= 16), p < 1 || C < p || F !== y || b < 8 || 15 < b || $ < 0 || 9 < $ || z < 0 || m < z) return dt(t, _);
                            b === 8 && (b = 9);
                            var H = new kt;
                            return (t.state = H).strm = t, H.wrap = Z, H.gzhead = null, H.w_bits = b, H.w_size = 1 << H.w_bits, H.w_mask = H.w_size - 1, H.hash_bits = p + 7, H.hash_size = 1 << H.hash_bits, H.hash_mask = H.hash_size - 1, H.hash_shift = ~~((H.hash_bits + D - 1) / D), H.window = new s.Buf8(2 * H.w_size), H.head = new s.Buf16(H.hash_size), H.prev = new s.Buf16(H.w_size), H.lit_bufsize = 1 << p + 6, H.pending_buf_size = 4 * H.lit_bufsize, H.pending_buf = new s.Buf8(H.pending_buf_size), H.d_buf = 1 * H.lit_bufsize, H.l_buf = 3 * H.lit_bufsize, H.level = $, H.strategy = z, H.method = F, Tt(t);
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
                            return It(t, $, y, 15, 8, 0);
                        }, f.deflateInit2 = It, f.deflateReset = Tt, f.deflateResetKeep = _t, f.deflateSetHeader = function(t, $) {
                            return t && t.state ? t.state.wrap !== 2 ? _ : (t.state.gzhead = $, u) : _;
                        }, f.deflate = function(t, $) {
                            var F, b, p, z;
                            if (!t || !t.state || 5 < $ || $ < 0) return t ? dt(t, _) : _;
                            if (b = t.state, !t.output || !t.input && t.avail_in !== 0 || b.status === 666 && $ !== x) return dt(t, t.avail_out === 0 ? -5 : _);
                            if (b.strm = t, F = b.last_flush, b.last_flush = $, b.status === A) if (b.wrap === 2) t.adler = 0, lt(b, 31), lt(b, 139), lt(b, 8), b.gzhead ? (lt(b, (b.gzhead.text ? 1 : 0) + (b.gzhead.hcrc ? 2 : 0) + (b.gzhead.extra ? 4 : 0) + (b.gzhead.name ? 8 : 0) + (b.gzhead.comment ? 16 : 0)), lt(b, 255 & b.gzhead.time), lt(b, b.gzhead.time >> 8 & 255), lt(b, b.gzhead.time >> 16 & 255), lt(b, b.gzhead.time >> 24 & 255), lt(b, b.level === 9 ? 2 : 2 <= b.strategy || b.level < 2 ? 4 : 0), lt(b, 255 & b.gzhead.os), b.gzhead.extra && b.gzhead.extra.length && (lt(b, 255 & b.gzhead.extra.length), lt(b, b.gzhead.extra.length >> 8 & 255)), b.gzhead.hcrc && (t.adler = w(t.adler, b.pending_buf, b.pending, 0)), b.gzindex = 0, b.status = 69) : (lt(b, 0), lt(b, 0), lt(b, 0), lt(b, 0), lt(b, 0), lt(b, b.level === 9 ? 2 : 2 <= b.strategy || b.level < 2 ? 4 : 0), lt(b, 3), b.status = L);
                            else {
                                var Z = y + (b.w_bits - 8 << 4) << 8;
                                Z |= (2 <= b.strategy || b.level < 2 ? 0 : b.level < 6 ? 1 : b.level === 6 ? 2 : 3) << 6, b.strstart !== 0 && (Z |= 32), Z += 31 - Z % 31, b.status = L, rt(b, Z), b.strstart !== 0 && (rt(b, t.adler >>> 16), rt(b, 65535 & t.adler)), t.adler = 1;
                            }
                            if (b.status === 69) if (b.gzhead.extra) {
                                for(p = b.pending; b.gzindex < (65535 & b.gzhead.extra.length) && (b.pending !== b.pending_buf_size || (b.gzhead.hcrc && b.pending > p && (t.adler = w(t.adler, b.pending_buf, b.pending - p, p)), B(t), p = b.pending, b.pending !== b.pending_buf_size));)lt(b, 255 & b.gzhead.extra[b.gzindex]), b.gzindex++;
                                b.gzhead.hcrc && b.pending > p && (t.adler = w(t.adler, b.pending_buf, b.pending - p, p)), b.gzindex === b.gzhead.extra.length && (b.gzindex = 0, b.status = 73);
                            } else b.status = 73;
                            if (b.status === 73) if (b.gzhead.name) {
                                p = b.pending;
                                do {
                                    if (b.pending === b.pending_buf_size && (b.gzhead.hcrc && b.pending > p && (t.adler = w(t.adler, b.pending_buf, b.pending - p, p)), B(t), p = b.pending, b.pending === b.pending_buf_size)) {
                                        z = 1;
                                        break;
                                    }
                                    z = b.gzindex < b.gzhead.name.length ? 255 & b.gzhead.name.charCodeAt(b.gzindex++) : 0, lt(b, z);
                                }while (z !== 0);
                                b.gzhead.hcrc && b.pending > p && (t.adler = w(t.adler, b.pending_buf, b.pending - p, p)), z === 0 && (b.gzindex = 0, b.status = 91);
                            } else b.status = 91;
                            if (b.status === 91) if (b.gzhead.comment) {
                                p = b.pending;
                                do {
                                    if (b.pending === b.pending_buf_size && (b.gzhead.hcrc && b.pending > p && (t.adler = w(t.adler, b.pending_buf, b.pending - p, p)), B(t), p = b.pending, b.pending === b.pending_buf_size)) {
                                        z = 1;
                                        break;
                                    }
                                    z = b.gzindex < b.gzhead.comment.length ? 255 & b.gzhead.comment.charCodeAt(b.gzindex++) : 0, lt(b, z);
                                }while (z !== 0);
                                b.gzhead.hcrc && b.pending > p && (t.adler = w(t.adler, b.pending_buf, b.pending - p, p)), z === 0 && (b.status = 103);
                            } else b.status = 103;
                            if (b.status === 103 && (b.gzhead.hcrc ? (b.pending + 2 > b.pending_buf_size && B(t), b.pending + 2 <= b.pending_buf_size && (lt(b, 255 & t.adler), lt(b, t.adler >> 8 & 255), t.adler = 0, b.status = L)) : b.status = L), b.pending !== 0) {
                                if (B(t), t.avail_out === 0) return b.last_flush = -1, u;
                            } else if (t.avail_in === 0 && X($) <= X(F) && $ !== x) return dt(t, -5);
                            if (b.status === 666 && t.avail_in !== 0) return dt(t, -5);
                            if (t.avail_in !== 0 || b.lookahead !== 0 || $ !== k && b.status !== 666) {
                                var H = b.strategy === 2 ? function(R, Y) {
                                    for(var nt;;){
                                        if (R.lookahead === 0 && (wt(R), R.lookahead === 0)) {
                                            if (Y === k) return r;
                                            break;
                                        }
                                        if (R.match_length = 0, nt = n._tr_tally(R, 0, R.window[R.strstart]), R.lookahead--, R.strstart++, nt && (U(R, !1), R.strm.avail_out === 0)) return r;
                                    }
                                    return R.insert = 0, Y === x ? (U(R, !0), R.strm.avail_out === 0 ? ft : V) : R.last_lit && (U(R, !1), R.strm.avail_out === 0) ? r : M;
                                }(b, $) : b.strategy === 3 ? function(R, Y) {
                                    for(var nt, K, st, vt, pt = R.window;;){
                                        if (R.lookahead <= J) {
                                            if (wt(R), R.lookahead <= J && Y === k) return r;
                                            if (R.lookahead === 0) break;
                                        }
                                        if (R.match_length = 0, R.lookahead >= D && 0 < R.strstart && (K = pt[st = R.strstart - 1]) === pt[++st] && K === pt[++st] && K === pt[++st]) {
                                            vt = R.strstart + J;
                                            do ;
                                            while (K === pt[++st] && K === pt[++st] && K === pt[++st] && K === pt[++st] && K === pt[++st] && K === pt[++st] && K === pt[++st] && K === pt[++st] && st < vt);
                                            R.match_length = J - (vt - st), R.match_length > R.lookahead && (R.match_length = R.lookahead);
                                        }
                                        if (R.match_length >= D ? (nt = n._tr_tally(R, 1, R.match_length - D), R.lookahead -= R.match_length, R.strstart += R.match_length, R.match_length = 0) : (nt = n._tr_tally(R, 0, R.window[R.strstart]), R.lookahead--, R.strstart++), nt && (U(R, !1), R.strm.avail_out === 0)) return r;
                                    }
                                    return R.insert = 0, Y === x ? (U(R, !0), R.strm.avail_out === 0 ? ft : V) : R.last_lit && (U(R, !1), R.strm.avail_out === 0) ? r : M;
                                }(b, $) : i[b.level].func(b, $);
                                if (H !== ft && H !== V || (b.status = 666), H === r || H === ft) return t.avail_out === 0 && (b.last_flush = -1), u;
                                if (H === M && ($ === 1 ? n._tr_align(b) : $ !== 5 && (n._tr_stored_block(b, 0, 0, !1), $ === 3 && (ut(b.head), b.lookahead === 0 && (b.strstart = 0, b.block_start = 0, b.insert = 0))), B(t), t.avail_out === 0)) return b.last_flush = -1, u;
                            }
                            return $ !== x ? u : b.wrap <= 0 ? 1 : (b.wrap === 2 ? (lt(b, 255 & t.adler), lt(b, t.adler >> 8 & 255), lt(b, t.adler >> 16 & 255), lt(b, t.adler >> 24 & 255), lt(b, 255 & t.total_in), lt(b, t.total_in >> 8 & 255), lt(b, t.total_in >> 16 & 255), lt(b, t.total_in >> 24 & 255)) : (rt(b, t.adler >>> 16), rt(b, 65535 & t.adler)), B(t), 0 < b.wrap && (b.wrap = -b.wrap), b.pending !== 0 ? u : 1);
                        }, f.deflateEnd = function(t) {
                            var $;
                            return t && t.state ? ($ = t.state.status) !== A && $ !== 69 && $ !== 73 && $ !== 91 && $ !== 103 && $ !== L && $ !== 666 ? dt(t, _) : (t.state = null, $ === L ? dt(t, -3) : u) : _;
                        }, f.deflateSetDictionary = function(t, $) {
                            var F, b, p, z, Z, H, R, Y, nt = $.length;
                            if (!t || !t.state || (z = (F = t.state).wrap) === 2 || z === 1 && F.status !== A || F.lookahead) return _;
                            for(z === 1 && (t.adler = d(t.adler, $, nt, 0)), F.wrap = 0, nt >= F.w_size && (z === 0 && (ut(F.head), F.strstart = 0, F.block_start = 0, F.insert = 0), Y = new s.Buf8(F.w_size), s.arraySet(Y, $, nt - F.w_size, F.w_size, 0), $ = Y, nt = F.w_size), Z = t.avail_in, H = t.next_in, R = t.input, t.avail_in = nt, t.next_in = 0, t.input = $, wt(F); F.lookahead >= D;){
                                for(b = F.strstart, p = F.lookahead - (D - 1); F.ins_h = (F.ins_h << F.hash_shift ^ F.window[b + D - 1]) & F.hash_mask, F.prev[b & F.w_mask] = F.head[F.ins_h], F.head[F.ins_h] = b, b++, --p;);
                                F.strstart = b, F.lookahead = D - 1, wt(F);
                            }
                            return F.strstart += F.lookahead, F.block_start = F.strstart, F.insert = F.lookahead, F.lookahead = 0, F.match_length = F.prev_length = D - 1, F.match_available = 0, t.next_in = H, t.input = R, t.avail_in = Z, F.wrap = z, u;
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
                    function(e, v, f) {
                        v.exports = function() {
                            this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
                        };
                    },
                    {}
                ],
                48: [
                    function(e, v, f) {
                        v.exports = function(i, s) {
                            var n, d, w, E, k, x, u, _, o, m, h, y, C, I, T, j, P, G, D, J, et, A, L, r, M;
                            n = i.state, d = i.next_in, r = i.input, w = d + (i.avail_in - 5), E = i.next_out, M = i.output, k = E - (s - i.avail_out), x = E + (i.avail_out - 257), u = n.dmax, _ = n.wsize, o = n.whave, m = n.wnext, h = n.window, y = n.hold, C = n.bits, I = n.lencode, T = n.distcode, j = (1 << n.lenbits) - 1, P = (1 << n.distbits) - 1;
                            t: do {
                                C < 15 && (y += r[d++] << C, C += 8, y += r[d++] << C, C += 8), G = I[y & j];
                                e: for(;;){
                                    if (y >>>= D = G >>> 24, C -= D, (D = G >>> 16 & 255) === 0) M[E++] = 65535 & G;
                                    else {
                                        if (!(16 & D)) {
                                            if (!(64 & D)) {
                                                G = I[(65535 & G) + (y & (1 << D) - 1)];
                                                continue e;
                                            }
                                            if (32 & D) {
                                                n.mode = 12;
                                                break t;
                                            }
                                            i.msg = "invalid literal/length code", n.mode = 30;
                                            break t;
                                        }
                                        J = 65535 & G, (D &= 15) && (C < D && (y += r[d++] << C, C += 8), J += y & (1 << D) - 1, y >>>= D, C -= D), C < 15 && (y += r[d++] << C, C += 8, y += r[d++] << C, C += 8), G = T[y & P];
                                        r: for(;;){
                                            if (y >>>= D = G >>> 24, C -= D, !(16 & (D = G >>> 16 & 255))) {
                                                if (!(64 & D)) {
                                                    G = T[(65535 & G) + (y & (1 << D) - 1)];
                                                    continue r;
                                                }
                                                i.msg = "invalid distance code", n.mode = 30;
                                                break t;
                                            }
                                            if (et = 65535 & G, C < (D &= 15) && (y += r[d++] << C, (C += 8) < D && (y += r[d++] << C, C += 8)), u < (et += y & (1 << D) - 1)) {
                                                i.msg = "invalid distance too far back", n.mode = 30;
                                                break t;
                                            }
                                            if (y >>>= D, C -= D, (D = E - k) < et) {
                                                if (o < (D = et - D) && n.sane) {
                                                    i.msg = "invalid distance too far back", n.mode = 30;
                                                    break t;
                                                }
                                                if (L = h, (A = 0) === m) {
                                                    if (A += _ - D, D < J) {
                                                        for(J -= D; M[E++] = h[A++], --D;);
                                                        A = E - et, L = M;
                                                    }
                                                } else if (m < D) {
                                                    if (A += _ + m - D, (D -= m) < J) {
                                                        for(J -= D; M[E++] = h[A++], --D;);
                                                        if (A = 0, m < J) {
                                                            for(J -= D = m; M[E++] = h[A++], --D;);
                                                            A = E - et, L = M;
                                                        }
                                                    }
                                                } else if (A += m - D, D < J) {
                                                    for(J -= D; M[E++] = h[A++], --D;);
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
                            }while (d < w && E < x);
                            d -= J = C >> 3, y &= (1 << (C -= J << 3)) - 1, i.next_in = d, i.next_out = E, i.avail_in = d < w ? w - d + 5 : 5 - (d - w), i.avail_out = E < x ? x - E + 257 : 257 - (E - x), n.hold = y, n.bits = C;
                        };
                    },
                    {}
                ],
                49: [
                    function(e, v, f) {
                        var i = e("../utils/common"), s = e("./adler32"), n = e("./crc32"), d = e("./inffast"), w = e("./inftrees"), E = 1, k = 2, x = 0, u = -2, _ = 1, o = 852, m = 592;
                        function h(A) {
                            return (A >>> 24 & 255) + (A >>> 8 & 65280) + ((65280 & A) << 8) + ((255 & A) << 24);
                        }
                        function y() {
                            this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new i.Buf16(320), this.work = new i.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
                        }
                        function C(A) {
                            var L;
                            return A && A.state ? (L = A.state, A.total_in = A.total_out = L.total = 0, A.msg = "", L.wrap && (A.adler = 1 & L.wrap), L.mode = _, L.last = 0, L.havedict = 0, L.dmax = 32768, L.head = null, L.hold = 0, L.bits = 0, L.lencode = L.lendyn = new i.Buf32(o), L.distcode = L.distdyn = new i.Buf32(m), L.sane = 1, L.back = -1, x) : u;
                        }
                        function I(A) {
                            var L;
                            return A && A.state ? ((L = A.state).wsize = 0, L.whave = 0, L.wnext = 0, C(A)) : u;
                        }
                        function T(A, L) {
                            var r, M;
                            return A && A.state ? (M = A.state, L < 0 ? (r = 0, L = -L) : (r = 1 + (L >> 4), L < 48 && (L &= 15)), L && (L < 8 || 15 < L) ? u : (M.window !== null && M.wbits !== L && (M.window = null), M.wrap = r, M.wbits = L, I(A))) : u;
                        }
                        function j(A, L) {
                            var r, M;
                            return A ? (M = new y, (A.state = M).window = null, (r = T(A, L)) !== x && (A.state = null), r) : u;
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
                        f.inflateReset = I, f.inflateReset2 = T, f.inflateResetKeep = C, f.inflateInit = function(A) {
                            return j(A, 15);
                        }, f.inflateInit2 = j, f.inflate = function(A, L) {
                            var r, M, ft, V, dt, X, ut, B, U, lt, rt, Q, wt, xt, ht, gt, kt, _t, Tt, It, t, $, F, b, p = 0, z = new i.Buf8(4), Z = [
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
                            (r = A.state).mode === 12 && (r.mode = 13), dt = A.next_out, ft = A.output, ut = A.avail_out, V = A.next_in, M = A.input, X = A.avail_in, B = r.hold, U = r.bits, lt = X, rt = ut, $ = x;
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
                                    A.adler = r.check = h(B), U = B = 0, r.mode = 11;
                                case 11:
                                    if (r.havedict === 0) return A.next_out = dt, A.avail_out = ut, A.next_in = V, A.avail_in = X, r.hold = B, r.bits = U, 2;
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
                                        if (X < Q && (Q = X), ut < Q && (Q = ut), Q === 0) break t;
                                        i.arraySet(ft, M, V, Q, dt), X -= Q, V += Q, ut -= Q, dt += Q, r.length -= Q;
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
                                        r.lens[Z[r.have++]] = 7 & B, B >>>= 3, U -= 3;
                                    }
                                    for(; r.have < 19;)r.lens[Z[r.have++]] = 0;
                                    if (r.lencode = r.lendyn, r.lenbits = 7, F = {
                                        bits: r.lenbits
                                    }, $ = w(0, r.lens, 0, 19, r.lencode, 0, r.work, F), r.lenbits = F.bits, $) {
                                        A.msg = "invalid code lengths set", r.mode = 30;
                                        break;
                                    }
                                    r.have = 0, r.mode = 19;
                                case 19:
                                    for(; r.have < r.nlen + r.ndist;){
                                        for(; gt = (p = r.lencode[B & (1 << r.lenbits) - 1]) >>> 16 & 255, kt = 65535 & p, !((ht = p >>> 24) <= U);){
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
                                    if (6 <= X && 258 <= ut) {
                                        A.next_out = dt, A.avail_out = ut, A.next_in = V, A.avail_in = X, r.hold = B, r.bits = U, d(A, rt), dt = A.next_out, ft = A.output, ut = A.avail_out, V = A.next_in, M = A.input, X = A.avail_in, B = r.hold, U = r.bits, r.mode === 12 && (r.back = -1);
                                        break;
                                    }
                                    for(r.back = 0; gt = (p = r.lencode[B & (1 << r.lenbits) - 1]) >>> 16 & 255, kt = 65535 & p, !((ht = p >>> 24) <= U);){
                                        if (X === 0) break t;
                                        X--, B += M[V++] << U, U += 8;
                                    }
                                    if (gt && !(240 & gt)) {
                                        for(_t = ht, Tt = gt, It = kt; gt = (p = r.lencode[It + ((B & (1 << _t + Tt) - 1) >> _t)]) >>> 16 & 255, kt = 65535 & p, !(_t + (ht = p >>> 24) <= U);){
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
                                    for(; gt = (p = r.distcode[B & (1 << r.distbits) - 1]) >>> 16 & 255, kt = 65535 & p, !((ht = p >>> 24) <= U);){
                                        if (X === 0) break t;
                                        X--, B += M[V++] << U, U += 8;
                                    }
                                    if (!(240 & gt)) {
                                        for(_t = ht, Tt = gt, It = kt; gt = (p = r.distcode[It + ((B & (1 << _t + Tt) - 1) >> _t)]) >>> 16 & 255, kt = 65535 & p, !(_t + (ht = p >>> 24) <= U);){
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
                                    if (ut === 0) break t;
                                    if (Q = rt - ut, r.offset > Q) {
                                        if ((Q = r.offset - Q) > r.whave && r.sane) {
                                            A.msg = "invalid distance too far back", r.mode = 30;
                                            break;
                                        }
                                        wt = Q > r.wnext ? (Q -= r.wnext, r.wsize - Q) : r.wnext - Q, Q > r.length && (Q = r.length), xt = r.window;
                                    } else xt = ft, wt = dt - r.offset, Q = r.length;
                                    for(ut < Q && (Q = ut), ut -= Q, r.length -= Q; ft[dt++] = xt[wt++], --Q;);
                                    r.length === 0 && (r.mode = 21);
                                    break;
                                case 26:
                                    if (ut === 0) break t;
                                    ft[dt++] = r.length, ut--, r.mode = 21;
                                    break;
                                case 27:
                                    if (r.wrap) {
                                        for(; U < 32;){
                                            if (X === 0) break t;
                                            X--, B |= M[V++] << U, U += 8;
                                        }
                                        if (rt -= ut, A.total_out += rt, r.total += rt, rt && (A.adler = r.check = r.flags ? n(r.check, ft, rt, dt - rt) : s(r.check, ft, rt, dt - rt)), rt = ut, (r.flags ? B : h(B)) !== r.check) {
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
                            return A.next_out = dt, A.avail_out = ut, A.next_in = V, A.avail_in = X, r.hold = B, r.bits = U, (r.wsize || rt !== A.avail_out && r.mode < 30 && (r.mode < 27 || L !== 4)) && et(A, A.output, A.next_out, rt - A.avail_out) ? (r.mode = 31, -4) : (lt -= A.avail_in, rt -= A.avail_out, A.total_in += lt, A.total_out += rt, r.total += rt, r.wrap && rt && (A.adler = r.check = r.flags ? n(r.check, ft, rt, A.next_out - rt) : s(r.check, ft, rt, A.next_out - rt)), A.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === 12 ? 128 : 0) + (r.mode === 20 || r.mode === 15 ? 256 : 0), (lt == 0 && rt === 0 || L === 4) && $ === x && ($ = -5), $);
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
                    function(e, v, f) {
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
                        ], d = [
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
                        v.exports = function(E, k, x, u, _, o, m, h) {
                            var y, C, I, T, j, P, G, D, J, et = h.bits, A = 0, L = 0, r = 0, M = 0, ft = 0, V = 0, dt = 0, X = 0, ut = 0, B = 0, U = null, lt = 0, rt = new i.Buf16(16), Q = new i.Buf16(16), wt = null, xt = 0;
                            for(A = 0; A <= 15; A++)rt[A] = 0;
                            for(L = 0; L < u; L++)rt[k[x + L]]++;
                            for(ft = et, M = 15; 1 <= M && rt[M] === 0; M--);
                            if (M < ft && (ft = M), M === 0) return _[o++] = 20971520, _[o++] = 20971520, h.bits = 1, 0;
                            for(r = 1; r < M && rt[r] === 0; r++);
                            for(ft < r && (ft = r), A = X = 1; A <= 15; A++)if (X <<= 1, (X -= rt[A]) < 0) return -1;
                            if (0 < X && (E === 0 || M !== 1)) return -1;
                            for(Q[1] = 0, A = 1; A < 15; A++)Q[A + 1] = Q[A] + rt[A];
                            for(L = 0; L < u; L++)k[x + L] !== 0 && (m[Q[k[x + L]]++] = L);
                            if (P = E === 0 ? (U = wt = m, 19) : E === 1 ? (U = s, lt -= 257, wt = n, xt -= 257, 256) : (U = d, wt = w, -1), A = r, j = o, dt = L = B = 0, I = -1, T = (ut = 1 << (V = ft)) - 1, E === 1 && 852 < ut || E === 2 && 592 < ut) return 1;
                            for(;;){
                                for(G = A - dt, J = m[L] < P ? (D = 0, m[L]) : m[L] > P ? (D = wt[xt + m[L]], U[lt + m[L]]) : (D = 96, 0), y = 1 << A - dt, r = C = 1 << V; _[j + (B >> dt) + (C -= y)] = G << 24 | D << 16 | J | 0, C !== 0;);
                                for(y = 1 << A - 1; B & y;)y >>= 1;
                                if (y !== 0 ? (B &= y - 1, B += y) : B = 0, L++, --rt[A] == 0) {
                                    if (A === M) break;
                                    A = k[x + m[L]];
                                }
                                if (ft < A && (B & T) !== I) {
                                    for(dt === 0 && (dt = ft), j += r, X = 1 << (V = A - dt); V + dt < M && !((X -= rt[V + dt]) <= 0);)V++, X <<= 1;
                                    if (ut += 1 << V, E === 1 && 852 < ut || E === 2 && 592 < ut) return 1;
                                    _[I = B & T] = ft << 24 | V << 16 | j - o | 0;
                                }
                            }
                            return B !== 0 && (_[j + B] = A - dt << 24 | 64 << 16 | 0), h.bits = ft, 0;
                        };
                    },
                    {
                        "../utils/common": 41
                    }
                ],
                51: [
                    function(e, v, f) {
                        v.exports = {
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
                    function(e, v, f) {
                        var i = e("../utils/common"), s = 0, n = 1;
                        function d(p) {
                            for(var z = p.length; 0 <= --z;)p[z] = 0;
                        }
                        var w = 0, E = 29, k = 256, x = k + 1 + E, u = 30, _ = 19, o = 2 * x + 1, m = 15, h = 16, y = 7, C = 256, I = 16, T = 17, j = 18, P = [
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
                        d(et);
                        var A = new Array(2 * u);
                        d(A);
                        var L = new Array(512);
                        d(L);
                        var r = new Array(256);
                        d(r);
                        var M = new Array(E);
                        d(M);
                        var ft, V, dt, X = new Array(u);
                        function ut(p, z, Z, H, R) {
                            this.static_tree = p, this.extra_bits = z, this.extra_base = Z, this.elems = H, this.max_length = R, this.has_stree = p && p.length;
                        }
                        function B(p, z) {
                            this.dyn_tree = p, this.max_code = 0, this.stat_desc = z;
                        }
                        function U(p) {
                            return p < 256 ? L[p] : L[256 + (p >>> 7)];
                        }
                        function lt(p, z) {
                            p.pending_buf[p.pending++] = 255 & z, p.pending_buf[p.pending++] = z >>> 8 & 255;
                        }
                        function rt(p, z, Z) {
                            p.bi_valid > h - Z ? (p.bi_buf |= z << p.bi_valid & 65535, lt(p, p.bi_buf), p.bi_buf = z >> h - p.bi_valid, p.bi_valid += Z - h) : (p.bi_buf |= z << p.bi_valid & 65535, p.bi_valid += Z);
                        }
                        function Q(p, z, Z) {
                            rt(p, Z[2 * z], Z[2 * z + 1]);
                        }
                        function wt(p, z) {
                            for(var Z = 0; Z |= 1 & p, p >>>= 1, Z <<= 1, 0 < --z;);
                            return Z >>> 1;
                        }
                        function xt(p, z, Z) {
                            var H, R, Y = new Array(m + 1), nt = 0;
                            for(H = 1; H <= m; H++)Y[H] = nt = nt + Z[H - 1] << 1;
                            for(R = 0; R <= z; R++){
                                var K = p[2 * R + 1];
                                K !== 0 && (p[2 * R] = wt(Y[K]++, K));
                            }
                        }
                        function ht(p) {
                            var z;
                            for(z = 0; z < x; z++)p.dyn_ltree[2 * z] = 0;
                            for(z = 0; z < u; z++)p.dyn_dtree[2 * z] = 0;
                            for(z = 0; z < _; z++)p.bl_tree[2 * z] = 0;
                            p.dyn_ltree[2 * C] = 1, p.opt_len = p.static_len = 0, p.last_lit = p.matches = 0;
                        }
                        function gt(p) {
                            8 < p.bi_valid ? lt(p, p.bi_buf) : 0 < p.bi_valid && (p.pending_buf[p.pending++] = p.bi_buf), p.bi_buf = 0, p.bi_valid = 0;
                        }
                        function kt(p, z, Z, H) {
                            var R = 2 * z, Y = 2 * Z;
                            return p[R] < p[Y] || p[R] === p[Y] && H[z] <= H[Z];
                        }
                        function _t(p, z, Z) {
                            for(var H = p.heap[Z], R = Z << 1; R <= p.heap_len && (R < p.heap_len && kt(z, p.heap[R + 1], p.heap[R], p.depth) && R++, !kt(z, H, p.heap[R], p.depth));)p.heap[Z] = p.heap[R], Z = R, R <<= 1;
                            p.heap[Z] = H;
                        }
                        function Tt(p, z, Z) {
                            var H, R, Y, nt, K = 0;
                            if (p.last_lit !== 0) for(; H = p.pending_buf[p.d_buf + 2 * K] << 8 | p.pending_buf[p.d_buf + 2 * K + 1], R = p.pending_buf[p.l_buf + K], K++, H === 0 ? Q(p, R, z) : (Q(p, (Y = r[R]) + k + 1, z), (nt = P[Y]) !== 0 && rt(p, R -= M[Y], nt), Q(p, Y = U(--H), Z), (nt = G[Y]) !== 0 && rt(p, H -= X[Y], nt)), K < p.last_lit;);
                            Q(p, C, z);
                        }
                        function It(p, z) {
                            var Z, H, R, Y = z.dyn_tree, nt = z.stat_desc.static_tree, K = z.stat_desc.has_stree, st = z.stat_desc.elems, vt = -1;
                            for(p.heap_len = 0, p.heap_max = o, Z = 0; Z < st; Z++)Y[2 * Z] !== 0 ? (p.heap[++p.heap_len] = vt = Z, p.depth[Z] = 0) : Y[2 * Z + 1] = 0;
                            for(; p.heap_len < 2;)Y[2 * (R = p.heap[++p.heap_len] = vt < 2 ? ++vt : 0)] = 1, p.depth[R] = 0, p.opt_len--, K && (p.static_len -= nt[2 * R + 1]);
                            for(z.max_code = vt, Z = p.heap_len >> 1; 1 <= Z; Z--)_t(p, Y, Z);
                            for(R = st; Z = p.heap[1], p.heap[1] = p.heap[p.heap_len--], _t(p, Y, 1), H = p.heap[1], p.heap[--p.heap_max] = Z, p.heap[--p.heap_max] = H, Y[2 * R] = Y[2 * Z] + Y[2 * H], p.depth[R] = (p.depth[Z] >= p.depth[H] ? p.depth[Z] : p.depth[H]) + 1, Y[2 * Z + 1] = Y[2 * H + 1] = R, p.heap[1] = R++, _t(p, Y, 1), 2 <= p.heap_len;);
                            p.heap[--p.heap_max] = p.heap[1], function(pt, St) {
                                var Mt, Ot, Zt, yt, Ht, Et, Ut = St.dyn_tree, At = St.max_code, ge = St.stat_desc.static_tree, Bt = St.stat_desc.has_stree, Pt = St.stat_desc.extra_bits, se = St.stat_desc.extra_base, jt = St.stat_desc.max_length, Rt = 0;
                                for(yt = 0; yt <= m; yt++)pt.bl_count[yt] = 0;
                                for(Ut[2 * pt.heap[pt.heap_max] + 1] = 0, Mt = pt.heap_max + 1; Mt < o; Mt++)jt < (yt = Ut[2 * Ut[2 * (Ot = pt.heap[Mt]) + 1] + 1] + 1) && (yt = jt, Rt++), Ut[2 * Ot + 1] = yt, At < Ot || (pt.bl_count[yt]++, Ht = 0, se <= Ot && (Ht = Pt[Ot - se]), Et = Ut[2 * Ot], pt.opt_len += Et * (yt + Ht), Bt && (pt.static_len += Et * (ge[2 * Ot + 1] + Ht)));
                                if (Rt !== 0) {
                                    do {
                                        for(yt = jt - 1; pt.bl_count[yt] === 0;)yt--;
                                        pt.bl_count[yt]--, pt.bl_count[yt + 1] += 2, pt.bl_count[jt]--, Rt -= 2;
                                    }while (0 < Rt);
                                    for(yt = jt; yt !== 0; yt--)for(Ot = pt.bl_count[yt]; Ot !== 0;)At < (Zt = pt.heap[--Mt]) || (Ut[2 * Zt + 1] !== yt && (pt.opt_len += (yt - Ut[2 * Zt + 1]) * Ut[2 * Zt], Ut[2 * Zt + 1] = yt), Ot--);
                                }
                            }(p, z), xt(Y, vt, p.bl_count);
                        }
                        function t(p, z, Z) {
                            var H, R, Y = -1, nt = z[1], K = 0, st = 7, vt = 4;
                            for(nt === 0 && (st = 138, vt = 3), z[2 * (Z + 1) + 1] = 65535, H = 0; H <= Z; H++)R = nt, nt = z[2 * (H + 1) + 1], ++K < st && R === nt || (K < vt ? p.bl_tree[2 * R] += K : R !== 0 ? (R !== Y && p.bl_tree[2 * R]++, p.bl_tree[2 * I]++) : K <= 10 ? p.bl_tree[2 * T]++ : p.bl_tree[2 * j]++, Y = R, vt = (K = 0) === nt ? (st = 138, 3) : R === nt ? (st = 6, 3) : (st = 7, 4));
                        }
                        function $(p, z, Z) {
                            var H, R, Y = -1, nt = z[1], K = 0, st = 7, vt = 4;
                            for(nt === 0 && (st = 138, vt = 3), H = 0; H <= Z; H++)if (R = nt, nt = z[2 * (H + 1) + 1], !(++K < st && R === nt)) {
                                if (K < vt) for(; Q(p, R, p.bl_tree), --K != 0;);
                                else R !== 0 ? (R !== Y && (Q(p, R, p.bl_tree), K--), Q(p, I, p.bl_tree), rt(p, K - 3, 2)) : K <= 10 ? (Q(p, T, p.bl_tree), rt(p, K - 3, 3)) : (Q(p, j, p.bl_tree), rt(p, K - 11, 7));
                                Y = R, vt = (K = 0) === nt ? (st = 138, 3) : R === nt ? (st = 6, 3) : (st = 7, 4);
                            }
                        }
                        d(X);
                        var F = !1;
                        function b(p, z, Z, H) {
                            rt(p, (w << 1) + (H ? 1 : 0), 3), function(R, Y, nt, K) {
                                gt(R), lt(R, nt), lt(R, ~nt), i.arraySet(R.pending_buf, R.window, Y, nt, R.pending), R.pending += nt;
                            }(p, z, Z);
                        }
                        f._tr_init = function(p) {
                            F || (function() {
                                var z, Z, H, R, Y, nt = new Array(m + 1);
                                for(R = H = 0; R < E - 1; R++)for(M[R] = H, z = 0; z < 1 << P[R]; z++)r[H++] = R;
                                for(r[H - 1] = R, R = Y = 0; R < 16; R++)for(X[R] = Y, z = 0; z < 1 << G[R]; z++)L[Y++] = R;
                                for(Y >>= 7; R < u; R++)for(X[R] = Y << 7, z = 0; z < 1 << G[R] - 7; z++)L[256 + Y++] = R;
                                for(Z = 0; Z <= m; Z++)nt[Z] = 0;
                                for(z = 0; z <= 143;)et[2 * z + 1] = 8, z++, nt[8]++;
                                for(; z <= 255;)et[2 * z + 1] = 9, z++, nt[9]++;
                                for(; z <= 279;)et[2 * z + 1] = 7, z++, nt[7]++;
                                for(; z <= 287;)et[2 * z + 1] = 8, z++, nt[8]++;
                                for(xt(et, x + 1, nt), z = 0; z < u; z++)A[2 * z + 1] = 5, A[2 * z] = wt(z, 5);
                                ft = new ut(et, P, k + 1, x, m), V = new ut(A, G, 0, u, m), dt = new ut(new Array(0), D, 0, _, y);
                            }(), F = !0), p.l_desc = new B(p.dyn_ltree, ft), p.d_desc = new B(p.dyn_dtree, V), p.bl_desc = new B(p.bl_tree, dt), p.bi_buf = 0, p.bi_valid = 0, ht(p);
                        }, f._tr_stored_block = b, f._tr_flush_block = function(p, z, Z, H) {
                            var R, Y, nt = 0;
                            0 < p.level ? (p.strm.data_type === 2 && (p.strm.data_type = function(K) {
                                var st, vt = 4093624447;
                                for(st = 0; st <= 31; st++, vt >>>= 1)if (1 & vt && K.dyn_ltree[2 * st] !== 0) return s;
                                if (K.dyn_ltree[18] !== 0 || K.dyn_ltree[20] !== 0 || K.dyn_ltree[26] !== 0) return n;
                                for(st = 32; st < k; st++)if (K.dyn_ltree[2 * st] !== 0) return n;
                                return s;
                            }(p)), It(p, p.l_desc), It(p, p.d_desc), nt = function(K) {
                                var st;
                                for(t(K, K.dyn_ltree, K.l_desc.max_code), t(K, K.dyn_dtree, K.d_desc.max_code), It(K, K.bl_desc), st = _ - 1; 3 <= st && K.bl_tree[2 * J[st] + 1] === 0; st--);
                                return K.opt_len += 3 * (st + 1) + 5 + 5 + 4, st;
                            }(p), R = p.opt_len + 3 + 7 >>> 3, (Y = p.static_len + 3 + 7 >>> 3) <= R && (R = Y)) : R = Y = Z + 5, Z + 4 <= R && z !== -1 ? b(p, z, Z, H) : p.strategy === 4 || Y === R ? (rt(p, 2 + (H ? 1 : 0), 3), Tt(p, et, A)) : (rt(p, 4 + (H ? 1 : 0), 3), function(K, st, vt, pt) {
                                var St;
                                for(rt(K, st - 257, 5), rt(K, vt - 1, 5), rt(K, pt - 4, 4), St = 0; St < pt; St++)rt(K, K.bl_tree[2 * J[St] + 1], 3);
                                $(K, K.dyn_ltree, st - 1), $(K, K.dyn_dtree, vt - 1);
                            }(p, p.l_desc.max_code + 1, p.d_desc.max_code + 1, nt + 1), Tt(p, p.dyn_ltree, p.dyn_dtree)), ht(p), H && gt(p);
                        }, f._tr_tally = function(p, z, Z) {
                            return p.pending_buf[p.d_buf + 2 * p.last_lit] = z >>> 8 & 255, p.pending_buf[p.d_buf + 2 * p.last_lit + 1] = 255 & z, p.pending_buf[p.l_buf + p.last_lit] = 255 & Z, p.last_lit++, z === 0 ? p.dyn_ltree[2 * Z]++ : (p.matches++, z--, p.dyn_ltree[2 * (r[Z] + k + 1)]++, p.dyn_dtree[2 * U(z)]++), p.last_lit === p.lit_bufsize - 1;
                        }, f._tr_align = function(p) {
                            rt(p, 2, 3), Q(p, C, et), function(z) {
                                z.bi_valid === 16 ? (lt(z, z.bi_buf), z.bi_buf = 0, z.bi_valid = 0) : 8 <= z.bi_valid && (z.pending_buf[z.pending++] = 255 & z.bi_buf, z.bi_buf >>= 8, z.bi_valid -= 8);
                            }(p);
                        };
                    },
                    {
                        "../utils/common": 41
                    }
                ],
                53: [
                    function(e, v, f) {
                        v.exports = function() {
                            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
                        };
                    },
                    {}
                ],
                54: [
                    function(e, v, f) {
                        (function(i) {
                            (function(s, n) {
                                if (!s.setImmediate) {
                                    var d, w, E, k, x = 1, u = {}, _ = !1, o = s.document, m = Object.getPrototypeOf && Object.getPrototypeOf(s);
                                    m = m && m.setTimeout ? m : s, d = {}.toString.call(s.process) === "[object process]" ? function(I) {
                                        process.nextTick(function() {
                                            y(I);
                                        });
                                    } : function() {
                                        if (s.postMessage && !s.importScripts) {
                                            var I = !0, T = s.onmessage;
                                            return s.onmessage = function() {
                                                I = !1;
                                            }, s.postMessage("", "*"), s.onmessage = T, I;
                                        }
                                    }() ? (k = "setImmediate$" + Math.random() + "$", s.addEventListener ? s.addEventListener("message", C, !1) : s.attachEvent("onmessage", C), function(I) {
                                        s.postMessage(k + I, "*");
                                    }) : s.MessageChannel ? ((E = new MessageChannel).port1.onmessage = function(I) {
                                        y(I.data);
                                    }, function(I) {
                                        E.port2.postMessage(I);
                                    }) : o && "onreadystatechange" in o.createElement("script") ? (w = o.documentElement, function(I) {
                                        var T = o.createElement("script");
                                        T.onreadystatechange = function() {
                                            y(I), T.onreadystatechange = null, w.removeChild(T), T = null;
                                        }, w.appendChild(T);
                                    }) : function(I) {
                                        setTimeout(y, 0, I);
                                    }, m.setImmediate = function(I) {
                                        typeof I != "function" && (I = new Function("" + I));
                                        for(var T = new Array(arguments.length - 1), j = 0; j < T.length; j++)T[j] = arguments[j + 1];
                                        var P = {
                                            callback: I,
                                            args: T
                                        };
                                        return u[x] = P, d(x), x++;
                                    }, m.clearImmediate = h;
                                }
                                function h(I) {
                                    delete u[I];
                                }
                                function y(I) {
                                    if (_) setTimeout(y, 0, I);
                                    else {
                                        var T = u[I];
                                        if (T) {
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
                                                })(T);
                                            } finally{
                                                h(I), _ = !1;
                                            }
                                        }
                                    }
                                }
                                function C(I) {
                                    I.source === s && typeof I.data == "string" && I.data.indexOf(k) === 0 && y(+I.data.slice(k.length));
                                }
                            })(typeof self > "u" ? i === void 0 ? this : i : self);
                        }).call(this, typeof de < "u" ? de : typeof self < "u" ? self : typeof window < "u" ? window : {});
                    },
                    {}
                ]
            }, {}, [
                10
            ])(10);
        });
    })(qe);
    var ri = qe.exports;
    const ni = ei(ri), W = {
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
    }, ct = (l)=>document.querySelector(l), Xe = (l)=>document.querySelectorAll(l);
    function qt(l) {
        return l < 1024 ? l + " B" : l < 1048576 ? (l / 1024).toFixed(1) + " KB" : (l / 1048576).toFixed(2) + " MB";
    }
    function ii() {
        return {
            format: W.format,
            removeBlack: ct("#remove-black").checked,
            threshold: parseInt(ct("#threshold").value),
            feather: parseInt(ct("#feather").value),
            pngColors: parseInt(ct("#png-colors").value),
            pngDither: ct("#png-dither").checked,
            jpegQuality: parseInt(ct("#jpeg-quality").value),
            webpLossless: ct("#webp-lossless").checked,
            webpQuality: parseInt(ct("#webp-quality").value)
        };
    }
    window.addFiles = ()=>ct("#file-input").click();
    window.loadFiles = function(l) {
        for (const g of l)g.type.startsWith("image/") && W.files.push({
            file: g,
            name: g.name,
            inputSize: g.size,
            thumbUrl: URL.createObjectURL(g),
            resultUrl: null,
            outputSize: null,
            processing: !1,
            error: null,
            ver: 0
        });
        W.files.length > 0 && W.activeIndex === -1 && (W.activeIndex = 0), Yt(), me(), Ke();
    };
    window.removeFile = function(l, g) {
        g.stopPropagation(), W.files[l].ver++, URL.revokeObjectURL(W.files[l].thumbUrl), W.files[l].resultUrl && URL.revokeObjectURL(W.files[l].resultUrl), W.files.splice(l, 1), W.files.length ? W.activeIndex >= W.files.length ? W.activeIndex = W.files.length - 1 : l < W.activeIndex ? W.activeIndex-- : l === W.activeIndex && (W.activeIndex = Math.min(W.activeIndex, W.files.length - 1)) : W.activeIndex = -1, Yt(), me();
    };
    window.clearAllFiles = function() {
        W.files.forEach((l)=>{
            l.ver++, URL.revokeObjectURL(l.thumbUrl), l.resultUrl && URL.revokeObjectURL(l.resultUrl);
        }), W.files = [], W.activeIndex = -1, Yt(), me();
    };
    window.selectFile = function(l) {
        W.activeIndex = l, W.compareX = .5, Yt(), me();
    };
    function Yt() {
        const l = ct("#file-list");
        l.innerHTML = W.files.map((g, e)=>{
            const v = [
                "file-item",
                e === W.activeIndex ? "active" : "",
                g.processing ? "processing" : "",
                g.error ? "error" : ""
            ].filter(Boolean).join(" ");
            let f = "";
            if (g.processing) f = '<div class="spinner"></div>';
            else if (g.error) f = '<span class="file-saved negative">err</span>';
            else if (g.outputSize != null) {
                const i = Math.round((1 - g.outputSize / g.inputSize) * 100);
                f = `<span class="file-saved ${i > 0 ? "positive" : i < 0 ? "negative" : ""}">${i > 0 ? "-" : i < 0 ? "+" : ""}${Math.abs(i)}%</span>`;
            }
            return `<div class="${v}" onclick="selectFile(${e})"><img class="file-thumb" src="${g.thumbUrl}"><div class="file-info"><div class="file-name">${g.name}</div><div class="file-meta">${qt(g.inputSize)}${g.outputSize != null ? " → " + qt(g.outputSize) : ""}</div></div>${f}<button class="file-remove" onclick="removeFile(${e},event)" title="Remove">×</button></div>`;
        }).join(""), ct("#download-wrap").style.display = W.files.some((g)=>g.resultUrl) ? "" : "none", ct("#clear-all-btn").style.display = W.files.length ? "" : "none", ai();
    }
    function ai() {
        const l = ct("#summary-bar"), g = W.files.filter((s)=>s.outputSize != null);
        if (g.length < 1) {
            l.style.display = "none";
            return;
        }
        const e = g.reduce((s, n)=>s + n.inputSize, 0), v = g.reduce((s, n)=>s + n.outputSize, 0), f = e > 0 ? Math.round((1 - v / e) * 100) : 0, i = W.files.some((s)=>s.processing);
        l.style.display = "", l.innerHTML = `
    <div class="summary-label">Total${i ? " (processing…)" : ""}</div>
    <div class="summary-total">${f > 0 ? "-" : ""}${Math.abs(f)}% saved</div>
    <div class="summary-detail">${qt(e)} → ${qt(v)}${e > v ? " · " + qt(e - v) + " freed" : ""}</div>
    <div class="summary-detail">${g.length}/${W.files.length} file${W.files.length !== 1 ? "s" : ""} optimized</div>
  `;
    }
    function me() {
        const l = ct("#main-area");
        if (!W.files.length) {
            l.innerHTML = '<div class="drop-zone" id="drop-zone"><p>Drop images here or click to browse</p><p>PNG, JPG, WebP, BMP, GIF</p></div>', tr();
            return;
        }
        const g = W.files[W.activeIndex];
        g && (l.innerHTML = `<div class="preview-area checker-bg" id="preview-area"><div class="preview-toolbar"><button onclick="toggleCompare()" id="compare-btn" title="Before / after" class="${W.showCompare ? "active" : ""}">&#9674;</button><div class="sep"></div><button onclick="zoomIn()" title="Zoom in">+</button><button onclick="zoomOut()" title="Zoom out">&minus;</button><button onclick="resetView()" title="Fit">&#8689;</button></div><div class="zoom-info" id="zoom-info">${Math.round(W.zoom * 100)}%</div><div class="canvas-wrap" id="canvas-wrap"></div></div><div class="stats-bar" id="stats-bar"></div>`, si(g), li(), ze());
    }
    function si(l, g) {
        const e = new Image;
        e.onload = ()=>{
            W.imgW = e.naturalWidth, W.imgH = e.naturalHeight, Ie(l), resetView();
        }, e.src = l.resultUrl || l.thumbUrl;
    }
    function oi(l) {
        const g = ct("#img-after"), e = !W.showCompare && ct("#canvas-wrap > img");
        g && l.resultUrl ? g.src = l.resultUrl : e && l.resultUrl ? e.src = l.resultUrl : Ie(l);
    }
    function Ie(l) {
        const g = ct("#canvas-wrap");
        if (!g || (l || (l = W.files[W.activeIndex]), !l)) return;
        const e = W.imgW, v = W.imgH;
        if (W.showCompare && l.resultUrl) {
            const f = Math.round(W.compareX * e);
            g.innerHTML = `<div class="compare-container" style="width:${e}px;height:${v}px;"><img src="${l.thumbUrl}" draggable="false" style="width:${e}px;height:${v}px;clip-path:inset(0 ${e - f}px 0 0);" id="img-before"><img src="${l.resultUrl}" draggable="false" style="width:${e}px;height:${v}px;clip-path:inset(0 0 0 ${f}px);" id="img-after"><div class="slider-divider" id="compare-slider" style="left:${f}px;"></div></div>`, Ye(), ui();
        } else g.innerHTML = `<img src="${l.resultUrl || l.thumbUrl}" draggable="false" style="width:${e}px;height:${v}px;">`;
        Kt();
    }
    function Kt() {
        const l = ct("#canvas-wrap");
        if (!l) return;
        l.style.transform = `translate(${W.panX}px,${W.panY}px) scale(${W.zoom})`;
        const g = ct("#zoom-info");
        g && (g.textContent = Math.round(W.zoom * 100) + "%"), Ye();
    }
    function Ye() {
        const l = ct("#preview-area");
        if (!l) return;
        let g = ct("#compare-labels");
        if (!W.showCompare || !W.files[W.activeIndex]?.resultUrl) {
            g && g.remove();
            return;
        }
        g || (g = document.createElement("div"), g.id = "compare-labels", g.style.cssText = "position:absolute;top:12px;left:12px;right:12px;z-index:6;display:flex;justify-content:space-between;pointer-events:none;", g.innerHTML = '<span class="compare-label">before</span><span class="compare-label">after</span>', l.appendChild(g));
    }
    window.resetView = function() {
        const l = ct("#preview-area");
        if (!l || !W.imgW) return;
        const g = l.clientWidth, e = l.clientHeight, v = Math.min(g / W.imgW, e / W.imgH, 1) * .9;
        W.zoom = v, W.panX = (g - W.imgW * v) / 2, W.panY = (e - W.imgH * v) / 2, Kt();
    };
    window.zoomIn = ()=>{
        W.zoom = Math.min(W.zoom * 1.3, 32), Kt();
    };
    window.zoomOut = ()=>{
        W.zoom = Math.max(W.zoom / 1.3, .05), Kt();
    };
    window.toggleCompare = ()=>{
        W.showCompare = !W.showCompare, W.compareX = .5;
        const l = ct("#compare-labels");
        l && l.remove(), Ie();
        const g = ct("#compare-btn");
        g && (g.className = W.showCompare ? "active" : "");
    };
    function li() {
        const l = ct("#preview-area");
        l && (l.addEventListener("wheel", (g)=>{
            g.preventDefault();
            const e = l.getBoundingClientRect(), v = g.clientX - e.left, f = g.clientY - e.top, i = W.zoom;
            W.zoom = Math.min(Math.max(W.zoom * (g.deltaY < 0 ? 1.15 : 1 / 1.15), .05), 32), W.panX = v - (v - W.panX) * (W.zoom / i), W.panY = f - (f - W.panY) * (W.zoom / i), Kt();
        }, {
            passive: !1
        }), l.addEventListener("mousedown", (g)=>{
            g.target.id === "compare-slider" || g.target.closest("#compare-slider") || (W.isPanning = !0, W.panStart = {
                x: g.clientX - W.panX,
                y: g.clientY - W.panY
            }, l.style.cursor = "grabbing");
        }));
    }
    window.addEventListener("mousemove", (l)=>{
        W.isPanning && (W.panX = l.clientX - W.panStart.x, W.panY = l.clientY - W.panStart.y, Kt());
    });
    window.addEventListener("mouseup", ()=>{
        if (W.isPanning) {
            W.isPanning = !1;
            const l = ct("#preview-area");
            l && (l.style.cursor = "");
        }
    });
    function ui() {
        const l = ct("#compare-slider");
        if (!l) return;
        let g = !1;
        l.addEventListener("mousedown", (v)=>{
            g = !0, v.preventDefault(), v.stopPropagation();
        });
        const e = (v)=>{
            if (!g) return;
            const f = document.querySelector("#canvas-wrap .compare-container");
            if (!f) return;
            const i = f.getBoundingClientRect(), s = Math.max(.01, Math.min(.99, (v.clientX - i.left) / i.width));
            W.compareX = s;
            const n = Math.round(s * W.imgW), d = ct("#img-before"), w = ct("#img-after");
            d && (d.style.clipPath = `inset(0 ${W.imgW - n}px 0 0)`), w && (w.style.clipPath = `inset(0 0 0 ${n}px)`), l.style.left = n + "px";
        };
        window.addEventListener("mousemove", e), window.addEventListener("mouseup", ()=>{
            g = !1;
        });
    }
    function ze() {
        const l = ct("#stats-bar"), g = W.files[W.activeIndex];
        if (!l) return;
        if (!g) {
            l.innerHTML = "";
            return;
        }
        let e = `<span><strong>${g.name}</strong></span><span>${(g.file.type.split("/")[1] || "").toUpperCase()}</span><span>In: ${qt(g.inputSize)}</span>`;
        if (g.outputSize != null) {
            e += `<span>Out: ${qt(g.outputSize)}</span>`;
            const v = Math.round((1 - g.outputSize / g.inputSize) * 100);
            v > 0 && (e += `<span style="color:var(--success);font-weight:600">-${v}%</span>`);
        }
        g.processing && (e += '<span style="color:var(--accent)">processing…</span>'), g.error && (e += `<span style="color:var(--danger)">${g.error}</span>`), g.resultUrl && (e += `<button class="btn btn-sm" style="margin-left:auto" onclick="downloadOne(${W.activeIndex})">Download</button>`), l.innerHTML = e;
    }
    async function ci(l) {
        const g = W.files[l];
        if (!g || g.processing) return;
        g.processing = !0, g.error = null, g.ver++;
        const e = g.ver;
        Yt(), l === W.activeIndex && ze();
        try {
            g.resultUrl && (URL.revokeObjectURL(g.resultUrl), g.resultUrl = null);
            const v = await ti(g.file, ii());
            if (g.ver !== e) return;
            g.resultUrl = v.url, g.outputSize = v.outputSize, g.processing = !1;
        } catch (v) {
            if (g.ver !== e) return;
            g.processing = !1, g.error = v.message, console.error("Process error:", v);
        }
        Yt(), l === W.activeIndex && (oi(g), ze());
    }
    function Ke() {
        W.files.forEach((l, g)=>ci(g));
    }
    function ee() {
        clearTimeout(W.debounce), W.debounce = setTimeout(()=>{
            W.files.forEach((l)=>{
                l.resultUrl && URL.revokeObjectURL(l.resultUrl), l.resultUrl = null, l.outputSize = null;
            }), Ke();
        }, 400);
    }
    window.downloadOne = function(l) {
        const g = W.files[l];
        if (!g || !g.resultUrl) return;
        const e = {
            png: "png",
            jpeg: "jpg",
            webp: "webp"
        }[W.format] || "png", v = document.createElement("a");
        v.href = g.resultUrl, v.download = g.name.replace(/\.[^.]+$/, "") + "." + e, v.click();
    };
    function Je(l) {
        const g = {
            png: "png",
            jpeg: "jpg",
            webp: "webp"
        }[W.format] || "png";
        return l.name.replace(/\.[^.]+$/, "") + "." + g;
    }
    async function Qe(l) {
        return (await fetch(l)).blob();
    }
    const fi = typeof window.showDirectoryPicker == "function";
    window.downloadAllZip = async function() {
        const l = ct("#download-all-btn"), g = l.textContent;
        l.textContent = "Packing ZIP…", l.disabled = !0;
        try {
            const e = new ni, v = W.files.filter((s)=>s.resultUrl);
            for (const s of v){
                const n = await Qe(s.resultUrl);
                e.file(Je(s), n);
            }
            const f = await e.generateAsync({
                type: "blob"
            }), i = document.createElement("a");
            i.href = URL.createObjectURL(f), i.download = "images-optimized.zip", i.click(), setTimeout(()=>URL.revokeObjectURL(i.href), 5e3);
        } catch (e) {
            console.error("ZIP error:", e);
        } finally{
            l.textContent = g, l.disabled = !1;
        }
    };
    window.downloadAllToFolder = async function() {
        try {
            const l = await window.showDirectoryPicker({
                mode: "readwrite"
            }), g = W.files.filter((v)=>v.resultUrl);
            let e = 0;
            for (const v of g){
                const f = await Qe(v.resultUrl), i = Je(v), n = await (await l.getFileHandle(i, {
                    create: !0
                })).createWritable();
                await n.write(f), await n.close(), e++;
            }
            alert(`Saved ${e} file(s) to folder.`);
        } catch (l) {
            l.name !== "AbortError" && console.error("Folder save error:", l);
        }
    };
    window.showDownloadMenu = function() {
        let l = ct("#download-menu");
        if (l) {
            l.remove();
            return;
        }
        l = document.createElement("div"), l.id = "download-menu", l.style.cssText = "position:absolute;top:100%;right:0;margin-top:4px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-sm);box-shadow:0 4px 12px rgba(0,0,0,.12);z-index:100;min-width:180px;overflow:hidden;";
        const g = [
            {
                label: "Download as ZIP",
                action: "downloadAllZip()"
            }
        ];
        fi && g.push({
            label: "Save to folder…",
            action: "downloadAllToFolder()"
        }), l.innerHTML = g.map((f)=>`<div style="padding:8px 14px;font-size:12px;cursor:pointer;transition:background .1s;" onmouseenter="this.style.background='var(--surface2)'" onmouseleave="this.style.background=''" onclick="this.parentElement.remove();${f.action}">${f.label}</div>`).join("");
        const e = ct("#download-wrap");
        e.appendChild(l);
        const v = (f)=>{
            e.contains(f.target) || (l.remove(), document.removeEventListener("click", v));
        };
        setTimeout(()=>document.addEventListener("click", v), 0);
    };
    function di() {
        const l = W.format;
        Xe("#format-btns button").forEach((g)=>g.classList.toggle("active", g.dataset.fmt === l)), ct("#png-settings").style.display = l === "png" ? "" : "none", ct("#jpeg-settings").style.display = l === "jpeg" ? "" : "none", ct("#webp-settings").style.display = l === "webp" ? "" : "none";
    }
    function tr() {
        const l = ct("#drop-zone");
        l && (l.addEventListener("click", window.addFiles), l.addEventListener("dragover", (g)=>{
            g.preventDefault(), l.classList.add("over");
        }), l.addEventListener("dragleave", ()=>l.classList.remove("over")), l.addEventListener("drop", (g)=>{
            g.preventDefault(), l.classList.remove("over"), window.loadFiles(g.dataTransfer.files);
        }));
    }
    document.addEventListener("DOMContentLoaded", ()=>{
        tr(), document.addEventListener("dragover", (l)=>l.preventDefault()), document.addEventListener("drop", (l)=>{
            l.preventDefault(), l.dataTransfer.files.length && window.loadFiles(l.dataTransfer.files);
        }), ct("#file-input").addEventListener("change", (l)=>{
            window.loadFiles(l.target.files), l.target.value = "";
        }), Xe("#format-btns button").forEach((l)=>{
            l.addEventListener("click", ()=>{
                W.format = l.dataset.fmt, di(), ee();
            });
        }), ct("#remove-black").addEventListener("change", ()=>{
            ct("#black-settings").style.display = ct("#remove-black").checked ? "" : "none", ee();
        }), [
            "threshold",
            "feather",
            "png-colors",
            "jpeg-quality",
            "webp-quality"
        ].forEach((l)=>{
            const g = ct(`#${l}`), e = {
                threshold: "thresh-val",
                feather: "feather-val",
                "png-colors": "colors-val",
                "jpeg-quality": "jpeg-q-val",
                "webp-quality": "webp-q-val"
            }[l];
            g.addEventListener("input", ()=>{
                ct(`#${e}`).textContent = g.value, ee();
            });
        }), [
            "png-dither",
            "jpeg-mozjpeg"
        ].forEach((l)=>{
            ct(`#${l}`).addEventListener("change", ee);
        }), ct("#webp-lossless").addEventListener("change", ()=>{
            ct("#webp-q-row").style.display = ct("#webp-lossless").checked ? "none" : "", ee();
        });
    });
})();
