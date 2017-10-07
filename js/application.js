// Show/hide responsive nav
function showNav(){ 
    document.getElementById("trigger-nav").onclick = function(){
  
      document.getElementById('main-sidebar').classList.add('transition');
      document.getElementById('main-article').classList.add('transition');
      document.getElementById('container').classList.add('transition');
  
      document.getElementById('main-sidebar').classList.toggle('show-main-nav');
      document.getElementById('container').classList.toggle('show-main-nav');
    };
  
  }
  showNav();
  
  // Show email subscribe box when scrolling
  if($('#email-subscribe-floater').length > 0) {
    var $floater = $('#email-subscribe-floater'),
        postHeight = $('.post').height(),
        postOffset = $('.post').offset().top,
        windowHeight = $(window).height(),
        displayOffset = (postHeight + postOffset) - 100
  
    $(window).on('scroll', function(){
      var scrollDistance = $(window).scrollTop() + windowHeight
  
      if((scrollDistance > displayOffset) && (Cookies.get('lmSubscribe') == null)) {
        $floater.addClass('is-visible')
        $('.js-floater-input').focus();
      } else {
        $floater.removeClass('is-visible')
      }
    })
  }
  
  
  // Close floater
  $('#js-close-subscribe-floater').click(function(event){
    $('#email-subscribe-floater').hide();
    Cookies.set("lmSubscribe", 1, { expires : 10 });
    event.preventDefault();
  });