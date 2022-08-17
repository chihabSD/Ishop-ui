import { useEffect  } from "react";

export const useHoverOver = (ref, fun) => {

  
    // Ref element that exist 
    const listener = e => {

        // check if ref is exist || our inside the drop down 
        if(!ref.current || ref.current.contains(e.target)){
            return ;
        }
        fun()
    }
    // add event listent
    document.addEventListener('mouseover',listener)
    useEffect(() => {

        return () => {

    // add event listent
    document.removeEventListener('mouseover',listener)
        }
        // run when ref is changed
    }, [ref])
}