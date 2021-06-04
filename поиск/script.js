document.querySelector('#elastic').oninput = function() {
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.elastic li');
    if (val != '') {
        elasticItems.forEach (function(elem) {
            // search() ищёт подстроку в строке
            if (elem.innerText.search(val) == -1)  {
                elem.classList.add('hide');
            } else {
                elem.classList.remove('hide');
                let str = elem.innerText;
            }
        });
    } else {
        elasticItems.forEach (function (elem) {
            elem.classList.remove ('hide');
        });
    }
}