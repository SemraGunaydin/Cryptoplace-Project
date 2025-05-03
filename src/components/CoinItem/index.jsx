import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const CoinItem = ({ item }) => {
  console.log(item);

  // Contect yapisi icerisinden currency buraya alma
  const { currency } = useContext(CoinContext);

  return (
    <Link 
    to={`/coin/${item.id}`}
    className="grid grid-cols-3 md:grid-cols-[0.5fr_2fr_1fr_1fr] p-4 items-center border-b border-[#333] hover:bg-[#1f1f1f] transition">
      {/* Rank */}
      <p>{item.market_cap_rank}</p>
      {/* Name & Image */}
      <div className="flex items-center gap-3">
        <img className="size-6" src={item.image} alt="coin-image" />
        <span className="font-semibold">{item.name}</span>
      </div>

      {/* Price */}
      <p className="text-center">
        {currency.symbol} {item.current_price}
      </p>

      {/* Change */}
      <p
        className={`hidden md:block text-right ${
          item.price_change_percentage_24h > 0
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {typeof item.price_change_percentage_24h === "number"
          ? Math.round(item.price_change_percentage_24h * 1000) / 1000
          : "N/A"}
      </p>
    </Link>
  );
};

export default CoinItem;
