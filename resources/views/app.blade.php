<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name') }}</title>

        <link rel="manifest" href="manifest.json" />
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
