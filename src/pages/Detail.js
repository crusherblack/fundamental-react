import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/appContext";

const Detail = () => {
  const { id } = useParams();
  const [shareValue] = useContext(AppContext);
  const { title, description } = shareValue;

  return (
    <div>
      <h1>Ini adalah detail dengan id: {id}</h1>
      <h1>
        ini adalah share value: {title} || {description}
      </h1>
    </div>
  );
};

export default Detail;
