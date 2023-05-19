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
        <div className='screenshot'>
          <div className='element'></div>
          <div className='element'></div>
          <div className='element'></div>
          <div className='element'></div>
        </div>
      </div>
      <div className='loginFormContainer'>
        <div className='loginElementContainer'>
          <div className='logoInsta' role='button'></div>
          <div className='loginFormBox'>
            <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
              <input
                className='loginInput'
                placeholder='Номер телефону або електронна пошта'
                {...register('login', { required: true })}
              />
              <input
                className='loginInput'
                placeholder='Пароль'
                {...register('password', { required: true })}
              />
              {errors.exampleRequired && <span>This field is required</span>}
              <input className='formSubmitButton' type='submit' />
            </form>
            <p className='loginElementOr'> або </p>
            <a className='facebookLinkAuth' href='/'>
              Увійти через Facebook
            </a>
          </div>
          <a href='/' style={{ marginTop: '12px', color: 'rgb(0, 149, 246)' }}>
            Забули пароль?
          </a>
        </div>
        <div className='registerLinkContainer'>
          Не маєте облікового запису? <a href='/'>Зареєструйтеся</a>
        </div>
        <div className='downloadBox'>
          <p>Завантажити додаток</p>
          <div className='downloadBoxLink'>
            <a href='/'>
              <img
                alt='play market link'
                height={40}
                src='https://static.cdninstagram.com/rsrc.php/v3/yq/r/54pQonhlyEd.png'
                width={135}
              />
            </a>
            <a href='/'>
              <img
                alt='microsoft link'
                height={40}
                src='https://static.cdninstagram.com/rsrc.php/v3/yx/r/0WRk16YTMoq.png'
                width={111}
              />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
