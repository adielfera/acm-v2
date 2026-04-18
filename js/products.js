(function(){
  // Main accordions � only one open at a time
  var headers = document.querySelectorAll('.accordion-header');
  headers.forEach(function(header){
    header.addEventListener('click', function(){
      var isActive = header.classList.contains('active');
      headers.forEach(function(h){
        h.classList.remove('active');
        h.setAttribute('aria-expanded','false');
        var c = document.getElementById(h.getAttribute('aria-controls'));
        if(c) c.classList.remove('open');
      });
      if(!isActive){
        header.classList.add('active');
        header.setAttribute('aria-expanded','true');
        var content = document.getElementById(header.getAttribute('aria-controls'));
        if(content) content.classList.add('open');
      }
    });
    header.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); header.click(); }
    });
  });

  // Sub-accordions � one open per parent group
  var subHeaders = document.querySelectorAll('.sub-accordion-header');
  subHeaders.forEach(function(sh){
    sh.addEventListener('click', function(){
      var isActive = sh.classList.contains('active');
      var parent = sh.closest('.accordion-content');
      if(parent){
        parent.querySelectorAll('.sub-accordion-header').forEach(function(s){
          s.classList.remove('active'); s.setAttribute('aria-expanded','false');
          var c = document.getElementById(s.getAttribute('aria-controls'));
          if(c) c.classList.remove('open');
        });
      }
      if(!isActive){
        sh.classList.add('active'); sh.setAttribute('aria-expanded','true');
        var sc = document.getElementById(sh.getAttribute('aria-controls'));
        if(sc) sc.classList.add('open');
      }
    });
  });

  // Image error handler
  document.querySelectorAll('.product-card img').forEach(function(img){
    img.addEventListener('error', function(){
      var err = document.getElementById('error-message');
      if(err){ err.textContent = 'Some product images could not be loaded.'; err.style.cssText = 'color:#b91c1c;background:#fef2f2;border:1px solid #fecaca;padding:10px 16px;border-radius:8px;margin-bottom:16px;font-size:0.875rem;'; }
      img.style.display = 'none';
    });
  });
})();
