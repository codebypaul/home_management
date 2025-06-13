import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// Forms
import IncomeForm from './forms/IncomeForm';
import InvestmentForm from './forms/InvestmentForm'
import SavingForm from './forms/SavingsForm'
import RecurringBillForm from './forms/RecurringBillForm'
import PurchaseForm from './forms/PurchaseForm'

function UncontrolledExample() {
  return (
    <Tabs
      defaultActiveKey="oneOff"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="income" title="Income">
        <IncomeForm />
      </Tab>
      <Tab eventKey="investment" title="Investment">
        <InvestmentForm />
      </Tab>
      <Tab eventKey="saving" title="Saving">
        <SavingForm />
      </Tab>
      <Tab eventKey="recurring" title="Recurring Bill">
        <RecurringBillForm />
      </Tab>
      <Tab eventKey="oneOff" title="One Off Purchase">
        <PurchaseForm />
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;