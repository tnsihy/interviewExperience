1.获取2017-06-20格式的日期  
Date.html
2.获取随机数，要求是长度一致的字符串格式  
```
var random = Math.random()
var random = random + '0000000000' //后面加10个零 获取n位加n个零
var random = random.slice(0,10) //截取前10位 slice(start,and)
console.log(random)
```
3.写一个能遍历对象和数组的通用forEach函数  
forEach函数.html  
```
function forEach(obj,fn){
    var key
    if(obj instanceof Array){
        //准确判断是不是数组
        obj.forEach(function(item,index){
            fn(index,item)
        })
    }else{
        //不是数组就是对象
        for(key in obj){
            fn(key,obj[key])
        }
    }
}
var arr = [1,2,3]
forEach(arr,function(index,item){
    console.log(index,item)
})
var obj = {x:100,y:200}
forEach(obj,function(key,value){
    console.log(key,value)
})
```
知识点：  
日期  
```
Date.now() //获取当前时间的毫秒数 1970年开始算起
var day = new Date()
day.getTime() //获取毫秒数
day.getFullYear()  //获取4位数的年份
day.getMonth() //月(0-11)
day.getDate()  //日(1-31)
day.getHours()  //小时(0-23)
day.getMinutes() //分钟(0-59)
day.getSeconds() //秒(0-59)
```
Math  
获取随机数Math.random() 返回[0,1)的数  

数组API  
forEach 遍历所有元素  
every 判断所有元素是否都符合条件  
some 判断是否有至少一个元素符合条件  
sort 排序  
map 对元素重新组装，生成新数组  
filter 过滤符合条件的元素 
```
1.forEach
var arr = [1,2,3];
arr.forEach(function(item,index){
    //遍历数组的所有元素
    console.log(index,item)
    //打印结果：
    0 1
    1 2
    2 3
})

2.every
var arr = [1,2,3];
var result = arr.every(function(item,index){
    //用来判断所有的元素，是否都满足一个条件
    if(item < 4){  //都符合条件<4
        return true
    }
})
console.log(result) //返回true

3.some
var arr = [1,2,3]
var result = arr.some(function(item,index){
    //用来判断所有的数组元素，只要有一个元素符合即可
    if(item < 4){
        return true
    }
})
console.log(result) //返回true

4.sort
var arr = [1,3,5,4,2]
var arr2 = arr.sort(function(a,b){
    //从小到大排序
    return a - b;
    //从大到小排序
    //return b - a; 
})
console.log(arr2) //返回[1,2,3,4,5]

5.map
var arr = [1,2,3,4]
var arr2 = arr.map(function(item,index){
    //将元素重新组装，并返回
    return '<b>'+ item + '</b>'
})
console.log(arr2)

6.filter
var arr = [1,2,3,4]
var arr2 = arr.filter(function(item,index){
    if(item > 2){
        return true //这里也是return true
    }
})
console.log(arr2) //返回[3,4]
``` 
对象API  
```
var obj = {
    x:100,
    y:200,
    z:300
}
var key
for(key in obj){
    if(obj.hasOwnPropety(key)){
        console.log(key,obj[key])
    }
}
//结果：
x 100
y 200
z 300
```