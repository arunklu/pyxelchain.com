const Input = {
  baseStyle: {
    field: {
      border: '0.4px solid rgba(211, 216, 221, 0.09)',
      borderRadius: '6px',
      background: 'rgba(0, 0, 0, 0.07)',
      _focus: {
        boxShadow: '0 0 0 1px #3182ce',
      },
      _placeholder: {
        color: '#C3C4C3',
        fontSize: 'sm',
        opacity: 0.5,
      },
    },
  },
  sizes: {
    md: {
      field: {
        height: '60px',
      },
    },
  },
  variants: {},
  defaultProps: {
    variant: null,
  },
}

export default Input
