
import packageJson from './package.json' assert { type: 'json' };


/**
 * After changing, please reload the extension at `chrome://extensions`
 * @type {chrome.runtime.ManifestV3}
 */
export default {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  autor: "@codeRagnarok",
  description: packageJson.description,
  permissions: [ 'storage','sidePanel' ],

  action: {
    default_popup: 'src/popup/index.html',
  },

  icons: {
    "16": "icon-16.png",
    "32": "icon-32.png",
    "48": "icon-48.png",
    "128": "icon-128.png"
  },
  background: "src/background.js",
  content_scripts: [
    {
      matches: [
        "http://*/*",
        "https://*/*",
        "<all_urls>"
      ],
      js: [
        "src/content.js"
      ],
      css: [
        "src/content_style.css"
      ]
    }
  ]

};