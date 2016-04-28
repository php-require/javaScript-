confirm('This is an example of using JS to create some interaction on a website. Click OK to continue!'); // ok = true cancel = false 
prompt ("what you name?"); // ввод данных из окна 

//--вешаем окно на кнопку--//
function show_alert() 
{ 
alert("Привет! Я сигнальное окно!"); 
} 
<input type="button" onclick="show_alert()" value="Показать сигнальное окно" /> 
