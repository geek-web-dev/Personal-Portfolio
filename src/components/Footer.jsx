import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer className='text-center'>
      <div className='social-links d-flex justify-content-center mb-2'>
        <SocialLinks />
      </div>
      <p className='m-0'>Copyright © <span className="fw-bold">2024</span> All Rights Reserved.</p>
    </footer>
  )
}

export default Footer