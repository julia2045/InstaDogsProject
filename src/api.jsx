export const API_URL = 'https://dogsapi.origamid.dev/json/'

export function Token(body) {
  return {
    url: API_URL + 'jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  }
}

export function Validate_Token(token) {
  return {
    url: API_URL + 'jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        authorization: 'Bearer ' + token,
      },
    },
  }
}

export function UserGet(token) {
  return {
    url: API_URL + 'api/user',
    options: {
      method: 'GET',
      headers: {
        authorization: 'Bearer ' + token,
      },
    },
  }
}

export function UserPost(body) {
  return {
    url: API_URL + 'api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  }
}

export function PhotoPost(formData, token) {
  return {
    url: API_URL + 'api/photo',
    options: {
      method: 'POST',
      headers: {
        authorization: 'Bearer ' + token,
      },
      body: formData,
    },
  }
}


export function PhotosGet({page, total, user}) {
  return {
    url: `${API_URL}api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store'
    },
  }
}

export function PhotoSoloGet(id) {
  return {
    url: `${API_URL}api/photo/${id}`
    
  }
}



export function PhotoGet(id) {
  return {
    url: `${API_URL}api/photo/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store'
    },
  }
}

export function CommentPost(id, body) {
  return {
    url: `${API_URL}api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      body: JSON.stringify(body),
    },
  }
}

export function PhotoDELETE(id) {
  return {
    url: `${API_URL}api/photo/${id}`,
    options: {
      method: 'DELETE',
      headers: {
       
        authorization: 'Bearer ' + window.localStorage.getItem('token'),
      }
    },
  }
}


export function PassWordLost(body){
  return{
    url: API_URL + '/api/password/lost',
    options: {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }
  }

}

export function PassWordReset(body){
  return{
    url: API_URL + '/api/password/reset',
    options: {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }
  }

}

export function GetStats(){
  return{
    url: API_URL + '/api/stats',
    options: {
      method: 'GET',
      headers: {
        authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    }

  }
}