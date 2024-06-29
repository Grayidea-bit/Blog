import { Dispatch, SetStateAction, createContext, useState } from "react"

interface PageContextType{
  Page: string;
  SetPage: Dispatch<SetStateAction<string>>;
}

export const PageContext = createContext<PageContextType>({Page:"Home",SetPage:()=>{}});

const PageControl = ({children}) => {
  const [Page,SetPage] = useState("Home");
  return(
    <PageContext.Provider value={{Page,SetPage}}>
      {children}
    </PageContext.Provider>
  )
}
export default PageControl
