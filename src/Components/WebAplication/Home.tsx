import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/Auth/AuthContext'

export default function Home() {
  const auth = useContext(AuthContext);
  
  const handleLogout = async ()=>{
    await auth.signOut()
  }
  return (
    <div>
        <h1>
            Pagina inicial
        </h1>
        {auth.user && <button onClick={handleLogout}>Sair</button>}
    </div>
  )
}
