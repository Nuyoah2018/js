
        // 冒泡排序:对数组进行排序 
        // @param arr:数组
        //@param bool:布尔值   true:升序  false:降序
        //@returns arr

    function bubbleSort(arr, bool) {
        var flag = false;
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - 1 - i; j++) {
                if (bool ? arr[j] > arr[j + 1] : arr[j] < arr[j + 1]) {
                    var temp;
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    flag = true;
                }
            }
            if (flag) {
                flag = false;
            } else {
                break;
            }
        }
        return arr;
    }
