import clases from "./Header.module.css"
import himage from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";
const Header=props => {
  return <>
      <header className={clases.header}>
        <h1>NO Meal NO Life</h1>
        <HeaderCartButton onClick={props.onShow} />
      </header>
        <div className={clases['main-image']}>
            <img src={himage} alt="images of food on table!"></img>
        </div>
  </>;
}

export default Header;
