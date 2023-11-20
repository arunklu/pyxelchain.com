const Text = {
  baseStyle: {
    color: '#C3C4C3',
    lineHeight: '25px',
  },
  variants: {
    14: {
      fontSize: {
        base: '14px',
        lg: '14px',
      },
      lineHeight: {
        base: '25px',
        lg: '25px',
      },
    },
    16: {
      fontSize: {
        base: '14px',
        lg: '16px',
      },
      fontWeight: {
        base: 'none',
        lg: '400',
      },
      lineHeight: {
        base: '20px',
        lg: '25px',
      },
    },
    20: {
      fontSize: {
        base: '20px',
        lg: '20px',
      },
      fontWeight: '700',
      lineHeight: {
        base: '29px',
        lg: '31px',
      },
    },
    32: {
      fontSize: {
        base: '20px',
        lg: '32px',
      },
      fontWeight: 700,
      lineHeight: {
        base: '29px',
        lg: '48px',
      },
    },
    36: {
      fontSize: {
        base: '24px',
        lg: '36px',
      },
      fontWeight: '600',
      lineHeight: {
        base: '31px',
        lg: '47px',
      },
    },
    64: {
      fontSize: {
        base: '36px',
        sm: '36px',
        lg: '64px',
      },
      lineHeight: {
        base: '47px',
        lg: '76px',
      },
      letterSpacing: {
        base: ' -0.72px;',
        lg: '-1.28px;',
      },
      fontWeight: '600',
    },
    error: {
      fontSize: {
        base: '14px',
        lg: '14px',
      },
      lineHeight: {
        base: '25px',
        lg: '25px',
      },
      mt: -10,
      color: 'red',
    },
  },
  sizes: {
    text: {
      fontSize: {
        sm: '14px',
        md: '16px',
      },
    },
  },
  defaultProps: {
    size: 'text',
  },
}

export default Text
