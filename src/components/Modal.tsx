
import React, { useEffect, useState } from "react"

/**
 * Modal - Component - Show Modal Component
 * 
 * @component
 * @param {Object} props - Component props.
 * @param {boolean} props.toggle - Show or not the modal.
 * @param {Function} props.onClose - Function to be called for closed modal.
 * @param {number[]} props.backgroundColor - Background color in RGBA format.
 * @param {string} props.border - Border style of the modal.
 * @param {string} props.title - Title of this modal.
 * @param {string} props.content - Content of this modal.
 * @param {number} props.width - Width of the modal in percentage.
 * @returns {JSX.Element | null} - Modal component JSX element or null if not toggled.
 * 
 * @author quentinm22
 */

export interface ModalProps {
    toggle: boolean;
    onClose: () => void;
    backgroundColor: number[];
    border: string;
    title: string;
    content: string;
    width: number;
}

const Modal = ({toggle, onClose, backgroundColor, border, title, content, width}: ModalProps) => {
    const [bgColor, setBgColor] = useState<string>('')
    const [cursor, setCursor] = useState<boolean>(false)
    useEffect(()=>{
         if (backgroundColor) {
        setBgColor(`rgba(${backgroundColor[0]},${backgroundColor[1]}, ${backgroundColor[2]}, ${backgroundColor[3]})`)
         } else {
        setBgColor('rgba(0, 0, 0, 0.5)')
        }
    }, [backgroundColor])
  return (
  <>
    {toggle ? (
         <div 
            onClick={onClose}
            style={{
                background: `${bgColor}`,
                position: "fixed",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
         }}
         >
        <div 
         onClick={e => e.stopPropagation()}
         style={{
            width: `calc(${width}% - 30px)`,
            backgroundColor: "white",
            margin: "0px 50px 0px",
            padding: "15px",
            borderRadius: "20px",
         }}
         >
             <fieldset
             style={{
                border: `2px solid ${border}`,
                borderRadius: "8px",
                position: "relative"
             }}>
                {title &&
                   <legend
                   style={{
                       display: "flex",
                       alignItems: "center",
                   }}
                   >
                       <h2
                       style={{
                           margin: 0
                       }}
                       >{title.toUpperCase()}</h2>
                   </legend>
                }
         
            <span 
            className="cross-modal"
            onClick={() => {
                setCursor(false) 
                onClose()
            }}
            style={{
                position: "absolute",
                right: "15px",
                top: "-35px",
                width: "25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                fontSize: "x-large",
                cursor: "pointer",
                color: cursor ? "red" : "black",
            }}
            onMouseEnter={()=> setCursor(true)}
            onMouseLeave={() => setCursor(false)}
            >&#10006;</span>
            <p
            style={{
                width: "calc(100% - 30px)",
                padding: "15px"
            }}>{content}</p>
        </fieldset>
        </div>
       
    </div>
     ): null}
  </>   
  )
}

export default Modal