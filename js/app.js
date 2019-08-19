function Parallax() {
    // This Javascrtipt is inspired by that used on https://www.firewatchgame.com/

    const layers = document.getElementsByClassName("parallax");


    const height = window.screen.height;
    var currentLayer, layerSpeed;

    window.addEventListener("scroll", function() {

        // Get Current Scroll Position
        let position = this.pageYOffset;
        let percentScroll = Math.abs(position) / height;

        // if current scroll position is greater than viewport height, otherwise don't run
        if (Math.abs(position) <= height) {
            //iterate thru all layers moving each
            for (let i = 0; i < layers.length; i++) {
                currentLayer = layers[i];
                layerSpeed = currentLayer.getAttribute('data-speed');
                currentLayer.setAttribute('style', 'transform: translate(0px, ' + ((position * layerSpeed) / 100) + 'px');
            }

            //Hide Navbar
            nav.style.top = "-40px;"

        } else {
            //Show Navbar
            nav.className = "0px";
        }

    });
}

function noParallax() {
    document.getElementById("noparallax").setAttribute('display', 'none');
    document.getElementById("parallax").setAttribute('display', 'none');

}

function castSmoothScroll() {
    $.srSmoothscroll({
        step: 80,
        speed: 300,
        ease: 'linear'
    });
}

function toParallax_or_notToParallax() {

    const platform = navigator.platform.toLowerCase();

    /* Parallax doesn't load on iphone for some reason, so disable it */
    if (platform.indexOf('ipad') != -1 || platform.indexOf('iphone') != -1) {
        noParallax().srSmoothscroll();
    } else if (platform.indexOf('win32') != -1 || platform.indexOf('linux') != -1) {
        Parallax();

        if ($.browser.webkit) {
            castSmoothScroll();
        }
    } else {
        Parallax();
    }
}

document.window.onload = toParallax_or_notToParallax();


/*

function castParallax() {
    // This Javascrtipt is modified from that used on https://www.firewatchgame.com/

    //Get all the elements we're going to touch
    const layers = document.getElementsByClassName("parallax");
    const nav = document.getElementById("parallax");
    const main = document.getElementById("main");
    const moon = document.getElementById("moon");
    const stars = document.getElementById("stars");

    //get window height
    const height = $(window).height();
    console.log(height);

    //temp vars
    var layer, speed, yPos;

    window.addEventListener("scroll", function() {

        let currentScrollPosition = this.pageYOffset;

        //Loops thru each MTN Layer and moves it by the speed set in the data-speed of each html element 
        for (var i = 0; i < layers.length; i++) {
            layer = layers[i];
            speed = layer.getAttribute('data-speed');

            yPos = ((currentScrollPosition * speed) / 100);

            layer.setAttribute('style', 'transform: translate(0px, ' + yPos + 'px');
        }
        console.log(yPos);
        main.setAttribute('style', 'transform: translate(0px, ' + (currentScrollPosition / 10) + 'px');

        if (Math.abs(yPos) <= height) {
            nav.css.display = "none";
        }
        if (Math.abs(yPos) > height) {
            nav.css.display = "block";
            console.log("block");
        }

    });


}




function dispelParallax() {
    $("#nonparallax").css('display', 'block');
    $("#parallax").css('display', 'none');
}

function castSmoothScroll() {
    $.srSmoothscroll({
        step: 80,
        speed: 300,
        ease: 'linear'
    });
}





function toParallax_or_nottoParallax() {
    if () {
        noParallax();
    } else if () {
        Parallax();
    } else {
        Parallax();
    }
}



function startSite() {

    var platform = navigator.platform.toLowerCase();

    if (platform.indexOf('ipad') != -1 || platform.indexOf('iphone') != -1) {
        dispelParallax().srSmoothscroll();
    } else if (platform.indexOf('win32') != -1 || platform.indexOf('linux') != -1) {
        castParallax();
        if ($.browser.webkit) {
            castSmoothScroll();
        }
    } else {
        castParallax();
    }

}
*/