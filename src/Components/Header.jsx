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
  { name: "أذكار بعد السلام من الصلاة المفروضة", component: <After_pray /> },
  { name: "تسابيح", component: <Tasbih /> },
  { name: "أذكار الاستيقاظ", component: <Waking /> },
  { name: "أدعية قرآنية", component: <Quran /> },
  { name: "أدعية الأنبياء", component: <Prophets_duaa /> },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState("أذكار الصباح");

  return (
    <div>
      <nav className="navbar navbar-expand-lg border-bottom d-flex sticky-top">
        <div className="container-fluid d-flex justify-content-center fw-bolder fs-5 ">
          <ul className="navbar-nav mb-2 mb-lg-0">
            {tabsConfig.map((tab) => (
              <li className="nav-item " key={tab.name}>
                <button
                  className={`nav-link ${
                    activeTab === tab.name ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.name)}
                  aria-selected={activeTab === tab.name}
                  role="tab"
                >
                  °{tab.name}{" "}_
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="content-container mt-5">
        {tabsConfig.find((tab) => tab.name === activeTab)?.component}
      </div>
    </div>
  );
};

export default Header;
