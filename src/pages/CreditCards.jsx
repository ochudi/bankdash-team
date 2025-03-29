
import AddCardForm from "../components/credit/AddCardForm";
import CardSettings from "../components/credit/CardSetting";

const CreditCards = () => {
  return (
    <div className="grid grid-cols-3 gap-6 p-6 bg-slate-50 justify-center">
      <AddCardForm />
      <CardSettings />
    </div>
  );
};

export default CreditCards;
