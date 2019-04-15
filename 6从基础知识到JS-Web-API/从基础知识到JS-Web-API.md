常说的JS包含两部分：  
JS基础知识：ECMA 262 标准
JS-Web-API： W3C标准

BOM浏览器对象模型  
DOM文档对象模型  

W3C标准中关于JS的规定有：  
DOM操作  
BOM操作  
事件绑定  
ajax请求（包括http协议）  
存储 

例如：页面弹窗是window.alert(123)，浏览器需要做：  
1.定义一个window全局变量，对象类型  
2.给它定义一个alert属性，属性值是一个函数  

获取元素document.getElementById(id)  
1.定义一个document全局变量，对象类型  
2.给它定义一个getElementById属性  
***

DOM操作  
题目  
1.DOM是哪种基本的数据结构  
树形结构  

2.DOM操作的常用API有哪些  
  &nbsp;&nbsp;获取DOM节点，以及节点的property和Attribute  
  &nbsp;&nbsp;获取父节点，获取子节点  
  &nbsp;&nbsp;新增节点，删除节点  

3.DOM节点的attr和property有何区别  
&nbsp;&nbsp;property只是一个JS对象属性的修改和获取   
&nbsp;&nbsp;Attribute是对html标签属性的修改和获取  

知识点  
DOM本质  
DOM是针对XML的基于树的API 
```
<?xml version="1" encoding="UTF-8"?>
<note>
    <to></to>
    <from></from>
    <heading></heading>
    <body></body>
    <other>
        <a></a>
        <b></b>
    </other>
</note>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div>
        <p>this is p</p>
    </div>
</body>
</html>
```
DOM节点操作  
  1.获取DOM节点 
```
var div1 = document.getElementById('div1') //元素
var divList = document.getElementsByTagName('div') //集合
var containerList = document.getElementsByClassName('.container') //集合
var pList = document.querySelectorAll('p') //集合
``` 
  2.prototype(=属性)  
```
var pList = document.querySelectorAll('p')
var p = pList[0]
p.style.width //获取样式
p.style.width = '100px' //修改样式
p.className //获取class
p.className = 'p1' //修改class

//获取nodeName和nodeType
p.nodeName  //节点名称
p.nodeType  //节点类型
```
  3.Attribute(=对象)  
```
var pList = document.querySelectorAll('p')
var p = pList[0]
p.getAttribute('data-name')   //标签的属性data-name
p.setAttribute('data-name','imooc')
p.getAttribute('style')
p.setAttribute('style','font-size:30px;')
```

DOM结构操作  
  1.新增节点  
  2.获取父元素  
  3.获取子元素  
  4.删除节点
```
新增节点，添加节点
var div1 = document.getElementById('div1');
// 第1种：添加一个新节点
p1.innerHTML = 'this.is p1'
div1.appendChild(p1) //添加创建的新元素

// 第2种：移动已有节点
var p2 = document.getElmentById('p2')
div.appendChild(p2) //将p2移动到div下，原本p2就没了

//获取父元素和子元素、移除节点
var div1 = document.getElementById('div1')
var parent = div1.parentElement;
var child = div1.childNodes; //如果换行(有空格)的话，nodeType为text;nodeName为#text

//移除节点
div1.removeChild(child[0])
```
***
BOM操作  
题目  
1.如何检测浏览器的类型  
通过navigator.userAgent  
2.解析url的各部分  
下面的例子

知识点  
navigator  
screen  
location  
```
hash 设置或返回从井号 (#) 开始的 URL（锚）
host 设置或返回主机名和当前 URL 的端口号
hostname 设置或返回当前 URL 的主机名
href 设置或返回完整的 URL
pathname 设置或返回当前 URL 的路径部分
port 设置或返回当前 URL 的端口号
protocol 设置或返回当前 URL 的协议
search 设置或返回从问号 (?) 开始的 URL（查询部分
```
history  

navigator & screen  
```
//navigator
var ua = navigator.userAgent //userAgent属性是一个只读字符串，声明了浏览器用于http请求的用户代理头的值
var isChrome = ua.indexOf('Chrome')
console.log(isChrome)

//screen
console.log(screen.width)
console.log(screen.height)
```
location & history  
location对象包含有关当前url的信息  
location对象是window对象的一个部分，可通过window.location属性来访问
```
//location
console.log(location.href)
console.log(location.protocol)
console.log(location.pathname)
console.log(location.search)
console.log(location.hash)

//history
history.back()
history.forward()
```


