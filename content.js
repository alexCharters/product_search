chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request.message)
        // if (request.message === "clicked_browser_action") {
        //     var firstHref = $("a[href^='http']").eq(0).attr("href");

        //     alert(firstHref);

        // // new line 
        // chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref})
        // }
    }
);
// function runner() {
    // alert("YEET")
    $(".butt").on("click",() => {
        alert("YEET")
    })
// }

// $(document).ready(runner)

