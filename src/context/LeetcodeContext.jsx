import { createContext, useState, useEffect } from "react";

export const LeetcodeContext = createContext(null)

export function LeetcodeDataProvider({children}) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchLeetcodeData = async () => {
        try {
            setLoading(true)
            const response = await fetch("https://leetcode-stats-api-five.vercel.app/api/v1/leetcode/bibhabasu_11/all")
            const leetcodeData = await response.json();
            setData(leetcodeData) 
        } catch (err) {
            console.log("error fetching data", err)
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchLeetcodeData()
    },[])

    if (data && !loading){
        console.log(data)
    }


    return (
        <LeetcodeContext.Provider value={{data, loading, error}}>{children}</LeetcodeContext.Provider>
    )
}