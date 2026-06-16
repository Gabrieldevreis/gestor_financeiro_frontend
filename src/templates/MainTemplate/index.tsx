import { Outlet, Link } from "react-router-dom";

export function MainTemplate() {
  return (
    <div className="container-main-template">
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/investments">Investments</Link>
            </li>
            <li>
              <Link to="/transactions">Transactions</Link>
            </li>
            <li>
              <Link to="/goals">Goals</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
