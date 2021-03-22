

export function Item({ item }) {
  console.log(item);
  return (
    <>
      <div className="item flex ">
        <img src={require(`../assets/images/homepage/menu-items/${item.imgUrl}`).default} alt="" />
        <div style={{ marginBottom: 24 }}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
        </div>

      </div>
      {(item.imgUrl !== "menu-item3.jpg") ? <hr style={{ maxWidth: 630, margin: '24px 0 24px 0' }} /> : <div></div>}
    </>
  )
}
