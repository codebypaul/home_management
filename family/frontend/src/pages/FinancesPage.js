import React from 'react';
// Components
import AllCollapseExample from '../components/ThisWeeksFinancialBreakdown';
function FinancesPage() {
  return (
    <div className="container mt-5">
      <h1>Finances</h1>
      <div className="row">
        <div className="col">
          <h1> This Weeks Finances </h1>
          <AllCollapseExample/>
        </div>
      </div>
    </div>
  );
}

export default FinancesPage;
