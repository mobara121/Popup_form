import logo from './assets/castle_nagoya_6246.png';
import './App.css';
import { makeStyles } from "@material-ui/core"
import Survey from './Survey';
import ModalComponent from './ModalComponent';
import CopyrightIcon from '@material-ui/icons/Copyright';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  icon: {
    fontSize: 'calc(8px + 1vmin)',
    '&:hover': {
      color: '#ffffff',
    }
  }
})

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header"><img className="App-logo" src={logo} alt="logo" /><p className="App-title">Abe Project</p></header>
      <div className="container">
        <div className="element">
          <Survey/>
        </div>
        <div className="element2">
          <ModalComponent/>
        </div>
      </div>
      <div className="App-footer">
        <p className="iconContainer"><CopyrightIcon className={classes.icon}/></p>
        <p>2021 Mizue O'Bara, All rights reserved.</p>
        <p className="iconContainer"><a style={{color:'#9d8189'}} href="https://github.com/mobara121"><GitHubIcon className={classes.icon}/></a></p>
        <p className="iconContainer"><a style={{color:'#9d8189'}} href="https://www.linkedin.com/in/mizueobara/"><LinkedInIcon className={classes.icon}/></a></p>
        <p className="iconContainer"><MailIcon className={classes.icon}/></p>
      </div>
    </div>
  );
}

export default App;
