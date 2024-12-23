<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    private $products = [
        [
            'id' => 1,
            'name' => 'Laptop',
            'description' => 'High-performance laptop with a powerful processor and sleek design.',
            'price' => 1500,
            'image' => 'https://helios-i.mashable.com/imagery/articles/05djrP5PjtVB7CcMtvrTOAP/images-1.fill.size_2000x1125.v1723100793.jpg',
        ],
        [
            'id' => 2,
            'name' => 'Smartphone',
            'description' => 'Latest smartphone with great features and long-lasting battery.',
            'price' => 800,
            'image' => 'https://img.freepik.com/free-vector/realistic-front-view-smartphone-mockup-mobile-iphone-purple-frame-with-blank-white-display-vector_90220-959.jpg',
        ],
        [
            'id' => 3,
            'name' => 'Tablet',
            'description' => 'Portable tablet for everyday use, perfect for work and play.',
            'price' => 500,
            'image' => 'https://imagenes.elpais.com/resizer/v2/3XVOVO7OWJE3XADYWXIBWNCXW4.jpg?auth=c89ed0d5ee739f44789ab2380c13ffc964a6050272c800a6bcb93ba9496894a8&width=414',
        ],
        [
            'id' => 4,
            'name' => 'Wireless Headphones',
            'description' => 'Noise-cancelling wireless headphones with great sound quality.',
            'price' => 150,
            'image' => 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097',
        ],
        [
            'id' => 5,
            'name' => 'Smartwatch',
            'description' => 'Stylish smartwatch with fitness tracking and notifications.',
            'price' => 250,
            'image' => 'https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/05/Product/soundpeats-watch-4-smart-watch-black-front-left-view.jpg',
        ],
        [
            'id' => 6,
            'name' => 'Bluetooth Speaker',
            'description' => 'Compact Bluetooth speaker with crisp sound and long battery life.',
            'price' => 75,
            'image' => 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MW463?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1716251412721',
        ],
        [
            'id' => 7,
            'name' => '4K Television',
            'description' => 'Ultra HD 4K television with a stunning picture quality.',
            'price' => 1200,
            'image' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRPkc0pkoCXF1UwrsDtwGKGqYTHfrRtZxrqw&s',
        ],
        [
            'id' => 8,
            'name' => 'Digital Camera',
            'description' => 'High-quality digital camera for professional photography.',
            'price' => 900,
            'image' => 'https://i1.adis.ws/i/canon/G5_X_Mark_II_BK_FRT_800x800_02-77e78b5a-a6e3-11e9-b966-b083fe875d50?w=800&h=800&fmt=jpg&fmt.options=interlaced&bg=rgb(237,237,237)',
        ],
        [
            'id' => 9,
            'name' => 'Gaming Console',
            'description' => 'Next-gen gaming console with great games and online play.',
            'price' => 500,
            'image' => 'https://m.media-amazon.com/images/I/71NaMlQ3WpL.jpg',
        ],
        [
            'id' => 10,
            'name' => 'Electric Scooter',
            'description' => 'Eco-friendly electric scooter with high speed and long battery life.',
            'price' => 350,
            'image' => 'https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2022/09/Product/ninebot-d38u-electric-scooter-cover-view.jpg',
        ]
    ];
    

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Products/Index', [
            'products' => $this->products,  // ส่งข้อมูลสินค้าไปยัง Vue component
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = collect($this->products)->firstWhere('id', (int) $id);

        if (!$product) {
            abort(404, 'Product not found');
        }

        return Inertia::render('Products/Show', [
            'product' => $product,
        ]);
    }
}
