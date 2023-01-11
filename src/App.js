import {useState} from "react";

import styles from './styles';
import BookTableModal from "./modals/BookTableModal";

const App = () => {
    const [availableTables, setAvailableTables] = useState(0);
    const [bookTableModalVisible, setBookTableModalVisible] = useState(true);

    return (
        <div style={styles.container}>
            <BookTableModal
                visible={bookTableModalVisible}
                closeModal={() => setBookTableModalVisible(false)}
            />

            <h1>Fancy restaurant</h1>

            <p>Available tables: {availableTables}</p>

            <button onClick={() => setBookTableModalVisible(true)}>Book your table</button>
        </div>
    );
};

export default App;