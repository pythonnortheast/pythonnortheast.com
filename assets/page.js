document.addEventListener("DOMContentLoaded", function(event) {
    function rsz(){
        var items = document.getElementsByClassName('window-height');
        for(var i = 0; i < items.length; i++){
            items[i].style.height = window.innerHeight + 'px';
        }
    }

    window.addEventListener('resize', rsz);
    rsz();
});
