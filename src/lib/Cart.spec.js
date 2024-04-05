import Cart from './Cart';

describe('Cart', () => {
  let cart;
  let product = {
    title: 'Tenis Adidas',
    price: 400,
  };

  let product2 = {
    title: 'Ecobag do Flamengo',
    price: 36,
  };

  // Antes de cada teste, instanciamos um novo carrinho
  beforeEach(() => {
    cart = new Cart();
  });

  it('Should return 0 when getTotal is called without products', () => {
    const cart = new Cart();
    expect(cart.getTotal()).toBe(0);
  });

  it('Should multiply the quantity by price and return the total', () => {
    const item = {
      product,
      quantity: 2,
    };

    cart.add(item);

    expect(cart.getTotal()).toEqual(800);
  });

  it('Should add one product more than one time return only the total of the new and ignore/remove the old item', () => {
    cart.add({
      product,
      quantity: 2,
    });

    cart.add({
      product,
      quantity: 1,
    });

    expect(cart.getTotal()).toEqual(400);
  });

  it('Should return the total correct when i add and remove a product', () => {
    cart.add({
      product,
      quantity: 2,
    });

    cart.add({
      product: product2,
      quantity: 1,
    });

    cart.remove(product2);

    expect(cart.getTotal()).toEqual(800);
  });
});
