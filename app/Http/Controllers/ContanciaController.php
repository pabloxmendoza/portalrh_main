<?php

namespace App\Http\Controllers;

use App\Models\Contancia;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContanciaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('contancia/index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Contancia $contancia)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contancia $contancia)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contancia $contancia)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contancia $contancia)
    {
        //
    }
}
