import {useState, useRef, useEffect, useContext} from "react"

function Logo({id, ref_accordion, text, set_accordion_text}){

    function handleHover(ref) {
        ref.current.classList.toggle("ready")
    }

    function toggleAccordion(event, ref_accordion, text) {

        function close_accordion(){
            accordion.classList.remove("open")
        }

        function open_accordion(){
            accordion.classList.add("open")
        }

        function remove_content_id(){
            accordion.removeAttribute('content-id')
        }

        function set_text(){
            set_accordion_text(text)
        }

        function set_content_id(){
            accordion.setAttribute('content-id', clicked_element_id)
        }

        function handleOutsideClick(event) {
            // if user clicks outside, the menu gets closed and the outside-click eventlistener is removed.
            const clickedElement_row = event.target.parentElement.id
        
            if (clickedElement_row !== row){
                close_accordion()
                remove_content_id()
                document.removeEventListener('click', handleOutsideClick, true)
            }
        }

        function add_outside_click_listener(){
            document.addEventListener('click', handleOutsideClick, true)
        }

        function remove_outside_click_listener(){
            document.removeEventListener('click', handleOutsideClick, true)
        }

        const accordion            = ref_accordion.current
        const clicked_element_id   = event.target.id
        const accordion_is_open    = accordion.classList.contains("open")
        const accordion_content_id = accordion.getAttribute('content-id')
        const row                  = event.target.parentElement.id

        if (accordion_is_open) {
            if (accordion_content_id === clicked_element_id) {
                close_accordion()
                remove_content_id()
                remove_outside_click_listener()
            }
            else{
                set_text()
                set_content_id()
                add_outside_click_listener()
            }
        }
        else{
            open_accordion()
            set_text()
            set_content_id()
            add_outside_click_listener()
        }
    }

    return(
    <a className="logo" id={id} onClick={(event) => toggleAccordion(event,ref_accordion, text)} onMouseEnter={() => handleHover(ref_accordion)} onMouseLeave={() => handleHover(ref_accordion)}>
        <img src={`./svg/${id}.svg`} alt="" />
        <p>{id}</p>
    </a>
    )

}

export default Logo;