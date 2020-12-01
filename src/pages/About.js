import { useContext } from "react";
import { AppContext } from "../context/appContext";

const About = () => {
  const [shareValue] = useContext(AppContext);
  const { title, description } = shareValue;

  return (
    <div>
      <h1>
        ini adalah share value: {title} || {description}
      </h1>
    </div>
  );
};

export default About;
