"use client";

import React, { useState } from 'react';

const AllBook = () => {
    // Dummy Data for Categories
    const categories = ["All", "Fiction", "Science", "History", "Business", "Self-Help"];

    // Dummy Data for Books
    const books = [
        { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", price: "$15" },
        { id: 2, title: "A Brief History of Time", author: "Stephen Hawking", category: "Science", price: "$20" },
        { id: 3, title: "Sapiens", author: "Yuval Noah Harari", category: "History", price: "$25" },
        { id: 4, title: "Atomic Habits", author: "James Clear", category: "Self-Help", price: "$18" },
        { id: 5, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", category: "Business", price: "$22" },
        { id: 6, title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fiction", price: "$12" },
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>

            {/* Left Side: Category Filter */}
            <aside style={{
                width: '250px',
                padding: '20px',
                borderRight: '1px solid #ddd',
                backgroundColor: '#f9f9f9',
                position: 'sticky',
                top: 0,
                height: '100vh'
            }}>
                <h3>Categories</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {categories.map((cat, index) => (
                        <li key={index} style={{ margin: '15px 0' }}>
                            <button style={{
                                width: '100%',
                                textAlign: 'left',
                                padding: '10px',
                                cursor: 'pointer',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                background: 'white',
                                transition: '0.3s'
                            }}
                                onMouseOver={(e) => e.target.style.background = '#e0e0e0'}
                                onMouseOut={(e) => e.target.style.background = 'white'}
                            >
                                {cat}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Right Side: Books Content */}
            <main style={{ flex: 1, padding: '30px' }}>
                <h1 style={{ marginBottom: '20px' }}>All Books</h1>
                <p>Welcome to the All Books section!</p>

                {/* Book Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '20px',
                    marginTop: '30px'
                }}>
                    {books.map((book) => (
                        <div key={book.id} style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '15px',
                            textAlign: 'center',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                        }}>
                            <div style={{ height: '150px', background: '#eee', marginBottom: '10px', borderRadius: '5px' }}>
                                {/* Image Placeholder */}
                                <span style={{ lineHeight: '150px', color: '#888' }}>Book Cover</span>
                            </div>
                            <h4 style={{ margin: '10px 0 5px' }}>{book.title}</h4>
                            <p style={{ fontSize: '14px', color: '#555' }}>{book.author}</p>
                            <p style={{ fontWeight: 'bold', color: '#007bff' }}>{book.price}</p>
                            <button style={{
                                backgroundColor: '#28a745',
                                color: 'white',
                                border: 'none',
                                padding: '8px 15px',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default AllBook;