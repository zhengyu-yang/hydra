"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5482],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,g=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1475:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={id:"config_store",title:"Config Store API"},c=void 0,l={unversionedId:"tutorials/structured_config/config_store",id:"version-1.0/tutorials/structured_config/config_store",isDocsHomePage:!1,title:"Config Store API",description:"ConfigStore is a singleton storing configs in memory.",source:"@site/versioned_docs/version-1.0/tutorials/structured_config/10_config_store.md",sourceDirName:"tutorials/structured_config",slug:"/tutorials/structured_config/config_store",permalink:"/docs/1.0/tutorials/structured_config/config_store",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/tutorials/structured_config/10_config_store.md",tags:[],version:"1.0",lastUpdatedBy:"Jasha10",lastUpdatedAt:1639538995,formattedLastUpdatedAt:"12/15/2021",sidebarPosition:10,frontMatter:{id:"config_store",title:"Config Store API"},sidebar:"version-1.0/docs",previous:{title:"Dynamic schema with many configs",permalink:"/docs/1.0/tutorials/structured_config/dynamic_schema"},next:{title:"Overview",permalink:"/docs/1.0/patterns/instantiate_objects/overview"}},p=[{value:"API",id:"api",children:[]},{value:"Example node values",id:"example-node-values",children:[]}],u={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ConfigStore")," is a singleton storing configs in memory.\nThe primary API for interacting with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigStore")," is the store method described below."),(0,i.kt)("h3",{id:"api"},"API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class ConfigStore(metaclass=Singleton):\n    def store(\n        self,\n        name: str,\n        node: Any,\n        group: Optional[str] = None,\n        package: Optional[str] = "_group_",\n        provider: Optional[str] = None,\n    ) -> None:\n        """\n        Stores a config node into the repository\n        :param name: config name\n        :param node: config node, can be DictConfig, ListConfig,\n            Structured configs and even dict and list\n        :param group: config group, subgroup separator is \'/\',\n            for example hydra/launcher\n        :param package: Config node parent hierarchy.\n            Child separator is \'.\', for example foo.bar.baz\n        :param provider: the name of the module/app providing this config.\n            Helps debugging.\n        """\n    ...\n')),(0,i.kt)("h3",{id:"example-node-values"},"Example node values"),(0,i.kt)("p",null,"A few examples of supported node values parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'@dataclass\nclass MySQLConfig:\n    host: str = "localhost"\n    port: int = 3306\n\n# Using the type\ncs.store(name="config1", node=MySQLConfig)\n# Using an instance, overriding some default values\ncs.store(name="config2", node=MySQLConfig(host="test.db", port=3307))\n# Using a dictionary, forfeiting runtime type safety\ncs.store(name="config3", node={"host": "localhost", "port": 3308})\n')))}f.isMDXComponent=!0}}]);