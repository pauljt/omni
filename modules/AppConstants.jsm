/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

ChromeUtils.defineModuleGetter(this, "Services", "resource://gre/modules/Services.jsm");
ChromeUtils.defineModuleGetter(this, "AddonManager", "resource://gre/modules/AddonManager.jsm");

this.EXPORTED_SYMBOLS = ["AppConstants"];

// Immutable for export.
this.AppConstants = Object.freeze({
  // See this wiki page for more details about channel specific build
  // defines: https://wiki.mozilla.org/Platform/Channel-specific_build_defines
  NIGHTLY_BUILD:
//@line 20 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  true,
//@line 24 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  FENNEC_NIGHTLY:
//@line 29 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  false,
//@line 31 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  RELEASE_OR_BETA:
//@line 36 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  false,
//@line 38 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  EARLY_BETA_OR_EARLIER:
//@line 41 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  true,
//@line 45 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  ACCESSIBILITY:
//@line 48 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  true,
//@line 52 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  // Official corresponds, roughly, to whether this build is performed
  // on Mozilla's continuous integration infrastructure. You should
  // disable developer-only functionality when this flag is set.
  MOZILLA_OFFICIAL:
//@line 58 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  true,
//@line 62 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_OFFICIAL_BRANDING:
//@line 67 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  false,
//@line 69 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_DEV_EDITION:
//@line 74 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  false,
//@line 76 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_SERVICES_SYNC:
//@line 81 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  false,
//@line 83 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_SERVICES_HEALTHREPORT:
//@line 86 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  true,
//@line 90 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_DATA_REPORTING:
//@line 93 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  true,
//@line 97 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_SANDBOX:
//@line 100 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  true,
//@line 104 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_TELEMETRY_REPORTING:
//@line 107 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  true,
//@line 111 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_TELEMETRY_ON_BY_DEFAULT:
//@line 114 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  true,
//@line 118 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_UPDATER:
//@line 121 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  true,
//@line 125 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_SWITCHBOARD:
//@line 130 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  false,
//@line 132 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_WEBRTC:
//@line 135 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  true,
//@line 139 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_WIDGET_GTK:
//@line 144 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  false,
//@line 146 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  XP_UNIX:
//@line 151 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  false,
//@line 153 "$SRCDIR\toolkit\modules\AppConstants.jsm"

//@line 156 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  platform:
//@line 160 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  "win",
//@line 170 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  isPlatformAndVersionAtLeast(platform, version) {
    let platformVersion = Services.sysinfo.getProperty("version");
    return platform == this.platform &&
           Services.vc.compare(platformVersion, version) >= 0;
  },

  isPlatformAndVersionAtMost(platform, version) {
    let platformVersion = Services.sysinfo.getProperty("version");
    return platform == this.platform &&
           Services.vc.compare(platformVersion, version) <= 0;
  },

  MOZ_CRASHREPORTER:
//@line 185 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  true,
//@line 189 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_MAINTENANCE_SERVICE:
//@line 192 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  true,
//@line 196 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_BITS_DOWNLOAD:
//@line 199 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  true,
//@line 203 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  DEBUG:
//@line 208 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  false,
//@line 210 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  ASAN:
//@line 215 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  false,
//@line 217 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  ASAN_REPORTER:
//@line 222 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  false,
//@line 224 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_GRAPHENE:
//@line 229 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  false,
//@line 231 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_SYSTEM_NSS:
//@line 236 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  false,
//@line 238 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_PLACES:
//@line 241 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  true,
//@line 245 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_REQUIRE_SIGNING:
//@line 250 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  false,
//@line 252 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  get MOZ_UNSIGNED_SCOPES() {
    let result = 0;
//@line 261 "$SRCDIR\toolkit\modules\AppConstants.jsm"
    return result;
  },

  MOZ_ALLOW_LEGACY_EXTENSIONS:
//@line 266 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  true,
//@line 270 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MENUBAR_CAN_AUTOHIDE:
//@line 273 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  true,
//@line 277 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_ANDROID_HISTORY:
//@line 282 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  false,
//@line 284 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_GECKO_PROFILER:
//@line 287 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  true,
//@line 291 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_ANDROID_ACTIVITY_STREAM:
//@line 296 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  false,
//@line 298 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_ANDROID_MOZILLA_ONLINE:
//@line 303 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  false,
//@line 305 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  DLL_PREFIX: "",
  DLL_SUFFIX: ".dll",

  MOZ_APP_NAME: "firefox",
  MOZ_APP_VERSION: "69.0a1",
  MOZ_APP_VERSION_DISPLAY: "69.0a1",
  MOZ_BUILD_APP: "browser",
  MOZ_MACBUNDLE_NAME: "Firefox Nightly.app",
  MOZ_UPDATE_CHANNEL: "nightly",
  MOZ_WIDGET_TOOLKIT: "windows",
  ANDROID_PACKAGE_NAME: "org.mozilla.firefox",

  DEBUG_JS_MODULES: "",

  MOZ_BING_API_CLIENTID: "no-bing-api-clientid",
  MOZ_BING_API_KEY: "no-bing-api-key",
  MOZ_GOOGLE_LOCATION_SERVICE_API_KEY: "AIzaSyB2h2OuRcUgy5N-5hsZqiPW6sH3n_rptiQ",
  MOZ_GOOGLE_SAFEBROWSING_API_KEY: "AIzaSyC7jsptDS3am4tPx4r3nxis7IMjBc5Dovo",
  MOZ_MOZILLA_API_KEY: "7e40f68c-7938-4c5d-9f95-e61647c213eb",

  BROWSER_CHROME_URL: "chrome://browser/content/browser.xhtml",

  OMNIJAR_NAME: "omni.ja",

  // URL to the hg revision this was built from (e.g.
  // "https://hg.mozilla.org/mozilla-central/rev/6256ec9113c1")
  // On unofficial builds, this is an empty string.
//@line 336 "$SRCDIR\toolkit\modules\AppConstants.jsm"
  SOURCE_REVISION_URL: "https://hg.mozilla.org/mozilla-central/rev/0dff9f803849e1e95d097fb2a41167f56c2d22c7",

  HAVE_USR_LIB64_DIR:
//@line 342 "$SRCDIR\toolkit\modules\AppConstants.jsm"
    false,
//@line 344 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  HAVE_SHELL_SERVICE:
//@line 347 "$SRCDIR\toolkit\modules\AppConstants.jsm"
    true,
//@line 351 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_CODE_COVERAGE:
//@line 356 "$SRCDIR\toolkit\modules\AppConstants.jsm"
    false,
//@line 358 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  TELEMETRY_PING_FORMAT_VERSION: 4,

  MOZ_NEW_XULSTORE:
//@line 363 "$SRCDIR\toolkit\modules\AppConstants.jsm"
    true,
//@line 367 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_NEW_NOTIFICATION_STORE:
//@line 370 "$SRCDIR\toolkit\modules\AppConstants.jsm"
    true,
//@line 374 "$SRCDIR\toolkit\modules\AppConstants.jsm"

  MOZ_NEW_CERT_STORAGE:
//@line 377 "$SRCDIR\toolkit\modules\AppConstants.jsm"
    true,
//@line 381 "$SRCDIR\toolkit\modules\AppConstants.jsm"
});
