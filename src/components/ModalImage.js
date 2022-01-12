import React, {useEffect} from "react"
import * as styles from "./ModalImage.module.css"

const ModalImage = () => {

    useEffect(()=>{
        const modal = document.getElementById("modal");
        const modalImage = document.getElementById("modal-image");
        const images = document.getElementsByClassName("image-for-modal");
        for (let image of images) {
            image.addEventListener("click", (event) => modalImageOpen(event));
        }

        function modalImageOpen(event) {
            let image = event.target;
            let captionText = document.getElementById("caption");
            console.log()

            modal.style.display = "grid";
            modal.tabIndex = 0;
            modal.children[0].tabIndex = 0;
            modalImage.src = image.src;
            modalImage.alt = image.alt;
            captionText.innerHTML = image.alt;
        }
        modal.onclick = function () {
            modal.style.display = "none";
        };
        document.onkeyup = function (e) {
            if(e.code === "Escape"){
                modal.style.display = "none";
            }
        };
    }, [])

    return (
        <div id="modal" className={styles.modal}>
            <div className={styles.modal__content}>
                <img className={styles.modal__content__image} id="modal-image" alt="Modal"/>
                <p id="caption" className={styles.modal__title}/>
            </div>
        </div>
    )
}

export default ModalImage