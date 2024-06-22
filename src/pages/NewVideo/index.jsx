import Container from "../../components/Container";
import Form from "../../components/Form";
import styles from "./NewVideo.module.css"

const NewVideo = () => {

    return (
        <div className={styles.background}>
            <Container>
                <div className={styles.center}>
                    <div className={styles.text}>
                        <h1>NOVO VÍDEO !</h1>
                        <p>Complete o formulário para criar um novo card de vídeo.</p>
                    </div>
                    <div className={styles.containerForm}>

                        <div className={styles.textSecondary}>
                            <hr />
                            <h3>CRIAR CARD</h3>
                            <hr />
                        </div>
                        <Form method="post" onclick={true} />
                    </div>
                </div>
            </Container>
        </div>
    )

}

export default NewVideo;