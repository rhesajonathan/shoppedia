import React, {useEffect} from 'react';
import Image from 'next/image';

interface ProductCardProps {
    title: string,
    price: number,
    image: string,
    rating: number
}
const ProductCard = ({title, price, image, rating}: ProductCardProps) => {
    

    return (
        <div className="flex flex-col rounded-xl mt-4 w-80 overflow-hidden relative border-slate-300 border-2">
            <Image 
                src={image}
                layout="responsive" 
                width={100}
                height={100}
                alt="Your Name"
            />
            <div className='m-4'>
                <div className='text-md'>{title}</div>
                <div  className='text-lg font-bold'>{price}</div>
                <div  className='text-md'>{rating}</div>
            </div>
        </div>
    );
};

export default ProductCard;