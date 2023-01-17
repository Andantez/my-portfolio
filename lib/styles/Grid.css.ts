import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
export const grid = recipe({
  base: {
    display: 'grid',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  variants: {
    height: {
      '100%': { height: '100%' },
      auto: { height: 'auto' },
      '100vh': { height: '100vh' },
    },
    minHeight: {
      '100%': { height: '100%' },
      auto: { height: 'auto' },
      '100vh': { height: '100vh' },
    },
    padding: {
      noPadding: {
        padding: 0,
      },
      smallLeftAndRight: {
        padding: '0 1rem',
      },
      mediumLeftAndRight: {
        padding: '0 2rem',
      },
      largeLeftAndRight: {
        padding: '0 3rem',
      },
    },
    overflow: {
      hiddenX: {
        overflowX: 'hidden',
      },
      hiddenY: {
        overflowY: 'hidden',
      },
      autoX: {
        overflowX: 'auto',
      },
      autoY: {
        overflowY: 'auto',
      },
    },
    gap: {
      noGap: {
        gap: 0,
      },
      small: {
        gap: '1rem',
      },
      medium: {
        gap: '2rem',
      },
      large: {
        gap: '3rem',
      },
    },
    placeContent: {
      center: {
        placeContent: 'center',
      },
    },
    placeItems: {
      center: {
        placeItems: 'center',
      },
    },
    columnsMediaBreakpoint: {
      600: {
        '@media': {
          'screen and (min-width: 37.5rem)': {
            gridTemplateColumns: 'repeat(12, 1fr)',
            padding: 0,
          },
        },
      },
      900: {
        '@media': {
          'screen and (min-width: 56.25rem)': {
            gridTemplateColumns: 'repeat(12, 1fr)',
            padding: 0,
          },
        },
      },
      1024: {
        '@media': {
          'screen and (min-width: 64rem)': {
            gridTemplateColumns: 'repeat(12, 1fr)',
            padding: 0,
          },
        },
      },
    },
  },
});

export type GridVariants = RecipeVariants<typeof grid>;
