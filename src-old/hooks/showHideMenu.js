
export const useShowHide = ({ handleDropdown, id, dropdown }) => {
    useEffect(() => {
        const handleClick = e => {
            if (!e.target.classList.contains('dropdown-toggle')) {
                handleDropdown(null);
            }
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [handleDropdown])


}
