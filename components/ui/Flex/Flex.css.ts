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
      '100vh': { minHeight: '100vh' },
    },
    gap: {
      noGap: {
        gap: 0,
      },
      '1': {
        gap: '1rem',
      },
      '1.5': {
        gap: '1.5rem',
      },
      '2': {
        gap: '2rem',
      },
      '2.5': {
        gap: '2.5rem',
      },
      '3': {
        gap: '3rem',
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

    paddingTop: {
      '1rem': {
        paddingTop: '1rem',
      },
      '1.5rem': {
        paddingTop: '1.5rem',
      },
      '2rem': {
        paddingTop: '2rem',
      },
      '2.5rem': {
        paddingTop: '2.5rem',
      },
      '3rem': {
        paddingTop: '3rem',
      },
      '3.5rem': {
        paddingTop: '3.5rem',
      },
      '4rem': {
        paddingTop: '4rem',
      },
      '4.5rem': {
        paddingTop: '4.5rem',
      },
      '5rem': {
        paddingTop: '5rem',
      },
    },
    paddingBottom: {
      '1rem': {
        paddingBottom: '1rem',
      },
      '1.5rem': {
        paddingBottom: '1.5rem',
      },
      '2rem': {
        paddingBottom: '2rem',
      },
      '2.5rem': {
        paddingBottom: '2.5rem',
      },
      '3rem': {
        paddingBottom: '3rem',
      },
      '3.5rem': {
        paddingBottom: '3.5rem',
      },
      '4rem': {
        paddingBottom: '4rem',
      },
      '4.5rem': {
        paddingBottom: '4.5rem',
      },
      '5rem': {
        paddingBottom: '5rem',
      },
    },
  },
});

export type FlexVariants = RecipeVariants<typeof flex>;
