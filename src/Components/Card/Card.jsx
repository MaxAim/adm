import "./Card.css"

const Card = ({card}) => {
  return <img src={require("/home/er1/Documents/adm/src/img/N" + card + ".jpg")} alt="" />;
};

export default Card