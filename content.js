chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request.message)
        if (request.message === "clicked_browser_action") {
            var firstHref = $("a[href^='http']").eq(0).attr("href");

            alert(firstHref);
        }
    }
);