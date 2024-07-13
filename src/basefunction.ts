import { useDispatch } from "react-redux";

class Cookie {
    getCookie(name:string) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    
    setCookie(name:string, value:string, options = {}) {
    
        options = {
          path: '/',
          // при необходимости добавьте другие значения по умолчанию
          ...options
        };
      
        if (options.expires instanceof Date) {
          options.expires = options.expires.toUTCString();
        }
      
        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
      
        for (let optionKey in options) {
          updatedCookie += "; " + optionKey;
          let optionValue = options[optionKey];
          if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
          }
        }
      
        document.cookie = updatedCookie;
    }
    
    deleteCookie(name:string) {
        this.setCookie(name, "", {
          'max-age': -1
        })
    }
    
    getJWT(){
        return this.getCookie('JWT_token')
    }

    LogIn(token:string){
        this.setCookie('JWT_token', token, {
            'max-age': 3600
          } )
    }

    LogOut(){
        this.setCookie('JWT_token', '', {
            'max-age': 3600
          } )
    }
}
const cooks = new Cookie()
export default cooks