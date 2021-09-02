export const Table = {
  parts: ['th', 'td'],
  baseStyle: {
    th: {
      color: 'gray.600',
      fontWeight: '300',
      backgroundColor: 'gray.50',
      textTransform: 'none',
    },
    td: {
      fontSize: 'sm',
      py: 2,
      px: 2,
      pt: 2,
      pb: 2,
    },
  },
};

export const customTheme = {
  components: { Table },
};
