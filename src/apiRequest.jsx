

const apiRequest = async (url='', optionsObj=null,errMsg=null) => {
  try{
    const response= await fetch(url,optionsObj)
    if(!response.ok) throw Error('Did not receive expected data')


  }catch(err){
      errMsg=err.message
      return errMsg
  }finally{
    

  }


  
}

export default apiRequest
