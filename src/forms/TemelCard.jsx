// BaseCard.js
import Card from '@mui/material/Card'

import CardContent from '@mui/material/CardContent'

const TemelCard = ({ children }) => {
  return (
    <Card>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export default TemelCard
