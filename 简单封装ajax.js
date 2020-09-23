      //封装ajax 
      //fn形参就是要接受回调函数的
      function ajax(method, url, fn, data) { //分析不确定值 提为参数  请求方式  url地址  提交数据
        //1.写入主要代码
        var xhr = new XMLHttpRequest();
        //2.建立连接
        if (method === "get") {
            //判断 用户是否要提交数据
            if (data != undefined && data != "") {
                xhr.open(method, url + "?" + data);
            } else {
                xhr.open(method, url);
            }
            //3.发送请求
            xhr.send(null);
        } else if (method == "post") {
            xhr.open(method, url);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            //如果用户确实要提交数据 就提交数据
            if (data != undefined && data != "") {
                xhr.send(data);
            } else {
                xhr.send(null);
            }
        }
        //4.接收响应数据
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && (xhr.status == 200 | xhr.status == 304)) {
                // console.log(xhr.responseText);
                fn(xhr.responseText);//将响应数据 作为实参传入回调函数中
            }
        }
    }
