<?php

namespace App\Http\Controllers\API;

use App\Models\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{

    public function index() {
        $products = Product::all();
        return response()->json([
            'status'=>200,
            'products'=>$products,
        ]);
    }
// functia index returneaza un raspuns in format json in care se afla toate produsele

// in functia store se face request la coloanele din baza de date
// daca requestul a fost facut cu succes atunci se creaza un nou produs si se salveaza in baza de date
    public function store(Request $request) {
        $validator = Validator::make(request()->all(), [
            'category_id'=>'required|max:191',
            'name'=>'required|max:191',
            'brand'=>'required|max:20',
            'selling_price'=>'required|max:20',
            'original_price'=>'required|max:20',
            'qty'=>'required|max:4',
            'image'=>'required|image|mimes:jpeg,png,jpg',
        ]);

        if ($validator->fails()){
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }
        else {
            $product = new Product;
            $product->category_id = $request->input('category_id');
            $product->name = $request->input('name');
            $product->description = $request->input('description');

            $product->brand = $request->input('brand');
            $product->selling_price = $request->input('selling_price');
            $product->original_price = $request->input('original_price');
            $product->qty = $request->input('qty');

            if($request->hasFile('image')) {
                $file = $request->file('image');
                $extension = $file->getClientOriginalExtension();
                $filename = time() .'.'.$extension;
                $file->move('uploads/product/',$filename);
                $product->image = 'uploads/product/'.$filename;
            }


            $product->save();

            return response()->json([
                'status'=>200,
                'message'=>'Product added successfully',
            ]); 
        }

        
    }

 // functia edit cauta un produs dupa id si returneaza un raspuns in format json cu produsul
    public function edit($id) {
        $product = Product::find($id);//find product by id
        if($product) {
            return response()->json([
                'status'=>200,
                'product'=>$product,
            ]);
        }
        else {
            return response()->json([
                'status'=>404,
                'message'=>'No Product Found',
            ]);
        }
    }

    // functia update cauta produsul dupa id si daca il gaseste ii updateaza inputurile
    public function update(Request $request, $id) {
        $validator = Validator::make(request()->all(), [
            'category_id'=>'required|max:191',
            'name'=>'required|max:191',
            'brand'=>'required|max:20',
            'selling_price'=>'required|max:20',
            'original_price'=>'required|max:20',
            'qty'=>'required|max:4',
            
        ]);

        if ($validator->fails()){
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }
        else {
            $product = Product::find($id);
            if($product) {

            $product->category_id = $request->input('category_id');
            $product->name = $request->input('name');
            $product->description = $request->input('description');

            $product->brand = $request->input('brand');
            $product->selling_price = $request->input('selling_price');
            $product->original_price = $request->input('original_price');
            $product->qty = $request->input('qty');

            if($request->hasFile('image')) {

                $path = $product->image;
                if(File::exists($path)) {
                    File::delete($path);
                }
                $file = $request->file('image');
                $extension = $file->getClientOriginalExtension();
                $filename = time() .'.'.$extension;
                $file->move('uploads/product/',$filename);
                $product->image = 'uploads/product/'.$filename;
            }


            $product->update();

            return response()->json([
                'status'=>200,
                'message'=>'Product updated successfully',
            ]); 
            }


            else {
                return response()->json([
                    'status'=>404,
                    'message'=>'Product Not Found',
                ]); 
            }   
        }

    }

    // functia destroy cauta un produs dupa id, iar daca produsul exista, acesta este sters

        public function destroy($id) {
            
        $product = Product::find($id);

        if($product) {
            $product->delete(); // Delete data from database
            return response()->json([
                'status'=>200,
                'message'=>'Product Deleted Successfully',
            ]);
        }
        else {
            return response()->json([
                'status'=>404,
                'message'=>'No Product Id Found',
            ]);
        }
    }

}
