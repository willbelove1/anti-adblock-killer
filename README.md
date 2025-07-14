# Anti-Adblock Killer | Reek (2025 Updated)

This is an updated version of the original Anti-Adblock Killer by Reek, enhanced to combat modern adblock detection techniques as of 2025.

## Key Changes in Version 12.0

- **Modernized Detection Logic**: The core script (`anti-adblock-killer.user.js`) has been updated with a new function, `modernBlockDetect`, which employs modern techniques to neutralize anti-adblock scripts. This includes:
  - **Global Variable Neutralization**: Overrides common JavaScript variables that adblock detectors look for.
  - **Script Interception**: Uses a `MutationObserver` to detect and disable inline and external scripts that contain adblock detection logic.
  - **Network Request Interception**: Overrides the `fetch` API to block requests to known ad-related domains, helping to bypass CNAME cloaking.

- **Updated Filter List**: The filter list (`anti-adblock-killer-filters.txt`) has been updated to version 12.0 and now includes rules specifically designed to counter modern anti-adblock strategies on popular websites.

- **Improved Performance**: The script has been optimized to minimize its impact on browser performance while providing robust protection against anti-adblock measures.

## Installation

1. **Install a userscript manager** such as [Tampermonkey](https://www.tampermonkey.net/) or [Greasemonkey](https://www.greasespot.net/).
2. **Install the userscript**: Click [here](https://raw.githubusercontent.com/your-repo/anti-adblock-killer/master/anti-adblock-killer.user.js) to install the updated script.
3. **Subscribe to the filter list**: Add the URL for `anti-adblock-killer-filters.txt` to your adblocker's filter subscriptions for comprehensive protection.

## Contributing

We welcome contributions! If you encounter a site where the script fails or have ideas for improvement, please open an issue or submit a pull request.
