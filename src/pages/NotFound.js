import { useHistory } from "react-router-dom";

const NotFound = () => {
  const route = useHistory();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        flexDirection: "column",
      }}
    >
      <h1>404 Not Found</h1>
      <button className="btn btn-success" onClick={() => route.push("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
