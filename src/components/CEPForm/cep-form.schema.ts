import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const onlyDigits = (value: string) => value.replace(/\D/g, '');


export const cepFormSchema = z.object({
  cep: z
    .string()
    .nonempty('O CEP é obrigatório')
    .transform(onlyDigits)
    .refine((v) => /^\d{8}$/.test(v), 'CEP inválido'),
});

export type CEPFormData = z.infer<typeof cepFormSchema>;

export const useCEPForm = () => {
 const{
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
  reset,
 } = useForm<CEPFormData>({
  resolver: zodResolver(cepFormSchema),
  mode:'onBlur',
  defaultValues: {
    cep: ''},
    criteriaMode: 'all',

 });
  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    reset,
  };
};

