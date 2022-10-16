import CloseIcon from '@mui/icons-material/Close'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useReducer, useState } from 'react'
import Layout from '../../components/layout'
import styles from './id.module.css'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const initialState = {
  date: dayjs().add(14, 'day'),
  slot: '08:00 - 10:00',
  friends: [],
  sharing: null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_DATE':
      return { ...state, date: action.date }
    case 'SET_SLOT':
      return { ...state, slot: action.slot }
    case 'SET_FRIENDS':
      return { ...state, friends: action.friends }
    case 'SET_SHARING': {
      return { ...state, sharing: action.sharing }
    }
    case 'RESET': {
      return initialState
    }
  }
}

export default function Bookings() {
  const router = useRouter()
  const { id } = router.query
  const [state, dispatch] = useReducer(reducer, initialState)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [snackBarOpen, setSnackBarOpen] = useState(false)

  const GooleMapEmbedURL = (location) =>
    `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(
      location
    )}&key=${process.env.NEXT_PUBLIC_MAP_KEY}`

  const title = (() => {
    switch (id) {
      case '1':
        return 'Badminton - Sengkang'
      case '2':
        return 'Badminton - Woodlands'
      case '3':
        return 'Badminton - Hougang'
      default:
        return 'Book To Play'
    }
  })()

  const imageSrc = (() => {
    switch (id) {
      case '1':
        return '/images/court1.jpg'
      case '2':
        return '/images/court2.jpg'
      case '3':
        return '/images/court3.jpg'
      default:
        return '/images/court1.jpg'
    }
  })()

  const location = (() => {
    switch (id) {
      case '1':
        return 'Sengkang Sports Hall'
      case '2':
        return 'Woodlands Sports Hall'
      case '3':
        return 'Hougang Sports Hall'
      default:
        return 'Sengkang Sports Hall'
    }
  })()

  return (
    <Layout backPath="/facilities" title={title}>
      <div className={styles.container}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <iframe
          title={location}
          height="250"
          frameBorder="0"
          style={{ border: 0, width: '100%' }}
          src={GooleMapEmbedURL(location)}
          allowFullScreen
        />
        <Typography
          variant="h6"
          fontSize={17}
          fontWeight={500}
          component="h1"
          marginLeft="5px"
        >
          Activity: Badminton
        </Typography>
        <FormControl fullWidth margin="normal">
          <DatePicker
            label="Date of booking"
            inputFormat="DD/MMM/YYYY"
            value={state.date}
            onChange={(date) => {
              dispatch({ type: 'SET_DATE', date: date })
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Time Slot</InputLabel>
          <Select
            value={state.slot}
            label="Time Slot"
            onChange={(event) => {
              dispatch({ type: 'SET_SLOT', slot: event.target.value })
            }}
          >
            <MenuItem value={'08:00 - 10:00'}>08:00 - 10:00</MenuItem>
            <MenuItem value={'10:00 - 12:00'}>10:00 - 12:00</MenuItem>
            <MenuItem value={'12:00 - 14:00'}>12:00 - 14:00</MenuItem>
            <MenuItem value={'14:00 - 16:00'}>14:00 - 16:00</MenuItem>
            <MenuItem value={'16:00 - 18:00'}>16:00 - 18:00</MenuItem>
            <MenuItem value={'18:00 - 20:00'}>18:00 - 20:00</MenuItem>
            <MenuItem value={'20:00 - 22:00'}>20:00 - 22:00</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          fullWidth
          onClick={() => setDialogOpen(true)}
        >
          Place Bid
        </Button>
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogTitle>Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText>
              An OTP has been sent to your registered email address.
            </DialogContentText>
            <TextField
              label="6 digits OTP"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              autoFocus
              margin="dense"
              variant="standard"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button color="inherit" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setDialogOpen(false)
                setSnackBarOpen(true)
                dispatch({ type: 'RESET' })
              }}
            >
              Bid
            </Button>
          </DialogActions>
        </Dialog>
        <Snackbar
          severity="success"
          open={snackBarOpen}
          message="You bid have been submitted successfully."
          autoHideDuration={3000}
          onClose={() => {
            setSnackBarOpen(false)
            router.push('/bookings')
          }}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => {
                setSnackBarOpen(false)
                router.push('/bookings')
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </div>
    </Layout>
  )
}
