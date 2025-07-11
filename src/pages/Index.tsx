import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Органические томаты",
      price: 450,
      description: "Сочные томаты с фермы 'Зеленый дом'",
      image: "/img/ab2e0c28-ee98-4c98-bc6e-32949a44772a.jpg",
      badges: ["Органик", "Местное"],
    },
    {
      id: 2,
      name: "Молодая морковь",
      price: 320,
      description: "Сладкая морковь с полей Подмосковья",
      image: "/img/ab2e0c28-ee98-4c98-bc6e-32949a44772a.jpg",
      badges: ["Свежее", "Эко"],
    },
    {
      id: 3,
      name: "Листовая зелень",
      price: 280,
      description: "Микс салатов от фермера Иванова",
      image: "/img/ab2e0c28-ee98-4c98-bc6e-32949a44772a.jpg",
      badges: ["Премиум", "Без химии"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-eco-cream to-white">
      {/* Header */}
      <header className="bg-primary text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Leaf" size={32} className="text-accent" />
            <h1 className="text-2xl font-heading font-bold">ЭкоФерма</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-accent transition-colors">
              Главная
            </a>
            <a href="#catalog" className="hover:text-accent transition-colors">
              Каталог
            </a>
            <a href="#cart" className="hover:text-accent transition-colors">
              Корзина
            </a>
            <a href="#contacts" className="hover:text-accent transition-colors">
              Контакты
            </a>
          </nav>
          <Button
            variant="outline"
            className="bg-white text-primary hover:bg-eco-cream"
          >
            <Icon name="ShoppingCart" size={20} className="mr-2" />
            Корзина (0)
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 bg-gradient-to-r from-primary to-primary-light text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-heading font-bold mb-6 animate-fade-in">
            Фермерские продукты от местных производителей
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Натуральные, экологически чистые продукты прямо с полей Подмосковья.
            Поддержите местных фермеров и заботьтесь о своем здоровье.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3"
            >
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
            >
              <Icon name="MapPin" size={20} className="mr-2" />
              Наши фермы
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="bg-eco-light/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Leaf" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 text-primary">
                100% Органическое
              </h3>
              <p className="text-gray-600">
                Без пестицидов и химических удобрений
              </p>
            </div>
            <div className="animate-fade-in">
              <div className="bg-eco-light/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 text-primary">
                Быстрая доставка
              </h3>
              <p className="text-gray-600">
                Свежие продукты прямо к вашему столу
              </p>
            </div>
            <div className="animate-fade-in">
              <div className="bg-eco-light/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2 text-primary">
                Местные фермеры
              </h3>
              <p className="text-gray-600">
                Поддержка малого бизнеса и экономики региона
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-eco-cream/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-primary">
            Популярные продукты
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="hover:shadow-lg transition-shadow animate-scale-in"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 flex gap-1">
                    {product.badges.map((badge) => (
                      <Badge
                        key={badge}
                        variant="secondary"
                        className="bg-accent text-white text-xs"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-primary font-heading">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">
                      {product.price} ₽
                    </span>
                    <Button className="bg-accent hover:bg-accent/90">
                      <Icon name="Plus" size={16} className="mr-1" />В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Посмотреть весь каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/img/a24c92fe-5702-4ab4-bfec-db52a7464c29.jpg"
                alt="Наша ферма"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-primary">
                О нашей ферме
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Мы — семейное хозяйство, которое уже более 15 лет выращивает
                экологически чистые продукты в Подмосковье. Наша миссия —
                предоставить людям доступ к свежим, натуральным продуктам без
                вредных химикатов.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <Icon name="Check" size={20} className="text-accent mr-3" />
                  Органические сертификаты
                </li>
                <li className="flex items-center text-gray-600">
                  <Icon name="Check" size={20} className="text-accent mr-3" />
                  Собственные семена
                </li>
                <li className="flex items-center text-gray-600">
                  <Icon name="Check" size={20} className="text-accent mr-3" />
                  Устойчивое земледелие
                </li>
              </ul>
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="Heart" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Section */}
      <section id="cart" className="py-16 bg-eco-cream/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-primary">
            Корзина покупок
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Icon
                name="ShoppingCart"
                size={64}
                className="mx-auto mb-4 text-gray-400"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-600">
                Корзина пуста
              </h3>
              <p className="text-gray-500 mb-6">
                Добавьте товары из каталога, чтобы сделать заказ
              </p>
              <Button className="bg-accent hover:bg-accent/90">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Перейти к покупкам
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            Свяжитесь с нами
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon
                name="Phone"
                size={48}
                className="mx-auto mb-4 text-accent"
              />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="opacity-90">+7 (495) 123-45-67</p>
            </div>
            <div>
              <Icon
                name="Mail"
                size={48}
                className="mx-auto mb-4 text-accent"
              />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="opacity-90">info@ecoferma.ru</p>
            </div>
            <div>
              <Icon
                name="MapPin"
                size={48}
                className="mx-auto mb-4 text-accent"
              />
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="opacity-90">
                Московская область
                <br />
                Пушкинский район
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать нам
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-light text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Leaf" size={24} className="text-accent" />
            <span className="text-xl font-heading font-bold">ЭкоФерма</span>
          </div>
          <p className="opacity-80 mb-4">
            Натуральные продукты от местных производителей
          </p>
          <div className="flex justify-center space-x-6">
            <Icon
              name="Facebook"
              size={24}
              className="hover:text-accent cursor-pointer transition-colors"
            />
            <Icon
              name="Instagram"
              size={24}
              className="hover:text-accent cursor-pointer transition-colors"
            />
            <Icon
              name="Youtube"
              size={24}
              className="hover:text-accent cursor-pointer transition-colors"
            />
          </div>
          <div className="mt-6 pt-6 border-t border-white/20 text-sm opacity-60">
            © 2024 ЭкоФерма. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
