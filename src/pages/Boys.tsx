import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import Icon from '@/components/ui/icon';

const Boys = () => {
  const boysProducts = [
    { id: 1, title: 'Робот-трансформер Optimus', price: 2990, image: 'https://cdn.poehali.dev/projects/167001b8-6670-417d-8bd7-654ad66d60a3/files/2207d6e7-8852-4c29-b0a0-6d00becb5f97.jpg' },
    { id: 2, title: 'Конструктор LEGO Technic', price: 5990, image: 'https://cdn.poehali.dev/projects/167001b8-6670-417d-8bd7-654ad66d60a3/files/3ba6a52a-496e-43bb-9354-a59f517991b4.jpg' },
    { id: 3, title: 'Радиоуправляемый джип', price: 3990, image: 'https://cdn.poehali.dev/projects/167001b8-6670-417d-8bd7-654ad66d60a3/files/064609ec-1623-4531-920d-061af226d584.jpg' },
    { id: 4, title: 'Набор Hot Wheels', price: 1990, image: 'https://cdn.poehali.dev/projects/167001b8-6670-417d-8bd7-654ad66d60a3/files/58e6a0d9-1157-48de-ab4b-1db961131f6a.jpg' },
    { id: 5, title: 'Бластер Nerf Elite', price: 2490, image: 'https://cdn.poehali.dev/projects/167001b8-6670-417d-8bd7-654ad66d60a3/files/00c2685a-b1ad-4ffe-9ec8-230397bc5963.jpg' },
    { id: 6, title: 'Железная дорога', price: 4490, image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500' },
    { id: 7, title: 'Вертолет на управлении', price: 3490, image: 'https://images.unsplash.com/photo-1520004434532-668416a08753?w=500' },
    { id: 8, title: 'Конструктор космическая станция', price: 6990, image: 'https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=500' },
    { id: 9, title: 'Набор инструментов', price: 1790, image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=500' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-boys/10 border-b border-boys/20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-boys rounded-full flex items-center justify-center">
              <Icon name="Car" size={24} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold font-heading">Игрушки для мальчиков</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Машинки, роботы, конструкторы и многое другое для юных исследователей
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {boysProducts.map((product) => (
            <ProductCard 
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              category="boys"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Boys;