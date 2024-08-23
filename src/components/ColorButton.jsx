
const ColorButton = ({ color, id, setActive, active }) => {
  if (active === id) {
    document.documentElement.style.setProperty('--main-color', color);
  }
  return (
    <div className={`color ${active === id ? "active" : ""}`}
    style={{ backgroundColor: color }} onClick={() => setActive(id)}>✓</div>
  )
}

export default ColorButton