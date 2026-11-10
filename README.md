# EconStudio

## 1. Overview

EconStudio is an interactive business economics and financial modeling platform designed to analyze product-level unit economics, profitability, and business scenarios.

The platform is being developed to help users understand the financial performance of individual products and businesses by adjusting pricing, cost assumptions, and other key financial variables. By combining an interactive frontend with a Python-based backend, EconStudio aims to provide a structured environment for analyzing profitability and supporting data-driven business decisions.

## 2. Features

- **Product-Level Economics**: Analyze the financial performance and profitability of individual products.
- **Editable Selling Price**: Adjust product selling prices to evaluate their impact on profitability.
- **Cost Assumptions**: Input and modify product cost assumptions.
- **Automatic Variable Cost Calculations**: Automatically calculate variable costs based on user-defined assumptions.
- **Contribution Profit Analysis**: Calculate contribution profit to understand how much revenue remains after variable costs.
- **Contribution Margin Calculations**: Evaluate contribution margins to assess product-level profitability.
- **Interactive Interface**: Modify financial assumptions through an interactive frontend.
- **Financial Modeling Foundation**: Establish a framework for future scenario analysis and business financial modeling.

## 3. Requirements/Dependencies

### Frontend

- **React**: For building the interactive user interface.
- **TypeScript**: For type-safe frontend development.
- **Vite**: For frontend development and build tooling.
- **CSS**: For application styling and layout.

### Backend

- **Python**: For backend development and financial calculations.
- **FastAPI**: For building backend APIs and connecting the frontend to the modeling engine.
- **Pandas**: For data manipulation and analysis.
- **NumPy**: For numerical computations and financial modeling.

### Installation

Backend dependencies can be installed using `pip`:

```bash
pip install -r requirements.txt
```
### Frontend Installation

Navigate to the frontend directory and install the required dependencies:

```bash
cd frontend
npm install
```

## 4. Project Structure

The current project structure is organized as follows:

```text
econstudio/
│
├── frontend/
│   └── src/
│
├── src/
│   ├── data_loader.py
│   ├── data_validation.py
│   ├── data_integration.py
│   └── economics.py
│
├── main.py
├── requirements.txt
└── README.md
```
### Core Backend Modules

- **data_loader.py**: Responsible for loading and preparing financial and product data.
- **data_validation.py**: Handles validation of incoming data and financial assumptions.
- **data_integration.py**: Supports the integration and organization of data across the application.
- **economics.py**: Contains the core economic calculations and modeling logic.
- **main.py**: Serves as the main backend application entry point.

## 5. Usage Instructions

EconStudio is currently in early development. The intended application workflow is:

1. **Launch the application**: Start the frontend and backend development servers.
2. **Enter Product Information**: Input relevant product information and financial assumptions.
3. **Adjust Selling Price**: Modify the product's selling price to evaluate different pricing scenarios.
4. **Define Cost Assumptions**: Enter or adjust variable cost assumptions.
5. **Analyze Profitability**: Review calculated contribution profit and contribution margin.
6. **Evaluate Scenarios**: Use the financial outputs to better understand product-level economics.

*Note: Usage instructions will be updated as additional functionality is implemented.*

## 6. Known Issues & Limitations

- **Early Development**: The platform is still under active development, and not all planned functionality is available.
- **Limited Modeling Capabilities**: Current functionality is focused primarily on foundational product-level economics.
- **Backend Integration**: The frontend and Python backend are still being developed and integrated.
- **Scenario Analysis**: More advanced financial scenario modeling has not yet been fully implemented.
- **Data Handling**: Data loading, validation, and integration capabilities are still being developed.

## 7. Future Enhancements

- **Multi-Product Analysis**: Expand the platform to support profitability analysis across multiple products.
- **Business-Level Financial Modeling**: Introduce broader business financial analysis beyond individual product economics.
- **Scenario Simulations**: Allow users to model different pricing, cost, and operational scenarios.
- **Break-Even Analysis**: Introduce break-even calculations to identify the sales volume required to cover fixed and variable costs.
- **Revenue and Profit Forecasting**: Develop forecasting capabilities to evaluate potential business performance.
- **Cost Structure Analysis**: Provide more detailed breakdowns of fixed and variable costs.
- **Data Visualization**: Introduce charts and visualizations to communicate financial performance and trends.
- **Export Capabilities**: Allow users to export financial models and analysis results.

## 8. Development Status

EconStudio is currently in **early development**.

Development is focused on establishing the core financial modeling engine, building the interactive frontend, and developing the backend infrastructure required to support more advanced business economics analysis.

The long-term goal is to evolve EconStudio into a comprehensive business economics environment that supports product profitability analysis, cost modeling, scenario simulations, and financial decision-making.


