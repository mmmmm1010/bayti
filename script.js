  const translations = {
            ar: {
                headerTitle: "بيتي - تطبيق عقارات ذكي للأردن",
                navHome: "الرئيسية",
                navBuy: "شراء",
                navRent: "إيجار",
                navAgents: "الوكلاء",
                navContact: "اتصل بنا",
                navLogin: "تسجيل الدخول",
                langBtn: "English",
                heroTitle: "اعثر على منزل أحلامك في الأردن",
                heroSubtitle: "اكتشف عقارات موثوقة للبيع والإيجار مع وكلاء معتمدين",
                searchType: ["بحث", "بيع", "إيجار"],
                propertyType: ["نوع العقار", "شقة", "فيلا", "أرض"],
                transactionType: ["شراء أو إيجار", "شراء", "إيجار"],
                locationPlaceholder: "أدخل المدينة أو المنطقة",
                searchBtn: "بحث",
                featuredTitle: "العقارات المميزة",
                prop1Title: "شقة عصرية في عمان",
                prop1Details: "3 غرف نوم • 2 حمام",
                prop2Title: "فيلا فاخرة - البحر الميت",
                prop2Details: "5 غرف نوم • 4 حمام",
                prop3Title: "شقة مريحة - إربد",
                prop3Details: "2 غرف نوم • 1 حمام",
                footerAddress: "📍 عمان، الأردن",
                footerPhone: "📞 هاتف: +962-6-1234567",
                footerEmail: "📧 البريد: info@bayti.jo",
                footerCopyright: "© 2025 بيتي العقارية. جميع الحقوق محفوظة."
            },
            en: {
                headerTitle: "Bayti - Smart Real Estate App for Jordan",
                navHome: "Home",
                navBuy: "Buy",
                navRent: "Rent",
                navAgents: "Agents",
                navContact: "Contact Us",
                navLogin: "Login",
                langBtn: "العربية",
                heroTitle: "Find Your Dream Home in Jordan",
                heroSubtitle: "Discover trusted properties for sale and rent with certified agents",
                searchType: ["Search", "Sale", "Rent"],
                propertyType: ["Property Type", "Apartment", "Villa", "Land"],
                transactionType: ["Buy or Rent", "Buy", "Rent"],
                locationPlaceholder: "Enter city or area",
                searchBtn: "Search",
                featuredTitle: "Featured Properties",
                prop1Title: "Modern Apartment in Amman",
                prop1Details: "3 Bedrooms • 2 Bathrooms",
                prop2Title: "Luxury Villa - Dead Sea",
                prop2Details: "5 Bedrooms • 4 Bathrooms",
                prop3Title: "Cozy Apartment - Irbid",
                prop3Details: "2 Bedrooms • 1 Bathroom",
                footerAddress: "📍 Amman, Jordan",
                footerPhone: "📞 Phone: +962-6-1234567",
                footerEmail: "📧 Email: info@bayti.jo",
                footerCopyright: "© 2025 Bayti Real Estate. All rights reserved."
            }
        };

        let currentLang = 'ar';

        function toggleLanguage() {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            const lang = translations[currentLang];
            
            // Update HTML attributes
            document.documentElement.lang = currentLang;
            document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
            
            // Update text content
            document.getElementById('header-title').textContent = lang.headerTitle;
            document.getElementById('nav-home').textContent = lang.navHome;
            document.getElementById('nav-buy').textContent = lang.navBuy;
            document.getElementById('nav-rent').textContent = lang.navRent;
            document.getElementById('nav-agents').textContent = lang.navAgents;
            document.getElementById('nav-contact').textContent = lang.navContact;
            document.getElementById('nav-login').textContent = lang.navLogin;
            document.getElementById('lang-btn').textContent = lang.langBtn;
            document.getElementById('hero-title').textContent = lang.heroTitle;
            document.getElementById('hero-subtitle').textContent = lang.heroSubtitle;
            document.getElementById('location-input').placeholder = lang.locationPlaceholder;
            document.getElementById('search-btn').textContent = lang.searchBtn;
            document.getElementById('featured-title').textContent = lang.featuredTitle;
            document.getElementById('prop1-title').textContent = lang.prop1Title;
            document.getElementById('prop1-details').textContent = lang.prop1Details;
            document.getElementById('prop2-title').textContent = lang.prop2Title;
            document.getElementById('prop2-details').textContent = lang.prop2Details;
            document.getElementById('prop3-title').textContent = lang.prop3Title;
            document.getElementById('prop3-details').textContent = lang.prop3Details;
            document.getElementById('footer-address').textContent = lang.footerAddress;
            document.getElementById('footer-phone').textContent = lang.footerPhone;
            document.getElementById('footer-email').textContent = lang.footerEmail;
            document.getElementById('footer-copyright').textContent = lang.footerCopyright;
            
            // Update select options
            updateSelectOptions('search-type', lang.searchType);
            updateSelectOptions('property-type', lang.propertyType);
            updateSelectOptions('transaction-type', lang.transactionType);
        }

        function updateSelectOptions(selectId, options) {
            const select = document.getElementById(selectId);
            const selectedIndex = select.selectedIndex;
            for (let i = 0; i < options.length; i++) {
                select.options[i].text = options[i];
            }
            select.selectedIndex = selectedIndex;