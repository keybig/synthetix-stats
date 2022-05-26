import styles from './SnxStaked.module.css'
import useSynthetixQueries, { createQueryContext, SynthetixQueryContextProvider } from '@synthetixio/queries'
import Wei from '@synthetixio/wei'
import useGetGlobalStake from '../../../hooks/useGetGlobalStake'


type Props = {}

const SnxStaked = (props: Props) => {

  const { subgraph } = useSynthetixQueries()

  const totalofSNX = subgraph.useGetSynthetixById(
    {id: "1"},
    {issuers:true, snxHolders:true}
  )

  const snxRate = subgraph.useGetLatestRateById(
    {id: "SNX"},
    {rate:true}
  )

  const snxPrice = snxRate?.data?.rate.toNumber()
  
  const totalStaked = totalofSNX?.data?.issuers.toNumber()
  
  const totalHolder = totalofSNX?.data?.snxHolders.toNumber()
  
  const formatValue = Intl.NumberFormat("en-US")
  const formatMoney = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

  const bal:any = []
 

  const totalSnxHolders = subgraph.useGetSNXHolders(
    {orderBy:'balanceOf',orderDirection:"desc", first:totalHolder},
    { timestamp:true, balanceOf:true},
  )

  totalSnxHolders.data?.forEach(item => {
    for (let key in item) {
       key === "balanceOf" ? 
        bal.push(item[key]?.toNumber()) : 
        null
    }
  });

  const totalBal = bal.reduce((sum:number, current:number) => sum + current, 0)


  const allStaked = subgraph.useGetSNXHolders(
    {where:{initialDebtOwnership_not:0},orderBy:'collateral',orderDirection:"desc",first:8000},
    { collateral:true, transferable:true, balanceOf:true},
  )

  const collat:any = []
  const transfer:any = []


  allStaked.data?.forEach(item => {
    for (let key in item) {
       key === "collateral" ? 
        collat.push(item[key]?.toNumber()) : 
        key === "transferable" ? transfer.push(item[key]?.toNumber()) : 
        null
    }
  });

  const stakeCalc = (collat.reduce((sum:number, current:number) => sum + current, 0))-(transfer.reduce((sum:number, current:number) => sum + current, 0))


  const stakeAmount:any = stakeCalc.toFixed(2)
  //@ts-ignore
  const stakedVal = stakeAmount * snxPrice

  return (
    <div className={styles.snxStaked}>
     
    <h3 className={styles.title}>SNX Staked</h3>
    <p className={styles.percentAPY}>{`${(stakeAmount / totalBal).toFixed(2).substring(2)}%`}</p>
    <h3 className={styles.secondaryHeading}>Total SNX Staked</h3>
    <p className={styles.values}>
      {
        formatValue.format(stakeAmount)
      }
    </p>
    <h3 className={styles.secondaryHeading}>Staked Value</h3>
    <p className={styles.values}>
      {
        formatMoney.format(stakedVal)
      }
    </p>
  
   
</div>
  )
}

export default SnxStaked