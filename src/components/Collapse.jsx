
import './Collapse.css'

function Collapse({ title, children }) {
  return (
    <details className="accordeon">
      <summary>
        {title}
        <span className="chevron menu-chevron"></span>
      </summary>

      <div className="accordeon-contenu">
        {children}
      </div>
    </details>
  )
}

export default Collapse
