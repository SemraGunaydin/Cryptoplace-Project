import { createContext, useEffect, useState } from "react";
import api from "../utils/api"

const CoinContext = createContext ();
const CoinContextProvider = ({children}) => {

  // State'lerin kullanimi
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] =useState({
    name:"usd",
    symbol:"$",
  });
  // Api den coin'leri alan fonksiyon
  const FetchAllCoin =() =>{
    api
    .get('/coins/markets', {params: { vs_currency : currency.name}})
    .then((res) => setAllCoin(res.data))
     .catch((err) => {
      alert("coin verilerini alirken bir hata olustu",err);
     });

  };

  useEffect(()=> {
    FetchAllCoin();
  }, [currency]);

  


  const contextValue = {currency, allCoin, setCurrency};
    
  return (
    <CoinContext.Provider value={contextValue}>
      {children}
      </CoinContext.Provider>
  );
};

export { CoinContextProvider, CoinContext};