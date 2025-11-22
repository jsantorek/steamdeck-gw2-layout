function toggleDarkMode(el) {
    var theme = 'light'
    if (el.innerText == '☪') {
        el.innerText = '☀'; theme = 'dark';
    } else {
        el.innerText = '☪';
    }
    document.documentElement.setAttribute('data-theme', theme)
}
