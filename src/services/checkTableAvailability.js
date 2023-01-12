import axios from "axios";
import {checkAvailability as path, HOST} from "./paths";

const checkTableAvailability = async (startTime, endTime) => {
    const result = await axios.get(`${HOST}/${path}`, {
        params: {
            startTime,
            endTime
        }
    });

    return result.data;
};

export default checkTableAvailability;