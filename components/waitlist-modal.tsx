import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect } from 'react';

export default function WaitlistModal() {

  const form = useForm({
    initialValues: {
      email: '',
      // termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  useEffect(() => {
    console.log(form.values);
  }, [form.values]);


  return (
    <>
    <Box sx={{ maxWidth: 300 }} mx="auto">
      {/* <form onSubmit={form.onSubmit}> */}
      {/* <form onSubmit={handleFormSubmit}> */}
      {/* <form> */}
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <Group position="right" mt="md">
          <Button type="submit">Subscribe</Button>
        </Group>
      {/* </form> */}
    </Box>
    </>
  )
}