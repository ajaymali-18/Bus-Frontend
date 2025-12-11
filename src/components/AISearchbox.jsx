import React, { useState } from "react";
import { Search } from "lucide-react";

const AiSearch = () => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("AI search:", query);

        // 🔥 Later we will call Gemini here
        // navigate(`/results?query=${query}`);
    };

    return (
        <div style={{ padding: "40px", maxWidth: "700px", margin: "auto" }}>
            <h1 style={{ marginBottom: "20px" }}>Ask AI for Bus Search</h1>

            <form
                onSubmit={handleSearch}
                style={{
                    display: "flex",
                    gap: "10px",
                    padding: "14px 20px",
                    background: "#fff",
                    borderRadius: "40px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
                }}
            >
                <Search />
                <input
                    type="text"
                    placeholder='Try: "Show me buses from Pune to Goa tomorrow"'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{
                        flex: 1,
                        border: "none",
                        outline: "none",
                        fontSize: "16px"
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "10px 18px",
                        borderRadius: "20px",
                        border: "none",
                        background: "#d84f4f",
                        color: "#fff",
                        cursor: "pointer"
                    }}>
                    Search
                </button>
            </form>
        </div>
    );
};

export default AiSearch;
