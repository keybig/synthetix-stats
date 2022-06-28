import { getFeePeriods, getLatestRateById, getSNXHolders, getSynthetixById, getSynths } from "../subgraph-ovm";

// staking, apy, inflation

export const getInflation = async () => {
    const mainnet_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/mainnet-main"
    const optimism_url = "https://api.thegraph.com/subgraphs/name/synthetixio-team/optimism-main"


    //inflation

    const snxFeePeriods = async (network: string) => {
        const currentFeePeriods = await getFeePeriods(
            network,
            { orderBy: "startTime", orderDirection: "desc", first: 1000 },
            {
                feesClaimed: true,
                feesToDistribute: true,
                startTime: true,
                rewardsClaimed: true,
                rewardsToDistribute: true,
            }
        );

        const reward = currentFeePeriods[0].rewardsToDistribute.toNumber();

        const rewardsAmount = currentFeePeriods.reduce((sum: number, current) => {
            return sum + current.rewardsToDistribute.toNumber();
        }, 0);



        const inflationData = currentFeePeriods.slice(0, 7).map((item) => {
            const milli = new Date(item.startTime.toNumber() * 1000)
            const month = milli.getUTCMonth() + 1
            const day = milli.getUTCDay()
            const theDate = `${month}/${day}`

            return { 
                snx_rewards: item.rewardsToDistribute.toNumber(),
                date: theDate
            };
        }).reverse();


        // APY
        const fee = currentFeePeriods[0].feesToDistribute.toNumber();


        return {
            reward,
            rewardsAmount,
            inflationData,
            fee
        }

    }

    const ovmFeePeriod = await snxFeePeriods(optimism_url)
    const mainFeePeriod = await snxFeePeriods(mainnet_url)

    const rewardOvm = ovmFeePeriod.reward
    const rewardMain = mainFeePeriod.reward

    const rewardsAmountOvm = ovmFeePeriod.rewardsAmount
    const rewardsAmountMain = mainFeePeriod.rewardsAmount

    const inflationDataOvm = ovmFeePeriod.inflationData
    const inflationDataMain = mainFeePeriod.inflationData

    const feeOvm = ovmFeePeriod.fee
    const feeMain = mainFeePeriod.fee

    const inflateOvm = [
        {
            date: "date",
            reward: "reward"
        }
    ]

    const inflateMain = [
        {
            date: "date",
            reward: "reward"
        }
    ]

    const inflateAll = [
        {
            date: "date",
            reward: "reward"
        }
    ]





    return {
        rewardMain,
        rewardOvm,
        rewardsAmountMain,
        rewardsAmountOvm,
        inflationDataMain,
        inflationDataOvm

    }

}



