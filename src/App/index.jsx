import styles from './styles.module.scss';
import Header from '../components/Header'
import TitleBtn from '../components/NewUser'
import SearchBar from '../components/SearchBar'
import Table from '../components/Table'

function App() {
  return (
    <div className={styles['container']}>
      <Header />
      <TitleBtn />
      <SearchBar />
      <Table />
    </div>
  );
}

export default App;
