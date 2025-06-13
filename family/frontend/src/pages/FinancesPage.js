import React from 'react';
// Components
import AllCollapseExample from '../components/ThisWeeksFinancialBreakdown';

// Forms
import UncontrolledExample from '../components/FinancialForms'
// import 

function FinancesPage() {
  return (
    <div className="container mt-5">

      <h1 className="text-center">Finances</h1>

      <div className="row">
        <div className="col">
          <h1> This Weeks Finances </h1>
          <AllCollapseExample/>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h1 className="text-center"> Forms </h1>
          <UncontrolledExample/>
        </div>
      </div>

    </div>
  );
}

export default FinancesPage;
