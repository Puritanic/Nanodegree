const { Waypoint } = window;

$(() => {
  const waypointNav = new Waypoint({
    element: document.getElementById('js-about'),
    handler() {
      $('.nav').toggleClass('nav--dark');
      $('.logo').toggleClass('logo--small');
    },
    offset: '5%'
  });

  // $('#js-features-scroll').on('click', () => {
  //   $('html, body').animate({ scrollTop: $('#features').offset().top }, 1000);
  // });
  // $('#js-plans-scroll').on('click', () => {
  //   $('html, body').animate({ scrollTop: $('#plans').offset().top }, 1000);
  // });

  /** *******  jQuery Smooth scrolling  ********* */

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        window.location.pathname.replace(/^\//, '') ===
          this.pathname.replace(/^\//, '') &&
        window.location.hostname === this.hostname
      ) {
        // Figure out element to scroll to
        let target = $(this.hash);
        target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            () => {
              // Callback after animation
              // Must change focus!
              const $target = $(target);
              $target.focus();
              if ($target.is(':focus')) {
                // Checking if the target was focused
                return false;
              }
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          );
        }
      }
    });

  // const waypointFeatures = new Waypoint({
  //   element: document.getElementsByClassName('js-wp-1')[0],
  //   handler() {
  //     $('.js-wp-1').addClass('animated fadeIn');
  //   },
  //   offset: '70%'
  // });

  // const waypointSteps = new Waypoint({
  //   element: document.getElementsByClassName('js-wp-2')[0],
  //   handler() {
  //     $('.js-wp-2').addClass('animated fadeInUp');
  //   },
  //   offset: '60%'
  // });

  // const waypointCities = new Waypoint({
  //   element: document.getElementsByClassName('js-wp-3')[0],
  //   handler() {
  //     $('.js-wp-3').addClass('animated fadeIn');
  //   },
  //   offset: '60%'
  // });

  // const waypointPlans = new Waypoint({
  //   element: document.getElementsByClassName('js-wp-4')[0],
  //   handler() {
  //     $('.js-wp-4').addClass('animated pulse');
  //   },
  //   offset: '50%'
  // });

  // $('.nav__mobile-icon').on('click', e => {
  //   e.preventDefault();
  //   $('.nav__mobile-icon i').toggleClass('ion-navicon-round ion-close-round');
  //   $('.nav__main').toggleClass('nav__mobile');
  // });
});
