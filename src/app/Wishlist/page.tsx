"use client";
import React from 'react';
import WishCards, { wishListprops } from '@/Components/WishListCards/ProductCard';
import { Button } from '@/Components/ui/button';
import { IoIosHeartEmpty } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import Card2 from '@/Components/Card2/Card2';


export default function WhishListPage() {
    const product :wishListprops[]=[
      {
        image: "/images/wishlist1.svg",
        title: "Gucci duffle bag",
        price: 960,
        saleBadge: "-35%",
        priceStrikeThrough: 1160,
        color:"red",
        padding: "px-4 py-1",
        onAddToCart: () => console.log("Added Stylish Watch to cart"),
        onDelete: () => console.log("Deleted Stylish Watch from wishlist"),
      },
      {
        image: "/images/wishlist2.svg",
        title: "RGB liquid CPU Cooler",
        price: 1960,
    
        onAddToCart: () => console.log("Added Comfortable Shoes to cart"),
        onDelete: () => console.log("Deleted Comfortable Shoes from wishlist"),
      },
      {
        image: "/images/wishlist3.svg",
        title: "Trendy Backpack",
        price: 49.99,
        
        onAddToCart: () => console.log("Added Trendy Backpack to cart"),
        onDelete: () => console.log("Deleted Trendy Backpack from wishlist"),
      },
      {
        image: "images/wishlist4.svg",
        title: "Bluetooth Headphones",
        price: 149.99,
        onAddToCart: () => console.log("Added Bluetooth Headphones to cart"),
        onDelete: () => console.log("Deleted Bluetooth Headphones from wishlist"),
      },
]
const wishList: wishListprops[] = [
  {
    image: "images/wishlist5.svg",
    title: "Casual T-Shirt",
    price: 960,
    rating: 65,
    saleBadge: "30%",
    eyeIcon:<FaEye/>,
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
    rating:65,
    eyeIcon: <FaEye/>,
    color: "blue",
    padding:"px-4 py-1",
    onAddToCart: () => console.log("Added Leather Wallet to cart"),
    onDelete: () => console.log("Deleted Leather Wallet from wishlist"),
  },
  {
    image:"images/wishlist7.svg",
    title: "Sports Sunglasses",
    price: 560,
    rating: 65,
    saleBadge: "Hot",
    eyeIcon:<FaEye/>,
    padding:"px-4 py-1",
    onAddToCart: () => console.log("Added Sports Sunglasses to cart"),
    onDelete: () => console.log("Deleted Sports Sunglasses from wishlist"),
  },
  {
    image:"images/wishlist8.svg",
    title: "Wireless Earbuds",
    price: 200,
    rating: 65,
    eyeIcon: <FaEye/>,
    color: "green",
    padding: "px-4 py-1",
    onAddToCart: () => console.log("Added Wireless Earbuds to cart"),
    onDelete: () => console.log("Deleted Wireless Earbuds from wishlist"),
  },
];
  return (
    <div className='w-full  min-h-sreen p-7 md:px-12'>
      <div className='flex justify-between items-center py-8'>
      <h1 className='font-medium text-xl'>Wishlist (4)</h1>
        <Button className='p-6 px-9 rounded-none bg-transparent text-Button '
        >Move All To  Bag</Button>

      </div>
      <div className='grid grid-cols sm:grid-cols-2 md:grid-cols-4 gap-6 mb-9'>
      {product.map((whishlist,index) => (
        <WishCards key={index} {...whishlist}/>
      ))}
      </div>
      <div className='flex justify-between items-center py-12'>
      <div className='flex items-center gap-5 '>
       <div className='h-10 w-5 bg-Button2 border border-Secondary2 '></div>
        <h1 className='font-medium text-xl '>Just For You</h1>
        </div>
      
        <Button className='p-6 px-9 rounded-none bg-transparent text-Button '
      >See All</Button>

      </div>
      <div className='grid grid-cols sm:grid-cols-2 md:grid-cols-4 gap-6 mb-9'>
      {wishList.map((list,index) => (
        <Card2 key={index} {...list}/>
      ))}
      </div>

    </div>
  );
}
