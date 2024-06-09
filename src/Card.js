import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';


export default function BasicCard() 
{
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {[...Array(4)].map((_, index) => (
        <Card key={index} sx={{ height: 360, width: 320, marginTop: 20 }}>
          <CardContent>
            <Typography level="title-lg">Yosemite National Park</Typography>
            <Typography level="body-sm">April 24 to May 02, 2021</Typography>
            <IconButton
              aria-label="bookmark Bahamas Islands"
              variant="plain"
              color="neutral"
              size="sm"
              sx={{ position: 'absolute', top: 0, right: 0 }}
            >
              <BookmarkAdd />
            </IconButton>
          </CardContent>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
              srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Typography level="body-xs">Total price:</Typography>
              <Typography fontSize="lg" fontWeight="lg">
                $2,900
              </Typography>
            </div>
            <Button
              variant="solid"
              size="md"
              color="#FFA500"
              aria-label="Explore Bahamas Islands"
              sx={{ fontWeight: 600, backgroundColor: '#FFA500', '&:hover': { backgroundColor: '#FFA500' } }}
            >
              Buy Now
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
