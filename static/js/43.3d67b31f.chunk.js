(this["webpackJsonp@uiw/react-amap"]=this["webpackJsonp@uiw/react-amap"]||[]).push([[43],{1220:function(n,a,e){"use strict";e.r(a),a.default="APILoader\n===\n\n\u7528\u4e8e\u52a0\u8f7d\u9ad8\u5fb7\u5730\u56fe SDK \u4f9d\u8d56\uff0c\u52a0\u8f7d\u5b8c\u6210\uff0c\u5168\u5c40\u5c06\u4f1a\u6709 **`window.AMap`** \u5bf9\u8c61\u3002\n\n```jsx\nimport { APILoader } from '@uiw/react-amap';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\nMap \u7684\u7236\u7ec4\u4ef6\u5fc5\u987b\u5177\u6709\u5bbd\u5ea6\u548c\u9ad8\u5ea6\uff1b\n\n\x3c!--DemoStart,bgWhite,codePen,codeSandbox--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Map, APILoader } from '@uiw/react-amap';\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '300px' }}>\n    <APILoader akay=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n      <Map />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u591a\u4e2a\u5730\u56fe\n\n\x3c!--DemoStart,bgWhite,codePen,codeSandbox--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Map, APILoader } from '@uiw/react-amap';\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: 300 }}>\n    <APILoader akay=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n      <Map style={{ height: 100, marginBottom: 10 }} />\n      <div style={{ border: '1px solid red' }}>\n        <Map style={{ height: 100 }} />\n      </div>\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| akay | **`\u5fc5\u586b`** \u60a8\u9700\u5148[\u7533\u8bf7\u5bc6\u94a5\uff08ak\uff09](https://lbs.amap.com/api/webservice/guide/create-project/get-key)\u624d\u53ef\u4f7f\u7528\u8be5\u670d\u52a1\u3002\u26a0\ufe0f \u6ce8\u610f\u7533\u8bf7 `Web\u7aef(JS API)` | string | - |\n| version | SDK \u7248\u672c | string | `2.0` |\n| protocol | \u534f\u8bae\uff0c\u9ed8\u8ba4\u662f\u6839\u636e\u5f53\u524d\u7f51\u7ad9\u534f\u8bae\u7684 | `http`/`https` | `window.location.protocol` |\n| hostAndPath | \u8bf7\u6c42 SDK \u7684\u524d\u534a\u90e8\u5206 | string | `webapi.amap.com/maps` |\n| callbackName | \u56de\u8c03\u51fd\u6570 | string | `load_amap_sdk` |"}}]);
//# sourceMappingURL=43.3d67b31f.chunk.js.map