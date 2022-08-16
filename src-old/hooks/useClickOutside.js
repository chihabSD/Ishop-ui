import { useEffect, useState } from "react";

export const useClickOutSide = (ref, fun) => {

  
    // Ref element that exist 
    const listener = e => {

        // check if ref is exist || our inside the drop down 
        if(!ref.current || ref.current.contains(e.target)){
            return ;
        }
        fun()
    }
    // add event listent
    document.addEventListener('mousedown',listener)
    document.addEventListener('touchstart',listener)
    useEffect(() => {

        return () => {

    // add event listent
    document.removeEventListener('mousedown',listener)
    document.removeEventListener('touchstart',listener)
        }
        // run when ref is changed
    }, [ref])
}