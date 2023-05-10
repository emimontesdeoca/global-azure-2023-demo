function toggle() {

    var str = document.documentElement.classList.toString();

    if (str.indexOf("dark") == -1) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
} 