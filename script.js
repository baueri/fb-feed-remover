(() => {
    setInterval(function () {
        document.querySelectorAll('[role="main"]').forEach(function (el){
            if (el.innerHTML.includes("Történet létrehozása")) {
                el.remove();
            }
        });
    }, 500);
})()