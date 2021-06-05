import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    q:{
        margin: '2vh auto'
    },
    result:{
        display:'flex', justifyContent:'center', height:'4vh', lineHeight:'4vh', margin: 'auto 5vw', boxShadow:'4px 4px 18px #585a5a'
    },
    question:{
        fontSize: 'calc(8px + 1.1vmin)', fontWeight:'bold'
    },
    green: {backgroundColor: '#a6dfbe', width: '15vw', paddingLeft:'1vw', fontSize:'0.8em'},
    red:{backgroundColor: '#f4acb7', width: '85vw', paddingLeft:'1vw', fontSize:'1em'},

})

const Survey = () => {
    const classes = useStyles();
    return (
        <div style={{width: '60%', minWidth: '320px', margin: '0 auto'}}>
            <h1>Customer Satisfaction Survey Result for 2020</h1>
            <div className={classes.q}>
                <p className={classes.question}>1. Which of the following words would you use to describe our product?</p>
                <div className={classes.result}>
                    <div className={classes.green} style={{width:'10vw'}}>Buggy</div>
                    <div className={classes.red}>Life-saving</div>
                </div>
            </div>
            <div className={classes.q}>
                <p className={classes.question}>2. How well does our product meet your needs?</p>
                <div className={classes.result}>
                    <div className={classes.green}>Badly</div>
                    <div className={classes.red}>Very well</div>
                </div>
            </div>
            <div className={classes.q}>
                <p className={classes.question}>3. How would you rate the value for the money of the product?</p>
                <div className={classes.result}>
                    <div className={classes.green} style={{width:'10vw'}}>Bad</div>
                    <div className={classes.red}>Good</div>
                </div>
            </div>
            <div className={classes.q}>
                <p className={classes.question}>4. Are you to buy again from us?</p>
                <div className={classes.result}>
                    <div className={classes.green} style={{width:'20vw'}}>No</div>
                    <div className={classes.red}>Yes</div>
                </div>
            </div>
            <div className={classes.q}>
                <p className={classes.question}>5. Compared to our competitors, is our product quality better or worse?</p>
                <div className={classes.result}>
                    <div className={classes.green}>Worse</div>
                    <div className={classes.red}>Better</div>
                </div>
            </div>
        </div>
    )
}

export default Survey
