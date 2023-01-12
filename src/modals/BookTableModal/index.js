import styles from "./styles";
import {useState} from "react";

import saveTableBooking from "../../services/saveTableBooking";
import checkTableAvailability from "../../services/checkTableAvailability";

const minimumSeconds = 30 * 60;

const BookTableModal = ({visible, closeModal}) => {
    const [selectedStartTime, setSelectedStartTime] = useState('');
    const [selectedEndTime, setSelectedEndTime] = useState('');

    const saveBooking = async () => {
        const isAvailable = await checkTableAvailability(selectedStartTime, selectedEndTime);

        if (!isAvailable) {
            alert("There isn't any table available at the specified time");
            return;
        }

        const startTime = new Date(selectedStartTime);
        const endTime = new Date(selectedEndTime);

        if (startTime > endTime) {
            alert("The end time must be after the start time");
            return;
        }

        const diff = (endTime.getTime() - startTime.getTime()) / 1000;

        if (diff < minimumSeconds) {
            alert("Please select at least 30 minutes");
            return;
        }

        await saveTableBooking(selectedStartTime, selectedEndTime);

        closeModal();
    };

    if (visible)
        return(
            <div style={styles.container}>
                <div style={styles.modalBody}>
                    <h2>Book your table</h2>

                    <div>
                        <p>Start time</p>
                        <input onChange={event => setSelectedStartTime(event.target.value)} type={'datetime-local'} id={'startTime'} value={selectedStartTime}/>
                    </div>

                    <div>
                        <p>End time</p>
                        <input onChange={event => setSelectedEndTime(event.target.value)} type={'datetime-local'} id={'endTime'} value={selectedEndTime}/>
                    </div>

                    <button onClick={saveBooking}>Book table</button>
                </div>
            </div>
        );
    else return null;
};

export default BookTableModal;