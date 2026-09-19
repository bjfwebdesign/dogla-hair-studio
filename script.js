(function () {
  'use strict';

  /* ---------------------------------------------------------------------
     i18n — Dutch (default) / English
  --------------------------------------------------------------------- */
  var I18N = {
    nl: {
      nav: {
        ariaLabel: 'Hoofdmenu',
        home: 'Home',
        services: 'Diensten',
        about: 'Over ons',
        hours: 'Openingstijden',
        contact: 'Contact',
        book: 'Boek afspraak'
      },
      cta: {
        bookFull: 'Boek een afspraak',
        eyebrow: 'Klaar voor je volgende knipbeurt?',
        heading: 'Boek je afspraak<br>bij Dogla\'s.',
        paragraph: 'Kom langs in Almere-Poort of plan direct online — snel, eenvoudig en zonder gedoe.'
      },
      hero: {
        subtitle: 'Gespecialiseerd in Europees haar en Afro haar. Precisie knippen en contouren door professionele kappers, in het hart van Almere-Poort.',
        viewServices: 'Bekijk diensten',
        scroll: 'Scroll',
        label: { address: 'Adres', phone: 'Telefoon', since: 'Sinds' }
      },
      intro: {
        heading: 'Vakmanschap<br><em>ontmoet</em> stijl.',
        p1: '<strong>Sinds 2022</strong> is Dogla\'s Hair Studio dé plek in Almere om je Europese haar of kroeshaar te laten stylen.',
        p2: 'Sergio Chunilall werkt al jaren als professionele kapper en nodigt je uit om je haar goed te laten zetten — met aandacht voor precisie, in een strakke, moderne studio in Almere-Poort.',
        badge1: 'Specialisaties',
        badge2: 'Geopend sinds',
        badge3: 'Dagen per week open'
      },
      services: {
        heading: 'Onze<br>Diensten',
        note: 'Uitgevoerd door een van onze professionele kappers naar keuze. Prijzen zijn vanafprijzen.',
        name1: 'Contouren & Baard',
        name2: 'Knippen Volwassen',
        name3: 'Knippen Kinderen',
        name4: 'Knippen + Baard',
        from: 'Vanaf',
        footText: 'Kom langs of bel voor een afspraak — 06 87 24 50 31',
        bookAll: 'Alle diensten boeken'
      },
      gallery: {
        eyebrow: 'In de studio',
        heading: 'Sfeer & werk',
        cap1: 'De studio',
        cap2: 'Precisie fade',
        cap3: 'Kroeshaar styling',
        cap4: 'Contouren & baard',
        cap5: 'Kinderen'
      },
      about: {
        eyebrow: 'Over ons',
        p2: 'Sergio Chunilall werkt al jaren als professionele kapper en nodigt je uit om je haar goed te laten zetten.',
        cta: 'Kom langs in de studio'
      },
      hours: {
        eyebrow: 'Openingstijden',
        heading: 'Onze deuren<br>zijn geopend',
        closed: 'Gesloten'
      },
      days: {
        monday: 'Maandag', tuesday: 'Dinsdag', wednesday: 'Woensdag',
        thursday: 'Donderdag', friday: 'Vrijdag', saturday: 'Zaterdag', sunday: 'Zondag'
      },
      contact: {
        eyebrow: 'Contact & locatie',
        heading: 'Kom<br>langs'
      },
      footer: {
        tagline: 'Kapper gespecialiseerd in Europees haar en Afro haar, gevestigd in Almere-Poort sinds 2022.',
        navHeading: 'Navigatie',
        contactHeading: 'Contact',
        hoursHeading: 'Openingstijden',
        hours1: 'Ma — Wo: 11:00–19:30',
        hours2: 'Do — Za: 11:00–20:00',
        hours3: 'Zondag: Gesloten',
        rights: 'Alle rechten voorbehouden.'
      },
      status: {
        loading: 'Status wordt geladen…',
        loadingHours: 'Laden…',
        open: 'Nu geopend',
        closed: 'Nu gesloten',
        todayPrefix: 'Vandaag: ',
        todayClosed: 'Vandaag gesloten'
      },
      meta: {
        title: 'Dogla\'s Hair Studio — Kapper in Almere-Poort | Europees & Afro Haar',
        description: 'Dogla\'s Hair Studio in Almere-Poort: kapper gespecialiseerd in Europees haar en Afro (kroes)haar. Sinds 2022. Boek eenvoudig je afspraak online.'
      }
    },
    en: {
      nav: {
        ariaLabel: 'Main menu',
        home: 'Home',
        services: 'Services',
        about: 'About',
        hours: 'Opening Hours',
        contact: 'Contact',
        book: 'Book Now'
      },
      cta: {
        bookFull: 'Book an Appointment',
        eyebrow: 'Ready for your next cut?',
        heading: 'Book your appointment<br>at Dogla\'s.',
        paragraph: 'Stop by in Almere-Poort or book directly online — fast, simple and hassle-free.'
      },
      hero: {
        subtitle: 'Specialised in European and Afro hair. Precision cuts and contours by professional barbers, in the heart of Almere-Poort.',
        viewServices: 'View Services',
        scroll: 'Scroll',
        label: { address: 'Address', phone: 'Phone', since: 'Since' }
      },
      intro: {
        heading: 'Craftsmanship<br><em>meets</em> style.',
        p1: '<strong>Since 2022</strong>, Dogla\'s Hair Studio has been the place in Almere to get your European hair or Afro hair styled.',
        p2: 'Sergio Chunilall has worked as a professional barber for years and invites you in for a great cut — with an eye for precision, in a sharp, modern studio in Almere-Poort.',
        badge1: 'Specialisations',
        badge2: 'Open since',
        badge3: 'Days open per week'
      },
      services: {
        heading: 'Our<br>Services',
        note: 'Carried out by one of our professional barbers of your choice. Prices shown are starting prices.',
        name1: 'Contours & Beard',
        name2: 'Adult Haircut',
        name3: 'Kids Haircut',
        name4: 'Haircut + Beard',
        from: 'From',
        footText: 'Stop by or call for an appointment — 06 87 24 50 31',
        bookAll: 'Book All Services'
      },
      gallery: {
        eyebrow: 'In the Studio',
        heading: 'Atmosphere & Work',
        cap1: 'The Studio',
        cap2: 'Precision Fade',
        cap3: 'Afro Hair Styling',
        cap4: 'Contours & Beard',
        cap5: 'Kids'
      },
      about: {
        eyebrow: 'About Us',
        p2: 'Sergio Chunilall has worked as a professional barber for years and invites you in for a great cut.',
        cta: 'Visit the Studio'
      },
      hours: {
        eyebrow: 'Opening Hours',
        heading: 'Our Doors<br>Are Open',
        closed: 'Closed'
      },
      days: {
        monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday',
        thursday: 'Thursday', friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday'
      },
      contact: {
        eyebrow: 'Contact & Location',
        heading: 'Visit<br>Us'
      },
      footer: {
        tagline: 'Barber specialised in European and Afro hair, based in Almere-Poort since 2022.',
        navHeading: 'Navigation',
        contactHeading: 'Contact',
        hoursHeading: 'Opening Hours',
        hours1: 'Mon — Wed: 11:00–19:30',
        hours2: 'Thu — Sat: 11:00–20:00',
        hours3: 'Sunday: Closed',
        rights: 'All rights reserved.'
      },
      status: {
        loading: 'Loading status…',
        loadingHours: 'Loading…',
        open: 'Open now',
        closed: 'Closed now',
        todayPrefix: 'Today: ',
        todayClosed: 'Closed today'
      },
      meta: {
        title: 'Dogla\'s Hair Studio — Barbershop in Almere-Poort | European & Afro Hair',
        description: 'Dogla\'s Hair Studio in Almere-Poort: barber specialised in European and Afro (curly) hair. Since 2022. Book your appointment online easily.'
      }
    }
  };

  function t(lang, key) {
    var node = I18N[lang];
    var parts = key.split('.');
    for (var i = 0; i < parts.length; i++) {
      if (node == null) break;
      node = node[parts[i]];
    }
    return node == null ? key : node;
  }

  var LANG_KEY = 'dogla-lang';
  var currentLang = 'nl';

  function applyLanguage(lang) {
    if (!I18N[lang]) lang = 'nl';
    currentLang = lang;

    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }

    document.documentElement.lang = lang;
    document.title = t(lang, 'meta.title');
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t(lang, 'meta.description'));

    var navLinks = document.querySelector('.nav-links');
    if (navLinks) navLinks.setAttribute('aria-label', t(lang, 'nav.ariaLabel'));

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(lang, el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(lang, el.getAttribute('data-i18n-html'));
    });

    document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    applyStatus();
  }

  document.querySelectorAll('.lang-toggle button[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLanguage(btn.getAttribute('data-lang'));
    });
  });

  /* ---------------------------------------------------------------------
     Opening hours data — exact hours from the existing site
  --------------------------------------------------------------------- */
  var HOURS = {
    0: null, // Sunday: closed
    1: { open: '11:00', close: '19:30' },
    2: { open: '11:00', close: '19:30' },
    3: { open: '11:00', close: '19:30' },
    4: { open: '11:00', close: '20:00' },
    5: { open: '11:00', close: '20:00' },
    6: { open: '11:00', close: '20:00' }
  };

  function toMinutes(hhmm) {
    var parts = hhmm.split(':');
    return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
  }

  function computeStatus() {
    var now = new Date();
    var day = now.getDay();
    var nowMin = now.getHours() * 60 + now.getMinutes();
    var today = HOURS[day];
    var isOpen = false;
    var label = t(currentLang, 'status.closed');
    var todayText = t(currentLang, 'status.todayClosed');

    if (today) {
      var openMin = toMinutes(today.open);
      var closeMin = toMinutes(today.close);
      isOpen = nowMin >= openMin && nowMin < closeMin;
      todayText = t(currentLang, 'status.todayPrefix') + today.open + ' — ' + today.close;
      label = isOpen ? t(currentLang, 'status.open') : t(currentLang, 'status.closed');
    }

    return { isOpen: isOpen, label: label, todayText: todayText, day: day };
  }

  function applyStatus() {
    var status = computeStatus();

    var heroStatus = document.getElementById('heroStatus');
    var heroText = document.getElementById('heroStatusText');
    if (heroStatus && heroText) {
      heroText.textContent = status.label;
      heroStatus.classList.toggle('closed', !status.isOpen);
    }

    var hoursStatus = document.getElementById('hoursStatus');
    var hoursText = document.getElementById('hoursStatusText');
    var hoursToday = document.getElementById('hoursToday');
    if (hoursStatus && hoursText && hoursToday) {
      hoursText.textContent = status.label;
      hoursToday.textContent = status.todayText;
      hoursStatus.classList.toggle('closed', !status.isOpen);
    }

    var rows = document.querySelectorAll('.hours-row');
    rows.forEach(function (row) {
      var d = parseInt(row.getAttribute('data-day'), 10);
      row.classList.toggle('today', d === status.day);
    });
  }

  setInterval(applyStatus, 60000);

  /* ---------------------------------------------------------------------
     Language init — restore saved preference (defaults to Dutch)
  --------------------------------------------------------------------- */
  (function initLanguage() {
    var saved = 'nl';
    try { saved = localStorage.getItem(LANG_KEY) || 'nl'; } catch (e) { /* ignore */ }
    applyLanguage(saved);
  })();

  /* ---------------------------------------------------------------------
     Sticky nav background on scroll
  --------------------------------------------------------------------- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------------------------------------------------------------------
     Mobile fullscreen menu
  --------------------------------------------------------------------- */
  var burger = document.getElementById('burger');
  var mobileMenu = document.getElementById('mobileMenu');

  function closeMenu() {
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    var isOpen = mobileMenu.classList.toggle('open');
    burger.classList.toggle('active', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  if (burger) {
    burger.addEventListener('click', toggleMenu);
  }
  mobileMenu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  /* ---------------------------------------------------------------------
     Scroll reveal animations
  --------------------------------------------------------------------- */
  var revealEls = document.querySelectorAll('.reveal, .reveal-line');

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* Stagger service rows and gallery items slightly */
  document.querySelectorAll('.services-list .service-row').forEach(function (el, i) {
    el.style.transitionDelay = (i * 70) + 'ms';
  });

  /* ---------------------------------------------------------------------
     Hero load-in
  --------------------------------------------------------------------- */
  var hero = document.getElementById('hero');
  window.addEventListener('load', function () {
    requestAnimationFrame(function () {
      hero.classList.add('loaded');
      document.querySelectorAll('.hero .reveal, .hero .reveal-line').forEach(function (el, i) {
        setTimeout(function () { el.classList.add('is-visible'); }, i * 120);
      });
    });
  });

  /* ---------------------------------------------------------------------
     Footer year
  --------------------------------------------------------------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
