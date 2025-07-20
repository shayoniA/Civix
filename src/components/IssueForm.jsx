import { useForm } from 'react-hook-form';

const IssueForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('title', { required: 'Title is required' })}
        aria-invalid={errors.title ? 'true' : 'false'}
      />
      {errors.title && <span role="alert">{errors.title.message}</span>}
    </form>
  );
};