import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 60vh; /* 👈 responsivo por padrão */
  min-height: 400px;
  max-height: 700px;
  z-index: 1;

  top: 50px;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 70vh;
  }

  @media (min-width: 1024px) {
    height: 680px; /* desktop mantém o visual original */
  }
`

export const Slide = styled.div`
  min-width: 100%;
  height: 100%;
`

export const Slider = styled.div`
  display: flex;
  height: 100%;

  transition: transform 0.6s ease-in-out;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  object-position: center;

  @media (min-width: 768px) {
    object-position: top;
  }
`

export const ArrowLeft = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);

  font-size: 28px;

  color: white;
  cursor: pointer;

  @media (min-width: 768px) {
    left: 20px;
    font-size: 40px;
  }
`

export const ArrowRight = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);

  font-size: 28px;

  color: white;
  cursor: pointer;

  @media (min-width: 768px) {
    right: 20px;
    font-size: 40px;
  }
`

export const Dots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  gap: 10px;
`
export const Dot = styled.span<{ $active: boolean }>`
  width: 8px;
  height: 8px;

  border-radius: 50%;

  background-color: ${({ $active }) =>
    $active ? '#ffffff' : 'rgba(255,255,255,0.5)'};

  cursor: pointer;
  transition: all 0.3s;

  transform: scale(${({ $active }) => ($active ? 1.2 : 1)});

  @media (min-width: 768px) {
    width: 10px;
    height: 10px;
  }
`

export const InfoBar = styled.div`
  width: 90%;
  max-width: 1100px;

  margin: -60px auto 40px auto;

  position: relative;
  z-index: 2;

  background-color: ${cores.branco};
  border-radius: 20px;
  padding: 16px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 20px;
    margin: -80px auto 40px auto;
  }
`

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  strong {
    font-size: 16px;
    color: #1d4ed8;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }

  span {
    font-size: 12px;
    color: #6b7280;

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }
`
