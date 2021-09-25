import { Box, useStyleConfig } from '@chakra-ui/react';

export const Card = {
  // The styles all Cards have in common
  baseStyle: {
    display: 'flex',

    flexDirection: 'column',
    background: 'white3',
    alignItems: '',
    gap: 6,
  },
  // Two variants: rounded and smooth
  variants: {
    rounded: {
      padding: 8,
      borderRadius: 'xl',
      boxShadow: 'xl',
    },
    smooth: {
      padding: 6,
      borderRadius: 'base',
      boxShadow: 'md',
      paddingLeft: 4,
    },
  },
  // The default variant value
  defaultProps: {
    variant: 'smooth',
  },
};

export function CardComponent(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig('Card', { variant });

  // Pass the computed styles into the `__css` prop
  return (
    <>
      <Box
        __css={styles}
        {...rest}
        borderLeft="3px solid"
        borderRadius="3px"
        borderLeftColor="blue1"
        marginBottom="10px"
      >
        {children}
      </Box>
    </>
  );
}
