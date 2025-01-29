import './App.css';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import crane from './img/paintings/crane.jpg';
import abstract_flowers_still_life from './img/paintings/abstract_box_flowers_still_life.jpg';
import abstract_sculpture from './img/paintings/abstract_sculpture.jpg';
import box from './img/paintings/box.jpg';
import cow_skull from './img/paintings/cow_skull_charcoal.jpg';
import dahlia from './img/paintings/dahlia.jpg';
import food from './img/paintings/food.jpg';
import glass_jar_book_box_mundane from './img/paintings/glass_jar_book_box_mundane.jpg';
import gourd_and_paper from './img/paintings/gourd_and_paper.jpg';
import guitar_dark from './img/paintings/guitar_dark.jpg';
import mass_street_alley from './img/paintings/mass_street_alley.jpg';
import mass_street_store from './img/paintings/mass_street_store.jpg';
import palette_knife_blocks_small from './img/paintings/palette_knife_blocks_small.jpg';
import still_life_charcoal from './img/paintings/still_life_charcoal.jpg';
import watering_can from './img/paintings/watering_can.jpg';
import abstract_box_goat from './img/paintings/abstract_box_goat.jpg';
import glass_book_orange from './img/paintings/glass_book_orange.jpg';
import kitchenwares from './img/paintings/kitchenwares.jpg';
import kitchenwares_study from './img/paintings/kitchenwares_study.jpg';
import kitchenwares_study_naples_yellow from './img/paintings/kitchenwares_study_naples_yellow.jpg';
import butterfly_collage from './img/paintings/butterfly_collage.jpg';
import kehoe_remake from './img/paintings/kehoe_remake.jpg';
import cardboard_study_1 from './img/paintings/cardboard_study_1.jpg';
import cardboard_study_2 from './img/paintings/cardboard_study_2.jpg';
import cardboard_study_3 from './img/paintings/cardboard_study_3.jpg';
import cardboard_study_4 from './img/paintings/cardboard_study_4.jpg';
import cardboard_study_5 from './img/paintings/cardboard_study_5.jpg';
import cardboard_study_6 from './img/paintings/cardboard_study_6.jpg';
import cardboard_chair from './img/paintings/cardboard_chair.jpg';
import kitchen_with_flowers from './img/paintings/kitchen_with_flowers.jpg';
import pgh_incline from './img/paintings/pgh_incline.jpg';
import skogafoss_overlook_iceland from './img/paintings/skogafoss_overlook_iceland.jpg';
import sunset_at_san_pedro_beach from './img/paintings/sunset_at_san_pedro_beach.jpg';
import vik_iceland from './img/paintings/vik_iceland.jpg';
import glass_still_life from './img/paintings/glass_still_life.jpg';
import lipsticks from './img/paintings/lipsticks.jpg';
import plant_corner from './img/paintings/plant_corner.jpg';
import mom_and_us from './img/paintings/mom_and_us.jpg';
import me_and_friends_at_san_pedro_beach from './img/paintings/me_and_friends_at_san_pedro_beach.jpg';
import friends_at_venice_beach from './img/paintings/friends_at_venice_beach.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function Paintings() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <div className="content_page">
      <header align="center">
        <p>
        In my free time, I enjoy smearing blobs of color across canvas. Art is one of the few things that make me feel human. I started painting at age 9. First I painted flowers, then still lifes, then "the mundane", then landscapes, and recently, people being people. I enjoy studying the mundane, everyday things whose beauty is often overlooked. My favorite painters include Wayne Thiebaud, Claude Monet, <a href='http://www.kathyliao.com/portfolio#/saving-face-self-portraits/'>Kathy Liao</a>, <a href='https://catherinekehoe.com'>Catherine Kehoe</a>, and <a href='https://michaelmccaffreystudio.com/home.html'>Michael McCaffrey</a> (who taught me painting in undergrad).
        
        <br /><br />
        <Divider />
        <br />
        </p>
      </header>
        <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={spacing}>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='friends at venice beach' src={friends_at_venice_beach} className='photo' />
                    <p className="description">
                    Oil paint on canvas (2023) <br/>
                    Dimensions: 24" x 36"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='mom and us' src={mom_and_us} className='photo' />
                    <p className="description">
                    Oil paint on chipboard (2023) <br/>
                    Dimensions: 11" x 14"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='plant corner' src={plant_corner} className='photo' />
                    <p className="description">
                    Oil paint on chipboard (2022) <br/>
                    Dimensions: 11" x 14"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='lipsticks' src={lipsticks} className='photo' />
                    <p className="description">
                    Sharpie on foam board (2022) <br/>
                    Dimensions: 4" x 7"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='me and friends at san pedro beach' src={me_and_friends_at_san_pedro_beach} className='photo' />
                    <p className="description">
                    Oil pastel on newsprint (2022) <br/>
                    Dimensions: 24" x 18"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='glass_still_life' src={glass_still_life} className='photo' />
                    <p className="description">
                    Charcoal on paper (2022) <br/>
                    Dimensions: 17" x 14"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='vik_iceland' src={vik_iceland} className='photo' />
                    <p className="description">
                    Oil paint on canvas (2022) <br/>
                    Dimensions: 10" x 8"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='sunset_at_san_pedro_beach' src={sunset_at_san_pedro_beach} className='photo' />
                    <p className="description">
                    Mixed media on canvas (2022) <br/>
                    Dimensions: 10" x 8"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='skogafoss_overlook_iceland' src={skogafoss_overlook_iceland} className='photo' />
                    <p className="description">
                    Oil paint on canvas (2022) <br/>
                    Dimensions: 18" x 24"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='pgh_incline' src={pgh_incline} className='photo' />
                    <p className="description">
                    Oil paint on canvas (2021) <br/>
                    Dimensions: 10" x 8"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='kitchen_with_flowers' src={kitchen_with_flowers} className='photo' />
                    <p className="description">
                    Mixed media on canvas (2021) <br/>
                    Dimensions: 20" x 16"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='cardboard_chair' src={cardboard_chair} className='photo' />
                    <p className="description">
                    Mixed media on cardboard (2021) <br/>
                    Dimensions: 12" x 14"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='kitchenwares' src={kitchenwares} className='photo' />
                    <p className="description">
                    Oil and mixed media on canvas (2020) <br/>
                    Dimensions: 36" x 48"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='kehoe_remake' src={kehoe_remake} className='photo' />
                    <p className="description">
                    Mixed media on canvas (2020) <br/>
                    Dimensions: 11" x 14"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='kitchenwares_study' src={kitchenwares_study} className='photo' />
                    <p className="description">
                    Oil on wood panel (2020) <br/>
                    Dimensions: 12" x 12"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='kitchenwares_study_naples_yellow' src={kitchenwares_study_naples_yellow} className='photo' />
                    <p className="description">
                    Oil on wood panel (2020) <br/>
                    Dimensions: 12" x 12"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='abstract_box_goat' src={abstract_box_goat} className='photo' />
                    <p className="description">
                    Oil and mixed media on canvas (2020) <br/>
                    Dimensions: 36" x 48"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='glass_book_orange' src={glass_book_orange} className='photo' />
                    <p className="description">
                    Oil and mixed media on canvas (2020) <br/>
                    Dimensions: 33" x 40"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='abstract_flowers_still_life' src={abstract_flowers_still_life} className='photo' />
                    <p className="description">
                    Oil on canvas (2019) <br/>
                    Dimensions: 48" x 48"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='mass_street_alley' src={mass_street_alley} className='photo' />
                    <p className="description">
                    Oil on wood panel (2019) <br/>
                    Dimensions: 8" x 8"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='mass_street_store' src={mass_street_store} className='photo' />
                    <p className="description">
                    Oil on wood panel (2019) <br/>
                    Dimensions: 8" x 8"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='glass_jar_book_box_mundane' src={glass_jar_book_box_mundane} className='photo' />
                    <p className="description">
                    Oil on canvas (2019) <br/>
                    Dimensions: 36" x 36"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='box' src={box} className='photo' />
                    <p className="description">
                    Oil on wood panel (2018) <br/>
                    Dimensions: 40" x 32"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='butterfly_collage' src={butterfly_collage} className='photo' />
                    <p className="description">
                    Oil on canvas (2018) <br/>
                    Dimensions: 32" x 40"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='abstract_sculpture' src={abstract_sculpture} className='photo' />
                    <p className="description">
                    Oil on wood panel (2018) <br/>
                    Dimensions: 48" x 36"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='palette_knife_blocks_small' src={palette_knife_blocks_small} className='photo' />
                    <p className="description">
                    Oil on wood panel (2018) <br/>
                    Dimensions: 6" x 6"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='crane' src={crane} className='photo' />
                    <p className="description">
                    Oil on wood panel (2018) <br/>
                    Dimensions: 12" x 12"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='watering_can' src={watering_can} className='photo' />
                    <p className="description">
                    Oil on canvas (2018) <br/>
                    Dimensions: 24" x 24"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='gourd_and_paper' src={gourd_and_paper} className='photo' />
                    <p className="description">
                    Oil on canvas (2018) <br/>
                    Dimensions: 24" x 24"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='guitar_dark' src={guitar_dark} className='photo' />
                    <p className="description">
                    Oil on canvas (2018) <br/>
                    Dimensions: 24" x 24"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='dahlia' src={dahlia} className='photo' />
                    <p className="description">
                    Oil on canvas (2017) <br/>
                    Dimensions: 18" x 24"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='food' src={food} className='photo' />
                    <p className="description">
                    Oil on canvas (2017) <br/>
                    Dimensions: 24" x 18"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='cow_skull' src={cow_skull} className='photo' />
                    <p className="description">
                    Charcoal on paper (2017) <br/>
                    Dimensions: 24" x 18"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='still_life_charcoal' src={still_life_charcoal} className='photo' />
                    <p className="description">
                    Charcoal on paper (2017) <br/>
                    Dimensions: 24" x 18"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='cardboard_study_1' src={cardboard_study_1} className='photo' />
                    <p className="description">
                    Oil on cardboard (2017) <br/>
                    Dimensions: 14" x 12"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='cardboard_study_2' src={cardboard_study_2} className='photo' />
                    <p className="description">
                    Oil on cardboard (2017) <br/>
                    Dimensions: 12" x 14"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='cardboard_study_3' src={cardboard_study_3} className='photo' />
                    <p className="description">
                    Oil on cardboard (2017) <br/>
                    Dimensions: 14" x 12"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='cardboard_study_4' src={cardboard_study_4} className='photo' />
                    <p className="description">
                    Oil on cardboard (2017) <br/>
                    Dimensions: 14" x 12"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='cardboard_study_5' src={cardboard_study_5} className='photo' />
                    <p className="description">
                    Oil on cardboard (2017) <br/>
                    Dimensions: 12" x 14"
                    </p>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={0}>
                    <img alt='cardboard_study_6' src={cardboard_study_6} className='photo' />
                    <p className="description">
                    Oil on cardboard (2017) <br/>
                    Dimensions: 14" x 12"
                    </p>
                </Paper>
            </Grid>
            </Grid>
        </Grid>
        </Grid>
    </div>
  );
}

export default Paintings;