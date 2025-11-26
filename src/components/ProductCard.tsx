import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  category?: 'boys' | 'girls';
}

const ProductCard = ({ title, price, image, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg animate-scale-in">
      <div className="aspect-square overflow-hidden bg-secondary">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-heading font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold font-heading">{price} ₽</span>
          <Button 
            size="sm" 
            className={`gap-2 ${
              category === 'boys' ? 'bg-boys hover:bg-boys/90' : 
              category === 'girls' ? 'bg-[hsl(340,80%,45%)] hover:bg-[hsl(340,80%,40%)]' : 
              ''
            }`}
          >
            <Icon name="ShoppingCart" size={16} />
            В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
