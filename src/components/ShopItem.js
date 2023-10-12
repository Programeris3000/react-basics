function ShopItem(props){
  console.log(props.title)
  console.log(props.phone)
  console.log(props.email)
  console.log(props.address)


  return(
    <div class="shop-item">
    <h2 class="shop-title">{props.title}</h2>

    <ul class="shop-contacts-list">
      <li class="shop-contact-item">
        <span class="shop-contact-title">Phone:</span> 
        <a href={`tel:${props.phone}`}></a>
      </li>

      <li class="shop-contact-item">
        <span class="shop-contact-title">Email:</span>
        <a href={`${props.email}`}></a>
      </li>

      <li class="shop-contact-item">
        <span class="shop-contact-title">Address:</span> 
        <a href="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7" target="_blank">Rotušės aikštė 1, Kaunas</a>
      </li>
    </ul>
  </div>
  )
}

export default ShopItem