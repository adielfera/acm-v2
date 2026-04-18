(function(){
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  var header = document.querySelector('.site-header');

  if(toggle && nav){
    toggle.addEventListener('click', function(){
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', function(e){
      if(nav.classList.contains('is-open') && !nav.contains(e.target) && !toggle.contains(e.target)){
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  if(header){
    window.addEventListener('scroll', function(){
      header.classList.toggle('scrolled', window.scrollY > 6);
    }, {passive: true});
  }
})();
