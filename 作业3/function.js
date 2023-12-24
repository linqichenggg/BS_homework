//输入的数
let input = document.getElementById('display');

//截取从0至倒数第1个字符
function backspace(){
    input.value = input.value.slice(0, -1);
}

//输入
function print(value){
    input.value += value;
}

//清空
function clearinput(){
    input.value = '';
}

//开方
function calculateSquare(){
    try{
        input.value = Math.sqrt(input.value);
    } catch (error) {
        input.value = '非法输入'
        input.style.color = 'red';
    }
}

//x/1
function calculateReciprocal(){
    try{
        input.value = 1/input.value;
    } catch (error){
        input.value = '非法输入'
        input.style.color = 'red';
    }
}

//排序
function sortNumber(){
    try{
        let array = input.value.split(',').map(Number);
        
        //冒泡
        function bubbleSort(arr){
            var max = arr.length - 1;
            for (var j=0; j<max; j++){
                var flag = true;
                for (var i=0; i<max-j; i++){
                    if (arr[i]>arr[i+1]){
                        var temp = arr[i];
                        arr[i] = arr[i+1];
                        arr[i+1] = temp;
                        flag = false;
                    }
                }
                if (flag){
                    break;
                }
            }
            return arr;
        }
        let sortedarray = bubbleSort(array);
        input.value = sortedarray.join(',');
        // 重置文本颜色
        input.style.color = 'black';
    } catch (error){
        input.value = '非法输入'
        input.style.color = 'red';
    }
}

//结果
function result(){
    try{
        input.value = eval(input.value);
        // 重置文本颜色
        input.style.color = 'black';
    } catch(error){
        input.value = '非法输入'
        input.style.color = 'red';
    }
}

function changeCursor(button){
    button.style.cursor = 'pointer';
}

function highlightButton(button) {
    button.classList.add('x');
}

function unhighlightButton(button) {
    button.classList.remove('x');
}