import React, { useContext, useState } from "react";
import "./langselector.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Context } from "../../Context/MainContext";

const LangSelector = () => {
  const { currentLang, setLanguage } = useContext(Context);
  const [isSelecting, setIsSelecting] = useState(false);
  return (
    <div className="lang-selector">
      <div
        className="current-lang"
        onClick={() => {
          setIsSelecting(true);
          setTimeout(() => {setIsSelecting(false);}, 3000);
        }}
      >
        <span className={`fi fi-${currentLang == 'eng' ? 'us' : 'de'}`}></span>
      </div>
      {isSelecting ? (
        <div className="lang-buttons-containner">
          <div
            className={`lang-wrapper`}
            onClick={(e) => {
              e.stopPropagation();
              setLanguage("eng");
              setIsSelecting(false)
            }}
          >
            <span className="fi fi-us"></span>
          </div>
          <div
            className={`lang-wrapper`}
            onClick={(e) => {
              e.stopPropagation();
              setLanguage("des");
              setIsSelecting(false)
            }}
          >
            <span className="fi fi-de"></span>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LangSelector;
