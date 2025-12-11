import React from 'react'
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
function Home() {
    return (
        <div>
            <Navbar />
            <SearchBar />
            <FAQ />

        </div>
    )
}

export default Home