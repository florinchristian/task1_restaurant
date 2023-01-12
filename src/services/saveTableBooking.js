import axios from "axios";
import {HOST, saveTableBooking as path} from "./paths";

const saveTableBooking = async (startTime, endTime) => {
    const result = await axios.put(`${HOST}/${path}`, {
        startTime,
        endTime
    });

    return result.data;
};

export default saveTableBooking;