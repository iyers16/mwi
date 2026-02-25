import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, ShoppingCart, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';

const productsData = [
    { id: 1, name: "Star Seasoning", brand: "Maggi", size: "100 Cubes", price: 5.99, category: "Pantry" },
    { id: 2, name: "Vegetable Oil", brand: "Cedar", size: "2.84 L", price: 7.99, category: "Pantry" },
    { id: 3, name: "Milo Chocolate Malt", brand: "Nestlé", size: "1.5 KG", price: 19.99, category: "Beverages" },
    { id: 4, name: "Chicken Drumsticks", brand: "Fresh Meat", size: "5 KG", price: 21.99, category: "Halal Meat" },
    { id: 5, name: "Peanut Butter", brand: "Bonfamé", size: "500 G", price: 6.99, category: "Pantry" },
    { id: 6, name: "Lamb Meat", brand: "House", size: "7 LBS", price: 44.99, category: "Halal Meat" },
    { id: 7, name: "Sparkling Fruit Drink", brand: "Vimto", size: "24 x 330 ML", price: 24.99, category: "Beverages" },
    { id: 8, name: "Black Soap", brand: "Dudu-Osun", size: "150 G", price: 2.99, category: "Personal Care" }
];

const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const handleAdd = () => {
        addToCart(product, quantity);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flyer-card"
            style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--primary)', fontSize: '0.7rem', fontWeight: 800, padding: '4px 12px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {product.brand}
                </span>
                <span style={{ color: '#555', fontSize: '0.8rem' }}>{product.category}</span>
            </div>

            <h3 className="font-heading" style={{ fontSize: '1.4rem', marginBottom: '8px', minHeight: '3.4rem' }}>{product.name}</h3>
            <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '16px' }}>{product.size}</p>

            <div style={{ marginTop: 'auto' }}>
                <p style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '20px', color: 'white' }}>
                    ${product.price.toFixed(2)}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.03)', padding: '6px', borderRadius: '4px', marginBottom: '16px' }}>
                    <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '10px' }}
                    >
                        <Minus size={18} />
                    </button>
                    <span className="font-heading" style={{ fontSize: '1.2rem' }}>{quantity}</span>
                    <button
                        onClick={() => setQuantity(quantity + 1)}
                        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '10px' }}
                    >
                        <Plus size={18} />
                    </button>
                </div>

                <button
                    className="btn"
                    onClick={handleAdd}
                    style={{
                        width: '100%',
                        background: isAdded ? 'white' : 'var(--primary)',
                        color: isAdded ? 'black' : 'white',
                        borderColor: isAdded ? 'white' : 'var(--primary)'
                    }}
                >
                    {isAdded ? 'ADDED!' : 'ADD TO CART'}
                </button>
            </div>
        </motion.div>
    );
};

const Shop = () => {
    return (
        <div className="page-offset">
            <section className="section" style={{ paddingBottom: '40px' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '30px' }}>
                        <div style={{ borderLeft: '6px solid var(--primary)', paddingLeft: '30px' }}>
                            <span className="font-heading" style={{ color: '#666', letterSpacing: '0.2em' }}>E-GROCERY</span>
                            <h1 className="font-heading" style={{ fontSize: '4rem', marginTop: '10px' }}>FRESH PANTRY</h1>
                        </div>

                        <div style={{ background: 'rgba(224, 43, 32, 0.1)', border: '1px solid var(--primary)', padding: '20px 40px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <Clock className="text-primary" size={24} />
                            <div>
                                <p style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary)' }}>Pickup Estimate</p>
                                <p style={{ fontSize: '1.2rem', fontWeight: 700 }}>Ready in 30 - 45 mins</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                        {productsData.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Shop;
