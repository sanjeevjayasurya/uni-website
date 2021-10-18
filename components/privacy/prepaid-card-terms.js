import { prepaidCard, rblAndSbm } from '../../contents'
import TandC from 'components/TandC'

export default function RBLTandC() {
  const { tabs, headerTitle, labels } = prepaidCard

  return (
    <TandC
      tabs={tabs}
      headerTitle={headerTitle}
      tabContent={rblAndSbm}
      labels={labels}
    />
  )
}
