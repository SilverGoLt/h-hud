$(function(){
    window.addEventListener('message', function(event){
        var item = event.data;
        $('#hp-text').text(item.hp);
        $('#hp-bar').css("width", `${item.hp}%`)
        $('#hp-text').text(item.ar);
        $('#hp-bar').css("width", `${item.ar}%`)
        $('#th-text').text(`${item.hg}/100`);
        $('#th-text').text(`${item.ar}/100`);
        $('#plcount').text(`${item.pcount}/64`);
    })
})