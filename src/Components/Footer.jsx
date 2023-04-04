import React, { useContext } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Select from "react-select";
import { themeOptions } from "../Styles/theme";
import { ThemeContext } from "../Context/ThemeContext";
import Tippy from "@tippyjs/react";

const Footer = () => {
  const { setTheme, defaultValue } = useContext(ThemeContext);

  const handleThemeChange = (e) => {
    console.log(e.value);
    setTheme(e.value);
    localStorage.setItem("theme", JSON.stringify(e.value));
  };
  return (
    <div className="footer">
      <div className="social-links">
        {/* Social-links like github n all */}
        <Tippy content="Github">
          <a
            href="https://github.com/Shubhamkshirsagar1?tab=repositories"
            target="blank"
          >
            <GitHubIcon />
          </a>
        </Tippy>
        <Tippy content="LinkedIn">
          <a href="https://www.linkedin.com/in/shubham-kshirsagar-446561147/" target="blank">
            <LinkedInIcon />
          </a>
        </Tippy>
      </div>
      <div className="themes">
        {/* theme */}
        <Select
          className="theme-select"
          options={themeOptions}
          onChange={handleThemeChange}
          defaultValue={{ value: defaultValue, label: defaultValue.label }}
        />
      </div>
    </div>
  );
};

export default Footer;
