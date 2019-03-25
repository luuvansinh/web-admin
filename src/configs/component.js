
export default {
  default: 'all',
  form: {
    itemLayout: {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    },
  },
  formMax: {
    itemLayout: {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    },
  },
  previewForm: {
    itemLayout: {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    },
  },
  account: {
    validation: {
      nameMinLength: 2,
    },
  },
  common: {
    validation: {
      passwordMinLength: 6,
    },
  },
}
