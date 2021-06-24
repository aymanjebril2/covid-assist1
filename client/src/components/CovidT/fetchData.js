import axios from 'axios'
export const fetchDailyData = async () => {
    const url ="/daily.json"
    try {
      const { data } = await axios.get(url);
  
      return data.map(({ positive, recovered, hospitalizedDischarged ,death, dateChecked: date }) => ({ confirmed: positive, recovered,hospitalizedDischarged , deaths: death, date }));
    } catch (error) {
      return error;
    }
  };


