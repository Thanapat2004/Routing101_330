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
            'image' => 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034',
        ],
        [
            'id' => 2,
            'name' => 'Smartphone',
            'description' => 'Latest smartphone with great features and long-lasting battery.',
            'price' => 800,
            'image' => 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=eUdsd0dIb3VUOXdtWkY0VFUwVE8vbEdkZHNlSjBQRklnaFB2d3I5MW94NG9jSVc5R3RiNGUzS3grdnZwVlUzTUpxbExkakZwOW1FVDBpNHlyYVFtRmdLV2FqbzNtY1BxSW9iSE1sc2hZc1YxTkU5SlRjdjdvTkhTWCtMODkzRitFalBpK0hwWWdScERYNkJZQ2JRcUJ3&traceId=1',
        ],
        [
            'id' => 3,
            'name' => 'Tablet',
            'description' => 'Portable tablet for everyday use, perfect for work and play.',
            'price' => 500,
            'image' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIk6XyFM7pVETWbNBMFyLbSxmkiTwcJy1cRQ&s',
        ],
        [
            'id' => 4,
            'name' => 'Wireless Headphones',
            'description' => 'Noise-cancelling wireless headphones with great sound quality.',
            'price' => 150,
            'image' => 'https://www.istudio.store/cdn/shop/files/airpods-max-silver-001.jpg?v=1707290819&width=823',
        ],
        [
            'id' => 5,
            'name' => 'Smartwatch',
            'description' => 'Stylish smartwatch with fitness tracking and notifications.',
            'price' => 250,
            'image' => 'https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_lp_09142021.jpg.og.jpg?202410300031',
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
            'image' => 'https://images.philips.com/is/image/philipsconsumer/a10ea7f6c75a4cf4b7caafaf00cba3dd?$pnglarge$&wid=960',
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
            'products' => $this->products,  // ส่งข้อมูลสินค้าไปยัง  component  products  ในรูปแบบ Array
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = collect($this->products)->firstWhere('id', (int) $id); //ค้นหา id ตรงกับ $id

        if (!$product) {
            abort(404, 'Product not found');
        }

        return Inertia::render('Products/Show', [
            'product' => $product,
        ]);
    }
}
