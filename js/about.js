(function(){
  document.addEventListener('DOMContentLoaded', function(){
    var buttons = document.querySelectorAll('.tab-nav button');
    var panels = document.querySelectorAll('.tab-content');
    if(!buttons.length) return;
    buttons.forEach(function(btn){
      btn.addEventListener('click', function(){
        buttons.forEach(function(b){ b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
        panels.forEach(function(p){ p.classList.remove('active'); });
        btn.classList.add('active');
        btn.setAttribute('aria-selected','true');
        var target = document.getElementById('tab-' + btn.dataset.tab);
        if(target) target.classList.add('active');
      });
    });
  });
})();
