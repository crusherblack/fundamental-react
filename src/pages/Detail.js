import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Ini adalah detail dengan id: {id}</h1>
    </div>
  );
};

export default Detail;
