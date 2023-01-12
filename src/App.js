import {useEffect, useState} from "react";

import styles from './styles';
import BookTableModal from "./modals/BookTableModal";
import getCountOfAvailableTables from "./services/getCountOfAvailableTables";

const App = () => {
    const [availableTables, setAvailableTables] = useState(0);
    const [bookTableModalVisible, setBookTableModalVisible] = useState(false);

    const updateAvailableTables = async () => {
        const result = await getCountOfAvailableTables();
        setAvailableTables(result);
    }

    useEffect(() => {
        updateAvailableTables();
    });

    return (
        <div style={styles.container}>
            <BookTableModal
                visible={bookTableModalVisible}
                closeModal={() => setBookTableModalVisible(false)}
            />

            <h1>Fancy restaurant</h1>

            <p>Available tables: {availableTables}</p>

            <button disabled={!availableTables} onClick={() => setBookTableModalVisible(true)}>
                {availableTables? 'Book your table' : 'There are not any tables available'}
            </button>
        </div>
    );
};

export default App;