import { FaLock, FaCreditCard, FaGoogle, FaApple } from "react-icons/fa6";

const settings = [
  {
    icon: FaCreditCard,
    title: "Block Card",
    description: "Instantly block your card",
    bg: "bg-[#FFF5D9]",
    iconColor: "text-[#FFBB38]",
  },
  {
    icon: FaLock,
    title: "Change Pin Code",
    description: "Choose another pin code",
    bg: "bg-[#E7EDFF]",
    iconColor: "text-[#396AFF]",
  },
  {
    icon: FaGoogle,
    title: "Add to Google Pay",
    description: "Withdraw without any card",
    bg: "bg-[#FFE0EB]",
    iconColor: "text-[#FF82AC]",
  },
  {
    icon: FaApple,
    title: "Add to Apple Pay",
    description: "Withdraw without any card",
    bg: "bg-[#DCFAF8]",
    iconColor: "text-[#16DBCC]",
  },
  {
    icon: FaApple,
    title: "Add to Apple Store",
    description: "Withdraw without any card",
    bg: "bg-[#DCFAF8]",
    iconColor: "text-[#16DBCC]",
  },
];

const CardSettings = () => {
  return (
    <div className="bg-white p-6 rounded-2xl col-span-1 min-w-[325px] md:min-w-[231px] lg:min-w-[350px] max-w-[350px]">
      <h2 className="text-2xl font-bold text-[#333B69] mb-4">Card Setting</h2>
      <div className="space-y-4">
        {settings.map(
          ({ icon: Icon, title, description, bg, iconColor }, idx) => (
            <div key={idx} className="flex items-center p-4 rounded-lg">
              <div className={`p-[18px] rounded-[20px] bg-white ${bg}`}>
                <Icon size={24} className={`${iconColor}`} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-[500] text-[#232323]">{title}</h3>
                <p className="text-[#718EBF] font-normal text-sm">{description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CardSettings;
