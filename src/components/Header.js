const Header = () => {
    return (
        <header className="d-flex justify-between align-center p-40">
            {/**thats macro-css, each name "d-flex" means smth in css language, like display: flex. easier */}
            <div className="d-flex align-center">
            <img width={40} height={40} src="photos/websitelogo.png" />
                <div>
                    <h3 className="text-uppercase">React sneakers</h3>
                    <p className="opacity-5">Best sneakers shop</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30">
                    <img width={18} height={18} src="icons/cart_icon.svg" />
                    <span> $123 </span>
                </li>
                <li>
                    <img width={18} height={18} src="icons/heart_icon.svg" />
                </li>
                <li>
                    <img width={18} height={18} src="icons/person_icon.svg" />
                </li>
            </ul>
        </header>
    );
}
 
export default Header;