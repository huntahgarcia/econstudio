
import { useState } from 'react'
import './App.css'

function App() {
  const [price, setPrice] = useState(48)
  const [manufacturing, setManufacturing] = useState(8.5)
  const [packaging, setPackaging] = useState(2.4)
  const [shipping, setShipping] = useState(4)
  const [fees, setFees] = useState(1.5)

  const totalCost = manufacturing + packaging + shipping + fees
  const contribution = price - totalCost
  const margin = price > 0 ? (contribution / price) * 100 : 0

  const money = (value: number) =>
    `$${value.toFixed(2)}`

  return (
    <div className="studio">
      <header className="topbar">
        <div className="brand">
          <span className="brand-icon">E</span>
          <span>ECONOMICS STUDIO</span>
          <span className="version">V2</span>
        </div>
        <div className="toolbar">
          <span>Project: DTC Business</span>
          <span>USD $</span>
          <button>Save Model</button>
          <button className="run-button">▶ Run Simulation</button>
        </div>
      </header>

      <div className="workspace">
        <aside className="sidebar">
          <div className="sidebar-heading">PROJECT EXPLORER</div>
          <div className="nav-item active">▦ Overview</div>
          <div className="nav-item">▣ Product Explorer</div>
          <div className="nav-item">▤ Economics Editor</div>
          <div className="nav-item">◈ Scenario Lab</div>
          <div className="nav-item">▧ Cost Library</div>
          <div className="nav-item">▥ Analytics</div>

          <div className="sidebar-heading">PRODUCTS</div>
          <div className="tree-item">▼ Cactus</div>
          <div className="tree-item nested">▼ Signature</div>
          <div className="tree-item nested selected">● Medium</div>
          <div className="tree-item nested">○ Large</div>
          <div className="tree-item">▶ Collections</div>

          <div className="sidebar-bottom">
            <span>● System Online</span>
            <span>Python Engine</span>
          </div>
        </aside>

        <main className="main-panel">
          <div className="breadcrumbs">
            Products / Cactus / Signature / Medium
          </div>

          <div className="page-heading">
            <div>
              <h1>Economics Editor</h1>
              <p>Unit economics and profitability model</p>
            </div>
            <span className="status">● Model Ready</span>
          </div>

          <div className="metrics">
            <Metric label="SELLING PRICE" value={money(price)} />
            <Metric label="TOTAL COST" value={money(totalCost)} />
            <Metric label="CONTRIBUTION" value={money(contribution)} />
            <Metric label="CONTRIBUTION MARGIN" value={`${margin.toFixed(1)}%`} />
          </div>

          <div className="sheet-header">
            <h2>Unit Economics</h2>
            <span>Model: Cactus Signature Medium</span>
          </div>

          <table className="economics-table">
            <thead>
              <tr>
                <th>Variable</th>
                <th>Category</th>
                <th>Value</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <EditableRow label="Selling Price" category="Revenue" value={price} setValue={setPrice} />
              <EditableRow label="Product Manufacturing" category="COGS" value={manufacturing} setValue={setManufacturing} />
              <EditableRow label="Packaging" category="COGS" value={packaging} setValue={setPackaging} />
              <EditableRow label="Shipping" category="Fulfillment" value={shipping} setValue={setShipping} />
              <EditableRow label="Payment Processing" category="Fees" value={fees} setValue={setFees} />

              <tr className="calculated">
                <td>Total Variable Costs</td>
                <td>Calculation</td>
                <td>{money(totalCost)}</td>
                <td>Formula</td>
              </tr>
              <tr className="calculated">
                <td>Contribution Profit</td>
                <td>Profitability</td>
                <td>{money(contribution)}</td>
                <td>Formula</td>
              </tr>
              <tr className="calculated">
                <td>Contribution Margin</td>
                <td>Profitability</td>
                <td>{margin.toFixed(1)}%</td>
                <td>Formula</td>
              </tr>
            </tbody>
          </table>

          <div className="console">
            <div className="console-heading">CALCULATION CONSOLE</div>
            <p><span>✓</span> Economics model loaded</p>
            <p><span>✓</span> 5 editable input variables</p>
            <p><span>✓</span> Total variable costs: {money(totalCost)}</p>
            <p><span>✓</span> Contribution profit: {money(contribution)}</p>
            <p><span>✓</span> Contribution margin: {margin.toFixed(1)}%</p>
          </div>
        </main>

        <aside className="inspector">
          <h3>SKU INSPECTOR</h3>
          <div className="product-preview">
            <div className="product-placeholder">C</div>
            <h2>Cactus Signature</h2>
            <p>Medium · SKU: CAC-SIG-M</p>
          </div>

          <InspectorItem label="PRODUCT CATEGORY" value="Home & Lifestyle" />
          <InspectorItem label="SELLING PRICE" value={money(price)} />
          <InspectorItem label="UNIT COST" value={money(totalCost)} />
          <InspectorItem label="CONTRIBUTION MARGIN" value={`${margin.toFixed(1)}%`} green />
        </aside>
      </div>
    </div>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="metric-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function EditableRow({
  label,
  category,
  value,
  setValue,
}: {
  label: string
  category: string
  value: number
  setValue: (value: number) => void
}) {
  return (
    <tr>
      <td>{label}</td>
      <td>{category}</td>
      <td>
        <input
          className="cell-input"
          type="number"
          min="0"
          step="0.01"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
      </td>
      <td>Input</td>
    </tr>
  )
}

function InspectorItem({
  label,
  value,
  green = false,
}: {
  label: string
  value: string
  green?: boolean
}) {
  return (
    <div className="inspector-section">
      <label>{label}</label>
      <p className={green ? 'green' : ''}>{value}</p>
    </div>
  )
}

export default App
