import BookmarkIcon from '@mui/icons-material/Bookmark'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import Layout from '../components/layout'

const bookingList = [
  {
    id: 1,
    place: 'Badminton - Sengkang Sports Hall',
    date: '18 Oct 2022 (Tue)',
    slot: '08:00 - 10:00',
    confirmation: 'Confirmed',
  },
  {
    id: 2,
    place: 'Badminton - Sengkang Sports Hall',
    date: '18 Oct 2022 (Tue)',
    slot: '10:00 - 11:00',
    confirmation: 'Rejected',
  },
  {
    id: 3,
    place: 'Badminton - Sengkang Sports Hall',
    date: '22 Oct 2022 (Sat)',
    slot: '12:00 - 11:00',
    confirmation: 'Confirmed',
  },
  {
    id: 4,
    place: 'Badminton - Woodlands Sports Hall',
    date: '31 Oct 2022 (Mon)',
    slot: '10:00 - 12:00',
    confirmation: 'Pending',
  },
]
export default function Bookings() {
  const [dialogOpen, setDialogOpen] = useState(0)

  const [bookings, setBookings] = useState(bookingList)

  const statusColor = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'green'
      case 'Rejected':
        return 'red'
      case 'Pending':
        return 'orange'
    }
  }

  return (
    <Layout>
      <Box sx={{ padding: '0.3rem', height: '730px' }}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {bookings.map(({ id, place, date, slot, confirmation }) => (
            <ListItem
              button
              key={id}
              onClick={() => {
                if (confirmation === 'Pending') setDialogOpen(id)
              }}
            >
              <ListItemIcon>
                <BookmarkIcon />
              </ListItemIcon>
              <ListItemText
                primary={place}
                secondary={
                  <>
                    <Typography
                      component="span"
                      display={'block'}
                      variant="body2"
                      color="text.primary"
                    >
                      {date}
                    </Typography>
                    <Typography
                      component="span"
                      display={'block'}
                      variant="body2"
                      color="text.primary"
                    >
                      {slot}
                    </Typography>
                    <Typography
                      component="span"
                      display={'block'}
                      variant="body2"
                      fontWeight="500"
                      color={statusColor(confirmation)}
                    >
                      {confirmation}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
        <Dialog open={dialogOpen !== 0} onClose={() => setDialogOpen(0)}>
          <DialogTitle>Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to cancel your bid?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              color="error"
              onClick={() => {
                setDialogOpen(0)
              }}
            >
              No
            </Button>
            <Button
              onClick={() => {
                setBookings(
                  bookings.filter((booking) => booking.id !== dialogOpen)
                )
                setDialogOpen(0)
              }}
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Layout>
  )
}
