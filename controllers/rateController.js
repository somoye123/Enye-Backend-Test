import axios from 'axios';
const ExchangeRateApi = 'https://api.exchangeratesapi.io/latest';

// Intergrate with Exchange Rate external api to get rates
export const GetExchangeRateController = async (req, res) => {
  try {
    const { base, currency } = req.query;
    
    const response = await axios(
      `${ExchangeRateApi}?base=${base}&symbols=${currency}`
    );

    const { data: results } = response;

    res.json({ results });
  } catch (err) {
    //show error to user
    res.status(500).json({ status: 'error', message: 'server error' });
  }
};
