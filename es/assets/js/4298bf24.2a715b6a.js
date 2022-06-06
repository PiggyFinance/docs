"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[204],{3905:function(e,r,n){n.d(r,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=o.createContext({}),c=function(e){var r=o.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=c(e.components);return o.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=t,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(g,i(i({ref:r},d),{},{components:n})):o.createElement(g,i({ref:r},d))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8717:function(e,r,n){n.r(r),n.d(r,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(7462),t=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:7},l="Seguridad y Riesgos",c={unversionedId:"security-risk",id:"security-risk",title:"Seguridad y Riesgos",description:"El ecosistema DeFi es un nuevo ecosistema financiero. Antes de ingresar a DeFi, los usuarios deben comprender los riesgos de inversi\xf3n y contrato inteligente. Esta secci\xf3n se centra en los riesgos asociados con BOC.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/security-risk.md",sourceDirName:".",slug:"/security-risk",permalink:"/es/security-risk",editUrl:"https://github.com/PiggyFinance/docs/blob/master/i18n/es/docusaurus-plugin-content-docs/current/security-risk.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Gobernanza",permalink:"/es/governance"},next:{title:"Planificaci\xf3n del desarrollo",permalink:"/es/development-planning"}},d={},u=[{value:"Riesgo de diluci\xf3n de rendimiento",id:"riesgo-de-diluci\xf3n-de-rendimiento",level:2},{value:"Riesgo de contrato inteligente",id:"riesgo-de-contrato-inteligente",level:2},{value:"Riesgo de mercado",id:"riesgo-de-mercado",level:2},{value:"Riesgo de costo de transacci\xf3n",id:"riesgo-de-costo-de-transacci\xf3n",level:2},{value:"Riesgo de ataque de Oracle",id:"riesgo-de-ataque-de-oracle",level:2}],p={toc:u};function m(e){var r=e.components,n=(0,t.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"seguridad-y-riesgos"},"Seguridad y Riesgos"),(0,a.kt)("p",null,"El ecosistema DeFi es un nuevo ecosistema financiero. Antes de ingresar a DeFi, los usuarios deben comprender los riesgos de inversi\xf3n y contrato inteligente. Esta secci\xf3n se centra en los riesgos asociados con BOC."),(0,a.kt)("p",null,"La siguiente es una lista no exhaustiva de las medidas de seguridad que se implementaron:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Para poder evitar p\xe9rdidas causadas por vulnerabilidades de c\xf3digo, todos los protocolos deben ser auditados por auditores acreditados."),(0,a.kt)("li",{parentName:"ol"},"Para reducir el riesgo de un ataque al Oracle, la cotizaci\xf3n de la stablecoin debe basarse en ChainLink en lugar del protocolo en s\xed."),(0,a.kt)("li",{parentName:"ol"},"Para evitar el riesgo del sistema de cadena causado por tokens anidados y combinaciones de LEGO, el acceso al protocolo de gesti\xf3n financiera agregada debe tener un registro de operaci\xf3n de seguridad a largo plazo y obtener el permiso de voto de la comunidad."),(0,a.kt)("li",{parentName:"ol"},"Con el fin de evitar p\xe9rdidas transitorias provocadas por las fluctuaciones del mercado, por el momento no se acceder\xe1 al protocolo de obtenci\xf3n de rendimientos de capital mediante la prestaci\xf3n de servicios de riesgo. Al mismo tiempo, el apalancamiento no se est\xe1 utilizando para aumentar los rendimientos del capital por el momento.")),(0,a.kt)("h2",{id:"riesgo-de-diluci\xf3n-de-rendimiento"},"Riesgo de diluci\xf3n de rendimiento"),(0,a.kt)("p",null,"La mayor liquidez de las grandes ballenas puede diluir a\xfan m\xe1s el rendimiento de los fondos de inversi\xf3n en un grupo en particular durante los intervalos de reequilibrio."),(0,a.kt)("h2",{id:"riesgo-de-contrato-inteligente"},"Riesgo de contrato inteligente"),(0,a.kt)("p",null,"Los contratos inteligentes debido a las complejidades, incluso auditados por el profesional, a\xfan pueden presentar riesgos y son propensos a ataques y eventos imprevisibles."),(0,a.kt)("h2",{id:"riesgo-de-mercado"},"Riesgo de mercado"),(0,a.kt)("p",null,"Los protocolos de pr\xe9stamo de la contraparte del lado del prestatario tambi\xe9n est\xe1n en riesgo de incumplimiento que no puede ser rectificado por liquidaci\xf3n en un caso extremo de fluctuaci\xf3n del mercado."),(0,a.kt)("h2",{id:"riesgo-de-costo-de-transacci\xf3n"},"Riesgo de costo de transacci\xf3n"),(0,a.kt)("p",null,"El reequilibrio autom\xe1tico que se desencaden\xf3 por la congesti\xf3n de la red dar\xe1 como resultado una tarifa de transacci\xf3n alta (tarifa de gas) y afectar\xe1 la tasa de rendimiento final."),(0,a.kt)("h2",{id:"riesgo-de-ataque-de-oracle"},"Riesgo de ataque de Oracle"),(0,a.kt)("p",null,"Los or\xe1culos son el puente entre la cadena de bloques y el mundo real. Los or\xe1culos act\xfaan como API en cadena que se pueden consultar para obtener informaci\xf3n sobre contratos inteligentes, incluidos, entre otros, informaci\xf3n de precios y pron\xf3sticos meteorol\xf3gicos."),(0,a.kt)("p",null,"El riesgo del or\xe1culo BOC se divide en:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Si el Oraculo utilizado por la estrategia de protocolo de terceros conectada por BOC es atacada, los beneficios del protocolo ya no ser\xe1n reales. Esto afectar\xe1 al BOC para que tome decisiones de inversi\xf3n incorrectas basadas en una cotizaci\xf3n incorrecta, lo que a su vez afectar\xe1 el APY del BOC.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Si se ataca el Oraculo utilizado por BOC (que actualmente utiliza Chainlink), la valoraci\xf3n de la estrategia dejar\xe1 de ser precisa, lo que afectar\xe1 a los dep\xf3sitos y retiros de los usuarios."))))}m.isMDXComponent=!0}}]);