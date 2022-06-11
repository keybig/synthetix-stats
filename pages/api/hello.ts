// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import useSynthetixQueries from '@synthetixio/queries';
import { TotalActiveStakerResult } from '@synthetixio/queries/build/node/generated/mainSubgraphQueries';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string;
  value: number | Pick<TotalActiveStakerResult, keyof TotalActiveStakerResult>[] | undefined
  data: Pick<TotalActiveStakerResult, keyof TotalActiveStakerResult>[] | undefined
}


const { subgraph } = useSynthetixQueries()

  const currentStakerCall = subgraph.useGetTotalActiveStakers(
    { first: 1 },
    { count: true },
  );

    const {data} = currentStakerCall

    const test = currentStakerCall.data?.filter(item => item.count.toNumber())
  
  



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe Money Bags', value: test, data:data })
}
