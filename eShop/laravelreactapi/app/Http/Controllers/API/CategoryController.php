<?php

namespace App\Http\Controllers\API;


use App\Models\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{

    public function index() {
        $category = Category::all();
        return response()->json([
            'status'=>200,
            'category'=>$category, // in react app, in setCategoryList is passed 'category'
        ]);
    }


    public function edit($id) {
        $category = Category::find($id);
        if($category) {
            return response()->json([
                'status'=>200,
                'category'=>$category,
            ]);
        }
        else {
            return response()->json([
                'status'=>404,
                'message'=>'Category not found',
            ]);
        }
    }

    public function store(Request $request) {

        $validator = Validator::make($request->all(), [
            'name'=>'required|max:191',
        ]);

        if($validator->fails()) {
            return response()->json([
                'status'=>400,
                'errors'=>$validator->messages(),
            ]);
        }
        else {
            $category = new Category;

            $category->name = $request->input('name');
            $category->description = $request->input('description');
            $category->save();
            return response()->json([
                'status'=>200,
                'message'=>'Category Addd Successfully',
            ]);
        }


    }

    public function update(Request $request, $id) 
    {
        $validator = Validator::make($request->all(), [
            'name'=>'required|max:191',
        ]);

        if($validator->fails()) {
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }
        else {
            $category = Category::find($id);
            if($category) 
            {
            $category->name = $request->input('name');
            $category->description = $request->input('description');
            $category->save();
            return response()->json([
                'status'=>200,
                'message'=>'Category Updated Successfully',
            ]);
            }
            else {
                return response()->json([
                    'status'=>404,
                    'message'=>'No Category Id Found',
                ]);
            }
            
        }

    }

    public function destroy($id) {
        $category = Category::find($id);

        if($category) {
            $category->delete(); // Delete data from database
            return response()->json([
                'status'=>200,
                'message'=>'Category Deleted Successfully',
            ]);
        }
        else {
            return response()->json([
                'status'=>404,
                'message'=>'No Category Id Found',
            ]);
        }
    }
}
