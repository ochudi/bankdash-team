

import { Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Transactions from "./pages/Transactions"
import Home from "./pages/Home"
import Accounts from "./pages/Accounts"
import Investments from "./pages/Investments"
import CreditCards from "./pages/CreditCards"
import Services from "./pages/Services"
import Setting from "./pages/Setting"
import Loans from "./pages/Loans"
import Privileges from "./pages/Privileges"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="transactions" element={<Transactions />}/>
          <Route path="accounts" element={<Accounts />}/>
          <Route path="investments" element={<Investments />}/>
          <Route path="credit_cards" element={<CreditCards />}/>
          <Route path="loans" element={<Loans />}/>
          <Route path="services" element={<Services />}/>
          <Route path="setting" element={<Setting />}/>
          <Route path="privileges" element={<Privileges />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
