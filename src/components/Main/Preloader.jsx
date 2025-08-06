import "../../blocks/Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__circle"></div>
      <p className="preloader__text">Loading...</p>
    </div>
  );
}

export default Preloader;
