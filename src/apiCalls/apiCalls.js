export const getCenters = async () => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let queryParams = `query{centers {name addressPrint lat lng phone website email id}}}`

  let url = `https://safe-space-be.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url, options);
    console.log(resp)

    if (!resp.ok) {
      throw new Error('There was an error getting your centers')
    }

    let data = await resp.json();
    console.log(data)
    return data

  } catch (error) {
    throw error
  }
} 

export const getCenterStats = async () => {
  let url = `https://safe-space-be.herokuapp.com/api/v1/demand`

  try {
    let resp = await fetch(url);
    console.log(resp)

    if (!resp.ok) {
      throw new Error('There was an error getting your center data')
    }

    let data = await resp.json();
    console.log(data)
    return data

  } catch (error) {
    throw error
  }
} 