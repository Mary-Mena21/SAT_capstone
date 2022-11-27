import { useState } from "react"
import { StudentsCopy } from "./StudentsCopy"
import { StudentSearch } from "./StudentSearch"

export const StudentContainer = () => {
    const [searchTerms, setSearchTerms]= useState("")
    return (
        <>
            <StudentSearch setterFunction={setSearchTerms } />
            <StudentsCopy searchTermState={ searchTerms} />
        </>
    )
}