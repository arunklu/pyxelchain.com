import { useMutation } from '@apollo/client'
import { Box, chakra, Flex, Text } from '@chakra-ui/react'
import Button from '@components/button'
import CustomDatePicker from '@components/custom-datepicker'
import CustomInput from '@components/custom-input'
import { SUGGEST_EVENT } from '@graphql/mutations/create-event'
import { showToast } from '@utils/toast-utils'
import { isValidEmail } from '@utils/validate-email'
import { isValidURL } from '@utils/validate-url'
import dayjs from 'dayjs'
import 'react-datepicker/dist/react-datepicker.css'
import { Controller, useForm } from 'react-hook-form'

const SuggestAnEvent = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [suggestEvent, { loading }] = useMutation(SUGGEST_EVENT)

  const onSubmit = async (formData: any) => {
    const { data } = await suggestEvent({
      variables: {
        data: {
          ...formData,
          start_date: dayjs(formData.start_date).format('YYYY-MM-DD'),
          end_date: dayjs(formData.end_date).format('YYYY-MM-DD'),
          user_created: true,
          location_name: 'N/A',
          location_country: '216', // defaults to United States
        },
      },
    })
    if (data.createEvent.data.id) {
      showToast('Successfully submitted Event suggestion form.', 'success')
      reset()
    } else {
      showToast('Something went wrong', 'error')
    }
  }

  return (
    <Box
      id="suggest"
      mt={{
        base: '80px',
        lg: '120px',
      }}
    >
      <Flex
        gap={{
          base: '60px',
          lg: '74px',
        }}
        flexDir={{
          base: 'column',
          lg: 'row',
        }}
      >
        <Box>
          <Text variant="64" noOfLines={2} fontFamily="Iosevka" color="white">
            Want to{' '}
            <chakra.span className="active" display="inline">
              Suggest an Event to Us?
            </chakra.span>
          </Text>
          <Text variant="16" mt="10px" color="#c3c4c3">
            Do you have an event you think we should attend? Give us a few details and we'll check it out! This is a
            dummy text and another one to make this section long and longer.
          </Text>
        </Box>
        <Box
          bg="#040a1c"
          maxW={{
            base: '',
            lg: '598px',
          }}
          p={{
            base: '24px',
            lg: '43px',
          }}
          w="100%"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="name"
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <CustomInput placeholder="Event Name" onChange={(e) => field.onChange(e)} value={field.value} />
              )}
            />
            {errors.name && <Text variant="error">Event Name is required</Text>}

            <Controller
              control={control}
              name="description"
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <CustomInput
                  placeholder="Describe the event you think we should attend"
                  onChange={(e) => field.onChange(e)}
                  value={field.value}
                  height="129px"
                  as="textarea"
                  pt="10px"
                />
              )}
            />
            {errors.description && <Text variant="error">Description is required</Text>}

            <Controller
              name="start_date"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <CustomDatePicker
                  onChange={(date) => field.onChange(date)}
                  value={field.value}
                  placeHolderText="Event Start Date"
                />
              )}
            />
            {errors.start_date && <Text variant="error">Start Date is required</Text>}

            <Controller
              rules={{
                required: true,
              }}
              name="end_date"
              control={control}
              render={({ field }) => (
                <CustomDatePicker
                  onChange={(date) => field.onChange(date)}
                  value={field.value}
                  placeHolderText="Event End Date"
                />
              )}
            />
            {errors.end_date && <Text variant="error">End Date is required</Text>}

            <Controller
              control={control}
              name="external_url"
              rules={{
                required: true,
                validate: (value: string) => isValidURL(value),
              }}
              render={({ field }) => (
                <CustomInput placeholder="Event URL" onChange={(e) => field.onChange(e)} value={field.value} />
              )}
            />
            {(errors as any).external_url?.type === 'required' && <Text variant="error">Event URL is required</Text>}
            {(errors as any).external_url?.type === 'validate' && (
              <Text variant="error">URL is not a valid format</Text>
            )}

            <Controller
              control={control}
              name="suggestor_name"
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <CustomInput placeholder="Your Full Name" onChange={(e) => field.onChange(e)} value={field.value} />
              )}
            />
            {errors.suggestor_name && <Text variant="error">Full Name is required</Text>}

            <Controller
              control={control}
              rules={{
                required: true,
                validate: (value: string) => isValidEmail(value),
              }}
              name="suggestor_email_address"
              render={({ field }) => (
                <CustomInput placeholder="Your Email Address" onChange={(e) => field.onChange(e)} value={field.value} />
              )}
            />
            {(errors as any).suggestor_email_address?.type === 'required' && (
              <Text variant="error">Email Address is required</Text>
            )}
            {(errors as any).suggestor_email_address?.type === 'validate' && (
              <Text variant="error">Email address is not valid</Text>
            )}

            <Button
              type="submit"
              mt={{
                base: '35px',
                lg: '40px',
              }}
              w="100%"
              isLoading={loading}
              isDisabled={loading}
            >
              <Text size="16px" fontWeight="normal" color="white">
                Submit Suggestion
              </Text>
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  )
}

export default SuggestAnEvent
