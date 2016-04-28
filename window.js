//Методы объекта window в объектно-ориентированном языке программирования JavaScript позволяют разработчику вести диалог с пользователем приложения, уведомлять его о важных событиях, а также управлять окнами браузера. Основные методы JavaScript для работы с окнами:
alert(`ты убит`);// – диалоговое окно содержащее информацию для пользователя;
confirm(`ok = true cancel = false`); //– диалоговое окно в котором пользователь подтверждает, либо отвергает действие требуемое от него;
prompt(`what you name?`); //– диалоговое окно, с текстовым полем. Необходимо для получения от пользователя необходимой текстовой информации;
open(``); //– открытие нового окна браузера
close(``); //– закрытие окна браузера;

С помощью метода open() можно открыть новое окно в браузере. Синтаксис метода open():

window.open(

  "URL",

  "имя окна",

  config="[параметр1=значение, параметр2=значение, параметр N=значение]"

);

//URL – адрес страницы которая будет загружена в новом окне;
//config – параметры задают конфигурацию нового окна, бывают следующие параметры:
//width – ширина окна браузера;
//height – высота окна браузера;
//location – принимает значения yes или no, и определяет будет ли видна строка адреса;
//status - принимает значения yes или no, отображает строку статуса браузера;
//toolbar – принимает значение 1 (или yes) и no, в первом случае новое окно содержит стандартный набор инструментов браузера, во втором тулбар отсутствует;
//menubar - принимает значения yes или no, отображает меню браузера;
//scrollbars - принимает значения yes или no, отображает полосы прокрутки браузера;
//resizable – если параметр принимает значение 1 (или yes), то пользователь может менять размеры окна браузера;

window.open(

  "OpenWindow.html",

  "ФИО",

  config="width=300px,height=150px,location=1,menubar=no,toolbar=no,resizable=no,scrollbars=yes"

);

 
close();

// Метод close() используют для закрытия окна браузера.

window.close();


