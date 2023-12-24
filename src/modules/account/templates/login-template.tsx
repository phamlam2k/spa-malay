import FormLogin from '../components/login/FormLogin'

const LoginTemplate = () => {
  return (
    <div className='bg-white container lg:w-[600px] p-4 rounded-md absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
      <h1 className='text-center text-xl mb-5'>Đăng nhập</h1>
      <FormLogin />
    </div>
  )
}

export default LoginTemplate
