const Drawer = () => {
    return (
        <div style={{display:"none"}}className="overlay">
            <div className="drawer">
            <h2 className="d-flex justify-between mb-30" >Shopping Cart <img className="removeBtn" src="/icons/btnRemove_icon.svg" alt="Remove"/></h2>

            <div className="items">
                
                <div className="cartItem d-flex align-center mb-20">
                <div 
                    style={{backgroundImage: "url(/photos/sneakers/1.jpg)"}} 
                    className="cartItemImg">{/**regular html would be style = "height:100px". Write {{}} two times indicating you want to pass sum styles */}

                </div>
                <div className="mr-20 flex">
                    <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                    <b>$129</b>
                </div>
                <img className="removeBtn" src="/icons/btnRemove_icon.svg" alt="Remove" />
                </div>
                
                
                <div className="cartItem d-flex align-center mb-20">
                <div 
                    style={{backgroundImage: "url(/photos/sneakers/1.jpg)"}} 
                    className="cartItemImg">{/**regular html would be style = "height:100px". Write {{}} two times indicating you want to pass sum styles */}

                </div>
                <div className="mr-20 flex">
                    <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                    <b>$129</b>
                </div>
                <img className="removeBtn" src="/icons/btnRemove_icon.svg" alt="Remove" />
                </div>
            </div>
            <div className="cartTotalBlock">
                <ul>
                <li>
                    <span>Total:</span>
                    <div></div>
                    <b>$214</b>
                </li>
                <li>
                    <span>Tax 5%:</span>
                    <div></div>
                    <b>$10</b>
                </li>
                </ul>
                <button className="greenButton">Proceed <img src="icons/btnarrow_icon.svg" alt="arrow"/></button>
            </div>
            
            </div>
        </div>
    );
}
 
export default Drawer;