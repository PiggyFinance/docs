"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[397],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return t?n.createElement(h,i(i({ref:a},p),{},{components:t})):n.createElement(h,i({ref:a},p))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},101:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],l={sidebar_position:5},s="Manual del usuario",d={unversionedId:"user-handbook",id:"user-handbook",title:"Manual del usuario",description:"Esta es una gu\xeda r\xe1pida para interactuar e invertir con la plataforma BOC.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/user-handbook.md",sourceDirName:".",slug:"/user-handbook",permalink:"/es/user-handbook",editUrl:"https://github.com/PiggyFinance/docs/blob/master/i18n/es/docusaurus-plugin-content-docs/current/user-handbook.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Dise\xf1o del algoritmo del protocolo",permalink:"/es/protocol-algorithm-design"},next:{title:"Gobernanza",permalink:"/es/governance"}},p={},c=[{value:"Conexi\xf3n de Wallet (Billetera)",id:"conexi\xf3n-de-wallet-billetera",level:2},{value:"Ajustes de los par\xe1metros",id:"ajustes-de-los-par\xe1metros",level:2},{value:"Cross-chain Bridge",id:"cross-chain-bridge",level:3},{value:"Cambiar de cadena",id:"cambiar-de-cadena",level:3},{value:"Inversi\xf3n y reembolso",id:"inversi\xf3n-y-reembolso",level:2},{value:"Dep\xf3sito",id:"dep\xf3sito",level:3},{value:"Retirada de fondos",id:"retirada-de-fondos",level:3},{value:"Retirada Par\xe1metros avanzados",id:"retirada-par\xe1metros-avanzados",level:3},{value:"A\xf1adir USDi a tu monedero",id:"a\xf1adir-usdi-a-tu-monedero",level:3},{value:"Dashboard (Tablero de mandos)",id:"dashboard-tablero-de-mandos",level:2},{value:"Detalles de la estrategia",id:"detalles-de-la-estrategia",level:2},{value:"An\xe1lisis de inversiones personales",id:"an\xe1lisis-de-inversiones-personales",level:2}],u={toc:c};function m(e){var a=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manual-del-usuario"},"Manual del usuario"),(0,r.kt)("p",null,"Esta es una gu\xeda r\xe1pida para interactuar e invertir con la plataforma BOC.\nEn primer lugar, para completar la inversi\xf3n en BOC tenemos que empezar en la p\xe1gina de inversi\xf3n del usuario. Nos dirigimos a la ",(0,r.kt)("a",{parentName:"p",href:"https://bankofchain.io/#/"},"p\xe1gina de inicio")," y hacemos clic en el bot\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"LAUNCH APP"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"launchapp",src:t(6111).Z,width:"1187",height:"111"})),(0,r.kt)("h2",{id:"conexi\xf3n-de-wallet-billetera"},"Conexi\xf3n de Wallet (Billetera)"),(0,r.kt)("p",null,"Podemos interactuar con BOC a trav\xe9s de una ",(0,r.kt)("a",{parentName:"p",href:"appendix#wallet"},"wallets")," (billetera digital), la APP es compatible ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," y ",(0,r.kt)("a",{parentName:"p",href:"https://walletconnect.com/"},"WalletConnect"),", pulsando el bot\xf3n ",(0,r.kt)("inlineCode",{parentName:"p"},"CONNECT WALLET"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"connectwallet",src:t(3778).Z,width:"1166",height:"106"})),(0,r.kt)("p",null,"Despu\xe9s de conectar el monedero, podemos ver el saldo de USDT en nuestra cuenta."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pic4",src:t(7435).Z,width:"1910",height:"1031"})),(0,r.kt)("h2",{id:"ajustes-de-los-par\xe1metros"},"Ajustes de los par\xe1metros"),(0,r.kt)("h3",{id:"cross-chain-bridge"},"Cross-chain Bridge"),(0,r.kt)("p",null,"BOC proporciona opciones de ",(0,r.kt)("a",{parentName:"p",href:"appendix#puentes-de-blockchain"},"cross-chain bridge"),", en caso de que necesitemos implementar una operaci\xf3n cross-chain."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"chainbridge",src:t(379).Z,width:"1205",height:"193"})),(0,r.kt)("h3",{id:"cambiar-de-cadena"},"Cambiar de cadena"),(0,r.kt)("p",null,"En la actualidad, BOC trabaja en Ethereum, BNB Chain y Polygon. Si necesitamos cambiar de cadena, pueden hacerlo a trav\xe9s de ",(0,r.kt)("inlineCode",{parentName:"p"},"NETWORKS"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"networkchange",src:t(9365).Z,width:"1189",height:"237"})),(0,r.kt)("h2",{id:"inversi\xf3n-y-reembolso"},"Inversi\xf3n y reembolso"),(0,r.kt)("h3",{id:"dep\xf3sito"},"Dep\xf3sito"),(0,r.kt)("p",null,' Una vez que el monedero se ha conectado con \xe9xito, podemos completar el dep\xf3sito seleccionando la cantidad deseada o seleccionando el saldo "Max", y luego haciendo clic en ',(0,r.kt)("inlineCode",{parentName:"p"},"DEPOSIT"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pic7",src:t(5679).Z,width:"1276",height:"774"})),(0,r.kt)("h3",{id:"retirada-de-fondos"},"Retirada de fondos"),(0,r.kt)("p",null,'Despu\xe9s de conectar con \xe9xito el monedero, podemos completar la retirada seleccionando el saldo deseado o seleccionando la el saldo "Max" y haciendo clic en ',(0,r.kt)("inlineCode",{parentName:"p"},"WITHDRAW"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"pic8",src:t(4786).Z,width:"1150",height:"616"})),(0,r.kt)("h3",{id:"retirada-par\xe1metros-avanzados"},"Retirada Par\xe1metros avanzados"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"advancesetting",src:t(1480).Z,width:"1232",height:"794"})),(0,r.kt)("p",null,"Los par\xe1metros de las opciones avanzadas son:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"P\xe9rdida m\xe1xima"),": La p\xe9rdida m\xe1xima en los retiros. Cuando especifiquemos la cuota de retirada, se mostrar\xe1n los activos totales con el valor neto actual, pero estos no son los fondos que podemos obtener finalmente, y pueden producirse p\xe9rdidas durante el proceso de retirada, incluidas las p\xe9rdidas por deslizamiento de cambio. Si nuestros activos totales se estiman en $1000 en este momento, y elegimos Max Loss=0,3%, entonces obtendremos no menos de $997."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Slippage"),": ",(0,r.kt)("a",{parentName:"p",href:"appendix#slippage"},"Slippage")," (deslizamiento) entre diferentes monedas. Podemos especificar el deslizamiento que aceptamos."),(0,r.kt)("h3",{id:"a\xf1adir-usdi-a-tu-monedero"},"A\xf1adir USDi a tu monedero"),(0,r.kt)("p",null,"Si el USDi no aparece en su monedero, tiene que a\xf1adirlo manualmente, logramos hacerlo realmente facil, s\xf3lo hay que hacer clic en el ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," junto a su saldo de USDi dentro de la app y pulsar ",(0,r.kt)("inlineCode",{parentName:"p"},"A\xf1adir Token"),". Entonces ver\xe1s tu saldo de USDi en tu monedero de Metamask."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"addtoken",src:t(6487).Z,width:"1546",height:"863"})),(0,r.kt)("h2",{id:"dashboard-tablero-de-mandos"},"Dashboard (Tablero de mandos)"),(0,r.kt)("p",null,"Desde el ",(0,r.kt)("a",{parentName:"p",href:"appendix#dashboard"},"dashboard")," podemos obtener la siguiente informaci\xf3n relevante sobre nuestros activos y los protocolos que interact\xfaan con ellos."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://dashboard.bankofchain.io"},"https://dashboard.bankofchain.io")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dashboard",src:t(7380).Z,width:"1120",height:"3569"})),(0,r.kt)("p",null,"Cada dato se describe como sigue:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Cantidad de bloqueo de la b\xf3veda en cadena, leer la interfaz del grafo."),(0,r.kt)("li",{parentName:"ol"},"El n\xfamero de usuarios de inversi\xf3n, leer la interfaz del subgrafo."),(0,r.kt)("li",{parentName:"ol"},"APY de los \xfaltimos 30 d\xedas en funci\xf3n del patrimonio neto."),(0,r.kt)("li",{parentName:"ol"},"Proporci\xf3n de fondos de protocolo, consultar la interfaz del subgr\xe1fico."),(0,r.kt)("li",{parentName:"ol"},"El patrimonio total de cada estrategia, consultar la interfaz de contratos."),(0,r.kt)("li",{parentName:"ol"},"APY oficial, se extrae regularmente cada ma\xf1ana."),(0,r.kt)("li",{parentName:"ol"},"Moneda est\xe1ndar beneficio semanal, APY semanal."),(0,r.kt)("li",{parentName:"ol"},"Direcci\xf3n de la estrategia."),(0,r.kt)("li",{parentName:"ol"},"Registros de operaciones de la b\xf3veda, mostrados con el navegador de la cadena de bloques.")),(0,r.kt)("p",null,"Gr\xe1ficas BOC:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ETH: ",(0,r.kt)("a",{parentName:"p",href:"https://api.thegraph.com/subgraphs/name/bankofchain/boc-subgraph-eth"},"https://api.thegraph.com/subgraphs/name/bankofchain/boc-subgraph-eth"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"BNB: ",(0,r.kt)("a",{parentName:"p",href:"https://api.thegraph.com/subgraphs/name/bankofchain/boc-subgraph-bsc"},"https://api.thegraph.com/subgraphs/name/bankofchain/boc-subgraph-bsc"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"POLYGON: ",(0,r.kt)("a",{parentName:"p",href:"https://api.thegraph.com/subgraphs/name/bankofchain/boc-subgraph-matic"},"https://api.thegraph.com/subgraphs/name/bankofchain/boc-subgraph-matic")))),(0,r.kt)("h2",{id:"detalles-de-la-estrategia"},"Detalles de la estrategia"),(0,r.kt)("p",null,"Tome SushiUsdcUsdtStrategy como ejemplo, entre en la p\xe1gina de detalles de la estrategia como se muestra en la figura:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"detail",src:t(4750).Z,width:"1120",height:"1948"})),(0,r.kt)("p",null,"Cada dato se describe como sigue:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Datos de la p\xf3liza",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Nombre de la p\xf3liza"),(0,r.kt)("li",{parentName:"ul"},"Stablecoins aceptados por la estrategia"),(0,r.kt)("li",{parentName:"ul"},"Los activos totales actuales de la estrategia (valorados en USDT)"),(0,r.kt)("li",{parentName:"ul"},"Los activos totales de la inversi\xf3n hist\xf3rica de la estrategia (valorados en USDT)"))),(0,r.kt)("li",{parentName:"ol"},"Rendimiento hist\xf3rico del APY de la estrategia",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"APY oficial hist\xf3rico (l\xednea amarilla)"),(0,r.kt)("li",{parentName:"ul"},"APY semanal hist\xf3rico (l\xednea azul)"))),(0,r.kt)("li",{parentName:"ol"},"Activos totales de la estrategia (moneda est\xe1ndar)"),(0,r.kt)("li",{parentName:"ol"},"Cambios en los activos de las operaciones de la estrategia (moneda est\xe1ndar)"),(0,r.kt)("li",{parentName:"ol"},"Tipo de acci\xf3n de la estrategia",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"harvest"),": La estrategia completa la venta y reinversi\xf3n de una mina, e informa de la valoraci\xf3n total de los activos"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lend"),": La b\xf3veda pone fondos en la estrategia, y esta acci\xf3n ocurre en la asignaci\xf3n de fondos (",(0,r.kt)("inlineCode",{parentName:"li"},"doHardWork"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"allocation"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"redeem"),": Vault retira fondos de la estrategia, y esta acci\xf3n se produce en la asignaci\xf3n de fondos (",(0,r.kt)("inlineCode",{parentName:"li"},"allocation"),")")))),(0,r.kt)("h2",{id:"an\xe1lisis-de-inversiones-personales"},"An\xe1lisis de inversiones personales"),(0,r.kt)("p",null,"Entre en la p\xe1gina de an\xe1lisis de inversiones personales para ver los ingresos de las inversiones personales."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"personalpage",src:t(4322).Z,width:"1136",height:"1816"})),(0,r.kt)("p",null,"Cada dato se describe como sigue:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Valoraci\xf3n del activo total de la inversi\xf3n personal (calculada en USDT)."),(0,r.kt)("li",{parentName:"ol"},"Acci\xf3n de BOC adquirida."),(0,r.kt)("li",{parentName:"ol"},"Pasar 30 d\xedas ",(0,r.kt)("a",{parentName:"li",href:"appendix#annual-yield-apy"},"APY"),"."),(0,r.kt)("li",{parentName:"ol"},"Ganancias no retiradas (calculadas en USDT)."),(0,r.kt)("li",{parentName:"ol"},"Ganancias retiradas (calculadas en USDT)."),(0,r.kt)("li",{parentName:"ol"},"Activos totales personales hist\xf3ricos."),(0,r.kt)("li",{parentName:"ol"},"Ingresos mensuales")))}m.isMDXComponent=!0},6487:function(e,a,t){a.Z=t.p+"assets/images/addtoken-f2f69fc314bf883d9b55c804ac280646.png"},1480:function(e,a,t){a.Z=t.p+"assets/images/advancesetting-f9b265ed580517e34f33a694e9180c80.png"},379:function(e,a,t){a.Z=t.p+"assets/images/chainbridge-07e565ca5c2954b8655b42aeb869e850.png"},3778:function(e,a,t){a.Z=t.p+"assets/images/connectwallet-1723535f3901220ce7eda2cb4f51153b.png"},7380:function(e,a,t){a.Z=t.p+"assets/images/dashboard-ad19a1bdeb7542ce2c0d856cc1a5b8c1.jpg"},4750:function(e,a,t){a.Z=t.p+"assets/images/detail-a55717f19f295633e48d3ab7cc71bad8.jpg"},6111:function(e,a,t){a.Z=t.p+"assets/images/launchapp-0d883794fe18ef48e83009291b92beb4.png"},9365:function(e,a,t){a.Z=t.p+"assets/images/networkchange-8ec8351f90e12d4000b2c850edfe8e4e.png"},4322:function(e,a,t){a.Z=t.p+"assets/images/personalpage-bd5e295c69cb0db9b40d0b713054a8bc.jpg"},7435:function(e,a,t){a.Z=t.p+"assets/images/pic-4-f772b3594ddbebdb091be1951e69e351.png"},5679:function(e,a,t){a.Z=t.p+"assets/images/pic-7-d83ca3166fe9e84e9ea80a34b0c3d5e1.png"},4786:function(e,a,t){a.Z=t.p+"assets/images/pic-8-05d7db34411677e0c1897b5ae5b1907d.png"}}]);