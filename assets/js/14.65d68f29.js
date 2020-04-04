(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{345:function(t,s,a){t.exports=a.p+"assets/img/fig-11.3.a7d9af49.jpg"},374:function(t,s,a){"use strict";a.r(s);var i=a(1),e=Object(i.a)({},(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("p"),i("div",{staticClass:"table-of-contents"},[i("ul")]),i("p"),t._v(" "),i("p",[t._v("预测（“首次估计”或“背景”）误差协方差是变分数据同化系统的重要输入。\n它们影响分析与观察的契合度，也完全定义了远离观察的分析响应。\n后者的影响在全球数据稀疏的地区尤其重要。\n与集成滤波器数据同化技术（例如，集合调整卡尔曼滤波器，集合变换卡尔曼滤波器）不同，3/4D-Var 系统不会实时显式地生成预测误差协方差（尽管 4D-Var 和混合变分/集合 WRFDA 目前正在开发的数据同化技术隐含实现了与流相关的协方差。\n相反，气候统计数据通常是离线估算的。\n常用的方法是 “NMC-method”，其中使用预测偏差（例如 T+48 减去 T+24）统计量来近似预测误差协方差（Parrish 和 Derber，1992年）。\nECMWF 的实验（Fisher，2003 年）表明，可以使用基于扰动观测/物理学的循环分析/预测集合预报系统获得更好的统计数据。")]),t._v(" "),i("p",[t._v("最近的进展允许通过例如网格转换（Desroziers，1997），各向异性递归滤波器（Wu 等，2002； Purser 等，2003）在 3D/4D-Var 中使用与流相关的预测误差协方差，或变分问题的观测空间公式（Daley 和 Barker，2001）。\n通过使用预测模型在 4D-Var 的时间窗口内为不断变化的预测状态提供动态一致性，可以增强 4D-Var 中的流相关性（Rabier 等，1998）。\n尽管如此，在 3/4D-Var 中指定和实现与流相关的误差协方差所需的实际工作仍然很重要。")]),t._v(" "),i("p",[t._v("统一的全球/区域 WRFDA 系统的开发及其在 WRF 社区中的广泛使用，需要开发高效，可移植的预测背景误差协方差计算代码。\n许多应用程序还表明，如果人们花大力气计算特定于域的误差协方差，而不是使用 WRFDA 版本提供的默认统计信息，则可以获得更好的结果。\n在本节中，描述了由 NCAR/MMM 开发的 "),i("em",[t._v("gen_be_code")]),t._v("，用于生成与 WRFDA 系统一起使用的预测错误统计信息。")]),t._v(" "),i("p",[t._v("背景误差协方差矩阵定义为")]),t._v(" "),i("p",[i("span",{staticClass:"katex-display"},[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mtable",{attrs:{width:"100%"}},[i("mtr",[i("mtd",{attrs:{width:"50%"}}),i("mtd",[i("mrow",[i("mi",[t._v("B")]),i("mo",[t._v("=")]),i("mover",{attrs:{accent:"true"}},[i("mrow",[i("mi",[t._v("ϵ")]),i("msup",[i("mi",[t._v("ϵ")]),i("mi",[t._v("T")])],1)],1),i("mo",{attrs:{stretchy:"true"}},[t._v("‾")])],1),i("mo",[t._v("≃")]),i("mover",{attrs:{accent:"true"}},[i("mrow",[i("msup",[i("mi",[t._v("x")]),i("mo",{attrs:{mathvariant:"normal",lspace:"0em",rspace:"0em"}},[t._v("′")])],1),i("msup",[i("mi",[t._v("x")]),i("mrow",[i("mo",{attrs:{mathvariant:"normal"}},[t._v("′")]),i("mi",[t._v("T")])],1)],1)],1),i("mo",{attrs:{stretchy:"true"}},[t._v("‾")])],1)],1)],1),i("mtd",{attrs:{width:"50%"}}),i("mtd",[i("mtext",[t._v("(11.3)")])],1)],1)],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("B = \\overline{\\epsilon \\epsilon^T} \\simeq \\overline{x'x'^T} \\tag{11.3}\n")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.05017em"}},[t._v("B")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),i("span",{staticClass:"mrel"},[t._v("=")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.967331em","vertical-align":"0em"}}),i("span",{staticClass:"mord overline"},[i("span",{staticClass:"vlist-t"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.967331em"}},[i("span",{staticStyle:{top:"-3em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("ϵ")]),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("ϵ")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.767331em"}},[i("span",{staticStyle:{top:"-2.9890000000000003em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mathdefault mtight",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")])])])])])])])])])]),i("span",{staticStyle:{top:"-3.887331em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),i("span",{staticClass:"overline-line",staticStyle:{"border-bottom-width":"0.04em"}})])])])])]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),i("span",{staticClass:"mrel"},[t._v("≃")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.967331em","vertical-align":"0em"}}),i("span",{staticClass:"mord overline"},[i("span",{staticClass:"vlist-t"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.967331em"}},[i("span",{staticStyle:{top:"-3em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("x")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.6778919999999999em"}},[i("span",{staticStyle:{top:"-2.9890000000000003em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mtight"},[i("span",{staticClass:"mord mtight"},[t._v("′")])])])])])])])])]),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("x")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.767331em"}},[i("span",{staticStyle:{top:"-2.9890000000000003em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mtight"},[i("span",{staticClass:"mord mtight"},[t._v("′")]),i("span",{staticClass:"mord mathdefault mtight",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")])])])])])])])])])])]),i("span",{staticStyle:{top:"-3.887331em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),i("span",{staticClass:"overline-line",staticStyle:{"border-bottom-width":"0.04em"}})])])])])])]),i("span",{staticClass:"tag"},[i("span",{staticClass:"strut",staticStyle:{height:"1.2173310000000002em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mord text"},[i("span",{staticClass:"mord"},[t._v("(")]),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord"},[t._v("1")]),i("span",{staticClass:"mord"},[t._v("1")]),i("span",{staticClass:"mord"},[t._v(".")]),i("span",{staticClass:"mord"},[t._v("3")])]),i("span",{staticClass:"mord"},[t._v(")")])])])])])])]),t._v(" "),i("p",[t._v("其中，横线表示时间和/或地理区域的平均值。\n真实的背景误差 "),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("ϵ")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\epsilon")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("ϵ")])])])]),t._v(" 实际上未知，但被假定为在模型状态扰动 "),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("msup",[i("mi",[t._v("x")]),i("mo",{attrs:{mathvariant:"normal",lspace:"0em",rspace:"0em"}},[t._v("′")])],1)],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x'")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.751892em","vertical-align":"0em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("x")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.751892em"}},[i("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mtight"},[i("span",{staticClass:"mord mtight"},[t._v("′")])])])])])])])])])])])]),t._v(" 上可以很好地表示。")]),t._v(" "),i("p",[t._v("在标准 NMC 方法（Parrish and Derber，1992）中，扰动 "),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("msup",[i("mi",[t._v("x")]),i("mo",{attrs:{mathvariant:"normal",lspace:"0em",rspace:"0em"}},[t._v("′")])],1)],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x'")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.751892em","vertical-align":"0em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("x")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.751892em"}},[i("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mtight"},[i("span",{staticClass:"mord mtight"},[t._v("′")])])])])])])])])])])])]),t._v(" 由同时验证的两个预测（例如 24 小时减去 12 小时）之间的差给出。\n然后可以通过对一段时间（例如一个月）内的这种预测差异求平均来获得背景误差的气候学估计。\n（Fisher，2003）提出的另一种策略是利用集合预测输出，将 "),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("msup",[i("mi",[t._v("x")]),i("mo",{attrs:{mathvariant:"normal",lspace:"0em",rspace:"0em"}},[t._v("′")])],1)],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x'")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.751892em","vertical-align":"0em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("x")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.751892em"}},[i("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mtight"},[i("span",{staticClass:"mord mtight"},[t._v("′")])])])])])])])])])])])]),t._v(" 向量定义为集合扰动（集合减去集合均值）。\n无论采用哪种方法，最终结果都是模型扰动矢量的集合，可以从中得出背景误差的估计值。\n"),i("em",[t._v("gen_be")]),t._v(" 实用程序旨在与预测偏差或基于集合的扰动一起使用。\n使用 NMC 方法，"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("msup",[i("mi",[t._v("x")]),i("mo",{attrs:{mathvariant:"normal",lspace:"0em",rspace:"0em"}},[t._v("′")])],1),i("mo",[t._v("=")]),i("msub",[i("mi",[t._v("x")]),i("mrow",[i("mi",[t._v("T")]),i("mn",[t._v("2")])],1)],1),i("mo",[t._v("−")]),i("msub",[i("mi",[t._v("x")]),i("mrow",[i("mi",[t._v("T")]),i("mn",[t._v("1")])],1)],1)],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x'=x_{T2}-x_{T1}")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.751892em","vertical-align":"0em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("x")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.751892em"}},[i("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mtight"},[i("span",{staticClass:"mord mtight"},[t._v("′")])])])])])])])])]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),i("span",{staticClass:"mrel"},[t._v("=")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.73333em","vertical-align":"-0.15em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("x")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.32833099999999993em"}},[i("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mtight"},[i("span",{staticClass:"mord mathdefault mtight",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")]),i("span",{staticClass:"mord mtight"},[t._v("2")])])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[i("span")])])])])]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),i("span",{staticClass:"mbin"},[t._v("−")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("x")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.32833099999999993em"}},[i("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mtight"},[i("span",{staticClass:"mord mathdefault mtight",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")]),i("span",{staticClass:"mord mtight"},[t._v("1")])])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[i("span")])])])])])])])]),t._v("，其中 "),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("T")]),i("mn",[t._v("2")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("T2")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")]),i("span",{staticClass:"mord"},[t._v("2")])])])]),t._v(" 和 "),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("T")]),i("mn",[t._v("1")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("T1")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")]),i("span",{staticClass:"mord"},[t._v("1")])])])]),t._v(" 是预测差异时间（例如，全球 48h 减去 24h，区域 24h 减去 12h）。\n替代地，对于基于集合的方法，"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("msubsup",[i("mi",[t._v("x")]),i("mi",[t._v("k")]),i("mo",{attrs:{mathvariant:"normal",lspace:"0em",rspace:"0em"}},[t._v("′")])],1),i("mo",[t._v("=")]),i("msub",[i("mi",[t._v("x")]),i("mi",[t._v("k")])],1),i("mo",[t._v("−")]),i("mover",{attrs:{accent:"true"}},[i("mi",[t._v("x")]),i("mo",[t._v("ˉ")])],1)],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x_k' = x_k - \\bar{x}")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1.035em","vertical-align":"-0.2831079999999999em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("x")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.751892em"}},[i("span",{staticStyle:{top:"-2.4168920000000003em","margin-left":"0em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mathdefault mtight",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])]),i("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mtight"},[i("span",{staticClass:"mord mtight"},[t._v("′")])])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.2831079999999999em"}},[i("span")])])])])]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),i("span",{staticClass:"mrel"},[t._v("=")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.73333em","vertical-align":"-0.15em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("x")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.33610799999999996em"}},[i("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mathdefault mtight",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[i("span")])])])])]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),i("span",{staticClass:"mbin"},[t._v("−")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.56778em","vertical-align":"0em"}}),i("span",{staticClass:"mord accent"},[i("span",{staticClass:"vlist-t"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.56778em"}},[i("span",{staticStyle:{top:"-3em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("x")])])]),i("span",{staticStyle:{top:"-3em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),i("span",{staticClass:"accent-body",staticStyle:{left:"-0.22222em"}},[i("span",{staticClass:"mord"},[t._v("ˉ")])])])])])])])])])]),t._v("，其中，上标是集合成员 "),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("k")]),i("mo",[t._v("=")]),i("mn",[t._v("1")]),i("mtext",[t._v("，")]),i("msub",[i("mi",[t._v("n")]),i("mi",[t._v("e")])],1)],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("k=1，n_e")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),i("span",{staticClass:"mrel"},[t._v("=")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.83333em","vertical-align":"-0.15em"}}),i("span",{staticClass:"mord"},[t._v("1")]),i("span",{staticClass:"mord cjk_fallback"},[t._v("，")]),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("n")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[i("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mathdefault mtight"},[t._v("e")])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[i("span")])])])])])])])]),t._v(" 的平均值。\n此阶段产生的二进制文件总数为 "),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("msub",[i("mi",[t._v("n")]),i("mi",[t._v("f")])],1),i("mo",[t._v("×")]),i("msub",[i("mi",[t._v("n")]),i("mi",[t._v("e")])],1)],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n_f \\times n_e")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.8694379999999999em","vertical-align":"-0.286108em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("n")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.3361079999999999em"}},[i("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mathdefault mtight",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.286108em"}},[i("span")])])])])]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),i("span",{staticClass:"mbin"},[t._v("×")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("n")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[i("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mathdefault mtight"},[t._v("e")])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[i("span")])])])])])])])]),t._v("，其中 "),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("msub",[i("mi",[t._v("n")]),i("mi",[t._v("f")])],1)],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n_f")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.716668em","vertical-align":"-0.286108em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("n")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.3361079999999999em"}},[i("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mathdefault mtight",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.286108em"}},[i("span")])])])])])])])]),t._v(" 是使用的预测次数（例如，对于 30 天，每 12 小时进行一次预测，"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("msub",[i("mi",[t._v("n")]),i("mi",[t._v("f")])],1),i("mo",[t._v("=")]),i("mn",[t._v("60")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n_f = 60")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.716668em","vertical-align":"-0.286108em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("n")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.3361079999999999em"}},[i("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mathdefault mtight",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.286108em"}},[i("span")])])])])]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),i("span",{staticClass:"mrel"},[t._v("=")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),i("span",{staticClass:"mord"},[t._v("6")]),i("span",{staticClass:"mord"},[t._v("0")])])])]),t._v("）。\n使用 NMC 方法，"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("msub",[i("mi",[t._v("n")]),i("mi",[t._v("e")])],1),i("mo",[t._v("=")]),i("mn",[t._v("1")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n_e=1")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("n")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[i("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mathdefault mtight"},[t._v("e")])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[i("span")])])])])]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),i("span",{staticClass:"mrel"},[t._v("=")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),i("span",{staticClass:"mord"},[t._v("1")])])])]),t._v("（每时间1个预测差异）。\n对于基于集合的统计，"),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("msub",[i("mi",[t._v("n")]),i("mi",[t._v("e")])],1)],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n_e")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("n")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[i("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mathdefault mtight"},[t._v("e")])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[i("span")])])])])])])])]),t._v(" 是集合成员的数量。")]),t._v(" "),i("p",[t._v("如上所述，不是在模型空间 "),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("msup",[i("mi",[t._v("x")]),i("mo",{attrs:{mathvariant:"normal",lspace:"0em",rspace:"0em"}},[t._v("′")])],1)],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x'")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.751892em","vertical-align":"0em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("x")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.751892em"}},[i("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mtight"},[i("span",{staticClass:"mord mtight"},[t._v("′")])])])])])])])])])])])]),t._v(" 中而是在控制变量空间 "),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("v")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("v")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")])])])]),t._v(" 中指定 WRFDA 背景误差协方差，该变量通过（11.2）中定义的控制变量变换与模型变量（例如风分量，温度，湿度和表面压力）相关。")]),t._v(" "),i("p",[t._v("WRFDA 中同时要求（11.2）及其依赖。\n为此，（离线）背景误差工具用于计算在 "),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("U")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("U")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("U")])])])]),t._v(" 变换中的预测误差协方差矩阵的分量。")]),t._v(" "),i("p",[t._v("以下小节将介绍此过程。")]),t._v(" "),i("p",[t._v("背景误差协方差生成代码 "),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("g")]),i("mi",[t._v("e")]),i("msub",[i("mi",[t._v("n")]),i("mi",[t._v("b")])],1),i("mi",[t._v("e")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("gen_be")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),i("span",{staticClass:"mord mathdefault"},[t._v("e")]),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("n")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.33610799999999996em"}},[i("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mathdefault mtight"},[t._v("b")])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[i("span")])])])])]),i("span",{staticClass:"mord mathdefault"},[t._v("e")])])])]),t._v(" 被设计为处理来自各种区域/全局模型（例如 ARW，MM5，KMA 全局模型，NFS 等）的数据，并对其进行处理以提供误差协方差统计数据以供变异数据同化系统使用。")]),t._v(" "),i("p",[t._v("初始的，与模型相关的“阶段 0” 如图 11.2 所示。")]),t._v(" "),i("p",[i("img",{attrs:{src:a(345),alt:"BE Generation: Stage 0",title:"BE Generation: Stage 0"}})]),t._v(" "),i("p",[t._v("图 11.2：阶段 0 转换器在将特定于模型的数据（例如 ARW，KMA 全局模型等）转换为标准扰动字段和相关元数据（例如纬度，高度，陆地/海洋等）中的作用示意图。")])])}),[],!1,null,null,null);s.default=e.exports}}]);