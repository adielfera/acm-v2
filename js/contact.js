(function(){
  var form = document.querySelector('form[action="#"]');
  if(!form) return;

  function showError(input, msg){
    var ex = input.parentNode.querySelector('.field-error');
    if(ex) ex.remove();
    var err = document.createElement('span');
    err.className = 'field-error';
    err.setAttribute('role','alert');
    err.textContent = msg;
    err.style.cssText = 'display:block;color:#dc2626;font-size:0.8rem;margin-top:4px;font-weight:500;';
    input.parentNode.appendChild(err);
    input.setAttribute('aria-invalid','true');
    input.style.borderColor = '#dc2626';
    input.style.boxShadow = '0 0 0 3px rgba(220,38,38,.12)';
  }
  function clearError(input){
    var ex = input.parentNode.querySelector('.field-error');
    if(ex) ex.remove();
    input.removeAttribute('aria-invalid');
    input.style.borderColor = '';
    input.style.boxShadow = '';
  }
  function validateField(input){
    if(input.required && !input.value.trim()){ showError(input,'This field is required.'); return false; }
    if(input.type === 'email' && input.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())){ showError(input,'Please enter a valid email address.'); return false; }
    clearError(input); return true;
  }

  form.querySelectorAll('input, textarea').forEach(function(f){
    f.addEventListener('blur', function(){ validateField(f); });
    f.addEventListener('input', function(){ if(f.getAttribute('aria-invalid')) clearError(f); });
  });

  form.addEventListener('submit', function(e){
    e.preventDefault();
    var valid = true;
    form.querySelectorAll('input[required], textarea[required]').forEach(function(f){ if(!validateField(f)) valid = false; });
    if(!valid){ var first = form.querySelector('[aria-invalid="true"]'); if(first) first.focus(); return; }
    var btn = form.querySelector('button[type="submit"]');
    if(btn){ btn.disabled = true; btn.textContent = 'Sending…'; }
    setTimeout(function(){
      var success = document.createElement('p');
      success.setAttribute('role','alert');
      success.style.cssText = 'color:#059669;font-weight:600;margin-top:16px;padding:12px 16px;background:#ecfdf5;border:1px solid #a7f3d0;border-radius:8px;font-size:0.9rem;';
      success.textContent = 'Thank you! Your message has been sent. We will respond within 1–2 business days.';
      form.insertAdjacentElement('afterend', success);
      form.reset();
      if(btn){ btn.disabled = false; btn.textContent = 'Send Message'; }
    }, 800);
  });
})();
