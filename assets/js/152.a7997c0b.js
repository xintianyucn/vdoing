(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{483:function(t,_,v){"use strict";v.r(_);var e=v(4),a=Object(e.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_11-react哲学-编写一个复杂组件的原则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_11-react哲学-编写一个复杂组件的原则"}},[t._v("#")]),t._v(" 11.React哲学（编写一个复杂组件的原则）")]),t._v(" "),_("p",[t._v("React 最棒的部分之一是引导我们思考如何构建一个应用。在这篇文档中，我们将会通过 React 构建一个可搜索的产品数据表格来更深刻地领会 React 哲学。")]),t._v(" "),_("h2",{attrs:{id:"从设计稿开始"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#从设计稿开始"}},[t._v("#")]),t._v(" 从设计稿开始")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://zh-hans.reactjs.org/static/1071fbcc9eed01fddc115b41e193ec11/d4770/thinking-in-react-mock.png",alt:"Mockup"}})]),t._v(" "),_("h3",{attrs:{id:"第一步-将设计好的-ui-划分为组件层级"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第一步-将设计好的-ui-划分为组件层级"}},[t._v("#")]),t._v(" 第一步：将设计好的 UI 划分为组件层级")]),t._v(" "),_("p",[_("strong",[t._v("首先，你需要在设计稿上用方框圈出每一个组件（包括它们的子组件）")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://zh-hans.reactjs.org/static/eb8bda25806a89ebdc838813bdfa3601/6b2ea/thinking-in-react-components.png",alt:"Component diagram"}})]),t._v(" "),_("p",[t._v("你会看到我们的应用中包含五个组件。我们已经将每个组件展示的数据标注为了斜体。")]),t._v(" "),_("ol",[_("li",[_("strong",[_("code",[t._v("FilterableProductTable")]),t._v(" (橙色):")]),t._v(" 是整个示例应用的整体")]),t._v(" "),_("li",[_("strong",[_("code",[t._v("SearchBar")]),t._v(" (蓝色):")]),t._v(" 接受所有的"),_("em",[t._v("用户输入")])]),t._v(" "),_("li",[_("strong",[_("code",[t._v("ProductTable")]),t._v(" (绿色):")]),t._v(" 展示"),_("em",[t._v("数据内容")]),t._v("并根据"),_("em",[t._v("用户输入")]),t._v("筛选结果")]),t._v(" "),_("li",[_("strong",[_("code",[t._v("ProductCategoryRow")]),t._v(" (天蓝色):")]),t._v(" 为每一个"),_("em",[t._v("产品类别")]),t._v("展示标题")]),t._v(" "),_("li",[_("strong",[_("code",[t._v("ProductRow")]),t._v(" (红色):")]),t._v(" 每一行展示一个"),_("em",[t._v("产品")])])]),t._v(" "),_("p",[t._v("你可能注意到，"),_("code",[t._v("ProductTable")]),t._v(" 的表头（包含 “Name” 和 “Price” 的那一部分）并未单独成为一个组件。这仅仅是一种偏好选择，如何处理这一问题也一直存在争论。（简单的可以不用单独分一个组件，复杂的作为一个独立的组件就有必要了）")]),t._v(" "),_("p",[t._v("组件层级：")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("FilterableProductTable")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("SearchBar")])]),t._v(" "),_("li",[_("code",[t._v("ProductTable")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("ProductCategoryRow")])]),t._v(" "),_("li",[_("code",[t._v("ProductRow")])])])])])])]),t._v(" "),_("h3",{attrs:{id:"第二步-用-react-创建一个静态版本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第二步-用-react-创建一个静态版本"}},[t._v("#")]),t._v(" 第二步：用 React 创建一个静态版本")]),t._v(" "),_("p",[t._v("先用已有的数据模型渲染一个不包含交互功能的 UI。最好将渲染 UI 和添加交互这两个过程分开。")]),t._v(" "),_("p",[t._v("这是因为，编写一个应用的静态版本时，往往要编写大量代码，而不需要考虑太多交互细节；添加交互功能时则要考虑大量细节，而不需要编写太多代码。")]),t._v(" "),_("p",[t._v("在构建应用的静态版本时，我们需要创建一些会重用其他组件的组件，然后通过 "),_("em",[t._v("props")]),t._v(" 传入所需的数据。"),_("em",[t._v("props")]),t._v(" 是父组件向子组件传递数据的方式。即使你已经熟悉了 "),_("em",[t._v("state")]),t._v(" 的概念，也"),_("strong",[t._v("完全不应该使用 state")]),t._v(" 构建静态版本。state 代表了随时间会产生变化的数据。")]),t._v(" "),_("p",[t._v("你可以自上而下或者自下而上构建应用：自上而下意味着首先编写层级较高的组件（比如 "),_("code",[t._v("FilterableProductTable")]),t._v("），自下而上意味着从最基本的组件开始编写（比如 "),_("code",[t._v("ProductRow")]),t._v("）。"),_("strong",[t._v("当你的应用比较简单时，使用自上而下的方式更方便；对于较为大型的项目来说，自下而上地构建，并同时为低层组件编写测试是更加简单的方式。")])]),t._v(" "),_("p",[t._v("React "),_("strong",[t._v("单向数据流")]),t._v("（也叫"),_("em",[t._v("单向绑定")]),t._v("）的思想使得组件模块化，易于快速开发。")]),t._v(" "),_("p",[t._v("在 React 中，"),_("strong",[t._v("有两类“模型”数据：props 和 state")]),t._v("。清楚地理解两者的区别是十分重要的")]),t._v(" "),_("h3",{attrs:{id:"第三步-确定-ui-state-的最小-且完整-表示"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第三步-确定-ui-state-的最小-且完整-表示"}},[t._v("#")]),t._v(" 第三步：确定 UI state 的最小（且完整）表示")]),t._v(" "),_("p",[_("strong",[t._v("只保留应用所需的可变 state 的最小集合，其他数据均由它们计算产生。")])]),t._v(" "),_("p",[_("strong",[t._v("可以由state计算产生的数据就没必要另外保存一个state！")])]),t._v(" "),_("p",[t._v("对于使用props还是state，通过问自己以下三个问题，你可以逐个检查相应数据是否属于 state：")]),t._v(" "),_("ol",[_("li",[t._v("该数据是否是由父组件通过 props 传递而来的？如果是，那它应该不是 state。")]),t._v(" "),_("li",[t._v("该数据是否随时间的推移而保持不变？如果是，那它应该也不是 state。")]),t._v(" "),_("li",[t._v("你能否根据其他 state 或 props 计算出该数据的值？如果是，那它也不是 state。")])]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("非state的数据")]),t._v("：")]),t._v(" "),_("ol",[_("li",[t._v("由父组件传来的")]),t._v(" "),_("li",[t._v("不会随时间推移而改变的")]),t._v(" "),_("li",[t._v("能根据其他stete或props计算而来的")])])]),t._v(" "),_("h3",{attrs:{id:"第四步-确定-state-放置的位置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第四步-确定-state-放置的位置"}},[t._v("#")]),t._v(" 第四步：确定 state 放置的位置")]),t._v(" "),_("p",[t._v("我们需要确定哪个组件能够改变这些 state，或者说"),_("em",[t._v("拥有")]),t._v("这些 state。")]),t._v(" "),_("p",[_("strong",[t._v("注意：React 中的数据流是单向的，并顺着组件层级从上往下传递。")])]),t._v(" "),_("p",[t._v("对于应用中的每一个 state：")]),t._v(" "),_("ul",[_("li",[t._v("找到根据这个 state 进行渲染的所有组件。")]),t._v(" "),_("li",[t._v("找到他们的共同所有者（common owner）组件（在组件层级上高于所有需要该 state 的组件）。")]),t._v(" "),_("li",[t._v("该共同所有者组件或者比它层级更高的组件应该拥有该 state。")]),t._v(" "),_("li",[t._v("如果你找不到一个合适的位置来存放该 state，就可以直接创建一个新的组件来存放该 state，并将这一新组件置于高于共同所有者组件层级的位置")])]),t._v(" "),_("h3",{attrs:{id:"第五步-添加反向数据流"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第五步-添加反向数据流"}},[t._v("#")]),t._v(" 第五步：添加反向数据流")]),t._v(" "),_("p",[t._v("让"),_("strong",[t._v("数据反向传递：处于较低层级的表单组件更新较高层级组件的state")])]),t._v(" "),_("p",[t._v("实现方式：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("父组件有一个能够修改state改变的回调函数，并传递给子组件")])]),t._v(" "),_("li",[_("p",[t._v("子组件的input修改值，使用"),_("code",[t._v("onChange")]),t._v("事件监听，并执行父组件传入的回调函数。")])])])])}),[],!1,null,null,null);_.default=a.exports}}]);