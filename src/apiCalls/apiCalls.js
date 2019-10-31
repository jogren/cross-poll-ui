export const getCenters = async () => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  let queryParams = `query{centers {name addressPrint lat lng phone website email id}}`

  let url = `https://safe-space-be.herokuapp.com/graphql?query=${queryParams}`

  try {
    let resp = await fetch(url, options);

    if (!resp.ok) {
      throw new Error('There was an error getting your centers')
    }

    let data = await resp.json();
    return data.data.centers

  } catch (error) {
    throw error
  }
} 

export const getCenterStats = async (centerId) => {
  let url = `https://safe-space-be.herokuapp.com/api/v1/demand/${centerId}`

  try {
    let resp = await fetch(url);

    if (!resp.ok) {
      throw new Error('There was an error getting your center data')
    }

    let data = await resp.json();
    return data

  } catch (error) {
    throw error
  }
} 

export const searchForVisitors = async centerId => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };

  let queryParams = `query {publicUsers {id name center {id name addressPrint}}}`;

  let url = `https://safe-space-be.herokuapp.com/graphql?query=${queryParams}`;

  try {
    let resp = await fetch(url, options);

    if (!resp.ok) {
      throw new Error("There was an error getting the visitors");
    }

    let data = await resp.json();
    return data.data.publicUsers;
  } catch (error) {
    throw error;
  }
};