// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'

// ** Custom Components Imports
import CustomAvatar from '@core/components/mui/avatar'

function CardSupport() {
  return (
    <Card>
      <CardContent sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <CustomAvatar skin='light' sx={{ width: 56, height: 56, mb: 2 }}>
          <HelpCircleOutline sx={{ fontSize: '2rem' }} />
        </CustomAvatar>
        <Typography variant='h6' sx={{ mb: 2 }}>
          Support
        </Typography>
        <Typography variant='body2' sx={{ mb: 6.5 }}>
          According to us blisters are a very common thing and we come across them very often in our daily lives. It is
          a very common occurrence like cold or fever depending upon your lifestyle.
        </Typography>
        <Button variant='contained' sx={{ p: theme => theme.spacing(1.75, 5.5) }}>
          Contact Now
        </Button>
      </CardContent>
    </Card>
  )
}

export default CardSupport
