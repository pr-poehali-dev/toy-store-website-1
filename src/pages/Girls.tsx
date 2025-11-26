import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import Icon from '@/components/ui/icon';

const Girls = () => {
  const girlsProducts = [
    { id: 1, title: 'Кукла Baby Born', price: 3490, image: 'https://images.unsplash.com/photo-1560582861-45078880e48e?w=500' },
    { id: 2, title: 'Мягкая игрушка Единорог XXL', price: 2490, image: 'https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?w=500' },
    { id: 3, title: 'Набор для творчества', price: 1990, image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500' },
    { id: 4, title: 'Домик для кукол', price: 5990, image: 'https://images.unsplash.com/photo-1566454544949-91bedb490ad9?w=500' },
    { id: 5, title: 'Набор украшений', price: 1490, image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500' },
    { id: 6, title: 'Кукла LOL Surprise', price: 2990, image: 'https://images.unsplash.com/photo-1607879822811-81c5e4d3e0be?w=500' },
    { id: 7, title: 'Плюшевый мишка', price: 1790, image: 'https://images.unsplash.com/photo-1551061613-459c2e9bf39d?w=500' },
    { id: 8, title: 'Набор косметики для детей', price: 2290, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500' },
    { id: 9, title: 'Интерактивная пони', price: 3990, image: 'https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=500' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-girls/30 border-b border-girls/20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-[hsl(340,80%,45%)] rounded-full flex items-center justify-center">
              <Icon name="Heart" size={24} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold font-heading">Игрушки для девочек</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Куклы, мягкие игрушки, наборы для творчества и волшебные подарки
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {girlsProducts.map((product) => (
            <ProductCard 
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              category="girls"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Girls;
