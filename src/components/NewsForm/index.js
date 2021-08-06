import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Button'
import Field from '../Field'
import Form from '../Form'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().min(2, 'Debe contener al menos 2 caracteres').required(),
  email: yup.string().required().email(),
});
const NewsForm = () => {
  const {handleSubmit, register, formState: {errors, isValid}} = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };
  return (
       <Form onSubmit={handleSubmit(onSubmit)}>
      <Field.Text label="Name" name="name" type="text" register={register} />
       <p style={{color: 'red'}}>{errors.name?.message}</p>
      <Field.Text label="E-mail" name="email" type="email" register={register} />
       <p style={{color: 'red'}}>{errors.email?.message}</p>
      <Button >Enviar</Button>
    </Form>
  )
}

export default NewsForm
