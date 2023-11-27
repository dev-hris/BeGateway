import { useState, useRef, useEffect } from "react";

const trfRegExp = /[-0-9.]+(?=px)/;
const endScroll = 50;

export function useSlider(length: number, width?: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [widthBlock, ] = useState(() => width ? width : document.body.clientWidth)

  const [touchStartX, setTouchStartX] = useState<number>(0);
  const [transformStart, setTransformStart] = useState<number>(0);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if(!ref.current) return
    setTouchStartX(e.touches[0].clientX);
    setTransformStart(Number(ref.current.style.transform.match(trfRegExp)));
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if(!ref.current) return
    const translatePixel = e.touches[0].clientX - touchStartX;
    const transform = transformStart + translatePixel;
    if(transform <= endScroll && transform >= -(widthBlock * (length - 1)) - endScroll ) {
      ref.current.style.transform = `translate(${transformStart + translatePixel}px)`;
    }
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if(!ref.current) return
    const transformEnd = Number(ref.current.style.transform.match(trfRegExp));
    showNewElement(Math.round(Math.abs(transformEnd) / widthBlock))
    setTouchStartX(() => {
      setTransformStart(0);
      return 0
    });
  };

  const onMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    const width = Math.round(document.body.clientWidth / 2);
    if (width < e.clientX) {
      showNewElement(activeIndex + 1);
      return;
    }
    showNewElement(activeIndex - 1);
  };
  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(-${activeIndex * widthBlock}px)`;
    }
    const timer = setTimeout(() => {
      showNewElement(activeIndex + 1)
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeIndex, touchStartX]);

  const showNewElement = (index: number) => {
    if (index > length - 1) {
      setActiveIndex(0);
      return;
    }
    if (index < 0) {
      setActiveIndex(length - 1);
      return;
    }
    setActiveIndex(index);
  };
  return {
    ref,
    activeIndex,
    setActiveIndex: showNewElement,
    onMouseUp,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
}
