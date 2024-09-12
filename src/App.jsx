import { useEffect, useState } from 'react';
import Product from './Product'; 
import CartItem from './CartItem';
import './App.css';

function App() {

  const productList = [
    {name: "Laptop", id: 1, description: "Portátil - Acer Chromebook CB315-4H-C4BQ, 15.6' Full HD, Intel® Celeron® N4500, 8GB RAM, 128GB eMMC, Intel® UHD Graphics, Google Chrome OS", price: 299.00, discount: 10, stock: 2, discountImage:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit-GXDVKI5VaoXuG4fUFsJfC-fKh_jrIqunV4sXDRM-8L1Gsm82k8xm5_Hvcc7s907qTdDx-4jcfKGBOgYIqVrEh9CzsFnsU5r3LohCqJGxXWbOuhe9JIhTfzR9NFTVGBLo7m79kZ0tIY/w1600/top-10-nuevas-ofertas-flash-aniversario-media-markt.jpg", image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_140725966?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320"},
    {name: "Smartphone", id: 2, description: "Móvil - Samsung Galaxy A05s, Black, 128GB, 4GB RAM, 6.7', Qualcomm Snapdragon 680, 5000mAh, Android 14", price: 179.00, discount: 15, stock: 18, discountImage:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit-GXDVKI5VaoXuG4fUFsJfC-fKh_jrIqunV4sXDRM-8L1Gsm82k8xm5_Hvcc7s907qTdDx-4jcfKGBOgYIqVrEh9CzsFnsU5r3LohCqJGxXWbOuhe9JIhTfzR9NFTVGBLo7m79kZ0tIY/w1600/top-10-nuevas-ofertas-flash-aniversario-media-markt.jpg", image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_142867016?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320"},
    {name: "Headphones", id: 3, description: "Auriculares gaming - Logitech G G435, De diadema, Inalámbricos, Bluetooth, Hasta 18 horas, Micrófono, PC/Mac, PS, Nintendo, Negro", price: 64.90, discount: 0, stock: 2, discountImage:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit-GXDVKI5VaoXuG4fUFsJfC-fKh_jrIqunV4sXDRM-8L1Gsm82k8xm5_Hvcc7s907qTdDx-4jcfKGBOgYIqVrEh9CzsFnsU5r3LohCqJGxXWbOuhe9JIhTfzR9NFTVGBLo7m79kZ0tIY/w1600/top-10-nuevas-ofertas-flash-aniversario-media-markt.jpg", image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_95327098?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320"},
    {name: "Smartwatch", id: 4, description: "Smartwatch - Xiaomi Watch S3, AMOLED, Bluetooth, Hasta 15 días, HyperOS, Negro", price: 149.99, discount: 0, stock: 13, discountImage:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit-GXDVKI5VaoXuG4fUFsJfC-fKh_jrIqunV4sXDRM-8L1Gsm82k8xm5_Hvcc7s907qTdDx-4jcfKGBOgYIqVrEh9CzsFnsU5r3LohCqJGxXWbOuhe9JIhTfzR9NFTVGBLo7m79kZ0tIY/w1600/top-10-nuevas-ofertas-flash-aniversario-media-markt.jpg", image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_137309800?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320"},
    {name: "Freezer", id: 5, description: "Frigorífico Table Top - OK. OFK 171 E W, Compresor, 84.2 cm, 94 l, Luz interior, Blanco", price: 179.99, discount: 20, stock: 5, discountImage:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit-GXDVKI5VaoXuG4fUFsJfC-fKh_jrIqunV4sXDRM-8L1Gsm82k8xm5_Hvcc7s907qTdDx-4jcfKGBOgYIqVrEh9CzsFnsU5r3LohCqJGxXWbOuhe9JIhTfzR9NFTVGBLo7m79kZ0tIY/w1600/top-10-nuevas-ofertas-flash-aniversario-media-markt.jpg", image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_136512032?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402"},
    {name: "Personal Computer", id: 6, description: "PC Gaming - NITROPC Pack Bronze, AMD Ryzen 5 4650G (6 núcleos, 12 hilos | de 3,70 GHz hasta 4,2 GHz), Monitor 24' 120Hz, 16 GB RAM, 1 TB SSD, Radeon™ Onboard Graphics, Windows 11 Home (64 Bit), Windows 11 Home, Blanco", price: 903.71, discount: 5, stock: 4, discountImage:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit-GXDVKI5VaoXuG4fUFsJfC-fKh_jrIqunV4sXDRM-8L1Gsm82k8xm5_Hvcc7s907qTdDx-4jcfKGBOgYIqVrEh9CzsFnsU5r3LohCqJGxXWbOuhe9JIhTfzR9NFTVGBLo7m79kZ0tIY/w1600/top-10-nuevas-ofertas-flash-aniversario-media-markt.jpg", image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_144345240?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320"},
  ];

  const [products, setProducts] = useState([]);
  const [cartList, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setProducts(productList);
  }, []);

  useEffect(() => {
    setCart(cartList);
  }, []);

  useEffect(() => {
    let newTotalPrice = 0;
    for(let i = 0; i < cartList.length; i++)
    {
      newTotalPrice +=  (cartList[i].price * ((100 - cartList[i].discount)/100).toFixed(2))*cartList[i].quantity;
    }
    setTotalPrice(newTotalPrice);
  }, [cartList]);

  const addToCart = (product) => {

      const existingItemIndex = cartList.findIndex(item => item.id === product.id);

      if (existingItemIndex != -1) 
      {
        console.log("ITEM ALREADY EXISTS");
        const updatedCart = [...cartList];
        updatedCart[existingItemIndex].quantity += 1; 
        setCart(updatedCart);
      } 
      else 
      {
        setCart((prevCart) => [...prevCart, {...product, quantity:1}]);
        console.log("ITEM NOT EXISTING");
      }
  }


  return (
    <> 
      <h1 style={{color: 'red', fontSize: "75px"}}>MEDIA POWER</h1>
      <div className="card">
        {products.map((product) => (
          <Product 
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name} 
            description={product.description} 
            price={product.price} 
            stock={product.stock} 
            discount={product.discount}
            discountImage={product.discountImage}
            addToCartFunction={() => addToCart(product)}
          />
        ))}
      </div>
      <div className="cart">
      <h2>Carrito de Compras</h2>
        {cartList.map((item, index) =>  (
          <CartItem
          key={index}
          id={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
          quantity={item.quantity}
          discount={item.discount}
          />
        ))}
        <h2>A PAGAR: {totalPrice.toFixed(2)}€</h2>
      </div>
    </>
  );
}

export default App;
