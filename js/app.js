function Parallax() {
    // This Javascrtipt is inspired by that used on https://www.firewatchgame.com/

    const layers = document.getElementsByClassName("parallax");
    const height = window.screen.height;
    var currentLayer, layerSpeed;

    document.getElementById('no-parallax').style.display = "none";

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
    document.getElementById("parallax-header").style.display = "none";
}

function SmoothScroll() {
    this.srSmoothscroll({
        step: 50,
        speed: 100,
        ease: swing
    });
}

function toParallax_or_notToParallax() {

    const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

    /* Parallax doesn't load on iphone for some reason, so disable it */
    if (iOS) {
        noParallax();
        console.log("its an iphone!");
    } else {
        Parallax();
    }
}

window.onload = toParallax_or_notToParallax();