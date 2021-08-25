
export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_APP}/bills`


export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_BUDGET_API_KEY}`
  }
}