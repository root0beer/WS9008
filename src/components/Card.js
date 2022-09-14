const Card = () => {
    return (
        <div className="card">
        <div className="favorite">
          <img src="/icons/nolike_icon.svg" alt="unliked" />
        </div>
        <img
          width={133}
          height={112}
          src="photos/sneakers/1.jpg"
          alt="Sneakers"
        />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column ">
            <span>Price</span>
            <b>$123</b>
          </div>
          <button className="button">
            <img
              width={11}
              height={11}
              src="icons/plus_icon.svg"
              alt=":lus"
            />
          </button>
        </div>
      </div>
    );
}
 
export default Card;