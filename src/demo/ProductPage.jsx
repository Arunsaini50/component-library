import React from 'react';
import Card from '../Components/Card';
import Button from '../Components/Button';
import Badge from '../Components/Badge';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Noise cancelling over-ear wireless headphones.',
    price: '₹2,499',
    status: 'In Stock',
    statusColor: 'green',
  },
  {
    id: 2,
    name: 'Gaming Mouse',
    description: 'High precision RGB mouse for gamers.',
    price: '₹1,199',
    status: 'Out of Stock',
    statusColor: 'red',
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    description: 'Blue switch mechanical keyboard with RGB lights.',
    price: '₹3,499',
    status: 'Limited',
    statusColor: 'yellow',
  },
];

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} title={product.name}>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-semibold mb-2">{product.price}</p>
            <div className="flex items-center justify-between">
              <Badge text={product.status} color={product.statusColor} />
              <Button variant="primary">Buy Now</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
