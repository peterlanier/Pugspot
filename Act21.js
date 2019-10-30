<!-- act21.min.js required by all components. Please do not delete. -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="https://cdn2.hubspot.net/hubfs/273774/mp/act2/js/act21.min.js"></script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.9/lottie_svg.min.js"
  integrity="sha256-vZCDKRh4eo3YsqhnL47066pNsNfD44RdHFpudRbyZNg="
  crossorigin="anonymous"
></script>
<script>
  //animation for body on homepage
  var motion = document.querySelector("#bmmotion");
  var motionAnimation = bodymovin.loadAnimation({
    container: motion,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "https://www.storagepug.com/hubfs/AnimatedSVG/body-data.json"
  });

  if (motion !== null) {
    motion.addEventListener("mouseenter", function() {
      motionAnimation.goToAndPlay(0);
    });
  }

  //animation for logo (on sticky)
  var logo = document.querySelector("#bmlogo");
  var logoAnimation = bodymovin.loadAnimation({
    container: bmlogo,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "https://www.storagepug.com/hubfs/AnimatedSVG/new-logo.json"
  });

  if (logo !== null) {
    logo.addEventListener("mouseenter", function() {
      logoAnimation.goToAndPlay(0);
    });
  }

  //animation for logo (on noninverted overlays)
  var bmlogoInv = document.querySelector("#bmlogoInv");
  var invLogoAnimation = bodymovin.loadAnimation({
    container: bmlogoInv,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "https://www.storagepug.com/hubfs/AnimatedSVG/new-logo-inv.json"
  });

  if (bmlogoInv !== null) {
    bmlogoInv.addEventListener("mouseenter", function() {
      invLogoAnimation.goToAndPlay(0);
    });
  }

  //Common globals for animation
  function playAnim(anim, loop) {
    if (anim.isPaused) {
      anim.loop = loop;
      anim.goToAndPlay(0);
    }
  }

  function pauseAnim(anim) {
    if (!anim.isPaused) {
      anim.loop = false;
    }
  }
</script>
