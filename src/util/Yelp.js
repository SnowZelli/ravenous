const apiKey = 'b33yb3iZPHh_IJOlRozzyyJ9LRDND9Z3zJg97BAK3MkVbLDOrv7oGdXw9d0QXffyfn6kIlnu8aFfoJDpY3n1KRYgPERDBUVpMDZRgoj0ID2VzFxx_FrsgYqqh5tlXXYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
        .then(response => response.json())
        .then(jsonResponse => {
            if(jsonResponse.businesses) {
                console.log(jsonResponse);
                return jsonResponse.businesses.map(business => {
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
                       reviewCount: business.review_count,
                       url: business.url
                   };
                });
            }
        });
    }
};

const autoComplete = {
    suggest(term) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/autocomplete/search?term=${term}&limit=10`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
        .then(response => response.json())
        .then(jsonResponse => {
            
        });
    }
}

export default Yelp;