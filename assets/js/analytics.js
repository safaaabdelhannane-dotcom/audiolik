/* =============================================================
   AUDIOLIK — Google Analytics 4 + suivi des conversions
   Fichier : /assets/js/analytics.js

   CONSENTEMENT — CE FICHIER NE FAIT PLUS RIEN TOUT SEUL
   Il n'est plus appele par les pages : c'est /assets/js/consent.js
   qui le charge, et seulement apres un clic sur « Accepter »
   (loi 09-08 / CNDP, RGPD). Il expose :
     window.AudiolikAnalytics.load()     charge GA4 (une seule fois)
     window.AudiolikAnalytics.disable()  coupe l'envoi et efface les
                                         cookies _ga apres un refus

   CONFIDENTIALITE — REGLE ABSOLUE
   Aucune donnee personnelle ou medicale n'est envoyee a Google :
   ni le nom, ni le telephone, ni le motif de consultation,
   ni le message du patient. Seuls sont transmis le type d'action,
   l'URL de la page, son titre et le libelle du bouton.
   ============================================================= */

(function () {
  'use strict';

  var MEASUREMENT_ID = 'G-3NPTTHL11N';
  var loaded = false;

  function load() {
    if (loaded) return;
    loaded = true;
    window['ga-disable-' + MEASUREMENT_ID] = false;

    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', MEASUREMENT_ID, {
      anonymize_ip: true,
      allow_google_signals: false
    });

    function contexte(extra) {
      var data = {
        page_location: window.location.href,
        page_title: document.title
      };
      for (var k in extra) { if (extra[k] !== undefined) data[k] = extra[k]; }
      return data;
    }

    function libelle(el) {
      var t = (el.getAttribute('aria-label') || el.innerText || '').trim();
      return t.replace(/\s+/g, ' ').slice(0, 80);
    }

    var dernier = {};
    function unique(nom) {
      var maintenant = Date.now();
      if (dernier[nom] && maintenant - dernier[nom] < 1000) return false;
      dernier[nom] = maintenant;
      return true;
    }

    function envoyer(nom, params) {
      if (!unique(nom)) return;
      gtag('event', nom, contexte(params));
    }

    document.addEventListener('click', function (e) {
      var a = e.target.closest ? e.target.closest('a, button') : null;
      if (!a) return;

      var href = a.getAttribute('href') || '';

      if (href.indexOf('tel:') === 0) {
        envoyer('click_phone', { link_url: href, button_text: libelle(a) });
        return;
      }

      if (href.indexOf('wa.me') > -1 || href.indexOf('whatsapp.com') > -1) {
        envoyer('click_whatsapp', { link_url: href.split('?')[0], button_text: libelle(a) });
        return;
      }

      if (href.indexOf('google.com/maps') > -1 ||
          href.indexOf('maps.app.goo.gl') > -1 ||
          href.indexOf('goo.gl/maps') > -1) {
        envoyer('click_directions', { link_url: href.split('?')[0], button_text: libelle(a) });
        return;
      }

      if (href === '#contact' || href.indexOf('#contact') > -1 ||
          /rendez[\s-]?vous|rdv/i.test(libelle(a))) {
        envoyer('click_appointment', { link_url: href, button_text: libelle(a) });
      }
    }, true);

    document.addEventListener('submit', function (e) {
      var f = e.target;
      if (!f || f.id !== 'rdv-form') return;

      setTimeout(function () {
        var invalide = f.querySelector('[data-invalid="true"], [aria-invalid="true"]');
        if (invalide) return;
        envoyer('generate_lead', {
          link_url: window.location.pathname,
          button_text: 'Formulaire de rendez-vous'
        });
      }, 0);
    }, true);
  }

  /* Refus apres un accord : GA ne peut pas etre « decharge » de la page,
     mais ce drapeau officiel stoppe tout envoi, et les cookies _ga sont
     effaces pour le domaine courant et le domaine parent. */
  function disable() {
    window['ga-disable-' + MEASUREMENT_ID] = true;
    var host = location.hostname.replace(/^www\./, '');
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (name.indexOf('_ga') !== 0) return;
      var past = '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
      document.cookie = name + past;
      document.cookie = name + past + '; domain=' + host;
      document.cookie = name + past + '; domain=.' + host;
    });
  }

  window.AudiolikAnalytics = { load: load, disable: disable };
})();
