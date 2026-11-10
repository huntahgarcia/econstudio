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
