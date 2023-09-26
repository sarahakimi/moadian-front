import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { styled } from '@mui/material/styles'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector'
import Check from '@mui/icons-material/Check'

const steps = ['ارسال اطلاعات اولیه', 'تایید و اصلاح فایل های ارسالی', 'ثبت سامانه مودیان']

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)'
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'rgb(51, 202, 202)'
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'rgb(51, 202, 202)'
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1
  }
}))

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: 'rgb(51, 202, 202)'
  }),
  '& .QontoStepIcon-completedIcon': {
    color: 'rgb(51, 202, 202)',
    zIndex: 1,
    fontSize: 18
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor'
  }
}))
function QontoStepIcon(props) {
  const { active, completed, className } = props

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? <Check className='QontoStepIcon-completedIcon' /> : <div className='QontoStepIcon-circle' />}
    </QontoStepIconRoot>
  )
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  // eslint-disable-next-line react/require-default-props
  active: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,

  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  // eslint-disable-next-line react/require-default-props
  completed: PropTypes.bool
}

export default function HorizontalLinearStepper({ activeStep }) {
  return (
    <Box sx={{ width: '100%', mb: 5 }}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
        {steps.map(label => (
          <Step key={label}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {/* {activeStep === steps.length ? ( */}
      {/*  <> */}
      {/*    <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography> */}
      {/*    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}> */}
      {/*      <Box sx={{ flex: '1 1 auto' }} /> */}
      {/*      <Button onClick={handleReset}>Reset</Button> */}
      {/*    </Box> */}
      {/*  </> */}
      {/* ) : ( */}
      {/*  <> */}
      {/*    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
      {/*    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}> */}
      {/*      <Button color='inherit' disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }} /> */}

      {/*      <Button onClick={handleNext}> */}
      {/*        {activeStep === steps.length - 2 ? 'ارسال به سامانه مودیان' : 'مرحله بعد'} */}
      {/*      </Button> */}
      {/*    </Box> */}
      {/*  </> */}
      {/* )} */}
    </Box>
  )
}
