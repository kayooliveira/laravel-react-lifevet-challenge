<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title') | RandomVET</title>
    {{-- STYLESHEETS --}}
    <link rel="stylesheet" href="{{ asset('css/main.css') }} ">
    <link rel="stylesheet" href="{{ asset('css/app.css') }} ">
    @stack('styles')
    {{-- SCRIPTS --}}
    @stack('scripts')
    <script>
        const csrf_token = '{{ csrf_token() }}';
    </script>
</head>
<body>
    <div id="nav"></div>
    @yield('content')

    {{-- SCRIPTS --}}
    <script src="{{ mix('js/app.js') }} "></script>
</body>
</html>
