import { useState } from "react";
import { Box, Card, Chip, Collapse, Fab, IconButton, Typography, styled } from "@mui/material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { formatDate } from "@/utils/dates";
import { upperCase } from "lodash";
import IngredientsPanel from "@/features/IngredientsPanel";


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
    id,
    thumbnail,
    name,
    createdAt,
    updatedAt,
    ingredients,
    comments,
    isOrdered,
    hideIngredients,
    hideComments,
    addToOrder,
    removeFromOrder,
  } = props;
  const createdAtDate = new Date(createdAt);
  const updatedAtDate = new Date(updatedAt);

  return (
    <Card sx={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: (theme) => theme.color.light,
      borderColor: (theme) => isOrdered ? theme.palette.primary.main : theme.color.darkGray,
      borderStyle: 'solid',
      borderWidth: '4px',
      borderRadius: '10px',
      boxShadow: '0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)',
      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: '0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)'
      },
    }}>
      {thumbnail && (
        <Box
          component="img"
          src={thumbnail}
          sx={{
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
        <Typography variant="h6" sx={{ textAlign: 'center' }}>{upperCase(name)}</Typography>
        <Typography variant="subtitle2">{`${formatDate(createdAtDate)}`}</Typography>
        <Typography variant="caption">{`Last Updated: ${formatDate(updatedAtDate)} `}</Typography>
      </Box>
      <Box sx={{ position: 'absolute', top: -18, right: -18 }}>
        <Fab
          sx={{
            // color: (theme) => isOrdered ? theme.palette.primary.main : theme.color.gray,
            color: (theme) => theme.color.light,
            backgroundColor: (theme) => isOrdered ? theme.palette.primary.main : theme.color.darkGray,
            ':hover': {
              backgroundColor: (theme) => !isOrdered ? theme.palette.primary.main : theme.color.darkGray
            }
          }}
          onClick={() => {
            console.log("BLAH")
            return isOrdered ? removeFromOrder(id) : addToOrder(id)
          }}
        >
          {isOrdered ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        </Fab>
      </Box>
      {!hideIngredients && <IngredientsPanel ingredients={ingredients} />}
      {!hideComments && <CommentsPanel comments={comments} />}
    </Card >
  )
}

export default RecipeCard;