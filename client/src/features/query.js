import axios from "axios";

/**
 * Fetch all the technologies from the API
 * @returns Array of object contains technology info
 */
export const getTechs = async () => {
  const { data } = await axios.get("techs");
  return data;
};

/**
 * Fetch all the technologies from the API
 * @returns Array of object contains technology info
 */
export const getWorks = async () => {
  const { data } = await axios.get("work");
  return data;
};
