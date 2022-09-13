import React from 'react';
import Loading from './Loading';


class App9 extends React.Component{
    state = {
        isLoading : false,
        Users: [],
        errorMsg: "",
    }
    handleFetch = () => {
        this.setState ({
            isLoading: true,
            Users: [],
            errorMsg: "",
        })
        setTimeout(()=>{fetch("https://reqres.in/api/users?page=0")
        .then((response) => response.json())
        .then((response) => {
            console.log(response.data);
          this.setState({
            isLoading: false,
            Users : response.data,
            errorMsg: "",
          })
       }).catch(()=>this.setState({
        isLoading : false,
        Users: [],
        errorMsg: "Unable to fetch user list",
       }))},1000)
        
       
    }
    render(){
        const renderUser = (
            <div className="userlist-container">
              {this.state.Users.map((item, index) => (
                <div className="user-container" key={index}>
                  <img src={item.avatar} alt="" />
                  <div className="userDetail">
                    <div className="first-name">{`${item.first_name}                
                                           ${item.last_name}`}</div>
                    <div className="last-name">{item.email}</div>
                  </div>
                </div>
              ))}
            </div>
          );

        
        return (
            <div>
             {this.state.isLoading ? <Loading /> : renderUser}
             {this.state.errorMsg && (<div className="error">{this.state.errorMsg}</div>)}
             <button disabled={this.state.isLoading} onClick={this.handleFetch}>Fetch Data</button>
             <h1>shdvfgsshdgfgwaebfhsgdafvhadsgfysgdfhbvsdygfhasvdhfgisadbfsagdugiusadgfusadufgsyadgfygasdufgaueyuiywofnvknoivndonvuid jd  fh  fbsdgfueigfuigueiwgriuebfuierhuerhuferyuiguifsdbuifhsiduhfajhisueufjaeburipqihbvaduifhgjawiuhfuiabuiudfjasdgufi</h1>
            </div>
        )  
       
       
    }
}


export default App9;
