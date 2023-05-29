import { Box, Chip } from "@mui/material"

const IngredientsPanel = ({ ingredients }) => {
  return (
    <Box mt={1} sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {ingredients.map((ingredient, idx) => {
        return (
          <Box p={0.2}>
            <Chip variant="filled" label={ingredient} />
          </Box>
        )
      })}
    </Box>
  )
}

export default IngredientsPanel;