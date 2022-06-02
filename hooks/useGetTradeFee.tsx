import useSynthetixQueries from "@synthetixio/queries";
import useGetStake from "./useGetStake";
import useGetTradeActivity from "./useGetTradeActivity";

const useGetTradeFee = () => {
  const { subgraph } = useSynthetixQueries();
  const { startTime } = useGetStake();
  const { currentEpochTradeData } = useGetTradeActivity();
  const { tradeDataCall } = useGetTradeActivity();

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

  currentEpochTradeData?.data?.forEach((item) => {
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

  const totalFeeSum = currentEpochTradeData.isSuccess
    ? currentEpochTradeData.data?.reduce((sum, cur) => {
        return sum + cur.usdFees.toNumber();
      }, 0)
    : 0;

  const currentFeeSum = currentEpochTradeData.isSuccess
    ? currentEpochTradeData.data?.reduce((sum, cur) => {
        return sum + cur.usdFees.toNumber();
      }, 0)
    : 0;

  return {
    tradeFeeArr,
    currentFeeData,
    totalFeeSum,
    currentFeeSum,
  };
};

export default useGetTradeFee;

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
