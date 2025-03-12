import Distance from './Components/Distance/Distance';
import Header from './Components/Header/Header';
import ObjectCode from './Components/ObjectCode/ObjectCode';
import Objects from './Components/Objects/Objects';
import Owner from './Components/Owner/Owner';
import styles from './app.module.css'

function App() {
  return (
    <div className={styles.app}>
        <Header />
        <div className={styles.container}>
        <ObjectCode />
        <Owner />
        <Objects />
        <Distance />
        </div>
    </div>
  );
}

export default App;
