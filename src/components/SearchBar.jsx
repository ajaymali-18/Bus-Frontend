import React, { useState, useRef } from "react";
import { Bus, MapPin, Calendar, Search } from "lucide-react";
import SearchBarBackgroundImage from "../assets/SearchBarBackgroundImage.jpg";
import "./SearchBar.css";

const BusSearch = () => {
    const today = new Date().toISOString().split("T")[0];
    const [aiQuery, setAiQuery] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState(today);

    const dateInputRef = useRef(null);

    // Open calendar popup
    const openCalendar = () => {
        if (dateInputRef.current?.showPicker) {
            dateInputRef.current.showPicker();
        } else {
            dateInputRef.current.focus();
        }
    };

    // Simple local AI parser (no backend needed)
    const parseAiQuery = (query) => {
        let q = query.toLowerCase();

        // detect date
        let foundDate = today;
        if (q.includes("tomorrow")) {
            foundDate = new Date(Date.now() + 86400000)
                .toISOString()
                .split("T")[0];
        }

        // detect from-to
        let fromResult = "";
        let toResult = "";

        let pattern = /from\s+([a-z\s]+?)\s+to\s+([a-z\s]+)/i;
        let match = q.match(pattern);

        if (match) {
            fromResult = match[1].trim();
            toResult = match[2].trim();
        } else {
            // fallback "pune to goa"
            let simple = q.match(/([a-z\s]+)\s+to\s+([a-z\s]+)/i);
            if (simple) {
                fromResult = simple[1].trim();
                toResult = simple[2].trim();
            }
        }

        return {
            from: fromResult,
            to: toResult,
            date: foundDate,
        };
    };

    // AI Search Action
    const handleAiSearch = (e) => {
        e.preventDefault();

        const parsed = parseAiQuery(aiQuery);
        if (parsed.from) setFrom(capitalize(parsed.from));
        if (parsed.to) setTo(capitalize(parsed.to));
        if (parsed.date) setDate(parsed.date);
    };

    const capitalize = (str) =>
        str
            .split(" ")
            .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
            .join(" ");

    return (
        <div className="hero-container">
            {/* Background */}
            <div
                className="hero-background"
                style={{ backgroundImage: `url(${SearchBarBackgroundImage})` }}
            >
                <div className="hero-overlay" />
            </div>

            {/* Content */}
            <div className="hero-content">
                <h1 className="hero-title">
                    Book the tickets, <br />
                    before the{" "}
                    <span
                        style={{
                            background: "linear-gradient(90deg, #6fddecff, #c7d6e7ff)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontWeight: 700
                        }}
                    >
                        Goa plan
                    </span>{" "}
                    gets cancelled.
                </h1>


                {/* AI Search Bar */}
                <form className="ai-search-bar" onSubmit={handleAiSearch}>
                    <Search className="ai-icon" />
                    <input
                        type="text"
                        className="ai-input"
                        placeholder='Ask AI: "Show me buses from Pune to Goa tomorrow"'
                        value={aiQuery}
                        onChange={(e) => setAiQuery(e.target.value)}
                    />
                    <button type="submit" className="ai-go-btn">
                        Search
                    </button>
                </form>

                {/* Normal Search */}
                <div className="search-widget">
                    {/* FROM */}
                    <div className="input-group">
                        <Bus className="input-icon" />
                        <div className="input-wrapper">
                            <label className="input-label">From</label>
                            <input
                                type="text"
                                placeholder="Enter City"
                                className="search-input"
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* TO */}
                    <div className="input-group">
                        <MapPin className="input-icon" />
                        <div className="input-wrapper">
                            <label className="input-label">To</label>
                            <input
                                type="text"
                                placeholder="Enter Destination"
                                className="search-input"
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* DATE */}
                    <div className="input-group" onClick={openCalendar}>
                        <Calendar className="input-icon" />
                        <div className="input-wrapper">
                            <label className="input-label">Date of Journey</label>

                            <div style={{ position: "relative" }}>
                                <span className="search-input inline-date">{date}</span>

                                <input
                                    ref={dateInputRef}
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    style={{
                                        position: "absolute",
                                        opacity: 0,
                                        width: "0",
                                        height: "0",
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <button className="search-btn">SEARCH BUSES</button>
                </div>
            </div>
        </div>
    );
};

export default BusSearch;
