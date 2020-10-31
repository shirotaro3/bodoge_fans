<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="BdgFans">
        <meta name="format-detection" content="telephone=no">
        <meta name="theme-color" content="#333333">
        <meta name="msapplication-navbutton-color" content="#333333">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">

        <title>{{ config('app.name') }}</title>

        <link rel="manifest" href="manifest.json" />
        <link rel="apple-touch-icon" sizes="128x128" href="/img/icons/128.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/img/icons/144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/img/icons/152.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/img/icons/192.png" />
        <link rel="apple-touch-startup-image" href="/img/splash/640x1136.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/img/splash/750x1334.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/img/splash/1242x2208.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/img/splash/1125x2436.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
        <link rel="apple-touch-startup-image" href="/img/splash/828x1792.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
    </head>
    <body>
        
        <div id="app_root">
        </div>

        <script src="{{ asset('js/app.js') }}" defer></script>
        <script>
            var sessionUser = @json($user);
            navigator.serviceWorker.register('/serviceWorker.js')
                .then(registration => {
                    registration.onupdatefound = function() {
                        console.log('ServiceWorker update found.');
                        registration.update();
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        </script>
    </body>
</html>
