<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('empleados', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->integer('claveemp');
            $table->string('nom');
            $table->string('app');
            $table->string('apm');
            $table->string('rfc');
            $table->string('curp');
            $table->string('callep');
            $table->string('calle1');
            $table->string('calle2');
            $table->foreignId('colonias_id')->constrained()->onDelete('cascade');
            $table->string('ur');
            $table->string('fecnac');
            $table->string('entnac');
            $table->string('plaza');
            $table->integer('cat_regimen_fiscals_id')->constrained()->onDelete('cascade');
            $table->integer('cp_fiscal');
            $table->integer('estado');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('empleados');
    }
};
