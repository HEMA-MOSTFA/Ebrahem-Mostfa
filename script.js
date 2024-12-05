// Header scroll effect
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// إخفاء صفحة التحميل بعد اكتمال تحميل الصفحة
window.addEventListener('load', function() {
    const loadingPage = document.querySelector('.loading-page');
    setTimeout(() => {
        loadingPage.classList.add('hidden');
    }, 1500); // تأخير 1.5 ثانية قبل إخفاء صفحة التحميل
});
