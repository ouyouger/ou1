/* 
  我们将来在开发的时候，肯定会有很多重复使用的代码
  这些代码我们应该封装起来，以提高工作效率

  怎么封装呢？
    通常我们喜欢把方法封装到对象身上
*/
var kits = {};



//随机获取RGB类型的颜色
kits.randomRGBColor = function () {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}


kits.dispatchZero = function (num) {
  if (num < 10) {
    num = '0' + num;
  }
  return num;
}

//获取当前时间
kits.formatDate = function () {
  var date = new Date();
  // 把年月日时分秒获取
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = this.dispatchZero(month);
  var day = date.getDate();
  day = this.dispatchZero(day);
  var hour = date.getHours();
  hour = this.dispatchZero(hour);
  var minute = this.dispatchZero(date.getMinutes());
  var second = this.dispatchZero(date.getSeconds());
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}
//获取n-m之间的整数
kits.randomInt = function (n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
}

// 常见的给id的方式1
// 当前时间戳 + 大的随机数
//获取id值
kits.getId = function () {
  // 返回一个不容易重复的id
  let date = new Date();
  let time = date.getTime();// 得到的是从1970年1月1日到现在为止的毫秒总数
  // 然后在得到一个足够大的随机数，把毫秒和随机数相连，作为新的id
  let r = this.randomInt(100000, 999999);
  // 把两个数字连起来
  let id = time + '' + r;
  return id;
}

//获取一个随机的十六进制的颜色
kits.randomHexColor = function () {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  if (r < 16) {
    r = "0" + r.toString(16);
  } else {
    r = r.toString(16);
  }
  if (g < 16) {
    g = "0" + g.toString(16);
  } else {
    g = g.toString(16);
  }
  if (b < 16) {
    b = "0" + b.toString(16);
  } else {
    b = b.toString(16);
  }

  return "#" + r + g + b;
}

// 从localStorage里面根据指定的键(key)获取一个数组参数
kits.getLocalStorageDataArray = function (key) {
  let json = localStorage.getItem(key);
  let arr = JSON.parse(json)
  return arr || []

}
// 将一个数组(arr)以指定的键(key)存储到localStorage里面
kits.saveLocalDataArray = function (key, obj) {
  let json = JSON.stringify(obj);
  localStorage.setItem(key, json)

}

// 向localStorage里面指定键(key)的数组数据追加一个数据对象
kits.appendDataIntoArray = function (key, data) {
  let data = this.getLocalStorageDataArray(data);
  let arr = this.getLocalStorageDataArray(key);
  arr.push(data)
  this.saveLocalDataArray(key, arr)

}
//根据id修改localStorage里面的指定键(key)的数组数据参数
kits.modifyLocalDataById = function (key, id, datas) {
  let flag = false;
  let arr = this.getLocalStorageDataArray(key);
  arr.foreach((e, i) => {
    if (e.id === id) {
      arr[i] = datas
    }
  })
  this.saveLocalDataArray(key, arr);
  return flag;
}
//根据对应的id从localStorage中指定键(key)的数组中删除一条数据参数
kits.deleteLocalDataById = function (key, id) {
  let arr = this.getLocalStorageDataArray(key);
  arr.foreach((e, i) => {
    if (e.id === id) {
      arr[i].splice(i, 1)
    }
  })
  this.saveLocalDataArray(key, arr);

}