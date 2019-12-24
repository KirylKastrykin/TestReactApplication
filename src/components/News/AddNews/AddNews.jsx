import React, { useState } from 'react';
import classes from './AddNews.module.css'


let AddNews = (props) => {

    let newsTextElement = React.createRef();
    let newsHeaderElement = React.createRef();

    let onNewsTextChange = () => {
        let text = newsTextElement.current.value;
        props.changeNewNewsText(text);
    }

    let onNewsHeaderChange = () => {
        let text = newsHeaderElement.current.value;
        props.changeNewNewsHeader(text);
    }

    let isValid = () => {
        if (!newsHeaderElement.current.value || !newsTextElement.current.value) {
            return false;
        }
        else {
            return true;
        }
    }

    let onAddNews = () => {

        if (isValid()) {
            props.addNews();
            props.onClose();
        }
    }

    let closeForm = () => {
        props.onClose();
        props.changeNewNewsHeader("");
        props.changeNewNewsText("");

    }

    let isButtonValid = () => {
        if (props.newNewsText == "" || props.newNewsHeader == "") {
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <>
            {props.isAddNewsOpen ?
                <form>
                    <div className={classes.addNewsPost}>
                        <div>
                            <button className={classes.addNewsPostCloseButtonStyles} onClick={closeForm}>x</button>
                        </div>

                        <div>
                            <h3>News header: <input className={classes.addNewsInput} onChange={onNewsHeaderChange} ref={newsHeaderElement} value={props.newNewsHeader}></input></h3>
                        </div>

                        <div>
                            <span>News text: <textarea placeholder="Do it!" className={classes.addNewsTextArea} onChange={onNewsTextChange} ref={newsTextElement} value={props.newNewsText} ></textarea></span>
                        </div>

                        <div>

                        </div>

                        <div>
                            <div className={classes.footer}><button disabled={isButtonValid()} className={classes.addButton} onClick={onAddNews}>Submit</button><button className={classes.cancelButton} onClick={closeForm}>Cancel</button></div>
                        </div>
                    </div>
                </form>

                :
                null
            }

        </>
    );
}


export default AddNews;