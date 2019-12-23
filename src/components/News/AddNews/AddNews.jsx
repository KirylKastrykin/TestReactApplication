import React from 'react';
import classes from './AddNews.module.css'


let AddNews = (props) => {


    let newsTextElement = React.createRef();
    let newsHeaderElement = React.createRef();

    let onNewsTextChange = () => {
        let text = newsTextElement.current.value;
        props.changeNewNewsText(text);
        console.log(text);
    }

    let onNewsHeaderChange = () => {
        let text = newsHeaderElement.current.value;
        props.changeNewNewsHeader(text);
        console.log(text);
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

        if (isValid() == true) {
            debugger;
            props.addNews();
            props.onClose();
        }
    }

    return (
        <>
            {props.isOpen ?
                
                    <div className={classes.addNewsPost}>
                        <div><button className={classes.addNewsPostCloseButtonStyles} onClick={props.onClose}>x</button></div>
                        <div>
                            <h3>News header: <input className={classes.addNewsInput} onChange={onNewsHeaderChange} ref={newsHeaderElement} value={props.newNewsHeader}></input></h3>

                        </div>
                        <div>
                            <span>News text: <textarea placeholder="Don't!" className={classes.addNewsTextArea} onChange={onNewsTextChange} ref={newsTextElement} value={props.newNewsText} ></textarea></span>


                        </div>
                        <div>

                        </div>
                        <div>
                            <div className={classes.footer}><button className={classes.addButton} onClick={onAddNews}>1</button><button className={classes.cancelButton} onClick={props.onClose}>2</button></div>
                        </div>
                    </div>
            
                :
                null
            }

        </>
    );
}


export default AddNews;