@extends('layouts.main')
@section('title','Home')
@section('content')
@if($errors->any())
<div class="alert alert-danger">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    {{$errors->first()}}
</div>
@endif
@if(session()->get('success'))
<div class="alert alert-success alert-dismissible">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
    {{session()->get('success')}}
</div>
@endif
@if(session()->get('error'))
<div class="alert alert-danger alert-dismissible">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
    {{session()->get('error')}}
 </div>
@endif
<div id="formRequests">
</div>

@push('scripts')
    <script>
        const animals = @json($animals);
        const exams = @json($exams);
    </script>
@endpush
@endsection
