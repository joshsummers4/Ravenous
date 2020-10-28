const apiKey = "7zpCyDRDGoxTPphL40J6WxIBOM7LUTz7Aqx3-w8_qfauaSNvvz5-y7L82_VMKv9iNuclbiCYtrqlObS3bmZ4jvRd2Rb9a70WOZOlI_XJCuFL_me8BR_IvZaRTVE1X3Yx";

const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,            
      },
    }).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      if(jsonResponse.businesses){
        return jsonResponse.businesses.map((business) => {
          return { 
            id: business.id, 
            imageSrc: business.image_url, 
            name: business.name, 
            address: business.location.address1, 
            city: business.location.city, 
            state: business.location.state, 
            zipCode: business.location.zip_code, 
            category: business.categories[0].title, 
            rating: business.rating, 
            reviewCount: business.reviewCount
          }
        });
      }
    })
  }
}

export default Yelp;