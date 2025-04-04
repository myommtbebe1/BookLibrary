import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import bookImg from '../assets/book.png';
import useTheme from '../hooks/useTheme';

export default function BookDetail() {
    let { id } = useParams();
    let { data: book, loading, error } = useFetch(`http://localhost:3000/books/${id}`)

    let { isDark } = useTheme()

    return (
        <>
            {error && <p>{error}</p>}
            {loading && <p>loading ....</p>}
            {book && (
                <div className={`grid grid-cols-2 h-screen ${isDark ? 'text-white' : ''}`}>
                    <div>
                        <img src={bookImg} alt="" className='w-[50%]' />
                    </div>
                    <div className='space-y-4'>
                        <h1 className='text-3xl font-bold'>{book.title}</h1>
                        <div className='space-x-3'>
                            {book.categories.map(cateogry => (
                                <span className='bg-blue-500 text-white rounded-full text-sm px-2 py-1' key={cateogry}>{cateogry}</span>
                            ))}
                        </div>
                        <p>
                            {book.description}
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}
