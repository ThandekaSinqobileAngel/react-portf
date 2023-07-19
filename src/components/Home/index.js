import LogoTitle from '../../assets/images/logo-s.png';
const Home = () => {
  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>Hi, <br /> I'm
        <img src={LogoTitle} alt='developer' />
        Thandeka
        <br/>
        Web Developer
        </h1> 
        <h2>Frontend Developer / JavaScript Developer / React Developer</h2>
        
      </div>

    </div>
  );
}

export default Home;