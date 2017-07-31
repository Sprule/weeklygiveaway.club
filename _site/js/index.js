$('.regular').slick({
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  pauseOnHover: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});

$('button').tooltip({
  trigger: 'click',
  placement: 'bottom'
});

function setTooltip(btn, message) {
  $(btn).tooltip('hide')
    .attr('data-original-title', message)
    .tooltip('show');
}

function hideTooltip(btn) {
  setTimeout(function() {
    $(btn).tooltip('hide');
  }, 1000);
}

// Clipboard

var clipboard = new Clipboard('button');

clipboard.on('success', function(e) {
  setTooltip(e.trigger, 'Copied!');
  hideTooltip(e.trigger);
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
  e.clearSelection();
});

clipboard.on('error', function(e) {
  setTooltip(e.trigger, 'Failed!');
  hideTooltip(e.trigger);
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
});