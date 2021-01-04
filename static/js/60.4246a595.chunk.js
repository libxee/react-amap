(this["webpackJsonp@uiw/react-amap"]=this["webpackJsonp@uiw/react-amap"]||[]).push([[60],{1222:function(n,o,t){"use strict";t.r(o),o.default="ScaleControl \u6bd4\u4f8b\u5c3a\u63a7\u4ef6\n===\n\n\u6bd4\u4f8b\u5c3a\u63d2\u4ef6\u3002\u4f4d\u4e8e\u5730\u56fe\u53f3\u4e0b\u89d2\uff0c\u7528\u6237\u53ef\u63a7\u5236\u5176\u663e\u793a\u4e0e\u9690\u85cf\u3002\u7ee7\u627f\u81ea `AMap.Control`\n\n```jsx\nimport { ScaleControl } from '@uiw/react-amap';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--DemoStart,bgWhite,noScroll,codePen,codeSandbox--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useState } from 'react';\nimport { Map, APILoader, ScaleControl } from '@uiw/react-amap';\n\nconst Example = () => {\n  const [show, setShow] = useState(true);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u5173\u95ed' : '\u5f00\u542f'}\n      </button>\n      <div style={{ width: '100%', height: '300px' }}>\n        <Map zoom={6}>\n          <ScaleControl\n            visiable={show}\n            offset={[60, 10]}\n            position=\"RT\"\n          />\n          {show && (\n            <ScaleControl\n              visiable={show}\n              offset={[20, 10]}\n              position=\"RB\"\n            />\n          )}\n        </Map>\n      </div>\n    </>\n  );\n}\n\nReactDOM.render((\n  <APILoader akay=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Example />\n  </APILoader>\n), _mount_);\n```\n\x3c!--End--\x3e\n\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| visiable | \u8986\u76d6\u7269\u662f\u5426\u53ef\u89c1\u3002 | `boolean` | - |\n| position | \u63a7\u4ef6\u505c\u9760\u4f4d\u7f6e `{ top: 5; left: 5; right: 5; bottom: 5 }` \u6216\u8005 'LT': \u5de6\u4e0a\u89d2, 'RT': \u53f3\u4e0a\u89d2, 'LB': \u5de6\u4e0b\u89d2, 'RB': \u53f3\u4e0b\u89d2\u3002 | `string| object` | - |\n| offset | \u76f8\u5bf9\u4e8e\u5730\u56fe\u5bb9\u5668\u5de6\u4e0a\u89d2\u7684\u504f\u79fb\u91cf\uff0c\u6b63\u6570\u4ee3\u8868\u5411\u53f3\u4e0b\u504f\u79fb\u3002\u9ed8\u8ba4\u4e3a `AMap.Pixel(10,10)` | `[number, number]` | - |\n"}}]);
//# sourceMappingURL=60.4246a595.chunk.js.map