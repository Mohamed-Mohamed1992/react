import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div style={{padding: "20px"}}>
      <nav style={{marginBottom: "20px"}}>
        <Link to="/">Home</Link> |
        <Link to={"/form"}>Apply</Link> |
        <Link to={"/review"}>Review</Link> |
        <Link to={"/submit"}>Submit</Link>
      </nav>
      <Outlet />
    </div>
  );
}