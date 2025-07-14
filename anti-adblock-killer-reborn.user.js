// ==UserScript==
// @name         Anti-Adblock Killer | Reborn
// @namespace    https://github.com/reek/anti-adblock-killer
// @version      2025.1
// @description  A modern, lightweight, and effective script to bypass anti-adblock mechanisms.
// @author       Reek & AI
// @match        *://*/*
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const config = {
        debug: false,
        adKeywords: ['adblock', 'ads', 'advert', 'sponsor', 'banner', 'publicity', 'fuckadblock', 'blockadblock'],
    };

    const log = (message) => {
        if (config.debug) {
            console.log(`[Aak Reborn] ${message}`);
        }
    };

    const neutralizeGlobals = () => {
        const props = {
            'adblock': false, 'adblocker': false, 'isAdBlockActive': false,
            'FuckAdBlock': () => {}, 'BlockAdBlock': () => {},
        };
        for (const prop in props) {
            Object.defineProperty(window, prop, {
                value: props[prop], writable: false, configurable: true,
            });
        }
        log('Global detectors neutralized.');
    };

    const interceptScripts = () => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.tagName === 'SCRIPT') {
                        const scriptContent = node.innerHTML;
                        const scriptSrc = node.src;
                        if (config.adKeywords.some(kw => scriptContent.includes(kw) || (scriptSrc && scriptSrc.includes(kw)))) {
                            node.textContent = '';
                            if (node.src) node.src = 'about:blank';
                            log(`Neutralized script: ${scriptSrc || 'inline'}`);
                        }
                    }
                });
            });
        });
        observer.observe(document.documentElement, {
            childList: true, subtree: true,
        });
        log('Script interceptor active.');
    };

    const interceptNetworkRequests = () => {
        const originalFetch = window.fetch;
        window.fetch = async (url, options) => {
            const urlString = (typeof url === 'string') ? url : (url && url.url);
            if (urlString && config.adKeywords.some(kw => urlString.includes(kw))) {
                log(`Blocking fetch request to: ${urlString}`);
                return Promise.reject(new Error('Blocked by Aak Reborn'));
            }
            return originalFetch(url, options);
        };

        const originalXhrOpen = window.XMLHttpRequest.prototype.open;
        window.XMLHttpRequest.prototype.open = function(method, url, ...args) {
            if (url && typeof url === 'string' && config.adKeywords.some(kw => url.includes(kw))) {
                log(`Blocking XHR request to: ${url}`);
                arguments[1] = 'about:blank';
            }
            return originalXhrOpen.apply(this, arguments);
        };
        log('Network request interceptors active.');
    };

    log('Aak Reborn 2025 is running.');
    neutralizeGlobals();
    interceptScripts();
    interceptNetworkRequests();
})();
