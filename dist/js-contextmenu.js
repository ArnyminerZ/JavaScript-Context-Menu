$(function () {
    const menus = document.getElementsByClassName("context-menu");
    for (let c = 0; c < menus.length; c++) {
        const menu = menus[c];
        const jmenu = $(menu);
        const selector = menu.getAttribute("data-selector");
        if (selector) {
            const elem = document.querySelector(selector);
            const jelem = $(elem);
            const jwindow = $(window);
            jelem.on('contextmenu', function (e) {
                if (e.shiftKey) return;
                e.preventDefault();
                let top = e.pageY;
                let left = e.pageX;
                const jww = jwindow.width();
                const jew = jmenu.width();
                if (left + jew > jww)
                    left -= left + jew - jww;
                jmenu.css({
                    display: "block",
                    position: "absolute",
                    top: top,
                    left: left
                });
                return false; //blocks default Webbrowser right click menu
            });
            jmenu.css({
                display: "none",
                position: "absolute"
            });
        }
    }
    $(document.body).on("click", function (event) {
        if(event.button === 0) {
            $(".context-menu").hide();
        }
    });
});