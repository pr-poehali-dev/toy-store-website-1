import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card className="animate-scale-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="UserPlus" size={32} className="text-primary" />
              </div>
              <CardTitle className="text-3xl font-heading">Регистрация</CardTitle>
              <CardDescription>
                Создайте аккаунт, чтобы делать покупки и отслеживать заказы
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@mail.ru"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Пароль</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Минимум 6 символов"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Повторите пароль"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full gap-2" size="lg">
                  <Icon name="UserPlus" size={20} />
                  Зарегистрироваться
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Уже есть аккаунт?{' '}
                  <button type="button" className="text-primary hover:underline font-medium">
                    Войти
                  </button>
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <Card className="text-center p-4 hover:shadow-md transition-shadow">
              <Icon name="Package" size={32} className="mx-auto mb-2 text-primary" />
              <h4 className="font-heading font-semibold mb-1">Отслеживание</h4>
              <p className="text-xs text-muted-foreground">Следите за заказами</p>
            </Card>
            <Card className="text-center p-4 hover:shadow-md transition-shadow">
              <Icon name="Heart" size={32} className="mx-auto mb-2 text-primary" />
              <h4 className="font-heading font-semibold mb-1">Избранное</h4>
              <p className="text-xs text-muted-foreground">Сохраняйте товары</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
