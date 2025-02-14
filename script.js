// تشغيل القائمة الجانبية
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
}

// تشغيل تأثير تحميل الصفحة
window.onload = function () {
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
    }, 1000);
};

// تحريك المهارات عند التمرير
window.addEventListener('scroll', function () {
    document.querySelectorAll('.progress-bar div').forEach((bar) => {
        bar.style.width = bar.style.width;
    });
});
