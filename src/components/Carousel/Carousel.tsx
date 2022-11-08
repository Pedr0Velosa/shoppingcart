import React, { useState, useEffect, useRef } from 'react'
import styles from '@styles/Carousel.module.css'
import CarouselItem from './CarouselItem';

const Carousel = ({ images }: { images: string[] }) => {
  const [selected, setSelected] = useState<number>(0)
  const carouselRef = useRef<HTMLUListElement | null>(null);

  const handleObserver = () => {
    const imageSelect = document.querySelector('.image-select')
    const imageSelectNumber = imageSelect?.getAttribute('data-item')
    if (!imageSelectNumber) return
    setSelected(parseInt(imageSelectNumber) || 0)
  }

  const handleOnClick = (e: any, index: number) => {
    e.preventDefault();
    const imageIndexSelect = document.querySelector(`[data-item="${ index }"]`);
    imageIndexSelect?.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth',
    })
    setSelected(index)
  }

  useEffect(() => {
    const carousel: HTMLUListElement | null = carouselRef.current
    const carouselChild: NodeListOf<ChildNode> | undefined = carousel?.childNodes
    const observer: IntersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('image-select', entry.isIntersecting)
        handleObserver()
      })
    }, {
      threshold: 0.1,
    }
    )
    carouselChild?.forEach((child: any) => (
      observer.observe(child)
    ))
    return () => (
      carouselChild?.forEach((child: any) => (
        observer.unobserve(child)
      ))
    )
  }, [])

  return (
    <div className={styles.carousel}>
      <ul
        ref={carouselRef}
        className={styles['inner-carousel']}
      >
        {images.map((image, index) => (
          <CarouselItem image={image} index={index} key={index} />
        ))
        }
      </ul>
      <div>
        <ul className={styles.dots}>
          {images.map((image, index) => (
            <li
              key={index}
              onClick={(e) => handleOnClick(e, index)}
              className={selected === index ? styles.selected : ''}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Carousel;