
import {  useState } from "react"
import axios from "axios"

const useFetch = url => {

  const [state, setState] = useState()
  const [hasError, setHasError] = useState(false)

  const getData = () => {
    axios.get(url)
    .then(res => {setState(res.data)
    setHasError(false)
    })



    .catch(err => {console.log(err)
    setHasError(true)
    })

  }

  return [ state, getData, hasError]


}

export default useFetch