// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <article className='loginArticle'>
      <div className='loginPic'>
        <div className=''>
          <img alt='displey phone' src='./public/images/screenshot1.png' />
        </div>
      </div>
      <div className='loginFormContainer'>
        <div className='loginElementContainer'>
          <div className='logoInsta' role='button'></div>
          <div className='loginForm'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register('exampleRequired', { required: true })} />
              <input {...register('exampleRequired', { required: true })} />
              {errors.exampleRequired && <span>This field is required</span>}
              <input type='submit' />
            </form>
            <div className='loginElementOr'> АБО </div>
          </div>
        </div>
        <div className='loginElementContainer'>Не маєте облікового запису? Зареєструйтеся</div>
        <div></div>
      </div>
    </article>
  );
};
