import { useState } from "react";
import { Box, Card, CardActions, Collapse, IconButton, Typography, styled } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { formatDate } from "@/utils/dates";

const Comment = (props) => {
  const { createdAt, proList, conList } = props;
  const createdAtDate = new Date(createdAt);
  return (
    <Box>
      <Typography variant="subtitle2">{`${formatDate(createdAtDate)}`}</Typography>
      <Typography variant="caption">PRO</Typography>
      <ul>{proList.map((pro) => <li>{pro}</li>)}</ul>
      <Typography variant="caption">CON</Typography>
      <ul>{conList.map((con) => <li>{con}</li>)}</ul>
    </Box>
  )
}

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RecipeCard = (props) => {
  const {
    thumbnail,
    name,
    createdAt,
    updatedAt,
    hideIngredients = false,
    hideComments,
    ingredients,
    comments
  } = props;
  const createdAtDate = new Date(createdAt);
  const updatedAtDate = new Date(updatedAt);

  const [isCollapseOpen, setIsCollapseOpen] = useState(false);
  const toggleCollapse = () => setIsCollapseOpen(!isCollapseOpen);

  return (
    <Card>
      {thumbnail && (
        <Box component="img"
          src={thumbnail} sx={{
            maxHeight: '200px',
            objectFit: 'cover'
          }}
          alt="food"
        />
      )}
      <Typography variant="h6">{name}</Typography>
      <Typography variant="subtitle2">{`${formatDate(createdAtDate)}`}</Typography>
      <Typography variant="caption">{`Last Updated: ${formatDate(updatedAtDate)}`}</Typography>
      {!hideIngredients && (
        <Box>
          {ingredients.map((ingredient) =>
            <Typography variant="body2">{ingredient}</Typography>
          )}
        </Box>
      )}
      {!hideComments && (
        <>
          <CardActions disableSpacing>
            <ExpandMore
              expand={isCollapseOpen}
              onClick={toggleCollapse}
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={isCollapseOpen}>
            {comments.map((comment) => <Comment {...comment} />)}
          </Collapse>
        </>
      )}
    </Card>
  )
}

export default RecipeCard;