import classes from './Card.module.css';

const Card = props => {
  return <div className={classes.card}>
    {props.children}
  </div>
};

export default Card;

// import clases from "./Card.module.css"
// const Card = props => {
//     return <div className={clases.card}>
//             {props.childern}
//         </div>
// };
// export default Card;