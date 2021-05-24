(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(270)),o=n(277),s={id:"rq_launcher",title:"RQ Launcher plugin",sidebar_label:"RQ Launcher plugin"},c={unversionedId:"plugins/rq_launcher",id:"plugins/rq_launcher",isDocsHomePage:!1,title:"RQ Launcher plugin",description:"PyPI",source:"@site/docs/plugins/rq_launcher.md",slug:"/plugins/rq_launcher",permalink:"/docs/next/plugins/rq_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/plugins/rq_launcher.md",version:"current",lastUpdatedBy:"Jasha10",lastUpdatedAt:1621877460,formattedLastUpdatedAt:"5/24/2021",sidebar_label:"RQ Launcher plugin",sidebar:"docs",previous:{title:"Ray Launcher plugin",permalink:"/docs/next/plugins/ray_launcher"},next:{title:"Submitit Launcher plugin",permalink:"/docs/next/plugins/submitit_launcher"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],l={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://pypi.org/project/hydra-rq-launcher/"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-rq-launcher",alt:"PyPI"})),"\n",Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-rq-launcher",alt:"PyPI - License"}),"\n",Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-rq-launcher",alt:"PyPI - Python Version"}),"\n",Object(i.b)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-rq-launcher"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-rq-launcher.svg",alt:"PyPI - Downloads"})),Object(i.b)(o.a,{text:"Example application",to:"plugins/hydra_rq_launcher/examples",mdxType:"ExampleGithubLink"}),Object(i.b)(o.a,{text:"Plugin source",to:"plugins/hydra_rq_launcher",mdxType:"ExampleGithubLink"})),Object(i.b)("p",null,"The RQ Launcher plugin provides a launcher for distributed execution and job queuing based on ",Object(i.b)("a",{parentName:"p",href:"https://python-rq.org"},"Redis Queue (RQ)"),"."),Object(i.b)("p",null,"RQ launcher allows parallelizing across multiple nodes and scheduling jobs in queues. Usage of this plugin requires a ",Object(i.b)("a",{parentName:"p",href:"https://redis.io/topics/quickstart"},"Redis server"),". When parallelisation on a single node is intended, the Joblib launcher may be preferable, since it works without a database."),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-rq-launcher --upgrade\n")),Object(i.b)("p",null,"Usage of this plugin requires a ",Object(i.b)("a",{parentName:"p",href:"https://redis.io/topics/quickstart"},"Redis server"),"."),Object(i.b)("p",null,"Note that RQ does ",Object(i.b)("a",{parentName:"p",href:"https://python-rq.org/docs/#limitations"},"not support Windows"),"."),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("p",null,"Once installed, add ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/launcher=rq")," to your command line. Alternatively, override ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - override hydra/launcher: rq\n")),Object(i.b)("p",null,"The configuration packaged with the plugin is defined ",Object(i.b)(o.b,{to:"plugins/hydra_rq_launcher/hydra_plugins/hydra_rq_launcher/config.py",mdxType:"GithubLink"},"here"),".\nThere are several standard approaches for configuring plugins. Check ",Object(i.b)("a",{parentName:"p",href:"../patterns/configuring_plugins"},"this page")," for more information.\nThe default configuration is as follows:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python your_app.py hydra/launcher=rq --cfg hydra -p hydra.launcher"',title:'"$',python:!0,"your_app.py":!0,"hydra/launcher":"rq","--cfg":!0,hydra:!0,"-p":!0,'hydra.launcher"':!0},'# @package hydra.launcher\n_target_: hydra_plugins.hydra_rq_launcher.rq_launcher.RQLauncher\nenqueue:\n  job_timeout: null                  # maximum runtime of the job before it\'s killed (e.g. "1d" for 1 day, units: d/h/m/s), default: no limit\n  ttl: null                          # maximum queued time before the job before is discarded (e.g. "1d" for 1 day, units: d/h/m/s), default: no limit\n  result_ttl: null                   # how long successful jobs and their results are kept (e.g. "1d" for 1 day, units: d/h/m/s), default: no limit\n  failure_ttl: null                  # specifies how long failed jobs are kept (e.g. "1d" for 1 day, units: d/h/m/s), default: no limit\n  at_front: false                    # place job at the front of the queue, instead of the back\n  job_id: null                       # job id, will be overidden automatically by a uuid unless specified explicitly\n  description: null                  # description, will be overidden automatically unless specified explicitly\nqueue: default                       # queue name\nredis:\n  host: ${oc.env:REDIS_HOST,localhost}  # host address via REDIS_HOST environment variable, default: localhost\n  port: ${oc.env:REDIS_PORT,6379}       # port via REDIS_PORT environment variable, default: 6379\n  db: ${oc.env:REDIS_DB,0}              # database via REDIS_DB environment variable, default: 0\n  password: ${oc.env:REDIS_PASSWORD,}   # password via REDIS_PASSWORD environment variable, default: no password\n  mock: ${oc.env:REDIS_MOCK,False}      # switch to run without redis server in single thread, for testing purposes only\nstop_after_enqueue: false            # stop after enqueueing by raising custom exception\nwait_polling: 1.0                    # wait time in seconds when polling results\n')),Object(i.b)("p",null,"The plugin is using environment variables to store Redis connection information. The environment variables ",Object(i.b)("inlineCode",{parentName:"p"},"REDIS_HOST"),", ",Object(i.b)("inlineCode",{parentName:"p"},"REDIS_PORT"),", ",Object(i.b)("inlineCode",{parentName:"p"},"REDIS_DB"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"REDIS_PASSWORD"),", are used for the host address, port, database, and password of the server, respectively."),Object(i.b)("p",null,"For example, they might be set as follows when using ",Object(i.b)("inlineCode",{parentName:"p"},"bash")," or ",Object(i.b)("inlineCode",{parentName:"p"},"zsh")," as a shell:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-commandline"},'export REDIS_HOST="localhost"\nexport REDIS_PORT="6379"\nexport REDIS_DB="0"\nexport REDIS_PASSWORD=""\n')),Object(i.b)("p",null,"Assuming configured environment variables, workers connecting to the Redis server can be launched using:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-commandline"},"rq worker --url redis://:$REDIS_PASSWORD@$REDIS_HOST:$REDIS_PORT/$REDIS_DB\n")),Object(i.b)("p",null,"An ",Object(i.b)(o.b,{to:"plugins/hydra_rq_launcher/example",mdxType:"GithubLink"},"example application")," using this launcher is provided in the plugin repository."),Object(i.b)("p",null,"Starting the app with ",Object(i.b)("inlineCode",{parentName:"p"},"python my_app.py --multirun task=1,2,3,4,5")," will enqueue five jobs to be processed by worker instances:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py --multirun task=1,2,3,4,5\n\n[HYDRA] RQ Launcher is enqueuing 5 job(s) in queue : default\n[HYDRA] Sweep output dir : multirun/2020-06-15/18-00-00\n[HYDRA] Enqueued 13b3da4e-03f7-4d16-9ca8-cfb3c48afeae\n[HYDRA]     #1 : task=1\n[HYDRA] Enqueued 00c6a32d-e5a4-432c-a0f3-b9d4ef0dd585\n[HYDRA]     #2 : task=2\n[HYDRA] Enqueued 63b90f27-0711-4c95-8f63-70164fd850df\n[HYDRA]     #3 : task=3\n[HYDRA] Enqueued b1d49825-8b28-4516-90ca-8106477e1eb1\n[HYDRA]     #4 : task=4\n[HYDRA] Enqueued ed96bdaa-087d-4c7f-9ecb-56daf948d5e2\n[HYDRA]     #5 : task=5\n[HYDRA] Finished enqueuing\n[HYDRA] Polling job statuses every 1.0 sec\n")),Object(i.b)("p",null,"Note that any dependencies need to be installed in the Python environment used to run the RQ worker. For serialization of jobs ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cloudpickle/cloudpickle"},Object(i.b)("inlineCode",{parentName:"a"},"cloudpickle"))," is used."),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"https://python-rq.org/"},"RQ documentation")," holds further information on ",Object(i.b)("a",{parentName:"p",href:"http://python-rq.org/docs/monitoring/"},"job monitoring"),", which can be done via console or ",Object(i.b)("a",{parentName:"p",href:"https://github.com/nvie/rq-dashboard"},"web interfaces"),", and provides ",Object(i.b)("a",{parentName:"p",href:"https://python-rq.org/patterns/"},"patterns")," for worker and exception handling."))}p.isMDXComponent=!0},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,h=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return n?a.a.createElement(h,s(s({ref:t},u),{},{components:n})):a.a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},271:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},272:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(11),o=n(271),s=n(7),c=Object(r.createContext)({collectLink:function(){}}),u=n(273),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,p,d=e.isNavLink,b=e.to,h=e.href,f=e.activeClassName,g=e.isActive,m=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,y=void 0===v||v,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(u.b)().withBaseUrl,D=Object(r.useContext)(c),w=b||h,_=Object(o.a)(w),R=null==w?void 0:w.replace("pathname://",""),A=void 0!==R?(n=R,y&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,P=Object(r.useRef)(!1),x=d?i.e:i.c,E=s.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!E&&_&&window.docusaurus.prefetch(A),function(){E&&p&&p.disconnect()}}),[A,E,_]);var q=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,k=!A||!_||q;return A&&_&&!q&&!m&&D.collectLink(A),k?a.a.createElement("a",Object.assign({href:A},w&&!_&&{target:"_blank",rel:"noopener noreferrer"},O)):a.a.createElement(x,Object.assign({},O,{onMouseEnter:function(){P.current||(window.docusaurus.preload(A),P.current=!0)},innerRef:function(e){var t,n;E&&e&&_&&(t=e,n=function(){window.docusaurus.prefetch(A)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:A||""},d&&{isActive:g,activeClassName:f}))}},273:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(10),a=n(271);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,s=void 0!==o&&o,c=i.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(s)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},274:function(e,t,n){try{e.exports=n(275)}catch(a){var r={};e.exports={useAllDocsData:function(){return r},useActivePluginAndVersion:function(){}}}},275:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(23),a=n(38),i=n(276);t.useAllDocsData=function(){return a.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return a.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),a=r.useLocation().pathname;return i.getActivePlugin(n,a,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),a=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,a)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return i.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return i.getActiveVersion(n,a)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return i.getActiveDocContext(n,a)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return i.getDocVersionSuggestions(n,a)}},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var a=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),i=a?{pluginId:a[0],pluginData:a[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var a=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==a})),[a]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var a,i,o=t.getActiveVersion(e,n),s=null==o?void 0:o.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:s,alternateDocVersions:s?(a=s.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===a&&(i[e.name]=t)}))})),i):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),a=t.getActiveDocContext(e,n),i=a.activeVersion!==r;return{latestDocSuggestion:i?null==a?void 0:a.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}},277:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(3),a=n(0),i=n.n(a),o=n(272),s=n(10),c=n(274);function u(e){return i.a.createElement(o.a,Object(r.a)({},e,{to:(t=e.to,a=Object(c.useActiveVersion)(),Object(s.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==a?void 0:a.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,a}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return i.a.createElement(u,e,i.a.createElement("span",null,"\xa0"),i.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);