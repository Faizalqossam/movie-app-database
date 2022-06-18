import styles from "./Alert.module.css" 

function Alert(props){
    /**
     * Chiildren adalah props khusus
     * Berisi konten/children yang ada dalam component.
     */
    const {children} = props

    return(
        <div className={styles}>
            <span>{children}</span>
        </div>
    )
}

export default Alert;