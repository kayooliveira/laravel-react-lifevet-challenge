@extends('layouts.main')
@section('title','Home')
@section('content')

    <div id="requests">
    </div>
    @push('scripts')
        <script>
                const requests = @json($fullRequests);
        </script>
    @endpush
@endsection
