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


/*
let input = document.getElementById('display');: 获取ID为"display"的DOM元素（一个文本输入框）并存储到变量input中。这个输入框用于显示计算器的输出。

function backspace() { ... }: 定义了一个名为backspace的函数，用于实现退格功能。它将input的值设置为当前值去掉最后一个字符的结果。

function print(value) { ... }: 定义了一个名为print的函数，用于在input的现有值后追加字符。这个函数接受一个参数value，它是被追加的值。

function clearinput() { ... }: 定义了一个名为clearinput的函数，用于清空input的值。

function calculateSquare() { ... }: 定义了一个名为calculateSquare的函数，用于计算input值的平方根。如果输入不合法导致错误，它会捕获异常并显示错误信息。

function calculateReciprocal() { ... }: 定义了一个名为calculateReciprocal的函数，用于计算input值的倒数。同样，它也会在出现错误时显示错误信息。

function sortNumber() { ... }: 定义了一个名为sortNumber的函数，用于对input值中的数字进行排序。该函数首先将输入分割成数组，然后使用冒泡排序算法对其进行排序。

function result() { ... }: 定义了一个名为result的函数，用于计算input值的表达式结果。它使用了eval函数来计算字符串表达式的值。在出现错误时显示错误信息。

function changeCursor(button) { ... }: 定义了一个名为changeCursor的函数，当鼠标悬停在按钮上时，改变鼠标指针的样式。

function highlightButton(button) { ... }: 定义了一个名为highlightButton的函数，用于在鼠标按下按钮时给按钮添加一个类（"x"），这个类在CSS中定义了特定的样式。

function unhighlightButton(button) { ... }: 定义了一个名为unhighlightButton的函数，用于在鼠标松开按钮时移除之前添加的类。
*/