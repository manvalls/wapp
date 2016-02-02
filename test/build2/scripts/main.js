(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.wapp_script_main=f()}})(function(){var define,module,exports;return(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(global){
var __cov_hpLHnNdaY9MrqQH5THFqow=(Function('return this'))();
if(!__cov_hpLHnNdaY9MrqQH5THFqow.__coverage__){__cov_hpLHnNdaY9MrqQH5THFqow.__coverage__={};}
__cov_hpLHnNdaY9MrqQH5THFqow=__cov_hpLHnNdaY9MrqQH5THFqow.__coverage__;
if(!(__cov_hpLHnNdaY9MrqQH5THFqow['/home/manolo/Node Packages/wapp/client.js'])){
__cov_hpLHnNdaY9MrqQH5THFqow['/home/manolo/Node Packages/wapp/client.js']={"path":"/home/manolo/Node Packages/wapp/client.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":1,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"93":0,"94":1,"95":0,"96":0,"97":0,"98":0,"99":1,"100":0,"101":0,"102":0,"103":0,"104":0,"105":0,"106":0,"107":1,"108":0,"109":0,"110":1,"111":0,"112":1,"113":0,"114":0,"115":0,"116":0,"117":0,"118":0,"119":0,"120":0,"121":0,"122":0,"123":0,"124":0,"125":0,"126":0,"127":0,"128":0,"129":0,"130":1,"131":0,"132":1,"133":0,"134":0,"135":0,"136":0,"137":0,"138":0,"139":0,"140":0,"141":0,"142":0,"143":0,"144":0,"145":0,"146":0,"147":0,"148":0,"149":0,"150":0,"151":0,"152":0,"153":0,"154":0,"155":0,"156":0,"157":0,"158":0,"159":1,"160":0,"161":0,"162":0,"163":0,"164":0,"165":0,"166":0,"167":0,"168":0,"169":0,"170":0,"171":0,"172":0,"173":0,"174":0,"175":0,"176":0,"177":0,"178":0,"179":0,"180":0,"181":1,"182":0,"183":0,"184":0,"185":0,"186":0,"187":0,"188":0,"189":0,"190":0,"191":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0],"23":[0,0],"24":[0,0],"25":[0,0],"26":[0,0],"27":[0,0],"28":[0,0],"29":[0,0],"30":[0,0],"31":[0,0],"32":[0,0],"33":[0,0],"34":[0,0,0],"35":[0,0],"36":[0,0],"37":[0,0,0],"38":[0,0],"39":[0,0],"40":[0,0],"41":[0,0],"42":[0,0],"43":[0,0],"44":[0,0],"45":[0,0],"46":[0,0],"47":[0,0],"48":[0,0],"49":[0,0],"50":[0,0],"51":[0,0],"52":[0,0],"53":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0},"fnMap":{"1":{"name":"(anonymous_1)","line":43,"loc":{"start":{"line":43,"column":8},"end":{"line":43,"column":36}}},"2":{"name":"(anonymous_2)","line":53,"loc":{"start":{"line":53,"column":11},"end":{"line":53,"column":21}}},"3":{"name":"(anonymous_3)","line":58,"loc":{"start":{"line":58,"column":8},"end":{"line":58,"column":24}}},"4":{"name":"(anonymous_4)","line":80,"loc":{"start":{"line":80,"column":9},"end":{"line":80,"column":22}}},"5":{"name":"Event","line":90,"loc":{"start":{"line":90,"column":0},"end":{"line":90,"column":23}}},"6":{"name":"(anonymous_6)","line":111,"loc":{"start":{"line":111,"column":10},"end":{"line":111,"column":12}}},"7":{"name":"(anonymous_7)","line":113,"loc":{"start":{"line":113,"column":14},"end":{"line":113,"column":16}}},"8":{"name":"(anonymous_8)","line":114,"loc":{"start":{"line":114,"column":14},"end":{"line":114,"column":16}}},"9":{"name":"(anonymous_9)","line":115,"loc":{"start":{"line":115,"column":11},"end":{"line":115,"column":13}}},"10":{"name":"(anonymous_10)","line":116,"loc":{"start":{"line":116,"column":10},"end":{"line":116,"column":12}}},"11":{"name":"(anonymous_11)","line":117,"loc":{"start":{"line":117,"column":9},"end":{"line":117,"column":11}}},"12":{"name":"(anonymous_12)","line":129,"loc":{"start":{"line":129,"column":12},"end":{"line":129,"column":14}}},"13":{"name":"(anonymous_13)","line":130,"loc":{"start":{"line":130,"column":13},"end":{"line":130,"column":15}}},"14":{"name":"(anonymous_14)","line":132,"loc":{"start":{"line":132,"column":13},"end":{"line":132,"column":32}}},"15":{"name":"(anonymous_15)","line":155,"loc":{"start":{"line":155,"column":12},"end":{"line":155,"column":26}}},"16":{"name":"(anonymous_16)","line":171,"loc":{"start":{"line":171,"column":12},"end":{"line":171,"column":40}}},"17":{"name":"filter","line":179,"loc":{"start":{"line":179,"column":0},"end":{"line":179,"column":20}}},"18":{"name":"getYielded","line":184,"loc":{"start":{"line":184,"column":0},"end":{"line":184,"column":29}}},"19":{"name":"onScriptLoad","line":196,"loc":{"start":{"line":196,"column":0},"end":{"line":196,"column":23}}},"20":{"name":"onScriptError","line":203,"loc":{"start":{"line":203,"column":0},"end":{"line":203,"column":25}}},"21":{"name":"onPopState","line":207,"loc":{"start":{"line":207,"column":0},"end":{"line":207,"column":22}}},"22":{"name":"replaceDots","line":238,"loc":{"start":{"line":238,"column":0},"end":{"line":238,"column":23}}},"23":{"name":"handle","line":242,"loc":{"start":{"line":242,"column":0},"end":{"line":242,"column":43}}},"24":{"name":"listener","line":276,"loc":{"start":{"line":276,"column":0},"end":{"line":276,"column":19}}},"25":{"name":"getPathname","line":308,"loc":{"start":{"line":308,"column":0},"end":{"line":308,"column":23}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":29,"column":23}},"2":{"start":{"line":33,"column":0},"end":{"line":33,"column":31}},"3":{"start":{"line":34,"column":0},"end":{"line":34,"column":26}},"4":{"start":{"line":35,"column":0},"end":{"line":35,"column":23}},"5":{"start":{"line":37,"column":0},"end":{"line":37,"column":31}},"6":{"start":{"line":39,"column":0},"end":{"line":86,"column":3}},"7":{"start":{"line":45,"column":4},"end":{"line":48,"column":5}},"8":{"start":{"line":46,"column":6},"end":{"line":46,"column":23}},"9":{"start":{"line":47,"column":6},"end":{"line":47,"column":19}},"10":{"start":{"line":50,"column":4},"end":{"line":50,"column":31}},"11":{"start":{"line":54,"column":4},"end":{"line":55,"column":36}},"12":{"start":{"line":54,"column":23},"end":{"line":54,"column":43}},"13":{"start":{"line":55,"column":9},"end":{"line":55,"column":36}},"14":{"start":{"line":59,"column":4},"end":{"line":59,"column":19}},"15":{"start":{"line":61,"column":4},"end":{"line":61,"column":60}},"16":{"start":{"line":62,"column":4},"end":{"line":62,"column":34}},"17":{"start":{"line":64,"column":4},"end":{"line":64,"column":71}},"18":{"start":{"line":64,"column":35},"end":{"line":64,"column":71}},"19":{"start":{"line":65,"column":4},"end":{"line":65,"column":73}},"20":{"start":{"line":65,"column":43},"end":{"line":65,"column":73}},"21":{"start":{"line":67,"column":4},"end":{"line":67,"column":43}},"22":{"start":{"line":68,"column":4},"end":{"line":68,"column":20}},"23":{"start":{"line":69,"column":4},"end":{"line":69,"column":32}},"24":{"start":{"line":71,"column":4},"end":{"line":71,"column":34}},"25":{"start":{"line":72,"column":4},"end":{"line":72,"column":81}},"26":{"start":{"line":74,"column":4},"end":{"line":75,"column":87}},"27":{"start":{"line":74,"column":34},"end":{"line":74,"column":116}},"28":{"start":{"line":75,"column":9},"end":{"line":75,"column":87}},"29":{"start":{"line":77,"column":4},"end":{"line":77,"column":14}},"30":{"start":{"line":81,"column":4},"end":{"line":81,"column":93}},"31":{"start":{"line":81,"column":29},"end":{"line":81,"column":93}},"32":{"start":{"line":82,"column":4},"end":{"line":82,"column":26}},"33":{"start":{"line":83,"column":4},"end":{"line":83,"column":66}},"34":{"start":{"line":90,"column":0},"end":{"line":105,"column":1}},"35":{"start":{"line":91,"column":2},"end":{"line":91,"column":14}},"36":{"start":{"line":93,"column":2},"end":{"line":93,"column":69}},"37":{"start":{"line":94,"column":2},"end":{"line":94,"column":53}},"38":{"start":{"line":95,"column":2},"end":{"line":95,"column":32}},"39":{"start":{"line":97,"column":2},"end":{"line":97,"column":46}},"40":{"start":{"line":98,"column":2},"end":{"line":98,"column":46}},"41":{"start":{"line":99,"column":2},"end":{"line":99,"column":20}},"42":{"start":{"line":100,"column":2},"end":{"line":100,"column":45}},"43":{"start":{"line":101,"column":2},"end":{"line":101,"column":36}},"44":{"start":{"line":103,"column":2},"end":{"line":103,"column":48}},"45":{"start":{"line":107,"column":0},"end":{"line":107,"column":53}},"46":{"start":{"line":108,"column":0},"end":{"line":175,"column":3}},"47":{"start":{"line":111,"column":14},"end":{"line":111,"column":32}},"48":{"start":{"line":113,"column":18},"end":{"line":113,"column":40}},"49":{"start":{"line":114,"column":18},"end":{"line":114,"column":40}},"50":{"start":{"line":115,"column":15},"end":{"line":115,"column":34}},"51":{"start":{"line":116,"column":14},"end":{"line":116,"column":32}},"52":{"start":{"line":118,"column":4},"end":{"line":118,"column":17}},"53":{"start":{"line":120,"column":4},"end":{"line":120,"column":35}},"54":{"start":{"line":120,"column":18},"end":{"line":120,"column":35}},"55":{"start":{"line":122,"column":4},"end":{"line":122,"column":19}},"56":{"start":{"line":123,"column":4},"end":{"line":123,"column":59}},"57":{"start":{"line":124,"column":4},"end":{"line":124,"column":59}},"58":{"start":{"line":126,"column":4},"end":{"line":126,"column":33}},"59":{"start":{"line":129,"column":16},"end":{"line":129,"column":36}},"60":{"start":{"line":130,"column":17},"end":{"line":130,"column":54}},"61":{"start":{"line":133,"column":4},"end":{"line":134,"column":17}},"62":{"start":{"line":136,"column":4},"end":{"line":136,"column":24}},"63":{"start":{"line":138,"column":4},"end":{"line":138,"column":73}},"64":{"start":{"line":138,"column":22},"end":{"line":138,"column":73}},"65":{"start":{"line":139,"column":4},"end":{"line":139,"column":57}},"66":{"start":{"line":139,"column":21},"end":{"line":139,"column":57}},"67":{"start":{"line":140,"column":4},"end":{"line":140,"column":56}},"68":{"start":{"line":140,"column":21},"end":{"line":140,"column":56}},"69":{"start":{"line":141,"column":4},"end":{"line":141,"column":50}},"70":{"start":{"line":141,"column":19},"end":{"line":141,"column":50}},"71":{"start":{"line":142,"column":4},"end":{"line":142,"column":40}},"72":{"start":{"line":142,"column":21},"end":{"line":142,"column":40}},"73":{"start":{"line":143,"column":4},"end":{"line":143,"column":44}},"74":{"start":{"line":143,"column":23},"end":{"line":143,"column":44}},"75":{"start":{"line":145,"column":4},"end":{"line":145,"column":20}},"76":{"start":{"line":146,"column":4},"end":{"line":146,"column":28}},"77":{"start":{"line":148,"column":4},"end":{"line":151,"column":5}},"78":{"start":{"line":149,"column":6},"end":{"line":149,"column":18}},"79":{"start":{"line":150,"column":6},"end":{"line":150,"column":91}},"80":{"start":{"line":156,"column":4},"end":{"line":156,"column":14}},"81":{"start":{"line":158,"column":4},"end":{"line":164,"column":5}},"82":{"start":{"line":159,"column":6},"end":{"line":159,"column":84}},"83":{"start":{"line":160,"column":6},"end":{"line":160,"column":32}},"84":{"start":{"line":162,"column":6},"end":{"line":162,"column":68}},"85":{"start":{"line":162,"column":38},"end":{"line":162,"column":68}},"86":{"start":{"line":163,"column":6},"end":{"line":163,"column":59}},"87":{"start":{"line":163,"column":34},"end":{"line":163,"column":59}},"88":{"start":{"line":166,"column":4},"end":{"line":166,"column":53}},"89":{"start":{"line":166,"column":14},"end":{"line":166,"column":53}},"90":{"start":{"line":167,"column":4},"end":{"line":167,"column":63}},"91":{"start":{"line":167,"column":32},"end":{"line":167,"column":63}},"92":{"start":{"line":168,"column":4},"end":{"line":168,"column":34}},"93":{"start":{"line":172,"column":4},"end":{"line":172,"column":36}},"94":{"start":{"line":179,"column":0},"end":{"line":182,"column":1}},"95":{"start":{"line":180,"column":2},"end":{"line":180,"column":12}},"96":{"start":{"line":181,"column":2},"end":{"line":181,"column":48}},"97":{"start":{"line":181,"column":19},"end":{"line":181,"column":48}},"98":{"start":{"line":181,"column":36},"end":{"line":181,"column":48}},"99":{"start":{"line":184,"column":0},"end":{"line":194,"column":1}},"100":{"start":{"line":185,"column":2},"end":{"line":185,"column":55}},"101":{"start":{"line":185,"column":23},"end":{"line":185,"column":55}},"102":{"start":{"line":187,"column":2},"end":{"line":187,"column":19}},"103":{"start":{"line":188,"column":2},"end":{"line":188,"column":36}},"104":{"start":{"line":190,"column":2},"end":{"line":190,"column":31}},"105":{"start":{"line":191,"column":2},"end":{"line":191,"column":33}},"106":{"start":{"line":193,"column":2},"end":{"line":193,"column":34}},"107":{"start":{"line":196,"column":0},"end":{"line":201,"column":1}},"108":{"start":{"line":197,"column":2},"end":{"line":198,"column":36}},"109":{"start":{"line":200,"column":2},"end":{"line":200,"column":37}},"110":{"start":{"line":203,"column":0},"end":{"line":205,"column":1}},"111":{"start":{"line":204,"column":2},"end":{"line":204,"column":67}},"112":{"start":{"line":207,"column":0},"end":{"line":236,"column":1}},"113":{"start":{"line":208,"column":2},"end":{"line":208,"column":25}},"114":{"start":{"line":210,"column":2},"end":{"line":213,"column":3}},"115":{"start":{"line":211,"column":4},"end":{"line":211,"column":16}},"116":{"start":{"line":212,"column":4},"end":{"line":212,"column":15}},"117":{"start":{"line":215,"column":2},"end":{"line":215,"column":33}},"118":{"start":{"line":217,"column":2},"end":{"line":221,"column":82}},"119":{"start":{"line":221,"column":4},"end":{"line":221,"column":82}},"120":{"start":{"line":223,"column":2},"end":{"line":223,"column":44}},"121":{"start":{"line":225,"column":2},"end":{"line":229,"column":3}},"122":{"start":{"line":226,"column":4},"end":{"line":226,"column":49}},"123":{"start":{"line":227,"column":4},"end":{"line":227,"column":14}},"124":{"start":{"line":228,"column":4},"end":{"line":228,"column":11}},"125":{"start":{"line":231,"column":2},"end":{"line":232,"column":25}},"126":{"start":{"line":231,"column":60},"end":{"line":231,"column":71}},"127":{"start":{"line":232,"column":7},"end":{"line":232,"column":25}},"128":{"start":{"line":234,"column":2},"end":{"line":234,"column":54}},"129":{"start":{"line":235,"column":2},"end":{"line":235,"column":12}},"130":{"start":{"line":238,"column":0},"end":{"line":240,"column":1}},"131":{"start":{"line":239,"column":2},"end":{"line":239,"column":32}},"132":{"start":{"line":242,"column":0},"end":{"line":274,"column":1}},"133":{"start":{"line":243,"column":2},"end":{"line":243,"column":15}},"134":{"start":{"line":245,"column":2},"end":{"line":245,"column":91}},"135":{"start":{"line":245,"column":27},"end":{"line":245,"column":91}},"136":{"start":{"line":246,"column":2},"end":{"line":246,"column":39}},"137":{"start":{"line":248,"column":2},"end":{"line":248,"column":44}},"138":{"start":{"line":249,"column":2},"end":{"line":249,"column":50}},"139":{"start":{"line":251,"column":2},"end":{"line":251,"column":33}},"140":{"start":{"line":252,"column":2},"end":{"line":252,"column":12}},"141":{"start":{"line":253,"column":2},"end":{"line":253,"column":29}},"142":{"start":{"line":254,"column":2},"end":{"line":254,"column":22}},"143":{"start":{"line":254,"column":10},"end":{"line":254,"column":22}},"144":{"start":{"line":256,"column":2},"end":{"line":264,"column":3}},"145":{"start":{"line":257,"column":4},"end":{"line":257,"column":12}},"146":{"start":{"line":259,"column":4},"end":{"line":262,"column":5}},"147":{"start":{"line":259,"column":20},"end":{"line":262,"column":5}},"148":{"start":{"line":260,"column":6},"end":{"line":260,"column":38}},"149":{"start":{"line":260,"column":29},"end":{"line":260,"column":38}},"150":{"start":{"line":261,"column":6},"end":{"line":261,"column":91}},"151":{"start":{"line":266,"column":2},"end":{"line":266,"column":25}},"152":{"start":{"line":267,"column":2},"end":{"line":267,"column":34}},"153":{"start":{"line":269,"column":2},"end":{"line":269,"column":36}},"154":{"start":{"line":270,"column":2},"end":{"line":270,"column":27}},"155":{"start":{"line":271,"column":2},"end":{"line":271,"column":52}},"156":{"start":{"line":272,"column":2},"end":{"line":272,"column":42}},"157":{"start":{"line":272,"column":9},"end":{"line":272,"column":42}},"158":{"start":{"line":273,"column":2},"end":{"line":273,"column":13}},"159":{"start":{"line":276,"column":0},"end":{"line":306,"column":1}},"160":{"start":{"line":277,"column":2},"end":{"line":277,"column":30}},"161":{"start":{"line":279,"column":2},"end":{"line":304,"column":3}},"162":{"start":{"line":280,"column":4},"end":{"line":280,"column":27}},"163":{"start":{"line":280,"column":20},"end":{"line":280,"column":27}},"164":{"start":{"line":281,"column":4},"end":{"line":281,"column":15}},"165":{"start":{"line":283,"column":4},"end":{"line":284,"column":15}},"166":{"start":{"line":283,"column":9},"end":{"line":283,"column":46}},"167":{"start":{"line":286,"column":4},"end":{"line":286,"column":44}},"168":{"start":{"line":288,"column":4},"end":{"line":299,"column":34}},"169":{"start":{"line":289,"column":6},"end":{"line":289,"column":38}},"170":{"start":{"line":290,"column":6},"end":{"line":290,"column":41}},"171":{"start":{"line":292,"column":6},"end":{"line":295,"column":7}},"172":{"start":{"line":293,"column":8},"end":{"line":293,"column":41}},"173":{"start":{"line":294,"column":8},"end":{"line":294,"column":54}},"174":{"start":{"line":297,"column":6},"end":{"line":297,"column":42}},"175":{"start":{"line":298,"column":6},"end":{"line":298,"column":66}},"176":{"start":{"line":299,"column":10},"end":{"line":299,"column":34}},"177":{"start":{"line":301,"column":4},"end":{"line":302,"column":41}},"178":{"start":{"line":301,"column":31},"end":{"line":301,"column":66}},"179":{"start":{"line":302,"column":9},"end":{"line":302,"column":41}},"180":{"start":{"line":303,"column":4},"end":{"line":303,"column":31}},"181":{"start":{"line":308,"column":0},"end":{"line":320,"column":1}},"182":{"start":{"line":309,"column":2},"end":{"line":309,"column":8}},"183":{"start":{"line":311,"column":2},"end":{"line":311,"column":86}},"184":{"start":{"line":312,"column":2},"end":{"line":312,"column":24}},"185":{"start":{"line":314,"column":2},"end":{"line":317,"column":3}},"186":{"start":{"line":315,"column":4},"end":{"line":315,"column":26}},"187":{"start":{"line":316,"column":4},"end":{"line":316,"column":50}},"188":{"start":{"line":319,"column":2},"end":{"line":319,"column":32}},"189":{"start":{"line":322,"column":0},"end":{"line":322,"column":59}},"190":{"start":{"line":322,"column":19},"end":{"line":322,"column":59}},"191":{"start":{"line":326,"column":0},"end":{"line":326,"column":21}}},"branchMap":{"1":{"line":45,"type":"if","locations":[{"start":{"line":45,"column":4},"end":{"line":45,"column":4}},{"start":{"line":45,"column":4},"end":{"line":45,"column":4}}]},"2":{"line":54,"type":"if","locations":[{"start":{"line":54,"column":4},"end":{"line":54,"column":4}},{"start":{"line":54,"column":4},"end":{"line":54,"column":4}}]},"3":{"line":61,"type":"binary-expr","locations":[{"start":{"line":61,"column":14},"end":{"line":61,"column":20}},{"start":{"line":61,"column":24},"end":{"line":61,"column":26}}]},"4":{"line":64,"type":"if","locations":[{"start":{"line":64,"column":4},"end":{"line":64,"column":4}},{"start":{"line":64,"column":4},"end":{"line":64,"column":4}}]},"5":{"line":65,"type":"if","locations":[{"start":{"line":65,"column":4},"end":{"line":65,"column":4}},{"start":{"line":65,"column":4},"end":{"line":65,"column":4}}]},"6":{"line":72,"type":"binary-expr","locations":[{"start":{"line":72,"column":5},"end":{"line":72,"column":18}},{"start":{"line":72,"column":22},"end":{"line":72,"column":62}}]},"7":{"line":74,"type":"if","locations":[{"start":{"line":74,"column":4},"end":{"line":74,"column":4}},{"start":{"line":74,"column":4},"end":{"line":74,"column":4}}]},"8":{"line":81,"type":"if","locations":[{"start":{"line":81,"column":4},"end":{"line":81,"column":4}},{"start":{"line":81,"column":4},"end":{"line":81,"column":4}}]},"9":{"line":97,"type":"cond-expr","locations":[{"start":{"line":97,"column":34},"end":{"line":97,"column":38}},{"start":{"line":97,"column":41},"end":{"line":97,"column":45}}]},"10":{"line":98,"type":"cond-expr","locations":[{"start":{"line":98,"column":34},"end":{"line":98,"column":38}},{"start":{"line":98,"column":41},"end":{"line":98,"column":45}}]},"11":{"line":103,"type":"binary-expr","locations":[{"start":{"line":103,"column":22},"end":{"line":103,"column":23}},{"start":{"line":103,"column":27},"end":{"line":103,"column":31}}]},"12":{"line":120,"type":"if","locations":[{"start":{"line":120,"column":4},"end":{"line":120,"column":4}},{"start":{"line":120,"column":4},"end":{"line":120,"column":4}}]},"13":{"line":123,"type":"cond-expr","locations":[{"start":{"line":123,"column":33},"end":{"line":123,"column":53}},{"start":{"line":123,"column":56},"end":{"line":123,"column":58}}]},"14":{"line":124,"type":"cond-expr","locations":[{"start":{"line":124,"column":33},"end":{"line":124,"column":53}},{"start":{"line":124,"column":56},"end":{"line":124,"column":58}}]},"15":{"line":136,"type":"binary-expr","locations":[{"start":{"line":136,"column":12},"end":{"line":136,"column":17}},{"start":{"line":136,"column":21},"end":{"line":136,"column":23}}]},"16":{"line":138,"type":"if","locations":[{"start":{"line":138,"column":4},"end":{"line":138,"column":4}},{"start":{"line":138,"column":4},"end":{"line":138,"column":4}}]},"17":{"line":139,"type":"if","locations":[{"start":{"line":139,"column":4},"end":{"line":139,"column":4}},{"start":{"line":139,"column":4},"end":{"line":139,"column":4}}]},"18":{"line":140,"type":"if","locations":[{"start":{"line":140,"column":4},"end":{"line":140,"column":4}},{"start":{"line":140,"column":4},"end":{"line":140,"column":4}}]},"19":{"line":141,"type":"if","locations":[{"start":{"line":141,"column":4},"end":{"line":141,"column":4}},{"start":{"line":141,"column":4},"end":{"line":141,"column":4}}]},"20":{"line":142,"type":"if","locations":[{"start":{"line":142,"column":4},"end":{"line":142,"column":4}},{"start":{"line":142,"column":4},"end":{"line":142,"column":4}}]},"21":{"line":143,"type":"if","locations":[{"start":{"line":143,"column":4},"end":{"line":143,"column":4}},{"start":{"line":143,"column":4},"end":{"line":143,"column":4}}]},"22":{"line":145,"type":"binary-expr","locations":[{"start":{"line":145,"column":10},"end":{"line":145,"column":13}},{"start":{"line":145,"column":17},"end":{"line":145,"column":19}}]},"23":{"line":158,"type":"if","locations":[{"start":{"line":158,"column":4},"end":{"line":158,"column":4}},{"start":{"line":158,"column":4},"end":{"line":158,"column":4}}]},"24":{"line":159,"type":"binary-expr","locations":[{"start":{"line":159,"column":14},"end":{"line":159,"column":33}},{"start":{"line":159,"column":37},"end":{"line":159,"column":83}}]},"25":{"line":159,"type":"binary-expr","locations":[{"start":{"line":159,"column":38},"end":{"line":159,"column":56}},{"start":{"line":159,"column":60},"end":{"line":159,"column":82}}]},"26":{"line":163,"type":"if","locations":[{"start":{"line":163,"column":6},"end":{"line":163,"column":6}},{"start":{"line":163,"column":6},"end":{"line":163,"column":6}}]},"27":{"line":166,"type":"if","locations":[{"start":{"line":166,"column":4},"end":{"line":166,"column":4}},{"start":{"line":166,"column":4},"end":{"line":166,"column":4}}]},"28":{"line":167,"type":"if","locations":[{"start":{"line":167,"column":4},"end":{"line":167,"column":4}},{"start":{"line":167,"column":4},"end":{"line":167,"column":4}}]},"29":{"line":181,"type":"if","locations":[{"start":{"line":181,"column":19},"end":{"line":181,"column":19}},{"start":{"line":181,"column":19},"end":{"line":181,"column":19}}]},"30":{"line":185,"type":"if","locations":[{"start":{"line":185,"column":2},"end":{"line":185,"column":2}},{"start":{"line":185,"column":2},"end":{"line":185,"column":2}}]},"31":{"line":197,"type":"binary-expr","locations":[{"start":{"line":197,"column":16},"end":{"line":197,"column":26}},{"start":{"line":197,"column":30},"end":{"line":197,"column":32}}]},"32":{"line":210,"type":"if","locations":[{"start":{"line":210,"column":2},"end":{"line":210,"column":2}},{"start":{"line":210,"column":2},"end":{"line":210,"column":2}}]},"33":{"line":217,"type":"if","locations":[{"start":{"line":217,"column":2},"end":{"line":217,"column":2}},{"start":{"line":217,"column":2},"end":{"line":217,"column":2}}]},"34":{"line":218,"type":"binary-expr","locations":[{"start":{"line":218,"column":4},"end":{"line":218,"column":31}},{"start":{"line":219,"column":4},"end":{"line":219,"column":30}},{"start":{"line":220,"column":4},"end":{"line":220,"column":33}}]},"35":{"line":225,"type":"if","locations":[{"start":{"line":225,"column":2},"end":{"line":225,"column":2}},{"start":{"line":225,"column":2},"end":{"line":225,"column":2}}]},"36":{"line":231,"type":"if","locations":[{"start":{"line":231,"column":2},"end":{"line":231,"column":2}},{"start":{"line":231,"column":2},"end":{"line":231,"column":2}}]},"37":{"line":231,"type":"binary-expr","locations":[{"start":{"line":231,"column":5},"end":{"line":231,"column":20}},{"start":{"line":231,"column":24},"end":{"line":231,"column":39}},{"start":{"line":231,"column":43},"end":{"line":231,"column":58}}]},"38":{"line":245,"type":"if","locations":[{"start":{"line":245,"column":2},"end":{"line":245,"column":2}},{"start":{"line":245,"column":2},"end":{"line":245,"column":2}}]},"39":{"line":254,"type":"if","locations":[{"start":{"line":254,"column":2},"end":{"line":254,"column":2}},{"start":{"line":254,"column":2},"end":{"line":254,"column":2}}]},"40":{"line":256,"type":"if","locations":[{"start":{"line":256,"column":2},"end":{"line":256,"column":2}},{"start":{"line":256,"column":2},"end":{"line":256,"column":2}}]},"41":{"line":259,"type":"if","locations":[{"start":{"line":259,"column":20},"end":{"line":259,"column":20}},{"start":{"line":259,"column":20},"end":{"line":259,"column":20}}]},"42":{"line":260,"type":"if","locations":[{"start":{"line":260,"column":6},"end":{"line":260,"column":6}},{"start":{"line":260,"column":6},"end":{"line":260,"column":6}}]},"43":{"line":261,"type":"cond-expr","locations":[{"start":{"line":261,"column":18},"end":{"line":261,"column":21}},{"start":{"line":261,"column":24},"end":{"line":261,"column":26}}]},"44":{"line":272,"type":"if","locations":[{"start":{"line":272,"column":2},"end":{"line":272,"column":2}},{"start":{"line":272,"column":2},"end":{"line":272,"column":2}}]},"45":{"line":279,"type":"if","locations":[{"start":{"line":279,"column":2},"end":{"line":279,"column":2}},{"start":{"line":279,"column":2},"end":{"line":279,"column":2}}]},"46":{"line":280,"type":"if","locations":[{"start":{"line":280,"column":4},"end":{"line":280,"column":4}},{"start":{"line":280,"column":4},"end":{"line":280,"column":4}}]},"47":{"line":288,"type":"if","locations":[{"start":{"line":288,"column":4},"end":{"line":288,"column":4}},{"start":{"line":288,"column":4},"end":{"line":288,"column":4}}]},"48":{"line":292,"type":"if","locations":[{"start":{"line":292,"column":6},"end":{"line":292,"column":6}},{"start":{"line":292,"column":6},"end":{"line":292,"column":6}}]},"49":{"line":298,"type":"cond-expr","locations":[{"start":{"line":298,"column":55},"end":{"line":298,"column":59}},{"start":{"line":298,"column":62},"end":{"line":298,"column":64}}]},"50":{"line":301,"type":"if","locations":[{"start":{"line":301,"column":4},"end":{"line":301,"column":4}},{"start":{"line":301,"column":4},"end":{"line":301,"column":4}}]},"51":{"line":311,"type":"binary-expr","locations":[{"start":{"line":311,"column":18},"end":{"line":311,"column":19}},{"start":{"line":311,"column":23},"end":{"line":311,"column":40}}]},"52":{"line":314,"type":"if","locations":[{"start":{"line":314,"column":2},"end":{"line":314,"column":2}},{"start":{"line":314,"column":2},"end":{"line":314,"column":2}}]},"53":{"line":322,"type":"if","locations":[{"start":{"line":322,"column":0},"end":{"line":322,"column":0}},{"start":{"line":322,"column":0},"end":{"line":322,"column":0}}]}}};
}
__cov_hpLHnNdaY9MrqQH5THFqow=__cov_hpLHnNdaY9MrqQH5THFqow['/home/manolo/Node Packages/wapp/client.js'];
__cov_hpLHnNdaY9MrqQH5THFqow.s['1']++;var PathEvent=require('path-event'),updateMax=require('path-event/updateMax'),Target=require('y-emitter').Target,define=require('u-proto/define'),Resolver=require('y-resolver'),pct=require('pct'),UrlRewriter=require('url-rewriter'),query=require('hsm/Event/query'),cookies=require('hsm/Event/cookies'),fragment=Symbol(),rawQuery=Symbol(),path=Symbol(),url=Symbol(),origin=Symbol(),cookieStr=Symbol(),data=Symbol(),maximum=Symbol(),resolver=Symbol(),emitter=Symbol(),name=Symbol(),langMap=Symbol(),prefix=global.wapp_prefix,state=global.wapp_state,xhr,app,appEmitter;__cov_hpLHnNdaY9MrqQH5THFqow.s['2']++;app=new UrlRewriter(emitter);__cov_hpLHnNdaY9MrqQH5THFqow.s['3']++;appEmitter=app[emitter];__cov_hpLHnNdaY9MrqQH5THFqow.s['4']++;updateMax(app,maximum);__cov_hpLHnNdaY9MrqQH5THFqow.s['5']++;appEmitter.sun('ready','busy');__cov_hpLHnNdaY9MrqQH5THFqow.s['6']++;app[define]({prefix:prefix,goTo:function(loc,query,fragment){__cov_hpLHnNdaY9MrqQH5THFqow.f['1']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['7']++;if(typeof query!='object'){__cov_hpLHnNdaY9MrqQH5THFqow.b['1'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['8']++;fragment=query;__cov_hpLHnNdaY9MrqQH5THFqow.s['9']++;query=null;}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['1'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['10']++;handle(loc,query,fragment);},trigger:function(){__cov_hpLHnNdaY9MrqQH5THFqow.f['2']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['11']++;if(global.history){__cov_hpLHnNdaY9MrqQH5THFqow.b['2'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['12']++;onPopState(history);}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['2'][1]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['13']++;onPopState({state:state});}},load:function(script){__cov_hpLHnNdaY9MrqQH5THFqow.f['3']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['14']++;var tag,scr,yd;__cov_hpLHnNdaY9MrqQH5THFqow.s['15']++;script=((__cov_hpLHnNdaY9MrqQH5THFqow.b['3'][0]++,script)||(__cov_hpLHnNdaY9MrqQH5THFqow.b['3'][1]++,'')).toLowerCase().replace(/\W/g,'');__cov_hpLHnNdaY9MrqQH5THFqow.s['16']++;tag='wapp_script_'+script;__cov_hpLHnNdaY9MrqQH5THFqow.s['17']++;if(global.hasOwnProperty(tag)){__cov_hpLHnNdaY9MrqQH5THFqow.b['4'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['18']++;return Resolver.accept(global[tag]);}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['4'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['19']++;if(scr=document.getElementById(tag)){__cov_hpLHnNdaY9MrqQH5THFqow.b['5'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['20']++;return getYielded(scr,script);}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['5'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['21']++;scr=document.createElement('script');__cov_hpLHnNdaY9MrqQH5THFqow.s['22']++;scr.id=script;__cov_hpLHnNdaY9MrqQH5THFqow.s['23']++;yd=getYielded(scr,script);__cov_hpLHnNdaY9MrqQH5THFqow.s['24']++;scr.type='text/javascript';__cov_hpLHnNdaY9MrqQH5THFqow.s['25']++;((__cov_hpLHnNdaY9MrqQH5THFqow.b['6'][0]++,document.head)||(__cov_hpLHnNdaY9MrqQH5THFqow.b['6'][1]++,document.getElementsByTagName('head')[0])).appendChild(scr);__cov_hpLHnNdaY9MrqQH5THFqow.s['26']++;if(global.wapp_mode=='ES5'){__cov_hpLHnNdaY9MrqQH5THFqow.b['7'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['27']++;scr.src=encodeURI(location.origin+prefix+'/.scripts/'+script+'.es5.js');}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['7'][1]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['28']++;scr.src=encodeURI(location.origin+prefix+'/.scripts/'+script+'.js');}__cov_hpLHnNdaY9MrqQH5THFqow.s['29']++;return yd;},asset:function(url){__cov_hpLHnNdaY9MrqQH5THFqow.f['4']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['30']++;if(url.charAt(0)!='/'){__cov_hpLHnNdaY9MrqQH5THFqow.b['8'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['31']++;url=getPathname(document.baseURI).replace(/[^\/]*$/,'')+url;}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['8'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['32']++;url=app.format(url);__cov_hpLHnNdaY9MrqQH5THFqow.s['33']++;return encodeURI(location.origin+prefix+'/.assets'+url);}});function Event(max,p,d){__cov_hpLHnNdaY9MrqQH5THFqow.f['5']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['35']++;var i,url,m;__cov_hpLHnNdaY9MrqQH5THFqow.s['36']++;url=app.compute(getPathname()+location.search+location.hash);__cov_hpLHnNdaY9MrqQH5THFqow.s['37']++;m=url.match(/([^\?#]*)(?:\?([^#]*))?(?:#(.*))?/);__cov_hpLHnNdaY9MrqQH5THFqow.s['38']++;this[data]=Object.freeze(d);__cov_hpLHnNdaY9MrqQH5THFqow.s['39']++;this[fragment]=m[3]==null?(__cov_hpLHnNdaY9MrqQH5THFqow.b['9'][0]++,null):(__cov_hpLHnNdaY9MrqQH5THFqow.b['9'][1]++,m[3]);__cov_hpLHnNdaY9MrqQH5THFqow.s['40']++;this[rawQuery]=m[2]==null?(__cov_hpLHnNdaY9MrqQH5THFqow.b['10'][0]++,null):(__cov_hpLHnNdaY9MrqQH5THFqow.b['10'][1]++,m[2]);__cov_hpLHnNdaY9MrqQH5THFqow.s['41']++;this[path]=m[1];__cov_hpLHnNdaY9MrqQH5THFqow.s['42']++;this[origin]=pct.decode(location.origin);__cov_hpLHnNdaY9MrqQH5THFqow.s['43']++;this[cookieStr]=document.cookie;__cov_hpLHnNdaY9MrqQH5THFqow.s['44']++;PathEvent.call(this,(__cov_hpLHnNdaY9MrqQH5THFqow.b['11'][0]++,p)||(__cov_hpLHnNdaY9MrqQH5THFqow.b['11'][1]++,m[1]),appEmitter,max);}__cov_hpLHnNdaY9MrqQH5THFqow.s['45']++;Event.prototype=Object.create(PathEvent.prototype);__cov_hpLHnNdaY9MrqQH5THFqow.s['46']++;Event.prototype[define]({constructor:Event,get data(){__cov_hpLHnNdaY9MrqQH5THFqow.f['6']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['47']++;return this[data];},get fragment(){__cov_hpLHnNdaY9MrqQH5THFqow.f['7']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['48']++;return this[fragment];},get rawQuery(){__cov_hpLHnNdaY9MrqQH5THFqow.f['8']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['49']++;return this[rawQuery];},get query(){__cov_hpLHnNdaY9MrqQH5THFqow.f['9']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['50']++;return query(this);},get path(){__cov_hpLHnNdaY9MrqQH5THFqow.f['10']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['51']++;return this[path];},get url(){__cov_hpLHnNdaY9MrqQH5THFqow.f['11']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['52']++;var he,p,q,f;__cov_hpLHnNdaY9MrqQH5THFqow.s['53']++;if(this[url]){__cov_hpLHnNdaY9MrqQH5THFqow.b['12'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['54']++;return this[url];}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['12'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['55']++;p=this[path];__cov_hpLHnNdaY9MrqQH5THFqow.s['56']++;q=this[rawQuery]!=null?(__cov_hpLHnNdaY9MrqQH5THFqow.b['13'][0]++,'?'+this[rawQuery]):(__cov_hpLHnNdaY9MrqQH5THFqow.b['13'][1]++,'');__cov_hpLHnNdaY9MrqQH5THFqow.s['57']++;f=this[fragment]!=null?(__cov_hpLHnNdaY9MrqQH5THFqow.b['14'][0]++,'#'+this[fragment]):(__cov_hpLHnNdaY9MrqQH5THFqow.b['14'][1]++,'');__cov_hpLHnNdaY9MrqQH5THFqow.s['58']++;return this[url]=p+q+f;},get origin(){__cov_hpLHnNdaY9MrqQH5THFqow.f['12']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['59']++;return this[origin];},get cookies(){__cov_hpLHnNdaY9MrqQH5THFqow.f['13']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['60']++;return cookies(this,this[cookieStr]);},setCookie:function(obj,props){__cov_hpLHnNdaY9MrqQH5THFqow.f['14']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['61']++;var attrs='',keys,i,j;__cov_hpLHnNdaY9MrqQH5THFqow.s['62']++;props=(__cov_hpLHnNdaY9MrqQH5THFqow.b['15'][0]++,props)||(__cov_hpLHnNdaY9MrqQH5THFqow.b['15'][1]++,{});__cov_hpLHnNdaY9MrqQH5THFqow.s['63']++;if(props.expires){__cov_hpLHnNdaY9MrqQH5THFqow.b['16'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['64']++;attrs+=';Expires='+props.expires.toGMTString();}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['16'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['65']++;if(props.maxAge){__cov_hpLHnNdaY9MrqQH5THFqow.b['17'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['66']++;attrs+=';Max-Age='+props.maxAge;}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['17'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['67']++;if(props.domain){__cov_hpLHnNdaY9MrqQH5THFqow.b['18'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['68']++;attrs+=';Domain='+props.domain;}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['18'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['69']++;if(props.path){__cov_hpLHnNdaY9MrqQH5THFqow.b['19'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['70']++;attrs+=';Path='+props.path;}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['19'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['71']++;if(props.secure){__cov_hpLHnNdaY9MrqQH5THFqow.b['20'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['72']++;attrs+=';Secure';}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['20'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['73']++;if(props.httpOnly){__cov_hpLHnNdaY9MrqQH5THFqow.b['21'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['74']++;attrs+=';HttpOnly';}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['21'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['75']++;obj=(__cov_hpLHnNdaY9MrqQH5THFqow.b['22'][0]++,obj)||(__cov_hpLHnNdaY9MrqQH5THFqow.b['22'][1]++,{});__cov_hpLHnNdaY9MrqQH5THFqow.s['76']++;keys=Object.keys(obj);__cov_hpLHnNdaY9MrqQH5THFqow.s['77']++;for(j=0;j<keys.length;j++){__cov_hpLHnNdaY9MrqQH5THFqow.s['78']++;i=keys[j];__cov_hpLHnNdaY9MrqQH5THFqow.s['79']++;document.cookie=pct.encodeComponent(i)+'='+pct.encodeComponent(obj[i])+attrs;}},language:function(lang){__cov_hpLHnNdaY9MrqQH5THFqow.f['15']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['80']++;var langs;__cov_hpLHnNdaY9MrqQH5THFqow.s['81']++;if(!this[langMap]){__cov_hpLHnNdaY9MrqQH5THFqow.b['23'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['82']++;langs=(__cov_hpLHnNdaY9MrqQH5THFqow.b['24'][0]++,navigator.languages)||(__cov_hpLHnNdaY9MrqQH5THFqow.b['24'][1]++,[(__cov_hpLHnNdaY9MrqQH5THFqow.b['25'][0]++,navigator.language)||(__cov_hpLHnNdaY9MrqQH5THFqow.b['25'][1]++,navigator.userLanguage)]);__cov_hpLHnNdaY9MrqQH5THFqow.s['83']++;this[langMap]=new Map();__cov_hpLHnNdaY9MrqQH5THFqow.s['84']++;for(i=0;i<langs.length;i++){__cov_hpLHnNdaY9MrqQH5THFqow.s['85']++;this[langMap].set(langs[i],1);}__cov_hpLHnNdaY9MrqQH5THFqow.s['86']++;if(!this[langMap].has('*')){__cov_hpLHnNdaY9MrqQH5THFqow.b['26'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['87']++;this[langMap].set('*',0);}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['26'][1]++;}}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['23'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['88']++;if(!lang){__cov_hpLHnNdaY9MrqQH5THFqow.b['27'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['89']++;return filter(this[langMap].entries());}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['27'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['90']++;if(this[langMap].has(lang)){__cov_hpLHnNdaY9MrqQH5THFqow.b['28'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['91']++;return this[langMap].get(lang);}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['28'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['92']++;return this[langMap].get('*');},redirect:function(loc,query,fragment){__cov_hpLHnNdaY9MrqQH5THFqow.f['16']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['93']++;handle(loc,query,fragment,true);}});function*filter(it){__cov_hpLHnNdaY9MrqQH5THFqow.f['17']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['95']++;var entry;__cov_hpLHnNdaY9MrqQH5THFqow.s['96']++;for(entry of it){__cov_hpLHnNdaY9MrqQH5THFqow.s['97']++;if(entry[1]>0){__cov_hpLHnNdaY9MrqQH5THFqow.b['29'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['98']++;yield entry;}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['29'][1]++;}}}function getYielded(script,n){__cov_hpLHnNdaY9MrqQH5THFqow.f['18']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['100']++;if(script[resolver]){__cov_hpLHnNdaY9MrqQH5THFqow.b['30'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['101']++;return script[resolver].yielded;}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['30'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['102']++;script[name]=n;__cov_hpLHnNdaY9MrqQH5THFqow.s['103']++;script[resolver]=new Resolver();__cov_hpLHnNdaY9MrqQH5THFqow.s['104']++;script.onload=onScriptLoad;__cov_hpLHnNdaY9MrqQH5THFqow.s['105']++;script.onerror=onScriptError;__cov_hpLHnNdaY9MrqQH5THFqow.s['106']++;return script[resolver].yielded;}function onScriptLoad(){__cov_hpLHnNdaY9MrqQH5THFqow.f['19']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['108']++;var script=((__cov_hpLHnNdaY9MrqQH5THFqow.b['31'][0]++,this[name])||(__cov_hpLHnNdaY9MrqQH5THFqow.b['31'][1]++,'')).toLowerCase().replace(/\W/g,''),tag='wapp_script_'+script;__cov_hpLHnNdaY9MrqQH5THFqow.s['109']++;this[resolver].accept(global[tag]);}function onScriptError(e){__cov_hpLHnNdaY9MrqQH5THFqow.f['20']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['111']++;this[resolver].reject(new Error('Could not load '+this[name]));}function onPopState(e){__cov_hpLHnNdaY9MrqQH5THFqow.f['21']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['113']++;var ev,firstDigit,code;__cov_hpLHnNdaY9MrqQH5THFqow.s['114']++;if(xhr){__cov_hpLHnNdaY9MrqQH5THFqow.b['32'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['115']++;xhr.abort();__cov_hpLHnNdaY9MrqQH5THFqow.s['116']++;xhr=null;}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['32'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['117']++;appEmitter.sun('ready','busy');__cov_hpLHnNdaY9MrqQH5THFqow.s['118']++;if((__cov_hpLHnNdaY9MrqQH5THFqow.b['34'][0]++,!(e.state instanceof Array))||(__cov_hpLHnNdaY9MrqQH5THFqow.b['34'][1]++,e.state[0]!='wapp_state')||(__cov_hpLHnNdaY9MrqQH5THFqow.b['34'][2]++,typeof e.state[1]!='number')){__cov_hpLHnNdaY9MrqQH5THFqow.b['33'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['119']++;return handle(getPathname()+location.search+location.hash,null,null,true);}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['33'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['120']++;firstDigit=Math.floor(e.state[1]/100);__cov_hpLHnNdaY9MrqQH5THFqow.s['121']++;if(firstDigit==2){__cov_hpLHnNdaY9MrqQH5THFqow.b['35'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['122']++;ev=new Event(app[maximum],null,e.state[2]);__cov_hpLHnNdaY9MrqQH5THFqow.s['123']++;ev.give();__cov_hpLHnNdaY9MrqQH5THFqow.s['124']++;return;}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['35'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['125']++;if((__cov_hpLHnNdaY9MrqQH5THFqow.b['37'][0]++,firstDigit!=4)&&(__cov_hpLHnNdaY9MrqQH5THFqow.b['37'][1]++,firstDigit!=5)&&(__cov_hpLHnNdaY9MrqQH5THFqow.b['37'][2]++,e.state[1]!=0)){__cov_hpLHnNdaY9MrqQH5THFqow.b['36'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['126']++;code=400;}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['36'][1]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['127']++;code=e.state[1];}__cov_hpLHnNdaY9MrqQH5THFqow.s['128']++;ev=new Event(app[maximum],'e/'+code,e.state[2]);__cov_hpLHnNdaY9MrqQH5THFqow.s['129']++;ev.give();}function replaceDots(m){__cov_hpLHnNdaY9MrqQH5THFqow.f['22']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['131']++;return m.replace(/\/\./g,'/');}function handle(url,query,fragment,replace){__cov_hpLHnNdaY9MrqQH5THFqow.f['23']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['133']++;var i,qh,old;__cov_hpLHnNdaY9MrqQH5THFqow.s['134']++;if(url.charAt(0)!='/'){__cov_hpLHnNdaY9MrqQH5THFqow.b['38'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['135']++;url=getPathname(document.baseURI).replace(/[^\/]*$/,'')+url;}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['38'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['136']++;url=app.format(url,query,fragment);__cov_hpLHnNdaY9MrqQH5THFqow.s['137']++;url=url.replace(/^[^#\?]*/,replaceDots);__cov_hpLHnNdaY9MrqQH5THFqow.s['138']++;url=encodeURI(location.origin+prefix+url);__cov_hpLHnNdaY9MrqQH5THFqow.s['139']++;appEmitter.sun('busy','ready');__cov_hpLHnNdaY9MrqQH5THFqow.s['140']++;old=xhr;__cov_hpLHnNdaY9MrqQH5THFqow.s['141']++;xhr=new XMLHttpRequest();__cov_hpLHnNdaY9MrqQH5THFqow.s['142']++;if(old){__cov_hpLHnNdaY9MrqQH5THFqow.b['39'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['143']++;old.abort();}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['39'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['144']++;if(query){__cov_hpLHnNdaY9MrqQH5THFqow.b['40'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['145']++;qh='';__cov_hpLHnNdaY9MrqQH5THFqow.s['146']++;for(i in query){__cov_hpLHnNdaY9MrqQH5THFqow.s['147']++;if(query.hasOwnProperty(i)){__cov_hpLHnNdaY9MrqQH5THFqow.b['41'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['148']++;if(i.charAt(0)!='_'){__cov_hpLHnNdaY9MrqQH5THFqow.b['42'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['149']++;continue;}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['42'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['150']++;qh+=(qh?(__cov_hpLHnNdaY9MrqQH5THFqow.b['43'][0]++,'&'):(__cov_hpLHnNdaY9MrqQH5THFqow.b['43'][1]++,''))+pct.encodeComponent(i)+'='+pct.encodeComponent(query[i]);}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['41'][1]++;}}}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['40'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['151']++;xhr.wapp_fromURL=url;__cov_hpLHnNdaY9MrqQH5THFqow.s['152']++;xhr.wapp_replaceState=replace;__cov_hpLHnNdaY9MrqQH5THFqow.s['153']++;xhr.onreadystatechange=listener;__cov_hpLHnNdaY9MrqQH5THFqow.s['154']++;xhr.open('GET',url,true);__cov_hpLHnNdaY9MrqQH5THFqow.s['155']++;xhr.setRequestHeader('Accept','application/json');__cov_hpLHnNdaY9MrqQH5THFqow.s['156']++;if(qh){__cov_hpLHnNdaY9MrqQH5THFqow.b['44'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['157']++;xhr.setRequestHeader('Query',qh);}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['44'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['158']++;xhr.send();}function listener(){__cov_hpLHnNdaY9MrqQH5THFqow.f['24']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['160']++;var data,state,url,pref,i,m;__cov_hpLHnNdaY9MrqQH5THFqow.s['161']++;if(this.readyState==4){__cov_hpLHnNdaY9MrqQH5THFqow.b['45'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['162']++;if(xhr!=this){__cov_hpLHnNdaY9MrqQH5THFqow.b['46'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['163']++;return;}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['46'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['164']++;xhr=null;__cov_hpLHnNdaY9MrqQH5THFqow.s['165']++;try{__cov_hpLHnNdaY9MrqQH5THFqow.s['166']++;data=JSON.parse(this.responseText);}catch(e){}__cov_hpLHnNdaY9MrqQH5THFqow.s['167']++;state=['wapp_state',this.status,data];__cov_hpLHnNdaY9MrqQH5THFqow.s['168']++;if(this.responseURL){__cov_hpLHnNdaY9MrqQH5THFqow.b['47'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['169']++;pref=location.origin+prefix;__cov_hpLHnNdaY9MrqQH5THFqow.s['170']++;i=this.responseURL.indexOf(pref);__cov_hpLHnNdaY9MrqQH5THFqow.s['171']++;if(i!=0){__cov_hpLHnNdaY9MrqQH5THFqow.b['48'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['172']++;location.href=this.responseURL;__cov_hpLHnNdaY9MrqQH5THFqow.s['173']++;throw new Error('Wrong prefix, reloading...');}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['48'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['174']++;m=this.wapp_fromURL.match(/#.*$/);__cov_hpLHnNdaY9MrqQH5THFqow.s['175']++;url=this.responseURL.slice(pref.length)+(m?(__cov_hpLHnNdaY9MrqQH5THFqow.b['49'][0]++,m[0]):(__cov_hpLHnNdaY9MrqQH5THFqow.b['49'][1]++,''));}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['47'][1]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['176']++;url=this.wapp_fromURL;}__cov_hpLHnNdaY9MrqQH5THFqow.s['177']++;if(this.wapp_replaceState){__cov_hpLHnNdaY9MrqQH5THFqow.b['50'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['178']++;history.replaceState(state,'',url);}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['50'][1]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['179']++;history.pushState(state,'',url);}__cov_hpLHnNdaY9MrqQH5THFqow.s['180']++;onPopState({state:state});}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['45'][1]++;}}function getPathname(p){__cov_hpLHnNdaY9MrqQH5THFqow.f['25']++;__cov_hpLHnNdaY9MrqQH5THFqow.s['182']++;var i;__cov_hpLHnNdaY9MrqQH5THFqow.s['183']++;p=pct.decode(((__cov_hpLHnNdaY9MrqQH5THFqow.b['51'][0]++,p)||(__cov_hpLHnNdaY9MrqQH5THFqow.b['51'][1]++,location.pathname)).match(/^(?:\w+\:\/\/[^\/]*)?([^#\?]*)/)[1]);__cov_hpLHnNdaY9MrqQH5THFqow.s['184']++;i=p.indexOf(prefix);__cov_hpLHnNdaY9MrqQH5THFqow.s['185']++;if(i!=0){__cov_hpLHnNdaY9MrqQH5THFqow.b['52'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['186']++;location.reload(true);__cov_hpLHnNdaY9MrqQH5THFqow.s['187']++;throw new Error('Wrong prefix, reloading...');}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['52'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['188']++;return p.slice(prefix.length);}__cov_hpLHnNdaY9MrqQH5THFqow.s['189']++;if(global.history){__cov_hpLHnNdaY9MrqQH5THFqow.b['53'][0]++;__cov_hpLHnNdaY9MrqQH5THFqow.s['190']++;addEventListener('popstate',onPopState);}else{__cov_hpLHnNdaY9MrqQH5THFqow.b['53'][1]++;}__cov_hpLHnNdaY9MrqQH5THFqow.s['191']++;module.exports=app;
}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"hsm/Event/cookies":10,"hsm/Event/query":11,"path-event":14,"path-event/updateMax":15,"pct":16,"u-proto/define":18,"url-rewriter":27,"y-emitter":31,"y-resolver":55}],2:[function(require,module,exports){
(function(global){
var __cov_FvZwg9hVYvYow9z0sAz$NQ=(Function('return this'))();
if(!__cov_FvZwg9hVYvYow9z0sAz$NQ.__coverage__){__cov_FvZwg9hVYvYow9z0sAz$NQ.__coverage__={};}
__cov_FvZwg9hVYvYow9z0sAz$NQ=__cov_FvZwg9hVYvYow9z0sAz$NQ.__coverage__;
if(!(__cov_FvZwg9hVYvYow9z0sAz$NQ['/home/manolo/Node Packages/wapp/main.js'])){
__cov_FvZwg9hVYvYow9z0sAz$NQ['/home/manolo/Node Packages/wapp/main.js']={"path":"/home/manolo/Node Packages/wapp/main.js","s":{"1":0,"2":0,"3":0},"b":{"1":[0,0]},"f":{},"fnMap":{},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":2,"column":45}},"2":{"start":{"line":1,"column":19},"end":{"line":1,"column":64}},"3":{"start":{"line":2,"column":5},"end":{"line":2,"column":45}}},"branchMap":{"1":{"line":1,"type":"if","locations":[{"start":{"line":1,"column":0},"end":{"line":1,"column":0}},{"start":{"line":1,"column":0},"end":{"line":1,"column":0}}]}}};
}
__cov_FvZwg9hVYvYow9z0sAz$NQ=__cov_FvZwg9hVYvYow9z0sAz$NQ['/home/manolo/Node Packages/wapp/main.js'];
__cov_FvZwg9hVYvYow9z0sAz$NQ.s['1']++;if(global.process){__cov_FvZwg9hVYvYow9z0sAz$NQ.b['1'][0]++;__cov_FvZwg9hVYvYow9z0sAz$NQ.s['2']++;module.exports=require('./ser'+'ver.js');}else{__cov_FvZwg9hVYvYow9z0sAz$NQ.b['1'][1]++;__cov_FvZwg9hVYvYow9z0sAz$NQ.s['3']++;module.exports=require('./client.js');}
}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"./client.js":1}],3:[function(require,module,exports){
var util=require('util/');
var pSlice=Array.prototype.slice;
var hasOwn=Object.prototype.hasOwnProperty;
var assert=module.exports=ok;
assert.AssertionError=function AssertionError(options){
this.name='AssertionError';
this.actual=options.actual;
this.expected=options.expected;
this.operator=options.operator;
if(options.message){
this.message=options.message;
this.generatedMessage=false;
}else{
this.message=getMessage(this);
this.generatedMessage=true;
}
var stackStartFunction=options.stackStartFunction||fail;
if(Error.captureStackTrace){
Error.captureStackTrace(this,stackStartFunction);
}
else{
var err=new Error();
if(err.stack){
var out=err.stack;
var fn_name=stackStartFunction.name;
var idx=out.indexOf('\n'+fn_name);
if(idx>=0){
var next_line=out.indexOf('\n',idx+1);
out=out.substring(next_line+1);
}
this.stack=out;
}
}
};
util.inherits(assert.AssertionError,Error);
function replacer(key,value){
if(util.isUndefined(value)){
return ''+value;
}
if(util.isNumber(value)&&!isFinite(value)){
return value.toString();
}
if(util.isFunction(value)||util.isRegExp(value)){
return value.toString();
}
return value;
}
function truncate(s,n){
if(util.isString(s)){
return s.length<n?s:s.slice(0,n);
}else{
return s;
}
}
function getMessage(self){
return truncate(JSON.stringify(self.actual,replacer),128)+' '+
self.operator+' '+
truncate(JSON.stringify(self.expected,replacer),128);
}
function fail(actual,expected,message,operator,stackStartFunction){
throw new assert.AssertionError({
message:message,
actual:actual,
expected:expected,
operator:operator,
stackStartFunction:stackStartFunction
});
}
assert.fail=fail;
function ok(value,message){
if(!value)fail(value,true,message,'==',assert.ok);
}
assert.ok=ok;
assert.equal=function equal(actual,expected,message){
if(actual!=expected)fail(actual,expected,message,'==',assert.equal);
};
assert.notEqual=function notEqual(actual,expected,message){
if(actual==expected){
fail(actual,expected,message,'!=',assert.notEqual);
}
};
assert.deepEqual=function deepEqual(actual,expected,message){
if(!_deepEqual(actual,expected)){
fail(actual,expected,message,'deepEqual',assert.deepEqual);
}
};
function _deepEqual(actual,expected){
if(actual===expected){
return true;
}else if(util.isBuffer(actual)&&util.isBuffer(expected)){
if(actual.length!=expected.length)return false;
for(var i=0;i<actual.length;i++){
if(actual[i]!==expected[i])return false;
}
return true;
}else if(util.isDate(actual)&&util.isDate(expected)){
return actual.getTime()===expected.getTime();
}else if(util.isRegExp(actual)&&util.isRegExp(expected)){
return actual.source===expected.source&&
actual.global===expected.global&&
actual.multiline===expected.multiline&&
actual.lastIndex===expected.lastIndex&&
actual.ignoreCase===expected.ignoreCase;
}else if(!util.isObject(actual)&&!util.isObject(expected)){
return actual==expected;
}else{
return objEquiv(actual,expected);
}
}
function isArguments(object){
return Object.prototype.toString.call(object)=='[object Arguments]';
}
function objEquiv(a,b){
if(util.isNullOrUndefined(a)||util.isNullOrUndefined(b))
return false;
if(a.prototype!==b.prototype)return false;
if(util.isPrimitive(a)||util.isPrimitive(b)){
return a===b;
}
var aIsArgs=isArguments(a),
bIsArgs=isArguments(b);
if((aIsArgs&&!bIsArgs)||(!aIsArgs&&bIsArgs))
return false;
if(aIsArgs){
a=pSlice.call(a);
b=pSlice.call(b);
return _deepEqual(a,b);
}
var ka=objectKeys(a),
kb=objectKeys(b),
key,i;
if(ka.length!=kb.length)
return false;
ka.sort();
kb.sort();
for(i=ka.length-1;i>=0;i--){
if(ka[i]!=kb[i])
return false;
}
for(i=ka.length-1;i>=0;i--){
key=ka[i];
if(!_deepEqual(a[key],b[key]))return false;
}
return true;
}
assert.notDeepEqual=function notDeepEqual(actual,expected,message){
if(_deepEqual(actual,expected)){
fail(actual,expected,message,'notDeepEqual',assert.notDeepEqual);
}
};
assert.strictEqual=function strictEqual(actual,expected,message){
if(actual!==expected){
fail(actual,expected,message,'===',assert.strictEqual);
}
};
assert.notStrictEqual=function notStrictEqual(actual,expected,message){
if(actual===expected){
fail(actual,expected,message,'!==',assert.notStrictEqual);
}
};
function expectedException(actual,expected){
if(!actual||!expected){
return false;
}
if(Object.prototype.toString.call(expected)=='[object RegExp]'){
return expected.test(actual);
}else if(actual instanceof expected){
return true;
}else if(expected.call({},actual)===true){
return true;
}
return false;
}
function _throws(shouldThrow,block,expected,message){
var actual;
if(util.isString(expected)){
message=expected;
expected=null;
}
try{
block();
}catch(e){
actual=e;
}
message=(expected&&expected.name?' ('+expected.name+').':'.')+
(message?' '+message:'.');
if(shouldThrow&&!actual){
fail(actual,expected,'Missing expected exception'+message);
}
if(!shouldThrow&&expectedException(actual,expected)){
fail(actual,expected,'Got unwanted exception'+message);
}
if((shouldThrow&&actual&&expected&&
!expectedException(actual,expected))||(!shouldThrow&&actual)){
throw actual;
}
}
assert.throws=function(block,error,message){
_throws.apply(this,[true].concat(pSlice.call(arguments)));
};
assert.doesNotThrow=function(block,message){
_throws.apply(this,[false].concat(pSlice.call(arguments)));
};
assert.ifError=function(err){if(err){throw err;}};
var objectKeys=Object.keys||function(obj){
var keys=[];
for(var key in obj){
if(hasOwn.call(obj,key))keys.push(key);
}
return keys;
};
},{"util/":29}],4:[function(require,module,exports){
;(function(exports){
'use strict'
var lookup='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
var Arr=(typeof Uint8Array!=='undefined')
?Uint8Array
:Array
var PLUS='+'.charCodeAt(0)
var SLASH='/'.charCodeAt(0)
var NUMBER='0'.charCodeAt(0)
var LOWER='a'.charCodeAt(0)
var UPPER='A'.charCodeAt(0)
var PLUS_URL_SAFE='-'.charCodeAt(0)
var SLASH_URL_SAFE='_'.charCodeAt(0)
function decode(elt){
var code=elt.charCodeAt(0)
if(code===PLUS||code===PLUS_URL_SAFE)return 62
if(code===SLASH||code===SLASH_URL_SAFE)return 63
if(code<NUMBER)return-1
if(code<NUMBER+10)return code-NUMBER+26+26
if(code<UPPER+26)return code-UPPER
if(code<LOWER+26)return code-LOWER+26
}
function b64ToByteArray(b64){
var i,j,l,tmp,placeHolders,arr
if(b64.length % 4>0){
throw new Error('Invalid string. Length must be a multiple of 4')
}
var len=b64.length
placeHolders=b64.charAt(len-2)==='='?2:b64.charAt(len-1)==='='?1:0
arr=new Arr(b64.length*3/4-placeHolders)
l=placeHolders>0?b64.length-4:b64.length
var L=0
function push(v){
arr[L++]=v
}
for(i=0,j=0;i<l;i+=4,j+=3){
tmp=(decode(b64.charAt(i))<<18)|(decode(b64.charAt(i+1))<<12)|(decode(b64.charAt(i+2))<<6)|decode(b64.charAt(i+3))
push((tmp&0xFF0000)>>16)
push((tmp&0xFF00)>>8)
push(tmp&0xFF)
}
if(placeHolders===2){
tmp=(decode(b64.charAt(i))<<2)|(decode(b64.charAt(i+1))>>4)
push(tmp&0xFF)
}else if(placeHolders===1){
tmp=(decode(b64.charAt(i))<<10)|(decode(b64.charAt(i+1))<<4)|(decode(b64.charAt(i+2))>>2)
push((tmp>>8)&0xFF)
push(tmp&0xFF)
}
return arr
}
function uint8ToBase64(uint8){
var i
var extraBytes=uint8.length % 3
var output=''
var temp,length
function encode(num){
return lookup.charAt(num)
}
function tripletToBase64(num){
return encode(num>>18&0x3F)+encode(num>>12&0x3F)+encode(num>>6&0x3F)+encode(num&0x3F)
}
for(i=0,length=uint8.length-extraBytes;i<length;i+=3){
temp=(uint8[i]<<16)+(uint8[i+1]<<8)+(uint8[i+2])
output+=tripletToBase64(temp)
}
switch(extraBytes){
case 1:
temp=uint8[uint8.length-1]
output+=encode(temp>>2)
output+=encode((temp<<4)&0x3F)
output+='=='
break
case 2:
temp=(uint8[uint8.length-2]<<8)+(uint8[uint8.length-1])
output+=encode(temp>>10)
output+=encode((temp>>4)&0x3F)
output+=encode((temp<<2)&0x3F)
output+='='
break
default:
break
}
return output
}
exports.toByteArray=b64ToByteArray
exports.fromByteArray=uint8ToBase64
}(typeof exports==='undefined'?(this.base64js={}):exports))
},{}],5:[function(require,module,exports){
},{}],6:[function(require,module,exports){
(function(global){
'use strict'
var base64=require('base64-js')
var ieee754=require('ieee754')
var isArray=require('isarray')
exports.Buffer=Buffer
exports.SlowBuffer=SlowBuffer
exports.INSPECT_MAX_BYTES=50
Buffer.poolSize=8192
var rootParent={}
Buffer.TYPED_ARRAY_SUPPORT=global.TYPED_ARRAY_SUPPORT!==undefined
?global.TYPED_ARRAY_SUPPORT
:typedArraySupport()
function typedArraySupport(){
try{
var arr=new Uint8Array(1)
arr.foo=function(){return 42}
return arr.foo()===42&&
typeof arr.subarray==='function'&&
arr.subarray(1,1).byteLength===0
}catch(e){
return false
}
}
function kMaxLength(){
return Buffer.TYPED_ARRAY_SUPPORT
?0x7fffffff
:0x3fffffff
}
function Buffer(arg){
if(!(this instanceof Buffer)){
if(arguments.length>1)return new Buffer(arg,arguments[1])
return new Buffer(arg)
}
if(!Buffer.TYPED_ARRAY_SUPPORT){
this.length=0
this.parent=undefined
}
if(typeof arg==='number'){
return fromNumber(this,arg)
}
if(typeof arg==='string'){
return fromString(this,arg,arguments.length>1?arguments[1]:'utf8')
}
return fromObject(this,arg)
}
Buffer._augment=function(arr){
arr.__proto__=Buffer.prototype
return arr
}
function fromNumber(that,length){
that=allocate(that,length<0?0:checked(length)|0)
if(!Buffer.TYPED_ARRAY_SUPPORT){
for(var i=0;i<length;i++){
that[i]=0
}
}
return that
}
function fromString(that,string,encoding){
if(typeof encoding!=='string'||encoding==='')encoding='utf8'
var length=byteLength(string,encoding)|0
that=allocate(that,length)
that.write(string,encoding)
return that
}
function fromObject(that,object){
if(Buffer.isBuffer(object))return fromBuffer(that,object)
if(isArray(object))return fromArray(that,object)
if(object==null){
throw new TypeError('must start with number, buffer, array or string')
}
if(typeof ArrayBuffer!=='undefined'){
if(object.buffer instanceof ArrayBuffer){
return fromTypedArray(that,object)
}
if(object instanceof ArrayBuffer){
return fromArrayBuffer(that,object)
}
}
if(object.length)return fromArrayLike(that,object)
return fromJsonObject(that,object)
}
function fromBuffer(that,buffer){
var length=checked(buffer.length)|0
that=allocate(that,length)
buffer.copy(that,0,0,length)
return that
}
function fromArray(that,array){
var length=checked(array.length)|0
that=allocate(that,length)
for(var i=0;i<length;i+=1){
that[i]=array[i]&255
}
return that
}
function fromTypedArray(that,array){
var length=checked(array.length)|0
that=allocate(that,length)
for(var i=0;i<length;i+=1){
that[i]=array[i]&255
}
return that
}
function fromArrayBuffer(that,array){
array.byteLength
if(Buffer.TYPED_ARRAY_SUPPORT){
that=new Uint8Array(array)
that.__proto__=Buffer.prototype
}else{
that=fromTypedArray(that,new Uint8Array(array))
}
return that
}
function fromArrayLike(that,array){
var length=checked(array.length)|0
that=allocate(that,length)
for(var i=0;i<length;i+=1){
that[i]=array[i]&255
}
return that
}
function fromJsonObject(that,object){
var array
var length=0
if(object.type==='Buffer'&&isArray(object.data)){
array=object.data
length=checked(array.length)|0
}
that=allocate(that,length)
for(var i=0;i<length;i+=1){
that[i]=array[i]&255
}
return that
}
if(Buffer.TYPED_ARRAY_SUPPORT){
Buffer.prototype.__proto__=Uint8Array.prototype
Buffer.__proto__=Uint8Array
}else{
Buffer.prototype.length=undefined
Buffer.prototype.parent=undefined
}
function allocate(that,length){
if(Buffer.TYPED_ARRAY_SUPPORT){
that=new Uint8Array(length)
that.__proto__=Buffer.prototype
}else{
that.length=length
}
var fromPool=length!==0&&length<=Buffer.poolSize>>>1
if(fromPool)that.parent=rootParent
return that
}
function checked(length){
if(length>=kMaxLength()){
throw new RangeError('Attempt to allocate Buffer larger than maximum '+
'size: 0x'+kMaxLength().toString(16)+' bytes')
}
return length|0
}
function SlowBuffer(subject,encoding){
if(!(this instanceof SlowBuffer))return new SlowBuffer(subject,encoding)
var buf=new Buffer(subject,encoding)
delete buf.parent
return buf
}
Buffer.isBuffer=function isBuffer(b){
return!!(b!=null&&b._isBuffer)
}
Buffer.compare=function compare(a,b){
if(!Buffer.isBuffer(a)||!Buffer.isBuffer(b)){
throw new TypeError('Arguments must be Buffers')
}
if(a===b)return 0
var x=a.length
var y=b.length
var i=0
var len=Math.min(x,y)
while(i<len){
if(a[i]!==b[i])break
++i
}
if(i!==len){
x=a[i]
y=b[i]
}
if(x<y)return-1
if(y<x)return 1
return 0
}
Buffer.isEncoding=function isEncoding(encoding){
switch(String(encoding).toLowerCase()){
case 'hex':
case 'utf8':
case 'utf-8':
case 'ascii':
case 'binary':
case 'base64':
case 'raw':
case 'ucs2':
case 'ucs-2':
case 'utf16le':
case 'utf-16le':
return true
default:
return false
}
}
Buffer.concat=function concat(list,length){
if(!isArray(list))throw new TypeError('list argument must be an Array of Buffers.')
if(list.length===0){
return new Buffer(0)
}
var i
if(length===undefined){
length=0
for(i=0;i<list.length;i++){
length+=list[i].length
}
}
var buf=new Buffer(length)
var pos=0
for(i=0;i<list.length;i++){
var item=list[i]
item.copy(buf,pos)
pos+=item.length
}
return buf
}
function byteLength(string,encoding){
if(typeof string!=='string')string=''+string
var len=string.length
if(len===0)return 0
var loweredCase=false
for(;;){
switch(encoding){
case 'ascii':
case 'binary':
case 'raw':
case 'raws':
return len
case 'utf8':
case 'utf-8':
return utf8ToBytes(string).length
case 'ucs2':
case 'ucs-2':
case 'utf16le':
case 'utf-16le':
return len*2
case 'hex':
return len>>>1
case 'base64':
return base64ToBytes(string).length
default:
if(loweredCase)return utf8ToBytes(string).length
encoding=(''+encoding).toLowerCase()
loweredCase=true
}
}
}
Buffer.byteLength=byteLength
function slowToString(encoding,start,end){
var loweredCase=false
start=start|0
end=end===undefined||end===Infinity?this.length:end|0
if(!encoding)encoding='utf8'
if(start<0)start=0
if(end>this.length)end=this.length
if(end<=start)return ''
while(true){
switch(encoding){
case 'hex':
return hexSlice(this,start,end)
case 'utf8':
case 'utf-8':
return utf8Slice(this,start,end)
case 'ascii':
return asciiSlice(this,start,end)
case 'binary':
return binarySlice(this,start,end)
case 'base64':
return base64Slice(this,start,end)
case 'ucs2':
case 'ucs-2':
case 'utf16le':
case 'utf-16le':
return utf16leSlice(this,start,end)
default:
if(loweredCase)throw new TypeError('Unknown encoding: '+encoding)
encoding=(encoding+'').toLowerCase()
loweredCase=true
}
}
}
Buffer.prototype._isBuffer=true
Buffer.prototype.toString=function toString(){
var length=this.length|0
if(length===0)return ''
if(arguments.length===0)return utf8Slice(this,0,length)
return slowToString.apply(this,arguments)
}
Buffer.prototype.equals=function equals(b){
if(!Buffer.isBuffer(b))throw new TypeError('Argument must be a Buffer')
if(this===b)return true
return Buffer.compare(this,b)===0
}
Buffer.prototype.inspect=function inspect(){
var str=''
var max=exports.INSPECT_MAX_BYTES
if(this.length>0){
str=this.toString('hex',0,max).match(/.{2}/g).join(' ')
if(this.length>max)str+=' ... '
}
return '<Buffer '+str+'>'
}
Buffer.prototype.compare=function compare(b){
if(!Buffer.isBuffer(b))throw new TypeError('Argument must be a Buffer')
if(this===b)return 0
return Buffer.compare(this,b)
}
Buffer.prototype.indexOf=function indexOf(val,byteOffset){
if(byteOffset>0x7fffffff)byteOffset=0x7fffffff
else if(byteOffset<-0x80000000)byteOffset=-0x80000000
byteOffset>>=0
if(this.length===0)return-1
if(byteOffset>=this.length)return-1
if(byteOffset<0)byteOffset=Math.max(this.length+byteOffset,0)
if(typeof val==='string'){
if(val.length===0)return-1
return String.prototype.indexOf.call(this,val,byteOffset)
}
if(Buffer.isBuffer(val)){
return arrayIndexOf(this,val,byteOffset)
}
if(typeof val==='number'){
if(Buffer.TYPED_ARRAY_SUPPORT&&Uint8Array.prototype.indexOf==='function'){
return Uint8Array.prototype.indexOf.call(this,val,byteOffset)
}
return arrayIndexOf(this,[val],byteOffset)
}
function arrayIndexOf(arr,val,byteOffset){
var foundIndex=-1
for(var i=0;byteOffset+i<arr.length;i++){
if(arr[byteOffset+i]===val[foundIndex===-1?0:i-foundIndex]){
if(foundIndex===-1)foundIndex=i
if(i-foundIndex+1===val.length)return byteOffset+foundIndex
}else{
foundIndex=-1
}
}
return-1
}
throw new TypeError('val must be string, number or Buffer')
}
function hexWrite(buf,string,offset,length){
offset=Number(offset)||0
var remaining=buf.length-offset
if(!length){
length=remaining
}else{
length=Number(length)
if(length>remaining){
length=remaining
}
}
var strLen=string.length
if(strLen % 2!==0)throw new Error('Invalid hex string')
if(length>strLen/2){
length=strLen/2
}
for(var i=0;i<length;i++){
var parsed=parseInt(string.substr(i*2,2),16)
if(isNaN(parsed))throw new Error('Invalid hex string')
buf[offset+i]=parsed
}
return i
}
function utf8Write(buf,string,offset,length){
return blitBuffer(utf8ToBytes(string,buf.length-offset),buf,offset,length)
}
function asciiWrite(buf,string,offset,length){
return blitBuffer(asciiToBytes(string),buf,offset,length)
}
function binaryWrite(buf,string,offset,length){
return asciiWrite(buf,string,offset,length)
}
function base64Write(buf,string,offset,length){
return blitBuffer(base64ToBytes(string),buf,offset,length)
}
function ucs2Write(buf,string,offset,length){
return blitBuffer(utf16leToBytes(string,buf.length-offset),buf,offset,length)
}
Buffer.prototype.write=function write(string,offset,length,encoding){
if(offset===undefined){
encoding='utf8'
length=this.length
offset=0
}else if(length===undefined&&typeof offset==='string'){
encoding=offset
length=this.length
offset=0
}else if(isFinite(offset)){
offset=offset|0
if(isFinite(length)){
length=length|0
if(encoding===undefined)encoding='utf8'
}else{
encoding=length
length=undefined
}
}else{
var swap=encoding
encoding=offset
offset=length|0
length=swap
}
var remaining=this.length-offset
if(length===undefined||length>remaining)length=remaining
if((string.length>0&&(length<0||offset<0))||offset>this.length){
throw new RangeError('attempt to write outside buffer bounds')
}
if(!encoding)encoding='utf8'
var loweredCase=false
for(;;){
switch(encoding){
case 'hex':
return hexWrite(this,string,offset,length)
case 'utf8':
case 'utf-8':
return utf8Write(this,string,offset,length)
case 'ascii':
return asciiWrite(this,string,offset,length)
case 'binary':
return binaryWrite(this,string,offset,length)
case 'base64':
return base64Write(this,string,offset,length)
case 'ucs2':
case 'ucs-2':
case 'utf16le':
case 'utf-16le':
return ucs2Write(this,string,offset,length)
default:
if(loweredCase)throw new TypeError('Unknown encoding: '+encoding)
encoding=(''+encoding).toLowerCase()
loweredCase=true
}
}
}
Buffer.prototype.toJSON=function toJSON(){
return{
type:'Buffer',
data:Array.prototype.slice.call(this._arr||this,0)
}
}
function base64Slice(buf,start,end){
if(start===0&&end===buf.length){
return base64.fromByteArray(buf)
}else{
return base64.fromByteArray(buf.slice(start,end))
}
}
function utf8Slice(buf,start,end){
end=Math.min(buf.length,end)
var res=[]
var i=start
while(i<end){
var firstByte=buf[i]
var codePoint=null
var bytesPerSequence=(firstByte>0xEF)?4
:(firstByte>0xDF)?3
:(firstByte>0xBF)?2
:1
if(i+bytesPerSequence<=end){
var secondByte,thirdByte,fourthByte,tempCodePoint
switch(bytesPerSequence){
case 1:
if(firstByte<0x80){
codePoint=firstByte
}
break
case 2:
secondByte=buf[i+1]
if((secondByte&0xC0)===0x80){
tempCodePoint=(firstByte&0x1F)<<0x6|(secondByte&0x3F)
if(tempCodePoint>0x7F){
codePoint=tempCodePoint
}
}
break
case 3:
secondByte=buf[i+1]
thirdByte=buf[i+2]
if((secondByte&0xC0)===0x80&&(thirdByte&0xC0)===0x80){
tempCodePoint=(firstByte&0xF)<<0xC|(secondByte&0x3F)<<0x6|(thirdByte&0x3F)
if(tempCodePoint>0x7FF&&(tempCodePoint<0xD800||tempCodePoint>0xDFFF)){
codePoint=tempCodePoint
}
}
break
case 4:
secondByte=buf[i+1]
thirdByte=buf[i+2]
fourthByte=buf[i+3]
if((secondByte&0xC0)===0x80&&(thirdByte&0xC0)===0x80&&(fourthByte&0xC0)===0x80){
tempCodePoint=(firstByte&0xF)<<0x12|(secondByte&0x3F)<<0xC|(thirdByte&0x3F)<<0x6|(fourthByte&0x3F)
if(tempCodePoint>0xFFFF&&tempCodePoint<0x110000){
codePoint=tempCodePoint
}
}
}
}
if(codePoint===null){
codePoint=0xFFFD
bytesPerSequence=1
}else if(codePoint>0xFFFF){
codePoint-=0x10000
res.push(codePoint>>>10&0x3FF|0xD800)
codePoint=0xDC00|codePoint&0x3FF
}
res.push(codePoint)
i+=bytesPerSequence
}
return decodeCodePointsArray(res)
}
var MAX_ARGUMENTS_LENGTH=0x1000
function decodeCodePointsArray(codePoints){
var len=codePoints.length
if(len<=MAX_ARGUMENTS_LENGTH){
return String.fromCharCode.apply(String,codePoints)
}
var res=''
var i=0
while(i<len){
res+=String.fromCharCode.apply(
String,
codePoints.slice(i,i+=MAX_ARGUMENTS_LENGTH)
)
}
return res
}
function asciiSlice(buf,start,end){
var ret=''
end=Math.min(buf.length,end)
for(var i=start;i<end;i++){
ret+=String.fromCharCode(buf[i]&0x7F)
}
return ret
}
function binarySlice(buf,start,end){
var ret=''
end=Math.min(buf.length,end)
for(var i=start;i<end;i++){
ret+=String.fromCharCode(buf[i])
}
return ret
}
function hexSlice(buf,start,end){
var len=buf.length
if(!start||start<0)start=0
if(!end||end<0||end>len)end=len
var out=''
for(var i=start;i<end;i++){
out+=toHex(buf[i])
}
return out
}
function utf16leSlice(buf,start,end){
var bytes=buf.slice(start,end)
var res=''
for(var i=0;i<bytes.length;i+=2){
res+=String.fromCharCode(bytes[i]+bytes[i+1]*256)
}
return res
}
Buffer.prototype.slice=function slice(start,end){
var len=this.length
start=~~start
end=end===undefined?len:~~end
if(start<0){
start+=len
if(start<0)start=0
}else if(start>len){
start=len
}
if(end<0){
end+=len
if(end<0)end=0
}else if(end>len){
end=len
}
if(end<start)end=start
var newBuf
if(Buffer.TYPED_ARRAY_SUPPORT){
newBuf=this.subarray(start,end)
newBuf.__proto__=Buffer.prototype
}else{
var sliceLen=end-start
newBuf=new Buffer(sliceLen,undefined)
for(var i=0;i<sliceLen;i++){
newBuf[i]=this[i+start]
}
}
if(newBuf.length)newBuf.parent=this.parent||this
return newBuf
}
function checkOffset(offset,ext,length){
if((offset % 1)!==0||offset<0)throw new RangeError('offset is not uint')
if(offset+ext>length)throw new RangeError('Trying to access beyond buffer length')
}
Buffer.prototype.readUIntLE=function readUIntLE(offset,byteLength,noAssert){
offset=offset|0
byteLength=byteLength|0
if(!noAssert)checkOffset(offset,byteLength,this.length)
var val=this[offset]
var mul=1
var i=0
while(++i<byteLength&&(mul*=0x100)){
val+=this[offset+i]*mul
}
return val
}
Buffer.prototype.readUIntBE=function readUIntBE(offset,byteLength,noAssert){
offset=offset|0
byteLength=byteLength|0
if(!noAssert){
checkOffset(offset,byteLength,this.length)
}
var val=this[offset+--byteLength]
var mul=1
while(byteLength>0&&(mul*=0x100)){
val+=this[offset+--byteLength]*mul
}
return val
}
Buffer.prototype.readUInt8=function readUInt8(offset,noAssert){
if(!noAssert)checkOffset(offset,1,this.length)
return this[offset]
}
Buffer.prototype.readUInt16LE=function readUInt16LE(offset,noAssert){
if(!noAssert)checkOffset(offset,2,this.length)
return this[offset]|(this[offset+1]<<8)
}
Buffer.prototype.readUInt16BE=function readUInt16BE(offset,noAssert){
if(!noAssert)checkOffset(offset,2,this.length)
return(this[offset]<<8)|this[offset+1]
}
Buffer.prototype.readUInt32LE=function readUInt32LE(offset,noAssert){
if(!noAssert)checkOffset(offset,4,this.length)
return((this[offset])|
(this[offset+1]<<8)|
(this[offset+2]<<16))+
(this[offset+3]*0x1000000)
}
Buffer.prototype.readUInt32BE=function readUInt32BE(offset,noAssert){
if(!noAssert)checkOffset(offset,4,this.length)
return(this[offset]*0x1000000)+
((this[offset+1]<<16)|
(this[offset+2]<<8)|
this[offset+3])
}
Buffer.prototype.readIntLE=function readIntLE(offset,byteLength,noAssert){
offset=offset|0
byteLength=byteLength|0
if(!noAssert)checkOffset(offset,byteLength,this.length)
var val=this[offset]
var mul=1
var i=0
while(++i<byteLength&&(mul*=0x100)){
val+=this[offset+i]*mul
}
mul*=0x80
if(val>=mul)val-=Math.pow(2,8*byteLength)
return val
}
Buffer.prototype.readIntBE=function readIntBE(offset,byteLength,noAssert){
offset=offset|0
byteLength=byteLength|0
if(!noAssert)checkOffset(offset,byteLength,this.length)
var i=byteLength
var mul=1
var val=this[offset+--i]
while(i>0&&(mul*=0x100)){
val+=this[offset+--i]*mul
}
mul*=0x80
if(val>=mul)val-=Math.pow(2,8*byteLength)
return val
}
Buffer.prototype.readInt8=function readInt8(offset,noAssert){
if(!noAssert)checkOffset(offset,1,this.length)
if(!(this[offset]&0x80))return(this[offset])
return((0xff-this[offset]+1)*-1)
}
Buffer.prototype.readInt16LE=function readInt16LE(offset,noAssert){
if(!noAssert)checkOffset(offset,2,this.length)
var val=this[offset]|(this[offset+1]<<8)
return(val&0x8000)?val|0xFFFF0000:val
}
Buffer.prototype.readInt16BE=function readInt16BE(offset,noAssert){
if(!noAssert)checkOffset(offset,2,this.length)
var val=this[offset+1]|(this[offset]<<8)
return(val&0x8000)?val|0xFFFF0000:val
}
Buffer.prototype.readInt32LE=function readInt32LE(offset,noAssert){
if(!noAssert)checkOffset(offset,4,this.length)
return(this[offset])|
(this[offset+1]<<8)|
(this[offset+2]<<16)|
(this[offset+3]<<24)
}
Buffer.prototype.readInt32BE=function readInt32BE(offset,noAssert){
if(!noAssert)checkOffset(offset,4,this.length)
return(this[offset]<<24)|
(this[offset+1]<<16)|
(this[offset+2]<<8)|
(this[offset+3])
}
Buffer.prototype.readFloatLE=function readFloatLE(offset,noAssert){
if(!noAssert)checkOffset(offset,4,this.length)
return ieee754.read(this,offset,true,23,4)
}
Buffer.prototype.readFloatBE=function readFloatBE(offset,noAssert){
if(!noAssert)checkOffset(offset,4,this.length)
return ieee754.read(this,offset,false,23,4)
}
Buffer.prototype.readDoubleLE=function readDoubleLE(offset,noAssert){
if(!noAssert)checkOffset(offset,8,this.length)
return ieee754.read(this,offset,true,52,8)
}
Buffer.prototype.readDoubleBE=function readDoubleBE(offset,noAssert){
if(!noAssert)checkOffset(offset,8,this.length)
return ieee754.read(this,offset,false,52,8)
}
function checkInt(buf,value,offset,ext,max,min){
if(!Buffer.isBuffer(buf))throw new TypeError('buffer must be a Buffer instance')
if(value>max||value<min)throw new RangeError('value is out of bounds')
if(offset+ext>buf.length)throw new RangeError('index out of range')
}
Buffer.prototype.writeUIntLE=function writeUIntLE(value,offset,byteLength,noAssert){
value=+value
offset=offset|0
byteLength=byteLength|0
if(!noAssert)checkInt(this,value,offset,byteLength,Math.pow(2,8*byteLength),0)
var mul=1
var i=0
this[offset]=value&0xFF
while(++i<byteLength&&(mul*=0x100)){
this[offset+i]=(value/mul)&0xFF
}
return offset+byteLength
}
Buffer.prototype.writeUIntBE=function writeUIntBE(value,offset,byteLength,noAssert){
value=+value
offset=offset|0
byteLength=byteLength|0
if(!noAssert)checkInt(this,value,offset,byteLength,Math.pow(2,8*byteLength),0)
var i=byteLength-1
var mul=1
this[offset+i]=value&0xFF
while(--i>=0&&(mul*=0x100)){
this[offset+i]=(value/mul)&0xFF
}
return offset+byteLength
}
Buffer.prototype.writeUInt8=function writeUInt8(value,offset,noAssert){
value=+value
offset=offset|0
if(!noAssert)checkInt(this,value,offset,1,0xff,0)
if(!Buffer.TYPED_ARRAY_SUPPORT)value=Math.floor(value)
this[offset]=(value&0xff)
return offset+1
}
function objectWriteUInt16(buf,value,offset,littleEndian){
if(value<0)value=0xffff+value+1
for(var i=0,j=Math.min(buf.length-offset,2);i<j;i++){
buf[offset+i]=(value&(0xff<<(8*(littleEndian?i:1-i))))>>>
(littleEndian?i:1-i)*8
}
}
Buffer.prototype.writeUInt16LE=function writeUInt16LE(value,offset,noAssert){
value=+value
offset=offset|0
if(!noAssert)checkInt(this,value,offset,2,0xffff,0)
if(Buffer.TYPED_ARRAY_SUPPORT){
this[offset]=(value&0xff)
this[offset+1]=(value>>>8)
}else{
objectWriteUInt16(this,value,offset,true)
}
return offset+2
}
Buffer.prototype.writeUInt16BE=function writeUInt16BE(value,offset,noAssert){
value=+value
offset=offset|0
if(!noAssert)checkInt(this,value,offset,2,0xffff,0)
if(Buffer.TYPED_ARRAY_SUPPORT){
this[offset]=(value>>>8)
this[offset+1]=(value&0xff)
}else{
objectWriteUInt16(this,value,offset,false)
}
return offset+2
}
function objectWriteUInt32(buf,value,offset,littleEndian){
if(value<0)value=0xffffffff+value+1
for(var i=0,j=Math.min(buf.length-offset,4);i<j;i++){
buf[offset+i]=(value>>>(littleEndian?i:3-i)*8)&0xff
}
}
Buffer.prototype.writeUInt32LE=function writeUInt32LE(value,offset,noAssert){
value=+value
offset=offset|0
if(!noAssert)checkInt(this,value,offset,4,0xffffffff,0)
if(Buffer.TYPED_ARRAY_SUPPORT){
this[offset+3]=(value>>>24)
this[offset+2]=(value>>>16)
this[offset+1]=(value>>>8)
this[offset]=(value&0xff)
}else{
objectWriteUInt32(this,value,offset,true)
}
return offset+4
}
Buffer.prototype.writeUInt32BE=function writeUInt32BE(value,offset,noAssert){
value=+value
offset=offset|0
if(!noAssert)checkInt(this,value,offset,4,0xffffffff,0)
if(Buffer.TYPED_ARRAY_SUPPORT){
this[offset]=(value>>>24)
this[offset+1]=(value>>>16)
this[offset+2]=(value>>>8)
this[offset+3]=(value&0xff)
}else{
objectWriteUInt32(this,value,offset,false)
}
return offset+4
}
Buffer.prototype.writeIntLE=function writeIntLE(value,offset,byteLength,noAssert){
value=+value
offset=offset|0
if(!noAssert){
var limit=Math.pow(2,8*byteLength-1)
checkInt(this,value,offset,byteLength,limit-1,-limit)
}
var i=0
var mul=1
var sub=value<0?1:0
this[offset]=value&0xFF
while(++i<byteLength&&(mul*=0x100)){
this[offset+i]=((value/mul)>>0)-sub&0xFF
}
return offset+byteLength
}
Buffer.prototype.writeIntBE=function writeIntBE(value,offset,byteLength,noAssert){
value=+value
offset=offset|0
if(!noAssert){
var limit=Math.pow(2,8*byteLength-1)
checkInt(this,value,offset,byteLength,limit-1,-limit)
}
var i=byteLength-1
var mul=1
var sub=value<0?1:0
this[offset+i]=value&0xFF
while(--i>=0&&(mul*=0x100)){
this[offset+i]=((value/mul)>>0)-sub&0xFF
}
return offset+byteLength
}
Buffer.prototype.writeInt8=function writeInt8(value,offset,noAssert){
value=+value
offset=offset|0
if(!noAssert)checkInt(this,value,offset,1,0x7f,-0x80)
if(!Buffer.TYPED_ARRAY_SUPPORT)value=Math.floor(value)
if(value<0)value=0xff+value+1
this[offset]=(value&0xff)
return offset+1
}
Buffer.prototype.writeInt16LE=function writeInt16LE(value,offset,noAssert){
value=+value
offset=offset|0
if(!noAssert)checkInt(this,value,offset,2,0x7fff,-0x8000)
if(Buffer.TYPED_ARRAY_SUPPORT){
this[offset]=(value&0xff)
this[offset+1]=(value>>>8)
}else{
objectWriteUInt16(this,value,offset,true)
}
return offset+2
}
Buffer.prototype.writeInt16BE=function writeInt16BE(value,offset,noAssert){
value=+value
offset=offset|0
if(!noAssert)checkInt(this,value,offset,2,0x7fff,-0x8000)
if(Buffer.TYPED_ARRAY_SUPPORT){
this[offset]=(value>>>8)
this[offset+1]=(value&0xff)
}else{
objectWriteUInt16(this,value,offset,false)
}
return offset+2
}
Buffer.prototype.writeInt32LE=function writeInt32LE(value,offset,noAssert){
value=+value
offset=offset|0
if(!noAssert)checkInt(this,value,offset,4,0x7fffffff,-0x80000000)
if(Buffer.TYPED_ARRAY_SUPPORT){
this[offset]=(value&0xff)
this[offset+1]=(value>>>8)
this[offset+2]=(value>>>16)
this[offset+3]=(value>>>24)
}else{
objectWriteUInt32(this,value,offset,true)
}
return offset+4
}
Buffer.prototype.writeInt32BE=function writeInt32BE(value,offset,noAssert){
value=+value
offset=offset|0
if(!noAssert)checkInt(this,value,offset,4,0x7fffffff,-0x80000000)
if(value<0)value=0xffffffff+value+1
if(Buffer.TYPED_ARRAY_SUPPORT){
this[offset]=(value>>>24)
this[offset+1]=(value>>>16)
this[offset+2]=(value>>>8)
this[offset+3]=(value&0xff)
}else{
objectWriteUInt32(this,value,offset,false)
}
return offset+4
}
function checkIEEE754(buf,value,offset,ext,max,min){
if(offset+ext>buf.length)throw new RangeError('index out of range')
if(offset<0)throw new RangeError('index out of range')
}
function writeFloat(buf,value,offset,littleEndian,noAssert){
if(!noAssert){
checkIEEE754(buf,value,offset,4,3.4028234663852886e+38,-3.4028234663852886e+38)
}
ieee754.write(buf,value,offset,littleEndian,23,4)
return offset+4
}
Buffer.prototype.writeFloatLE=function writeFloatLE(value,offset,noAssert){
return writeFloat(this,value,offset,true,noAssert)
}
Buffer.prototype.writeFloatBE=function writeFloatBE(value,offset,noAssert){
return writeFloat(this,value,offset,false,noAssert)
}
function writeDouble(buf,value,offset,littleEndian,noAssert){
if(!noAssert){
checkIEEE754(buf,value,offset,8,1.7976931348623157E+308,-1.7976931348623157E+308)
}
ieee754.write(buf,value,offset,littleEndian,52,8)
return offset+8
}
Buffer.prototype.writeDoubleLE=function writeDoubleLE(value,offset,noAssert){
return writeDouble(this,value,offset,true,noAssert)
}
Buffer.prototype.writeDoubleBE=function writeDoubleBE(value,offset,noAssert){
return writeDouble(this,value,offset,false,noAssert)
}
Buffer.prototype.copy=function copy(target,targetStart,start,end){
if(!start)start=0
if(!end&&end!==0)end=this.length
if(targetStart>=target.length)targetStart=target.length
if(!targetStart)targetStart=0
if(end>0&&end<start)end=start
if(end===start)return 0
if(target.length===0||this.length===0)return 0
if(targetStart<0){
throw new RangeError('targetStart out of bounds')
}
if(start<0||start>=this.length)throw new RangeError('sourceStart out of bounds')
if(end<0)throw new RangeError('sourceEnd out of bounds')
if(end>this.length)end=this.length
if(target.length-targetStart<end-start){
end=target.length-targetStart+start
}
var len=end-start
var i
if(this===target&&start<targetStart&&targetStart<end){
for(i=len-1;i>=0;i--){
target[i+targetStart]=this[i+start]
}
}else if(len<1000||!Buffer.TYPED_ARRAY_SUPPORT){
for(i=0;i<len;i++){
target[i+targetStart]=this[i+start]
}
}else{
Uint8Array.prototype.set.call(
target,
this.subarray(start,start+len),
targetStart
)
}
return len
}
Buffer.prototype.fill=function fill(value,start,end){
if(!value)value=0
if(!start)start=0
if(!end)end=this.length
if(end<start)throw new RangeError('end < start')
if(end===start)return
if(this.length===0)return
if(start<0||start>=this.length)throw new RangeError('start out of bounds')
if(end<0||end>this.length)throw new RangeError('end out of bounds')
var i
if(typeof value==='number'){
for(i=start;i<end;i++){
this[i]=value
}
}else{
var bytes=utf8ToBytes(value.toString())
var len=bytes.length
for(i=start;i<end;i++){
this[i]=bytes[i % len]
}
}
return this
}
var INVALID_BASE64_RE=/[^+\/0-9A-Za-z-_]/g
function base64clean(str){
str=stringtrim(str).replace(INVALID_BASE64_RE,'')
if(str.length<2)return ''
while(str.length % 4!==0){
str=str+'='
}
return str
}
function stringtrim(str){
if(str.trim)return str.trim()
return str.replace(/^\s+|\s+$/g,'')
}
function toHex(n){
if(n<16)return '0'+n.toString(16)
return n.toString(16)
}
function utf8ToBytes(string,units){
units=units||Infinity
var codePoint
var length=string.length
var leadSurrogate=null
var bytes=[]
for(var i=0;i<length;i++){
codePoint=string.charCodeAt(i)
if(codePoint>0xD7FF&&codePoint<0xE000){
if(!leadSurrogate){
if(codePoint>0xDBFF){
if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD)
continue
}else if(i+1===length){
if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD)
continue
}
leadSurrogate=codePoint
continue
}
if(codePoint<0xDC00){
if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD)
leadSurrogate=codePoint
continue
}
codePoint=(leadSurrogate-0xD800<<10|codePoint-0xDC00)+0x10000
}else if(leadSurrogate){
if((units-=3)>-1)bytes.push(0xEF,0xBF,0xBD)
}
leadSurrogate=null
if(codePoint<0x80){
if((units-=1)<0)break
bytes.push(codePoint)
}else if(codePoint<0x800){
if((units-=2)<0)break
bytes.push(
codePoint>>0x6|0xC0,
codePoint&0x3F|0x80
)
}else if(codePoint<0x10000){
if((units-=3)<0)break
bytes.push(
codePoint>>0xC|0xE0,
codePoint>>0x6&0x3F|0x80,
codePoint&0x3F|0x80
)
}else if(codePoint<0x110000){
if((units-=4)<0)break
bytes.push(
codePoint>>0x12|0xF0,
codePoint>>0xC&0x3F|0x80,
codePoint>>0x6&0x3F|0x80,
codePoint&0x3F|0x80
)
}else{
throw new Error('Invalid code point')
}
}
return bytes
}
function asciiToBytes(str){
var byteArray=[]
for(var i=0;i<str.length;i++){
byteArray.push(str.charCodeAt(i)&0xFF)
}
return byteArray
}
function utf16leToBytes(str,units){
var c,hi,lo
var byteArray=[]
for(var i=0;i<str.length;i++){
if((units-=2)<0)break
c=str.charCodeAt(i)
hi=c>>8
lo=c % 256
byteArray.push(lo)
byteArray.push(hi)
}
return byteArray
}
function base64ToBytes(str){
return base64.toByteArray(base64clean(str))
}
function blitBuffer(src,dst,offset,length){
for(var i=0;i<length;i++){
if((i+offset>=dst.length)||(i>=src.length))break
dst[i+offset]=src[i]
}
return i
}
}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"base64-js":4,"ieee754":12,"isarray":7}],7:[function(require,module,exports){
var toString={}.toString;
module.exports=Array.isArray||function(arr){
return toString.call(arr)=='[object Array]';
};
},{}],8:[function(require,module,exports){
'use strict'
var col=Symbol(),
Yielded,Detacher,define;
module.exports=Collection;
Yielded=require('y-resolver').Yielded;
Detacher=require('./main.js');
define=require('u-proto/define');
function Collection(){
var s=new Set();
Detacher.call(this,detachSet,[s]);
this[col]=s;
}
Collection.prototype=Object.create(Detacher.prototype);
Collection.prototype[define]('constructor',Collection);
Collection.prototype[define]({
add:function(){
var d;
if(this.done){
for(d of arguments)detach(d);
return;
}
for(d of arguments){
this[col].add(d);
if(Yielded.is(d))d.listen(this[col].delete,[d],this[col]);
}
},
remove:function(){
var d;
for(d of arguments)this[col].delete(d);
},
get size(){
return this[col].size;
}
});
function detachSet(col){
var d;
for(d of col)detach(d);
col.clear();
}
function detach(d){
d=d||{};
if(d.detach)return d.detach();
if(d.disconnect)return d.disconnect();
if(d.close)return d.close();
if(d.kill)return d.kill();
if(d.pause)return d.pause();
if(d.accept)return d.accept();
if(d.reject)return d.reject();
}
},{"./main.js":9,"u-proto/define":18,"y-resolver":55}],9:[function(require,module,exports){
'use strict'
var resolver=Symbol(),
args=Symbol(),
Resolver,define;
module.exports=Detacher;
Resolver=require('y-resolver');
define=require('u-proto/define');
function Detacher(){
Resolver.Yielded.call(this,resolver);
this[args]=arguments;
}
Detacher.prototype=Object.create(Resolver.Yielded.prototype);
Detacher.prototype[define]('constructor',Detacher);
Detacher.prototype[define]({
get active(){
return!this.done;
},
detach:function(){
var a;
if(this.done)return;
this[resolver].accept();
a=this[args];
if(a.length)try{a[0].apply(a[2]||this,a[1]||[]);}
catch(e){setTimeout(throwError,0,e);}
}
});
function throwError(e){
throw e;
}
module.exports.prototype=Detacher.prototype;
},{"u-proto/define":18,"y-resolver":55}],10:[function(require,module,exports){
var pct=require('pct'),
cookies=Symbol(),
holder;
function getter(e,str){
return e[cookies]=e[cookies]||getCookies(str);
}
function cookieReplace(m,key,value){
key=pct.decodeComponent(key);
value=pct.decodeComponent(value);
if(!holder.hasOwnProperty(key))holder[key]=value;
}
function getCookies(cookieStr){
cookieStr=(cookieStr||'')+'';
holder={};
cookieStr.replace(/(?:^|\s*;\s*)(.+?)(?:\s*=\s*(.*?))?\s*(?=;|$)/g,cookieReplace);
try{return Object.freeze(holder);}
finally{holder=null;}
}
module.exports=getter;
},{"pct":16}],11:[function(require,module,exports){
var pct=require('pct'),
query=Symbol(),
holder;
function getter(e){
if(!e.rawQuery)return{};
return e[query]=e[query]||getQuery(e.rawQuery);
}
function queryReplace(m,key,value){
key=pct.decodeComponent(key);
value=pct.decodeComponent(value||'');
if(holder.hasOwnProperty(key))holder[key]=[].concat(holder[key],value);
else holder[key]=value;
}
function getQuery(query){
query=(query||'')+'';
holder={};
query.replace(/\+/g,'%20').replace(/([^&]+?)(?:=(.*?))?(&|$)/g,queryReplace);
try{return Object.freeze(holder);}
finally{holder=null;}
}
module.exports=getter;
},{"pct":16}],12:[function(require,module,exports){
exports.read=function(buffer,offset,isLE,mLen,nBytes){
var e,m
var eLen=nBytes*8-mLen-1
var eMax=(1<<eLen)-1
var eBias=eMax>>1
var nBits=-7
var i=isLE?(nBytes-1):0
var d=isLE?-1:1
var s=buffer[offset+i]
i+=d
e=s&((1<<(-nBits))-1)
s>>=(-nBits)
nBits+=eLen
for(;nBits>0;e=e*256+buffer[offset+i],i+=d,nBits-=8){}
m=e&((1<<(-nBits))-1)
e>>=(-nBits)
nBits+=mLen
for(;nBits>0;m=m*256+buffer[offset+i],i+=d,nBits-=8){}
if(e===0){
e=1-eBias
}else if(e===eMax){
return m?NaN:((s?-1:1)*Infinity)
}else{
m=m+Math.pow(2,mLen)
e=e-eBias
}
return(s?-1:1)*m*Math.pow(2,e-mLen)
}
exports.write=function(buffer,value,offset,isLE,mLen,nBytes){
var e,m,c
var eLen=nBytes*8-mLen-1
var eMax=(1<<eLen)-1
var eBias=eMax>>1
var rt=(mLen===23?Math.pow(2,-24)-Math.pow(2,-77):0)
var i=isLE?0:(nBytes-1)
var d=isLE?1:-1
var s=value<0||(value===0&&1/value<0)?1:0
value=Math.abs(value)
if(isNaN(value)||value===Infinity){
m=isNaN(value)?1:0
e=eMax
}else{
e=Math.floor(Math.log(value)/Math.LN2)
if(value*(c=Math.pow(2,-e))<1){
e--
c*=2
}
if(e+eBias>=1){
value+=rt/c
}else{
value+=rt*Math.pow(2,1-eBias)
}
if(value*c>=2){
e++
c/=2
}
if(e+eBias>=eMax){
m=0
e=eMax
}else if(e+eBias>=1){
m=(value*c-1)*Math.pow(2,mLen)
e=e+eBias
}else{
m=value*Math.pow(2,eBias-1)*Math.pow(2,mLen)
e=0
}
}
for(;mLen>=8;buffer[offset+i]=m&0xff,i+=d,m/=256,mLen-=8){}
e=(e<<mLen)|m
eLen+=mLen
for(;eLen>0;buffer[offset+i]=e&0xff,i+=d,e/=256,eLen-=8){}
buffer[offset+i-d]|=s*128
}
},{}],13:[function(require,module,exports){
if(typeof Object.create==='function'){
module.exports=function inherits(ctor,superCtor){
ctor.super_=superCtor
ctor.prototype=Object.create(superCtor.prototype,{
constructor:{
value:ctor,
enumerable:false,
writable:true,
configurable:true
}
});
};
}else{
module.exports=function inherits(ctor,superCtor){
ctor.super_=superCtor
var TempCtor=function(){}
TempCtor.prototype=superCtor.prototype
ctor.prototype=new TempCtor()
ctor.prototype.constructor=ctor
}
}
},{}],14:[function(require,module,exports){
'use strict'
var Lock=require('y-lock'),
define=require('u-proto/define'),
pct=require('pct'),
lock=Symbol(),
common=Symbol();
function PathEvent(path,e,max,prefixes){
var remaining,rest,prefix,args,joined;
prefixes=prefixes||[];
prefixes.push('');
Lock.call(this,0);
this[common]=this;
for(prefix of prefixes)e.give(prefix+path,Object.create(this,{
args:{value:''}
}));
if(max!=null){
if(!max){
remaining=[];
rest=[path];
}else{
remaining=path.split('/',max+1);
joined=remaining.join('/');
if(joined==path)rest=[];
else rest=[path.replace(joined+'/','')];
}
}else{
remaining=path.split('/');
rest=[];
}
while(remaining.length>1){
rest.unshift(remaining.pop());
path=remaining.concat('*').join('/');
args=rest.join('/');
for(prefix of prefixes)e.give(prefix+path,Object.create(this,{
args:{value:args}
}));
}
}
PathEvent.prototype=Object.create(Lock.prototype);
PathEvent.prototype[define]('constructor',PathEvent);
PathEvent.prototype[define]({
get common(){return this[common];},
argv:function(n){
if(n!=null)return this.args.split('/',n).map(decode);
return this.args.split('/').map(decode);
}
});
function decode(arg){
return pct.decodeComponent(arg);
}
module.exports=PathEvent;
},{"pct":16,"u-proto/define":18,"y-lock":32}],15:[function(require,module,exports){
function updateMax(target,prop){
target.on(target.eventListened,onEvChange,prop);
target.on(target.eventIgnored,onEvChange,prop);
onEvChange.call(target,null,null,prop);
}
function onEvChange(e,d,prop){
var max=1,
event;
for(event of this.events())max=Math.max(max,
event.split('/').length
);
this[prop]=max-1;
}
module.exports=updateMax;
},{}],16:[function(require,module,exports){
var regExp=/%(([0-7][0-9a-f])|([c-d][0-9a-f]%[8-9a-b][0-9a-f])|(e[0-9a-f]%[8-9a-b][0-9a-f]%[8-9a-b][0-9a-f])|(f[0-7]%[8-9a-b][0-9a-f]%[8-9a-b][0-9a-f]%[8-9a-b][0-9a-f]))?/gi;
function replaceFunc(m,s1){
if(!s1)return '%25';
return m;
}
function fix(uri){
return((uri||'')+'').replace(regExp,replaceFunc);
}
function decode(uri){
return decodeURI(fix(uri));
}
function encode(uri){
return encodeURI(decode(uri));
}
function decodeComponent(uri){
return decodeURIComponent(fix(uri));
}
function encodeComponent(uri){
return encodeURIComponent(decodeComponent(uri));
}
exports.fix=fix;
exports.encode=encode;
exports.decode=decode;
exports.encodeComponent=encodeComponent;
exports.decodeComponent=decodeComponent;
},{}],17:[function(require,module,exports){
var process=module.exports={};
var queue=[];
var draining=false;
var currentQueue;
var queueIndex=-1;
function cleanUpNextTick(){
draining=false;
if(currentQueue.length){
queue=currentQueue.concat(queue);
}else{
queueIndex=-1;
}
if(queue.length){
drainQueue();
}
}
function drainQueue(){
if(draining){
return;
}
var timeout=setTimeout(cleanUpNextTick);
draining=true;
var len=queue.length;
while(len){
currentQueue=queue;
queue=[];
while(++queueIndex<len){
if(currentQueue){
currentQueue[queueIndex].run();
}
}
queueIndex=-1;
len=queue.length;
}
currentQueue=null;
draining=false;
clearTimeout(timeout);
}
process.nextTick=function(fun){
var args=new Array(arguments.length-1);
if(arguments.length>1){
for(var i=1;i<arguments.length;i++){
args[i-1]=arguments[i];
}
}
queue.push(new Item(fun,args));
if(queue.length===1&&!draining){
setTimeout(drainQueue,0);
}
};
function Item(fun,array){
this.fun=fun;
this.array=array;
}
Item.prototype.run=function(){
this.fun.apply(null,this.array);
};
process.title='browser';
process.browser=true;
process.env={};
process.argv=[];
process.version='';
process.versions={};
function noop(){}
process.on=noop;
process.addListener=noop;
process.once=noop;
process.off=noop;
process.removeListener=noop;
process.removeAllListeners=noop;
process.emit=noop;
process.binding=function(name){
throw new Error('process.binding is not supported');
};
process.cwd=function(){return '/'};
process.chdir=function(dir){
throw new Error('process.chdir is not supported');
};
process.umask=function(){return 0;};
},{}],18:[function(require,module,exports){
var define=module.exports=Symbol();
Object.defineProperty(Object.prototype,define,{value:function(obj,desc){
var keys,i,j,d,bag;
if(typeof obj!='object'){
bag=Object.create(null);
bag[obj]={};
bag[obj].value=desc;
desc=arguments[2]||{};
bag[obj].enumerable=desc.enumerable||false;
bag[obj].configurable=desc.configurable||false;
bag[obj].writable=desc.writable||false;
try{Object.defineProperty(this,obj,bag[obj]);}
catch(e){}
return bag;
}
bag=Object.create(null);
desc=desc||{};
keys=Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
for(j=0;j<keys.length;j++){
i=keys[j];
d=Object.getOwnPropertyDescriptor(obj,i);
d.enumerable=desc.enumerable||false;
d.configurable=desc.configurable||false;
if('writable' in d)d.writable=desc.writable||false;
try{Object.defineProperty(this,i,d);}
catch(e){}
bag[i]=d;
}
return bag;
}});
},{}],19:[function(require,module,exports){
var counter=-1,
alphabet='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-+,.<>=!#@?/&%$*:;"\'()[]\\^`{}|~',
seed=Symbol(),
inc=Symbol();
module.exports=function(n1,n2,decimals){
var num;
if(n2==undefined){
if(n1>0){
n2=n1;
n1=0;
}else n2=0;
}else if(typeof n2=='boolean'){
decimals=n2;
if(n1>0){
n2=n1;
n1=0;
}else n2=0;
}
num=n1+Math.random()*(n2-n1);
if(!decimals)num=Math.floor(num);
return num;
}
function getRandBase(b,n,max){
var result,mod;
n=(n!=null)?n:Math.floor(Math.random()*1e15);
if(!n)return '0';
if(b>36){
result='';
while(n>0){
mod=n % b;
n=Math.floor(n/b);
result=alphabet[mod % alphabet.length]+result;
if(result.length==max)return result;
}
}else result=n.toString(b);
if(max)return result.substring(0,max)
return result;
}
module.exports.string=function(n,base,useDate){
var str='';
if(n==null)n=10;
if(typeof base!='number'){
useDate=base;
base=62;
}
if(useDate){
str+=getRandBase(base,Date.now(),5);
str=str.substring(Math.max(str.length-n,0));
}
while(str.length<n)str+=getRandBase(base,null,n-str.length);
return str;
};
module.exports.unique=function(n){
counter=(counter+1)%1e15;
return getRandBase(62,counter)+'-'+getRandBase(62,Date.now(),5)+'-'+module.exports.string(n||5,62);
};
module.exports.generator=function(s){
var ret={};
ret[seed]=Math.abs(typeof s=='number'?s:Date.now());
ret[inc]=((ret[seed]+1)*2+ret[seed])% 1e3;
ret.next=next;
return ret;
};
function next(){
var x;
x=Math.sin(this[seed]=(this[seed]+this[inc])%1e15)*1e6;
return{value:x-Math.floor(x)};
};
},{}],20:[function(require,module,exports){
(function(global){
var walk=require('y-walk'),
Resolver=require('y-resolver'),
Emitter=require('y-emitter'),
print,
process=global.process,
performance=global.performance,
code=0,
pending=[],
done=new Resolver(),
test;
global.__U_TEST_REMAINING__=0;
function Node(info){
Emitter.Hybrid.call(this);
this.info=info;
Object.defineProperty(this,'parent',{
writable:true,
enumerable:false,
configurable:false
});
this.children=[];
this.parent=null;
this.pending=0;
this.errored=0;
this.error=null;
this.t=null;
this.t0=null;
this.t1=null;
}
Node.prototype=Object.create(Emitter.Hybrid.prototype);
Node.prototype.setParent=function(parent){
parent.children.push(this);
this.parent=parent;
}
Node.prototype.resolve=function(error){
if(!error)return;
if(this.error)return;
code=1;
this.error=error;
if(this.parent){
this.parent.errored++;
this.parent.resolve(error);
}
}
Node.prototype.toString=function(){
return this.info;
}
function getTime(){
var now;
if(process){
now=process.hrtime();
return now[0]*1e3+now[1]*1e-6;
}
if(performance)return performance.now();
return Date.now();
}
Node.prototype.start=function(){
this.t0=getTime();
if(this.is('started'))return;
this.set('started');
this.set('done');
if(this.parent){
this.parent.unset('done');
this.parent.pending++;
}
pending.push(this);
};
Node.prototype.end=function(){
var i;
if(this.is('finished'))return;
this.set('finished');
this.t1=getTime();
this.t=this.t1-this.t0;
i=pending.indexOf(this);
pending.splice(i,1);
if(!pending.length)setTimeout(resolveDone,0);
if(this.parent){
if(--this.parent.pending==0)this.parent.set('done');
}
};
module.exports=test=walk.wrap(function*(info,generator,args,thisArg){
var node=new Node(info),
ret,error,stack,i,xhr;
stack=walk.getStack();
for(i=stack.length-1;i>=0;i--)if(stack[i]instanceof Node){
node.setParent(stack[i]);
break;
}
if(!node.parent)__U_TEST_REMAINING__++;
node.start();
try{ret=yield Resolver.race([
walk.trace(node,generator,args||[],thisArg||this),
node.until('finished')
]);}
catch(e){error=e;}
yield node.until('done');
node.resolve(error);
node.end();
if(!node.parent){
if(global.__U_TEST_REMOTE__&&global.XMLHttpRequest){
xhr=new XMLHttpRequest();
xhr.onload=notifyRemote;
xhr.open('POST',__U_TEST_REMOTE__,true);
xhr.setRequestHeader('Content-Type','application/json');
xhr.send(JSON.stringify(node));
}
print(node);
}
return ret;
});
test.done=done.yielded;
test.log=function(str){
str='# '+str.replace(/\n/g,'\n# ');
console.log(str);
if(global.__U_TEST_REMOTE__&&global.XMLHttpRequest){
xhr=new XMLHttpRequest();
xhr.open('POST',__U_TEST_REMOTE__,true);
xhr.setRequestHeader('Content-Type','application/json');
xhr.send(JSON.stringify(str));
}
};
Object.defineProperty(Error.prototype,'toJSON',{
value:function(){
return{
message:this.message,
name:this.name,
stack:this.stack
};
},
configurable:true,
writable:true
});
function notifyRemote(){
if(!--__U_TEST_REMAINING__){
xhr=new XMLHttpRequest();
xhr.open('POST',__U_TEST_REMOTE__+'?finish',true);
xhr.setRequestHeader('Content-Type','application/json');
xhr.send(JSON.stringify(window.__coverage__||null));
}
}
function resolveDone(){
if(!pending.length)done.accept();
}
print=require('./main/print.js');
Object.defineProperty(test,'running',{get:function(){
return pending.length>0;
}});
if(process)process.on('beforeExit',function(){
var i,p;
function endMe(ev,d){
this.resolve('Unfinished test');
this.end();
}
if(pending.length>0){
p=pending.slice();
for(i=0;i<p.length;i++)p[i].once('done',endMe);
print.check();
}
if(code)process.exit(code);
});
}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"./main/print.js":21,"y-emitter":31,"y-resolver":55,"y-walk":87}],21:[function(require,module,exports){
(function(global){
var _default=require('./print/default.js'),
tap=require('./print/tap.js'),
junit=require('./print/junit.js'),
process=global.process,
trees=[],
endTO,options,container,
subcontainer,test,printer,old;
if(process){
options={
showErrors:process.env.showErrors=='true'||process.env.e=='',
showDetails:process.env.showDetails=='true'||process.env.d=='',
showCompleted:process.env.showCompleted=='true'||process.env.c=='',
showTime:process.env.showTime=='true'||process.env.t=='',
syntax:process.env.syntax||process.env.s||'console',
indicator:process.env.indicator||process.env.i||'tick'
};
if(process.env.CIRCLE_TEST_REPORTS)printer=require('./print/circle.js');
else if(process.env.tap=='')printer=tap;
else if(process.env.junit=='')printer=junit;
else printer=_default;
process.stdout.write(printer.before(options));
}else(function(){
var errorsButton,
detailsButton,
timeButton,
completedButton;
console.log(navigator.userAgent+'\n');
console.log(tap.before({syntax:'console'}).replace(/\n$/,''));
options={
showErrors:false,
showDetails:false,
showCompleted:false,
syntax:'html',
indicator:'tick'
};
container=document.createElement('div');
subcontainer=document.createElement('div');
subcontainer.style.whiteSpace='pre';
subcontainer.style.fontFamily='monospace';
container.appendChild(subcontainer);
container.appendChild(document.createElement('br'));
errorsButton=document.createElement('input');
errorsButton.type='checkbox';
errorsButton.onclick=function(){
options.showErrors=this.checked;
showHTML();
};
container.appendChild(errorsButton);
container.appendChild(document.createTextNode('Errors'));
container.appendChild(document.createElement('br'));
detailsButton=document.createElement('input');
detailsButton.type='checkbox';
detailsButton.onclick=function(){
options.showDetails=this.checked;
showHTML();
};
container.appendChild(detailsButton);
container.appendChild(document.createTextNode('Details'));
container.appendChild(document.createElement('br'));
timeButton=document.createElement('input');
timeButton.type='checkbox';
timeButton.onclick=function(){
options.showTime=this.checked;
showHTML();
};
container.appendChild(timeButton);
container.appendChild(document.createTextNode('Elapsed time'));
container.appendChild(document.createElement('br'));
completedButton=document.createElement('input');
completedButton.type='checkbox';
completedButton.onclick=function(){
options.showCompleted=this.checked;
showHTML();
};
container.appendChild(completedButton);
container.appendChild(document.createTextNode('Number of completed tests'));
container.appendChild(document.createElement('br'));
document.body.appendChild(container);
})();
function showHTML(){
subcontainer.innerHTML=_default.before(options);
for(i=0;i<trees.length;i++){
subcontainer.innerHTML+=_default(trees[i],options);
}
subcontainer.innerHTML+=_default.after(options);
}
function checkEnd(){
if(!test.running){
if(process)process.stdout.write(printer.after(options));
else{
console.log(tap.after({syntax:'console'}).replace(/\n$/,'')+'\n');
}
}
}
module.exports=function(tree){
var i;
clearTimeout(endTO);
endTO=setTimeout(checkEnd);
if(process)process.stdout.write(printer(tree,options));
else{
console.log(tap(tree,{syntax:'console'}).replace(/\n$/,''));
trees.push(tree);
showHTML();
}
};
module.exports.check=function(){
checkEnd();
};
test=require('../main.js');
}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"../main.js":20,"./print/circle.js":22,"./print/default.js":23,"./print/junit.js":24,"./print/tap.js":26}],22:[function(require,module,exports){
(function(process){
var junit=require('./junit.js'),
rand=require('u-rand'),
_default=require('./default.js'),
trees=[];
module.exports=function(tree,options){
junit(tree,options);
return _default(tree,options);
};
module.exports.before=function(options){
junit.before(options);
return _default.before(options);
};
module.exports.after=function(options){
var fs=require('fs');
try{fs.mkdirSync(process.env.CIRCLE_TEST_REPORTS+'/u-test');}
catch(e){}
fs.writeFileSync(
process.env.CIRCLE_TEST_REPORTS+'/u-test/'+rand.unique()+'.xml',
junit.after(options)
);
return _default.after(options);
};
}).call(this,require('_process'))
},{"./default.js":23,"./junit.js":24,"_process":17,"fs":5,"u-rand":19}],23:[function(require,module,exports){
var syntax=require('./syntax.js');
function getOk(options){
return syntax.green('✓',options.syntax);
}
function getNok(options){
return syntax.red('✗',options.syntax);
}
function getTime(node,options){
if(options.showTime)return ' ('+node.t.toFixed(2)+'ms'+')';
return '';
}
function getCompleted(node,options){
var ok=0,i;
if(!options.showCompleted)return '';
if(!node.children.length)return '';
if(!node.error)return '['+node.children.length+'/'+node.children.length+'] ';
for(i=0;i<node.children.length;i++)if(!node.children[i].error)ok++;
return '['+ok+'/'+node.children.length+'] ';
}
function get(node,offset,options){
var txt=offset,
stack,i;
offset='  '+offset;
txt+=getCompleted(node,options)+node.info;
if(!node.error){
txt+=' '+getOk(options)+getTime(node,options)+syntax.getNL(options.syntax);
if(options.showDetails)for(i=0;i<node.children.length;i++)txt+=get(node.children[i],offset,options);
}else{
txt+=' '+getNok(options)+syntax.getNL(options.syntax);
if(!node.errored){
if(options.showErrors){
stack=node.error.stack;
if(stack){
if(node.error.message){
stack=stack.replace(node.error.name+': '+node.error.message,'');
stack=node.error.name+': '+node.error.message+stack.replace(/\n\s*/g,'\n  ');
}else{
stack=stack.replace(node.error.name+'\n','');
stack=node.error.name+'\n  '+stack.replace(/\n\s*/g,'\n  ');
}
stack=stack.replace(/\s*$/,'');
txt+=offset+stack.replace(/\n/g,syntax.getNL(options.syntax)+offset)+syntax.getNL(options.syntax);
}else txt+=offset+(node.error+'').replace(/\n/g,syntax.getNL(options.syntax)+offset)+syntax.getNL(options.syntax);
}
}else for(i=0;i<node.children.length;i++)txt+=get(node.children[i],offset,options);
}
return txt;
}
module.exports=function(tree,options){
options=options||{};
return get(tree,'',options);
};
module.exports.before=module.exports.after=function(){return '';}
},{"./syntax.js":25}],24:[function(require,module,exports){
var syntax=require('./syntax.js'),
trees=[];
module.exports=function(tree,options){
trees.push(tree);
return '';
};
module.exports.before=function(options){
return '';
};
module.exports.after=function(options){
var ret='',
failures=0,
errors=0,
t=0,
tree;
for(tree of trees){
t+=(tree.t1-tree.t0)/1000;
if(!tree.error)ret+=`  <testcase classname="" name="${tree.info.replace(/&/g,'&amp;').replace(/"/g,'\\"')}" time="${(tree.t1 - tree.t0)/1000}" />${syntax.getNL(options.syntax)}`;
else{
if(tree.error.name=='AssertionError'){
failures++;
ret+=`  <testcase classname="" name="${tree.info.replace(/&/g,'&amp;').replace(/"/g,'\\"')}" time="${(tree.t1 - tree.t0)/1000}">${syntax.getNL(options.syntax)}`;
ret+=`    <failure message="${tree.error.message.replace(/&/g,'&amp;').replace(/"/g,'\\"')}">${tree.error.stack.replace(/&/g,'&amp;').replace('<','&lt;').replace('>','&gt;')}</failure>${syntax.getNL(options.syntax)}`;
ret+=`  </testcase>${syntax.getNL(options.syntax)}`;
}else{
errors++;
ret+=`  <testcase classname="" name="${tree.info.replace(/&/g,'&amp;').replace(/"/g,'\\"')}" time="${(tree.t1 - tree.t0)/1000}">${syntax.getNL(options.syntax)}`;
ret+=`    <error message="${tree.error.message.replace(/&/g,'&amp;').replace(/"/g,'\\"')}">${tree.error.stack.replace(/&/g,'&amp;').replace('<','&lt;').replace('>','&gt;')}</error>${syntax.getNL(options.syntax)}`
ret+=`  </testcase>${syntax.getNL(options.syntax)}`;
}
}
}
ret=`<testsuite errors="${errors}" failures="${failures}" name="u-test" skips="0" tests="${trees.length}" time="${t}">${syntax.getNL(options.syntax)}${ret}</testsuite>${syntax.getNL(options.syntax)}`;
return ret;
};
},{"./syntax.js":25}],25:[function(require,module,exports){
exports.getNL=function(syntax){
switch(syntax){
case 'html':return '<br>';
default:return '\n';
}
}
exports.red=function(txt,syntax){
switch(syntax){
case 'md':return txt;
case 'html':return '<span style="color: red;">'+txt+'</span>';
default:return '\x1B[31m'+txt+'\x1B[39m';
}
}
exports.green=function(txt,syntax){
switch(syntax){
case 'md':return txt;
case 'html':return '<span style="color: green;">'+txt+'</span>';
default:return '\x1B[32m'+txt+'\x1B[39m';
}
}
},{}],26:[function(require,module,exports){
var syntax=require('./syntax.js'),
seq;
module.exports=function(tree,options){
var msg;
if(tree.error)msg='not ok '+ ++seq;
else msg='ok '+ ++seq;
msg+=' - '+tree.info+syntax.getNL(options.syntax);
return msg;
};
module.exports.before=function(options){
seq=0;
return 'TAP version 13'+syntax.getNL(options.syntax);
};
module.exports.after=function(options){
return '1..'+seq+syntax.getNL(options.syntax);
};
},{"./syntax.js":25}],27:[function(require,module,exports){
var pct=require('pct'),
Target=require('y-emitter').Target,
define=require('u-proto/define'),
walk=require('y-walk'),
strings=Symbol(),
regExps=Symbol();
function UrlRewriter(){
this[strings]=new Map();
this[regExps]=new Map();
Target.apply(this,arguments);
}
UrlRewriter.prototype=Object.create(Target.prototype);
UrlRewriter.prototype[define]({
constructor:UrlRewriter,
compute:function(path,info){
var strs=this[strings],
regs=this[regExps],
prev,v,e;
path=this.format(path);
do{
prev=path;
if((v=strs.get(path))&&v[1].call(this,info)){
path=this.format(v[0]);
}
for(e of regs)if((v=e[1])[1].call(this,info)){
path=this.format(path.replace(e[0],v[0]));
}
}while(prev!=path);
return path;
},
rewrite:function(from,to,test){
var map;
test=test||OK;
if(from instanceof RegExp)map=this[regExps];
else map=this[strings];
map.set(from,[to,test]);
},
unrewrite:function(from){
var map;
if(from instanceof RegExp)map=this[regExps];
else map=this[strings];
map.delete(from);
},
format:function(url,q,f){
var m=((url||'')+'').match(/([^#\?]*)(?:\?([^#]*))?(?:#(.*))?/),
path=m[1]||'',
query=m[2]||'',
fragment=m[3]||'',
segments,result,
segment,keys,i,j;
if(typeof q!='object'){
f=q;
q=null;
}
if(q){
if(query)query+='&';
keys=Object.keys(q);
for(j=0;j<keys.length;j++){
i=keys[j];
if(i.charAt(0)=='_')continue;
query+=pct.encodeComponent(i)+'='+pct.encodeComponent(q[i])+'&';
}
query=query.slice(0,-1);
}
if(f)fragment=f;
if(/\/\.\.?(\/|$)/.test(path)){
segments=path.split('/',this.maxSlashes||1000);
result=[];
segment=segments[segments.length-1];
if(segment=='.'||segment=='..')segments.push('');
while((segment=segments.shift())!=null)switch(segment){
case '..':
if(result.length>1)result.pop();
case '.':
break;
default:
result.push(segment);
break;
}
url=result.join('/');
}else url=path;
if(query)url+='?'+query;
if(fragment)url+='#'+fragment;
return pct.decode(url);
},
take:function(){
return this.on(arguments[0],taker,arguments[1],arguments);
},
capture:function(){
return this.on(arguments[0],capturer,arguments[1],arguments);
}
});
function*taker(e,d,cb,args){
yield e.take();
args[0]=e;
args[1]=d;
if(cb)walk(cb,args,this);
}
function*capturer(e,d,cb,args){
yield e.capture();
args[0]=e;
args[1]=d;
if(cb)walk(cb,args,this);
}
function OK(){
return true;
}
module.exports=UrlRewriter;
},{"pct":16,"u-proto/define":18,"y-emitter":31,"y-walk":87}],28:[function(require,module,exports){
module.exports=function isBuffer(arg){
return arg&&typeof arg==='object'
&&typeof arg.copy==='function'
&&typeof arg.fill==='function'
&&typeof arg.readUInt8==='function';
}
},{}],29:[function(require,module,exports){
(function(process,global){
var formatRegExp=/%[sdj%]/g;
exports.format=function(f){
if(!isString(f)){
var objects=[];
for(var i=0;i<arguments.length;i++){
objects.push(inspect(arguments[i]));
}
return objects.join(' ');
}
var i=1;
var args=arguments;
var len=args.length;
var str=String(f).replace(formatRegExp,function(x){
if(x==='%%')return '%';
if(i>=len)return x;
switch(x){
case '%s':return String(args[i++]);
case '%d':return Number(args[i++]);
case '%j':
try{
return JSON.stringify(args[i++]);
}catch(_){
return '[Circular]';
}
default:
return x;
}
});
for(var x=args[i];i<len;x=args[++i]){
if(isNull(x)||!isObject(x)){
str+=' '+x;
}else{
str+=' '+inspect(x);
}
}
return str;
};
exports.deprecate=function(fn,msg){
if(isUndefined(global.process)){
return function(){
return exports.deprecate(fn,msg).apply(this,arguments);
};
}
if(process.noDeprecation===true){
return fn;
}
var warned=false;
function deprecated(){
if(!warned){
if(process.throwDeprecation){
throw new Error(msg);
}else if(process.traceDeprecation){
console.trace(msg);
}else{
console.error(msg);
}
warned=true;
}
return fn.apply(this,arguments);
}
return deprecated;
};
var debugs={};
var debugEnviron;
exports.debuglog=function(set){
if(isUndefined(debugEnviron))
debugEnviron=process.env.NODE_DEBUG||'';
set=set.toUpperCase();
if(!debugs[set]){
if(new RegExp('\\b'+set+'\\b','i').test(debugEnviron)){
var pid=process.pid;
debugs[set]=function(){
var msg=exports.format.apply(exports,arguments);
console.error('%s %d: %s',set,pid,msg);
};
}else{
debugs[set]=function(){};
}
}
return debugs[set];
};
function inspect(obj,opts){
var ctx={
seen:[],
stylize:stylizeNoColor
};
if(arguments.length>=3)ctx.depth=arguments[2];
if(arguments.length>=4)ctx.colors=arguments[3];
if(isBoolean(opts)){
ctx.showHidden=opts;
}else if(opts){
exports._extend(ctx,opts);
}
if(isUndefined(ctx.showHidden))ctx.showHidden=false;
if(isUndefined(ctx.depth))ctx.depth=2;
if(isUndefined(ctx.colors))ctx.colors=false;
if(isUndefined(ctx.customInspect))ctx.customInspect=true;
if(ctx.colors)ctx.stylize=stylizeWithColor;
return formatValue(ctx,obj,ctx.depth);
}
exports.inspect=inspect;
inspect.colors={
'bold':[1,22],
'italic':[3,23],
'underline':[4,24],
'inverse':[7,27],
'white':[37,39],
'grey':[90,39],
'black':[30,39],
'blue':[34,39],
'cyan':[36,39],
'green':[32,39],
'magenta':[35,39],
'red':[31,39],
'yellow':[33,39]
};
inspect.styles={
'special':'cyan',
'number':'yellow',
'boolean':'yellow',
'undefined':'grey',
'null':'bold',
'string':'green',
'date':'magenta',
'regexp':'red'
};
function stylizeWithColor(str,styleType){
var style=inspect.styles[styleType];
if(style){
return '\u001b['+inspect.colors[style][0]+'m'+str+
'\u001b['+inspect.colors[style][1]+'m';
}else{
return str;
}
}
function stylizeNoColor(str,styleType){
return str;
}
function arrayToHash(array){
var hash={};
array.forEach(function(val,idx){
hash[val]=true;
});
return hash;
}
function formatValue(ctx,value,recurseTimes){
if(ctx.customInspect&&
value&&
isFunction(value.inspect)&&
value.inspect!==exports.inspect&&
!(value.constructor&&value.constructor.prototype===value)){
var ret=value.inspect(recurseTimes,ctx);
if(!isString(ret)){
ret=formatValue(ctx,ret,recurseTimes);
}
return ret;
}
var primitive=formatPrimitive(ctx,value);
if(primitive){
return primitive;
}
var keys=Object.keys(value);
var visibleKeys=arrayToHash(keys);
if(ctx.showHidden){
keys=Object.getOwnPropertyNames(value);
}
if(isError(value)
&&(keys.indexOf('message')>=0||keys.indexOf('description')>=0)){
return formatError(value);
}
if(keys.length===0){
if(isFunction(value)){
var name=value.name?': '+value.name:'';
return ctx.stylize('[Function'+name+']','special');
}
if(isRegExp(value)){
return ctx.stylize(RegExp.prototype.toString.call(value),'regexp');
}
if(isDate(value)){
return ctx.stylize(Date.prototype.toString.call(value),'date');
}
if(isError(value)){
return formatError(value);
}
}
var base='',array=false,braces=['{','}'];
if(isArray(value)){
array=true;
braces=['[',']'];
}
if(isFunction(value)){
var n=value.name?': '+value.name:'';
base=' [Function'+n+']';
}
if(isRegExp(value)){
base=' '+RegExp.prototype.toString.call(value);
}
if(isDate(value)){
base=' '+Date.prototype.toUTCString.call(value);
}
if(isError(value)){
base=' '+formatError(value);
}
if(keys.length===0&&(!array||value.length==0)){
return braces[0]+base+braces[1];
}
if(recurseTimes<0){
if(isRegExp(value)){
return ctx.stylize(RegExp.prototype.toString.call(value),'regexp');
}else{
return ctx.stylize('[Object]','special');
}
}
ctx.seen.push(value);
var output;
if(array){
output=formatArray(ctx,value,recurseTimes,visibleKeys,keys);
}else{
output=keys.map(function(key){
return formatProperty(ctx,value,recurseTimes,visibleKeys,key,array);
});
}
ctx.seen.pop();
return reduceToSingleString(output,base,braces);
}
function formatPrimitive(ctx,value){
if(isUndefined(value))
return ctx.stylize('undefined','undefined');
if(isString(value)){
var simple='\''+JSON.stringify(value).replace(/^"|"$/g,'')
.replace(/'/g,"\\'")
.replace(/\\"/g,'"')+'\'';
return ctx.stylize(simple,'string');
}
if(isNumber(value))
return ctx.stylize(''+value,'number');
if(isBoolean(value))
return ctx.stylize(''+value,'boolean');
if(isNull(value))
return ctx.stylize('null','null');
}
function formatError(value){
return '['+Error.prototype.toString.call(value)+']';
}
function formatArray(ctx,value,recurseTimes,visibleKeys,keys){
var output=[];
for(var i=0,l=value.length;i<l;++i){
if(hasOwnProperty(value,String(i))){
output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,
String(i),true));
}else{
output.push('');
}
}
keys.forEach(function(key){
if(!key.match(/^\d+$/)){
output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,
key,true));
}
});
return output;
}
function formatProperty(ctx,value,recurseTimes,visibleKeys,key,array){
var name,str,desc;
desc=Object.getOwnPropertyDescriptor(value,key)||{value:value[key]};
if(desc.get){
if(desc.set){
str=ctx.stylize('[Getter/Setter]','special');
}else{
str=ctx.stylize('[Getter]','special');
}
}else{
if(desc.set){
str=ctx.stylize('[Setter]','special');
}
}
if(!hasOwnProperty(visibleKeys,key)){
name='['+key+']';
}
if(!str){
if(ctx.seen.indexOf(desc.value)<0){
if(isNull(recurseTimes)){
str=formatValue(ctx,desc.value,null);
}else{
str=formatValue(ctx,desc.value,recurseTimes-1);
}
if(str.indexOf('\n')>-1){
if(array){
str=str.split('\n').map(function(line){
return '  '+line;
}).join('\n').substr(2);
}else{
str='\n'+str.split('\n').map(function(line){
return '   '+line;
}).join('\n');
}
}
}else{
str=ctx.stylize('[Circular]','special');
}
}
if(isUndefined(name)){
if(array&&key.match(/^\d+$/)){
return str;
}
name=JSON.stringify(''+key);
if(name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)){
name=name.substr(1,name.length-2);
name=ctx.stylize(name,'name');
}else{
name=name.replace(/'/g,"\\'")
.replace(/\\"/g,'"')
.replace(/(^"|"$)/g,"'");
name=ctx.stylize(name,'string');
}
}
return name+': '+str;
}
function reduceToSingleString(output,base,braces){
var numLinesEst=0;
var length=output.reduce(function(prev,cur){
numLinesEst++;
if(cur.indexOf('\n')>=0)numLinesEst++;
return prev+cur.replace(/\u001b\[\d\d?m/g,'').length+1;
},0);
if(length>60){
return braces[0]+
(base===''?'':base+'\n ')+
' '+
output.join(',\n  ')+
' '+
braces[1];
}
return braces[0]+base+' '+output.join(', ')+' '+braces[1];
}
function isArray(ar){
return Array.isArray(ar);
}
exports.isArray=isArray;
function isBoolean(arg){
return typeof arg==='boolean';
}
exports.isBoolean=isBoolean;
function isNull(arg){
return arg===null;
}
exports.isNull=isNull;
function isNullOrUndefined(arg){
return arg==null;
}
exports.isNullOrUndefined=isNullOrUndefined;
function isNumber(arg){
return typeof arg==='number';
}
exports.isNumber=isNumber;
function isString(arg){
return typeof arg==='string';
}
exports.isString=isString;
function isSymbol(arg){
return typeof arg==='symbol';
}
exports.isSymbol=isSymbol;
function isUndefined(arg){
return arg===void 0;
}
exports.isUndefined=isUndefined;
function isRegExp(re){
return isObject(re)&&objectToString(re)==='[object RegExp]';
}
exports.isRegExp=isRegExp;
function isObject(arg){
return typeof arg==='object'&&arg!==null;
}
exports.isObject=isObject;
function isDate(d){
return isObject(d)&&objectToString(d)==='[object Date]';
}
exports.isDate=isDate;
function isError(e){
return isObject(e)&&
(objectToString(e)==='[object Error]'||e instanceof Error);
}
exports.isError=isError;
function isFunction(arg){
return typeof arg==='function';
}
exports.isFunction=isFunction;
function isPrimitive(arg){
return arg===null||
typeof arg==='boolean'||
typeof arg==='number'||
typeof arg==='string'||
typeof arg==='symbol'||
typeof arg==='undefined';
}
exports.isPrimitive=isPrimitive;
exports.isBuffer=require('./support/isBuffer');
function objectToString(o){
return Object.prototype.toString.call(o);
}
function pad(n){
return n<10?'0'+n.toString(10):n.toString(10);
}
var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep',
'Oct','Nov','Dec'];
function timestamp(){
var d=new Date();
var time=[pad(d.getHours()),
pad(d.getMinutes()),
pad(d.getSeconds())].join(':');
return[d.getDate(),months[d.getMonth()],time].join(' ');
}
exports.log=function(){
console.log('%s - %s',timestamp(),exports.format.apply(exports,arguments));
};
exports.inherits=require('inherits');
exports._extend=function(origin,add){
if(!add||!isObject(add))return origin;
var keys=Object.keys(add);
var i=keys.length;
while(i--){
origin[keys[i]]=add[keys[i]];
}
return origin;
};
function hasOwnProperty(obj,prop){
return Object.prototype.hasOwnProperty.call(obj,prop);
}
}).call(this,require('_process'),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"./support/isBuffer":28,"_process":17,"inherits":13}],30:[function(require,module,exports){
var Detacher=require('detacher');
module.exports=function bind(target){
var detachers=new Map(),
link={active:true},
d1,d2,d3,event;
d1=this.target.on(this.target.eventListened,onEL,detachers,target,this,link);
d2=this.target.on(this.target.eventIgnored,onEI,detachers);
d3=target.on(target.stateUnset,onEU,this);
for(event of this.target.events())onEL(event,null,detachers,target,this,link);
return new Detacher(detach,[d1,d2,d3,detachers,link]);
};
function onEL(event,d,detachers,target,emitter,link){
detachers.set(event,
target.on(event,listener,event,emitter,link)
);
}
function onEI(event,d,detachers){
detachers.get(event).detach();
detachers.delete(event);
}
function onEU(state,d,em){
em.unset(state);
}
function*listener(ev,d,en,em,link){
if(this.is(en)){
if(em.target.isNot(en))em.set(en,ev);
else em.set(en,ev);
}else em.give(en,ev);
}
function detach(d1,d2,d3,detachers,link){
var d;
d1.detach();
d2.detach();
d3.detach();
for(d of detachers.values())d.detach();
detachers.clear();
link.active=false;
}
},{"detacher":9}],31:[function(require,module,exports){
var define=require('u-proto/define'),
Resolver=require('y-resolver'),
Yielded=Resolver.Yielded,
walk=require('y-walk'),
Detacher=require('detacher'),
resolver=Symbol(),
notResolver=Symbol(),
status=Symbol(),
target=Symbol(),
emitter=Symbol(),
current=Symbol(),
handle=Symbol(),
queue=Symbol(),
bag,handleEvent;
function Emitter(e,t){
if(e){
this[emitter]=e;
this[target]=t;
}else{
this[target]=new Target();
this[target][emitter]=this;
}
};
Emitter.prototype[define](bag={
get target(){return this[target];},
give:function(event,data){
if(this[emitter])return this[emitter].give(event,data);
if(this.target.is(event))return this.set(event,data);
giveOrQueue(this,event,data);
},
queue:walk.wrap(function*(event,data){
if(this[emitter])return this[emitter].queue(event,data);
if(this.target.is(event))return this.set(event,data);
yield this.target.until(event).listeners.gt(0);
giveOrQueue(this,event,data);
}),
set:function(event,data){
if(this[emitter])return this[emitter].set(event,data);
this[target][status].set(event,Resolver.accept(data));
giveOrQueue(this,event,data);
},
unset:function(event,silent){
var res;
if(this[emitter])return this[emitter].unset(event);
this[target][status].delete(event);
if(this[target][notResolver].has(event)){
res=this[target][notResolver].get(event);
this[target][notResolver].delete(event);
res.accept();
}
if(!silent)this.give(this[target].stateUnset,event);
},
sun:function(state1,state2){
this.unset(state2);
this.set(state1);
},
bind:require('./Emitter/bind.js'),
['3asKNsYzcdGduft']:58
});
function giveOrQueue(em,event,data){
var args,q;
if(em[queue])em[queue].push([em,event,data]);
else{
em[queue]=q=[];
giveIt(em,event,data);
while(args=q.shift())giveIt(...args);
delete em[queue];
}
}
function giveIt(em,event,data){
var tg=em[target],
rs=tg[resolver],
res=rs.get(event),
c;
if(res){
rs.delete(event);
if(res[handle])res[handle].pause();
if(res.yielded.listeners.value>0&&typeof event=='string'){
tg[current]=event;
res.accept(data);
delete tg[current];
if(!tg.listened(event))em.give(tg.eventIgnored,event);
}else res.accept(data);
}
}
function Target(prop){
if(this[resolver])return;
if(prop){
this[emitter]=this[prop]=Object.create(Emitter.prototype);
this[emitter][target]=this;
}
this[resolver]=new Map();
this[notResolver]=new Map();
this[status]=new Map();
}
Target.prototype[define]({
until:function(event){
var yd=this[status].get(event);
if(yd)return yd;
return this.untilNext(event);
},
untilNot:function(event){
var res;
if(this.isNot(event))return Resolver.accept();
if(!this[notResolver].has(event))this[notResolver].set(event,res=new Resolver());
else res=this[notResolver].get(event);
return res.yielded;
},
untilNext:function(event){
var rs=this[resolver],
res=rs.get(event);
if(res)return res.yielded;
rs.set(event,res=new Resolver());
if(typeof event=='string')
res[handle]=handleEvent(event,this[emitter],this,res.yielded.listeners);
return res.yielded;
},
listened:function(event){
res=this[resolver].get(event);
if(!res)return false;
return res.yielded.listeners.value>0;
},
is:function(event){
var yd=this[status].get(event);
return!!(yd&&yd.accepted);
},
isNot:function(event){
var yd=this[status].get(event);
return!(yd&&yd.accepted);
},
walk:function(generator,args){
walk(generator,args,this);
},
on:function(){
var event=arguments[0],
listener=arguments[1],
dArgs=[],
d=new Detacher(pauseIt,dArgs);
arguments[1]=d;
walk(onLoop,[arguments,event,listener,this,dArgs]);
return d;
},
once:function(){
var event=arguments[0],
listener=arguments[1],
dArgs=[],
d=new Detacher(pauseIt,dArgs);
arguments[1]=d;
walk(onceLoop,[arguments,event,listener,this,dArgs]);
return d;
},
events:function(){
return events(this[resolver].keys(),this);
},
eventListened:Symbol(),
eventIgnored:Symbol(),
stateUnset:Symbol(),
['3asKNsYzcdGduft']:57
});
function pauseIt(w){
w.pause();
}
function*events(it,target){
var event;
for(event of it)if(typeof event=='string'&&target.listened(event))yield event;
}
function call(args,listener,tg){
try{walk(listener,args,tg);}
catch(e){}
}
handleEvent=walk.wrap(function*(event,emitter,target,listeners){
while(true){
yield listeners.gt(0);
if(target[current]!=event)emitter.give(target.eventListened,event);
yield listeners.is(0);
if(target[current]!=event)emitter.give(target.eventIgnored,event);
}
});
function*onLoop(args,event,listener,tg,dArgs){
var yd;
dArgs[0]=this;
args[0]=yield tg.until(event);
yd=tg.untilNext(event);
while(true){
call(args,listener,tg);
args[0]=yield yd;
yd=tg.untilNext(event);
}
}
function*onceLoop(args,event,listener,tg,dArgs){
dArgs[0]=this;
args[0]=yield tg.until(event);
call(args,listener,tg);
}
function HybridTarget(e){
e=e||new Emitter();
this[emitter]=e;
this[target]=e.target;
}
HybridTarget.prototype=Object.create(Target.prototype);
HybridTarget.prototype[define]('constructor',HybridTarget);
HybridTarget.prototype[define]('3asKNsYzcdGduft',59);
HybridTarget.prototype[define](bag);
HybridTarget.prototype[define]({
until:function(event){return this[target].until(event);},
untilNot:function(event){return this[target].untilNot(event);},
untilNext:function(event){return this[target].untilNext(event);},
listened:function(event){return this[target].listened(event);},
is:function(event){return this[target].is(event);},
isNot:function(event){return this[target].isNot(event);},
events:function(){return this[target].events();}
});
module.exports=Emitter;
Emitter.Target=Target;
Emitter.Hybrid=HybridTarget;
},{"./Emitter/bind.js":30,"detacher":9,"u-proto/define":18,"y-resolver":55,"y-walk":87}],32:[function(require,module,exports){
var Resolver=require('y-resolver'),
define=require('u-proto/define'),
queue=Symbol(),
amount=Symbol();
function Lock(n){
if(!arguments.length)n=1;
else n=fix(n);
this[queue]=[];
this[amount]=n;
}
Lock.prototype[define]({
give:function(n){
var q=this[queue],
elem;
if(!arguments.length)n=1;
else n=fix(n);
if(!q.length){
this[amount]+=n;
return;
}
elem=q[0];
while(elem&&n>=elem[0]){
q.shift();
n-=elem[0];
elem[1].accept();
elem=q[0];
}
if(!elem){
this[amount]+=n;
return;
}
elem[0]-=n;
},
take:function(n){
var a=this[amount],
res;
if(typeof n!='number'){
data=n;
n=1;
}else n=fix(n);
if(n<=a){
this[amount]-=n;
return Resolver.accept();
}
this[amount]=0;
n-=a;
this[queue].push([n,res=new Resolver()]);
return res.yielded;
},
capture:function(n){
var a=this[amount],
res;
if(typeof n!='number'){
data=n;
n=1;
}else n=fix(n);
if(n<=a){
this[amount]-=n;
return Resolver.accept();
}
this[amount]=0;
n-=a;
this[queue].unshift([n,res=new Resolver()]);
return res.yielded;
},
'3asKNsYzcdGduft':60
});
function fix(n){
return n>=0?n:0;
}
module.exports=Lock;
},{"u-proto/define":18,"y-resolver":36}],33:[function(require,module,exports){
var Detacher=require('detacher');
function resolve(res,yd,d){
if(!d.active)return;
if(yd.accepted)res.accept(yd.value);
else res.reject(yd.error);
}
function bind(yd){
var d=new Detacher();
if(yd.done)resolve(this,yd,d);
else yd.listen(resolve,[this,yd,d]);
return d;
}
module.exports=bind;
},{"detacher":9}],34:[function(require,module,exports){
var Resolver=require('../main.js');
module.exports=function(){
var resolver=new Resolver();
this.listen(listener,[resolver,arguments]);
return resolver.yielded;
};
function listener(resolver,args){
if(this.rejected)resolver.reject(this.error);
else resolver.accept(this.value.apply(this,args));
}
},{"../main.js":36}],35:[function(require,module,exports){
var tick=require('y-timers/tick'),
Resolver=require('../main.js');
function then(onFulfilled,onRejected){
var r=new Resolver();
if(this.done)handleThen.call(this,onFulfilled,onRejected,r);
else this.listen(handleThen,[onFulfilled,onRejected,r]);
return r.yielded;
}
function handleThen(onFulfilled,onRejected,r){
if(this.accepted){
if(typeof onFulfilled=='function')tick().listen(call,[onFulfilled,this.value,r,this]);
else r.accept(this.value);
}else{
if(typeof onRejected=='function')tick().listen(call,[onRejected,this.error,r,this]);
else r.reject(this.error);
}
}
function call(f,arg,r){
var ignore=false,
v,then;
try{
v=f(arg);
if(v==r.yielded)return r.reject(new TypeError());
try{
if(v&&(
typeof v=='object'||
typeof v=='function'
)&&typeof(then=v.then)=='function'){
then.call(v,function(value){
if(ignore)return;
ignore=true;
call(PT,value,r);
},function(error){
if(ignore)return;
ignore=true;
r.reject(error);
});
return;
}
}catch(e){return ignore?null:r.reject(e);}
r.accept(v);
}catch(e){r.reject(e);}
}
function PT(v){return v;}
module.exports=then;
},{"../main.js":36,"y-timers/tick":81}],36:[function(require,module,exports){
var define=require('u-proto/define'),
Detacher=require('detacher'),
done=Symbol(),
accepted=Symbol(),
rejected=Symbol(),
value=Symbol(),
error=Symbol(),
yielded=Symbol(),
listeners=Symbol(),
count=Symbol(),
timeout=Symbol(),
isYielded='2Alqg4pLDZMZl8Y',
getter='4siciY0dau6kkit',
deferrer='1KlIC6JgRPjS0vm',
stackSize=0,
Setter,bag;
function Resolver(counter){
this[yielded]=new Yielded(null,counter);
}
module.exports=Resolver;
Resolver.Yielded=Yielded;
Resolver.Hybrid=HybridYielded;
Yielded.get=getYielded;
Yielded.is=isYieldedFunc;
Yielded.getter=getter;
Yielded.deferrer=deferrer;
Resolver.accept=accept;
Resolver.reject=reject;
Resolver.chain=chain;
Resolver.race=race;
Resolver.all=all;
require('./proto/Object.js');
require('./proto/Array.js');
require('./proto/Promise.js');
require('./proto/stream/Readable.js');
require('./proto/stream/Writable.js');
Setter=require('y-setter');
Resolver.prototype[define](bag={
get yielded(){return this[yielded];},
accept:function(data){
var yd=this[yielded],
ls=yd[listeners],
args;
if(yd[done])return;
yd[done]=true;
yd[accepted]=true;
yd[value]=data;
for(args of ls){
callCb(args,yd);
detach(args,yd);
}
},
reject:function(e){
var yd=this[yielded],
ls=yd[listeners],
args;
if(yd[done])return;
yd[timeout]=setTimeout(throwError,0,e);
yd[done]=true;
yd[rejected]=true;
yd[error]=e;
for(args of ls){
callCb(args,yd);
detach(args,yd);
}
},
bind:require('./Resolver/bind.js')
});
function callCb(args,yd){
var cb=args[0],
ag=args[1]||[],
th=args[2]||yd;
if(!stackSize)setTimeout(resetStackSize,0);
stackSize++;
if(stackSize>500)return setTimeout(callCb,0,args,yd);
try{cb.apply(th,ag);}
catch(e){setTimeout(throwError,0,e);}
stackSize--;
}
function resetStackSize(){
stackSize=0;
}
function throwError(e){
if(!Resolver.doNotThrow)throw e;
}
function Yielded(prop,counter){
if(this[listeners])return;
if(prop){
this[prop]=Object.create(Resolver.prototype);
this[prop][yielded]=this;
}
this[done]=false;
this[accepted]=false;
this[rejected]=false;
this[listeners]=new Set();
this[count]=counter||new Setter();
if(this[count].value==null)this[count].value=0;
}
Yielded.prototype[define](isYielded,true);
Yielded.prototype[define]({
get listeners(){return this[count].getter;},
get done(){return this[done];},
get accepted(){
if(this[timeout]!=null)clearTimeout(this[timeout]);
return this[accepted];
},
get rejected(){
if(this[timeout]!=null)clearTimeout(this[timeout]);
return this[rejected];
},
get value(){return this[value];},
get error(){
if(this[timeout]!=null)clearTimeout(this[timeout]);
return this[error];
},
listen:function(){
var d=new Detacher(detach,[arguments,this]);
if(this[done]){
callCb(arguments,this);
return d;
}
this[listeners].add(arguments);
this[count].value++;
return d;
},
call:require('./Yielded/call.js'),
then:require('./Yielded/then.js'),
['3asKNsYzcdGduft']:51
});
function detach(args,yd){
if(yd[listeners].delete(args))yd[count].value--;
}
function getYielded(obj){
while(!(obj&&obj[isYielded])){
if(!obj)return accept(obj);
if(obj[deferrer])obj=obj[deferrer]();
else if(obj[getter])obj=obj[getter]();
else return accept(obj);
}
return obj;
}
function isYieldedFunc(yd){
return yd&&yd[isYielded];
}
function HybridYielded(){
this[yielded]=this;
Yielded.call(this);
}
HybridYielded.prototype=Object.create(Yielded.prototype);
HybridYielded.prototype[define]('constructor',HybridYielded);
HybridYielded.prototype[define](bag);
function chain(){
var last=arguments[arguments.length-1][yielded],
i;
arguments[arguments.length-1][yielded]=arguments[0][yielded];
for(i=0;i<arguments.length-2;i++)arguments[i][yielded]=arguments[i+1][yielded];
arguments[arguments.length-2][yielded]=last;
}
function accept(v){
var resolver=new Resolver();
resolver.accept(v);
return resolver.yielded;
}
function reject(e){
var resolver=new Resolver();
resolver.reject(e);
return resolver.yielded;
}
function race(it){
var res=new Resolver(),
yd;
for(yd of it)res.bind(getYielded(yd));
return res.yielded;
}
function all(it){
var res=new Resolver(),
ctx={},
i=0,
yd;
ctx.remaining=1;
ctx.result=[];
for(yd of it){
ctx.remaining++;
getYielded(yd).listen(raceIt,[ctx,res,i]);
i++;
}
if(!--ctx.remaining)res.accept(ctx.result);
return res.yielded;
}
function raceIt(ctx,res,i){
if(this.accepted){
ctx.result[i]=this.value;
if(!--ctx.remaining)res.accept(ctx.result);
}else res.reject(this.error);
}
},{"./Resolver/bind.js":33,"./Yielded/call.js":34,"./Yielded/then.js":35,"./proto/Array.js":37,"./proto/Object.js":38,"./proto/Promise.js":39,"./proto/stream/Readable.js":40,"./proto/stream/Writable.js":41,"detacher":9,"u-proto/define":18,"y-setter":42}],37:[function(require,module,exports){
var define=require('u-proto/define'),
Resolver=require('../main.js'),
getter=Resolver.Yielded.getter,
run;
module.exports=function(){
var arr=[],
res,errors,i,ctx;
if(!this.length)return Resolver.accept(arr);
res=new Resolver();
errors=[];
ctx={
remaining:this.length
};
for(i=0;i<this.length;i++)this[i].listen(run,[res,arr,errors,ctx,i]);
return res.yielded;
};
function run(res,arr,errors,ctx,i){
var error;
if(this.accepted)arr[i]=this.value;
else{
errors[i]=this.error;
ctx.lastError=this.error;
}
if(!--ctx.remaining){
if(ctx.lastError){
error=new Error(ctx.lastError.message);
error.stack=ctx.lastError.stack;
error.errors=errors;
error.values=arr;
res.reject(error);
}else res.accept(arr);
}
}
if(!Array.prototype.hasOwnProperty(getter))
Array.prototype[define](getter,module.exports,{writable:true});
},{"../main.js":36,"u-proto/define":18}],38:[function(require,module,exports){
var define=require('u-proto/define'),
Collection=require('detacher/collection'),
Resolver=require('../main.js'),
fromReadableStream=require('./stream/Readable.js'),
fromWritableStream=require('./stream/Writable.js'),
fromPromise=require('./Promise.js'),
getter=Resolver.Yielded.getter,
race;
module.exports=function(){
var c=new Collection(),
keys,ctx,i,j,res,errors;
if(typeof this.toPromise=='function')return fromPromise.call(this.toPromise());
if(typeof this.then=='function')return fromPromise.call(this);
if(typeof this.pipe=='function')return fromReadableStream.call(this);
if(typeof this.end=='function')return fromWritableStream.call(this);
if(this.constructor!=Object)return Resolver.accept(this);
keys=Object.keys(this);
if(!keys.length)return Resolver.accept({});
res=new Resolver();
errors={};
ctx={
remaining:keys.length
};
for(j=0;j<keys.length;j++){
i=keys[j];
c.add(
this[i].listen(race,[res,errors,c,ctx,i])
);
}
return res.yielded;
};
function race(res,errors,c,ctx,i){
var error;
if(this.accepted){
c.detach();
res.accept({[i]:this.value});
}else{
if(!ctx.firstError)ctx.firstError=this.error;
errors[i]=this.error;
if(!--ctx.remaining){
error=new Error(ctx.firstError.message);
error.stack=ctx.firstError.stack;
error.errors=errors;
res.reject(error);
}
}
}
if(!Object.prototype.hasOwnProperty(getter))
Object.prototype[define](getter,module.exports,{writable:true});
},{"../main.js":36,"./Promise.js":39,"./stream/Readable.js":40,"./stream/Writable.js":41,"detacher/collection":8,"u-proto/define":18}],39:[function(require,module,exports){
(function(global){
var define=require('u-proto/define'),
Resolver=require('../main.js'),
getter=Resolver.Yielded.getter,
yielded=Symbol();
module.exports=function(){
var resolver;
if(this[yielded])return this[yielded];
resolver=new Resolver();
this.then(function(v){resolver.accept(v);},function(e){resolver.reject(e);});
return this[yielded]=resolver.yielded;
};
if(global.Promise&&!Promise.prototype.hasOwnProperty(getter))
Promise.prototype[define](getter,module.exports,{writable:true,configurable:true});
}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"../main.js":36,"u-proto/define":18}],40:[function(require,module,exports){
(function(global,Buffer){
var define=require('u-proto/define'),
Resolver=require('../../main.js'),
resolver=Symbol(),
parts=Symbol(),
str=Symbol(),
size=Symbol(),
getter=Resolver.Yielded.getter;
module.exports=function(){
if(!this[resolver]){
this[parts]=[];
this[resolver]=new Resolver();
this[size]=0;
this.on('data',onData);
this.once('error',onceError);
this.once('end',onceEnd);
}
return this[resolver].yielded;
};
function onData(chunk){
if(this.maxSize!=null&&this[size]+chunk.length>this.maxSize)return;
this[size]+=chunk.length;
if(this[str]!=null)this[str]+=chunk;
else if(typeof chunk=='string')this[str]=Buffer.concat(this[parts]).toString()+chunk;
else this[parts].push(chunk);
}
function onceError(e){
this.removeListener('end',onceEnd);
this.removeListener('data',onData);
this[resolver].reject(e);
}
function onceEnd(){
this.removeListener('error',onceError);
this.removeListener('data',onData);
this[resolver].accept(this[str]==null?Buffer.concat(this[parts]):this[str]);
}
if(global.process&&!require('str'+'eam').Readable.prototype.hasOwnProperty(getter))
require('str'+'eam').Readable.prototype[define](getter,module.exports,{writable:true});
}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{},require("buffer").Buffer)
},{"../../main.js":36,"buffer":6,"u-proto/define":18}],41:[function(require,module,exports){
(function(global){
var define=require('u-proto/define'),
Resolver=require('../../main.js'),
resolver=Symbol(),
getter=Resolver.Yielded.getter;
module.exports=function(){
if(!this[resolver]){
this[resolver]=new Resolver();
this.once('error',onceError);
this.once('finish',onceFinish);
}
return this[resolver].yielded;
};
function onceError(e){
this.removeListener('finish',onceFinish);
this[resolver].reject(e);
}
function onceFinish(){
this.removeListener('error',onceError);
this[resolver].accept();
}
if(global.process&&!require('str'+'eam').Writable.prototype.hasOwnProperty(getter))
require('str'+'eam').Writable.prototype[define](getter,module.exports,{writable:true});
}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"../../main.js":36,"u-proto/define":18}],42:[function(require,module,exports){
var getY=Symbol(),
getV=Symbol(),
getF=Symbol(),
value=Symbol(),
frozen=Symbol(),
getter=Symbol(),
setter=Symbol(),
resolver=Symbol(),
isSetter='o5CqYkOh5ezPpwT',
isGetter='3tPmTSBio57bVrt',
Resolver,walk,Detacher,define,wait,
bag,Yielded;
module.exports=Setter;
Setter.Getter=Getter;
Setter.Hybrid=Hybrid;
Setter.is=isSetterFn;
Getter.is=isGetterFn;
Getter.transform=transform;
Getter.concat=concat;
Resolver=require('y-resolver');
Yielded=Resolver.Yielded;
walk=require('y-walk');
Detacher=require('detacher');
define=require('u-proto/define');
wait=require('y-timers/wait');
function Setter(st,gt){
if(arguments.length==2){
this[getter]=gt;
this[setter]=st;
}else{
this[getter]=new Getter(getSV,[this],getSY,[this],getSF,[this]);
this.value=arguments[0];
}
};
Setter.prototype[define](bag={
[isSetter]:true,
get value(){
if(this[setter])return this[getter].value;
return this[value];
},
set value(v){
var ov;
if(this[setter])return this[setter].value=v;
if(this[frozen]&&this[frozen].yielded.done)return;
ov=this[value];
this[value]=v;
if(ov!==v)this.touch();
},
freeze:function(){
if(this[setter])return this[setter].freeze();
this[frozen]=this[frozen]||new Resolver();
this[frozen].accept();
},
touch:function(){
var r;
if(this[setter])return this[setter].touch();
r=this[resolver];
if(!r)return;
delete this[resolver];
r.accept();
},
set:function(v){
this.value=v;
},
get getter(){
return this[getter];
},
valueOf:function(){
return this.value;
},
writable:true,
['3asKNsYzcdGduft']:55
});
function getSV(setter){
return setter[value];
}
function getSY(setter){
if(!setter[resolver])setter[resolver]=new Resolver();
return setter[resolver].yielded;
}
function getSF(setter){
setter[frozen]=setter[frozen]||new Resolver();
return setter[frozen].yielded;
}
function isSetterFn(obj){
return!!obj&&obj[isSetter];
}
function Getter(getValue,gvArgs,gvThat,getYielded,gyArgs,gyThat,getFrozen,gfArgs,gfThat){
if(arguments.length==1)
return new Getter(through,[arguments[0]],through,[(new Resolver()).yielded]);
if(typeof gvArgs=='function'){
gfThat=getFrozen;
gfArgs=gyThat;
getFrozen=gyArgs;
gyThat=getYielded;
gyArgs=gvThat;
getYielded=gvArgs;
gvThat=null;
gvArgs=null;
}else if(typeof gvThat=='function'){
gfThat=gfArgs;
gfArgs=getFrozen;
getFrozen=gyThat;
gyThat=gyArgs;
gyArgs=getYielded;
getYielded=gvThat;
gvThat=null;
}
if(typeof gyArgs=='function'){
gfThat=getFrozen;
gfArgs=gyThat;
getFrozen=gyArgs;
gyThat=null;
gyArgs=null;
}else if(typeof gyThat=='function'){
gfThat=gfArgs;
gfArgs=getFrozen;
getFrozen=gyThat;
gyThat=null;
}
this[getY]=[
getYielded,
gyArgs||[],
gyThat||this
];
this[getV]=[
getValue,
gvArgs||[],
gvThat||this
];
this[getF]=[
getFrozen||retYd,
gfArgs||[],
gfThat||this
];
};
Getter.prototype[define]({
[isGetter]:true,
[Yielded.getter]:function(){
return walk(getYielded,[this]);
},
get value(){
var gv=this[getV];
return gv[0].apply(gv[2],gv[1]);
},
frozen:function(){
var gf=this[getF];
return gf[0].apply(gf[2],gf[1]);
},
valueOf:function(){
return this.value;
},
get:function(){
var getters,i;
if(!arguments.length)return this.value;
getters=[this];
for(i=0;i<arguments.length;i++)getters.push(arguments[i]);
return transform(getters,getProp);
},
run:function(){
var getters=[this],
i;
for(i=0;i<arguments.length;i++)getters.push(arguments[i]);
return transform(getters,runIt);
},
call:function(){
var getters=[this],
i;
for(i=0;i<arguments.length;i++)getters.push(arguments[i]);
return transform(getters,callIt);
},
debounce:function(timeout){
return new Getter(this[getV][0],this[getV][1],this[getV][2],getDeb,[timeout,this]);
},
touched:function(){
var gy=this[getY];
return gy[0].apply(gy[2],gy[1]);
},
connect:function(obj,key){
if(key==null)key='textContent' in obj?'textContent':'value';
if(Setter.is(obj))this.frozen().listen(obj.freeze,[],obj);
return this.watch(connect,obj,key);
},
to:function(){
var getters=[this],
i,trn,thisArg;
for(i=0;i<arguments.length;i++){
if(typeof arguments[i]=='function'){
trn=arguments[i];
thisArg=arguments[i+1];
break;
}
getters.push(arguments[i]);
}
return transform(getters,trn,thisArg);
},
watch:function(cb){
var args=[],
dArgs=[],
d=new Detacher(pauseIt,dArgs),
i;
for(i=1;i<arguments.length;i++)args[i+2]=arguments[i];
args[2]=d;
walk(watchLoop,[args,cb,this,dArgs]);
return d;
},
glance:function(cb){
var args=[],
dArgs=[],
d=new Detacher(pauseIt,dArgs),
i;
for(i=1;i<arguments.length;i++)args[i+2]=arguments[i];
args[2]=d;
walk(glanceLoop,[args,cb,this,dArgs]);
return d;
},
observe:function(ov,cb){
var args=[],
dArgs=[],
d=new Detacher(pauseIt,dArgs),
i;
for(i=2;i<arguments.length;i++)args[i+1]=arguments[i];
args[2]=d;
walk(observeLoop,[args,cb,ov,this,dArgs]);
return d;
},
writable:false,
get not(){return transform([this],invert);},
get type(){return transform([this],type);},
is:function(v){return transform([this,v],equal);},
isNot:function(v){return transform([this,v],notEqual);},
equals:function(v){return transform([this,v],strictEqual);},
equalsNot:function(v){return transform([this,v],strictNotEqual);},
lt:function(v){return transform([this,v],lt);},
le:function(v){return transform([this,v],le);},
gt:function(v){return transform([this,v],gt);},
ge:function(v){return transform([this,v],ge);},
pl:function(v){return transform([this,v],add);},
mn:function(v){return transform([this,v],substract);},
mb:function(v){return transform([this,v],multiplyBy);},
db:function(v){return transform([this,v],divideBy);},
iif:function(vt,vf){return transform([this,vt,vf],iif);},
and:function(v){return transform([this,v],and);},
or:function(v){return transform([this,v],or);},
isA:function(v){return transform([this,v],isA);},
isAn:function(v){return transform([this,v],isA);},
isNotA:function(v){return transform([this,v],isNotA);},
isNotAn:function(v){return transform([this,v],isNotA);},
['3asKNsYzcdGduft']:54
});
function isGetterFn(obj){
return!!obj&&obj[isGetter];
}
function*getYielded(getter){
while(!getter.value)yield getter.touched();
}
function through(v){return v;}
function retYd(){return(new Resolver()).yielded;}
function transform(getters,func,thisArg){
return new Getter(getTV,[getters,func,thisArg],getTY,[getters],getTF,[getters]);
}
function getTY(getters){
var yds=[],
i;
for(i=0;i<getters.length;i++){
if(Getter.is(getters[i]))yds.push(getters[i].touched());
}
return Resolver.race(yds);
}
function getTV(getters,trn,thisArg){
var values=[],
i;
for(i=0;i<getters.length;i++){
if(Getter.is(getters[i]))values[i]=getters[i].value;
else values[i]=getters[i];
}
return trn.apply(thisArg||this,values);
}
function getTF(getters){
var yds=[],
i;
for(i=0;i<getters.length;i++){
if(Getter.is(getters[i]))yds.push(getters[i].frozen());
}
return Resolver.all(yds);
}
function equal(v1,v2){return v1==v2;}
function notEqual(v1,v2){return v1!=v2;}
function strictEqual(v1,v2){return v1===v2;}
function strictNotEqual(v1,v2){return v1!==v2;}
function invert(v){return!v;}
function type(v){return typeof v;}
function lt(v1,v2){return v1<v2;}
function le(v1,v2){return v1<=v2;}
function gt(v1,v2){return v1>v2;}
function ge(v1,v2){return v1>=v2;}
function add(v1,v2){return v1+v2;}
function substract(v1,v2){return v1-v2;}
function multiplyBy(v1,v2){return v1*v2;}
function divideBy(v1,v2){return v1/v2;}
function iif(v,vt,vf){return v?vt:vf;}
function and(v1,v2){return v1&&v2;}
function or(v1,v2){return v1||v2;}
function isA(v1,v2){return v1 instanceof v2;}
function isNotA(v1,v2){return!(v1 instanceof v2);}
function concat(){
return transform(arguments,concatTf);
}
function concatTf(){
var result='',
i;
for(i=0;i<arguments.length;i++)result+=arguments[i];
return result;
}
function runIt(){
var obj=arguments[0],
func=obj[arguments[1]],
args=[],
i;
for(i=2;i<arguments.length;i++)args.push(arguments[i]);
return func.apply(obj,args);
}
function callIt(){
var func=arguments[0],
args=[],
i;
for(i=1;i<arguments.length;i++)args.push(arguments[i]);
return func.apply(this,args);
}
function getProp(){
var obj=arguments[0],
i;
for(i=1;i<arguments.length;i++)obj=obj[arguments[i]];
return obj;
}
function getDeb(timeout,that){
var res;
if(!this[resolver]){
this[resolver]=res=new Resolver();
that.touched().listen(delayer,[this,timeout]);
}else res=this[resolver];
return res.yielded;
}
function delayer(that,timeout){
wait(timeout).listen(debListener,[that]);
}
function debListener(that){
var res=that[resolver];
delete that[resolver];
res.accept();
}
function connect(v,ov,d,obj,key){
obj[key]=v;
}
function pauseIt(w){
w.pause();
}
function*watchLoop(args,cb,that,dArgs){
var ov,v,yd;
dArgs[0]=this;
v=that.value;
args[0]=v;
args[1]=ov;
yd=that.touched();
walk(cb,args,that);
ov=v;
while(true){
yield yd;
v=that.value;
args[0]=v;
args[1]=ov;
yd=that.touched();
if(ov!==v)walk(cb,args,that);
ov=v;
}
}
function*glanceLoop(args,cb,that,dArgs){
var ov,v;
dArgs[0]=this;
v=that.value;
args[0]=v;
args[1]=ov;
walk(cb,args,that);
ov=that.value;
while(true){
yield that.touched();
v=that.value;
args[0]=v;
args[1]=ov;
if(ov!==v)walk(cb,args,that);
ov=that.value;
}
}
function*observeLoop(args,cb,ov,that,dArgs){
var v,yd;
dArgs[0]=this;
while(true){
v=that.value;
args[0]=v;
args[1]=ov;
yd=that.touched();
if(ov!==v)walk(cb,args,that);
ov=v;
yield yd;
}
}
function Hybrid(value){
this[getY]=[
getSY,
[this],
this
];
this[getV]=[
getSV,
[this],
this
];
this[getF]=[
getSF,
[this],
this
];
this[getter]=this;
this.value=value;
}
Hybrid.prototype=Object.create(Getter.prototype);
Hybrid.prototype[define]('3asKNsYzcdGduft',56);
Hybrid.prototype[define](bag);
Hybrid.prototype[define]('constructor',Hybrid);
},{"detacher":9,"u-proto/define":18,"y-resolver":46,"y-timers/wait":84,"y-walk":87}],43:[function(require,module,exports){
arguments[4][33][0].apply(exports,arguments)
},{"detacher":9,"dup":33}],44:[function(require,module,exports){
arguments[4][34][0].apply(exports,arguments)
},{"../main.js":46,"dup":34}],45:[function(require,module,exports){
var tick=require('y-timers/tick'),
Resolver=require('../main.js');
function then(onFulfilled,onRejected){
var r=new Resolver();
if(this.done)handleThen.call(this,onFulfilled,onRejected,r);
else this.listen(handleThen,[onFulfilled,onRejected,r]);
return r.yielded;
}
function handleThen(onFulfilled,onRejected,r){
if(this.accepted){
if(typeof onFulfilled=='function')tick().listen(call,[onFulfilled,this.value,r,this]);
else r.accept(this.value);
}else{
if(typeof onRejected=='function')tick().listen(call,[onRejected,this.error,r,this]);
else r.reject(this.error,true);
}
}
function call(f,arg,r){
var ignore=false,
v,then;
try{
v=f(arg);
if(v==r.yielded)return r.reject(new TypeError(),true);
try{
if(v&&(
typeof v=='object'||
typeof v=='function'
)&&typeof(then=v.then)=='function'){
then.call(v,function(value){
if(ignore)return;
ignore=true;
call(PT,value,r);
},function(error){
if(ignore)return;
ignore=true;
r.reject(error,true);
});
return;
}
}catch(e){return ignore?null:r.reject(e,true);}
r.accept(v);
}catch(e){r.reject(e,true);}
}
function PT(v){return v;}
module.exports=then;
},{"../main.js":46,"y-timers/tick":81}],46:[function(require,module,exports){
var define=require('u-proto/define'),
Detacher=require('detacher'),
done=Symbol(),
accepted=Symbol(),
rejected=Symbol(),
value=Symbol(),
error=Symbol(),
yielded=Symbol(),
resolver=Symbol(),
listeners=Symbol(),
count=Symbol(),
timeout=Symbol(),
isYielded='2Alqg4pLDZMZl8Y',
getter='4siciY0dau6kkit',
stackSize=0,
Setter,bag;
function Resolver(res,yd){
if(res){
this[resolver]=res;
this[yielded]=yd;
}else this[yielded]=new Yielded();
}
module.exports=Resolver;
Resolver.Yielded=Yielded;
Resolver.Hybrid=HybridYielded;
Yielded.get=getYielded;
Yielded.is=isYieldedFunc;
Yielded.getter=getter;
Resolver.accept=accept;
Resolver.reject=reject;
Resolver.chain=chain;
Resolver.race=race;
Resolver.all=all;
require('./proto/Object.js');
require('./proto/Array.js');
require('./proto/Promise.js');
require('./proto/stream/Readable.js');
require('./proto/stream/Writable.js');
Setter=require('y-setter');
Resolver.prototype[define](bag={
get yielded(){return this[yielded];},
accept:function(data){
var yd,ls,args;
if(this[resolver])return this[resolver].accept(data);
yd=this[yielded];
ls=yd[listeners];
if(yd[done])return;
yd[done]=true;
yd[accepted]=true;
yd[value]=data;
for(args of ls){
callCb(args,yd);
detach(args,yd);
}
},
reject:function(e,doNotThrow){
var yd,ls,args;
if(this[resolver])return this[resolver].reject(e,doNotThrow);
yd=this[yielded];
ls=yd[listeners];
if(yd[done])return;
if(!doNotThrow)yd[timeout]=setTimeout(throwError,0,e);
yd[done]=true;
yd[rejected]=true;
yd[error]=e;
for(args of ls){
callCb(args,yd);
detach(args,yd);
}
},
bind:require('./Resolver/bind.js'),
['3asKNsYzcdGduft']:52
});
function callCb(args,yd){
var cb=args[0],
ag=args[1]||[],
th=args[2]||yd;
if(!stackSize)setTimeout(resetStackSize,0);
stackSize++;
if(stackSize>500)return setTimeout(callCb,0,args,yd);
try{cb.apply(th,ag);}
catch(e){setTimeout(throwError,0,e);}
stackSize--;
}
function resetStackSize(){
stackSize=0;
}
function throwError(e){
throw e;
}
function Yielded(prop){
if(this[listeners])return;
if(prop){
this[prop]=Object.create(Resolver.prototype);
this[prop][yielded]=this;
}
this[done]=false;
this[accepted]=false;
this[rejected]=false;
this[listeners]=new Set();
this[count]=new Setter();
if(this[count].value==null)this[count].value=0;
}
Yielded.prototype[define](isYielded,true);
Yielded.prototype[define]({
get listeners(){return this[count].getter;},
get done(){return this[done];},
get accepted(){
if(this[timeout]!=null)clearTimeout(this[timeout]);
return this[accepted];
},
get rejected(){
if(this[timeout]!=null)clearTimeout(this[timeout]);
return this[rejected];
},
get value(){return this[value];},
get error(){
if(this[timeout]!=null)clearTimeout(this[timeout]);
return this[error];
},
listen:function(){
var d=new Detacher(detach,[arguments,this]);
if(this[done]){
callCb(arguments,this);
return d;
}
this[listeners].add(arguments);
this[count].value++;
return d;
},
call:require('./Yielded/call.js'),
then:require('./Yielded/then.js'),
['3asKNsYzcdGduft']:51
});
function detach(args,yd){
if(yd[listeners].delete(args))yd[count].value--;
}
function getYielded(obj){
while(!(obj&&obj[isYielded])){
if(!obj)return accept(obj);
if(obj[getter])obj=obj[getter]();
else return accept(obj);
}
return obj;
}
function isYieldedFunc(yd){
return yd&&yd[isYielded];
}
function HybridYielded(){
this[yielded]=this;
Yielded.call(this);
}
HybridYielded.prototype=Object.create(Yielded.prototype);
HybridYielded.prototype[define]('constructor',HybridYielded);
HybridYielded.prototype[define]('3asKNsYzcdGduft',53);
HybridYielded.prototype[define](bag);
function chain(){
var last=arguments[arguments.length-1][yielded],
i;
arguments[arguments.length-1][yielded]=arguments[0][yielded];
for(i=0;i<arguments.length-2;i++)arguments[i][yielded]=arguments[i+1][yielded];
arguments[arguments.length-2][yielded]=last;
}
function accept(v){
var resolver=new Resolver();
resolver.accept(v);
return resolver.yielded;
}
function reject(e,doNotThrow){
var resolver=new Resolver();
resolver.reject(e,doNotThrow);
return resolver.yielded;
}
function race(it){
var res=new Resolver(),
yd;
for(yd of it)res.bind(getYielded(yd));
return res.yielded;
}
function all(it){
var res=new Resolver(),
ctx={},
i=0,
yd;
ctx.remaining=1;
ctx.result=[];
for(yd of it){
ctx.remaining++;
getYielded(yd).listen(raceIt,[ctx,res,i]);
i++;
}
if(!--ctx.remaining)res.accept(ctx.result);
return res.yielded;
}
function raceIt(ctx,res,i){
if(this.accepted){
ctx.result[i]=this.value;
if(!--ctx.remaining)res.accept(ctx.result);
}else res.reject(this.error);
}
},{"./Resolver/bind.js":43,"./Yielded/call.js":44,"./Yielded/then.js":45,"./proto/Array.js":47,"./proto/Object.js":48,"./proto/Promise.js":49,"./proto/stream/Readable.js":50,"./proto/stream/Writable.js":51,"detacher":9,"u-proto/define":18,"y-setter":42}],47:[function(require,module,exports){
var define=require('u-proto/define'),
Resolver=require('../main.js'),
getter=Resolver.Yielded.getter,
getYd=Resolver.Yielded.get,
run;
module.exports=function(){
var arr=[],
res,errors,i,ctx;
if(!this.length)return Resolver.accept(arr);
res=new Resolver();
errors=[];
ctx={
remaining:this.length
};
for(i=0;i<this.length;i++)getYd(this[i]).listen(run,[res,arr,errors,ctx,i]);
return res.yielded;
};
function run(res,arr,errors,ctx,i){
var error;
if(this.accepted)arr[i]=this.value;
else{
errors[i]=this.error;
ctx.lastError=this.error;
}
if(!--ctx.remaining){
if(ctx.lastError){
error=new Error(ctx.lastError.message);
error.stack=ctx.lastError.stack;
error.errors=errors;
error.values=arr;
res.reject(error);
}else res.accept(arr);
}
}
if(!Array.prototype.hasOwnProperty(getter))
Array.prototype[define](getter,module.exports,{writable:true});
},{"../main.js":46,"u-proto/define":18}],48:[function(require,module,exports){
var define=require('u-proto/define'),
Collection=require('detacher/collection'),
Resolver=require('../main.js'),
fromReadableStream=require('./stream/Readable.js'),
fromWritableStream=require('./stream/Writable.js'),
fromPromise=require('./Promise.js'),
getter=Resolver.Yielded.getter,
getYd=Resolver.Yielded.get,
race;
module.exports=function(){
var c=new Collection(),
keys,ctx,i,j,res,errors;
if(typeof this.toPromise=='function')return fromPromise.call(this.toPromise());
if(typeof this.then=='function')return fromPromise.call(this);
if(typeof this.pipe=='function')return fromReadableStream.call(this);
if(typeof this.end=='function')return fromWritableStream.call(this);
if(this.constructor!=Object)return Resolver.accept(this);
keys=Object.keys(this);
if(!keys.length)return Resolver.accept({});
res=new Resolver();
errors={};
ctx={
remaining:keys.length
};
for(j=0;j<keys.length;j++){
i=keys[j];
c.add(
getYd(this[i]).listen(race,[res,errors,c,ctx,i])
);
}
return res.yielded;
};
function race(res,errors,c,ctx,i){
var error;
if(this.accepted){
c.detach();
res.accept({[i]:this.value});
}else{
if(!ctx.firstError)ctx.firstError=this.error;
errors[i]=this.error;
if(!--ctx.remaining){
error=new Error(ctx.firstError.message);
error.stack=ctx.firstError.stack;
error.errors=errors;
res.reject(error);
}
}
}
if(!Object.prototype.hasOwnProperty(getter))
Object.prototype[define](getter,module.exports,{writable:true});
},{"../main.js":46,"./Promise.js":49,"./stream/Readable.js":50,"./stream/Writable.js":51,"detacher/collection":8,"u-proto/define":18}],49:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"../main.js":46,"dup":39,"u-proto/define":18}],50:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"../../main.js":46,"buffer":6,"dup":40,"u-proto/define":18}],51:[function(require,module,exports){
arguments[4][41][0].apply(exports,arguments)
},{"../../main.js":46,"dup":41,"u-proto/define":18}],52:[function(require,module,exports){
arguments[4][33][0].apply(exports,arguments)
},{"detacher":9,"dup":33}],53:[function(require,module,exports){
arguments[4][34][0].apply(exports,arguments)
},{"../main.js":55,"dup":34}],54:[function(require,module,exports){
arguments[4][45][0].apply(exports,arguments)
},{"../main.js":55,"dup":45,"y-timers/tick":81}],55:[function(require,module,exports){
var define=require('u-proto/define'),
done=Symbol(),
accepted=Symbol(),
rejected=Symbol(),
value=Symbol(),
error=Symbol(),
yielded=Symbol(),
resolver=Symbol(),
listeners=Symbol(),
count=Symbol(),
timeout=Symbol(),
isYielded='2Alqg4pLDZMZl8Y',
getter='4siciY0dau6kkit',
stackSize=0,
Setter,Detacher,bag;
function Resolver(res,yd){
if(res){
this[resolver]=res;
this[yielded]=yd;
}else this[yielded]=new Yielded();
}
module.exports=Resolver;
Resolver.Yielded=Yielded;
Resolver.Hybrid=HybridYielded;
Yielded.get=getYielded;
Yielded.is=isYieldedFunc;
Yielded.getter=getter;
Resolver.accept=accept;
Resolver.reject=reject;
Resolver.race=race;
Resolver.all=all;
require('./proto/Array.js');
require('./proto/Promise.js');
require('./proto/stream/Readable.js');
require('./proto/stream/Writable.js');
require('./proto/Object.js');
Setter=require('y-setter');
Detacher=require('detacher');
Resolver.prototype[define](bag={
get yielded(){return this[yielded];},
accept:function(data){
var yd,ls,args;
if(this[resolver])return this[resolver].accept(data);
yd=this[yielded];
ls=yd[listeners];
if(yd[done])return;
yd[done]=true;
yd[accepted]=true;
yd[value]=data;
for(args of ls){
callCb(args,yd);
detach(args,yd);
}
},
reject:function(e,doNotThrow){
var yd,ls,args;
if(this[resolver])return this[resolver].reject(e,doNotThrow);
yd=this[yielded];
ls=yd[listeners];
if(yd[done])return;
if(!doNotThrow)yd[timeout]=setTimeout(throwError,0,e);
yd[done]=true;
yd[rejected]=true;
yd[error]=e;
for(args of ls){
callCb(args,yd);
detach(args,yd);
}
},
bind:require('./Resolver/bind.js'),
['3asKNsYzcdGduft']:52
});
function callCb(args,yd){
var cb=args[0],
ag=args[1]||[],
th=args[2]||yd;
if(!stackSize)setTimeout(resetStackSize,0);
stackSize++;
if(stackSize>500)return setTimeout(callCb,0,args,yd);
try{cb.apply(th,ag);}
catch(e){setTimeout(throwError,0,e);}
stackSize--;
}
function resetStackSize(){
stackSize=0;
}
function throwError(e){
throw e;
}
function Yielded(prop){
if(this[listeners])return;
if(prop){
this[prop]=Object.create(Resolver.prototype);
this[prop][yielded]=this;
}
this[done]=false;
this[accepted]=false;
this[rejected]=false;
this[listeners]=new Set();
this[count]=new Setter();
if(this[count].value==null)this[count].value=0;
}
Yielded.prototype[define](isYielded,true);
Yielded.prototype[define]({
get listeners(){return this[count].getter;},
get done(){return this[done];},
get accepted(){
if(this[timeout]!=null)clearTimeout(this[timeout]);
return this[accepted];
},
get rejected(){
if(this[timeout]!=null)clearTimeout(this[timeout]);
return this[rejected];
},
get value(){return this[value];},
get error(){
if(this[timeout]!=null)clearTimeout(this[timeout]);
return this[error];
},
listen:function(){
var d=new Detacher(detach,[arguments,this]);
if(this[done]){
callCb(arguments,this);
return d;
}
this[listeners].add(arguments);
this[count].value++;
return d;
},
call:require('./Yielded/call.js'),
then:require('./Yielded/then.js'),
['3asKNsYzcdGduft']:51
});
function detach(args,yd){
if(yd[listeners].delete(args))yd[count].value--;
}
function getYielded(obj){
while(!(obj&&obj[isYielded])){
if(!obj)return accept(obj);
if(obj[getter])obj=obj[getter]();
else return accept(obj);
}
return obj;
}
function isYieldedFunc(yd){
return yd&&yd[isYielded];
}
function HybridYielded(res){
res=res||new Resolver();
this[resolver]=res;
this[yielded]=res.yielded;
}
HybridYielded.prototype=Object.create(Yielded.prototype);
HybridYielded.prototype[define]('constructor',HybridYielded);
HybridYielded.prototype[define]('3asKNsYzcdGduft',53);
HybridYielded.prototype[define](bag);
HybridYielded.prototype[define]({
get listeners(){return this[yielded].listeners;},
get done(){return this[yielded].done;},
get accepted(){return this[yielded].accepted;},
get rejected(){return this[yielded].rejected;},
get value(){return this[yielded].value;},
get error(){return this[yielded].error;},
listen:function(func,args,thisArg){
args=args||[];
thisArg=thisArg||this;
return this[yielded].listen(func,args,thisArg);
}
});
function accept(v){
var resolver=new Resolver();
resolver.accept(v);
return resolver.yielded;
}
function reject(e,doNotThrow){
var resolver=new Resolver();
resolver.reject(e,doNotThrow);
return resolver.yielded;
}
function race(it){
var res=new Resolver(),
yd;
for(yd of it)res.bind(getYielded(yd));
return res.yielded;
}
function all(it){
var res=new Resolver(),
ctx={},
i=0,
yd;
ctx.remaining=1;
ctx.result=[];
for(yd of it){
ctx.remaining++;
getYielded(yd).listen(raceIt,[ctx,res,i]);
i++;
}
if(!--ctx.remaining)res.accept(ctx.result);
return res.yielded;
}
function raceIt(ctx,res,i){
if(this.accepted){
ctx.result[i]=this.value;
if(!--ctx.remaining)res.accept(ctx.result);
}else res.reject(this.error);
}
},{"./Resolver/bind.js":52,"./Yielded/call.js":53,"./Yielded/then.js":54,"./proto/Array.js":56,"./proto/Object.js":57,"./proto/Promise.js":58,"./proto/stream/Readable.js":59,"./proto/stream/Writable.js":60,"detacher":9,"u-proto/define":18,"y-setter":61}],56:[function(require,module,exports){
arguments[4][47][0].apply(exports,arguments)
},{"../main.js":55,"dup":47,"u-proto/define":18}],57:[function(require,module,exports){
var define=require('u-proto/define'),
Resolver=require('../main.js'),
fromReadableStream=require('./stream/Readable.js'),
fromWritableStream=require('./stream/Writable.js'),
fromPromise=require('./Promise.js'),
getter=Resolver.Yielded.getter,
getYd=Resolver.Yielded.get,
Collection,race;
module.exports=function(){
var c=new Collection(),
keys,ctx,i,j,res,errors;
if(typeof this.toPromise=='function')return fromPromise.call(this.toPromise());
if(typeof this.then=='function')return fromPromise.call(this);
if(typeof this.pipe=='function')return fromReadableStream.call(this);
if(typeof this.end=='function')return fromWritableStream.call(this);
if(this.constructor!=Object)return Resolver.accept(this);
keys=Object.keys(this);
if(!keys.length)return Resolver.accept({});
res=new Resolver();
errors={};
ctx={
remaining:keys.length
};
for(j=0;j<keys.length;j++){
i=keys[j];
c.add(
getYd(this[i]).listen(race,[res,errors,c,ctx,i])
);
}
return res.yielded;
};
function race(res,errors,c,ctx,i){
var error;
if(this.accepted){
c.detach();
res.accept({[i]:this.value});
}else{
if(!ctx.firstError)ctx.firstError=this.error;
errors[i]=this.error;
if(!--ctx.remaining){
error=new Error(ctx.firstError.message);
error.stack=ctx.firstError.stack;
error.errors=errors;
res.reject(error);
}
}
}
if(!Object.prototype.hasOwnProperty(getter))
Object.prototype[define](getter,module.exports,{writable:true});
Collection=require('detacher/collection');
},{"../main.js":55,"./Promise.js":58,"./stream/Readable.js":59,"./stream/Writable.js":60,"detacher/collection":8,"u-proto/define":18}],58:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"../main.js":55,"dup":39,"u-proto/define":18}],59:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"../../main.js":55,"buffer":6,"dup":40,"u-proto/define":18}],60:[function(require,module,exports){
arguments[4][41][0].apply(exports,arguments)
},{"../../main.js":55,"dup":41,"u-proto/define":18}],61:[function(require,module,exports){
var getY=Symbol(),
getV=Symbol(),
getF=Symbol(),
value=Symbol(),
frozen=Symbol(),
getter=Symbol(),
setter=Symbol(),
resolver=Symbol(),
isSetter='o5CqYkOh5ezPpwT',
isGetter='3tPmTSBio57bVrt',
Resolver,walk,Detacher,define,wait,
bag,Yielded;
module.exports=Setter;
Setter.Getter=Getter;
Setter.Hybrid=Hybrid;
Setter.is=isSetterFn;
Getter.is=isGetterFn;
Getter.transform=transform;
Getter.concat=concat;
Resolver=require('y-resolver');
Yielded=Resolver.Yielded;
walk=require('y-walk');
Detacher=require('detacher');
define=require('u-proto/define');
wait=require('y-timers/wait');
function Setter(st,gt){
if(arguments.length==2){
this[getter]=gt;
this[setter]=st;
}else{
this[getter]=new Getter(getSV,[this],getSY,[this],getSF,[this]);
this.value=arguments[0];
}
};
Setter.prototype[define](bag={
[isSetter]:true,
get value(){
if(this[setter])return this[getter].value;
return this[value];
},
set value(v){
var ov;
if(this[setter])return this[setter].value=v;
if(this[frozen]&&this[frozen].yielded.done)return;
ov=this[value];
this[value]=v;
if(ov!==v)this.touch();
},
freeze:function(){
if(this[setter])return this[setter].freeze();
this[frozen]=this[frozen]||new Resolver();
this[frozen].accept();
},
touch:function(){
var r;
if(this[setter])return this[setter].touch();
r=this[resolver];
if(!r)return;
delete this[resolver];
r.accept();
},
set:function(v){
this.value=v;
},
get getter(){
return this[getter];
},
valueOf:function(){
return this.value;
},
writable:true,
['3asKNsYzcdGduft']:55
});
function getSV(setter){
return setter[value];
}
function getSY(setter){
if(!setter[resolver])setter[resolver]=new Resolver();
return setter[resolver].yielded;
}
function getSF(setter){
setter[frozen]=setter[frozen]||new Resolver();
return setter[frozen].yielded;
}
function isSetterFn(obj){
return!!obj&&obj[isSetter];
}
function Getter(getValue,gvArgs,gvThat,getYielded,gyArgs,gyThat,getFrozen,gfArgs,gfThat){
if(arguments.length==1)
return new Getter(through,[arguments[0]],through,[(new Resolver()).yielded]);
if(typeof gvArgs=='function'){
gfThat=getFrozen;
gfArgs=gyThat;
getFrozen=gyArgs;
gyThat=getYielded;
gyArgs=gvThat;
getYielded=gvArgs;
gvThat=null;
gvArgs=null;
}else if(typeof gvThat=='function'){
gfThat=gfArgs;
gfArgs=getFrozen;
getFrozen=gyThat;
gyThat=gyArgs;
gyArgs=getYielded;
getYielded=gvThat;
gvThat=null;
}
if(typeof gyArgs=='function'){
gfThat=getFrozen;
gfArgs=gyThat;
getFrozen=gyArgs;
gyThat=null;
gyArgs=null;
}else if(typeof gyThat=='function'){
gfThat=gfArgs;
gfArgs=getFrozen;
getFrozen=gyThat;
gyThat=null;
}
this[getY]=[
getYielded,
gyArgs||[],
gyThat||this
];
this[getV]=[
getValue,
gvArgs||[],
gvThat||this
];
this[getF]=[
getFrozen||retYd,
gfArgs||[],
gfThat||this
];
};
Getter.prototype[define]({
[isGetter]:true,
[Yielded.getter]:function(){
return walk(getYielded,[this]);
},
get value(){
var gv=this[getV];
return gv[0].apply(gv[2],gv[1]);
},
frozen:function(){
var gf=this[getF];
return gf[0].apply(gf[2],gf[1]);
},
valueOf:function(){
return this.value;
},
get:function(){
var getters,i;
if(!arguments.length)return this.value;
getters=[this];
for(i=0;i<arguments.length;i++)getters.push(arguments[i]);
return transform(getters,getProp);
},
run:function(){
var getters=[this],
i;
for(i=0;i<arguments.length;i++)getters.push(arguments[i]);
return transform(getters,runIt);
},
call:function(){
var getters=[this],
i;
for(i=0;i<arguments.length;i++)getters.push(arguments[i]);
return transform(getters,callIt);
},
debounce:function(timeout){
return new Getter(this[getV][0],this[getV][1],this[getV][2],getDeb,[timeout,this]);
},
touched:function(){
var gy=this[getY];
return gy[0].apply(gy[2],gy[1]);
},
connect:function(obj,key){
if(key==null)key='textContent' in obj?'textContent':'value';
if(Setter.is(obj))this.frozen().listen(obj.freeze,[],obj);
return this.watch(connect,obj,key);
},
to:function(fn){
var getters=[this],
i;
for(i=1;i<arguments.length;i++)getters.push(arguments[i]);
return transform(getters,fn,this);
},
watch:function(cb){
var args=[],
dArgs=[],
d=new Detacher(pauseIt,dArgs),
i;
for(i=1;i<arguments.length;i++)args[i+2]=arguments[i];
args[2]=d;
walk(watchLoop,[args,cb,this,dArgs]);
return d;
},
glance:function(cb){
var args=[],
dArgs=[],
d=new Detacher(pauseIt,dArgs),
i;
for(i=1;i<arguments.length;i++)args[i+2]=arguments[i];
args[2]=d;
walk(glanceLoop,[args,cb,this,dArgs]);
return d;
},
observe:function(ov,cb){
var args=[],
dArgs=[],
d=new Detacher(pauseIt,dArgs),
i;
for(i=2;i<arguments.length;i++)args[i+1]=arguments[i];
args[2]=d;
walk(observeLoop,[args,cb,ov,this,dArgs]);
return d;
},
writable:false,
get not(){return transform([this],invert);},
get type(){return transform([this],type);},
is:function(v){return transform([this,v],equal);},
isNot:function(v){return transform([this,v],notEqual);},
equals:function(v){return transform([this,v],strictEqual);},
equalsNot:function(v){return transform([this,v],strictNotEqual);},
lt:function(v){return transform([this,v],lt);},
le:function(v){return transform([this,v],le);},
gt:function(v){return transform([this,v],gt);},
ge:function(v){return transform([this,v],ge);},
pl:function(v){return transform([this,v],add);},
mn:function(v){return transform([this,v],substract);},
mb:function(v){return transform([this,v],multiplyBy);},
db:function(v){return transform([this,v],divideBy);},
iif:function(vt,vf){return transform([this,vt,vf],iif);},
and:function(v){return transform([this,v],and);},
or:function(v){return transform([this,v],or);},
isA:function(v){return transform([this,v],isA);},
isAn:function(v){return transform([this,v],isA);},
isNotA:function(v){return transform([this,v],isNotA);},
isNotAn:function(v){return transform([this,v],isNotA);},
['3asKNsYzcdGduft']:54
});
function isGetterFn(obj){
return!!obj&&obj[isGetter];
}
function*getYielded(getter){
while(!getter.value)yield getter.touched();
}
function through(v){return v;}
function retYd(){return(new Resolver()).yielded;}
function transform(getters,func,thisArg){
return new Getter(getTV,[getters,func,thisArg],getTY,[getters],getTF,[getters]);
}
function getTY(getters){
var yds=[],
i;
for(i=0;i<getters.length;i++){
if(Getter.is(getters[i]))yds.push(getters[i].touched());
}
return Resolver.race(yds);
}
function getTV(getters,trn,thisArg){
var values=[],
i;
for(i=0;i<getters.length;i++){
if(Getter.is(getters[i]))values[i]=getters[i].value;
else values[i]=getters[i];
}
return trn.apply(thisArg||this,values);
}
function getTF(getters){
var yds=[],
i;
for(i=0;i<getters.length;i++){
if(Getter.is(getters[i]))yds.push(getters[i].frozen());
}
return Resolver.all(yds);
}
function equal(v1,v2){return v1==v2;}
function notEqual(v1,v2){return v1!=v2;}
function strictEqual(v1,v2){return v1===v2;}
function strictNotEqual(v1,v2){return v1!==v2;}
function invert(v){return!v;}
function type(v){return typeof v;}
function lt(v1,v2){return v1<v2;}
function le(v1,v2){return v1<=v2;}
function gt(v1,v2){return v1>v2;}
function ge(v1,v2){return v1>=v2;}
function add(v1,v2){return v1+v2;}
function substract(v1,v2){return v1-v2;}
function multiplyBy(v1,v2){return v1*v2;}
function divideBy(v1,v2){return v1/v2;}
function iif(v,vt,vf){return v?vt:vf;}
function and(v1,v2){return v1&&v2;}
function or(v1,v2){return v1||v2;}
function isA(v1,v2){return v1 instanceof v2;}
function isNotA(v1,v2){return!(v1 instanceof v2);}
function concat(){
return transform(arguments,concatTf);
}
function concatTf(){
var result='',
i;
for(i=0;i<arguments.length;i++)result+=arguments[i];
return result;
}
function runIt(){
var obj=arguments[0],
func=obj[arguments[1]],
args=[],
i;
for(i=2;i<arguments.length;i++)args.push(arguments[i]);
return func.apply(obj,args);
}
function callIt(){
var func=arguments[0],
args=[],
i;
for(i=1;i<arguments.length;i++)args.push(arguments[i]);
return func.apply(this,args);
}
function getProp(){
var obj=arguments[0],
i;
for(i=1;i<arguments.length;i++)obj=obj[arguments[i]];
return obj;
}
function getDeb(timeout,that){
var res;
if(!this[resolver]){
this[resolver]=res=new Resolver();
that.touched().listen(delayer,[this,timeout]);
}else res=this[resolver];
return res.yielded;
}
function delayer(that,timeout){
wait(timeout).listen(debListener,[that]);
}
function debListener(that){
var res=that[resolver];
delete that[resolver];
res.accept();
}
function connect(v,ov,d,obj,key){
obj[key]=v;
}
function pauseIt(w){
w.pause();
}
function*watchLoop(args,cb,that,dArgs){
var ov,v,yd;
dArgs[0]=this;
v=that.value;
args[0]=v;
args[1]=ov;
yd=that.touched();
walk(cb,args,that);
ov=v;
while(true){
yield yd;
v=that.value;
args[0]=v;
args[1]=ov;
yd=that.touched();
if(ov!==v)walk(cb,args,that);
ov=v;
}
}
function*glanceLoop(args,cb,that,dArgs){
var ov,v;
dArgs[0]=this;
v=that.value;
args[0]=v;
args[1]=ov;
walk(cb,args,that);
ov=that.value;
while(true){
yield that.touched();
v=that.value;
args[0]=v;
args[1]=ov;
if(ov!==v)walk(cb,args,that);
ov=that.value;
}
}
function*observeLoop(args,cb,ov,that,dArgs){
var v,yd;
dArgs[0]=this;
while(true){
v=that.value;
args[0]=v;
args[1]=ov;
yd=that.touched();
if(ov!==v)walk(cb,args,that);
ov=v;
yield yd;
}
}
function Hybrid(value){
var s;
if(value&&Setter.is(value))s=value;
else s=new Setter(value);
this[setter]=s;
this[getter]=s.getter;
this[getY]=[
getHY,
[s.getter],
this
];
this[getF]=[
getHF,
[s.getter],
this
];
}
Hybrid.prototype=Object.create(Getter.prototype);
Hybrid.prototype[define]('3asKNsYzcdGduft',56);
Hybrid.prototype[define](bag);
Hybrid.prototype[define]('constructor',Hybrid);
function getHY(getter){
return getter.touched();
}
function getHF(getter){
return getter.frozen();
}
},{"detacher":9,"u-proto/define":18,"y-resolver":55,"y-timers/wait":84,"y-walk":87}],62:[function(require,module,exports){
arguments[4][33][0].apply(exports,arguments)
},{"detacher":9,"dup":33}],63:[function(require,module,exports){
arguments[4][34][0].apply(exports,arguments)
},{"../main.js":65,"dup":34}],64:[function(require,module,exports){
arguments[4][35][0].apply(exports,arguments)
},{"../main.js":65,"dup":35,"y-timers/tick":81}],65:[function(require,module,exports){
arguments[4][36][0].apply(exports,arguments)
},{"./Resolver/bind.js":62,"./Yielded/call.js":63,"./Yielded/then.js":64,"./proto/Array.js":66,"./proto/Object.js":67,"./proto/Promise.js":68,"./proto/stream/Readable.js":69,"./proto/stream/Writable.js":70,"detacher":9,"dup":36,"u-proto/define":18,"y-setter":71}],66:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"../main.js":65,"dup":37,"u-proto/define":18}],67:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"../main.js":65,"./Promise.js":68,"./stream/Readable.js":69,"./stream/Writable.js":70,"detacher/collection":8,"dup":38,"u-proto/define":18}],68:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"../main.js":65,"dup":39,"u-proto/define":18}],69:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"../../main.js":65,"buffer":6,"dup":40,"u-proto/define":18}],70:[function(require,module,exports){
arguments[4][41][0].apply(exports,arguments)
},{"../../main.js":65,"dup":41,"u-proto/define":18}],71:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"detacher":9,"dup":42,"u-proto/define":18,"y-resolver":75,"y-timers/wait":84,"y-walk":87}],72:[function(require,module,exports){
arguments[4][33][0].apply(exports,arguments)
},{"detacher":9,"dup":33}],73:[function(require,module,exports){
arguments[4][34][0].apply(exports,arguments)
},{"../main.js":75,"dup":34}],74:[function(require,module,exports){
arguments[4][45][0].apply(exports,arguments)
},{"../main.js":75,"dup":45,"y-timers/tick":81}],75:[function(require,module,exports){
arguments[4][46][0].apply(exports,arguments)
},{"./Resolver/bind.js":72,"./Yielded/call.js":73,"./Yielded/then.js":74,"./proto/Array.js":76,"./proto/Object.js":77,"./proto/Promise.js":78,"./proto/stream/Readable.js":79,"./proto/stream/Writable.js":80,"detacher":9,"dup":46,"u-proto/define":18,"y-setter":71}],76:[function(require,module,exports){
arguments[4][47][0].apply(exports,arguments)
},{"../main.js":75,"dup":47,"u-proto/define":18}],77:[function(require,module,exports){
arguments[4][48][0].apply(exports,arguments)
},{"../main.js":75,"./Promise.js":78,"./stream/Readable.js":79,"./stream/Writable.js":80,"detacher/collection":8,"dup":48,"u-proto/define":18}],78:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"../main.js":75,"dup":39,"u-proto/define":18}],79:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"../../main.js":75,"buffer":6,"dup":40,"u-proto/define":18}],80:[function(require,module,exports){
arguments[4][41][0].apply(exports,arguments)
},{"../../main.js":75,"dup":41,"u-proto/define":18}],81:[function(require,module,exports){
(function(global){
if(global.setImmediate)module.exports=require('./tick/normal.js');
else module.exports=require('./tick/hacky.js');
}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"./tick/hacky.js":82,"./tick/normal.js":83}],82:[function(require,module,exports){
var Resolver=require('y-resolver'),
ticker=new Image(),
state=true,
rsvs=[],
values=[];
ticker.onerror=function(){
var rs=rsvs.slice(),
rsv;
rsvs=[];
while(rsv=rs.shift())rsv.accept(values.shift());
};
module.exports=function(v){
var resolver=new Resolver();
rsvs.push(resolver);
values.push(v);
if(state)ticker.src='data:,0';
else ticker.src='data:,1';
state=!state;
return resolver.yielded;
};
},{"y-resolver":65}],83:[function(require,module,exports){
var Resolver=require('y-resolver');
function resolve(resolver,v){
resolver.accept(v);
}
module.exports=function(v){
var resolver=new Resolver();
setImmediate(resolve,resolver,v);
return resolver.yielded;
};
},{"y-resolver":65}],84:[function(require,module,exports){
(function(global){
if(global.document&&global.Worker&&global.Blob)module.exports=require('./wait/hacky.js');
else module.exports=require('./wait/normal.js');
}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"./wait/hacky.js":85,"./wait/normal.js":86}],85:[function(require,module,exports){
var Resolver=require('y-resolver'),
worker,
counter=0,
resolvers={},
values={};
worker=new Worker(URL.createObjectURL(new Blob([
'function echo(data){'+
'postMessage(data);'+
'}'+
'addEventListener("message",function(e){'+
'setTimeout(echo,Math.max(e.data[0]-2,0),e.data[1]);'+
'});'
],{type:'text/javascript'})));
worker.onmessage=function(e){
var r=resolvers[e.data],
v=values[e.data];
delete resolvers[e.data];
delete values[e.data];
r.accept(v);
};
module.exports=function(t,v){
var resolver=new Resolver(),
id=counter=(counter+1)%1e15;
resolvers[id]=resolver;
values[id]=v;
worker.postMessage([t,id]);
return resolver.yielded;
};
},{"y-resolver":65}],86:[function(require,module,exports){
var Resolver=require('y-resolver');
function resolve(resolver,v){
resolver.accept(v);
}
module.exports=function(t,v){
var resolver=new Resolver();
setTimeout(resolve,Math.max(t-1,0),resolver,v);
return resolver.yielded;
};
},{"y-resolver":65}],87:[function(require,module,exports){
var stack=[],
current=null,
resolver=Symbol(),
paused=Symbol(),
iterator=Symbol(),
lastYd=Symbol(),
lastDt=Symbol(),
iStack=Symbol(),
Resolver,Yielded,define;
module.exports=walk;
walk.wrap=wrap;
walk.getStack=getStack;
walk.getCurrent=getCurrent;
walk.trace=trace;
define=require('u-proto/define');
Resolver=require('y-resolver');
Yielded=Resolver.Yielded;
function Walker(g,args,that,st){
var res,ps,it;
Yielded.call(this,resolver);
this[paused]=false;
res=this[resolver];
that=that||this;
args=args||[];
st=st||stack;
ps=stack;
stack=st;
current=this;
try{
it=g.apply(that,args);
}catch(e){
res.reject(e);
return;
}finally{
stack=ps;
current=null;
}
this[iterator]=it;
this[iStack]=st;
if(!(it&&it.next&&it.throw)){
res.accept(it);
return;
}
squeeze(step(it,this,st,res),it,st,res,this);
}
Walker.prototype=Object.create(Yielded.prototype);
Walker.prototype[define]({
constructor:Walker,
pause:function(){
if(this[paused])return;
this[paused]=true;
if(this[lastDt])this[lastDt].detach();
},
resume:function(){
if(!this[paused])return;
this[paused]=false;
if(this[lastYd])this[lastYd].listen(squeeze,[
this[lastYd],
this[iterator],
this[iStack],
this[resolver],
this
]);
}
});
function walk(g,args,that){
return new Walker(g,args,that);
}
function trace(id,g,args,that){
var s=stack.slice();
s.push(id);
return new Walker(g,args,that,s);
}
function squeeze(yd,it,st,res,w){
while(yd){
w[lastYd]=yd;
if(w[paused])return;
if(!yd.done){
w[lastDt]=yd.listen(squeeze,[yd,it,st,res,w]);
return;
}
w[lastYd]=null;
w[lastDt]=null;
yd=step(it,w,st,res,yd.value,yd.error,yd.rejected);
}
}
function step(it,w,st,res,value,error,failed){
var next,ps;
ps=stack;
stack=st;
current=w;
try{
if(failed)next=it.throw(error);
else next=it.next(value);
}catch(e){
res.reject(e);
return;
}finally{
stack=ps;
current=null;
}
if(next.done){
res.accept(next.value);
return;
}
return Yielded.get(next.value);
}
function getStack(){
return stack.slice();
}
function getCurrent(){
return current;
}
function wrap(g){
return function(){
return walk(g,arguments,this);
};
}
},{"u-proto/define":18,"y-resolver":55}],88:[function(require,module,exports){
var app=require('../main.js'),
t=require('u-test'),
assert=require('assert'),
walk=require('y-walk');
app.take('/',function*(e){
__U_TEST_REMOTE__=e.data.testEndpoint;
yield t('Static',function*(){
var e,yd,txt,res;
app.goTo('/static',{foo:'bar'},'foo');
e=yield app.until('/static');
assert.strictEqual(e.data,'hi');
assert.strictEqual(e.path,'/static');
assert.strictEqual(e.query.foo,'bar');
assert.strictEqual(e.fragment,'foo');
assert.strictEqual(e.url,'/static?foo=bar#foo');
assert.strictEqual(e.url,'/static?foo=bar#foo');
assert.strictEqual(e.origin,location.origin);
app.goTo('/static2','foo');
e=yield app.until('/static2');
assert.deepEqual(e.data,{foo:'bar'});
assert.strictEqual(e.fragment,'foo');
app.goTo('/static2');
app.goTo('/static');
e=yield app.until('/static');
e.redirect('/static2');
e=yield app.until('/static2');
yd=app.until('/static2');
history.back();
yield yd;
app.goTo('/static404');
yield app.until('e/404');
txt=yield(yield fetch('/static',{
headers:new Headers({
accept:'text/html'
})
})).text();
assert(txt.indexOf('"hi"')!=-1)
assert(txt.indexOf('"hi"')!=0)
res=yield fetch('/static404',{
headers:new Headers({
accept:'text/html'
})
});
assert.strictEqual(res.status,404);
res=yield fetch('/static',{
headers:new Headers({
accept:'*/*'
})
});
assert.strictEqual(res.status,403);
app.goTo('/redirect');
e=yield app.until('/static');
assert.strictEqual(e.data,'hi');
});
yield t('Query',function*(){
var e;
app.goTo('/query',{
_hidden:true,
foo:'bar'
});
e=yield app.until('/query');
assert(!e.query.hidden);
assert(!e.data.hidden);
assert.strictEqual(e.data.foo,'bar');
assert.strictEqual(e.query.foo,'bar');
});
yield t('Assets',function*(){
var res;
res=yield fetch('/robots.txt');
assert.strictEqual((yield res.text()).trim(),'hi :)');
assert.strictEqual(app.asset('/./../foo/../robots'),'http://localhost:8888/.assets/robots');
app.goTo('/foo/bar');
e=yield app.until('/foo/bar');
assert.strictEqual(app.asset('./foo/../robots'),'http://localhost:8888/.assets/foo/robots');
app.goTo('/asset',{asset:'/./../foo/../robots'});
e=yield app.until('/asset');
assert.strictEqual(e.data,'/.assets/robots');
});
yield t('app.load',function*(){
var error;
assert.deepEqual(yield[
app.load('foo'),
app.load('foo')
],['bar','bar']);
assert.strictEqual(yield app.load('foo'),'bar');
try{yield app.load('bar');}
catch(e){error=e;}
assert(!!error);
});
yield t('Language',function*(){
var lang,e;
app.goTo('/language/client');
e=yield app.until('/language/client');
for(lang of e.language())assert.strictEqual(e.language(lang[0]),1);
assert.strictEqual(e.language('foo-bar'),0);
});
yield t('Cookies',function*(){
var e;
app.goTo('/cookies');
e=yield app.until('/cookies');
e.setCookie({client:'cookie'});
app.goTo('/cookies');
e=yield app.until('/cookies');
assert.strictEqual(e.cookies.client,'cookie');
assert.deepEqual(e.cookies,e.data);
});
yield t('Error',function*(){
app.goTo('/error');
yield app.until('e/400');
app.goTo('/e500');
yield app.until('e/500');
});
yield t('Prefix',function*(){
var e;
app.goTo('/prefix');
e=yield app.until('/prefix');
assert.strictEqual(e.data,app.prefix);
assert.strictEqual(e.data,'');
app.goTo('/prefix');
e=yield app.until('/prefix');
assert.strictEqual(e.data,'');
});
yield t('Url',function*(){
var e;
app.goTo('/url?foo',{bar:'foo'});
e=yield app.until('/url');
assert.strictEqual(e.data.url,e.url);
assert.strictEqual(e.data.url,'/url?foo&bar=foo');
assert.strictEqual(e.data.rawQuery,e.rawQuery);
assert.strictEqual(e.data.rawQuery,'foo&bar=foo');
assert.strictEqual(e.data.fragment,e.fragment);
assert.strictEqual(e.data.fragment,null);
});
yield t('Origin',function*(){
var e;
app.goTo('/origin');
e=yield app.until('/origin');
assert.strictEqual(e.data,null);
assert.strictEqual(e.origin,location.origin);
});
yield t('Language',function*(){
var e;
app.goTo('/language');
e=yield app.until('/language');
assert.strictEqual(e.data.toLowerCase(),e.language().next().value[0].toLowerCase());
});
});
app.trigger();
t.done.listen(function(){
app.goTo('/detach');
});
},{"../main.js":2,"assert":3,"u-test":20,"y-walk":87}]},{},[88])(88)
});