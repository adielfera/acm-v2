(function(){
  if(!window.IntersectionObserver) return;
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('revealed'); obs.unobserve(e.target); }
    });
  }, {threshold: 0.08, rootMargin: '0px 0px -32px 0px'});
  document.querySelectorAll('[data-reveal]').forEach(function(el){ obs.observe(el); });
})();
