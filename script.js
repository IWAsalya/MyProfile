function toggleSection(header) {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  }
  
  function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
    const elements = document.querySelectorAll('[data-lang-ar], [data-lang-en]');
    elements.forEach(element => {
      element.textContent = lang === 'ar' ? element.getAttribute('data-lang-ar') : element.getAttribute('data-lang-en');
    });
  
    const langBtn = document.getElementById('lang-btn');
    langBtn.textContent = lang === 'ar' ? 'Change Language' : 'تغيير اللغة';
  }
  
