"use client";
import React from 'react'
import { Button } from '../ui/button';
import Card2 from '../Card2/Card2';
import { FaEye } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa6";
import { wishListprops } from '../WishListCards/ProductCard';

export default function OurProducts() {
    const wishList: wishListprops[] = [
        {
            image: "images/wishlist5.svg",
            title: "Casual T-Shirt",
            price: 960,
            rating: 65,
            saleBadge: "30%",
            heartIcon: < FaRegHeart />,
            eyeIcon: <FaEye />,
            priceStrikeThrough: 1160,
            color: "red",
            padding: "px-4 py-1",
            onAddToCart: () => console.log("Added Casual T-Shirt to cart"),
            onDelete: () => console.log("Deleted Casual T-Shirt from wishlist"),
        },
        {
            image: "images/wishlist6.svg",
            title: "Leather Wallet",
            price: 1160,
            rating: 65,
            heartIcon: < FaRegHeart />,
            eyeIcon: <FaEye />,
            color: "blue",
            padding: "px-4 py-1",
            onAddToCart: () => console.log("Added Leather Wallet to cart"),
            onDelete: () => console.log("Deleted Leather Wallet from wishlist"),
        },
        {
            image: "images/wishlist7.svg",
            title: "Sports Sunglasses",
            price: 560,
            rating: 65,
            saleBadge: "Hot",
            heartIcon: < FaRegHeart />,
            eyeIcon: <FaEye />,
            padding: "px-4 py-1",
            onAddToCart: () => console.log("Added Sports Sunglasses to cart"),
            onDelete: () => console.log("Deleted Sports Sunglasses from wishlist"),
        },
        {
            image: "images/wishlist8.svg",
            title: "Wireless Earbuds",
            price: 200,
            rating: 65,
            heartIcon: < FaRegHeart />,
            eyeIcon: <FaEye />,
            color: "green",
            padding: "px-4 py-1",
            onAddToCart: () => console.log("Added Wireless Earbuds to cart"),
            onDelete: () => console.log("Deleted Wireless Earbuds from wishlist"),
        },
        {
            image: "images/wishlist8.svg",
            title: "Wireless Earbuds",
            price: 200,
            rating: 65,
            heartIcon: < FaRegHeart />,
            eyeIcon: <FaEye />,
            color: "green",
            padding: "px-4 py-1",
            onAddToCart: () => console.log("Added Wireless Earbuds to cart"),
            onDelete: () => console.log("Deleted Wireless Earbuds from wishlist"),
        },
        {
            image: "images/wishlist8.svg",
            title: "Wireless Earbuds",
            price: 200,
            rating: 65,
            heartIcon: < FaRegHeart />,
            eyeIcon: <FaEye />,
            color: "green",
            padding: "px-4 py-1",
            onAddToCart: () => console.log("Added Wireless Earbuds to cart"),
            onDelete: () => console.log("Deleted Wireless Earbuds from wishlist"),
        },
        {
            image: "images/wishlist5.svg",
            title: "Casual T-Shirt",
            price: 960,
            rating: 65,
            saleBadge: "30%",
            heartIcon: < FaRegHeart />,
            eyeIcon: <FaEye />,
            priceStrikeThrough: 1160,
            color: "red",
            padding: "px-4 py-1",
            onAddToCart: () => console.log("Added Casual T-Shirt to cart"),
            onDelete: () => console.log("Deleted Casual T-Shirt from wishlist"),
        },
        {
            image: "images/wishlist5.svg",
            title: "Casual T-Shirt",
            price: 960,
            rating: 65,
            saleBadge: "30%",
            heartIcon: < FaRegHeart />,
            eyeIcon: <FaEye />,
            priceStrikeThrough: 1160,
            color: "red",
            padding: "px-4 py-1",
            onAddToCart: () => console.log("Added Casual T-Shirt to cart"),
            onDelete: () => console.log("Deleted Casual T-Shirt from wishlist"),
        },
    ];
    return (
        <div>
            <div className="flex justify-between items-center p-7">
                <div className="flex flex-col gap-5 py-4 ">
                    <div className="flex items-center gap-2">
                        <div className="bg-Button2 w-4 h-10 border border-Button2"></div>{" "}
                        <h1 className="font-sm text-Secondary2">This Month</h1>
                    </div>

                    <div>
                        <h1 className="font-semibold text-[36px]">Best Selling Products</h1>
                    </div>
                </div>
                
            </div>
            <div className='grid grid-cols-4 gap-8 mb-9'>
                {wishList.map((list, index) => (
                    <Card2 key={index} {...list} />
                ))}
            </div>
            <div className='flex justify-center py-6'>
            <Button
                    className=" py-6 px-11 rounded-none bg-Secondary2 text-Button"
                    variant={"outline"}
                >
                    View All Products
                </Button>
                </div>
        </div>
    )
}
