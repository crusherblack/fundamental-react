const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="col-sm-3">
      <div className="card">
        <div className="card-header">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <img src={imageUrl} alt={title} className="img-fluid" />
          <h3>{description}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
