import axios from "axios";

import {getCountOfAvailableTables as path, HOST} from "./paths";

const getCountOfAvailableTables = async () => {
    const result = await axios.get(`${HOST}/${path}`);
    return result.data;
};

export default getCountOfAvailableTables;