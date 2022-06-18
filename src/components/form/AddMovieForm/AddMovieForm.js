import styles from "./AddMovieForm.module.css"
import {useState} from "react"
import {nanoid} from "nanoid"
import Alert from "../../alert/Alert"
import Button from "../../ui/Button"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addMovie } from "../../../features/moviesSlices"

const AddMovieForm = () =>{

    //menggunakan dispatch sebagai triger action
    const dispatch = useDispatch()

    //buat navigasi
    const navigation = useNavigate();

    //membuat state object
    const [formData,setFormData] = useState({
        title:"",
        date:"",
        genre:"",
        img:"",
    })

    //membuat fungsi handlechange untuk handle semua input form
    function handleChange(e){
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]:value,
        })

    }

    const [msgError,setMsgError] = useState({
        isTitleError:false,
        isDateError:false,
        isGenreError:false,
        isImgError:false,
    })

    const {isTitleError, isDateError, isGenreError, isImgError} = msgError

    const {title, date, genre, img} = formData

    function validate(){
         //jika title kosong
        if(title === ""){
            setMsgError({
                ...msgError,
                isTitleError:true,
            })
            return false;
        }
        //jika date kosong
        else if(date === ""){
            setMsgError({
                ...msgError,
                isTitleError:false,
                isDateError:true,
            })
            return false;
        }
        //jika type kosong
        else if(genre === ""){
            setMsgError({
                ...msgError,
                isGenreError:true
            })
            return false;
        }
        //jika type kosong
        else if(img === ""){
            setMsgError({
                ...msgError,
                isImgError:true,
                isDateError:false
            })
            return false;
        }else{
            setMsgError({
                ...msgError,
                isTitleError:false,
                isDateError:false,
                isGenreError:false,
                isImgError:false
            })
            return true;
        }
    }

    function submitMovie(){
        const movie = {
                id: nanoid(),
                title: title,
                year: date,
                type: genre,
                poster: img,
            }
    
            //call action menggunakan dispacth
            dispatch(addMovie(movie));

            navigation("/")
    }

    function handleSubmit(e){
        e.preventDefault();

        validate() && submitMovie();
    }

    return(
        <div className={styles.container}>
            <section className={styles.AddMovieForm}>
                <div className={styles.AddMovieForm__left}>
                    <img className={styles.AddMovieForm__image} 
                    src="https://picsum.photos/400/300" alt="placeholder" />
                </div>
                <div className={styles.AddMovieForm__right}>
                    <h2 className={styles.AddMovieForm__title}>Add Movie</h2>

                    <form onSubmit={handleSubmit} className={styles.AddMovieForm__form}>
                            <label className={styles.AddMovieForm__label}
                            htmlFor="">Title</label><br/>
                            <input className={styles.AddMovieForm__input} 
                            name="title"
                            type="text"
                            //memberikan value input : title 
                            value={title} 
                            //membuat event onChange
                            onChange={handleChange}
                            />{isTitleError && <Alert>Title wajib Diisi</Alert>}
                            <br/>
                            <label  className={styles.AddMovieForm__label} 
                            htmlFor="">Year</label><br/>
                            <input className={styles.AddMovieForm__input} 
                            name="date"
                            type="text"
                            //memberikan value input : date
                            value={date}
                            //memberikan event onChange
                            onChange={handleChange}
                            />{isDateError && <Alert>Date wajib Diisi</Alert>} 
                            <br />
                            <label className={styles.AddMovieForm__label} htmlFor="">Genre</label>
                            <br />
                            <select className={styles.AddMovieForm__input} name="genre" value={genre} onChange={handleChange}>
                                <option className={styles.AddMovieForm__option} value="Horror">Horror</option>
                                <option className={styles.AddMovieForm__option} value="Action">Action</option>
                                <option className={styles.AddMovieForm__option} value="Comedy">Comedy</option>
                                <option className={styles.AddMovieForm__option} value="Romance">Romance</option>
                            </select>{isGenreError && <Alert>Genre wajib Diisi</Alert>} 
                            <br />
                            <label className={styles.AddMovieForm__label} htmlFor="">Image</label><br />
                            <input className={styles.AddMovieForm__input} 
                            name="img"
                            type="text" 
                            value={img}
                            onChange={handleChange}/>{isImgError && <Alert>Image wajib Diisi</Alert>}
                            <br />
                            {/* <button className={styles.AddMovieForm__button}><p>Submit</p></button> */}
                            <Button size="md" full>Submit</Button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddMovieForm;