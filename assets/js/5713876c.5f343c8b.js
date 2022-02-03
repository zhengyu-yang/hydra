"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4828],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return m},MDXProvider:function(){return u},mdx:function(){return g},useMDXComponents:function(){return s},withMDXComponents:function(){return d}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=a.createContext({}),d=function(e){return function(n){var t=s(n.components);return a.createElement(e,r({},n,{components:t}))}},s=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(t),u=i,h=d["".concat(o,".").concat(u)]||d[u]||c[u]||r;return t?a.createElement(h,l(l({ref:n},m),{},{components:t})):a.createElement(h,l({ref:n},m))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=h;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},93899:function(e,n,t){t.d(n,{Z:function(){return p},T:function(){return m}});var a=t(87462),i=t(67294),r=t(39960),o=t(52263),l=t(80907);function p(e){return i.createElement(r.default,(0,a.Z)({},e,{to:(n=e.to,p=(0,l.useActiveVersion)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==p?void 0:p.name)?t:"current"]+n),target:"_blank"}));var n,t,p}function m(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return i.createElement(p,e,i.createElement("span",null,"\xa0"),i.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},62301:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=t(93899),l=["components"],p={id:"optuna_sweeper",title:"Optuna Sweeper plugin",sidebar_label:"Optuna Sweeper plugin"},m=void 0,d={unversionedId:"plugins/optuna_sweeper",id:"version-1.1/plugins/optuna_sweeper",title:"Optuna Sweeper plugin",description:"PyPI",source:"@site/versioned_docs/version-1.1/plugins/optuna_sweeper.md",sourceDirName:"plugins",slug:"/plugins/optuna_sweeper",permalink:"/docs/plugins/optuna_sweeper",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/plugins/optuna_sweeper.md",tags:[],version:"1.1",lastUpdatedBy:"Jasha10",lastUpdatedAt:1643853204,formattedLastUpdatedAt:"2/3/2022",frontMatter:{id:"optuna_sweeper",title:"Optuna Sweeper plugin",sidebar_label:"Optuna Sweeper plugin"},sidebar:"version-1.1/docs",previous:{title:"Nevergrad Sweeper plugin",permalink:"/docs/plugins/nevergrad_sweeper"},next:{title:"Terminology",permalink:"/docs/advanced/terminology"}},s=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Example 1: Single-Objective Optimization",id:"example-1-single-objective-optimization",children:[],level:2},{value:"Sampler configuration",id:"sampler-configuration",children:[],level:2},{value:"Search space configuration",id:"search-space-configuration",children:[{value:"Configuring through commandline override",id:"configuring-through-commandline-override",children:[{value:"Interval override",id:"interval-override",children:[],level:4},{value:"Range override",id:"range-override",children:[],level:4},{value:"Choice override",id:"choice-override",children:[],level:4}],level:3},{value:"Configuring through config file",id:"configuring-through-config-file",children:[{value:"Int parameters",id:"int-parameters",children:[],level:4},{value:"Float parameters",id:"float-parameters",children:[],level:4},{value:"Categorical parameters",id:"categorical-parameters",children:[],level:4}],level:3}],level:2},{value:"Example 2:  Multi-Objective Optimization",id:"example-2--multi-objective-optimization",children:[],level:2}],u={toc:s};function c(e){var n=e.components,p=(0,i.Z)(e,l);return(0,r.mdx)("wrapper",(0,a.Z)({},u,p,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://pypi.org/project/hydra-optuna-sweeper/"},(0,r.mdx)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-optuna-sweeper",alt:"PyPI"})),"\n",(0,r.mdx)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-optuna-sweeper",alt:"PyPI - License"}),"\n",(0,r.mdx)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-optuna-sweeper",alt:"PyPI - Python Version"}),"\n",(0,r.mdx)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-optuna-sweeper"},(0,r.mdx)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-optuna-sweeper.svg",alt:"PyPI - Downloads"})),(0,r.mdx)(o.T,{text:"Example application",to:"plugins/hydra_optuna_sweeper/example",mdxType:"ExampleGithubLink"}),(0,r.mdx)(o.T,{text:"Plugin source",to:"plugins/hydra_optuna_sweeper",mdxType:"ExampleGithubLink"})),(0,r.mdx)("p",null,"This plugin enables Hydra applications to utilize ",(0,r.mdx)("a",{parentName:"p",href:"https://optuna.org"},"Optuna")," for the optimization of the parameters of experiments."),(0,r.mdx)("h2",{id:"installation"},"Installation"),(0,r.mdx)("p",null,"This plugin requires ",(0,r.mdx)("inlineCode",{parentName:"p"},"hydra-core>=1.1.0"),". Please install it with the following command:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-core --upgrade\n")),(0,r.mdx)("p",null,"You can install the plugin via pip:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-optuna-sweeper --upgrade\n")),(0,r.mdx)("p",null,"There are several standard approaches for configuring plugins. Check ",(0,r.mdx)("a",{parentName:"p",href:"/docs/patterns/configuring_plugins"},"this page")," for more information."),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("p",null,"Please set ",(0,r.mdx)("inlineCode",{parentName:"p"},"hydra/sweeper")," to ",(0,r.mdx)("inlineCode",{parentName:"p"},"optuna")," in your config file."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - override hydra/sweeper: optuna\n")),(0,r.mdx)("p",null,"Alternatively, add ",(0,r.mdx)("inlineCode",{parentName:"p"},"hydra/sweeper=optuna")," option to your command line."),(0,r.mdx)("p",null,"The default configuration is ",(0,r.mdx)(o.Z,{to:"plugins/hydra_optuna_sweeper/hydra_plugins/hydra_optuna_sweeper/config.py",mdxType:"GithubLink"},"here"),"."),(0,r.mdx)("h2",{id:"example-1-single-objective-optimization"},"Example 1: Single-Objective Optimization"),(0,r.mdx)("p",null,"We include an example in ",(0,r.mdx)(o.Z,{to:"plugins/hydra_optuna_sweeper/example",mdxType:"GithubLink"},"this directory"),". ",(0,r.mdx)("inlineCode",{parentName:"p"},"example/sphere.py")," implements a simple benchmark function to be minimized."),(0,r.mdx)("p",null,"You can discover the Optuna sweeper parameters with:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="python example/sphere.py hydra/sweeper=optuna --cfg hydra -p hydra.sweeper"',title:'"python',"example/sphere.py":!0,"hydra/sweeper":"optuna","--cfg":!0,hydra:!0,"-p":!0,'hydra.sweeper"':!0},"# @package hydra.sweeper\nsampler:\n  _target_: optuna.samplers.TPESampler\n  seed: 123\n  consider_prior: true\n  prior_weight: 1.0\n  consider_magic_clip: true\n  consider_endpoints: false\n  n_startup_trials: 10\n  n_ei_candidates: 24\n  multivariate: false\n  warn_independent_sampling: true\n_target_: hydra_plugins.hydra_optuna_sweeper.optuna_sweeper.OptunaSweeper\ndirection: minimize\nstorage: null\nstudy_name: sphere\nn_trials: 20\nn_jobs: 1\nsearch_space:\n  x:\n    type: float\n    low: -5.5\n    high: 5.5\n    step: 0.5\n  'y':\n    type: categorical\n    choices:\n    - -5\n    - 0\n    - 5\n")),(0,r.mdx)("p",null,"The function decorated with ",(0,r.mdx)("inlineCode",{parentName:"p"},"@hydra.main()")," returns a float which we want to minimize, the minimum is 0 and reached for:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml"},"x: 0\ny: 0\n")),(0,r.mdx)("p",null,"To run optimization, clone the code and run the following command in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"plugins/hydra_optuna_sweeper")," directory:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-commandline"},"python example/sphere.py --multirun\n")),(0,r.mdx)("p",null,"You can also override the search space parametrization:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-commandline"},"python example/sphere.py --multirun 'x=interval(-5.0, 5.0)' 'y=interval(0, 10)'\n")),(0,r.mdx)("p",null,"You might find the ",(0,r.mdx)("inlineCode",{parentName:"p"},"optimization_results.yaml")," file (i.e. best params and best value) under ",(0,r.mdx)("inlineCode",{parentName:"p"},"multirun")," logs folder:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml"},"name: optuna\nbest_params:\n  x: 0.0\n  'y': 0\nbest_value: 0.0\n")),(0,r.mdx)("h2",{id:"sampler-configuration"},"Sampler configuration"),(0,r.mdx)("p",null,"This plugin supports Optuna's ",(0,r.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/samplers.html"},"samplers"),".\nYou can change the sampler by overriding ",(0,r.mdx)("inlineCode",{parentName:"p"},"hydra/sweeper/sampler")," or change sampler settings within ",(0,r.mdx)("inlineCode",{parentName:"p"},"hydra.sweeper.sampler"),"."),(0,r.mdx)("h2",{id:"search-space-configuration"},"Search space configuration"),(0,r.mdx)("p",null,"This plugin supports Optuna's ",(0,r.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/distributions.html"},"distributions")," to configure search spaces. They can be defined either through commandline override or config file."),(0,r.mdx)("h3",{id:"configuring-through-commandline-override"},"Configuring through commandline override"),(0,r.mdx)("p",null,"Hydra provides a override parser that support rich syntax. Please refer to ",(0,r.mdx)("a",{parentName:"p",href:"/docs/advanced/override_grammar/basic"},"OverrideGrammer/Basic")," and ",(0,r.mdx)("a",{parentName:"p",href:"/docs/advanced/override_grammar/extended"},"OverrideGrammer/Extended")," for details."),(0,r.mdx)("h4",{id:"interval-override"},"Interval override"),(0,r.mdx)("p",null,"By default, ",(0,r.mdx)("inlineCode",{parentName:"p"},"interval")," is converted to ",(0,r.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.UniformDistribution.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"UniformDistribution")),". You can use ",(0,r.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntUniformDistribution.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"IntUniformDistribution")),", ",(0,r.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.LogUniformDistribution.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"LogUniformDistribution"))," or ",(0,r.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntLogUniformDistribution.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"IntLogUniformDistribution"))," by casting the interval to ",(0,r.mdx)("inlineCode",{parentName:"p"},"int")," and tagging it with ",(0,r.mdx)("inlineCode",{parentName:"p"},"log"),"."),(0,r.mdx)("details",null,(0,r.mdx)("summary",null,"Example for interval override"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-commandline"},"python example/sphere.py --multirun 'x=int(interval(-5.0, 5.0))' 'y=tag(log, interval(1, 10))'\n")),(0,r.mdx)("p",null,"The output is as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-commandline"},"[HYDRA] Study name: sphere\n[HYDRA] Storage: None\n[HYDRA] Sampler: TPESampler\n[HYDRA] Directions: ['minimize']\n[HYDRA] Launching 1 jobs locally\n[HYDRA]     #0 : x=-3 y=1.6859762540733367\n[HYDRA] Launching 1 jobs locally\n[HYDRA]     #1 : x=1 y=5.237816870668193\n...\n[HYDRA] Best parameters: {'x': 0, 'y': 1.0929184723430116}\n[HYDRA] Best value: 1.1944707871885822\n"))),(0,r.mdx)("h4",{id:"range-override"},"Range override"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"range")," is converted to ",(0,r.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntUniformDistribution.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"IntUniformDistribution")),". If you apply ",(0,r.mdx)("inlineCode",{parentName:"p"},"shuffle")," to ",(0,r.mdx)("inlineCode",{parentName:"p"},"range"),", ",(0,r.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.CategoricalDistribution.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"CategoricalDistribution"))," is used instead."),(0,r.mdx)("details",null,(0,r.mdx)("summary",null,"Example for range override"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-commandline"},"python example/sphere.py --multirun 'x=range(-5.0, 5.0)' 'y=shuffle(range(-5, 5))'\n")),(0,r.mdx)("p",null,"The output is as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-commandline"},"[HYDRA] Study name: sphere\n[HYDRA] Storage: None\n[HYDRA] Sampler: TPESampler\n[HYDRA] Directions: ['minimize']\n[HYDRA] Launching 1 jobs locally\n[HYDRA]     #0 : x=-3 y=-4\n[HYDRA] Launching 1 jobs locally\n[HYDRA]     #1 : x=1 y=-1\n...\n[HYDRA] Best parameters: {'x': 0, 'y': -1}\n[HYDRA] Best value: 1.0\n"))),(0,r.mdx)("h4",{id:"choice-override"},"Choice override"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"choice")," is converted to ",(0,r.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.CategoricalDistribution.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"CategoricalDistribution")),"."),(0,r.mdx)("details",null,(0,r.mdx)("summary",null,"Example for choice override"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-commandline"},"python example/sphere.py --multirun 'x=choice(-5.0, 0.0, 5.0)' 'y=choice(0, 1, 2, 3, 4, 5)'\n")),(0,r.mdx)("p",null,"The output is as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-commandline"},"[HYDRA] Study name: sphere\n[HYDRA] Storage: None\n[HYDRA] Sampler: TPESampler\n[HYDRA] Directions: ['minimize']\n[HYDRA] Launching 1 jobs locally\n[HYDRA]     #0 : x=5.0 y=5\n[HYDRA] Launching 1 jobs locally\n[HYDRA]     #1 : x=5.0 y=2\n...\n[HYDRA] Best parameters: {'x': 0.0, 'y': 0}\n[HYDRA] Best value: 0.0\n"))),(0,r.mdx)("h3",{id:"configuring-through-config-file"},"Configuring through config file"),(0,r.mdx)("h4",{id:"int-parameters"},"Int parameters"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"int")," parameters can be defined with the following fields:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"type"),": ",(0,r.mdx)("inlineCode",{parentName:"li"},"int")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"low"),": lower bound"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"high"),": upper bound"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"step"),": discretization step (optional)"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"log"),": if ",(0,r.mdx)("inlineCode",{parentName:"li"},"true"),", space is converted to the log domain")),(0,r.mdx)("p",null,"If ",(0,r.mdx)("inlineCode",{parentName:"p"},"log")," is ",(0,r.mdx)("inlineCode",{parentName:"p"},"false"),", the parameter is mapped to ",(0,r.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntUniformDistribution.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"IntUniformDistribution")),". Otherwise, the parameter is mapped to ",(0,r.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.IntLogUniformDistribution.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"IntLogUniformDistribution")),". Please note that ",(0,r.mdx)("inlineCode",{parentName:"p"},"step")," can not be set if ",(0,r.mdx)("inlineCode",{parentName:"p"},"log=true"),"."),(0,r.mdx)("h4",{id:"float-parameters"},"Float parameters"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"float")," parameters can be defined with the following fields:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"type"),": ",(0,r.mdx)("inlineCode",{parentName:"li"},"float")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"low"),": lower bound"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"high"),": upper bound"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"step"),": discretization step"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"log"),": if ",(0,r.mdx)("inlineCode",{parentName:"li"},"true"),", space is converted to the log domain")),(0,r.mdx)("p",null,"If ",(0,r.mdx)("inlineCode",{parentName:"p"},"log")," is ",(0,r.mdx)("inlineCode",{parentName:"p"},"false"),", the parameter is mapped to ",(0,r.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.UniformDistribution.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"UniformDistribution"))," or ",(0,r.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.DiscreteUniformDistribution.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"DiscreteUniformDistribution"))," depending on the presence or absence of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"step")," field, respectively. Otherwise, the parameter is mapped to ",(0,r.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.LogUniformDistribution.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"LogUniformDistribution")),". Please note that ",(0,r.mdx)("inlineCode",{parentName:"p"},"step")," can not be set if ",(0,r.mdx)("inlineCode",{parentName:"p"},"log=true"),"."),(0,r.mdx)("h4",{id:"categorical-parameters"},"Categorical parameters"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"categorical")," parameters can be defined with the following fields:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"type"),": ",(0,r.mdx)("inlineCode",{parentName:"li"},"categorical")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"choices"),": a list of parameter value candidates")),(0,r.mdx)("p",null,"The parameters are mapped to ",(0,r.mdx)("a",{parentName:"p",href:"https://optuna.readthedocs.io/en/stable/reference/generated/optuna.distributions.CategoricalDistribution.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"CategoricalDistribution")),"."),(0,r.mdx)("h2",{id:"example-2--multi-objective-optimization"},"Example 2:  Multi-Objective Optimization"),(0,r.mdx)("p",null,"In the same directory, ",(0,r.mdx)("inlineCode",{parentName:"p"},"example/multi-objective.py")," implements a simple benchmark function, which has two objective values. We want to minimize two objectives simultaneously."),(0,r.mdx)("p",null,"You can discover the Optuna sweeper parameters with:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-commandline"},"python example/multi-objective.py hydra/sweeper=optuna --cfg hydra -p hydra.sweeper\n")),(0,r.mdx)("details",null,(0,r.mdx)("summary",null,"Configuration of the multi-objective optimization example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml"},"# @package hydra.sweeper\nsampler:\n  _target_: optuna.samplers.NSGAIISampler\n  seed: 123\n  population_size: 50\n  mutation_prob: null\n  crossover_prob: 0.9\n  swapping_prob: 0.5\n  constraints_func: null\n_target_: hydra_plugins.hydra_optuna_sweeper.optuna_sweeper.OptunaSweeper\ndirection:\n- minimize\n- minimize\nstorage: null\nstudy_name: multi-objective\nn_trials: 20\nn_jobs: 1\nsearch_space:\n  x:\n    type: float\n    low: 0\n    high: 5\n    step: 0.5\n  'y':\n    type: float\n    low: 0\n    high: 3\n    step: 0.5\n"))),(0,r.mdx)("p",null,"To run the optimization, use the following command in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"plugins/hydra_optuna_sweeper")," directory:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-commandline"},"python example/multi-objective.py --multirun\n")),(0,r.mdx)("p",null,"For problems with trade-offs between two different objectives, there may be no single solution that simultaneously minimizes both objectives. Instead, we obtained a set of solutions, namely ",(0,r.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pareto_efficiency"},"Pareto optimal solutions"),", that show the best trade-offs possible between the objectives. In the following figure, the blue dots show the Pareto optimal solutions in the optimization results."),(0,r.mdx)("p",null,(0,r.mdx)("img",{alt:"Pareto-optimal solutions",src:t(70353).Z})))}c.isMDXComponent=!0},70353:function(e,n,t){n.Z=t.p+"assets/images/multi_objective_result-398b4421a2661ec72d7c323762472ad5.png"}}]);