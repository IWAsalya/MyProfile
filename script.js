function changeLanguage(lang) {
    // تغيير لغة الصفحة بتغيير السمة "lang" في عنصر <html>
    document.documentElement.lang = lang;

    // تغيير نصوص جميع العناصر حسب اللغة
    const elements = document.querySelectorAll('[data-lang-ar], [data-lang-en]');
    
    elements.forEach(function(element) {
        // تغيير النص بناءً على اللغة
        if (lang === 'ar') {
            element.textContent = element.getAttribute('data-lang-ar');
        } else {
            element.textContent = element.getAttribute('data-lang-en');
        }
    });

    // تغيير نص الزر
    const langBtn = document.getElementById('lang-btn');
    if (lang === 'ar') {
        langBtn.textContent = 'تغيير اللغة';
    } else {
        langBtn.textContent = 'Change Language';
    }
}
