"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[311],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return f}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),d=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=d(r),f=n,k=m["".concat(p,".").concat(f)]||m[f]||u[f]||l;return r?a.createElement(k,i(i({ref:e},c),{},{components:r})):a.createElement(k,i({ref:e},c))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5971:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=r(7462),n=r(3366),l=(r(7294),r(3905)),i=["components"],o={sidebar_position:9},p="\u9644\u5f55",d={unversionedId:"chapter9",id:"chapter9",title:"\u9644\u5f55",description:"\u8bcd\u6c47\u8868",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/chapter9.md",sourceDirName:".",slug:"/chapter9",permalink:"/zh/chapter9",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chapter9.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u53d1\u89c4\u5212",permalink:"/zh/chapter8"},next:{title:"\u53c2\u8003\u6587\u732e",permalink:"/zh/chapter10"}},c={},u=[{value:"\u8bcd\u6c47\u8868",id:"\u8bcd\u6c47\u8868",level:2},{value:"\u53bb\u4e2d\u5fc3\u5316\u91d1\u878d\uff08DeFi\uff09",id:"\u53bb\u4e2d\u5fc3\u5316\u91d1\u878ddefi",level:3},{value:"\u81ea\u52a8\u505a\u5e02\u5546\uff08AMM\uff09",id:"\u81ea\u52a8\u505a\u5e02\u5546amm",level:3},{value:"\u501f\u8d37\u534f\u8bae\uff08Lending Protocol\uff09",id:"\u501f\u8d37\u534f\u8baelending-protocol",level:3},{value:"\u6536\u76ca\u805a\u5408\u5668\uff08Yield Aggregators\uff09",id:"\u6536\u76ca\u805a\u5408\u5668yield-aggregators",level:3},{value:"\u673a\u67aa\u6c60\uff08Vaults\uff09",id:"\u673a\u67aa\u6c60vaults",level:3},{value:"\u6ed1\u70b9\uff08Slippage\uff09",id:"\u6ed1\u70b9slippage",level:3},{value:"\u5b9a\u65f6\u5668\uff08Keeper\uff09",id:"\u5b9a\u65f6\u5668keeper",level:3},{value:"\u5e74\u6536\u76ca\u7387\uff08APY\uff09",id:"\u5e74\u6536\u76ca\u7387apy",level:3},{value:"\u533a\u5757\u94fe\u534f\u8bae\uff08Protocol\uff09",id:"\u533a\u5757\u94fe\u534f\u8baeprotocol",level:2},{value:"\u7b56\u7565\uff08Strategy\uff09",id:"\u7b56\u7565strategy",level:2},{value:"\u7f29\u7565\u8bcd\u8868",id:"\u7f29\u7565\u8bcd\u8868",level:2}],m={toc:u};function f(t){var e=t.components,r=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u9644\u5f55"},"\u9644\u5f55"),(0,l.kt)("h2",{id:"\u8bcd\u6c47\u8868"},"\u8bcd\u6c47\u8868"),(0,l.kt)("h3",{id:"\u53bb\u4e2d\u5fc3\u5316\u91d1\u878ddefi"},"\u53bb\u4e2d\u5fc3\u5316\u91d1\u878d\uff08DeFi\uff09"),(0,l.kt)("p",null,"\u53bb\u4e2d\u5fc3\u5316\u91d1\u878d\uff08Decentralized Finance\uff09\u662f\u4e00\u79cd\u521b\u5efa\u4e8e\u533a\u5757\u94fe\u4e0a\u7684\u91d1\u878d\uff0c\u5b83\u4e0d\u4f9d\u8d56\u5238\u5546\u3001\u4ea4\u6613\u6240\u6216\u94f6\u884c\u7b49\u91d1\u878d\u673a\u6784\u63d0\u4f9b\u91d1\u878d\u5de5\u5177\uff0c\u800c\u662f\u5229\u7528\u533a\u5757\u94fe\u4e0a\u7684\u667a\u80fd\u5408\u7ea6\uff08\u4f8b\u5982\u4ee5\u592a\u574a\uff09\u8fdb\u884c\u91d1\u878d\u6d3b\u52a8\u3002DeFi\u5e73\u53f0\u5141\u8bb8\u4eba\u4eec\u5411\u4ed6\u4eba\u501f\u51fa\u6216\u501f\u5165\u8d44\u91d1\uff0c\u4ea4\u6613\u52a0\u5bc6\u8d27\u5e01\uff0c\u5e76\u5728\u7c7b\u4f3c\u50a8\u84c4\u7684\u8d26\u6237\u4e2d\u83b7\u5f97\u5229\u606f\u3002"),(0,l.kt)("h3",{id:"\u81ea\u52a8\u505a\u5e02\u5546amm"},"\u81ea\u52a8\u505a\u5e02\u5546\uff08AMM\uff09"),(0,l.kt)("p",null,"\u81ea\u52a8\u505a\u5e02\u5546\u662f\u4e00\u79cd\u81ea\u4e3b\u4ea4\u6613\u673a\u5236\uff0c\u65e0\u9700\u96c6\u4e2d\u4ea4\u6613\u548c\u76f8\u5173\u505a\u5e02\u6280\u672f\u3002\u5b83\u9f13\u52b1\u7528\u6237\u6210\u4e3a\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\uff0c\u4ee5\u6362\u53d6\u4e00\u90e8\u5206\u4ea4\u6613\u8d39\u7528\u548c\u514d\u8d39\u4ee3\u5e01\u3002"),(0,l.kt)("h3",{id:"\u501f\u8d37\u534f\u8baelending-protocol"},"\u501f\u8d37\u534f\u8bae\uff08Lending Protocol\uff09"),(0,l.kt)("p",null,"\u501f\u8d37\u534f\u8bae\u7531\u501f\u65b9\uff08lenders\uff09\u548c\u8d37\u65b9\uff08borrowers\uff09\u7ec4\u6210\u7684\u5e73\u53f0\u3002\u4e00\u65b9\u9762\uff0c\u5b83\u5141\u8bb8\u8d37\u65b9\u4ece\u5e73\u53f0\u501f\u8d37\u6570\u5b57\u52a0\u5bc6\u8d27\u5e01\u5e76\u652f\u4ed8\u5229\u606f\uff0c\u53e6 \u4e00\u65b9\u9762\u5b83\u5141\u8bb8\u50a8\u6237\u5411\u5e73\u53f0\u5b58\u5165\u6570\u5b57\u52a0\u5bc6\u8d27\u5e01\u4ee5\u8d5a\u53d6\u5229\u606f\u3002\u4e0e\u94f6\u884c\u7684\u5b58\u6b3e \u8d26\u6237\u76f8\u6bd4DeFi\u501f\u8d37\u534f\u8bae\u901a\u5e38\u53ef\u4ee5\u63d0\u4f9b\u9ad8\u5f97\u591a\u7684\u5229\u606f\u3002"),(0,l.kt)("h3",{id:"\u6536\u76ca\u805a\u5408\u5668yield-aggregators"},"\u6536\u76ca\u805a\u5408\u5668\uff08Yield Aggregators\uff09"),(0,l.kt)("p",null,"\u6536\u76ca\u805a\u5408\u5668\uff0c\u662f\u4e00\u4e2a\u652f\u6301\u591a\u79cdDeFi\u534f\u8bae\u7684\u805a\u5408\u5e73\u53f0\uff0c\u5b83\u53ef\u4ee5\u5728\u5404\u4e2a\u63d0\u4f9b\u6d41\u52a8\u6027\u6316\u77ff\u7684DeFi\u534f\u8bae\u4e4b\u95f4\u81ea\u52a8\u8fdb\u884c\u79fb\u4ed3\uff0c\u5e2e\u52a9\u7528\u6237\u83b7\u5f97\u66f4\u9ad8\u7684\u6536\u76ca\u3002"),(0,l.kt)("h3",{id:"\u673a\u67aa\u6c60vaults"},"\u673a\u67aa\u6c60\uff08Vaults\uff09"),(0,l.kt)("p",null,"\u673a\u67aa\u6c60\u662f\u4e00\u79cd\u590d\u6742\u7684\u6295\u8d44\u7b56\u7565\uff0c\u5b83\u7ed3\u5408\u4e86\u501f\u8d37\u3001\u8d28\u62bc\u3001\u4ea4\u6613\u7b49\uff0c\u4f7f\u5229\u6da6\u6700\u5927\u5316\u3002"),(0,l.kt)("h3",{id:"\u6ed1\u70b9slippage"},"\u6ed1\u70b9\uff08Slippage\uff09"),(0,l.kt)("p",null,"\u6ed1\u70b9\uff0c\u4e00\u822c\u6307\u771f\u5b9e\u7684\u6210\u4ea4\u4ef7\u4f4d\u4e0e\u9884\u8bbe\u7684\u6210\u4ea4\u4ef7\u4f4d\u95f4\u51fa\u73b0\u504f\u79fb\uff0c\u8fd9\u79cd\u504f\u79fb\u4e00\u822c\u662f\u5411\u4e0d\u5229\u4e8e\u4ea4\u6613\u8005\u7684\u65b9\u5411\u79fb\u52a8\uff0c\u5bfc\u81f4\u4ea4\u6613\u51fa\u73b0\u989d\u5916\u7684\u635f\u5931\u3002"),(0,l.kt)("h3",{id:"\u5b9a\u65f6\u5668keeper"},"\u5b9a\u65f6\u5668\uff08Keeper\uff09"),(0,l.kt)("p",null,"Keeper\u662fBOC\u9879\u76ee\u81ea\u5df1\u5f00\u53d1\u7684\u4e2d\u5fc3\u5316\u5b9a\u65f6\u5668\uff0c\u7528\u4e8e\u94fe\u4e0a\u4efb\u52a1\u7684\u5b9a\u65f6\u89e6\u53d1\uff08\u6536\u5272\u3001\u8c03\u4ed3\u3001\u589e\u91cf\u8d44\u91d1\u590d\u6295\u7b49\uff09\u3002"),(0,l.kt)("h3",{id:"\u5e74\u6536\u76ca\u7387apy"},"\u5e74\u6536\u76ca\u7387\uff08APY\uff09"),(0,l.kt)("p",null,"\u5e74\u6536\u76ca\u7387\uff08Annual Percentage Yield\uff09\u662f\u8861\u91cf\u6295\u8d44\u8d26\u6237\u5728\u4e00\u5e74\u4e2d\u8d5a\u591a\u5c11\u94b1\u7684\u4e00\u79cd\u65b9\u5f0f\uff0c\u662f\u4e00\u79cd\u8861\u91cf\u5229\u606f\u968f\u65f6\u95f4\u4e0a\u6da8\u7684\u65b9\u6cd5\u3002\u57fa\u672c\u8ba1\u7b97\u516c\u5f0f\u662f\n$$\nAPY=(1+APR)^{periods}-1\n$$\n\u5176\u4e2dperiods\u53c2\u6570\u662f\u5229\u606f\u53d1\u653e\u5468\u671f\u3002"),(0,l.kt)("h2",{id:"\u533a\u5757\u94fe\u534f\u8baeprotocol"},"\u533a\u5757\u94fe\u534f\u8bae\uff08Protocol\uff09"),(0,l.kt)("p",null,"\u533a\u5757\u94fe\u534f\u8bae\uff0c\u662f\u4e00\u7ec4\u89c4\u8303\u533a\u5757\u94fe\u5982\u4f55\u8fd0\u4f5c\u7684\u4ee3\u7801\u6216\u8981\u6c42\uff0c\u5b83\u5236\u5b9a\u4e86\u4e00\u7cfb\u5217\u5e7f\u6cdb\u7684\u89c4\u5219\uff0c\u4f8b\u5982\u533a\u5757\u94fe\u7684\u63a5\u53e3\u3001\u53c2\u4e0e\u7684\u8ba1\u7b97\u673a\u7684\u4ea4\u4e92\u3001\u5e94\u8be5\u5171\u4eab\u7684\u6570\u636e\u7c7b\u578b\u3001\u5bf9\u53c2\u4e0e\u7f51\u7edc\u7684\u5f00\u53d1\u4eba\u5458\u7684\u6fc0\u52b1\u7b49\u7b49\u3002"),(0,l.kt)("h2",{id:"\u7b56\u7565strategy"},"\u7b56\u7565\uff08Strategy\uff09"),(0,l.kt)("p",null,"\u7b56\u7565\uff0c\u5728BOC\u4e2d\u7684\u6982\u5ff5\u662f\u6307\u4e0e\u7b2c\u4e09\u65b9\u534f\u8bae\u8fdb\u884c\u5bf9\u63a5\u7684\u667a\u80fd\u5408\u7ea6\u3002BOC Vault\u6709\u591a\u4e2a\u7b56\u7565\uff0c\u7b56\u7565\u4e0e\u5916\u90e8\u7b2c\u4e09\u65b9\u534f\u8bae\u662f\u4e00\u5bf9\u4e00\u3002"),(0,l.kt)("h2",{id:"\u7f29\u7565\u8bcd\u8868"},"\u7f29\u7565\u8bcd\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7f29\u7565\u8bcd"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DEX"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53bb\u4e2d\u5fc3\u5316\u4ea4\u6613\u6240\uff08Decentralized Exchange\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"AMM"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u81ea\u52a8\u505a\u5e02\u5546\uff08Automated Market Makers\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"API"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u7a0b\u5e8f\u7f16\u7a0b\u63a5\u53e3\uff08Application Programming Interface\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"APY"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5e74\u6536\u76ca\u7387\uff08Annual Percentage Yield\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"TVL"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u603b\u9501\u5b9a\u4ef7\u503c\uff08Total Value Locked\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"BOC"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Bank Of Chain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DAPP / dApp"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53bb\u4e2d\u5fc3\u5316\u5e94\u7528\uff08Decentralized Application\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"DeFi"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u53bb\u4e2d\u5fc3\u5316\u91d1\u878d\uff08Decentralized Finance\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"EVM"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4ee5\u592a\u574a\u865a\u62df\u673a\uff08Ethereum Virtual Machine\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"FX"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5916\u6c47\uff08Foreign Exchange\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"KYC"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e86\u89e3\u4f60\u7684\u5ba2\u6237\uff08Know Your Customer)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"LP"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6d41\u52a8\u6027\u63d0\u4f9b\u8005\uff08Liquidity Provider\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"PoS"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6743\u76ca\u8bc1\u660e\uff08Proof of Stake\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"PoSA"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6743\u76ca\u6743\u5a01\u8bc1\u660e\uff08Proof of Stake Authority\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"PoW"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5de5\u4f5c\u91cf\u8bc1\u660e\uff08Proof of Work\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Tx"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4ea4\u6613\uff08Transaction\uff09")))))}f.isMDXComponent=!0}}]);