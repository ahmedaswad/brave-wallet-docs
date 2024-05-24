"use strict";(self.webpackChunkbrave_wallet_docs=self.webpackChunkbrave_wallet_docs||[]).push([[990],{8176:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=t(5893),a=t(1151);const r={sidebar_position:3},o="Sending transactions",i={id:"ethereum/use-cases/sending-transactions",title:"Sending transactions",description:"These requests will need to be approved by users in order to sign transactions.",source:"@site/docs/ethereum/use-cases/sending-transactions.md",sourceDirName:"ethereum/use-cases",slug:"/ethereum/use-cases/sending-transactions",permalink:"/ethereum/use-cases/sending-transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/brave/brave-wallet-docs/edit/main/docs/ethereum/use-cases/sending-transactions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Connecting your site",permalink:"/ethereum/use-cases/connecting-your-site"},next:{title:"Signing data",permalink:"/ethereum/use-cases/signing-data"}},c={},d=[{value:"eth_sendTransaction",id:"eth_sendtransaction",level:2},{value:"eth_signTransaction and eth_sendRawTransaction",id:"eth_signtransaction-and-eth_sendrawtransaction",level:2}];function h(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"sending-transactions",children:"Sending transactions"}),"\n",(0,s.jsx)(e.p,{children:"These requests will need to be approved by users in order to sign transactions."}),"\n",(0,s.jsx)(e.h2,{id:"eth_sendtransaction",children:"eth_sendTransaction"}),"\n",(0,s.jsxs)(e.p,{children:["Sites can request that a transaction be signed / sent by using the ",(0,s.jsx)(e.code,{children:"eth_sendTransaction"})," method."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"async function sendTransaction() {\n  const accounts = await window.ethereum.request({\n    id: '191',\n    method: 'eth_accounts',\n    params: [],\n  })\n  if (accounts.length === 0) {\n    console.log('No accounts allowed')\n    return\n  }\n  const from = accounts[0]\n  const params = [{\n    from,\n    // Change this to a different address\n    to: from,\n    value: '0x16345785D8A0000'\n    // data: '0x...'\n    //\n    // Gas propeties are not needed, but if you specify them,\n    // you can use either:\n    // `maxPriorityFeePerGas`\n    // `maxFeePerGas`\n    // or\n    // `gasPrice`\n  }]\n\n  return await window.ethereum.request({\n    method: 'eth_sendTransaction',\n    params\n  })\n}\nconsole.log(await sendTransaction())\n"})}),"\n",(0,s.jsxs)(e.p,{children:["For more information, see: ",(0,s.jsx)(e.a,{href:"https://eth.wiki/json-rpc/API#eth_sendtransaction",children:"https://eth.wiki/json-rpc/API#eth_sendtransaction"})]}),"\n",(0,s.jsx)(e.h2,{id:"eth_signtransaction-and-eth_sendrawtransaction",children:"eth_signTransaction and eth_sendRawTransaction"}),"\n",(0,s.jsxs)(e.p,{children:["Sites can request that a transaction be signed by ",(0,s.jsx)(e.code,{children:"eth_signTransaction"})," method\nand send signed transaction later through ",(0,s.jsx)(e.code,{children:"eth_sendRawTransaction"})," or other\npreferred methods."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"async function signAndSendTransaction() {\n  const accounts = await window.ethereum.request({\n    id: '191',\n    method: 'eth_accounts',\n    params: [],\n  })\n  if (accounts.length === 0) {\n    console.log('No accounts allowed')\n    return\n  }\n  const from = accounts[0]\n  const params = [{\n    from,\n    // Change this to a different address\n    to: from,\n    value: '0x16345785D8A0000'\n    // data: '0x...'\n    //\n    // Gas propeties are not needed, but if you specify them,\n    // you can use either:\n    // `maxPriorityFeePerGas`\n    // `maxFeePerGas`\n    // or\n    // `gasPrice`\n  }]\n\n  const signedTransaction = await window.ethereum.request({\n    method: 'eth_signTransaction',\n    params\n  })\n\n  return await window.ethereum.request({\n    method: 'eth_sendRawTransaction,\n    params: [ signedTransaction ]\n  })\n}\nconsole.log(await signAndSendTransaction())\n"})}),"\n",(0,s.jsxs)(e.p,{children:["For more information, see: ",(0,s.jsx)(e.a,{href:"https://eth.wiki/json-rpc/API#eth_signtransaction",children:"https://eth.wiki/json-rpc/API#eth_signtransaction"}),"\nand\n",(0,s.jsx)(e.a,{href:"https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendrawtransaction",children:"https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendrawtransaction"})]})]})}function u(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>i,a:()=>o});var s=t(7294);const a={},r=s.createContext(a);function o(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);