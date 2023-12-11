var setting = localStorage.getItem("panickey") 
console.log(setting)

document.addEventListener('keydown', function(event) {
    if (setting) {
        if (event.key === setting || event.key === setting) {

            window.location.href = 'https://google.com';
        }
    } else {
        if (event.key === 'p' || event.key === 'p') {

            window.location.href = 'https://google.com';
        }
    }
});

//thanks chat gpt