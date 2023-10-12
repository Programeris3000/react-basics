import ShopItem from "./ShopItem"

function ShopsList(){
  return(
    <div className="shops-list">
      <ShopItem title="Parduotuve 1" 
      phone="+3245454" 
      email="vadim@kk.com"
      addres="blalbalbal 1 street"
      />

      <ShopItem title="Parduotuve 2" 
      phone="+32656454" 
      email="vadiasdasdm@kk.com"
      addres="blalbalbal 1 street"
      />
      <ShopItem title="Parduotuve 3" 
      phone="+326564545" 
      email="vadieeeem@kk.com"
      addres="blalbalbal 1 street"
      />
      <ShopItem title="Parduotuve 4" 
      phone="+3265645454" 
      email="vadiqweqeqwm@kk.com"
      addres="blalbalbal 1 street"
      />

    {/* <div className="shop-item">
      <h2 className="shop-title">Parduotuvė 2</h2>

      <ul className="shop-contacts-list">
        <li className="shop-contact-item">
          <span className="shop-contact-title">Phone:</span> 
          <a href="tel:+3704564644">+3704564644</a>
        </li>

        <li className="shop-contact-item">
          <span className="shop-contact-title">Email:</span>
          <a href="mailto:shop1@parduotuve.lt">shop1@parduotuve.lt</a>
        </li>

        <li className="shop-contact-item">
          <span className="shop-contact-title">Address:</span> 
          <a href="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7" target="_blank">Rotušės aikštė 1, Kaunas</a>
        </li>
      </ul>
    </div>

    <div className="shop-item">
      <h2 className="shop-title">Parduotuvė 3</h2>

      <ul className="shop-contacts-list">
        <li className="shop-contact-item">
          <span className="shop-contact-title">Phone:</span> 
          <a href="tel:+3704564644">+3704564644</a>
        </li>

        <li className="shop-contact-item">
          <span className="shop-contact-title">Email:</span>
          <a href="mailto:shop1@parduotuve.lt">shop1@parduotuve.lt</a>
        </li>

        <li className="shop-contact-item">
          <span className="shop-contact-title">Address:</span> 
          <a href="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7" target="_blank">Rotušės aikštė 1, Kaunas</a>
        </li>
      </ul>
    </div>

    <div className="shop-item">
      <h2 className="shop-title">Parduotuvė 4</h2>

      <ul className="shop-contacts-list">
        <li className="shop-contact-item">
          <span className="shop-contact-title">Phone:</span> 
          <a href="tel:+3704564644">+3704564644</a>
        </li>

        <li className="shop-contact-item">
          <span className="shop-contact-title">Email:</span>
          <a href="mailto:shop1@parduotuve.lt">shop1@parduotuve.lt</a>
        </li>

        <li className="shop-contact-item">
          <span className="shop-contact-title">Address:</span> 
          <a href="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7" target="_blank">Rotušės aikštė 1, Kaunas</a>
        </li>
      </ul>
    </div> */}
  </div>
  )
}

default export ShopsList