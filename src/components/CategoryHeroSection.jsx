import React from 'react';

const CategoryHeroSection = ({ categoryId }) => {
    const categoriesData = {
        Granos: {
            title: 'Café en Granos',
            description: 'Descubre nuestra selección premium de cafés en granos de origen único. Cada grano cuenta una historia de calidad y tradición.',
            bgColor: '#8B4513'
        },
        Molido: {
            title: 'Café Molido',
            description: 'Café molido fresco y listo para preparar. Mantén el aroma y sabor en cada taza con nuestros blends exclusivos.',
            bgColor: '#A0522D'
        },
        Capsula: {
            title: 'Café en Cápsulas',
            description: 'Comodidad y calidad en cada cápsula. Compatibles con máquinas de espresso, perfectas para tu ritual diario.',
            bgColor: '#6B4423'
        }
    };

    const category = categoriesData[categoryId] || null;

    if (!category) return null;

    return (
        <div style={{
            backgroundColor: category.bgColor,
            color: 'white',
            padding: '48px 24px',
            textAlign: 'center',
            marginBottom: '40px'
        }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>{category.title}</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '1400px', margin: '0 auto' }}>
                {category.description}
            </p>
        </div>
    );
};

export default CategoryHeroSection;
