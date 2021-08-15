@extends('layouts.main')
@section('title','Home')
@section('content')
@php
    use App\Models\Exam;
    $examNames = []
@endphp

    <div id="requests">
                @foreach ($requests as $request )
                    <tr>
                        <th scope="row">{{$request->id}}</th>
                        <td> {{$request->label}} </td>
                        <td> {{$request->animal->name}} </td>
                        <td>
                        @foreach(json_decode($request->exams) as $exam)
                            <?php $examName =  Exam::where('id',$exam)->get();
                            ?>
                            {{$examName[0]->label}}
                        @endforeach
                        </td>
                    </tr>
                @endforeach

    </div>

    @push('scripts')
        <script>
            const requests = @json($requests);
            const exams = @json($examNames);
        </script>
    @endpush
@endsection
