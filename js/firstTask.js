// вибираємо елемент div, який буде замінено textarea
const editableDiv = document.getElementById('editable');
// додаємо обробник події на клавішу Ctrl + E
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.code === 'KeyE') {
        // створюємо новий елемент textarea
        const textarea = document.createElement('textarea');
        // копіюємо текст
    }
});

area.hidden = true;

  document.onkeydown = function (e) {
    if (e.ctrlKey && e.keyCode == '69'){
      view.hidden = true;
      area.hidden = false;
      area.focus()
      area.innerHTML = view.innerHTML;
      return false;
    }

    if (e.ctrlKey && e.keyCode == '83'){
      view.hidden = false;
      area.hidden = true;
      //alert(area.value);
      view.innerHTML = area.value;
      return false;
    } else if (e.keyCode == '27'){
      view.hidden = false;
      area.hidden = true;
    }
  };