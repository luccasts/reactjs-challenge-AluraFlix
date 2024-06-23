/* eslint-disable react/prop-types */
import styles from "./Modal.module.css"
import Form from "../../Form";



const CardModal = ({ video, DialogClose, selectedVideo }) => {
    return (
        <>
            {video &&
            <div>
                <div className={ selectedVideo === true ?styles.modalBackground : ""}></div>
                    <dialog style={selectedVideo === true ? { visibility: "visible" } : { visibility: "hidden" }}
                        className={styles.dialog}
                        open={!!selectedVideo}
                        onClose={() => DialogClose()}
                    >
                        <h1>EDITAR CARD:</h1>
                        <button onClick={DialogClose} className={styles.x}><img width={50} height={50} src="/images/x.png" alt="" /></button>
                        <Form method="dialog" video={video} id={video.id} />
                    </dialog>
                </div>}
        </>
    )
}

export default CardModal;
