(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{554:function(t,e,r){"use strict";r.r(e);var a=r(15),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("这天杀的移动...")])]),t._v(" "),r("p",[t._v("继上次路由器设置成无线桥接之后，总觉得网速还是不太稳定，多台设备满载的时候，光猫表面的温度有点高，一拍脑袋，想到会不会是光猫的问题，改个光猫桥接试试？")]),t._v(" "),r("h2",{attrs:{id:"移动光猫"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#移动光猫"}},[t._v("#")]),t._v(" 移动光猫")]),t._v(" "),r("p",[t._v("我手里这台光猫是办移动宽带送的，型号是 GS3202，一个千兆LAN口，三个百兆LAN口，网上关于它的介绍比较少。")]),t._v(" "),r("p",[t._v("移动光猫最蛋疼的是默认光猫拨号，除非安装的时候和安装师傅要求改成桥接。那么问题来了，在安装之后想改桥接，该怎么办呢？")]),t._v(" "),r("h2",{attrs:{id:"获取光猫超级管理员账号"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#获取光猫超级管理员账号"}},[t._v("#")]),t._v(" 获取光猫超级管理员账号")]),t._v(" "),r("p",[t._v("这个账号一般有两种途径获取：1. 打客服电话，2. 黑科技和谐")]),t._v(" "),r("p",[t._v("作为脸皮极薄，又喜欢折腾的我来说，自然是选择第二种方法啦！")]),t._v(" "),r("h3",{attrs:{id:"所需工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#所需工具"}},[t._v("#")]),t._v(" 所需工具")]),t._v(" "),r("ol",[r("li",[r("p",[r("a",{attrs:{href:"http://ftp.mozilla.org/pub/firefox/releases/50.0b6/win64/zh-CN/Firefox%20Setup%2050.0b6.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("旧版火狐浏览器 50.0b6 适用于Win10"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://addons.thunderbird.net/zh-CN/seamonkey/addon/live-http-headers-clone/?src=cb-dl-hotness?src=cb-dl-hotness",target:"_blank",rel:"noopener noreferrer"}},[t._v("Live HTTP Headers (clone)火狐浏览器插件"),r("OutboundLink")],1)])])]),t._v(" "),r("p",[t._v("之后的步骤需要使用到这个插件，而且只兼容旧版火狐浏览器，其它历史版本的火狐浏览器可以在此"),r("a",{attrs:{href:"http://ftp.mozilla.org/pub/firefox/releases/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方仓库下载"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h3",{attrs:{id:"操作步骤"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),r("p",[t._v("（由于我修改完桥接模式后，不能再通过无线连接到光猫后台，以下的图文从"),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/82494971",target:"_blank",rel:"noopener noreferrer"}},[t._v("[1]"),r("OutboundLink")],1),t._v("中借用了一些，如有侵权请联系删除）")]),t._v(" "),r("p",[t._v("在火狐浏览器里打开光猫登陆界面，默认"),r("a",{attrs:{href:"192.168.1.1"}},[t._v("192.168.1.1")]),t._v("，输入普通账户的用户名和密码（一般在路由器背面的标签上），然后打开Live HTTP Headers (clone)，再点击登录。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2020/07/04/T3nvhwdej1ciZxR.jpg",alt:"img"}})]),t._v(" "),r("p",[t._v("登陆后查看插件里会发现很多信息，直接拉回到顶，选中第一行"),r("a",{attrs:{href:"http://192.168.1.1/cgi-bin/index2.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://192.168.1.1/cgi-bin/index2.asp"),r("OutboundLink")],1),t._v("的链接，点击插件底部的"),r("code",[t._v("Replay")]),t._v("按钮")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2020/07/04/5qFecJad2th1skG.jpg",alt:"img"}})]),t._v(" "),r("p",[t._v("然后在"),r("code",[t._v("POST")]),t._v("后面，把上图选中的链接，替换为 "),r("a",{attrs:{href:"http://192.168.1.1/cgi-bin/upgrade.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://192.168.1.1/cgi-bin/upgrade.asp"),r("OutboundLink")],1),t._v(" ，再次点击"),r("code",[t._v("Replay")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2020/07/04/mjuyLrvXWCcHU8J.jpg",alt:"img"}})]),t._v(" "),r("p",[t._v("就会看到下图所示的升级界面。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2020/07/04/vYkbBgKcVhTt679.jpg",alt:"img"}})]),t._v(" "),r("p",[t._v("接着按F12，调出开发者工具，选择"),r("code",[t._v("查看器")]),t._v("，搜索 "),r("code",[t._v("romfile backup")]),t._v(" ，会找到下图蓝色部分那一段。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2020/07/04/PtZ6gqJDE52AOvC.jpg",alt:"img"}})]),t._v(" "),r("p",[t._v("在这段蓝色的语句上方有个"),r("code",[t._v("<tbody>")]),t._v("标签，对标签点击右键，选择"),r("code",[t._v("编辑HTML")]),t._v("，把下面红框里那段语句中的"),r("code",[t._v("\x3c!--")]),t._v("和"),r("code",[t._v("--\x3e")]),t._v("删除（移动居然悄悄的把它影藏起来了！），页面上就会出现一个"),r("code",[t._v("romfile backup")]),t._v("按钮。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2020/07/04/CynkmvES1dKMUGV.jpg",alt:"img"}})]),t._v(" "),r("p",[t._v("这时候升级页面不要关闭，浏览器里开一个新标签页，打开光猫管理界面，重新用user用户登陆一下，以防用户登陆超时。然后浏览器再开一个新标签，打开"),r("a",{attrs:{href:"http://192.168.1.1/romfile.cfg",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://192.168.1.1/romfile.cfg"),r("OutboundLink")],1),t._v("，如果一切顺利，那么就会弹出"),r("code",[t._v("romfile.cfg")]),t._v("文件的下载提示了。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2020/07/04/pU3BsdiYLbDZqMe.jpg",alt:"img"}})]),t._v(" "),r("p",[t._v("将这个文件保存到本地，用"),r("code",[t._v("VS Code")]),t._v("等文本编辑器打开，搜索"),r("code",[t._v("web_passwd")]),t._v(" ，就可以找到密码了。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2020/07/04/w3EJNjnTHXsmdtp.png",alt:"image-20200412202756832"}})]),t._v(" "),r("h2",{attrs:{id:"更改移动光猫桥接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更改移动光猫桥接"}},[t._v("#")]),t._v(" 更改移动光猫桥接")]),t._v(" "),r("p",[t._v("使用获取到的账号和密码登录光猫，会发现多了很多选项，如果要更改桥接的话，先选择上方的"),r("code",[t._v("网络")]),t._v("，将"),r("code",[t._v("连接名称")]),t._v("改成包含"),r("code",[t._v("INTERNET")]),t._v("的，"),r("code",[t._v("模式")]),t._v("修改为"),r("code",[t._v("Bridge")]),t._v(",点最下方的确定，无需修改其他选项。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://i.loli.net/2020/07/04/J9Rxrp4BLKFIteX.jpg",alt:"img"}})]),t._v(" "),r("p",[t._v("最后，到你自己的路由器后台设置"),r("code",[t._v("宽带拨号")]),t._v("就可以啦！如果宽带账号和密码，安装师傅没有给你的话，可以打电话问一下哟~")]),t._v(" "),r("p",[t._v("另外，如果想尝试通过宽带多拨来提升网速的同学，可以参考这篇文章"),r("a",{attrs:{href:"%5Bhttps://www.polarxiong.com/archives/%E8%AE%B0%E4%B8%80%E6%AC%A1%E6%8A%98%E8%85%BE%E8%8B%8F%E5%B7%9E%E7%A7%BB%E5%8A%A8%E5%AE%BD%E5%B8%A6%E5%A4%9A%E6%8B%A8%E7%9A%84%E8%BF%87%E7%A8%8B.html%5D(https://www.polarxiong.com/archives/%E8%AE%B0%E4%B8%80%E6%AC%A1%E6%8A%98%E8%85%BE%E8%8B%8F%E5%B7%9E%E7%A7%BB%E5%8A%A8%E5%AE%BD%E5%B8%A6%E5%A4%9A%E6%8B%A8%E7%9A%84%E8%BF%87%E7%A8%8B.html)"}},[t._v("[3]")])]),t._v(" "),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),r("ol",[r("li",[r("p",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/82494971",target:"_blank",rel:"noopener noreferrer"}},[t._v("移动光猫CM113-Z破解超管密码"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://blog.imoe.org/geek/bridgingrouter.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("移动光猫如何改桥接"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"%5Bhttps://www.polarxiong.com/archives/%E8%AE%B0%E4%B8%80%E6%AC%A1%E6%8A%98%E8%85%BE%E8%8B%8F%E5%B7%9E%E7%A7%BB%E5%8A%A8%E5%AE%BD%E5%B8%A6%E5%A4%9A%E6%8B%A8%E7%9A%84%E8%BF%87%E7%A8%8B.html%5D(https://www.polarxiong.com/archives/%E8%AE%B0%E4%B8%80%E6%AC%A1%E6%8A%98%E8%85%BE%E8%8B%8F%E5%B7%9E%E7%A7%BB%E5%8A%A8%E5%AE%BD%E5%B8%A6%E5%A4%9A%E6%8B%A8%E7%9A%84%E8%BF%87%E7%A8%8B.html)"}},[t._v("记一次折腾苏州移动宽带多拨的过程")])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);