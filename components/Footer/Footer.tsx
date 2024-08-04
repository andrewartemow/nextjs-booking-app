import React from 'react'

import Container from '../Container/Container'
import Logo from '../Logo/Logo'

const Footer = () => {
    return (
        <footer className='w-full bg-blue py-10'>
            <Container>
                <div className='w-full flex justify-center'>
                    <Logo imageUrl="/assets/logo-footer.png" width={70} />
                </div>
            </Container>
        </footer>
    )
}

export default Footer