window.addEventListener("DOMContentLoaded", (e) => {
    
    var IS_IPHONE = navigator.userAgent.match(/iPhone/i) != null;
    console.log(IS_IPHONE)
    if (IS_IPHONE) {
        var link=document.createElement("link");
        link.type="text/css";
        link.rel="stylesheet";
        link.href="choose_child_style_iphone.css";
        document.getElementsByTagName("head")[0].appendChild(link);
    }

})