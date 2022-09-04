export const handleClick = (event) => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      dispatch(closeModal());
    }
  };
