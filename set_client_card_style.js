window.addEventListener("DOMContentLoaded", (e) => {
    
    var IS_IPHONE = navigator.userAgent.match(/iPhone/i) != null;
    console.log(IS_IPHONE)
    if (IS_IPHONE) {
        var link=document.createElement("link");
        link.type="text/css";
        link.rel="stylesheet";
        link.href="client_card_style_iphone.css";
        document.getElementsByTagName("head")[0].appendChild(link);
    }

    // setTimeout(() => { 
    //     var loader = document.getElementById("loader");
    //     loader.remove()
    //     var card = document.getElementById("main");
    //     card.hidden = false;

    // }, 3000);

})


// document.getElementById("feedbackInput").addEventListener("focus", event =>  {
//     console.log("focus")
//     console.log(document.getElementsByTagName("html").height)
//     document.getElementsByTagName("html").height = "130vh";
//     //document.getElementsByTagName("html").position = "fixed";
//     console.log(document.getElementsByTagName("html").height)
// })

