import React from 'react'
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Link from 'next/link';
import Button from '@/components/Button';
import { Star } from 'lucide-react';

interface cardProps {
    name: string;
    description: string;
    links: {
        href: string,
        label: string,
    }[];
    skillsArray: Array<String>,
}
export default function Card({ name, description, links, skillsArray }: cardProps) {
    return (
        <div className='border border-gray-300 shadow-md rounded-lg p-4 bg-linear-to-r from-neutral-100 to-yellow-100  hover:shadow-lg transition-shadow my-4 duration-300 cursor-pointer'>
            <div className='flex items-center justify-between'>
                <h2 className='text-xl font-semibold mb-2'>{name}</h2>
                <div>
                    {
                        links.map((link, index) => (
                            <Link key={index} href={link.href} target="_blank" rel="noopener noreferrer" className='bg-yellow-300 px-3 py-1 rounded-md text-sm font-semibold cursor-pointer flex gap-x-1 hover:bg-yellow-400 transition-colors'>
                                <Star color='black' />
                                Star
                            </Link>
                        ))
                    }
                </div>
            </div>
            <p className='text-gray-600 mb-4'>{description}</p>
            <div className='flex flex-wrap gap-2 mb-4'>
                {skillsArray.map((skill, index) => (
                    <Button key={index} >{skill}</Button>
                ))}
            </div>

        </div>
    )
}
