import './Featured.css'
import Img7 from './../../../../images/Img7.jpg'
import Img8 from './../../../../images/Img8.jpg'
import Img9 from './../../../../images/Img9.jpg'
import Img10 from './../../../../images/Img10.jpg'
import Img11 from './../../../../images/Img11.jpg'
import Img12 from './../../../../images/Img12.jpg'
import Img13 from './../../../../images/Img13.jpg'
import Img14 from './../../../../images/Img14.jpg'
import { Link } from 'react-router-dom'
const Featured = () => {
  const featuredData = [
    {
      img: Img7,
      title: "New Oleato Golden Foam™ Iced Shaken Espresso with Toffeenut",
      text: "Layers of smooth espresso and creamy oatmilk topped with lush vanilla sweet cream infused with Partanna® extra virgin olive oil."
    },
    {
      img: Img8,
      title: "New Oleato™ Caffè Latte with Oatmilk Shaken Espresso with Toffeenut",
      text: "Our Starbucks® Blonde espresso combined with creamy oatmilk and infused with Partanna® extra virgin olive oil."
    },
    {
      img: Img9,
      title: "Pistachio Latte",
      text: "Cozy pistachio flavors paired with our signature espresso, steamed milk and a brown-buttery topping."
    },
    {
      img: Img10,
      title: "Pistachio Cream Cold Brew",
      text: "Smooth cold brew topped with silky pistachio cream cold foam and salted brown-buttery sprinkles."
    },
    {
      img: Img11,
      title: "New Hazelnut Oatmilk Shaken Espresso",
      text: "Starbucks® Blonde espresso shaken with notes of roasted hazelnut, topped with oatmilk."
    },
    {
      img: Img12,
      title: "Brown Sugar Oatmilk Shaken Espresso",
      text: "Our smooth espresso, brown sugar and cinnamon shaken together with an oatmilk finish."
    },
    {
      img: Img13,
      title: "Impossible™ Breakfast Sandwich",
      text: "A combination of savory ingredients including aged Cheddar cheese and an Impossible Sausage patty made from plants."
    },
    {
      img: Img14,
      title: "Chicken, Maple Butter & Egg Sandwich",
      text: "Breaded white-meat chicken, fluffy eggs and maple butter spread on a toasted oat biscuit roll."
    }
  ];
  return (
    <div className='featured-section'>
      <p className="featured-section-title">Day-making deliciousness</p>
     <div className="featured-cards-wrapper">
     {
      featuredData.map((item,id)=>{
        return  <div key={id} className={`featured-card bg-${id}`}>
        <div className="featured-img">
          <img src={item.img} alt="" />
        </div>
        <div className="featured-content">
          <p className="featured-title">{item.title}</p>
          <p className="featured-text">{item.text}</p>
          <Link to={`/menu-details/${id}`}>Order now</Link>
        </div>
       </div>
      })
    }
     </div>
     <p className="featured-copyright">*Impossible is a trademark of Impossible Foods Inc. Used under license.</p>
    </div>
  )
}

export default Featured