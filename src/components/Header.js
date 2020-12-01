import PropTypes from "prop-types";

function Header({ title, description, object, array, showAlert }) {
  return (
    <>
      <h1>Ini adalah header: {title}</h1>
      <h3>{description}</h3>
      <p>Id: {object.id}</p>
      <p>Name: {object.name}</p>
      <p>{JSON.stringify(array)}</p>
      <button onClick={() => showAlert()}>Show Alert</button>
    </>
  );
}

Header.defaultProps = {
  title: "Ini default props",
};

Header.propTypes = {
  object: PropTypes.object,
};

export default Header;
