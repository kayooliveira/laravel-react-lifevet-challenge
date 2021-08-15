@extends('layouts.main')
@section('title','Home')
@section('content')
<div id="formRequest">
</div>
@push('scripts')
@if ($errors->any())
<div class="alert alert-danger">
    <ul>
        @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
        @endforeach
    </ul>
</div>
@endif
<script type="text/javascript">
    const animals = @json($animals);
    const exams = @json($exams);
    var csrf_token = '{{ csrf_token() }}';
</script>
@endpush
@endsection
