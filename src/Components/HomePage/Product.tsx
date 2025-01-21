"use client";
import React from 'react'
import { Button } from '../ui/button';
import Card2 from '../Card2/Card2';
import { FaEye } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa6";
import { wishListprops } from '../WishListCards/ProductCard';

export default function Product() {
    const wishList: wishListprops[] = [
        {
            image: "images/Product-1.svg",
            title: "The north coat",
            price: 250,
            rating: 65,
          
            heartIcon: < FaRegHeart />,
            eyeIcon: <FaEye />,
            priceStrikeThrough: 380,
            color: "red",
            padding: "px-4 py-1",
            onAddToCart: () => console.log("Added Casual T-Shirt to cart"),
            onDelete: () => console.log("Deleted Casual T-Shirt from wishlist"),
        },
        {
            image: "images/Product-2.svg",
            title: "Gucci duffle bag",
            price: 960,
            rating: 65,
            priceStrikeThrough: 1160,
            heartIcon: < FaRegHeart />,
            eyeIcon: <FaEye />,
            color: "blue",
            padding: "px-4 py-1",
            onAddToCart: () => console.log("Added Leather Wallet to cart"),
            onDelete: () => console.log("Deleted Leather Wallet from wishlist"),
        },
        {
            image: "images/Product-3.svg",
            title: "RGB liquid CPU Cooler",
            price: 160,
            rating: 65,
        
            priceStrikeThrough: 170,
            heartIcon: < FaRegHeart />,
            eyeIcon: <FaEye />,
            padding: "px-4 py-1",
            onAddToCart: () => console.log("Added Sports Sunglasses to cart"),
            onDelete: () => console.log("Deleted Sports Sunglasses from wishlist"),
        },
        {
            image: "images/Product-4.svg",
            title: "Small BookSelf",
            price: 360,
            rating: 65,
            heartIcon: < FaRegHeart />,
            eyeIcon: <FaEye />,
            color: "green",
            padding: "px-4 py-1",
            onAddToCart: () => console.log("Added Wireless Earbuds to cart"),
            onDelete: () => console.log("Deleted Wireless Earbuds from wishlist"),
        },
        {
            image: "images/Product-5.svg",
            title: "Small BookSelf",
            price: 360,
            rating: 65,
            heartIcon: < FaRegHeart />,
            eyeIcon: <FaEye />,
            color: "green",
            padding: "px-4 py-1",
            onAddToCart: () => console.log("Added Wireless Earbuds to cart"),
            onDelete: () => console.log("Deleted Wireless Earbuds from wishlist"),
        },
        {
            image: "images/Product-6.svg",
            title: "Small BookSelf",
            price: 360,
            rating: 65,
            heartIcon: < FaRegHeart />,
            eyeIcon: <FaEye />,
            color: "green",
            padding: "px-4 py-1",
            onAddToCart: () => console.log("Added Wireless Earbuds to cart"),
            onDelete: () => console.log("Deleted Wireless Earbuds from wishlist"),
        },
        {
            image: "images/Product-7.svg",
            title: "Small BookSelf",
            price: 360,
            rating: 65,
            heartIcon: < FaRegHeart />,
            eyeIcon: <FaEye />,
            color: "green",
            padding: "px-4 py-1",
            onAddToCart: () => console.log("Added Wireless Earbuds to cart"),
            onDelete: () => console.log("Deleted Wireless Earbuds from wishlist"),
        },
        {
            image: "images/Product-8.svg",
            title: "Small BookSelf",
            price: 360,
            rating: 65,
            heartIcon: < FaRegHeart />,
            eyeIcon: <FaEye />,
            color: "green",
            padding: "px-4 py-1",
            onAddToCart: () => console.log("Added Wireless Earbuds to cart"),
            onDelete: () => console.log("Deleted Wireless Earbuds from wishlist"),
        },
    ];
    return (
        <div>
            <div className="flex justify-between items-center p-7">
                <div className="flex flex-col gap-5 py-4 ">
                    <div className="flex items-center gap-2">
                        <div className="bg-Button2 w-4 h-10 border border-Button2"></div>{" "}
                        <h1 className="font-sm text-Secondary2"> Our Products </h1>
                    </div>

                    <div>
                        <h1 className="font-semibold text-[36px]">Explore Our Products</h1>
                    </div>
                </div>
                <Button
                    className=" py-6 px-11 rounded-none bg-Secondary2 text-Button"
                    variant={"outline"}
                >
                    View All
                </Button>
            </div>
            <div className='grid grid-cols-4 gap-6 mb-9'>
                {wishList.map((list, index) => (
                    <Card2 key={index} {...list} />
                ))}
            </div>
        </div>
    )
}
