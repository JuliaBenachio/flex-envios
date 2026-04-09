import { useEffect, useState } from 'react'

import slide1 from '../../assets/slide1.jpg'
import slide2 from '../../assets/slide2.jpeg'
import slide3 from '../../assets/slide3.jpg'
import * as S from './styles'

const images = [slide1, slide2, slide3]
const extendedImages = [images[images.length - 1], ...images, images[0]]

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(1)
  const [transition, setTransition] = useState(true)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return

    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        setTransition(true)
        return prev + 1
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [paused])

  useEffect(() => {
    if (currentImage === extendedImages.length - 1) {
      setTimeout(() => {
        setTransition(false)
        setCurrentImage(1)

        setTimeout(() => setTransition(true), 50)
      }, 600)
    }

    if (currentImage === 0) {
      setTimeout(() => {
        setTransition(false)
        setCurrentImage(images.length)

        setTimeout(() => setTransition(true), 50)
      }, 600)
    }
  }, [currentImage])

  const nextSlide = () => {
    setTransition(true)
    setCurrentImage((prev) => prev + 1)
  }

  const prevSlide = () => {
    setTransition(true)
    setCurrentImage((prev) => prev - 1)
  }

  return (
    <>
      <S.Container
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <S.Slider
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
            transition: transition ? 'transform 0.6s ease-in-out' : 'none',
          }}
        >
          {extendedImages.map((img, index) => (
            <S.Slide key={index}>
              <S.Img src={img} alt="" />
            </S.Slide>
          ))}
        </S.Slider>

        <S.ArrowLeft onClick={prevSlide}>‹</S.ArrowLeft>
        <S.ArrowRight onClick={nextSlide}>›</S.ArrowRight>

        <S.Dots>
          {images.map((_, index) => (
            <S.Dot
              key={index}
              $active={index === currentImage - 1}
              onClick={() => {
                setTransition(true)
                setCurrentImage(index + 1)
              }}
            />
          ))}
        </S.Dots>
      </S.Container>
      <S.InfoBar>
        <S.InfoItem>
          <strong>+11 Milhões</strong>
          <span>de envios por mês</span>
        </S.InfoItem>

        <S.InfoItem>
          <strong>+3.500</strong>
          <span>Unidades Operacionais</span>
        </S.InfoItem>

        <S.InfoItem>
          <strong>+8.200</strong>
          <span>Entregadores</span>
        </S.InfoItem>

        <S.InfoItem>
          <strong>+1.552</strong>
          <span>Cidades atendidas</span>
        </S.InfoItem>
      </S.InfoBar>
      <S.InfoBarMobile>
        <S.InfoItem>
          <strong>+11 Milhões</strong>
          <span>de envios por mês</span>
        </S.InfoItem>

        <S.InfoItem>
          <strong>+3.500</strong>
          <span>Unidades Operacionais</span>
        </S.InfoItem>

        <S.InfoItem>
          <strong>+8.200</strong>
          <span>Entregadores</span>
        </S.InfoItem>

        <S.InfoItem>
          <strong>+1.552</strong>
          <span>Cidades atendidas</span>
        </S.InfoItem>
      </S.InfoBarMobile>
    </>
  )
}

export default Hero
