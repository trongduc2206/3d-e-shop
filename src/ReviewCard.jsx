import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import './ReviewCard.css';

export default function ReviewCard() {
  return (
    <Card sx={{ minWidth: 350 }}>
      <CardContent>
        <Rating name="read-only" value={3} readOnly />
        <Typography sx={{ fontSize: '1.2rem'}} variant="h5" component="div">
          Good product
        </Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: '1rem' }}>Function really well</Typography>
      </CardContent>
      <div className='reviewer'>
        <Avatar alt="Remy Sharp" src="/avatar/avatar1.png" />
        <div className='reviewer-info'>
            <h3>Alex Crisky</h3>
            <p>02/01/2024</p>
        </div>
      </div>
    </Card>
  );
}
