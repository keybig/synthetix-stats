import useSynthetixQueries from "@synthetixio/queries";
import { useEffect, useState } from "react";

const useGetSNXrate = () => {
  const [snxRate, setSnxRate] = useState<number>(0);

  const snxRateCall = useSynthetixQueries().subgraph.useGetLatestRateById(
    { id: "SNX" },
    { rate: true }
  );

  useEffect(() => {
    if (snxRateCall.isSuccess) {
      const snxRate = snxRateCall.data.rate.toNumber();
      setSnxRate(snxRate);
    }
  }, [snxRateCall.isSuccess]);

  return {
    snxRate,
  };
};

export default useGetSNXrate;
