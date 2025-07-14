# Anti-Adblock Killer | Reborn (2025.4)

Welcome to the completely rewritten and modernized version of the Anti-Adblock Killer. This project, "Reborn," is a forward-looking solution designed to address the sophisticated anti-adblock technologies of 2025 and beyond.

## A New Beginning

The original Anti-Adblock Killer by Reek was a phenomenal tool for its time. However, the landscape of the web has changed. Modern websites employ advanced techniques like CNAME cloaking, dynamic script injection, and complex API-based detection methods. The "Reborn" project is a complete overhaul, built from the ground up to be a lightweight, efficient, and powerful tool against these new challenges.

## Core Architecture

The "Reborn" version operates on a new, unified architecture where the userscript and filter list work in tandem:

- **`anti-adblock-killer-reborn.user.js`**: A streamlined and powerful userscript that focuses on neutralizing the *logic* of anti-adblock mechanisms. It intercepts and disables suspicious scripts, overrides detection functions, and blocks ad-related network requests at the browser level.

- **`anti-adblock-killer-reborn-filters.txt`**: A curated and optimized filter list that complements the userscript. It handles the *cosmetic* aspects of adblocking, such as hiding ad containers, and blocks requests to known ad-serving domains.

This separation of concerns ensures that the project is both effective and easy to maintain.

## Key Features in Version 2025.4

- **Advanced Evasion Techniques**: The script now includes functions to create fake ad elements and bypass cookie-based detection, making it harder for sites to identify.
- **Intelligent Network Handling**: Instead of just blocking ad-related network requests, the script can now provide fake responses, tricking sites into thinking that ads are loading normally.
- **User-Friendly Interface**: A simple menu command allows users to toggle debug mode on and off for easier troubleshooting.
- **Comprehensive Filter List**: The filter list has been significantly expanded to include more ad networks, tracking domains, and site-specific fixes for a wider range of websites.
- **Paywall and Storage Handling**: New rules have been added to bypass simple paywalls and clear adblock detection flags from local storage.

## Installation

To get started with the "Reborn" version, follow these steps:

1. **Install a Userscript Manager**: You'll need a browser extension like [Tampermonkey](https://www.tampermonkey.net/) or [Greasemonkey](https://www.greasespot.net/).

2. **Install the "Reborn" Userscript**:
   - Click [here](https://raw.githubusercontent.com/your-repo/anti-adblock-killer/master/anti-adblock-killer-reborn.user.js) to install the script.

3. **Subscribe to the "Reborn" Filter List**:
   - Open your adblocker's settings (e.g., AdBlock Plus, uBlock Origin).
   - Add a new filter subscription and paste the following URL:
     ```
     https://raw.githubusercontent.com/your-repo/anti-adblock-killer/master/anti-adblock-killer-reborn-filters.txt
     ```

**Important**: Please remove any old versions of the Anti-Adblock Killer script and filter lists to avoid conflicts.

## Deprecated Files

The following files from the original project are now deprecated and no longer maintained:

- `anti-adblock-killer.user.js`
- `anti-adblock-killer-filters.txt`

## Contributing

The "Reborn" project is open to contributions. If you find a website where the script is not effective, or if you have ideas for improvement, please open an issue or submit a pull request. Your feedback is invaluable in keeping this project at the forefront of the battle against anti-adblockers.
