import { useState } from "react";
import { Box, Card, Chip, Collapse, IconButton, Typography, styled } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { formatDate } from "@/utils/dates";

const IngredientsPanel = ({ ingredients }) => {
  return (
    <Box mt={1} sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {ingredients.map((ingredient, idx) => {
        return (
          <Box p={0.2}>
            <Chip variant="outlined" label={ingredient} />
          </Box>
        )
      })}
    </Box>
  )
}

const CommentsPanel = ({ comments }) => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);
  const toggleCollapse = () => setIsCollapseOpen(!isCollapseOpen);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ExpandMore
          expand={isCollapseOpen}
          onClick={toggleCollapse}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </Box>
      <Collapse in={isCollapseOpen}>
        {comments.map((comment) => <Comment {...comment} />)}
      </Collapse>
    </>
  )
}

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
    comments,
    isOrdered,
  } = props;
  const createdAtDate = new Date(createdAt);
  const updatedAtDate = new Date(updatedAt);

  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      borderColor: `${isOrdered ? 'primary.main' : 'grey'}`,
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: '10px',
      boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)',
      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: '0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)'
      },
    }}>
      {thumbnail && (
        <Box component="img"
          src={thumbnail} sx={{
            width: '100%',
            maxHeight: '200px',
            objectFit: 'cover',
            alignSelf: 'center'
          }}
          mb={1}
          alt="food"
        />
      )}
      <Box p={1} pb={0}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle2">{`${formatDate(createdAtDate)}`}</Typography>
        <Typography variant="caption">{`Last Updated: ${formatDate(updatedAtDate)} `}</Typography>
      </Box>
      {!hideIngredients && <IngredientsPanel ingredients={ingredients} />}
      {!hideComments && <CommentsPanel comments={comments} />}
    </Card >
  )
}

export default RecipeCard;