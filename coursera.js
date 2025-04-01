// ==UserScript==
// @name         Filtrar Itens Gratuitos no Coursera
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Exibir apenas os cursos gratuitos no Coursera
// @author       Você
// @match        https://www.coursera.org/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    function filterItems() {
        document.querySelectorAll('li.cds-grid-item').forEach(li => {
            const span = li.querySelector('span.css-1rlln5c[aria-hidden="true"]');
            if (!span || span.textContent.trim() !== 'Gratuito') {
                li.style.display = 'none';
            }
        });
    }

    // Executar ao carregar e observar mudanças na página
    const observer = new MutationObserver(filterItems);
    observer.observe(document.body, { childList: true, subtree: true });

    filterItems();
})();
