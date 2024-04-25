
class HttpService {

    private baseUrl = 'http://192.168.56.1:3000/'

    public async postRequest( uri: String, body: any) {
        let res =await fetch( this.baseUrl+uri , {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        
        }).then(response => response.json())
        .then(data => {
            return data
          })
        return res;
    }; 

    public async getRequest( uri: String, params: any) {
      console.log(params); 
      let res =await fetch( this.baseUrl+uri+"/"+params , {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
      }).then(response => response.json())
      .then(data => {
          return data
        })
      return res; 
    }; 

    
    public async putRequest( uri: String, body: any) {
        console.log(body); 
        const res = await fetch( this.baseUrl+uri , {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
          }).then(response => response.json())
          .then(data => {
              return data
            })
          return res;
    }; 
    

}
  
const httpService = new HttpService();
export default httpService; 