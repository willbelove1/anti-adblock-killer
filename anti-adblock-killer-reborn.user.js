// ==UserScript==
// @name         Anti-Adblock Killer | Reborn
// @namespace    https://github.com/reek/anti-adblock-killer
// @version      2025.2
// @description  A modern, lightweight, and effective script to bypass anti-adblock mechanisms, rebuilt for 2025.
// @author       Reek & AI
// @match        *://*/*
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const config = {
        debug: false,
        // Keywords to identify ad-related scripts and network requests
        adKeywords: [
            'adblock', 'ads', 'advert', 'sponsor', 'banner', 'publicity',
            'fuckadblock', 'blockadblock', 'ad-tech', 'ad-server'
        ],
    };

    const log = (message) => {
        if (config.debug) {
            console.log(`[Aak Reborn] ${new Date().toLocaleTimeString()}: ${message}`);
        }
    };

    // 1. Neutralize common global variables and functions used for adblock detection
    const neutralizeGlobals = () => {
        log('Neutralizing global adblock detectors...');
        const props = {
            'adblock': false,
            'adblocker': false,
            'isAdBlockActive': false,
            'FuckAdBlock': () => {},
            'BlockAdBlock': () => {},
        };
        for (const prop in props) {
            Object.defineProperty(window, prop, {
                value: props[prop],
                writable: false,
                configurable: true,
            });
        }
    };

    // 2. Intercept and neutralize scripts (both inline and external)
    const interceptScripts = () => {
        log('Activating script interceptor...');
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.tagName === 'SCRIPT') {
                        const scriptContent = node.innerHTML;
                        const scriptSrc = node.src;
                        if (config.adKeywords.some(kw => scriptContent.includes(kw) || (scriptSrc && scriptSrc.includes(kw)))) {
                            node.textContent = '';
                            if (node.src) node.src = 'about:blank';
                            log(`Neutralized script: ${scriptSrc || 'inline script'}`);
                        }
                    }
                });
            });
        });
        observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
        });
    };

    // 3. Intercept and block ad-related network requests
    const interceptNetworkRequests = () => {
        log('Activating network request interceptors...');

        // Intercept fetch API
        const originalFetch = window.fetch;
        window.fetch = async (url, options) => {
            const urlString = (typeof url === 'string') ? url : (url && url.url);
            if (urlString && config.adKeywords.some(kw => urlString.includes(kw))) {
                log(`Blocking fetch request to: ${urlString}`);
                return Promise.reject(new Error('Blocked by Aak Reborn'));
            }
            return originalFetch(url, options);
        };

        // Intercept XMLHttpRequest
        const originalXhrOpen = window.XMLHttpRequest.prototype.open;
        window.XMLHttpRequest.prototype.open = function(method, url, ...args) {
            if (url && typeof url === 'string' && config.adKeywords.some(kw => url.includes(kw))) {
                log(`Blocking XHR request to: ${url}`);
                arguments[1] = 'about:blank';
            }
            return originalXhrOpen.apply(this, arguments);
        };
    };

    // --- Main Execution ---
    log('Aak Reborn 2025 initialized.');
    neutralizeGlobals();
    interceptScripts();
    interceptNetworkRequests();

})();
