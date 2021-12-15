"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1055],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8663:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"terminology",title:"Terminology"},s=void 0,p={unversionedId:"advanced/terminology",id:"advanced/terminology",isDocsHomePage:!1,title:"Terminology",description:"This page describes some common concepts in Hydra, most of which are covered in greater details throughout the documentation.",source:"@site/docs/advanced/terminology.md",sourceDirName:"advanced",slug:"/advanced/terminology",permalink:"/docs/next/advanced/terminology",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/advanced/terminology.md",tags:[],version:"current",lastUpdatedBy:"Jasha10",lastUpdatedAt:1639538995,formattedLastUpdatedAt:"12/15/2021",frontMatter:{id:"terminology",title:"Terminology"},sidebar:"docs",previous:{title:"Optuna Sweeper plugin",permalink:"/docs/next/plugins/optuna_sweeper"},next:{title:"Hydra's command line flags",permalink:"/docs/next/advanced/hydra-command-line-flags"}},c=[{value:"Input Configs",id:"input-configs",children:[{value:"Config files",id:"config-files",children:[]},{value:"Structured Config",id:"structured-config",children:[]}]},{value:"Other configs",id:"other-configs",children:[]},{value:"Overrides",id:"overrides",children:[]},{value:"Defaults List",id:"defaults-list",children:[]},{value:"Config Group",id:"config-group",children:[]},{value:"Config Group Option",id:"config-group-option",children:[]},{value:"Package",id:"package",children:[]},{value:"Example of Core Concepts",id:"example-of-core-concepts",children:[]},{value:"Config Search Path",id:"config-search-path",children:[]},{value:"Plugins",id:"plugins",children:[]}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page describes some common concepts in Hydra, most of which are covered in greater details throughout the documentation.\nExamples of many of the following concepts are in the ",(0,i.kt)("a",{parentName:"p",href:"#example-of-core-concepts"},"Examples section"),"."),(0,i.kt)("h2",{id:"input-configs"},"Input Configs"),(0,i.kt)("p",null,"Input configs are building blocks used to construct the ",(0,i.kt)("a",{parentName:"p",href:"#output-config"},"Output Config")," consumed by the application.\nThey can be grouped by placing them in ",(0,i.kt)("a",{parentName:"p",href:"#config-group"},"Config Groups"),"."),(0,i.kt)("h3",{id:"config-files"},"Config files"),(0,i.kt)("p",null,"Config files are form of input configs in ",(0,i.kt)("a",{parentName:"p",href:"https://yaml.org/"},"YAML")," format. They can exist in the file system or\nin a Python module."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Example config file',title:'"Example',config:!0,file:!0},"user:\n  name: James Bond\n  age: 7\n")),(0,i.kt)("h3",{id:"structured-config"},"Structured Config"),(0,i.kt)("p",null,"This term has two common meanings:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A class decorated with ",(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/dataclasses.html"},"@dataclass")," or ",(0,i.kt)("a",{parentName:"li",href:"https://www.attrs.org/en/stable/"},"@attr.s"),", or an instance of such a class which is intended to be used as config.  "),(0,i.kt)("li",{parentName:"ol"},"A Config object initialized from a class or object as defined in 1. Structured Configs provide additional type information that enables static and runtime type checking.")),(0,i.kt)("p",null,"The two primary patterns for using Structured Configs are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As an ",(0,i.kt)("a",{parentName:"li",href:"#input-configs"},"Input Config"),"."),(0,i.kt)("li",{parentName:"ul"},"As a schema validating Config Files and command line arguments.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Example Schema"',title:'"Example','Schema"':!0},"@dataclass\nclass User:\n  name: str\n  age: int\n")),(0,i.kt)("h2",{id:"other-configs"},"Other configs"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Primary Config"),": The input config named in ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/tutorials/basic/your_first_app/config_file"},(0,i.kt)("strong",{parentName:"a"},"@hydra.main()"))," or in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/advanced/compose_api"},(0,i.kt)("strong",{parentName:"a"},"Compose API")),".",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Output Config"),": A config composed from the ",(0,i.kt)("a",{parentName:"p",href:"#input-configs"},"Input Configs")," and ",(0,i.kt)("a",{parentName:"p",href:"#overrides"},"Overrides")," by ",(0,i.kt)("strong",{parentName:"p"},"@hydra.main()"),", or the Compose API."),(0,i.kt)("h2",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/advanced/override_grammar/basic"},"Overrides")," are strings that can be used to manipulate the config composition process.\nThis includes updating, adding and deleting config values and ",(0,i.kt)("a",{parentName:"p",href:"#defaults-list"},"Defaults List")," options.  "),(0,i.kt)("p",null,"Overrides can be used in the command line and in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/advanced/compose_api"},"Compose API"),".",(0,i.kt)("br",{parentName:"p"}),"\n","In the examples below, ",(0,i.kt)("inlineCode",{parentName:"p"},"key=value")," is an override:"),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Override in the command line"',title:'"Override',in:!0,the:!0,command:!0,'line"':!0},"$ python my_app.py key=value\n\n"))),(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Override used in the Compose API"',title:'"Override',used:!0,in:!0,the:!0,Compose:!0,'API"':!0},'cfg = compose(config_name, \n              overrides=["key=value"])\n')))),(0,i.kt)("h2",{id:"defaults-list"},"Defaults List"),(0,i.kt)("p",null,"A list in an ",(0,i.kt)("a",{parentName:"p",href:"#input-configs"},"Input Config")," that instructs Hydra how compose the config. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Defaults List in a YAML config"',title:'"Defaults',List:!0,in:!0,a:!0,YAML:!0,'config"':!0},"defaults:\n  - db: mysql      # An overridable defaults list entry\n  - schema/school  # A non-overridable defaults list entry\n")),(0,i.kt)("h2",{id:"config-group"},"Config Group"),(0,i.kt)("p",null,"A Config Group is a directory in the ",(0,i.kt)("a",{parentName:"p",href:"#config-search-path"},"Config Search Path")," that contains ",(0,i.kt)("a",{parentName:"p",href:"#input-configs"},"Input Configs"),".\nConfig Groups can be nested, and in that case the path elements are separated by a forward slash ('/') regardless of the operating system."),(0,i.kt)("h2",{id:"config-group-option"},"Config Group Option"),(0,i.kt)("p",null,"An Input Config in a Config Group. When used in a Defaults List, a Config Group Option can be a single Input Config, or a list of Input Configs from the same Config Group. "),(0,i.kt)("h2",{id:"package"},"Package"),(0,i.kt)("p",null,"A Package is the path to node in a config. By default, the Package of a Config Group Option is derived from the Config Group.\n",(0,i.kt)("em",{parentName:"p"},"e.g:")," Configs in ",(0,i.kt)("strong",{parentName:"p"},"mi6/agent")," will have the package ",(0,i.kt)("strong",{parentName:"p"},"mi6.agent")," by default."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/advanced/overriding_packages#overriding-the-package-via-the-package-directive"},"Package Directive")," specifies the root ",(0,i.kt)("a",{parentName:"p",href:"#package"},"Package")," of a ",(0,i.kt)("a",{parentName:"p",href:"#input-configs"},"Config File"),". It can appear at the top of YAML config file."),(0,i.kt)("h2",{id:"example-of-core-concepts"},"Example of Core Concepts"),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--4"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n - mi6/agent: james_bond\n\n"))),(0,i.kt)("div",{className:"col col--4"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="mi6/agent/james_bond.yaml" {1}',title:'"mi6/agent/james_bond.yaml"',"{1}":!0},"# @package bond.james\ncodename: '007'\n\n"))),(0,i.kt)("div",{className:"col col--4"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Output config" {1,2}',title:'"Output','config"':!0,"{1,2}":!0},"bond:\n  james:\n    codename: '007'\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#input-configs"},"Input Configs"),": ",(0,i.kt)("strong",{parentName:"li"},"config.yaml"),", ",(0,i.kt)("strong",{parentName:"li"},"mi6/agent/james_bond.yaml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#config-group"},"Config Group"),": mi6/agent"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#config-group-option"},"Config Group Option"),": james_bond"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#package"},"Packages"),": ",(0,i.kt)("strong",{parentName:"li"},"<empty",">"),", ",(0,i.kt)("strong",{parentName:"li"},"mi6"),", ",(0,i.kt)("strong",{parentName:"li"},"mi6.agent"),", ",(0,i.kt)("strong",{parentName:"li"},"mi6.agent.codename")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#package-directive"},"Package directive"),": ",(0,i.kt)("strong",{parentName:"li"},"# @package bond.james"),", overriding the default Package for the containing Input Config ")),(0,i.kt)("h2",{id:"config-search-path"},"Config Search Path"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/advanced/search_path"},"Config Search Path")," is a list of paths that are searched in order to find configs. It is similar to\nthe Python ",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/using/cmdline.html#envvar-PYTHONPATH"},"PYTHONPATH"),"."),(0,i.kt)("h2",{id:"plugins"},"Plugins"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/advanced/plugins/overview"},"Plugins")," extend Hydra's capabilities. Hydra has several plugin types, for example Launcher and Sweeper."))}m.isMDXComponent=!0}}]);