cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-device-orientation.CompassError",
      "file": "plugins/cordova-plugin-device-orientation/www/CompassError.js",
      "pluginId": "cordova-plugin-device-orientation",
      "clobbers": [
        "CompassError"
      ]
    },
    {
      "id": "cordova-plugin-device-orientation.CompassHeading",
      "file": "plugins/cordova-plugin-device-orientation/www/CompassHeading.js",
      "pluginId": "cordova-plugin-device-orientation",
      "clobbers": [
        "CompassHeading"
      ]
    },
    {
      "id": "cordova-plugin-device-orientation.compass",
      "file": "plugins/cordova-plugin-device-orientation/www/compass.js",
      "pluginId": "cordova-plugin-device-orientation",
      "clobbers": [
        "navigator.compass"
      ]
    },
    {
      "id": "cordova-plugin-battery-status.battery",
      "file": "plugins/cordova-plugin-battery-status/www/battery.js",
      "pluginId": "cordova-plugin-battery-status",
      "clobbers": [
        "navigator.battery"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection",
        "navigator.network.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "runs": true
    },
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification_android",
      "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-badge.Badge",
      "file": "plugins/cordova-plugin-badge/www/badge.js",
      "pluginId": "cordova-plugin-badge",
      "clobbers": [
        "plugin.notification.badge",
        "cordova.plugins.notification.badge"
      ]
    },
    {
      "id": "de.appplant.cordova.plugin.local-notification.LocalNotification",
      "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification.js",
      "pluginId": "de.appplant.cordova.plugin.local-notification",
      "clobbers": [
        "cordova.plugins.notification.local",
        "plugin.notification.local"
      ]
    },
    {
      "id": "de.appplant.cordova.plugin.local-notification.LocalNotification.Core",
      "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification-core.js",
      "pluginId": "de.appplant.cordova.plugin.local-notification",
      "clobbers": [
        "cordova.plugins.notification.local.core",
        "plugin.notification.local.core"
      ]
    },
    {
      "id": "de.appplant.cordova.plugin.local-notification.LocalNotification.Util",
      "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification-util.js",
      "pluginId": "de.appplant.cordova.plugin.local-notification",
      "merges": [
        "cordova.plugins.notification.local.core",
        "plugin.notification.local.core"
      ]
    },
    {
      "id": "cordova-plugin-notification.notify",
      "file": "plugins/cordova-plugin-notification/www/Notify.js",
      "pluginId": "cordova-plugin-notification",
      "clobbers": [
        "Notify"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-vibration": "3.1.0",
    "cordova-plugin-device-orientation": "2.0.1",
    "cordova-plugin-battery-status": "2.0.2",
    "cordova-plugin-network-information": "2.0.1",
    "cordova-plugin-geolocation": "4.0.1",
    "cordova-plugin-dialogs": "2.0.1",
    "cordova-plugin-console": "1.1.0",
    "cordova-plugin-app-event": "1.2.1",
    "cordova-plugin-badge": "0.7.4",
    "de.appplant.cordova.plugin.local-notification": "0.8.5",
    "cordova-plugin-notification": "1.3.7"
  };
});