var body = document.getElementsByTagName('body')[0];

body.addEventListener('click', function (event) {
    if (event.target.classList.contains('js-smile')) {
        var el = document.createElement('textarea');
        el.value = event.target.textContent;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
});