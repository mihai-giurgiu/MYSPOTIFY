export const checkAndReturnToken = (history) => {
    const token = localStorage.getItem('token'); 

        if(token === null || token === undefined){
            if(history){
                history.push('/login');
                return null;
            }
        } 
        const parseToken = JSON.parse(token);

        const date =new Date();
        if(parseToken.expiration < date.getTime() ){
            if(this.props.history){
                history.push('/login');
                return null;            }
        }

        return parseToken.token; 
};

