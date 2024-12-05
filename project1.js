// تفعيل القائمة المتحركة
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// إغلاق القائمة عند النقر على أي رابط
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links .nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileNav.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// تأثير التمرير للروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Loading Screen
window.addEventListener('load', () => {
    const loadingPage = document.querySelector('.loading-page');
    // إخفاء شاشة التحميل بعد اكتمال تحميل الصفحة
    setTimeout(() => {
        loadingPage.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 1000);
});

// منع التمرير أثناء ظهور شاشة التحميل
document.body.style.overflow = 'hidden';
