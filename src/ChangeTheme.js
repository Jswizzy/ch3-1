import React, { useState, useEffect } from "react";

function ThemeItem({ theme, active, onClick }) {
  return (
    <span
      onClick={onClick}
      style={{
        cursor: "pointer",
        paddingLeft: 8,
        fontWeight: active ? "bold" : "normal",
      }}
    >
      <span style={{ color: theme.primaryColor }}>Primary</span> /{" "}
      <span style={{ color: theme.secondaryColor }}>Secondary</span>
    </span>
  );
}

export default function ChangeTheme({ theme, setTheme }) {
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    fetch("/api/themes")
      .then(res => res.json())
      .then(themes => setThemes(themes));
  }, []);

  function isActive(t) {
    return (
      t.primaryColor === theme.primaryColor &&
      t.secondaryColor === theme.secondaryColor
    );
  }

  return (
    <div>
      Change Theme:
      {themes.map((t, i) => (
        <ThemeItem
          key={i}
          theme={t}
          active={isActive(t)}
          onClick={() => setTheme(t)}
        />
      ))}
    </div>
  );
}
