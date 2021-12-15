"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5715],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),f=i,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3899:function(e,t,n){n.d(t,{Z:function(){return s},T:function(){return u}});var a=n(7462),i=n(7294),o=n(6742),r=n(2263),l=n(907);function s(e){return i.createElement(o.Z,(0,a.Z)({},e,{to:(t=e.to,s=(0,l.zu)(),(0,r.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==s?void 0:s.name)?n:"current"]+t),target:"_blank"}));var t,n,s}function u(e){var t,n=null!=(t=e.text)?t:"Example";return i.createElement(s,e,i.createElement("span",null,"\xa0"),i.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},5236:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=n(3899),l=["components"],s={id:"defaults",title:"Selecting default configs"},u=void 0,p={unversionedId:"tutorials/basic/your_first_app/defaults",id:"version-1.1/tutorials/basic/your_first_app/defaults",isDocsHomePage:!1,title:"Selecting default configs",description:"After office politics, you decide that you want to use MySQL by default.",source:"@site/versioned_docs/version-1.1/tutorials/basic/your_first_app/5_defaults.md",sourceDirName:"tutorials/basic/your_first_app",slug:"/tutorials/basic/your_first_app/defaults",permalink:"/docs/tutorials/basic/your_first_app/defaults",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/tutorials/basic/your_first_app/5_defaults.md",tags:[],version:"1.1",lastUpdatedBy:"Jasha10",lastUpdatedAt:1639538995,formattedLastUpdatedAt:"12/15/2021",sidebarPosition:5,frontMatter:{id:"defaults",title:"Selecting default configs"},sidebar:"version-1.1/docs",previous:{title:"Grouping config files",permalink:"/docs/tutorials/basic/your_first_app/config_groups"},next:{title:"Putting it all together",permalink:"/docs/tutorials/basic/your_first_app/composition"}},d=[{value:"Config group defaults",id:"config-group-defaults",children:[]},{value:"Composition order of primary config",id:"composition-order-of-primary-config",children:[]},{value:"Non-config group defaults",id:"non-config-group-defaults",children:[]}],c={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.T,{to:"examples/tutorials/basic/your_first_hydra_app/5_defaults",mdxType:"ExampleGithubLink"}),(0,o.kt)("p",null,"After office politics, you decide that you want to use MySQL by default.\nYou no longer want to type ",(0,o.kt)("inlineCode",{parentName:"p"},"+db=mysql")," every time you run your application."),(0,o.kt)("p",null,"You can add a ",(0,o.kt)("strong",{parentName:"p"},"Default List")," to your config file.\nA ",(0,o.kt)("strong",{parentName:"p"},"Defaults List")," is a list telling Hydra how to compose the final config object.\nBy convention, it is the first item in the config."),(0,o.kt)("h3",{id:"config-group-defaults"},"Config group defaults"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: mysql\n")),(0,o.kt)("p",null,"Remember to specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"config_name"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg: DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n')),(0,o.kt)("p",null,"When you run the updated application, MySQL is loaded by default."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n")),(0,o.kt)("p",null,"You can have multiple items in the defaults list, e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n - db: mysql\n - db/mysql/engine: innodb\n")),(0,o.kt)("p",null,"The defaults are ordered:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If multiple configs define the same value, the last one wins. "),(0,o.kt)("li",{parentName:"ul"},"If multiple configs contribute to the same dictionary, the result is the combined dictionary.")),(0,o.kt)("h4",{id:"overriding-a-config-group-default"},"Overriding a config group default"),(0,o.kt)("p",null,"You can still load PostgreSQL, and override individual values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgres_user\n")),(0,o.kt)("p",null,"You can remove a default entry from the defaults list by prefixing it with ~:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py ~db\n{}\n")),(0,o.kt)("h3",{id:"composition-order-of-primary-config"},"Composition order of primary config"),(0,o.kt)("p",null,"Your primary config can contain both config values and a Defaults List.\nIn such cases, you should add the ",(0,o.kt)("inlineCode",{parentName:"p"},"_self_")," keyword to your defaults list to specify the composition order of the config file relative to the items in the defaults list."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you want your primary config to override the values of configs from the Defaults List, append ",(0,o.kt)("inlineCode",{parentName:"li"},"_self_")," to the end of the Defaults List."),(0,o.kt)("li",{parentName:"ul"},"If you want the configs from the Defaults List to override the values in your primary config, insert ",(0,o.kt)("inlineCode",{parentName:"li"},"_self_")," as the first item in your Defaults List.")),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml" {3}',title:'"config.yaml"',"{3}":!0},"defaults:\n  - db: mysql\n  - _self_\n\ndb:\n  user: root\n"))),(0,o.kt)("div",{className:"col  col--6"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Result config: db.user from config.yaml" {4}',title:'"Result',"config:":!0,"db.user":!0,from:!0,'config.yaml"':!0,"{4}":!0},"db:\n  driver: mysql  # db/mysql.yaml\n  pass: secret   # db/mysql.yaml \n  user: root     # config.yaml\n\n\n"))),(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml" {2}',title:'"config.yaml"',"{2}":!0},"defaults:\n  - _self_\n  - db: mysql\n\ndb:\n  user: root\n"))),(0,o.kt)("div",{className:"col  col--6"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Result config: All values from db/mysql" {4}',title:'"Result',"config:":!0,All:!0,values:!0,from:!0,'db/mysql"':!0,"{4}":!0},"db:\n  driver: mysql # db/mysql.yaml\n  pass: secret  # db/mysql.yaml\n  user: omry    # db/mysql.yaml\n\n\n")))),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/defaults_list#composition-order"},"Compositon Order")," for more information."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The default composition order changed between Hydra 1.0 and Hydra 1.1."),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hydra 1.0"),": Configs from the defaults list are overriding the primary config"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hydra 1.1"),": A config is overriding the configs from the defaults list.")),(0,o.kt)("p",{parentName:"div"},"To mitigate confusion, Hydra 1.1 issue a warning if the primary config contains both Default List and Config values, and ",(0,o.kt)("inlineCode",{parentName:"p"},"_self_")," is not specified in the Defaults List.",(0,o.kt)("br",{parentName:"p"}),"\n","The warning will disappear if you add ",(0,o.kt)("inlineCode",{parentName:"p"},"_self_")," to the Defaults List based on the desired behavior."))),(0,o.kt)("h3",{id:"non-config-group-defaults"},"Non-config group defaults"),(0,o.kt)("p",null,"Sometimes a config file does not belong in any config group.\nYou can still load it by default. Here is an example for ",(0,o.kt)("inlineCode",{parentName:"p"},"some_file.yaml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - some_file\n")),(0,o.kt)("p",null,"Config files that are not part of a config group will always be loaded. They cannot be overridden.",(0,o.kt)("br",{parentName:"p"}),"\n","Prefer using a config group."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more information about the Defaults List see ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/defaults_list"},"Reference Manual/The Defaults List"),"."))))}f.isMDXComponent=!0}}]);