import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-indigo-300 py-3">
      <div className="flex gap-9 ml-5">
        <Link to={"/"}>Home</Link>
      </div>
    </header>
  );
};

export default Header;
