import {useState} from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import {styled} from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

import AccountOutline from 'mdi-material-ui/AccountOutline'

// ** Demo Tabs Imports
import TabAccount from './TabAccount'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const Tab = styled(MuiTab)(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({theme}) => ({
  lineHeight: 1.71,
  marginLeft: theme.spacing(2.5),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

function AccountSettings() {
  // ** State
  const [value, setValue] = useState('account')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='account-settings tabs'
          sx={{borderBottom: theme => `1px solid ${theme.palette.divider}`}}
        >
          <Tab
            value='account'
            label={
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                <AccountOutline sx={{fontSize: '1.125rem'}}/>
                <TabName>تنظیمات هاب</TabName>
              </Box>
            }
          />


        </TabList>

        <TabPanel sx={{p: 0}} value='account'>
          <TabAccount/>
        </TabPanel>

      </TabContext>
    </Card>
  )
}

AccountSettings.acl =
  {
    action: 'read',
    subject: 'every-page'
  }

export default AccountSettings
