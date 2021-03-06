<?php

namespace App\Http\Controllers;

use App\Models\Request as RequestModel;
use Illuminate\Http\Request;
use App\Models\Exam;
use App\Models\Animal;
use App\Http\Requests\CreateRequestRequest;
use JavaScript;
class RequestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $requests = RequestModel::orderBy('created_at','DESC')->get();
        $fullRequests = [];
        foreach ($requests as $request) {
            $requestData['id'] = $request->id;
            $requestData['label'] = $request->label;
            $requestData['animalId'] = $request->animal->id;
            $requestData['animalName'] = $request->animal->name;
            $requestData['animalSpecie'] = $request->animal->specie;
            $requestData['animalBreed'] = $request->animal->breed;
            $examData = [];
            foreach (json_decode($request->exams) as $exam) {
                $examsData = Exam::where('id',$exam)->get('label');
                $examData[] = $examsData[0]->label;
            }
            $requestData['exams'] = $examData;
            array_push($fullRequests,$requestData);
        }
        return view('requests.index',compact('fullRequests'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $animals = Animal::all();
        $exams = Exam::all();
        return view('requests.create',compact('animals','exams'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateRequestRequest $request)
    {
        //
        $data = $request->validated();
        $data['animal_id'] = $data['animal'];
        $data['exams'] = json_encode($data['exams']);
        $CRequest = RequestModel::create($data);
        if($CRequest){
            return redirect()->route('request.create')->with(['success' => 'Solicita????o cadastrada com sucesso!']);
        }else{
            return redirect()->route('request.create')->with(['error' => 'N??o foi poss??vel cadastrar a solicita????o!']);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function show(RequestModel $requestModel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function edit(RequestModel $requestModel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RequestModel $requestModel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(RequestModel $requestModel)
    {
        //
    }
}
