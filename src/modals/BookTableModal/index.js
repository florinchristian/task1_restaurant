import styles from "./styles";
import {useState} from "react";

const BookTableModal = ({visible, closeModal}) => {
    const [selectedTime, setSelectedTime] = useState(null);

    const saveBooking = () => {
      closeModal();
    };

    if (visible)
        return(
            <div style={styles.container}>
                <div style={styles.modalBody}>
                    <h2>Book your table</h2>

                    <div>
                        <p>Start time</p>
                        <input type={'time'} id={'startTime'}/>
                    </div>

                    <div>
                        <p>End time</p>
                        <input type={'time'} id={'endTime'}/>
                    </div>

                    <button onClick={saveBooking}>Book table</button>
                </div>
            </div>
        );
    else return null;
};

export default BookTableModal;