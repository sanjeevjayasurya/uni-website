import { privacy, tabContent } from '../../contents'
import TandC from 'components/TandC'

export default function PrivacyPolicy() {
  const { tabs, headerTitle, labels } = privacy
  return (
    <TandC
      tabs={tabs}
      headerTitle={headerTitle}
      tabContent={tabContent}
      labels={labels}
    />
  )
}
