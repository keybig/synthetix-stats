import useGetBlock from "./useGetBlock";
import useSynthetixQueries from "@synthetixio/queries";
import {formatMoney} from '../constants/format'
import useGetTime from './useGetTime'



const useGetTVL = () => {

    const { subgraph } = useSynthetixQueries()
    const { blockNum } = useGetBlock()
    const { weekBlockNum } = useGetBlock()
    const { monthBlockNum } = useGetBlock()
    const { times } = useGetTime()

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

    const totalIssuedSynth = formatMoney.format(tvlBal[0])

    //////////////////

    const currentDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:blockNum[0]}},
      { totalIssuedSynths:true},
      {enabled: Boolean(blockNum[0])}

    )
  
    const fourHourAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:blockNum[1]}},
      { totalIssuedSynths:true},
      {enabled: Boolean(blockNum[1])}

    )
  
    const eightHourAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:blockNum[2]}},
      { totalIssuedSynths:true},
      {enabled: Boolean(blockNum[2])}

    )
  
    const twelveHourAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:blockNum[3]}},
      { totalIssuedSynths:true},
      {enabled: Boolean(blockNum[3])}

    )
  
    const sixteenHourAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:blockNum[4]}},
      { totalIssuedSynths:true},
      {enabled: Boolean(blockNum[4])}

    )
  
    const twentyHourAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:blockNum[5]}},
      { totalIssuedSynths:true},
      {enabled: Boolean(blockNum[5])}

    )
  
    const twentyFourHourAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:blockNum[6]}},
      { totalIssuedSynths:true},
      {enabled: Boolean(blockNum[6])}

    )

    //week, already have current and one day ago(24hourago), start at day 2

    const twoDayAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:weekBlockNum[0]}},
      { totalIssuedSynths:true},
      {enabled: Boolean(weekBlockNum[0])}

    )

    const threeDayAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:weekBlockNum[1]}},
      { totalIssuedSynths:true},
      {enabled: Boolean(weekBlockNum[1])}

    )

    const fourDayAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:weekBlockNum[2]}},
      { totalIssuedSynths:true},
      {enabled: Boolean(weekBlockNum[2])}

    )

    const fiveDayAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:weekBlockNum[3]}},
      { totalIssuedSynths:true},
      {enabled: Boolean(weekBlockNum[3])}

    )

    const sixDayAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:weekBlockNum[4]}},
      { totalIssuedSynths:true},
      {enabled: Boolean(weekBlockNum[4])}

    )

    // month, start at day 10

    const tenDayAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:monthBlockNum[0]}},
      { totalIssuedSynths:true},
      {enabled: Boolean(monthBlockNum[0])}

    )

    const fifteenDayAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:monthBlockNum[1]}},
      { totalIssuedSynths:true},
      {enabled: Boolean(monthBlockNum[1])}

    )

    const twentyDayAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:monthBlockNum[2]}},
      { totalIssuedSynths:true},
      {enabled: Boolean(monthBlockNum[2])}

    )

    const twentyFiveDayAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:monthBlockNum[3]}},
      { totalIssuedSynths:true},
      {enabled: Boolean(monthBlockNum[3])}

    )

    const thirtyDayAgoDebtCall = subgraph.useGetDebtStates(
      { orderBy:"timestamp", orderDirection:"desc", first:1, block:{number:monthBlockNum[4]}},
      { totalIssuedSynths:true},
      {enabled: Boolean(monthBlockNum[4])}

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
      {block:{number:blockNum[0]}},
      {amountInUSD:true},
      {enabled: Boolean(blockNum[0])}

    )

    const currentWrapperArr:number[]=[]

    currentWrapperCall.data?.forEach(item =>{
      currentWrapperArr.push(item.amountInUSD.toNumber())
      tvlBal.push(item.amountInUSD.toNumber())
    })

    const currentWrapperVal = currentWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    dayWrappers.push(currentWrapperVal)

    //4 hour wrapper

    const fourHourWrapperCall = subgraph.useGetWrappers(
      {block:{number:blockNum[1]}},
      {amountInUSD:true},
      {enabled: Boolean(blockNum[1])}

    )
    const fourHourWrapperArr:number[]=[]

    fourHourWrapperCall.data?.forEach(item =>{
      fourHourWrapperArr.push(item.amountInUSD.toNumber())
    })

    const fourHourWrapperVal = fourHourWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    dayWrappers.push(fourHourWrapperVal)

    //8 hour wrapper

    const eightHourWrapperCall = subgraph.useGetWrappers(
      {block:{number:blockNum[2]}},
      {amountInUSD:true},
      {enabled: Boolean(blockNum[2])}

    )
    const eightHourWrapperArr:number[]=[]

    eightHourWrapperCall.data?.forEach(item =>{
      eightHourWrapperArr.push(item.amountInUSD.toNumber())
    })

    const eightHourWrapperVal = fourHourWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    dayWrappers.push(eightHourWrapperVal)

    //twelve hour

    const twelveHourWrapperCall = subgraph.useGetWrappers(
      {block:{number:blockNum[3]}},
      {amountInUSD:true},
      {enabled: Boolean(blockNum[3])}

    )
    const twelveHourWrapperArr:number[]=[]

    twelveHourWrapperCall.data?.forEach(item =>{
      twelveHourWrapperArr.push(item.amountInUSD.toNumber())
    })

    const twelveHourWrapperVal = twelveHourWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    dayWrappers.push(twelveHourWrapperVal)

    //sixteen

    const sixteenHourWrapperCall = subgraph.useGetWrappers(
      {block:{number:blockNum[4]}},
      {amountInUSD:true},
      {enabled: Boolean(blockNum[4])}

    )
    const sixteenHourWrapperArr:number[]=[]

    sixteenHourWrapperCall.data?.forEach(item =>{
      sixteenHourWrapperArr.push(item.amountInUSD.toNumber())
    })

    const sixteenHourWrapperVal = sixteenHourWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    dayWrappers.push(sixteenHourWrapperVal)

    //twenty

    const twentyHourWrapperCall = subgraph.useGetWrappers(
      {block:{number:blockNum[5]}},
      {amountInUSD:true},
      {enabled: Boolean(blockNum[5])}

    )
    const twentyHourWrapperArr:number[]=[]

    twentyHourWrapperCall.data?.forEach(item =>{
      twentyHourWrapperArr.push(item.amountInUSD.toNumber())
    })

    const twentyHourWrapperVal = twentyHourWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    dayWrappers.push(twentyHourWrapperVal)

    //24 hour

    const twentyFourHourWrapperCall = subgraph.useGetWrappers(
      {block:{number:blockNum[6]}},
      {amountInUSD:true},
      {enabled: Boolean(blockNum[6])}

    )
    const twentyFourHourWrapperArr:number[]=[]

    twentyFourHourWrapperCall.data?.forEach(item =>{
      twentyFourHourWrapperArr.push(item.amountInUSD.toNumber())
    })

    const twentyFourHourWrapperVal = twentyFourHourWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    dayWrappers.push(twentyFourHourWrapperVal)

    //2 day


    const twoDayWrapperCall = subgraph.useGetWrappers(
      {block:{number:weekBlockNum[0]}},
      {amountInUSD:true},
      {enabled: Boolean(weekBlockNum[0])}

    )
    const twoDayWrapperArr:number[]=[]

    twoDayWrapperCall.data?.forEach(item =>{
      twoDayWrapperArr.push(item.amountInUSD.toNumber())
    })

    const twoDayWrapperVal = twoDayWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    weekWrappers.push(twoDayWrapperVal)

    // 3 day

    const threeDayWrapperCall = subgraph.useGetWrappers(
      {block:{number:weekBlockNum[1]}},
      {amountInUSD:true},
      {enabled: Boolean(weekBlockNum[1])}

    )
    const threeDayWrapperArr:number[]=[]

    threeDayWrapperCall.data?.forEach(item =>{
      threeDayWrapperArr.push(item.amountInUSD.toNumber())
    })

    const threeDayWrapperVal = threeDayWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    weekWrappers.push(threeDayWrapperVal)

    // 4 day

    const fourDayWrapperCall = subgraph.useGetWrappers(
      {block:{number:weekBlockNum[2]}},
      {amountInUSD:true},
      {enabled: Boolean(weekBlockNum[2])}

    )
    const fourDayWrapperArr:number[]=[]

    fourDayWrapperCall.data?.forEach(item =>{
      fourDayWrapperArr.push(item.amountInUSD.toNumber())
    })

    const fourDayWrapperVal = fourDayWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    weekWrappers.push(fourDayWrapperVal)

    // 5 day

    const fiveDayWrapperCall = subgraph.useGetWrappers(
      {block:{number:weekBlockNum[3]}},
      {amountInUSD:true},
      {enabled: Boolean(weekBlockNum[3])}

    )
    const fiveDayWrapperArr:number[]=[]

    fiveDayWrapperCall.data?.forEach(item =>{
      fiveDayWrapperArr.push(item.amountInUSD.toNumber())
    })

    const fiveDayWrapperVal = fiveDayWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    weekWrappers.push(fiveDayWrapperVal)

    // 6 day

    const sixDayWrapperCall = subgraph.useGetWrappers(
      {block:{number:weekBlockNum[4]}},
      {amountInUSD:true},
      {enabled: Boolean(weekBlockNum[4])}

    )
    const sixDayWrapperArr:number[]=[]

    sixDayWrapperCall.data?.forEach(item =>{
      sixDayWrapperArr.push(item.amountInUSD.toNumber())
    })

    const sixDayWrapperVal = sixDayWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    weekWrappers.push(sixDayWrapperVal)

    // 10 day

    const tenDayWrapperCall = subgraph.useGetWrappers(
      {block:{number:monthBlockNum[0]}},
      {amountInUSD:true},
      {enabled: Boolean(monthBlockNum[0])}

    )
    const tenDayWrapperArr:number[]=[]

    tenDayWrapperCall.data?.forEach(item =>{
      tenDayWrapperArr.push(item.amountInUSD.toNumber())
    })


    const tenDayWrapperVal = tenDayWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    monthWrappers.push(tenDayWrapperVal)

    // 15 day

    const fifteenDayWrapperCall = subgraph.useGetWrappers(
      {block:{number:monthBlockNum[1]}},
      {amountInUSD:true},
      {enabled: Boolean(monthBlockNum[1])}

    )
    const fifteenDayWrapperArr:number[]=[]

    fifteenDayWrapperCall.data?.forEach(item =>{
      fifteenDayWrapperArr.push(item.amountInUSD.toNumber())
    })

    const fifteenDayWrapperVal = twoDayWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    monthWrappers.push(fifteenDayWrapperVal)

    // 20 day

    const twentyDayWrapperCall = subgraph.useGetWrappers(
      {block:{number:monthBlockNum[2]}},
      {amountInUSD:true},
      {enabled: Boolean(monthBlockNum[2])}

    )
    const twentyDayWrapperArr:number[]=[]

    twentyDayWrapperCall.data?.forEach(item =>{
      twentyDayWrapperArr.push(item.amountInUSD.toNumber())
    })

    const twentyDayWrapperVal = tenDayWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    monthWrappers.push(twentyDayWrapperVal)

    // 25 day

    const twentyFiveDayWrapperCall = subgraph.useGetWrappers(
      {block:{number:monthBlockNum[3]}},
      {amountInUSD:true},
      {enabled: Boolean(monthBlockNum[3])}

    )
    const twentyFiveDayWrapperArr:number[]=[]

    twentyFiveDayWrapperCall.data?.forEach(item =>{
      twentyFiveDayWrapperArr.push(item.amountInUSD.toNumber())
    })

    const twentyFiveDayWrapperVal = twentyFiveDayWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    monthWrappers.push(twentyFiveDayWrapperVal)

    // 30 day

    const thirtyDayWrapperCall = subgraph.useGetWrappers(
      {block:{number:monthBlockNum[4]}},
      {amountInUSD:true},
      {enabled: Boolean(monthBlockNum[4])}

    )
    const thirtyDayWrapperArr:number[]=[]

    thirtyDayWrapperCall.data?.forEach(item =>{
      thirtyDayWrapperArr.push(item.amountInUSD.toNumber())
    })

    const thirtyDayWrapperVal = thirtyDayWrapperArr.reduce((sum:number, current:number) => sum + current, 0)
    monthWrappers.push(thirtyDayWrapperVal)



    const wrapperTotalVal = formatMoney.format(currentWrapperVal)

    //clean this file up

    const totalBalAmt = tvlBal.reduce((sum:number, current:number) => sum + current, 0)
    const totalWrapperBal = wrapperBal.reduce((sum:number, current:number) => sum + current, 0)

    const totalBal = formatMoney.format(totalBalAmt)

    
  return {
    dayTvlBal,
    weekTvlBal,
    monthTvlBal,
    dayWrappers,
    weekWrappers,
    monthWrappers,
    totalBal,
    wrapperTotalVal,
    totalIssuedSynth
  }
}

export default useGetTVL