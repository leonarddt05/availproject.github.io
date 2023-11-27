"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[3394],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));n(4996);const i={id:"node-types",title:"What are the Types of Nodes in the Avail Network?",sidebar_label:"Types of Nodes",description:"Understand the various types of nodes in the Avail network and their unique functionalities.",keywords:["docs","avail","node","data availability","da"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},o=void 0,l={unversionedId:"operate/node-types",id:"operate/node-types",title:"What are the Types of Nodes in the Avail Network?",description:"Understand the various types of nodes in the Avail network and their unique functionalities.",source:"@site/docs/operate/node-types.md",sourceDirName:"operate",slug:"/operate/node-types",permalink:"/operate/node-types",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/operate/node-types.md",tags:[],version:"current",lastUpdatedBy:"DSalman03",lastUpdatedAt:1699123125,formattedLastUpdatedAt:"Nov 4, 2023",frontMatter:{id:"node-types",title:"What are the Types of Nodes in the Avail Network?",sidebar_label:"Types of Nodes",description:"Understand the various types of nodes in the Avail network and their unique functionalities.",keywords:["docs","avail","node","data availability","da"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Operate a Node",permalink:"/category/operate-a-node"},next:{title:"Run a Light Client",permalink:"/category/run-a-light-client"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Node Types Comparison",id:"node-types-comparison",level:2},{value:"Overview of Node Types",id:"overview-of-node-types",level:2},{value:"Light Clients",id:"light-clients",level:3},{value:"Full Nodes",id:"full-nodes",level:3},{value:"Validator Nodes",id:"validator-nodes",level:3},{value:"Archive Nodes",id:"archive-nodes",level:3},{value:"Pruned Nodes",id:"pruned-nodes",level:3},{value:"RPC Nodes",id:"rpc-nodes",level:3},{value:"Bootstrap Nodes",id:"bootstrap-nodes",level:3},{value:"Relay Nodes",id:"relay-nodes",level:3},{value:"Next Steps",id:"next-steps",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"While Avail diverges from conventional blockchain frameworks to concentrate on modular solutions tailored for data availability, it continues to utilize a diverse array of node types. These nodes differ in their functions, storage needs, and levels of engagement within the network."),(0,r.kt)("h2",{id:"node-types-comparison"},"Node Types Comparison"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Infrastructure providers can host all types of Avail nodes."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Node Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Storage Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"Network Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Special Features"),(0,r.kt)("th",{parentName:"tr",align:null},"Use Case"),(0,r.kt)("th",{parentName:"tr",align:null},"Typically Hosted By"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Light Clients"),(0,r.kt)("td",{parentName:"tr",align:null},"Low"),(0,r.kt)("td",{parentName:"tr",align:null},"Interaction"),(0,r.kt)("td",{parentName:"tr",align:null},"Minimal Storage"),(0,r.kt)("td",{parentName:"tr",align:null},"Quick Queries, Low-resource Environments"),(0,r.kt)("td",{parentName:"tr",align:null},"End users in low-resource environments")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Full Nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Moderate"),(0,r.kt)("td",{parentName:"tr",align:null},"Core"),(0,r.kt)("td",{parentName:"tr",align:null},"Network Access"),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction Verification, Data Retrieval"),(0,r.kt)("td",{parentName:"tr",align:null},"Regular network participants, those involved in verification")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Validator Nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Moderate"),(0,r.kt)("td",{parentName:"tr",align:null},"Core"),(0,r.kt)("td",{parentName:"tr",align:null},"Block Production"),(0,r.kt)("td",{parentName:"tr",align:null},"Network Security, Governance"),(0,r.kt)("td",{parentName:"tr",align:null},"Trusted entities, elected participants, staked node providers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Archive Nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"High"),(0,r.kt)("td",{parentName:"tr",align:null},"Auxiliary"),(0,r.kt)("td",{parentName:"tr",align:null},"Historical Data"),(0,r.kt)("td",{parentName:"tr",align:null},"Auditing, Compliance, Reference"),(0,r.kt)("td",{parentName:"tr",align:null},"Institutions, researchers, those needing comprehensive historical data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pruned Nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Variable"),(0,r.kt)("td",{parentName:"tr",align:null},"Core"),(0,r.kt)("td",{parentName:"tr",align:null},"Disk Space Efficiency"),(0,r.kt)("td",{parentName:"tr",align:null},"Limited Storage Environments"),(0,r.kt)("td",{parentName:"tr",align:null},"Users with limited storage capacity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RPC Nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Moderate"),(0,r.kt)("td",{parentName:"tr",align:null},"Gateway"),(0,r.kt)("td",{parentName:"tr",align:null},"API Exposure"),(0,r.kt)("td",{parentName:"tr",align:null},"Development, Remote Access"),(0,r.kt)("td",{parentName:"tr",align:null},"Developers, entities requiring remote network access")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bootstrap Nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Low"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial"),(0,r.kt)("td",{parentName:"tr",align:null},"Network Entry"),(0,r.kt)("td",{parentName:"tr",align:null},"Network Initialization"),(0,r.kt)("td",{parentName:"tr",align:null},"Early network participants")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Relay Nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Moderate"),(0,r.kt)("td",{parentName:"tr",align:null},"Mediator"),(0,r.kt)("td",{parentName:"tr",align:null},"Connectivity"),(0,r.kt)("td",{parentName:"tr",align:null},"NAT Traversal; Firewall Bypass"),(0,r.kt)("td",{parentName:"tr",align:null},"End users, businesses setting up private networks")))),(0,r.kt)("h2",{id:"overview-of-node-types"},"Overview of Node Types"),(0,r.kt)("h3",{id:"light-clients"},"Light Clients"),(0,r.kt)("p",null,"Light clients allow users to interact with the blockchain without downloading the entire transaction history. They rely on a trusted set of nodes for the data needed to engage with the network."),(0,r.kt)("h3",{id:"full-nodes"},"Full Nodes"),(0,r.kt)("p",null,"Full nodes maintain the blockchain's current state but do not store its entire history. Optimized for quick access to current data, they are ideal for tasks like transaction verification."),(0,r.kt)("h3",{id:"validator-nodes"},"Validator Nodes"),(0,r.kt)("p",null,"Validator nodes are specialized full nodes that participate in block production and network governance. They are staked to ensure network security and integrity."),(0,r.kt)("h3",{id:"archive-nodes"},"Archive Nodes"),(0,r.kt)("p",null,"Archive nodes store the complete transaction history, making them valuable for auditing and historical data analysis. However, they require significant storage and computational resources."),(0,r.kt)("h3",{id:"pruned-nodes"},"Pruned Nodes"),(0,r.kt)("p",null,"Pruned nodes discard certain historical data to reduce storage requirements while still participating in network consensus. They maintain only the most recent state."),(0,r.kt)("h3",{id:"rpc-nodes"},"RPC Nodes"),(0,r.kt)("p",null,"RPC nodes expose an API for remote interactions, serving as a gateway for developers and external clients to engage with the Avail network."),(0,r.kt)("h3",{id:"bootstrap-nodes"},"Bootstrap Nodes"),(0,r.kt)("p",null,"Bootstrap nodes serve as initial connection points for new nodes joining the network. They are essential for network stability and discovery as they help new nodes join the network, discover peers, and maintain connectivity."),(0,r.kt)("h3",{id:"relay-nodes"},"Relay Nodes"),(0,r.kt)("p",null,"Relay nodes act as intermediaries to enable communication between peers that cannot establish a direct connection, often due to firewalls or NAT issues."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Now that you have a comprehensive understanding of the various node types within the Avail network, it's recommended to take your first step by setting up a Light Client. Before you begin, make sure to review the ",(0,r.kt)("a",{parentName:"p",href:"/operate/system-requirements"},(0,r.kt)("ins",null,"System Requirements guide")),". Once you're ready, you can proceed to the ",(0,r.kt)("a",{parentName:"p",href:"/operate/node/light-client"},(0,r.kt)("ins",null,"Light Client Deployment guide"))," to get started."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Light Clients provide an accessible entry point to the Avail network, enabling quick interactions without storing the full blockchain. Ideal for newcomers, they play an integral role in maintaining a robust data availability layer.")))}c.isMDXComponent=!0}}]);