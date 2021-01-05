const scrollToTop = (event) => {
  const element = Object.values(event.target)[0].elementType;
  console.log(element);
  if (element === 'nav' || element === 'ol' || element === 'li') {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
};

export default scrollToTop;
