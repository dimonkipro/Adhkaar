import { useState } from "react";
import Morning from "../Pages/Morning";
import Evening from "../Pages/Evening";
import Night from "../Pages/Night";
import After_pray from "../Pages/After_pray";
import Tasbih from "../Pages/Tasbih";
import Waking from "../Pages/Waking";
import Quran from "../Pages/Quran";
import Prophets_duaa from "../Pages/Prophets_duaa";

const tabsConfig = [
  { name: "أذكار الصباح", component: <Morning /> },
  { name: "أذكار المساء", component: <Evening /> },
  { name: "أذكار النوم", component: <Night /> },
  { name: "أذكار بعد الصلاة ", component: <After_pray /> },
  { name: "تسابيح", component: <Tasbih /> },
  { name: "أذكار الاستيقاظ", component: <Waking /> },
  { name: "أدعية قرآنية", component: <Quran /> },
  { name: "أدعية الأنبياء", component: <Prophets_duaa /> },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState("أذكار الصباح");

  return (
    <div>
      <nav className="navbar navbar-expand-lg border-bottom shadow-sm">
        <div className="container-fluid">
          {/* Navbar Toggler for Mobile View */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto fw-bolder fs-5 text-center">
              {tabsConfig.map((tab) => (
                <li className="nav-item" key={tab.name}>
                  <button
                    className={`nav-link ${
                      activeTab === tab.name ? "active text-success" : ""
                    }`}
                    onClick={() => setActiveTab(tab.name)}
                    aria-selected={activeTab === tab.name}
                    role="tab"
                  >
                    {tab.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <div className="content-container mt-4">
        {tabsConfig.find((tab) => tab.name === activeTab)?.component}
      </div>
    </div>
  );
};

export default Header;
