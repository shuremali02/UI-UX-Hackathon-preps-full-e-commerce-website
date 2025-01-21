"use client";
import React from 'react'
import { Button } from '../ui/button';
import Card2 from '../Card2/Card2';
import { FaEye } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa6";
import { wishListprops } from '../WishListCards/ProductCard';

export default function FlashSale() {
    const Flashlist: wishListprops[] = [
        {
            image: "images/product1.svg",
            title: "The north coat",
            price: 250,
            rating: 65,
            saleBadge:"40%",
            heartIcon: < FaRegHeart />,
            eyeIcon: <FaEye />,
            priceStrikeThrough: 380,
            color: "red",
            padding: "px-4 py-1",
            onAddToCart: () => console.log("Added Casual T-Shirt to cart"),
            onDelete: () => console.log("Deleted Casual T-Shirt from wishlist"),
        },
        {
            image: "images/product2.svg",
            title: "Gucci duffle bag",
            price: 960,
            rating: 65,
            saleBadge:"35%",
            priceStrikeThrough: 1160,
            heartIcon: < FaRegHeart />,
            eyeIcon: <FaEye />,
            color: "red",
            padding: "px-4 py-1",
            onAddToCart: () => console.log("Added Leather Wallet to cart"),
            onDelete: () => console.log("Deleted Leather Wallet from wishlist"),
        },
        {
            image: "images/product3.svg",
            title: "RGB liquid CPU Cooler",
            price: 160,
            rating: 65,
            saleBadge:"30%",
            priceStrikeThrough: 170,
            heartIcon: < FaRegHeart />,
            eyeIcon: <FaEye />,
            color:"red",
            padding: "px-4 py-1",
            onAddToCart: () => console.log("Added Sports Sunglasses to cart"),
            onDelete: () => console.log("Deleted Sports Sunglasses from wishlist"),
        },
        {
            image: "images/product4.svg",
            title: "Small BookSelf",
            price: 360,
            rating: 65,
            saleBadge:"25%",
            heartIcon: < FaRegHeart />,
            eyeIcon: <FaEye />,
            color: "red",
            padding: "px-4 py-1",
            onAddToCart: () => console.log("Added Wireless Earbuds to cart"),
            onDelete: () => console.log("Deleted Wireless Earbuds from wishlist"),
        },
        {
            image: "images/product4.svg",
            title: "Small BookSelf",
            price: 360,
            rating: 65,
            saleBadge:"25%",
            heartIcon: < FaRegHeart />,
            eyeIcon: <FaEye />,
            color: "red",
            padding: "px-4 py-1",
            onAddToCart: () => console.log("Added Wireless Earbuds to cart"),
            onDelete: () => console.log("Deleted Wireless Earbuds from wishlist"),
        },
    ];
    return (
        <div>
            <div className="flex justify-between items-center p-7 py-4">
                <div className="flex flex-col gap-5 py-4 ">
                    <div className="flex items-center gap-2">
                        <div className="bg-Button2 w-4 h-10 border border-Button2"></div>{" "}
                        <h1 className="font-sm text-Secondary2">Todays</h1>
                    </div>

                    <div>
                        <h1 className="font-semibold text-[36px]">Flash Sales</h1>
                    </div>
                    <div></div>
                </div>
                
            </div>
            <div className='grid grid-cols-5 gap-6 mb-9'>
                {Flashlist.map((list, index) => (
                    <Card2 key={index} {...list} />
                ))}
            </div>
        </div>
    )
}
