import useGetBlock from "./useGetBlock";
import useSynthetixQueries from "@synthetixio/queries";


type Props = {}

const useGetTVL = () => {

    const { subgraph } = useSynthetixQueries()
    const { blockNum } = useGetBlock()
    const { weekBlockNum } = useGetBlock()
    const { monthBlockNum } = useGetBlock()

    const tvlBal:number[] = []
    const wrapperBal:number[] = []

    const dayTvlBal:number[] = []
    const weekTvlBal:number[] = []
    const monthTvlBal:number[] = []


    const debtCall = subgraph.useGetDebtStates(
      {orderBy:"timestamp", orderDirection:"desc", first:1},
      {totalIssuedSynths:true}
    )

    debtCall.data?.forEach(item=>{
      tvlBal.push(item.totalIssuedSynths.toNumber())
    })

    //////////////////

    const currentDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:blockNum[0]}},
      { totalIssuedSynths:true}
    )
  
    const fourHourAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:blockNum[1]}},
      { totalIssuedSynths:true}
    )
  
    const eightHourAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:blockNum[2]}},
      { totalIssuedSynths:true}
    )
  
    const twelveHourAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:blockNum[3]}},
      { totalIssuedSynths:true}
    )
  
    const sixteenHourAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:blockNum[4]}},
      { totalIssuedSynths:true}
    )
  
    const twentyHourAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:blockNum[5]}},
      { totalIssuedSynths:true}
    )
  
    const twentyFourHourAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:blockNum[6]}},
      { totalIssuedSynths:true}
    )

    //week, already have current and one day ago(24hourago), start at day 2

    const twoDayAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:weekBlockNum[0]}},
      { totalIssuedSynths:true}
    )

    const threeDayAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:weekBlockNum[1]}},
      { totalIssuedSynths:true}
    )

    const fourDayAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:weekBlockNum[2]}},
      { totalIssuedSynths:true}
    )

    const fiveDayAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:weekBlockNum[3]}},
      { totalIssuedSynths:true}
    )

    const sixDayAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:weekBlockNum[4]}},
      { totalIssuedSynths:true}
    )

    // month, start at day 10

    const tenDayAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:monthBlockNum[0]}},
      { totalIssuedSynths:true}
    )

    const fifteenDayAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:monthBlockNum[1]}},
      { totalIssuedSynths:true}
    )

    const twentyDayAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:monthBlockNum[2]}},
      { totalIssuedSynths:true}
    )

    const twentyFiveDayAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:monthBlockNum[3]}},
      { totalIssuedSynths:true}
    )

    const thirtyDayAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:monthBlockNum[4]}},
      { totalIssuedSynths:true}
    )

      currentDebtCall.data?.forEach(item=>{
        dayTvlBal.push(item.totalIssuedSynths.toNumber())
      })

      fourHourAgoDebtCall.data?.forEach(item=>{
        dayTvlBal.push(item.totalIssuedSynths.toNumber())
      })

      eightHourAgoDebtCall.data?.forEach(item=>{
        dayTvlBal.push(item.totalIssuedSynths.toNumber())
      })

      twelveHourAgoDebtCall.data?.forEach(item=>{
        dayTvlBal.push(item.totalIssuedSynths.toNumber())
      })

      sixteenHourAgoDebtCall.data?.forEach(item=>{
        dayTvlBal.push(item.totalIssuedSynths.toNumber())
      })

      twentyHourAgoDebtCall.data?.forEach(item=>{
        dayTvlBal.push(item.totalIssuedSynths.toNumber())
      })

      twentyFourHourAgoDebtCall.data?.forEach(item=>{
        dayTvlBal.push(item.totalIssuedSynths.toNumber())
      })

      twoDayAgoDebtCall.data?.forEach(item=>{
        weekTvlBal.push(item.totalIssuedSynths.toNumber())
      })

      threeDayAgoDebtCall.data?.forEach(item=>{
        weekTvlBal.push(item.totalIssuedSynths.toNumber())
      })

      fourDayAgoDebtCall.data?.forEach(item=>{
        weekTvlBal.push(item.totalIssuedSynths.toNumber())
      })

      fiveDayAgoDebtCall.data?.forEach(item=>{
        weekTvlBal.push(item.totalIssuedSynths.toNumber())
      })

      sixDayAgoDebtCall.data?.forEach(item=>{
        weekTvlBal.push(item.totalIssuedSynths.toNumber())
      })

      tenDayAgoDebtCall.data?.forEach(item=>{
        monthTvlBal.push(item.totalIssuedSynths.toNumber())
      })

      fifteenDayAgoDebtCall.data?.forEach(item=>{
        monthTvlBal.push(item.totalIssuedSynths.toNumber())
      })

      twentyDayAgoDebtCall.data?.forEach(item=>{
        monthTvlBal.push(item.totalIssuedSynths.toNumber())
      })

      twentyFiveDayAgoDebtCall.data?.forEach(item=>{
        monthTvlBal.push(item.totalIssuedSynths.toNumber())
      })

      thirtyDayAgoDebtCall.data?.forEach(item=>{
        monthTvlBal.push(item.totalIssuedSynths.toNumber())
      })

      //wrappers

      const dayWrappers:number[]=[]
      const weekWrappers:number[]=[]
      const monthWrappers:number[]=[]

    //current wrapper

    const currentWrapperCall = subgraph.useGetWrappers(
      {first:3, block:{number:blockNum[0]}},
      {amountInUSD:true}
    )

    const currentWrapperArr:number[]=[]

    currentWrapperCall.data?.forEach(item =>{
      currentWrapperArr.push(item.amountInUSD.toNumber())
    })

    const currentWrapperVal = currentWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    dayWrappers.push(currentWrapperVal)

    //4 hour wrapper

    const fourHourWrapperCall = subgraph.useGetWrappers(
      {first:3, block:{number:blockNum[1]}},
      {amountInUSD:true}
    )
    const fourHourWrapperArr:number[]=[]

    fourHourWrapperCall.data?.forEach(item =>{
      fourHourWrapperArr.push(item.amountInUSD.toNumber())
    })

    const fourHourWrapperVal = fourHourWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    dayWrappers.push(fourHourWrapperVal)

    //8 hour wrapper

    const eightHourWrapperCall = subgraph.useGetWrappers(
      {first:3, block:{number:blockNum[2]}},
      {amountInUSD:true}
    )
    const eightHourWrapperArr:number[]=[]

    eightHourWrapperCall.data?.forEach(item =>{
      eightHourWrapperArr.push(item.amountInUSD.toNumber())
    })

    const eightHourWrapperVal = fourHourWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    dayWrappers.push(fourHourWrapperVal)

    //twelve hour

    const twelveHourWrapperCall = subgraph.useGetWrappers(
      {first:3, block:{number:blockNum[3]}},
      {amountInUSD:true}
    )
    const twelveHourWrapperArr:number[]=[]

    twelveHourWrapperCall.data?.forEach(item =>{
      twelveHourWrapperArr.push(item.amountInUSD.toNumber())
    })

    const twelveHourWrapperVal = twelveHourWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    dayWrappers.push(twelveHourWrapperVal)

    //sixteen

    const sixteenHourWrapperCall = subgraph.useGetWrappers(
      {first:3, block:{number:blockNum[4]}},
      {amountInUSD:true}
    )
    const sixteenHourWrapperArr:number[]=[]

    sixteenHourWrapperCall.data?.forEach(item =>{
      sixteenHourWrapperArr.push(item.amountInUSD.toNumber())
    })

    const sixteenHourWrapperVal = sixteenHourWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    dayWrappers.push(sixteenHourWrapperVal)

    //twenty

    const twentyHourWrapperCall = subgraph.useGetWrappers(
      {first:3, block:{number:blockNum[5]}},
      {amountInUSD:true}
    )
    const twentyHourWrapperArr:number[]=[]

    twentyHourWrapperCall.data?.forEach(item =>{
      twentyHourWrapperArr.push(item.amountInUSD.toNumber())
    })

    const twentyHourWrapperVal = twentyHourWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    dayWrappers.push(twentyHourWrapperVal)

    //24 hour

    const twentyFourHourWrapperCall = subgraph.useGetWrappers(
      {first:3, block:{number:blockNum[6]}},
      {amountInUSD:true}
    )
    const twentyFourHourWrapperArr:number[]=[]

    twentyFourHourWrapperCall.data?.forEach(item =>{
      twentyFourHourWrapperArr.push(item.amountInUSD.toNumber())
    })

    const twentyFourHourWrapperVal = twentyFourHourWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    dayWrappers.push(twentyFourHourWrapperVal)

    //2 day


    const twoDayWrapperCall = subgraph.useGetWrappers(
      {first:3, block:{number:weekBlockNum[0]}},
      {amountInUSD:true}
    )
    const twoDayWrapperArr:number[]=[]

    twoDayWrapperCall.data?.forEach(item =>{
      twoDayWrapperArr.push(item.amountInUSD.toNumber())
    })

    const twoDayWrapperVal = twoDayWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    weekWrappers.push(twoDayWrapperVal)

    // 3 day

    const threeDayWrapperCall = subgraph.useGetWrappers(
      {first:3, block:{number:weekBlockNum[1]}},
      {amountInUSD:true}
    )
    const threeDayWrapperArr:number[]=[]

    threeDayWrapperCall.data?.forEach(item =>{
      threeDayWrapperArr.push(item.amountInUSD.toNumber())
    })

    const threeDayWrapperVal = threeDayWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    weekWrappers.push(threeDayWrapperVal)

    // 4 day

    const fourDayWrapperCall = subgraph.useGetWrappers(
      {first:3, block:{number:weekBlockNum[2]}},
      {amountInUSD:true}
    )
    const fourDayWrapperArr:number[]=[]

    fourDayWrapperCall.data?.forEach(item =>{
      fourDayWrapperArr.push(item.amountInUSD.toNumber())
    })

    const fourDayWrapperVal = fourDayWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    weekWrappers.push(fourDayWrapperVal)

    // 5 day

    const fiveDayWrapperCall = subgraph.useGetWrappers(
      {first:3, block:{number:weekBlockNum[3]}},
      {amountInUSD:true}
    )
    const fiveDayWrapperArr:number[]=[]

    fiveDayWrapperCall.data?.forEach(item =>{
      fiveDayWrapperArr.push(item.amountInUSD.toNumber())
    })

    const fiveDayWrapperVal = fiveDayWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    weekWrappers.push(fiveDayWrapperVal)

    // 6 day

    const sixDayWrapperCall = subgraph.useGetWrappers(
      {first:3, block:{number:weekBlockNum[4]}},
      {amountInUSD:true}
    )
    const sixDayWrapperArr:number[]=[]

    sixDayWrapperCall.data?.forEach(item =>{
      sixDayWrapperArr.push(item.amountInUSD.toNumber())
    })

    const sixDayWrapperVal = sixDayWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    weekWrappers.push(sixDayWrapperVal)

    // 10 day

    const tenDayWrapperCall = subgraph.useGetWrappers(
      {first:3, block:{number:monthBlockNum[0]}},
      {amountInUSD:true}
    )
    const tenDayWrapperArr:number[]=[]

    tenDayWrapperCall.data?.forEach(item =>{
      tenDayWrapperArr.push(item.amountInUSD.toNumber())
    })

    const tenDayWrapperVal = tenDayWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    monthWrappers.push(tenDayWrapperVal)

    // 15 day

    const fifteenDayWrapperCall = subgraph.useGetWrappers(
      {first:3, block:{number:monthBlockNum[1]}},
      {amountInUSD:true}
    )
    const fifteenDayWrapperArr:number[]=[]

    fifteenDayWrapperCall.data?.forEach(item =>{
      fifteenDayWrapperArr.push(item.amountInUSD.toNumber())
    })

    const fifteenDayWrapperVal = twoDayWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    monthWrappers.push(fifteenDayWrapperVal)

    // 20 day

    const twentyDayWrapperCall = subgraph.useGetWrappers(
      {first:3, block:{number:monthBlockNum[2]}},
      {amountInUSD:true}
    )
    const twentyDayWrapperArr:number[]=[]

    twentyDayWrapperCall.data?.forEach(item =>{
      tenDayWrapperArr.push(item.amountInUSD.toNumber())
    })

    const twentyDayWrapperVal = tenDayWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    monthWrappers.push(twentyDayWrapperVal)

    // 25 day

    const twentyFiveDayWrapperCall = subgraph.useGetWrappers(
      {first:3, block:{number:monthBlockNum[0]}},
      {amountInUSD:true}
    )
    const twentyFiveDayWrapperArr:number[]=[]

    twentyFiveDayWrapperCall.data?.forEach(item =>{
      twentyFiveDayWrapperArr.push(item.amountInUSD.toNumber())
    })

    const twentyFiveDayWrapperVal = twentyFiveDayWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    monthWrappers.push(twentyFiveDayWrapperVal)

    // 30 day

    const thirtyDayWrapperCall = subgraph.useGetWrappers(
      {first:3, block:{number:monthBlockNum[0]}},
      {amountInUSD:true}
    )
    const thirtyDayWrapperArr:number[]=[]

    thirtyDayWrapperCall.data?.forEach(item =>{
      thirtyDayWrapperArr.push(item.amountInUSD.toNumber())
    })

    const thirtyDayWrapperVal = thirtyDayWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    monthWrappers.push(thirtyDayWrapperVal)




    const totalBal = tvlBal.reduce((sum:number, current:number) => sum + current, 0)
    const totalWrapperBal = wrapperBal.reduce((sum:number, current:number) => sum + current, 0)

    console.log(JSON.stringify(dayWrappers))


    const formatMoney = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
  });
  return {
    dayTvlBal,
    weekTvlBal,
    monthTvlBal,
    dayWrappers,
    weekWrappers,
    monthWrappers
  }
}

export default useGetTVL