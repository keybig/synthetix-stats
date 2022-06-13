import { getTradeActivity } from "./getTradeActivity";

export const getTradeFee = async() => {
  
  const { currentEpochTradeData } = await getTradeActivity();
  const { tradeDataCall } = await getTradeActivity();

  const tradeFeeArr: any[] = [];

  
  //@ts-ignore
  //const currentEpochTime = startTime + 604800;

  // all time trade info

  tradeDataCall.data?.forEach((item) => {
    const obj = {
      name: item.id,
      value: item.usdFees.toNumber(),
    };
    tradeFeeArr.push(obj);
  });

  // current fee call

  const currentFeeDataArr: any[] = [];

  currentEpochTradeData.forEach((item) => {
    const obj = {
      name: item.partner,
      value: item.usdFees.toNumber(),
    };
    currentFeeDataArr.push(obj);
  });

  const currentFeeData = currentFeeDataArr.reduce((sum, cur) => {
    const { name, value } = cur;
    const item = sum.find((it: { name: string }) => it.name === name);
    item ? (item.value += value) : sum.push({ name, value });
    return sum;
  }, []);

  const totalFeeSum = currentEpochTradeData.reduce((sum, cur) => {
        return sum + cur.usdFees.toNumber();
      }, 0)


  const currentFeeSum = currentEpochTradeData.reduce((sum, cur) => {
        return sum + cur.usdFees.toNumber();
      }, 0)

  return {
    tradeFeeArr,
    currentFeeData,
    totalFeeSum,
    currentFeeSum,
  };
};


/*
{
            col1: 'Lyra',
            col2: '967,543,123',
            col3: '8,000,000,000'
          },
          {
            col1: 'Thales',
            col2: '132,765,432',
            col3: '1,000,000,000'
          },
          {
            col1: 'Kwenta',
            col2: '925,654,321',
            col3: '14,000,000,000'
          },
*/
