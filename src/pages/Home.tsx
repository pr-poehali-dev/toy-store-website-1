import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Home = () => {
  const popularProducts = [
    { id: 1, title: 'Робот-трансформер', price: 2990, image: 'https://cdn.poehali.dev/projects/167001b8-6670-417d-8bd7-654ad66d60a3/files/2207d6e7-8852-4c29-b0a0-6d00becb5f97.jpg', category: 'boys' as const },
    { id: 2, title: 'Кукла Baby Born', price: 3490, image: 'https://cdn.poehali.dev/projects/167001b8-6670-417d-8bd7-654ad66d60a3/files/697c7017-d698-4fc8-9c3f-7aef3bcbf118.jpg', category: 'girls' as const },
    { id: 3, title: 'Конструктор LEGO City', price: 4990, image: 'https://cdn.poehali.dev/projects/167001b8-6670-417d-8bd7-654ad66d60a3/files/7c759a15-7bfe-45e1-80f5-951f32d2a308.jpg', category: 'boys' as const },
    { id: 4, title: 'Мягкая игрушка Единорог', price: 1490, image: 'https://cdn.poehali.dev/projects/167001b8-6670-417d-8bd7-654ad66d60a3/files/cee5de17-2b9e-4a85-8ab5-fa1a302ec0c3.jpg', category: 'girls' as const },
    { id: 5, title: 'Радиоуправляемый джип', price: 3990, image: 'https://cdn.poehali.dev/projects/167001b8-6670-417d-8bd7-654ad66d60a3/files/04ad4ea8-f39f-4e5f-b2b6-f5bab5082555.jpg', category: 'boys' as const },
    { id: 6, title: 'Набор для творчества', price: 1990, image: 'https://cdn.poehali.dev/projects/167001b8-6670-417d-8bd7-654ad66d60a3/files/3934f426-61ed-4e24-a1cf-4e9524d90374.jpg', category: 'girls' as const },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative bg-gradient-to-b from-secondary to-background py-20 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6">
            Мир игрушек для вашего ребенка
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Тысячи игрушек для мальчиков и девочек. Быстрая доставка по всей России
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/boys">
              <Button size="lg" className="gap-2 bg-boys hover:bg-boys/90">
                <Icon name="Car" size={20} />
                Для мальчиков
              </Button>
            </Link>
            <Link to="/girls">
              <Button size="lg" className="gap-2 bg-[hsl(340,80%,45%)] hover:bg-[hsl(340,80%,40%)]">
                <Icon name="Heart" size={20} />
                Для девочек
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-heading mb-8 text-center">
            Популярные товары
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                title={product.title}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={28} className="text-white" />
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">Быстрая доставка</h4>
              <p className="text-muted-foreground">Доставим за 1-3 дня</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={28} className="text-white" />
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">Гарантия качества</h4>
              <p className="text-muted-foreground">Только проверенные бренды</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={28} className="text-white" />
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">Поддержка 24/7</h4>
              <p className="text-muted-foreground">Всегда на связи</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;