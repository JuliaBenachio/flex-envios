import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;
  max-height: 700px;

  top: 50px;
  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
    min-height: auto;
    overflow: hidden;
    margin-top: 22px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    height: 680px;
  }
`

export const Slide = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
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

  @media (max-width: 768px) {
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

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
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

  margin: -80px auto 40px auto;

  position: relative;
  z-index: 2;

  background-color: ${cores.branco};
  border-radius: 20px;
  padding: 20px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const InfoBarMobile = styled(InfoBar)`
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin: 32px 0 0 0;
    align-items: center;
    font-size: 8px;
    padding: 16px 20px;
  }
`

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  strong {
    font-size: 14px;
    color: #1d4ed8;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }

  span {
    font-size: 10px;
    color: #6b7280;

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }
`
