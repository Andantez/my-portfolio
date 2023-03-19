import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { gap300 } from '../../../styles/vars.css';

export const flex = recipe({
  base: {
    display: 'flex',
    maxWidth: '1400px',
    margin: '0 auto',
    '@media': {
      'screen and (min-width: 87.5rem)': {
        padding: '0 !important',
      },
    },
  },
  variants: {
    flexWrap: {
      noWrap: {
        flexWrap: 'nowrap',
      },
      wrap: {
        flexWrap: 'wrap',
      },
    },
    flexDirection: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
      columnReverse: {
        flexDirection: 'column-reverse',
      },
      rowReverse: {
        flexDirection: 'row-reverse',
      },
    },
    justifyContent: {
      center: {
        justifyContent: 'center',
      },
      spaceBetween: {
        justifyContent: 'space-between',
      },
      spaceAround: {
        justifyContent: 'space-around',
      },
      spaceEvenly: {
        justifyContent: 'space-evenly',
      },
      flexStart: {
        justifyContent: 'flex-start',
      },
      flexEnd: {
        justifyContent: 'flex-end',
      },
      stretch: {
        justifyContent: 'stretch',
      },
    },
    alignItems: {
      center: {
        alignItems: 'center',
      },
      flexStart: {
        alignItems: 'flex-start',
      },
      flexEnd: {
        alignItems: 'flex-end',
      },
    },
    height: {
      '100%': { height: '100%' },
      auto: { height: 'auto' },
      '100vh': { height: '100vh' },
    },
    minHeight: {
      '100%': { minHeight: '100%' },
      auto: { minHeight: 'auto' },
      '100vh': { minHeight: '100vh' },
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
    directionMediaBreakpoint: {
      rowAt600: {
        '@media': {
          'screen and (min-width: 37.5rem)': {
            flexDirection: 'row',
          },
        },
      },
      rowAt900: {
        '@media': {
          'screen and (min-width: 56.25rem)': {
            flexDirection: 'row',
          },
        },
      },
      rowAt1024: {
        '@media': {
          'screen and (min-width: 64rem)': {
            flexDirection: 'row',
          },
        },
      },
      rowAt1200: {
        '@media': {
          'screen and (min-width: 75rem)': {
            flexDirection: 'row',
          },
        },
      },
      columnAt600: {
        '@media': {
          'screen and (min-width: 37.5rem)': {
            flexDirection: 'column',
          },
        },
      },
      columnAt900: {
        '@media': {
          'screen and (min-width: 56.25rem)': {
            flexDirection: 'column',
          },
        },
      },
      columnAt1024: {
        '@media': {
          'screen and (min-width: 64rem)': {
            flexDirection: 'column',
          },
        },
      },
      columnAt1200: {
        '@media': {
          'screen and (min-width: 75rem)': {
            flexDirection: 'column',
          },
        },
      },
    },
    wrapMediaBreakpoint: {
      wrapAt600: {
        '@media': {
          'screen and (min-width: 37.5rem)': {
            flexWrap: 'wrap',
          },
        },
      },
      wrapAt900: {
        '@media': {
          'screen and (min-width: 56.25rem)': {
            flexWrap: 'wrap',
          },
        },
      },
      wrapAt1024: {
        '@media': {
          'screen and (min-width: 64rem)': {
            flexWrap: 'wrap',
          },
        },
      },
      wrapAt1200: {
        '@media': {
          'screen and (min-width: 75rem)': {
            flexWrap: 'wrap',
          },
        },
      },
      noWrapAt600: {
        '@media': {
          'screen and (min-width: 37.5rem)': {
            flexWrap: 'nowrap',
          },
        },
      },
      noWrapAt900: {
        '@media': {
          'screen and (min-width: 56.25rem)': {
            flexWrap: 'nowrap',
          },
        },
      },
      noWrapAt1024: {
        '@media': {
          'screen and (min-width: 64rem)': {
            flexWrap: 'nowrap',
          },
        },
      },
      noWrapAt1200: {
        '@media': {
          'screen and (min-width: 75rem)': {
            flexWrap: 'nowrap',
          },
        },
      },
    },
    paddingMediaBreakpoint: {
      padding1At600: {
        '@media': {
          'screen and (min-width: 37.5rem)': {
            padding: '0 1rem',
          },
        },
      },
      padding1At900: {
        '@media': {
          'screen and (min-width: 56.25rem)': {
            padding: '0 1rem',
          },
        },
      },
      padding1At1024: {
        '@media': {
          'screen and (min-width: 64rem)': {
            padding: '0 1rem',
          },
        },
      },
      padding1At1200: {
        '@media': {
          'screen and (min-width: 75rem)': {
            padding: '0 1rem',
          },
        },
      },
      padding2At600: {
        '@media': {
          'screen and (min-width: 37.5rem)': {
            padding: '0 2rem',
          },
        },
      },
      padding2At900: {
        '@media': {
          'screen and (min-width: 56.25rem)': {
            padding: '0 2rem',
          },
        },
      },
      padding2At1024: {
        '@media': {
          'screen and (min-width: 64rem)': {
            padding: '0 2rem',
          },
        },
      },
      padding2At1200: {
        '@media': {
          'screen and (min-width: 75rem)': {
            padding: '0 2rem',
          },
        },
      },
    },
    gapMediaBreakPoint: {
      gap3At600: {
        '@media': {
          'screen and (min-width: 37.5rem)': {
            gap: gap300,
          },
        },
      },
      gap3At900: {
        '@media': {
          'screen and (min-width: 56.25rem)': {
            gap: gap300,
          },
        },
      },
      gap3At1024: {
        '@media': {
          'screen and (min-width: 64rem)': {
            gap: gap300,
          },
        },
      },
      gap3At1200: {
        '@media': {
          'screen and (min-width: 75rem)': {
            gap: gap300,
          },
        },
      },
      gap3At1400: {
        '@media': {
          'screen and (min-width: 87.5rem)': {
            gap: gap300,
          },
        },
      },
    },
    marginBottom: {
      '1rem': {
        marginBottom: '1rem',
      },
      '1.5rem': {
        marginBottom: '1.5rem',
      },
      '2rem': {
        marginBottom: '2rem',
      },
      '2.5rem': {
        marginBottom: '2.5rem',
      },
      '3rem': {
        marginBottom: '3rem',
      },
      '3.5rem': {
        marginBottom: '3.5rem',
      },
      '4rem': {
        marginBottom: '4rem',
      },
      '4.5rem': {
        marginBottom: '4.5rem',
      },
      '5rem': {
        marginBottom: '5rem',
      },
    }
  },
});

export type FlexVariants = RecipeVariants<typeof flex>;
