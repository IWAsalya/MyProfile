
function changeLanguage(lang) {
    // تغيير لغة الصفحة بتغيير السمة "lang" في عنصر <html>
    document.documentElement.lang = lang;
    
    // تغيير نص الزر بناءً على اللغة
    const langBtn = document.getElementById('lang-btn');
    if (lang === 'ar') {
        langBtn.textContent = 'تغيير اللغة';
    } else {
        langBtn.textContent = 'Change Language';
    }
    
    // يمكنك إضافة المزيد من التغييرات بناءً على اللغة، مثل تعديل النصوص الأخرى أو تحميل ملفات أخرى للغة
}
