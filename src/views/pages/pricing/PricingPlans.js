// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import PlanDetails from '@core/components/plan-details'

function PricingPlans(props) {
  // ** Props
  const { plan, data } = props

  const renderPlan = () =>
    data?.pricingPlans.map(item => (
      <Grid item xs={12} md={4} key={item.title.toLowerCase()}>
        <PlanDetails plan={plan} data={item} />
      </Grid>
    ))

  return (
    <Grid container spacing={6}>
      {renderPlan()}
    </Grid>
  )
}

export default PricingPlans
