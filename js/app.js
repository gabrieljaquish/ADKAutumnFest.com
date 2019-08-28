function Parallax() {
    // This Javascrtipt is inspired by that used on https://www.firewatchgame.com/

    const layers = document.getElementsByClassName("parallax");
    const height = window.screen.height;
    var currentLayer, layerSpeed;

    window.addEventListener("scroll", function() {
        // if current scroll position is greater than viewport height, otherwise don't run
        if (Math.abs(this.pageYOffset) < height) {
            //iterate thru all layers moving each
            for (let i = 0; i < layers.length; i++) {
                currentLayer = layers[i];
                layerSpeed = currentLayer.getAttribute('data-speed');
                currentLayer.setAttribute('style', 'transform: translate(0px, ' + ((this.pageYOffset * layerSpeed) / 100) + 'px');
            }

            //Hide Navbar
            document.getElementById("nav").style.top = "-60px";

        } else {
            //Show Navbar
            document.getElementById("nav").style.top = "0px";
        }

    });
}

function noParallax() {
    document.getElementById("no-parallax").style.display = "block";

    const layers = document.getElementsByClassName("parallax");
    for (let i = 0; i < layers.length; i++) {
        layers[i].style.display = "none";
    }
}

function SmoothScroll() {
    this.srSmoothscroll({
        step: 50,
        speed: 100,
        ease: swing
    });
}

function toParallax_or_notToParallax() {

    const platform = navigator.platform.toLowerCase();

    /* Parallax doesn't load on iphone for some reason, so disable it */
    if (platform.indexOf('ipad') != -1 || platform.indexOf('iphone') != -1) {
        noParallax().Smoothscroll();
    } else if (platform.indexOf('win32') != -1 || platform.indexOf('linux') != -1) {
        Parallax();

        if ($.browser.webkit) {
            SmoothScroll();
        }
    } else {
        Parallax();
    }
}

document.window.onload = toParallax_or_notToParallax();