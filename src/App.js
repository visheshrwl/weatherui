import styles from './App.module.css';
import './Assets/background.png';
import logo from './Assets/icon.png';

function App() {
  return (
    <div className={styles.card}>
        <h4>NEW DELHI</h4>
        <h6>PARTLY CLOUDY</h6>
        <img src={logo} alt="icon" />
        <h1>32<sup>&deg;</sup></h1>
        <div className={styles.container}>
            <div className="details">
                <p>max</p>
                <span>32<sup>&deg;</sup></span>
            </div>
            <div className={styles.details}>
                <p>min</p>
                <span>30<sup>&deg;</sup></span>
            </div>
        </div>
    </div>
  );
}

export default App;