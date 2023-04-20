const boxCollision = (box1: DOMRect, box2: DOMRect) => {
  const box1Height = box1.y + box1.height
  const box2Height = box2.y + box2.height

  if (box1Height >= box2.y && box1.y <= box2Height) {
    return true
  } else false
}

export default boxCollision