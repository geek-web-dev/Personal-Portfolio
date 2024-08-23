import React, { useState } from "react";
import ColorButton from "./ColorButton";
import { colors, defaultColor } from "../data";
import { Moon, Palette, Sun } from "lucide-react";

const ThemeControler = ({ mode, setMode }) => {
  const [open, setOpen] = useState(false);
  const [activeColor, setActiveColor] = useState(defaultColor);
  return (
    <>
      <div className={`theme-colors ${open ? "open" : ""}`}>
        <div
          className="theme-colors-btn"
          onClick={() => setOpen((open) => !open)}
        >
          <Palette color="white" size={20} />
        </div>
        <div className="color-buttons">
          {colors.map((obj, idx) => (
            <ColorButton
              key={idx}
              id={idx + 1}
              color={obj.color}
              active={activeColor}
              setActive={setActiveColor}
            />
          ))}
        </div>
      </div>

      <div className="theme-mode-btn" onClick={() => setMode((mode) => !mode)}>
        {mode ? (
          <Moon color="white" size={20} id="dark" />
        ) : (
          <Sun color="white" size={20} />
        )}
      </div>
    </>
  );
};

export default ThemeControler;
