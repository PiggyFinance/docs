"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[389],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=i,k=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(k,a(a({ref:t},u),{},{components:r})):n.createElement(k,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7402:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={sidebar_position:7},c="Security & Risk",l={unversionedId:"security-risk",id:"security-risk",title:"Security & Risk",description:"The DeFi ecosystem is a new financial ecosystem. Before entering DeFi, users must understand project and smart contract risks. This section focuses on the risks associated with BOC.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/security-risk.md",sourceDirName:".",slug:"/security-risk",permalink:"/security-risk",editUrl:"https://github.com/PiggyFinance/docs/blob/master/i18n/en/docusaurus-plugin-content-docs/current/security-risk.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Governance",permalink:"/governance"},next:{title:"Development Planning",permalink:"/development-planning"}},u={},d=[{value:"Yield Dilution Risk",id:"yield-dilution-risk",level:2},{value:"Smart Contract Risk",id:"smart-contract-risk",level:2},{value:"Market Risk",id:"market-risk",level:2},{value:"Transaction Cost Risk",id:"transaction-cost-risk",level:2},{value:"Oracle Attack Risk",id:"oracle-attack-risk",level:2}],p={toc:d};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"security--risk"},"Security & Risk"),(0,o.kt)("p",null,"The DeFi ecosystem is a new financial ecosystem. Before entering DeFi, users must understand project and smart contract risks. This section focuses on the risks associated with BOC."),(0,o.kt)("p",null,"The following is a non-exhaustive list of security properties that were implemented."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In order to avoid losses caused by code vulnerabilities, all protocols shall be audited by reputable auditors."),(0,o.kt)("li",{parentName:"ol"},"In order to reduce the risk of oracle attack, the quotation of the stable coin must be based on the Chain Link rather than the protocol itself."),(0,o.kt)("li",{parentName:"ol"},"In order to avoid the chained system risks caused by nested tokens and Lego blocks, access to the BOC Ecosystem requires long-term safe operation records and community voting permission."),(0,o.kt)("li",{parentName:"ol"},"In order to avoid losses caused by market fluctuations, the agreement to obtain financial returns by providing risk services is temporarily not connected.")),(0,o.kt)("h2",{id:"yield-dilution-risk"},"Yield Dilution Risk"),(0,o.kt)("p",null,"The increased liquidity from big whales can further dilute the yield of investing funds in a particular pool during rebalancing intervals."),(0,o.kt)("h2",{id:"smart-contract-risk"},"Smart Contract Risk"),(0,o.kt)("p",null,"Smart contracts due to the complexities, even audited by the professional, can still post risk and are prone to hacks and unforeseeable events."),(0,o.kt)("h2",{id:"market-risk"},"Market Risk"),(0,o.kt)("p",null,"The counterparty on the borrowers\u2019 side lending protocols are also in default risk that cannot be rectified by liquidation in an extreme case of market fluctuation."),(0,o.kt)("h2",{id:"transaction-cost-risk"},"Transaction Cost Risk"),(0,o.kt)("p",null,"The automatic rebalancing that was triggered by network congestion will result in high transaction fee (gas fee) and affects the final yield rate."),(0,o.kt)("h2",{id:"oracle-attack-risk"},"Oracle Attack Risk"),(0,o.kt)("p",null,"Oracles are the bridge between the blockchain and the real world. Oracles act as on-chain APIs that can be queried for information to smart contracts including but not limited to price information and weather forecasts."),(0,o.kt)("p",null,"BOC oracle risk is divided into 2 parts."),(0,o.kt)("p",null,"If the oracle machine used by the third-party protocol strategy connected by BOC is attacked, the benefits of the protocol will no longer be real. This will affect the BOC to make wrong investment decisions based on the wrong quotation, which in turn affects the APY of the BOC."),(0,o.kt)("p",null,"If the oracle machine used by BOC is attacked (currently using Chainlink), the valuation of the strategy will no longer be accurate, which will affect user deposits and withdrawals."))}f.isMDXComponent=!0}}]);