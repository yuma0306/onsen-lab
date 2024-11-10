import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import GalleryCard from '@/components/GalleryCard/GalleryCard'

describe('GalleryCard', () => {
  it('ホバーされてclassが追加されるか', () => {
    render(
      <GalleryCard
        src="/img/img-gero.jpg"
        width={288}
        height={188}
        text="下呂温泉"
        href="/gero/"
      />
    )
    const card = screen.getByTestId('gallery-card')
    fireEvent.mouseEnter(card)
    expect(card.className).toMatch(/galleryCard__modal--active/)
  })
  it('ホバーが外れたらclassが削除されるか', () => {
    render(
      <GalleryCard
        src="/img/img-gero.jpg"
        width={288}
        height={188}
        text="下呂温泉"
        href="/gero/"
      />
    )
    const card = screen.getByTestId('gallery-card')
    fireEvent.mouseLeave(card)
    expect(card.className).not.toMatch(/galleryCard__modal--active/)
  })
})

