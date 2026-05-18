import { createContext, useContext, useState } from "react"

const FavoritosContext = createContext()

export function FavoritosProvider({children}){
    const [favoritos, setFavoritos] = useState([])

    const agregarFavoritos = (curso) =>{
        const yaExiste = favoritos.some(
            (favorito) => favorito.id === curso.id
        )

        if(!yaExiste){
            setFavoritos([...favoritos, curso])
        }
    }

    const estaEnFavoritos = (id) =>{
        //este era el error llamaba erroneamente la misma funcion cuando 
        //debia de ser a la variable de useState
        /*return estaEnFavoritos.some((favorito) => favorito.id === id)*/
        return favoritos.some((favorito) => favorito.id === id)
    }

    return(
        <FavoritosContext.Provider
            value={{
                favoritos,
                agregarFavoritos,
                estaEnFavoritos
            }}
        >
            {children}
        </FavoritosContext.Provider>
    )
}

//es el hook
export function useFavoritos(){
    return useContext(FavoritosContext)
}