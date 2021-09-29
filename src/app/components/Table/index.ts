export const Table = {
  parts: ['th', 'td', 'tr'],
  baseStyle: {
    backgroundColor: 'grey3',
    padding: '2',
    th: {
      color: 'grey1',
      fontWeight: 500,
      backgroundColor: 'white3',
      textTransform: 'none',
      height: '35px',
    },
    td: {
      fontSize: 'sm',
      color: 'grey13',
      py: 2,
      px: 2,
      pt: 2,
      pb: 2,
    },
    tr: {
      borderBottom: '1px solid',
      borderBottomColor: 'grey2',
    },
  },
};

export const customTheme = {
  components: { Table },
};
